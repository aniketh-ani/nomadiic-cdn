var Np=Object.defineProperty;var Xh=(i,e)=>()=>(i&&(e=i(i=0)),e);var Fp=(i,e)=>{for(var t in e)Np(i,t,{get:e[t],enumerable:!0})};function Ai(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function mn(i,e,t){return Math.max(e,Math.min(t,i))}function ih(i,e){return(i%e+e)%e}function x0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function y0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ma(i,e,t){return(1-t)*i+t*e}function _0(i,e,t,n){return Ma(i,e,1-Math.exp(-t*n))}function M0(i,e=1){return e-Math.abs(ih(i,e*2)-e)}function w0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function b0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function S0(i,e){return i+Math.random()*(e-i)}function T0(i){return i*(.5-Math.random())}function A0(i){i!==void 0&&(Qh=i);let e=Qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R0(i){return i*_a}function C0(i){return i*Ta}function P0(i){return(i&i-1)===0&&i!==0}function I0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function D0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Cf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function U0(){let i=Aa("canvas");return i.style.display="block",i}function xa(i){i in ed||(ed[i]=!0,console.warn(i))}function N0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function F0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function z0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?au.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Gl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ls.fromArray(i,r);let o=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),l=e.dot(Ls),c=t.dot(Ls),u=n.dot(Ls);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Z0(i,e,t,n,s,r,a,o){let l;if(e.side===Bt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ri,o),l===null)return null;go.copy(o),go.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:i}}function vo(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ho),i.getVertexPosition(l,fo),i.getVertexPosition(c,po);let u=Z0(i,e,t,n,ho,fo,po,vd);if(u){let h=new R;fs.getBarycoord(vd,ho,fo,po,h),s&&(u.uv=fs.getInterpolatedAttribute(s,o,l,c,h,new re)),r&&(u.uv1=fs.getInterpolatedAttribute(r,o,l,c,h,new re)),a&&(u.normal=fs.getInterpolatedAttribute(a,o,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};fs.getNormal(ho,fo,po,d.normal),u.face=d,u.barycoord=h}return u}function Ur(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=Ur(i[t]);for(let s in n)e[s]=n[s]}return e}function $0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function If(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}function Lf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function Fv(i,e,t,n,s,r,a){let o=new xe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function x(w){let M=!1,v=g(w);v===null?p(o,l):v&&v.isColor&&(p(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===cl)?(u===void 0&&(u=new ge(new gn(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Ur(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ns.copy(M.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(Ns)),u.material.toneMapped=mt.getTransfer(v.colorSpace)!==Ct,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ge(new Et(2,2),new Te({name:"BackgroundMaterial",uniforms:Ur(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==Ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,M){w.getRGB(yo,If(i)),n.buffers.color.setClear(yo.r,yo.g,yo.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(w,M=1){o.set(w),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:m}}function zv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,C,P,D,N){let H=!1,F=h(D,P,C);r!==F&&(r=F,c(r.object)),H=f(y,D,P,N),H&&g(y,D,P,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(y,C,P,D),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,C,P){let D=P.wireframe===!0,N=n[y.id];N===void 0&&(N={},n[y.id]=N);let H=N[C.id];H===void 0&&(H={},N[C.id]=H);let F=H[D];return F===void 0&&(F=d(l()),H[D]=F),F}function d(y){let C=[],P=[],D=[];for(let N=0;N<t;N++)C[N]=0,P[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,C,P,D){let N=r.attributes,H=C.attributes,F=0,B=P.getAttributes();for(let z in B)if(B[z].location>=0){let Z=N[z],se=H[z];if(se===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;F++}return r.attributesNum!==F||r.index!==D}function g(y,C,P,D){let N={},H=C.attributes,F=0,B=P.getAttributes();for(let z in B)if(B[z].location>=0){let Z=H[z];Z===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));let se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),N[z]=se,F++}r.attributes=N,r.attributesNum=F,r.index=D}function x(){let y=r.newAttributes;for(let C=0,P=y.length;C<P;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){let P=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;P[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),N[y]!==C&&(i.vertexAttribDivisor(y,C),N[y]=C)}function w(){let y=r.newAttributes,C=r.enabledAttributes;for(let P=0,D=C.length;P<D;P++)C[P]!==y[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function M(y,C,P,D,N,H,F){F===!0?i.vertexAttribIPointer(y,C,P,N,H):i.vertexAttribPointer(y,C,P,D,N,H)}function v(y,C,P,D){x();let N=D.attributes,H=P.getAttributes(),F=C.defaultAttributeValues;for(let B in H){let z=H[B];if(z.location>=0){let O=N[B];if(O===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),O!==void 0){let Z=O.normalized,se=O.itemSize,de=e.get(O);if(de===void 0)continue;let we=de.buffer,X=de.type,ee=de.bytesPerElement,ae=X===i.INT||X===i.UNSIGNED_INT||O.gpuType===Zu;if(O.isInterleavedBufferAttribute){let q=O.data,Y=q.stride,ye=O.offset;if(q.isInstancedInterleavedBuffer){for(let me=0;me<z.locationSize;me++)p(z.location+me,q.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let me=0;me<z.locationSize;me++)m(z.location+me);i.bindBuffer(i.ARRAY_BUFFER,we);for(let me=0;me<z.locationSize;me++)M(z.location+me,se/z.locationSize,X,Z,Y*ee,(ye+se/z.locationSize*me)*ee,ae)}else{if(O.isInstancedBufferAttribute){for(let q=0;q<z.locationSize;q++)p(z.location+q,O.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let q=0;q<z.locationSize;q++)m(z.location+q);i.bindBuffer(i.ARRAY_BUFFER,we);for(let q=0;q<z.locationSize;q++)M(z.location+q,se/z.locationSize,X,Z,se*ee,se/z.locationSize*q*ee,ae)}}else if(F!==void 0){let Z=F[B];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(z.location,Z);break;case 3:i.vertexAttrib3fv(z.location,Z);break;case 4:i.vertexAttrib4fv(z.location,Z);break;default:i.vertexAttrib1fv(z.location,Z)}}}}w()}function S(){T();for(let y in n){let C=n[y];for(let P in C){let D=C[P];for(let N in D)u(D[N].object),delete D[N];delete C[P]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let P in C){let D=C[P];for(let N in D)u(D[N].object),delete D[N];delete C[P]}delete n[y.id]}function E(y){for(let C in n){let P=n[C];if(P[y.id]===void 0)continue;let D=P[y.id];for(let N in D)u(D[N].object),delete D[N];delete P[y.id]}}function T(){_(),a=!0,r!==s&&(r=s,c(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function Hv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==_i&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let T=E===qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ji&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ti&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:S,maxSamples:b}}function Ov(i){let e=this,t=null,n=0,s=!1,r=!1,a=new jn,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,M=w*4,v=p.clippingState||null;l.value=v,v=u(g,d,M,f);for(let S=0;S!==M;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)a.copy(h[M]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function kv(i){let e=new WeakMap;function t(a,o){return o===Cc?a.mapping=Cr:o===Pc&&(a.mapping=Pr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Cc||o===Pc)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Gs(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Vv(i){let e=[],t=[],n=[],s=i,r=i-Er+1+_d.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Er?l=_d[a-i+Er-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let b=0;b<f;b++){let E=b%3*2/3-1,T=b>2?0:-1,_=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];w.set(_,x*g*b),M.set(d,m*g*b);let y=[b,b,b,b,b,b];v.set(y,p*g*b)}let S=new Ye;S.setAttribute("position",new Je(w,x)),S.setAttribute("uv",new Je(M,m)),S.setAttribute("faceIndex",new Je(v,p)),e.push(S),s>Er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ed(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wv(i,e,t){let n=new Float32Array(Bs),s=new R(0,1,0);return new Te({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function bd(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Sd(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function Gv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Cc||l===Pc,u=l===Cr||l===Pr;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xs(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new xs(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&xa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qv(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let M=0,v=w.length;M<v;M+=3){let S=w[M+0],b=w[M+1],E=w[M+2];d.push(S,b,b,E,E,S)}}else if(g!==void 0){let w=g.array;x=g.version;for(let M=0,v=w.length/3-1;M<v;M+=3){let S=M+0,b=M+1,E=M+2;d.push(S,b,b,E,E,S)}}else return;let m=new(Cf(d)?Xo:Go)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Yv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zv(i,e,t){let n=new WeakMap,s=new je;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let _=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=o.attributes.position.count*M,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*S*4*h),E=new Wo(b,v,S,h);E.type=Ti,E.needsUpdate=!0;let T=M*4;for(let y=0;y<h;y++){let C=m[y],P=p[y],D=w[y],N=v*S*4*y;for(let H=0;H<C.count;H++){let F=H*T;f===!0&&(s.fromBufferAttribute(C,H),b[N+F+0]=s.x,b[N+F+1]=s.y,b[N+F+2]=s.z,b[N+F+3]=0),g===!0&&(s.fromBufferAttribute(P,H),b[N+F+4]=s.x,b[N+F+5]=s.y,b[N+F+6]=s.z,b[N+F+7]=0),x===!0&&(s.fromBufferAttribute(D,H),b[N+F+8]=s.x,b[N+F+9]=s.y,b[N+F+10]=s.z,b[N+F+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new re(v,S)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $v(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hl(i,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function Qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Id.set(n),i.uniformMatrix2fv(this.addr,!1,Id),hn(t,n)}}function nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Pd.set(n),i.uniformMatrix3fv(this.addr,!1,Pd),hn(t,n)}}function ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),hn(t,n)}}function sx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Td.compareFunction=Af,r=Td):r=Df,t.setTexture2D(e||r,s)}function fx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nf,s)}function px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ff,s)}function mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uf,s)}function gx(i){switch(i){case 5126:return Jv;case 35664:return jv;case 35665:return Qv;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return ux;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function vx(i,e){i.uniform1fv(this.addr,e)}function xx(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function yx(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function _x(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Mx(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wx(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ex(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bx(i,e){i.uniform1iv(this.addr,e)}function Sx(i,e){i.uniform2iv(this.addr,e)}function Tx(i,e){i.uniform3iv(this.addr,e)}function Ax(i,e){i.uniform4iv(this.addr,e)}function Rx(i,e){i.uniform1uiv(this.addr,e)}function Cx(i,e){i.uniform2uiv(this.addr,e)}function Px(i,e){i.uniform3uiv(this.addr,e)}function Ix(i,e){i.uniform4uiv(this.addr,e)}function Lx(i,e,t){let n=this.cache,s=e.length,r=hl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Df,r[a])}function Dx(i,e,t){let n=this.cache,s=e.length,r=hl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nf,r[a])}function Ux(i,e,t){let n=this.cache,s=e.length,r=hl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ff,r[a])}function Nx(i,e,t){let n=this.cache,s=e.length,r=hl(t,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uf,r[a])}function Fx(i){switch(i){case 5126:return vx;case 35664:return xx;case 35665:return yx;case 35666:return _x;case 35674:return Mx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ax;case 5125:return Rx;case 36294:return Cx;case 36295:return Px;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}function Ld(i,e){i.seq.push(e),i.map[e.id]=e}function zx(i,e,t){let n=i.name,s=n.length;for(dc.lastIndex=0;;){let r=dc.exec(n),a=dc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ld(t,c===void 0?new cu(o,i,e):new uu(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new hu(o),Ld(t,h)),t=h}}}function Dd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Ox(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function kx(i){mt._getMatrix(Ud,mt.workingColorSpace,i);let e=`mat3( ${Ud.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case ul:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ox(i.getShaderSource(e),a)}else return s}function Vx(i,e){let t=kx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wx(i,e){let t;switch(e){case Gu:t="Linear";break;case Xu:t="Reinhard";break;case qu:t="Cineon";break;case Yu:t="ACESFilmic";break;case Zs:t="AgX";break;case Ku:t="Neutral";break;case a0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gx(){mt.getLuminanceCoefficients(Mo);let i=Mo.x.toFixed(4),e=Mo.y.toFixed(4),t=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function qx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ya(i){return i!==""}function Fd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function du(i){return i.replace(Kx,$x)}function $x(i,e){let t=dt[e];if(t===void 0){let n=Zx.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return du(t)}function Hd(i){return i.replace(Jx,jx)}function jx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Qx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===df?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function ey(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cr:case Pr:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ty(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pr:e="ENVMAP_MODE_REFRACTION";break}return e}function ny(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ff:e="ENVMAP_BLENDING_MULTIPLY";break;case s0:e="ENVMAP_BLENDING_MIX";break;case r0:e="ENVMAP_BLENDING_ADD";break}return e}function iy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Qx(t),c=ey(t),u=ty(t),h=ny(t),d=iy(t),f=Xx(t),g=qx(r),x=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(m=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[Bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?dt.tonemapping_pars_fragment:"",t.toneMapping!==ms?Wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),Gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=du(a),a=Fd(a,t),a=zd(a,t),o=du(o),o=Fd(o,t),o=zd(o,t),a=Hd(a),o=Hd(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=w+m+a,v=w+p+o,S=Dd(s,s.VERTEX_SHADER,M),b=Dd(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(S).trim(),N=s.getShaderInfoLog(b).trim(),H=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,b);else{let B=Nd(s,S,"vertex"),z=Nd(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+B+`
`+z)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||N==="")&&(F=!1);F&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(S),s.deleteShader(b),T=new Ar(s,x),_=Yx(s,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Hx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}function ay(i,e,t,n,s,r,a){let o=new Ra,l=new fu,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,C,P,D){let N=P.fog,H=D.geometry,F=_.isMeshStandardMaterial?P.environment:null,B=(_.isMeshStandardMaterial?t:e).get(_.envMap||F),z=B&&B.mapping===cl?B.image.height:null,O=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Z!==void 0?Z.length:0,de=0;H.morphAttributes.position!==void 0&&(de=1),H.morphAttributes.normal!==void 0&&(de=2),H.morphAttributes.color!==void 0&&(de=3);let we,X,ee,ae;if(O){let _t=Si[O];we=_t.vertexShader,X=_t.fragmentShader}else we=_.vertexShader,X=_.fragmentShader,l.update(_),ee=l.getVertexShaderID(_),ae=l.getFragmentShaderID(_);let q=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),ye=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Ee=!!_.map,Q=!!_.matcap,he=!!B,U=!!_.aoMap,ve=!!_.lightMap,ue=!!_.bumpMap,_e=!!_.normalMap,J=!!_.displacementMap,Se=!!_.emissiveMap,fe=!!_.metalnessMap,L=!!_.roughnessMap,A=_.anisotropy>0,k=_.clearcoat>0,te=_.dispersion>0,pe=_.iridescence>0,ie=_.sheen>0,Le=_.transmission>0,Ae=A&&!!_.anisotropyMap,Pe=k&&!!_.clearcoatMap,et=k&&!!_.clearcoatNormalMap,Me=k&&!!_.clearcoatRoughnessMap,Fe=pe&&!!_.iridescenceMap,Ke=pe&&!!_.iridescenceThicknessMap,Ze=ie&&!!_.sheenColorMap,Ne=ie&&!!_.sheenRoughnessMap,ot=!!_.specularMap,lt=!!_.specularColorMap,Tt=!!_.specularIntensityMap,V=Le&&!!_.transmissionMap,De=Le&&!!_.thicknessMap,ne=!!_.gradientMap,le=!!_.alphaMap,Ue=_.alphaTest>0,Re=!!_.alphaHash,ze=!!_.extensions,At=ms;_.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(At=i.toneMapping);let sn={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:we,fragmentShader:X,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:ye,instancingColor:ye&&D.instanceColor!==null,instancingMorph:ye&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Kr,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:Q,envMap:he,envMapMode:he&&B.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:ve,bumpMap:ue,normalMap:_e,displacementMap:d&&J,emissiveMap:Se,normalMapObjectSpace:_e&&_.normalMapType===u0,normalMapTangentSpace:_e&&_.normalMapType===Tf,metalnessMap:fe,roughnessMap:L,anisotropy:A,anisotropyMap:Ae,clearcoat:k,clearcoatMap:Pe,clearcoatNormalMap:et,clearcoatRoughnessMap:Me,dispersion:te,iridescence:pe,iridescenceMap:Fe,iridescenceThicknessMap:Ke,sheen:ie,sheenColorMap:Ze,sheenRoughnessMap:Ne,specularMap:ot,specularColorMap:lt,specularIntensityMap:Tt,transmission:Le,transmissionMap:V,thicknessMap:De,gradientMap:ne,opaque:_.transparent===!1&&_.blending===ps&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:Ue,alphaHash:Re,combine:_.combine,mapUv:Ee&&x(_.map.channel),aoMapUv:U&&x(_.aoMap.channel),lightMapUv:ve&&x(_.lightMap.channel),bumpMapUv:ue&&x(_.bumpMap.channel),normalMapUv:_e&&x(_.normalMap.channel),displacementMapUv:J&&x(_.displacementMap.channel),emissiveMapUv:Se&&x(_.emissiveMap.channel),metalnessMapUv:fe&&x(_.metalnessMap.channel),roughnessMapUv:L&&x(_.roughnessMap.channel),anisotropyMapUv:Ae&&x(_.anisotropyMap.channel),clearcoatMapUv:Pe&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(_.sheenRoughnessMap.channel),specularMapUv:ot&&x(_.specularMap.channel),specularColorMapUv:lt&&x(_.specularColorMap.channel),specularIntensityMapUv:Tt&&x(_.specularIntensityMap.channel),transmissionMapUv:V&&x(_.transmissionMap.channel),thicknessMapUv:De&&x(_.thicknessMap.channel),alphaMapUv:le&&x(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(_e||A),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Ee||le),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Y,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:de,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===Ct,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&mt.getTransfer(_.emissiveMap.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ft,flipSided:_.side===Bt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ze&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&_.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return sn.vertexUv1s=c.has(1),sn.vertexUv2s=c.has(2),sn.vertexUv3s=c.has(3),c.clear(),sn}function p(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(w(y,_),M(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function w(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){let y=g[_.type],C;if(y){let P=Si[y];C=Li.clone(P.uniforms)}else C=_.uniforms;return C}function S(_,y){let C;for(let P=0,D=u.length;P<D;P++){let N=u[P];if(N.cacheKey===y){C=N,++C.usedTimes;break}}return C===void 0&&(C=new sy(i,y,_,r),u.push(C)),C}function b(_){if(--_.usedTimes===0){let y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function E(_){l.remove(_)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:T}}function oy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ly(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||ly),n.length>1&&n.sort(d||Od),s.length>1&&s.sort(d||Od)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function cy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new kd,i.set(n,[a])):s>=r.length?(a=new kd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function uy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function py(i){let e=new uy,t=hy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new $e,a=new $e;function o(c){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,M=0,v=0,S=0,b=0,E=0;c.sort(fy);for(let _=0,y=c.length;_<y;_++){let C=c[_],P=C.color,D=C.intensity,N=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=P.r*D,h+=P.g*D,d+=P.b*D;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],D);E++}else if(C.isDirectionalLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,z=t.get(C);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=F,f++}else if(C.isSpotLight){let F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(P).multiplyScalar(D),F.distance=N,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[x]=F;let B=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,B.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[x]=B.matrix,C.castShadow){let z=t.get(C);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=H,v++}x++}else if(C.isRectAreaLight){let F=e.get(C);F.color.copy(P).multiplyScalar(D),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=F,m++}else if(C.isPointLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let B=C.shadow,z=t.get(C);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=F,g++}else if(C.isHemisphereLight){let F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(D),F.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==w||T.numPointShadows!==M||T.numSpotShadows!==v||T.numSpotMaps!==S||T.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+S-b,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,T.directionalLength=f,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=w,T.numPointShadows=M,T.numSpotShadows=v,T.numSpotMaps=S,T.numLightProbes=E,n.version=dy++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let M=c[p];if(M.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Vd(i){let e=new py(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function my(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vd(i),e.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function xy(i,e,t){let n=new Xs,s=new re,r=new re,a=new je,o=new mu({depthPacking:c0}),l=new gu,c={},u=t.maxTextureSize,h={[Ri]:Bt,[Bt]:Ri,[ft]:ft},d=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:gy,fragmentShader:vy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=df;let p=this.type;this.render=function(b,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let _=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(oi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let D=p!==Zi&&this.type===Zi,N=p===Zi&&this.type!==Zi;for(let H=0,F=b.length;H<F;H++){let B=b[H],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let O=z.getFrameExtents();if(s.multiply(O),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/O.x),s.x=r.x*O.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/O.y),s.y=r.y*O.y,z.mapSize.y=r.y)),z.map===null||D===!0||N===!0){let se=this.type!==Zi?{minFilter:ei,magFilter:ei}:{};z.map!==null&&z.map.dispose(),z.map=new Vt(s.x,s.y,se),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let Z=z.getViewportCount();for(let se=0;se<Z;se++){let de=z.getViewport(se);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),P.viewport(a),z.updateMatrices(B,se),n=z.getFrustum(),v(E,T,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Zi&&w(z,T),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,y,C)};function w(b,E){let T=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vt(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,T,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,T,f,x,null)}function M(b,E,T,_){let y=null,C=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=T.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let P=y.uuid,D=E.uuid,N=c[P];N===void 0&&(N={},c[P]=N);let H=N[D];H===void 0&&(H=y.clone(),N[D]=H,E.addEventListener("dispose",S)),y=H}if(y.visible=E.visible,y.wireframe=E.wireframe,_===Zi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let P=i.properties.get(y);P.light=T}return y}function v(b,E,T,_,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Zi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let D=e.update(b),N=b.material;if(Array.isArray(N)){let H=D.groups;for(let F=0,B=H.length;F<B;F++){let z=H[F],O=N[z.materialIndex];if(O&&O.visible){let Z=M(b,O,_,y);b.onBeforeShadow(i,b,E,T,D,Z,z),i.renderBufferDirect(T,null,D,Z,b,z),b.onAfterShadow(i,b,E,T,D,Z,z)}}}else if(N.visible){let H=M(b,N,_,y);b.onBeforeShadow(i,b,E,T,D,H,null),i.renderBufferDirect(T,null,D,H,b,null),b.onAfterShadow(i,b,E,T,D,H,null)}}let P=b.children;for(let D=0,N=P.length;D<N;D++)v(P[D],E,T,_,y)}function S(b){b.target.removeEventListener("dispose",S);for(let T in c){let _=c[T],y=b.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}function _y(i,e){function t(){let V=!1,De=new je,ne=null,le=new je(0,0,0,0);return{setMask:function(Ue){ne!==Ue&&!V&&(i.colorMask(Ue,Ue,Ue,Ue),ne=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,Re,ze,At,sn){sn===!0&&(Ue*=At,Re*=At,ze*=At),De.set(Ue,Re,ze,At),le.equals(De)===!1&&(i.clearColor(Ue,Re,ze,At),le.copy(De))},reset:function(){V=!1,ne=null,le.set(-1,0,0,0)}}}function n(){let V=!1,De=!1,ne=null,le=null,Ue=null;return{setReversed:function(Re){if(De!==Re){let ze=e.get("EXT_clip_control");De?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let At=Ue;Ue=null,this.setClear(At)}De=Re},getReversed:function(){return De},setTest:function(Re){Re?q(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(Re){ne!==Re&&!V&&(i.depthMask(Re),ne=Re)},setFunc:function(Re){if(De&&(Re=yy[Re]),le!==Re){switch(Re){case wc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Sc:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Re}},setLocked:function(Re){V=Re},setClear:function(Re){Ue!==Re&&(De&&(Re=1-Re),i.clearDepth(Re),Ue=Re)},reset:function(){V=!1,ne=null,le=null,Ue=null,De=!1}}}function s(){let V=!1,De=null,ne=null,le=null,Ue=null,Re=null,ze=null,At=null,sn=null;return{setTest:function(_t){V||(_t?q(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(_t){De!==_t&&!V&&(i.stencilMask(_t),De=_t)},setFunc:function(_t,rn,Un){(ne!==_t||le!==rn||Ue!==Un)&&(i.stencilFunc(_t,rn,Un),ne=_t,le=rn,Ue=Un)},setOp:function(_t,rn,Un){(Re!==_t||ze!==rn||At!==Un)&&(i.stencilOp(_t,rn,Un),Re=_t,ze=rn,At=Un)},setLocked:function(_t){V=_t},setClear:function(_t){sn!==_t&&(i.clearStencil(_t),sn=_t)},reset:function(){V=!1,De=null,ne=null,le=null,Ue=null,Re=null,ze=null,At=null,sn=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,M=null,v=null,S=null,b=null,E=new xe(0,0,0),T=0,_=!1,y=null,C=null,P=null,D=null,N=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,B=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=B>=2);let O=null,Z={},se=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),we=new je().fromArray(se),X=new je().fromArray(de);function ee(V,De,ne,le){let Ue=new Uint8Array(4),Re=i.createTexture();i.bindTexture(V,Re),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ne;ze++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(De+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Re}let ae={};ae[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc(Rr),ue(!1),_e(qh),q(i.CULL_FACE),U(oi);function q(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function Y(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function ye(V,De){return h[V]!==De?(i.bindFramebuffer(V,De),h[V]=De,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=De),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=De),!0):!1}function me(V,De){let ne=f,le=!1;if(V){ne=d.get(De),ne===void 0&&(ne=[],d.set(De,ne));let Ue=V.textures;if(ne.length!==Ue.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,ze=Ue.length;Re<ze;Re++)ne[Re]=i.COLOR_ATTACHMENT0+Re;ne.length=Ue.length,le=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,le=!0);le&&i.drawBuffers(ne)}function Ee(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let Q={[Hs]:i.FUNC_ADD,[kp]:i.FUNC_SUBTRACT,[Vp]:i.FUNC_REVERSE_SUBTRACT};Q[Wp]=i.MIN,Q[Gp]=i.MAX;let he={[Xp]:i.ZERO,[qp]:i.ONE,[Yp]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[Qp]:i.SRC_ALPHA_SATURATE,[Jp]:i.DST_COLOR,[Zp]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[Mc]:i.ONE_MINUS_SRC_ALPHA,[jp]:i.ONE_MINUS_DST_COLOR,[$p]:i.ONE_MINUS_DST_ALPHA,[e0]:i.CONSTANT_COLOR,[t0]:i.ONE_MINUS_CONSTANT_COLOR,[n0]:i.CONSTANT_ALPHA,[i0]:i.ONE_MINUS_CONSTANT_ALPHA};function U(V,De,ne,le,Ue,Re,ze,At,sn,_t){if(V===oi){x===!0&&(Y(i.BLEND),x=!1);return}if(x===!1&&(q(i.BLEND),x=!0),V!==Op){if(V!==m||_t!==_){if((p!==Hs||v!==Hs)&&(i.blendEquation(i.FUNC_ADD),p=Hs,v=Hs),_t)switch(V){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case St:i.blendFunc(i.ONE,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case St:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}w=null,M=null,S=null,b=null,E.set(0,0,0),T=0,m=V,_=_t}return}Ue=Ue||De,Re=Re||ne,ze=ze||le,(De!==p||Ue!==v)&&(i.blendEquationSeparate(Q[De],Q[Ue]),p=De,v=Ue),(ne!==w||le!==M||Re!==S||ze!==b)&&(i.blendFuncSeparate(he[ne],he[le],he[Re],he[ze]),w=ne,M=le,S=Re,b=ze),(At.equals(E)===!1||sn!==T)&&(i.blendColor(At.r,At.g,At.b,sn),E.copy(At),T=sn),m=V,_=!1}function ve(V,De){V.side===ft?Y(i.CULL_FACE):q(i.CULL_FACE);let ne=V.side===Bt;De&&(ne=!ne),ue(ne),V.blending===ps&&V.transparent===!1?U(oi):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let le=V.stencilWrite;o.setTest(le),le&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(V){y!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),y=V)}function _e(V){V!==zp?(q(i.CULL_FACE),V!==C&&(V===qh?i.cullFace(i.BACK):V===Hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),C=V}function J(V){V!==P&&(F&&i.lineWidth(V),P=V)}function Se(V,De,ne){V?(q(i.POLYGON_OFFSET_FILL),(D!==De||N!==ne)&&(i.polygonOffset(De,ne),D=De,N=ne)):Y(i.POLYGON_OFFSET_FILL)}function fe(V){V?q(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function L(V){V===void 0&&(V=i.TEXTURE0+H-1),O!==V&&(i.activeTexture(V),O=V)}function A(V,De,ne){ne===void 0&&(O===null?ne=i.TEXTURE0+H-1:ne=O);let le=Z[ne];le===void 0&&(le={type:void 0,texture:void 0},Z[ne]=le),(le.type!==V||le.texture!==De)&&(O!==ne&&(i.activeTexture(ne),O=ne),i.bindTexture(V,De||ae[V]),le.type=V,le.texture=De)}function k(){let V=Z[O];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(V){we.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),we.copy(V))}function Ne(V){X.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function ot(V,De){let ne=c.get(De);ne===void 0&&(ne=new WeakMap,c.set(De,ne));let le=ne.get(V);le===void 0&&(le=i.getUniformBlockIndex(De,V.name),ne.set(V,le))}function lt(V,De){let le=c.get(De).get(V);l.get(De)!==le&&(i.uniformBlockBinding(De,le,V.__bindingPointIndex),l.set(De,le))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},O=null,Z={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,M=null,v=null,S=null,b=null,E=new xe(0,0,0),T=0,_=!1,y=null,C=null,P=null,D=null,N=null,we.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:Y,bindFramebuffer:ye,drawBuffers:me,useProgram:Ee,setBlending:U,setMaterial:ve,setFlipSided:ue,setCullFace:_e,setLineWidth:J,setPolygonOffset:Se,setScissorTest:fe,activeTexture:L,bindTexture:A,unbindTexture:k,compressedTexImage2D:te,compressedTexImage3D:pe,texImage2D:Fe,texImage3D:Ke,updateUBOMapping:ot,uniformBlockBinding:lt,texStorage2D:et,texStorage3D:Me,texSubImage2D:ie,texSubImage3D:Le,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Pe,scissor:Ze,viewport:Ne,reset:Tt}}function Wd(i,e,t,n){let s=My(n);switch(t){case xf:return i*e;case _f:return i*e;case Mf:return i*e*2;case ju:return i*e/s.components*s.byteLength;case Qu:return i*e/s.components*s.byteLength;case wf:return i*e*2/s.components*s.byteLength;case eh:return i*e*2/s.components*s.byteLength;case yf:return i*e*3/s.components*s.byteLength;case _i:return i*e*4/s.components*s.byteLength;case th:return i*e*4/s.components*s.byteLength;case Uo:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fo:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:case Nc:return Math.max(i,16)*Math.max(e,8)/4;case Lc:case Uc:return Math.max(i,8)*Math.max(e,8)/2;case Fc:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Qc:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ef:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function My(i){switch(i){case ji:case mf:return{byteLength:1,components:1};case Sa:case gf:case qt:return{byteLength:2,components:1};case $u:case Ju:return{byteLength:2,components:4};case Vs:case Zu:case Ti:return{byteLength:4,components:1};case vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return f?new OffscreenCanvas(L,A):Aa("canvas")}function x(L,A,k){let te=1,pe=fe(L);if((pe.width>k||pe.height>k)&&(te=k/Math.max(pe.width,pe.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ie=Math.floor(te*pe.width),Le=Math.floor(te*pe.height);h===void 0&&(h=g(ie,Le));let Ae=A?g(ie,Le):h;return Ae.width=ie,Ae.height=Le,Ae.getContext("2d").drawImage(L,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ie+"x"+Le+")."),Ae}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,A,k,te,pe=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ie=A;if(A===i.RED&&(k===i.FLOAT&&(ie=i.R32F),k===i.HALF_FLOAT&&(ie=i.R16F),k===i.UNSIGNED_BYTE&&(ie=i.R8)),A===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.R8UI),k===i.UNSIGNED_SHORT&&(ie=i.R16UI),k===i.UNSIGNED_INT&&(ie=i.R32UI),k===i.BYTE&&(ie=i.R8I),k===i.SHORT&&(ie=i.R16I),k===i.INT&&(ie=i.R32I)),A===i.RG&&(k===i.FLOAT&&(ie=i.RG32F),k===i.HALF_FLOAT&&(ie=i.RG16F),k===i.UNSIGNED_BYTE&&(ie=i.RG8)),A===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RG8UI),k===i.UNSIGNED_SHORT&&(ie=i.RG16UI),k===i.UNSIGNED_INT&&(ie=i.RG32UI),k===i.BYTE&&(ie=i.RG8I),k===i.SHORT&&(ie=i.RG16I),k===i.INT&&(ie=i.RG32I)),A===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),k===i.UNSIGNED_INT&&(ie=i.RGB32UI),k===i.BYTE&&(ie=i.RGB8I),k===i.SHORT&&(ie=i.RGB16I),k===i.INT&&(ie=i.RGB32I)),A===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),k===i.UNSIGNED_INT&&(ie=i.RGBA32UI),k===i.BYTE&&(ie=i.RGBA8I),k===i.SHORT&&(ie=i.RGBA16I),k===i.INT&&(ie=i.RGBA32I)),A===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),A===i.RGBA){let Le=pe?ul:mt.getTransfer(te);k===i.FLOAT&&(ie=i.RGBA32F),k===i.HALF_FLOAT&&(ie=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ie=Le===Ct?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(L,A){let k;return L?A===null||A===Vs||A===Ir?k=i.DEPTH24_STENCIL8:A===Ti?k=i.DEPTH32F_STENCIL8:A===Sa&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Vs||A===Ir?k=i.DEPTH_COMPONENT24:A===Ti?k=i.DEPTH_COMPONENT32F:A===Sa&&(k=i.DEPTH_COMPONENT16),k}function S(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==ei&&L.minFilter!==$t?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function b(L){let A=L.target;A.removeEventListener("dispose",b),T(A),A.isVideoTexture&&u.delete(A)}function E(L){let A=L.target;A.removeEventListener("dispose",E),y(A)}function T(L){let A=n.get(L);if(A.__webglInit===void 0)return;let k=L.source,te=d.get(k);if(te){let pe=te[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&_(L),Object.keys(te).length===0&&d.delete(k)}n.remove(L)}function _(L){let A=n.get(L);i.deleteTexture(A.__webglTexture);let k=L.source,te=d.get(k);delete te[A.__cacheKey],a.memory.textures--}function y(L){let A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(A.__webglFramebuffer[te]))for(let pe=0;pe<A.__webglFramebuffer[te].length;pe++)i.deleteFramebuffer(A.__webglFramebuffer[te][pe]);else i.deleteFramebuffer(A.__webglFramebuffer[te]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[te])}else{if(Array.isArray(A.__webglFramebuffer))for(let te=0;te<A.__webglFramebuffer.length;te++)i.deleteFramebuffer(A.__webglFramebuffer[te]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let te=0;te<A.__webglColorRenderbuffer.length;te++)A.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[te]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let k=L.textures;for(let te=0,pe=k.length;te<pe;te++){let ie=n.get(k[te]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(k[te])}n.remove(L)}let C=0;function P(){C=0}function D(){let L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function N(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function H(L,A){let k=n.get(L);if(L.isVideoTexture&&J(L),L.isRenderTargetTexture===!1&&L.version>0&&k.__version!==L.version){let te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,L,A);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+A)}function F(L,A){let k=n.get(L);if(L.version>0&&k.__version!==L.version){X(k,L,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+A)}function B(L,A){let k=n.get(L);if(L.version>0&&k.__version!==L.version){X(k,L,A);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+A)}function z(L,A){let k=n.get(L);if(L.version>0&&k.__version!==L.version){ee(k,L,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+A)}let O={[ks]:i.REPEAT,[Os]:i.CLAMP_TO_EDGE,[Ic]:i.MIRRORED_REPEAT},Z={[ei]:i.NEAREST,[o0]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Bl]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},se={[h0]:i.NEVER,[v0]:i.ALWAYS,[d0]:i.LESS,[Af]:i.LEQUAL,[f0]:i.EQUAL,[g0]:i.GEQUAL,[p0]:i.GREATER,[m0]:i.NOTEQUAL};function de(L,A){if(A.type===Ti&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===$t||A.magFilter===Bl||A.magFilter===eo||A.magFilter===Qn||A.minFilter===$t||A.minFilter===Bl||A.minFilter===eo||A.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,O[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,O[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,O[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Z[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Z[A.minFilter]),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ei||A.minFilter!==eo&&A.minFilter!==Qn||A.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function we(L,A){let k=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",b));let te=A.source,pe=d.get(te);pe===void 0&&(pe={},d.set(te,pe));let ie=N(A);if(ie!==L.__cacheKey){pe[ie]===void 0&&(pe[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),pe[ie].usedTimes++;let Le=pe[L.__cacheKey];Le!==void 0&&(pe[L.__cacheKey].usedTimes--,Le.usedTimes===0&&_(A)),L.__cacheKey=ie,L.__webglTexture=pe[ie].texture}return k}function X(L,A,k){let te=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=i.TEXTURE_3D);let pe=we(L,A),ie=A.source;t.bindTexture(te,L.__webglTexture,i.TEXTURE0+k);let Le=n.get(ie);if(ie.version!==Le.__version||pe===!0){t.activeTexture(i.TEXTURE0+k);let Ae=mt.getPrimaries(mt.workingColorSpace),Pe=A.colorSpace===on?null:mt.getPrimaries(A.colorSpace),et=A.colorSpace===on||Ae===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Me=x(A.image,!1,s.maxTextureSize);Me=Se(A,Me);let Fe=r.convert(A.format,A.colorSpace),Ke=r.convert(A.type),Ze=M(A.internalFormat,Fe,Ke,A.colorSpace,A.isVideoTexture);de(te,A);let Ne,ot=A.mipmaps,lt=A.isVideoTexture!==!0,Tt=Le.__version===void 0||pe===!0,V=ie.dataReady,De=S(A,Me);if(A.isDepthTexture)Ze=v(A.format===Lr,A.type),Tt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,Ze,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,Ze,Me.width,Me.height,0,Fe,Ke,null));else if(A.isDataTexture)if(ot.length>0){lt&&Tt&&t.texStorage2D(i.TEXTURE_2D,De,Ze,ot[0].width,ot[0].height);for(let ne=0,le=ot.length;ne<le;ne++)Ne=ot[ne],lt?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ne.width,Ne.height,Fe,Ke,Ne.data):t.texImage2D(i.TEXTURE_2D,ne,Ze,Ne.width,Ne.height,0,Fe,Ke,Ne.data);A.generateMipmaps=!1}else lt?(Tt&&t.texStorage2D(i.TEXTURE_2D,De,Ze,Me.width,Me.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,Fe,Ke,Me.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,Me.width,Me.height,0,Fe,Ke,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ze,ot[0].width,ot[0].height,Me.depth);for(let ne=0,le=ot.length;ne<le;ne++)if(Ne=ot[ne],A.format!==_i)if(Fe!==null)if(lt){if(V)if(A.layerUpdates.size>0){let Ue=Wd(Ne.width,Ne.height,A.format,A.type);for(let Re of A.layerUpdates){let ze=Ne.data.subarray(Re*Ue/Ne.data.BYTES_PER_ELEMENT,(Re+1)*Ue/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Re,Ne.width,Ne.height,1,Fe,ze)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ne.width,Ne.height,Me.depth,Fe,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ze,Ne.width,Ne.height,Me.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,Ne.width,Ne.height,Me.depth,Fe,Ke,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ze,Ne.width,Ne.height,Me.depth,0,Fe,Ke,Ne.data)}else{lt&&Tt&&t.texStorage2D(i.TEXTURE_2D,De,Ze,ot[0].width,ot[0].height);for(let ne=0,le=ot.length;ne<le;ne++)Ne=ot[ne],A.format!==_i?Fe!==null?lt?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,Ne.width,Ne.height,Fe,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ze,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Ne.width,Ne.height,Fe,Ke,Ne.data):t.texImage2D(i.TEXTURE_2D,ne,Ze,Ne.width,Ne.height,0,Fe,Ke,Ne.data)}else if(A.isDataArrayTexture)if(lt){if(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Ze,Me.width,Me.height,Me.depth),V)if(A.layerUpdates.size>0){let ne=Wd(Me.width,Me.height,A.format,A.type);for(let le of A.layerUpdates){let Ue=Me.data.subarray(le*ne/Me.data.BYTES_PER_ELEMENT,(le+1)*ne/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,Me.width,Me.height,1,Fe,Ke,Ue)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Ke,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,Me.width,Me.height,Me.depth,0,Fe,Ke,Me.data);else if(A.isData3DTexture)lt?(Tt&&t.texStorage3D(i.TEXTURE_3D,De,Ze,Me.width,Me.height,Me.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Fe,Ke,Me.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,Me.width,Me.height,Me.depth,0,Fe,Ke,Me.data);else if(A.isFramebufferTexture){if(Tt)if(lt)t.texStorage2D(i.TEXTURE_2D,De,Ze,Me.width,Me.height);else{let ne=Me.width,le=Me.height;for(let Ue=0;Ue<De;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ze,ne,le,0,Fe,Ke,null),ne>>=1,le>>=1}}else if(ot.length>0){if(lt&&Tt){let ne=fe(ot[0]);t.texStorage2D(i.TEXTURE_2D,De,Ze,ne.width,ne.height)}for(let ne=0,le=ot.length;ne<le;ne++)Ne=ot[ne],lt?V&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Fe,Ke,Ne):t.texImage2D(i.TEXTURE_2D,ne,Ze,Fe,Ke,Ne);A.generateMipmaps=!1}else if(lt){if(Tt){let ne=fe(Me);t.texStorage2D(i.TEXTURE_2D,De,Ze,ne.width,ne.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Ke,Me)}else t.texImage2D(i.TEXTURE_2D,0,Ze,Fe,Ke,Me);m(A)&&p(te),Le.__version=ie.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ee(L,A,k){if(A.image.length!==6)return;let te=we(L,A),pe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+k);let ie=n.get(pe);if(pe.version!==ie.__version||te===!0){t.activeTexture(i.TEXTURE0+k);let Le=mt.getPrimaries(mt.workingColorSpace),Ae=A.colorSpace===on?null:mt.getPrimaries(A.colorSpace),Pe=A.colorSpace===on||Le===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let et=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let le=0;le<6;le++)!et&&!Me?Fe[le]=x(A.image[le],!0,s.maxCubemapSize):Fe[le]=Me?A.image[le].image:A.image[le],Fe[le]=Se(A,Fe[le]);let Ke=Fe[0],Ze=r.convert(A.format,A.colorSpace),Ne=r.convert(A.type),ot=M(A.internalFormat,Ze,Ne,A.colorSpace),lt=A.isVideoTexture!==!0,Tt=ie.__version===void 0||te===!0,V=pe.dataReady,De=S(A,Ke);de(i.TEXTURE_CUBE_MAP,A);let ne;if(et){lt&&Tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ot,Ke.width,Ke.height);for(let le=0;le<6;le++){ne=Fe[le].mipmaps;for(let Ue=0;Ue<ne.length;Ue++){let Re=ne[Ue];A.format!==_i?Ze!==null?lt?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Re.width,Re.height,Ze,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,ot,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,0,0,Re.width,Re.height,Ze,Ne,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue,ot,Re.width,Re.height,0,Ze,Ne,Re.data)}}}else{if(ne=A.mipmaps,lt&&Tt){ne.length>0&&De++;let le=fe(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ot,le.width,le.height)}for(let le=0;le<6;le++)if(Me){lt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe[le].width,Fe[le].height,Ze,Ne,Fe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ot,Fe[le].width,Fe[le].height,0,Ze,Ne,Fe[le].data);for(let Ue=0;Ue<ne.length;Ue++){let ze=ne[Ue].image[le].image;lt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,ze.width,ze.height,Ze,Ne,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,ot,ze.width,ze.height,0,Ze,Ne,ze.data)}}else{lt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ze,Ne,Fe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ot,Ze,Ne,Fe[le]);for(let Ue=0;Ue<ne.length;Ue++){let Re=ne[Ue];lt?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,0,0,Ze,Ne,Re.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ue+1,ot,Ze,Ne,Re.image[le])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),ie.__version=pe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ae(L,A,k,te,pe,ie){let Le=r.convert(k.format,k.colorSpace),Ae=r.convert(k.type),Pe=M(k.internalFormat,Le,Ae,k.colorSpace),et=n.get(A),Me=n.get(k);if(Me.__renderTarget=A,!et.__hasExternalTextures){let Fe=Math.max(1,A.width>>ie),Ke=Math.max(1,A.height>>ie);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,ie,Pe,Fe,Ke,A.depth,0,Le,Ae,null):t.texImage2D(pe,ie,Pe,Fe,Ke,0,Le,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),_e(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,pe,Me.__webglTexture,0,ue(A)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,pe,Me.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(L,A,k){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer){let te=A.depthTexture,pe=te&&te.isDepthTexture?te.type:null,ie=v(A.stencilBuffer,pe),Le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=ue(A);_e(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,ie,A.width,A.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,ie,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,L)}else{let te=A.textures;for(let pe=0;pe<te.length;pe++){let ie=te[pe],Le=r.convert(ie.format,ie.colorSpace),Ae=r.convert(ie.type),Pe=M(ie.internalFormat,Le,Ae,ie.colorSpace),et=ue(A);k&&_e(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Pe,A.width,A.height):_e(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Pe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(A.depthTexture);te.__renderTarget=A,(!te.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);let pe=te.__webglTexture,ie=ue(A);if(A.depthTexture.format===Sr)_e(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(A.depthTexture.format===Lr)_e(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ye(L){let A=n.get(L),k=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let te=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),te){let pe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,te.removeEventListener("dispose",pe)};te.addEventListener("dispose",pe),A.__depthDisposeCallback=pe}A.__boundDepthTexture=te}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Y(A.__webglFramebuffer,L)}else if(k){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]===void 0)A.__webglDepthbuffer[te]=i.createRenderbuffer(),q(A.__webglDepthbuffer[te],L,!1);else{let pe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),q(A.__webglDepthbuffer,L,!1);else{let te=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(L,A,k){let te=n.get(L);A!==void 0&&ae(te.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ye(L)}function Ee(L){let A=L.texture,k=n.get(L),te=n.get(A);L.addEventListener("dispose",E);let pe=L.textures,ie=L.isWebGLCubeRenderTarget===!0,Le=pe.length>1;if(Le||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=A.version,a.memory.textures++),ie){k.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[Ae]=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)k.__webglFramebuffer[Ae][Pe]=i.createFramebuffer()}else k.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)k.__webglFramebuffer[Ae]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Le)for(let Ae=0,Pe=pe.length;Ae<Pe;Ae++){let et=n.get(pe[Ae]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&_e(L)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Ae=0;Ae<pe.length;Ae++){let Pe=pe[Ae];k.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Ae]);let et=r.convert(Pe.format,Pe.colorSpace),Me=r.convert(Pe.type),Fe=M(Pe.internalFormat,et,Me,Pe.colorSpace,L.isXRRenderTarget===!0),Ke=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Fe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,k.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),q(k.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),de(i.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Pe=0;Pe<A.mipmaps.length;Pe++)ae(k.__webglFramebuffer[Ae][Pe],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pe);else ae(k.__webglFramebuffer[Ae],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Ae=0,Pe=pe.length;Ae<Pe;Ae++){let et=pe[Ae],Me=n.get(et);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),de(i.TEXTURE_2D,et),ae(k.__webglFramebuffer,L,et,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),m(et)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,te.__webglTexture),de(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Pe=0;Pe<A.mipmaps.length;Pe++)ae(k.__webglFramebuffer[Pe],L,A,i.COLOR_ATTACHMENT0,Ae,Pe);else ae(k.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,Ae,0);m(A)&&p(Ae),t.unbindTexture()}L.depthBuffer&&ye(L)}function Q(L){let A=L.textures;for(let k=0,te=A.length;k<te;k++){let pe=A[k];if(m(pe)){let ie=w(L),Le=n.get(pe).__webglTexture;t.bindTexture(ie,Le),p(ie),t.unbindTexture()}}}let he=[],U=[];function ve(L){if(L.samples>0){if(_e(L)===!1){let A=L.textures,k=L.width,te=L.height,pe=i.COLOR_BUFFER_BIT,ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(L),Ae=A.length>1;if(Ae)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);let et=n.get(A[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,k,te,0,0,k,te,pe,i.NEAREST),l===!0&&(he.length=0,U.length=0,he.push(i.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(he.push(ie),U.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);let et=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let A=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function _e(L){let A=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function J(L){let A=a.render.frame;u.get(L)!==A&&(u.set(L,A),L.update())}function Se(L,A){let k=L.colorSpace,te=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||k!==Kr&&k!==on&&(mt.getTransfer(k)===Ct?(te!==_i||pe!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}function fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=me,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=_e}function Ey(i,e){function t(n,s=on){let r,a=mt.getTransfer(s);if(n===ji)return i.UNSIGNED_BYTE;if(n===$u)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ju)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return i.BYTE;if(n===gf)return i.SHORT;if(n===Sa)return i.UNSIGNED_SHORT;if(n===Zu)return i.INT;if(n===Vs)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===qt)return i.HALF_FLOAT;if(n===xf)return i.ALPHA;if(n===yf)return i.RGB;if(n===_i)return i.RGBA;if(n===_f)return i.LUMINANCE;if(n===Mf)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===ju)return i.RED;if(n===Qu)return i.RED_INTEGER;if(n===wf)return i.RG;if(n===eh)return i.RG_INTEGER;if(n===th)return i.RGBA_INTEGER;if(n===Uo||n===No||n===Fo||n===zo)if(a===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Dc||n===Uc||n===Nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fc||n===zc||n===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fc||n===zc)return a===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bc||n===Oc||n===kc||n===Vc||n===Wc||n===Gc||n===Xc||n===qc||n===Yc||n===Kc||n===Zc||n===$c||n===Jc||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return a===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Qc||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return a===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ef||n===tu||n===nu||n===iu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function Ry(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,If(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),M=w.envMap,v=w.envMapRotation;M&&(m.envMap.value=M,Fs.copy(v),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(Fs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){let v=M.program;n.uniformBlockBinding(w,v)}function c(w,M){let v=s[w.id];v===void 0&&(g(w),v=u(w),s[w.id]=v,w.addEventListener("dispose",m));let S=M.program;n.updateUBOMapping(w,S);let b=e.render.frame;r[w.id]!==b&&(d(w),r[w.id]=b)}function u(w){let M=h();w.__bindingPointIndex=M;let v=i.createBuffer(),S=w.__size,b=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,S,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let M=s[w.id],v=w.uniforms,S=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,E=v.length;b<E;b++){let T=Array.isArray(v[b])?v[b]:[v[b]];for(let _=0,y=T.length;_<y;_++){let C=T[_];if(f(C,b,_,S)===!0){let P=C.__offset,D=Array.isArray(C.value)?C.value:[C.value],N=0;for(let H=0;H<D.length;H++){let F=D[H],B=x(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,P+N,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,M,v,S){let b=w.value,E=M+"_"+v;if(S[E]===void 0)return typeof b=="number"||typeof b=="boolean"?S[E]=b:S[E]=b.clone(),!0;{let T=S[E];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return S[E]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(w){let M=w.uniforms,v=0,S=16;for(let E=0,T=M.length;E<T;E++){let _=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,C=_.length;y<C;y++){let P=_[y],D=Array.isArray(P.value)?P.value:[P.value];for(let N=0,H=D.length;N<H;N++){let F=D[N],B=x(F),z=v%S,O=z%B.boundary,Z=z+O;v+=O,Z!==0&&S-Z<B.storage&&(v+=S-Z),P.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=B.storage}}}let b=v%S;return b>0&&(v+=S-b),w.__size=v,w.__cache={},this}function x(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){let M=w.target;M.removeEventListener("dispose",m);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}function bo(i,e,t,n,s,r){Mr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(da.x=r*Mr.x-s*Mr.y,da.y=s*Mr.x+r*Mr.y):da.copy(Mr),i.copy(e),i.x+=da.x,i.y+=da.y,i.applyMatrix4(zf)}function Ao(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Ko.fromBufferAttribute(a,s),Zo.fromBufferAttribute(a,r),t.distanceSqToSegment(Ko,Zo,pc,Zd)>n)return;pc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(pc);if(!(l<e.near||l>e.far))return{distance:l,point:Zd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Qd(i,e,t,n,s,r,a){let o=_u.distanceSqToPoint(i);if(o<t){let l=new R;_u.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function rh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function ef(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Iy(i,e){let t=1-i;return t*t*e}function Ly(i,e){return 2*(1-i)*i*e}function Dy(i,e){return i*i*e}function Ea(i,e,t,n){return Iy(i,e)+Ly(i,t)+Dy(i,n)}function Uy(i,e){let t=1-i;return t*t*t*e}function Ny(i,e){let t=1-i;return 3*t*t*i*e}function Fy(i,e){return 3*(1-i)*i*i*e}function zy(i,e){return i*i*i*e}function ba(i,e,t,n,s){return Uy(i,e)+Ny(i,t)+Fy(i,n)+zy(i,s)}function Hf(i,e,t,n,s){let r,a;if(s===e_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=tf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=tf(r,i[r],i[r+1],a);return a&&dl(a,a.next)&&(za(a),a=a.next),a}function qs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(dl(t,t.next)||Wt(t.prev,t,t.next)===0)){if(za(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Na(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ky(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Oy(i,n,s,r):By(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),za(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ky(qs(i),e,t),Na(i,e,t,n,s,r,2)):a===2&&Vy(i,e,t,n,s,r):Na(qs(i),e,t,n,s,r,1);break}}}function By(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&br(s,o,r,l,a,c,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Oy(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=o>l?o>c?o:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Ru(f,g,e,t,n),w=Ru(x,m,e,t,n),M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=w;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&br(o,u,l,h,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&br(o,u,l,h,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&br(o,u,l,h,c,d,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&br(o,u,l,h,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ky(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!dl(s,r)&&Bf(s,n,n.next,r)&&Fa(s,r)&&Fa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),za(n),za(n.next),n=i=r),n=n.next}while(n!==i);return qs(n)}function Vy(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jy(a,o)){let l=Of(a,o);a=qs(a,a.next),l=qs(l,l.next),Na(a,e,t,n,s,r,0),Na(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Wy(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Hf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push($y(c));for(s.sort(Gy),r=0;r<s.length;r++)t=Xy(s[r],t);return t}function Gy(i,e){return i.x-e.x}function Xy(i,e){let t=qy(i,e);if(!t)return e;let n=Of(t,i);return qs(n,n.next),qs(t,t.next)}function qy(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&br(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(r-t.x),Fa(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Yy(s,t)))&&(s=t,u=h)),t=t.next;while(t!==o);return s}function Yy(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function Ky(i,e,t,n){let s=i;do s.z===0&&(s.z=Ru(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zy(s)}function Zy(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Ru(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $y(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function br(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Jy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jy(i,e)&&(Fa(i,e)&&Fa(e,i)&&Qy(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||dl(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function dl(i,e){return i.x===e.x&&i.y===e.y}function Bf(i,e,t,n){let s=Lo(Wt(i,e,t)),r=Lo(Wt(i,e,n)),a=Lo(Wt(t,n,i)),o=Lo(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Io(i,t,e)||r===0&&Io(i,n,e)||a===0&&Io(t,i,n)||o===0&&Io(t,e,n))}function Io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Lo(i){return i>0?1:i<0?-1:0}function jy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fa(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function Qy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Of(i,e){let t=new Cu(i.i,i.x,i.y),n=new Cu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function tf(i,e,t,n){let s=new Cu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function za(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Cu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function e_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function nf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function sf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function n_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function i_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function Do(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function s_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cf(){return performance.now()}function hf(i,e){return i.distance-e.distance}function Vu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Vu(r[a],e,t,!0)}}var Wu,zp,qh,Hp,df,Bp,Zi,Ri,Bt,ft,oi,ps,St,Yh,Bo,Op,Hs,kp,Vp,Wp,Gp,Xp,qp,Yp,Kp,_c,Mc,Zp,$p,Jp,jp,Qp,e0,t0,n0,i0,wc,Ec,bc,Rr,Sc,Tc,Ac,Rc,ff,s0,r0,ms,Gu,Xu,qu,Yu,a0,Zs,Ku,pf,Cr,Pr,Cc,Pc,cl,ks,Os,Ic,ei,o0,eo,$t,Bl,Qn,ji,mf,gf,Sa,Zu,Vs,Ti,qt,$u,Ju,Ir,vf,xf,yf,_i,_f,Mf,Sr,Lr,ju,Qu,wf,eh,th,Uo,No,Fo,zo,Lc,Dc,Uc,Nc,Fc,zc,Hc,Bc,Oc,kc,Vc,Wc,Gc,Xc,qc,Yc,Kc,Zc,$c,Jc,jc,Ho,Qc,eu,Ef,tu,nu,iu,Oo,su,Ol,Kh,Zh,$h,bf,Sf,nh,l0,c0,Tf,u0,on,Ft,Kr,ul,Ct,sr,Jh,h0,d0,f0,Af,p0,m0,g0,v0,ru,Rf,jh,$i,ko,vs,In,Qh,_a,Ta,ut,re,ht,kl,ed,mt,td,nd,id,sd,rd,rr,au,H0,Vo,B0,ln,je,ou,Vt,Wo,lu,Dt,R,Wl,ad,Qi,Gi,gi,to,ar,or,lr,os,ls,Is,oa,no,io,Ls,O0,la,Xl,Hn,Xi,ql,so,cs,Yl,ro,Kl,Dr,$e,cr,vi,k0,V0,us,ao,$n,od,ld,cn,Ra,W0,cd,ur,qi,oo,ca,G0,X0,ud,hd,dd,fd,q0,hr,Zl,tn,xi,Yi,$l,Ki,dr,fr,pd,Jl,jl,Ql,ec,tc,nc,fs,Pf,hs,lo,xe,Ln,Y0,Ci,Tn,en,co,Je,Go,Xo,Ge,K0,ri,sc,pr,Jn,ua,pn,Ye,md,Ds,uo,gd,ho,fo,po,rc,mo,vd,go,ge,gn,Li,J0,j0,Te,Nr,ds,xd,yd,Zt,mr,gr,Ws,Fr,Gs,ac,Q0,em,jn,Us,xo,Xs,Et,nm,im,sm,rm,am,om,lm,cm,um,hm,dm,fm,pm,mm,gm,vm,xm,ym,_m,Mm,wm,Em,bm,Sm,Tm,Am,Rm,Cm,Pm,Im,Lm,Dm,Um,Nm,Fm,zm,Hm,Bm,Om,km,Vm,Wm,Gm,Xm,qm,Ym,Km,Zm,$m,Jm,jm,Qm,eg,tg,ng,ig,sg,rg,ag,og,lg,cg,ug,hg,dg,fg,pg,mg,gg,vg,xg,yg,_g,Mg,wg,Eg,bg,Sg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Fg,zg,Hg,Bg,Og,kg,Vg,Wg,Gg,Xg,qg,Yg,Kg,Zg,$g,Jg,jg,Qg,ev,tv,nv,iv,sv,rv,av,ov,lv,cv,uv,hv,dv,fv,pv,mv,gv,vv,xv,yv,_v,Mv,wv,Ev,bv,Sv,Tv,Av,Rv,Cv,Pv,Iv,Lv,Dv,Uv,dt,Ie,Si,yo,Ns,Nv,zr,Er,_d,Bs,oc,Md,lc,cc,uc,hc,zs,vr,wd,xs,qo,Df,Td,Uf,Nf,Ff,Ad,Rd,Cd,Pd,Id,cu,uu,hu,dc,Ar,Hx,Bx,Ud,Mo,Kx,Zx,Jx,ry,fu,pu,dy,mu,gu,gy,vy,yy,vu,ai,by,wa,Sy,Ty,xu,yu,Fs,Ay,Hr,An,Ca,Fn,Br,Pa,xr,ha,yr,_r,Mr,da,zf,wo,fa,Eo,Gd,fc,Xd,Yo,Ia,Ut,wr,qd,So,Yd,Py,pa,ma,vn,Or,Ko,Zo,Kd,ga,To,pc,Zd,La,$d,Jd,kr,Da,jd,_u,Ro,Co,Jt,Mi,li,Ua,Mu,Po,mc,gc,vc,Vr,$o,wu,Jo,Eu,jo,bu,Qo,Su,Tu,el,Pi,Wr,Ii,Au,ys,Hy,gs,tl,t_,nl,Ha,xn,il,Nt,Gr,Pu,Iu,Lu,wi,Ys,Du,Uu,Nu,sl,Ks,Fu,rf,zu,ah,Ba,Hu,rl,Xr,ci,xc,af,of,al,lf,va,yc,Bu,qr,Ou,Vn,ol,ui,Yr,oh,r_,lh,a_,o_,l_,c_,u_,h_,d_,ku,kt,v1,uf,ll,Pt=Xh(()=>{Wu="170",zp=0,qh=1,Hp=2,df=1,Bp=2,Zi=3,Ri=0,Bt=1,ft=2,oi=0,ps=1,St=2,Yh=3,Bo=4,Op=5,Hs=100,kp=101,Vp=102,Wp=103,Gp=104,Xp=200,qp=201,Yp=202,Kp=203,_c=204,Mc=205,Zp=206,$p=207,Jp=208,jp=209,Qp=210,e0=211,t0=212,n0=213,i0=214,wc=0,Ec=1,bc=2,Rr=3,Sc=4,Tc=5,Ac=6,Rc=7,ff=0,s0=1,r0=2,ms=0,Gu=1,Xu=2,qu=3,Yu=4,a0=5,Zs=6,Ku=7,pf=300,Cr=301,Pr=302,Cc=303,Pc=304,cl=306,ks=1e3,Os=1001,Ic=1002,ei=1003,o0=1004,eo=1005,$t=1006,Bl=1007,Qn=1008,ji=1009,mf=1010,gf=1011,Sa=1012,Zu=1013,Vs=1014,Ti=1015,qt=1016,$u=1017,Ju=1018,Ir=1020,vf=35902,xf=1021,yf=1022,_i=1023,_f=1024,Mf=1025,Sr=1026,Lr=1027,ju=1028,Qu=1029,wf=1030,eh=1031,th=1033,Uo=33776,No=33777,Fo=33778,zo=33779,Lc=35840,Dc=35841,Uc=35842,Nc=35843,Fc=36196,zc=37492,Hc=37496,Bc=37808,Oc=37809,kc=37810,Vc=37811,Wc=37812,Gc=37813,Xc=37814,qc=37815,Yc=37816,Kc=37817,Zc=37818,$c=37819,Jc=37820,jc=37821,Ho=36492,Qc=36494,eu=36495,Ef=36283,tu=36284,nu=36285,iu=36286,Oo=2300,su=2301,Ol=2302,Kh=2400,Zh=2401,$h=2402,bf=0,Sf=1,nh=2,l0=3200,c0=3201,Tf=0,u0=1,on="",Ft="srgb",Kr="srgb-linear",ul="linear",Ct="srgb",sr=7680,Jh=519,h0=512,d0=513,f0=514,Af=515,p0=516,m0=517,g0=518,v0=519,ru=35044,Rf=35048,jh="300 es",$i=2e3,ko=2001,vs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=1234567,_a=Math.PI/180,Ta=180/Math.PI;ut={DEG2RAD:_a,RAD2DEG:Ta,generateUUID:Ai,clamp:mn,euclideanModulo:ih,mapLinear:x0,inverseLerp:y0,lerp:Ma,damp:_0,pingpong:M0,smoothstep:w0,smootherstep:E0,randInt:b0,randFloat:S0,randFloatSpread:T0,seededRandom:A0,degToRad:R0,radToDeg:C0,isPowerOfTwo:P0,ceilPowerOfTwo:I0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:D0,normalize:Lt,denormalize:yi},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],M=s[4],v=s[7],S=s[2],b=s[5],E=s[8];return r[0]=a*x+o*w+l*S,r[3]=a*m+o*M+l*b,r[6]=a*p+o*v+l*E,r[1]=c*x+u*w+h*S,r[4]=c*m+u*M+h*b,r[7]=c*p+u*v+h*E,r[2]=d*x+f*w+g*S,r[5]=d*m+f*M+g*b,r[8]=d*p+f*v+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new ht;ed={};mt={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===on?ul:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};td=[.64,.33,.3,.6,.15,.06],nd=[.2126,.7152,.0722],id=[.3127,.329],sd=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Kr]:{primaries:td,whitePoint:id,transfer:ul,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:td,whitePoint:id,transfer:Ct,toXYZ:sd,fromXYZ:rd,luminanceCoefficients:nd,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}});au=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Aa("canvas")),rr.width=e.width,rr.height=e.height;let n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},H0=0,Vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vl(s[a].image)):r.push(Vl(s[a]))}else r=Vl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};B0=0,ln=class i extends vs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Os,s=Os,r=$t,a=Qn,o=_i,l=ji,c=i.DEFAULT_ANISOTROPY,u=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ai(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ks:e.x=e.x-Math.floor(e.x);break;case Os:e.x=e.x<0?0:1;break;case Ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ks:e.y=e.y-Math.floor(e.y);break;case Os:e.y=e.y<0?0:1;break;case Ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=pf;ln.DEFAULT_ANISOTROPY=1;je=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,S=(p+1)/2,b=(u+d)/4,E=(h+x)/4,T=(g+m)/4;return M>v&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=E/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=T/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=T/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ou=class extends vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wo=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},lu=class extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-o,p=l*d+c*f+u*g+h*x,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let S=Math.sqrt(M),b=Math.atan2(S,p*w);m=Math.sin(m*b)/S,o=Math.sin(o*b)/S}let v=o*w;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+x*v,m===1-o){let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new R,ad=new Dt,Qi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),no.subVectors(this.max,oa),ar.subVectors(e.a,oa),or.subVectors(e.b,oa),lr.subVectors(e.c,oa),os.subVectors(or,ar),ls.subVectors(lr,or),Is.subVectors(ar,lr);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Is.z,Is.y,os.z,0,-os.x,ls.z,0,-ls.x,Is.z,0,-Is.x,-os.y,os.x,0,-ls.y,ls.x,0,-Is.y,Is.x,0];return!Gl(t,ar,or,lr,no)||(t=[1,0,0,0,1,0,0,0,1],!Gl(t,ar,or,lr,no))?!1:(io.crossVectors(os,ls),t=[io.x,io.y,io.z],Gl(t,ar,or,lr,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gi=[new R,new R,new R,new R,new R,new R,new R,new R],gi=new R,to=new Qi,ar=new R,or=new R,lr=new R,os=new R,ls=new R,Is=new R,oa=new R,no=new R,io=new R,Ls=new R;O0=new Qi,la=new R,Xl=new R,Hn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):O0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Xl)),this.expandByPoint(la.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xi=new R,ql=new R,so=new R,cs=new R,Yl=new R,ro=new R,Kl=new R,Dr=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ql.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(ql);let r=e.distanceTo(t)*.5,a=-this.direction.dot(so),o=cs.dot(this.direction),l=-cs.dot(so),c=cs.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ql).addScaledVector(so,d),f}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,s,r){Yl.subVectors(t,e),ro.subVectors(n,e),Kl.crossVectors(Yl,ro);let a=this.direction.dot(Kl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cs.subVectors(this.origin,e);let l=o*this.direction.dot(ro.crossVectors(cs,ro));if(l<0)return null;let c=o*this.direction.dot(Yl.cross(cs));if(c<0||l+c>a)return null;let u=-o*cs.dot(Kl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,V0)}lookAt(e,t,n){let s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),us.crossVectors(n,$n),us.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),us.crossVectors(n,$n)),us.normalize(),ao.crossVectors($n,us),s[0]=us.x,s[4]=ao.x,s[8]=$n.x,s[1]=us.y,s[5]=ao.y,s[9]=$n.y,s[2]=us.z,s[6]=ao.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],M=n[7],v=n[11],S=n[15],b=s[0],E=s[4],T=s[8],_=s[12],y=s[1],C=s[5],P=s[9],D=s[13],N=s[2],H=s[6],F=s[10],B=s[14],z=s[3],O=s[7],Z=s[11],se=s[15];return r[0]=a*b+o*y+l*N+c*z,r[4]=a*E+o*C+l*H+c*O,r[8]=a*T+o*P+l*F+c*Z,r[12]=a*_+o*D+l*B+c*se,r[1]=u*b+h*y+d*N+f*z,r[5]=u*E+h*C+d*H+f*O,r[9]=u*T+h*P+d*F+f*Z,r[13]=u*_+h*D+d*B+f*se,r[2]=g*b+x*y+m*N+p*z,r[6]=g*E+x*C+m*H+p*O,r[10]=g*T+x*P+m*F+p*Z,r[14]=g*_+x*D+m*B+p*se,r[3]=w*b+M*y+v*N+S*z,r[7]=w*E+M*C+v*H+S*O,r[11]=w*T+M*P+v*F+S*Z,r[15]=w*_+M*D+v*B+S*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=h*m*c-x*d*c+x*l*f-o*m*f-h*l*p+o*d*p,M=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,v=u*x*c-g*h*c+g*o*f-a*x*f-u*o*p+a*h*p,S=g*h*l-u*x*l-g*o*d+a*x*d+u*o*m-a*h*m,b=t*w+n*M+s*v+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=w*E,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*E,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*E,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*E,e[4]=M*E,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*E,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*E,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*E,e[8]=v*E,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*E,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*E,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*E,e[12]=S*E,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*E,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*E,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,x=a*u,m=a*h,p=o*h,w=l*c,M=l*u,v=l*h,S=n.x,b=n.y,E=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+v)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(d+p))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+M)*E,s[9]=(m-w)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=cr.set(s[0],s[1],s[2]).length(),a=cr.set(s[4],s[5],s[6]).length(),o=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vi.copy(this);let c=1/r,u=1/a,h=1/o;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$i){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===$i)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ko)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$i){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),d=(t+e)*c,f=(n+s)*u,g,x;if(o===$i)g=(a+r)*h,x=-2*h;else if(o===ko)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},cr=new R,vi=new $e,k0=new R(0,0,0),V0=new R(1,1,1),us=new R,ao=new R,$n=new R,od=new $e,ld=new Dt,cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";Ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},W0=0,cd=new R,ur=new Dt,qi=new $e,oo=new R,ca=new R,G0=new R,X0=new Dt,ud=new R(1,0,0),hd=new R(0,1,0),dd=new R(0,0,1),fd={type:"added"},q0={type:"removed"},hr={type:"childadded",child:null},Zl={type:"childremoved",child:null},tn=class i extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new cn,n=new Dt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new ht}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(ca,oo,this.up):qi.lookAt(oo,ca,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(qi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fd),hr.child=e,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q0),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fd),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,X0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};tn.DEFAULT_UP=new R(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;xi=new R,Yi=new R,$l=new R,Ki=new R,dr=new R,fr=new R,pd=new R,Jl=new R,jl=new R,Ql=new R,ec=new je,tc=new je,nc=new je,fs=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xi.subVectors(s,t),Yi.subVectors(n,t),$l.subVectors(e,t);let a=xi.dot(xi),o=xi.dot(Yi),l=xi.dot($l),c=Yi.dot(Yi),u=Yi.dot($l),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(a,Ki.y),l.addScaledVector(o,Ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(tc,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(e,t,n,s){return xi.subVectors(n,t),Yi.subVectors(e,t),xi.cross(Yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;dr.subVectors(s,n),fr.subVectors(r,n),Jl.subVectors(e,n);let l=dr.dot(Jl),c=fr.dot(Jl);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,s);let u=dr.dot(jl),h=fr.dot(jl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(dr,a);Ql.subVectors(e,r);let f=dr.dot(Ql),g=fr.dot(Ql);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(fr,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return pd.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(pd,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},lo={h:0,s:0,l:0};xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=ih(e,1),t=mn(t,0,1),n=mn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ic(a,r,e+1/3),this.g=ic(a,r,e),this.b=ic(a,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return mt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(mn(Ln.r*255,0,255))*65536+Math.round(mn(Ln.g*255,0,255))*256+Math.round(mn(Ln.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(Ln.copy(this),t);let n=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ft){mt.fromWorkingColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,s=Ln.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(lo);let n=Ma(hs.h,lo.h,t),s=Ma(hs.s,lo.s,t),r=Ma(hs.l,lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new xe;xe.NAMES=Pf;Y0=0,Ci=class extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Ai(),this.name="",this.blending=ps,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=Mc,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==Mc&&(n.blendDst=this.blendDst),this.blendEquation!==Hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tn=class extends Ci{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},en=new R,co=new re,Je=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),e}},Go=class extends Je{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Xo=class extends Je{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ge=class extends Je{constructor(e,t,n){super(new Float32Array(e),t,n)}},K0=0,ri=new $e,sc=new tn,pr=new R,Jn=new Qi,ua=new Qi,pn=new R,Ye=class i extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cf(e)?Xo:Go)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(Jn.min,ua.min),Jn.expandByPoint(pn),pn.addVectors(Jn.max,ua.max),Jn.expandByPoint(pn)):(Jn.expandByPoint(ua.min),Jn.expandByPoint(ua.max))}Jn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pn.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),pn.add(pr)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new R,l[T]=new R;let c=new R,u=new R,h=new R,d=new re,f=new re,g=new re,x=new R,m=new R;function p(T,_,y){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[T].add(x),o[_].add(x),o[y].add(x),l[T].add(m),l[_].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,_=w.length;T<_;++T){let y=w[T],C=y.start,P=y.count;for(let D=C,N=C+P;D<N;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new R,v=new R,S=new R,b=new R;function E(T){S.fromBufferAttribute(s,T),b.copy(S);let _=o[T];M.copy(_),M.sub(S.multiplyScalar(S.dot(_))).normalize(),v.crossVectors(b,_);let C=v.dot(l[T])<0?-1:1;a.setXYZW(T,M.x,M.y,M.z,C)}for(let T=0,_=w.length;T<_;++T){let y=w[T],C=y.start,P=y.count;for(let D=C,N=C+P;D<N;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},md=new $e,Ds=new Dr,uo=new Hn,gd=new R,ho=new R,fo=new R,po=new R,rc=new R,mo=new R,vd=new R,go=new R,ge=class extends tn{constructor(e=new Ye,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(rc.fromBufferAttribute(h,e),a?mo.addScaledVector(rc,u):mo.addScaledVector(rc.sub(t),u))}t.add(mo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(uo.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(uo,gd)===null||Ds.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(md),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,S=M;v<S;v+=3){let b=o.getX(v),E=o.getX(v+1),T=o.getX(v+2);s=vo(this,p,e,n,c,u,h,b,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=vo(this,a,e,n,c,u,h,w,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,S=M;v<S;v+=3){let b=v,E=v+1,T=v+2;s=vo(this,p,e,n,c,u,h,b,E,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let w=m,M=m+1,v=m+2;s=vo(this,a,e,n,c,u,h,w,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};gn=class i extends Ye{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(h,2));function g(x,m,p,w,M,v,S,b,E,T,_){let y=v/E,C=S/T,P=v/2,D=S/2,N=b/2,H=E+1,F=T+1,B=0,z=0,O=new R;for(let Z=0;Z<F;Z++){let se=Z*C-D;for(let de=0;de<H;de++){let we=de*y-P;O[x]=we*w,O[m]=se*M,O[p]=N,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[p]=b>0?1:-1,u.push(O.x,O.y,O.z),h.push(de/E),h.push(1-Z/T),B+=1}}for(let Z=0;Z<T;Z++)for(let se=0;se<E;se++){let de=d+se+H*Z,we=d+se+H*(Z+1),X=d+(se+1)+H*(Z+1),ee=d+(se+1)+H*Z;l.push(de,we,ee),l.push(we,X,ee),z+=6}o.addGroup(f,z,_),f+=z,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Li={clone:Ur,merge:zn},J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends Ci{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Nr=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ds=new R,xd=new re,yd=new re,Zt=class extends Nr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,xd,yd),t.subVectors(yd,xd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,Ws=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Zt(mr,gr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(mr,gr,e,t);r.layers=this.layers,this.add(r);let a=new Zt(mr,gr,e,t);a.layers=this.layers,this.add(a);let o=new Zt(mr,gr,e,t);o.layers=this.layers,this.add(o);let l=new Zt(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new Zt(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fr=class extends ln{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cr,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gs=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gn(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:oi});r.uniforms.tEquirect.value=t;let a=new ge(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=$t),new Ws(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ac=new R,Q0=new R,em=new ht,jn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ac.subVectors(n,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||em.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Hn,xo=new R,Xs=class{constructor(e=new jn,t=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+u,m+g,v+w).normalize(),n[3].setComponents(l-a,d-u,m-g,v-w).normalize(),n[4].setComponents(l-o,d-h,m-x,v-M).normalize(),t===$i)n[5].setComponents(l+o,d+h,m+x,v+M).normalize();else if(t===ko)n[5].setComponents(o,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Et=class i extends Ye{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let w=p*d-a;for(let M=0;M<c;M++){let v=M*h-r;g.push(v,-w,0),x.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let M=w+c*p,v=w+c*(p+1),S=w+1+c*(p+1),b=w+1+c*p;f.push(M,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sm=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,eg=`struct PhysicalMaterial {
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hg=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bg=`#ifdef USE_NORMALMAP
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
#endif`,Sg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ag=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Og=`float getShadowMask() {
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
}`,kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nv=`uniform sampler2D t2D;
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`#include <common>
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
}`,lv=`#if DEPTH_PACKING == 3200
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
}`,cv=`#define DISTANCE
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
}`,uv=`#define DISTANCE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`uniform float scale;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 diffuse;
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
}`,vv=`#define LAMBERT
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
}`,xv=`#define LAMBERT
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
}`,yv=`#define MATCAP
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
}`,_v=`#define MATCAP
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
}`,Mv=`#define NORMAL
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
}`,wv=`#define NORMAL
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
}`,Ev=`#define PHONG
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
}`,bv=`#define PHONG
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
}`,Sv=`#define STANDARD
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
}`,Tv=`#define STANDARD
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
}`,Av=`#define TOON
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
}`,Rv=`#define TOON
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
}`,Cv=`uniform float size;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Iv=`#include <common>
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
}`,Lv=`uniform vec3 color;
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
}`,Dv=`uniform float rotation;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:um,batching_vertex:hm,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:_m,color_fragment:Mm,color_pars_fragment:wm,color_pars_vertex:Em,color_vertex:bm,common:Sm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Lm,colorspace_pars_fragment:Dm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Fm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Km,envmap_vertex:Hm,fog_vertex:Bm,fog_pars_vertex:Om,fog_fragment:km,fog_pars_fragment:Vm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:$m,lights_phong_fragment:Jm,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:og,map_fragment:lg,map_pars_fragment:cg,map_particle_fragment:ug,map_particle_pars_fragment:hg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:fg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:gg,morphtarget_pars_vertex:vg,morphtarget_vertex:xg,normal_fragment_begin:yg,normal_fragment_maps:_g,normal_pars_fragment:Mg,normal_pars_vertex:wg,normal_vertex:Eg,normalmap_pars_fragment:bg,clearcoat_normal_fragment_begin:Sg,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Ag,iridescence_pars_fragment:Rg,opaque_fragment:Cg,packing:Pg,premultiplied_alpha_fragment:Ig,project_vertex:Lg,dithering_fragment:Dg,dithering_pars_fragment:Ug,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Hg,shadowmap_vertex:Bg,shadowmask_pars_fragment:Og,skinbase_vertex:kg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Gg,specularmap_fragment:Xg,specularmap_pars_fragment:qg,tonemapping_fragment:Yg,tonemapping_pars_fragment:Kg,transmission_fragment:Zg,transmission_pars_fragment:$g,uv_pars_fragment:Jg,uv_pars_vertex:jg,uv_vertex:Qg,worldpos_vertex:ev,background_vert:tv,background_frag:nv,backgroundCube_vert:iv,backgroundCube_frag:sv,cube_vert:rv,cube_frag:av,depth_vert:ov,depth_frag:lv,distanceRGBA_vert:cv,distanceRGBA_frag:uv,equirect_vert:hv,equirect_frag:dv,linedashed_vert:fv,linedashed_frag:pv,meshbasic_vert:mv,meshbasic_frag:gv,meshlambert_vert:vv,meshlambert_frag:xv,meshmatcap_vert:yv,meshmatcap_frag:_v,meshnormal_vert:Mv,meshnormal_frag:wv,meshphong_vert:Ev,meshphong_frag:bv,meshphysical_vert:Sv,meshphysical_frag:Tv,meshtoon_vert:Av,meshtoon_frag:Rv,points_vert:Cv,points_frag:Pv,shadow_vert:Iv,shadow_frag:Lv,sprite_vert:Dv,sprite_frag:Uv},Ie={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Si={basic:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:zn([Ie.common,Ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:zn([Ie.lights,Ie.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Si.physical={uniforms:zn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};yo={r:0,b:0,g:0},Ns=new cn,Nv=new $e;zr=class extends Nr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Er=4,_d=[.125,.215,.35,.446,.526,.582],Bs=20,oc=new zr,Md=new xe,lc=null,cc=0,uc=0,hc=!1,zs=(1+Math.sqrt(5))/2,vr=1/zs,wd=[new R(-zs,vr,0),new R(zs,vr,0),new R(-vr,0,zs),new R(vr,0,zs),new R(0,zs,-vr),new R(0,zs,vr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=hc,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cr||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:qt,format:_i,colorSpace:Kr,depthBuffer:!1},s=Ed(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vv(r)),this._blurMaterial=Wv(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,s){let o=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Md),u.toneMapping=ms,u.autoClear=!1;let f=new Tn({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new ge(new gn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Md),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let M=this._cubeSize;_o(s,w*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Cr||e.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;_o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wd[(s-r-1)%wd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ge(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Bs;m>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bs}`);let p=[],w=0;for(let E=0;E<Bs;++E){let T=E/x,_=Math.exp(-T*T/2);p.push(_),E===0?w+=_:E<m&&(w+=2*_)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let v=this._sizeLods[s],S=3*v*(s>M-Er?s-M+Er:0),b=4*(this._cubeSize-v);_o(t,S,b,3*v,2*v),l.setRenderTarget(t),l.render(h,oc)}};qo=class extends ln{constructor(e,t,n,s,r,a,o,l,c,u=Sr){if(u!==Sr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=Vs),n===void 0&&u===Lr&&(n=Ir),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ei,this.minFilter=l!==void 0?l:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Df=new ln,Td=new qo(1,1),Uf=new Wo,Nf=new lu,Ff=new Fr,Ad=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Id=new Float32Array(4);cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gx(t.type)}},uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fx(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};Hx=37297,Bx=0;Ud=new ht;Mo=new R;Kx=/^[ \t]*#include +<([\w\d./]+)>/gm;Zx=new Map;Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;ry=0,fu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pu(e),t.set(e,n)),n}},pu=class{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}};dy=0;mu=class extends Ci{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=l0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gu=class extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
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
}`;yy={[wc]:Ec,[bc]:Ac,[Sc]:Rc,[Rr]:Tc,[Ec]:wc,[Ac]:bc,[Rc]:Sc,[Tc]:Rr};vu=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ai=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(by)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ai;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ty=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new ln,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Te({vertexShader:Sy,fragmentShader:Ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends vs{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new xu,m=t.getContextAttributes(),p=null,w=null,M=[],v=[],S=new re,b=null,E=new Zt;E.viewport=new je;let T=new Zt;T.viewport=new je;let _=[E,T],y=new vu,C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=M[X];return ee===void 0&&(ee=new wa,M[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=M[X];return ee===void 0&&(ee=new wa,M[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=M[X];return ee===void 0&&(ee=new wa,M[X]=ee),ee.getHandSpace()};function D(X){let ee=v.indexOf(X.inputSource);if(ee===-1)return;let ae=M[ee];ae!==void 0&&(ae.update(X.inputSource,X.frame,c||a),ae.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",H);for(let X=0;X<M.length;X++){let ee=v[X];ee!==null&&(v[X]=null,M[X].disconnect(ee))}C=null,P=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,w=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",N),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Vt(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ae=null,q=null;m.depth&&(q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Lr:Sr,ae=m.stencil?Ir:Vs);let Y={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Y),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Vt(d.textureWidth,d.textureHeight,{format:_i,type:ji,depthTexture:new qo(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(X){for(let ee=0;ee<X.removed.length;ee++){let ae=X.removed[ee],q=v.indexOf(ae);q>=0&&(v[q]=null,M[q].disconnect(ae))}for(let ee=0;ee<X.added.length;ee++){let ae=X.added[ee],q=v.indexOf(ae);if(q===-1){for(let ye=0;ye<M.length;ye++)if(ye>=v.length){v.push(ae),q=ye;break}else if(v[ye]===null){v[ye]=ae,q=ye;break}if(q===-1)break}let Y=M[q];Y&&Y.connect(ae)}}let F=new R,B=new R;function z(X,ee,ae){F.setFromMatrixPosition(ee.matrixWorld),B.setFromMatrixPosition(ae.matrixWorld);let q=F.distanceTo(B),Y=ee.projectionMatrix.elements,ye=ae.projectionMatrix.elements,me=Y[14]/(Y[10]-1),Ee=Y[14]/(Y[10]+1),Q=(Y[9]+1)/Y[5],he=(Y[9]-1)/Y[5],U=(Y[8]-1)/Y[0],ve=(ye[8]+1)/ye[0],ue=me*U,_e=me*ve,J=q/(-U+ve),Se=J*-U;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Se),X.translateZ(J),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Y[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let fe=me+J,L=Ee+J,A=ue-Se,k=_e+(q-Se),te=Q*Ee/L*fe,pe=he*Ee/L*fe;X.projectionMatrix.makePerspective(A,k,te,pe,fe,L),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function O(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ee=X.near,ae=X.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),y.near=T.near=E.near=ee,y.far=T.far=E.far=ae,(C!==y.near||P!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,P=y.far),E.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,y.layers.mask=E.layers.mask|T.layers.mask;let q=X.parent,Y=y.cameras;O(y,q);for(let ye=0;ye<Y.length;ye++)O(Y[ye],q);Y.length===2?z(y,E,T):y.projectionMatrix.copy(E.projectionMatrix),Z(X,y,q)};function Z(X,ee,ae){ae===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ae.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ta*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let se=null;function de(X,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){let ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let q=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,q=!0);for(let ye=0;ye<ae.length;ye++){let me=ae[ye],Ee=null;if(f!==null)Ee=f.getViewport(me);else{let he=h.getViewSubImage(d,me);Ee=he.viewport,ye===0&&(e.setRenderTargetTextures(w,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(w))}let Q=_[ye];Q===void 0&&(Q=new Zt,Q.layers.enable(ye),Q.viewport=new je,_[ye]=Q),Q.matrix.fromArray(me.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(me.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ye===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),q===!0&&y.cameras.push(Q)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){let ye=h.getDepthInformation(ae[0]);ye&&ye.isValid&&ye.texture&&x.init(e,ye,s.renderState)}}for(let ae=0;ae<M.length;ae++){let q=v[ae],Y=M[ae];q!==null&&Y!==void 0&&Y.update(q,ee,c||a)}se&&se(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let we=new Lf;we.setAnimationLoop(de),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}},Fs=new cn,Ay=new $e;Hr=class{constructor(e={}){let{canvas:t=U0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=ms,this.toneMappingExposure=1;let v=this,S=!1,b=0,E=0,T=null,_=-1,y=null,C=new je,P=new je,D=null,N=new xe(0),H=0,F=t.width,B=t.height,z=1,O=null,Z=null,se=new je(0,0,F,B),de=new je(0,0,F,B),we=!1,X=new Xs,ee=!1,ae=!1,q=new $e,Y=new $e,ye=new R,me=new je,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function he(){return T===null?z:1}let U=n;function ve(I,W){return t.getContext(I,W)}try{let I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Re,!1),U===null){let W="webgl2";if(U=ve(W,I),U===null)throw ve(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ue,_e,J,Se,fe,L,A,k,te,pe,ie,Le,Ae,Pe,et,Me,Fe,Ke,Ze,Ne,ot,lt,Tt,V;function De(){ue=new Xv(U),ue.init(),lt=new Ey(U,ue),_e=new Bv(U,ue,e,lt),J=new _y(U,ue),_e.reverseDepthBuffer&&d&&J.buffers.depth.setReversed(!0),Se=new Kv(U),fe=new oy,L=new wy(U,ue,J,fe,_e,lt,Se),A=new kv(v),k=new Gv(v),te=new tm(U),Tt=new zv(U,te),pe=new qv(U,te,Se,Tt),ie=new $v(U,pe,te,Se),Ze=new Zv(U,_e,L),Me=new Ov(fe),Le=new ay(v,A,k,ue,_e,Tt,Me),Ae=new Ry(v,fe),Pe=new cy,et=new my(ue),Ke=new Fv(v,A,k,J,ie,f,l),Fe=new xy(v,ie,_e),V=new Cy(U,Se,_e,J),Ne=new Hv(U,ue,Se),ot=new Yv(U,ue,Se),Se.programs=Le.programs,v.capabilities=_e,v.extensions=ue,v.properties=fe,v.renderLists=Pe,v.shadowMap=Fe,v.state=J,v.info=Se}De();let ne=new yu(v,U);this.xr=ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let I=ue.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ue.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(I){I!==void 0&&(z=I,this.setSize(F,B,!1))},this.getSize=function(I){return I.set(F,B)},this.setSize=function(I,W,$=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=I,B=W,t.width=Math.floor(I*z),t.height=Math.floor(W*z),$===!0&&(t.style.width=I+"px",t.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(F*z,B*z).floor()},this.setDrawingBufferSize=function(I,W,$){F=I,B=W,z=$,t.width=Math.floor(I*$),t.height=Math.floor(W*$),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(se)},this.setViewport=function(I,W,$,j){I.isVector4?se.set(I.x,I.y,I.z,I.w):se.set(I,W,$,j),J.viewport(C.copy(se).multiplyScalar(z).round())},this.getScissor=function(I){return I.copy(de)},this.setScissor=function(I,W,$,j){I.isVector4?de.set(I.x,I.y,I.z,I.w):de.set(I,W,$,j),J.scissor(P.copy(de).multiplyScalar(z).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(I){J.setScissorTest(we=I)},this.setOpaqueSort=function(I){O=I},this.setTransparentSort=function(I){Z=I},this.getClearColor=function(I){return I.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(I=!0,W=!0,$=!0){let j=0;if(I){let G=!1;if(T!==null){let be=T.texture.format;G=be===th||be===eh||be===Qu}if(G){let be=T.texture.type,Ce=be===ji||be===Vs||be===Sa||be===Ir||be===$u||be===Ju,He=Ke.getClearColor(),We=Ke.getClearAlpha(),nt=He.r,it=He.g,Xe=He.b;Ce?(g[0]=nt,g[1]=it,g[2]=Xe,g[3]=We,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=nt,x[1]=it,x[2]=Xe,x[3]=We,U.clearBufferiv(U.COLOR,0,x))}else j|=U.COLOR_BUFFER_BIT}W&&(j|=U.DEPTH_BUFFER_BIT),$&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Pe.dispose(),et.dispose(),fe.dispose(),A.dispose(),k.dispose(),ie.dispose(),Tt.dispose(),V.dispose(),Le.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",As),ne.removeEventListener("sessionend",Ya),zi.stop()};function le(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let I=Se.autoReset,W=Fe.enabled,$=Fe.autoUpdate,j=Fe.needsUpdate,G=Fe.type;De(),Se.autoReset=I,Fe.enabled=W,Fe.autoUpdate=$,Fe.needsUpdate=j,Fe.type=G}function Re(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ze(I){let W=I.target;W.removeEventListener("dispose",ze),At(W)}function At(I){sn(I),fe.remove(I)}function sn(I){let W=fe.get(I).programs;W!==void 0&&(W.forEach(function($){Le.releaseProgram($)}),I.isShaderMaterial&&Le.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,$,j,G,be){W===null&&(W=Ee);let Ce=G.isMesh&&G.matrixWorld.determinant()<0,He=Cl(I,W,$,j,G);J.setMaterial(j,Ce);let We=$.index,nt=1;if(j.wireframe===!0){if(We=pe.getWireframeAttribute($),We===void 0)return;nt=2}let it=$.drawRange,Xe=$.attributes.position,tt=it.start*nt,Rt=(it.start+it.count)*nt;be!==null&&(tt=Math.max(tt,be.start*nt),Rt=Math.min(Rt,(be.start+be.count)*nt)),We!==null?(tt=Math.max(tt,0),Rt=Math.min(Rt,We.count)):Xe!=null&&(tt=Math.max(tt,0),Rt=Math.min(Rt,Xe.count));let It=Rt-tt;if(It<0||It===1/0)return;Tt.setup(G,j,He,$,We);let bn,pt=Ne;if(We!==null&&(bn=te.get(We),pt=ot,pt.setIndex(bn)),G.isMesh)j.wireframe===!0?(J.setLineWidth(j.wireframeLinewidth*he()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(G.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),J.setLineWidth(qe*he()),G.isLineSegments?pt.setMode(U.LINES):G.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else G.isPoints?pt.setMode(U.POINTS):G.isSprite&&pt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let qe=G._multiDrawStarts,ii=G._multiDrawCounts,vt=G._multiDrawCount,On=We?te.get(We).bytesPerElement:1,Bi=fe.get(j).currentProgram.getUniforms();for(let Rn=0;Rn<vt;Rn++)Bi.setValue(U,"_gl_DrawID",Rn),pt.render(qe[Rn]/On,ii[Rn])}else if(G.isInstancedMesh)pt.renderInstances(tt,It,G.count);else if($.isInstancedBufferGeometry){let qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ii=Math.min($.instanceCount,qe);pt.renderInstances(tt,It,ii)}else pt.render(tt,It)};function _t(I,W,$){I.transparent===!0&&I.side===ft&&I.forceSinglePass===!1?(I.side=Bt,I.needsUpdate=!0,Hi(I,W,$),I.side=Ri,I.needsUpdate=!0,Hi(I,W,$),I.side=ft):Hi(I,W,$)}this.compile=function(I,W,$=null){$===null&&($=I),p=et.get($),p.init(W),M.push(p),$.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),I!==$&&I.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let j=new Set;return I.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let be=G.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){let He=be[Ce];_t(He,$,G),j.add(He)}else _t(be,$,G),j.add(be)}),M.pop(),p=null,j},this.compileAsync=function(I,W,$=null){let j=this.compile(I,W,$);return new Promise(G=>{function be(){if(j.forEach(function(Ce){fe.get(Ce).currentProgram.isReady()&&j.delete(Ce)}),j.size===0){G(I);return}setTimeout(be,10)}ue.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rn=null;function Un(I){rn&&rn(I)}function As(){zi.stop()}function Ya(){zi.start()}let zi=new Lf;zi.setAnimationLoop(Un),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(I){rn=I,ne.setAnimationLoop(I),I===null?zi.stop():zi.start()},ne.addEventListener("sessionstart",As),ne.addEventListener("sessionend",Ya),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(W),W=ne.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,W,T),p=et.get(I,M.length),p.init(W),M.push(p),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix(Y),ae=this.localClippingEnabled,ee=Me.init(this.clippingPlanes,ae),m=Pe.get(I,w.length),m.init(),w.push(m),ne.enabled===!0&&ne.isPresenting===!0){let be=v.xr.getDepthSensingMesh();be!==null&&er(be,W,-1/0,v.sortObjects)}er(I,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(O,Z),Q=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Q&&Ke.addToRenderList(m,I),this.info.render.frame++,ee===!0&&Me.beginShadows();let $=p.state.shadowsArray;Fe.render($,I,W),ee===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,G=m.transmissive;if(p.setupLights(),W.isArrayCamera){let be=W.cameras;if(G.length>0)for(let Ce=0,He=be.length;Ce<He;Ce++){let We=be[Ce];tr(j,G,I,We)}Q&&Ke.render(I);for(let Ce=0,He=be.length;Ce<He;Ce++){let We=be[Ce];Ka(m,I,We,We.viewport)}}else G.length>0&&tr(j,G,I,W),Q&&Ke.render(I),Ka(m,I,W);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(v,I,W),Tt.resetDefaultState(),_=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],ee===!0&&Me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function er(I,W,$,j){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)$=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||X.intersectsSprite(I)){j&&me.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Y);let Ce=ie.update(I),He=I.material;He.visible&&m.push(I,Ce,He,$,me.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||X.intersectsObject(I))){let Ce=ie.update(I),He=I.material;if(j&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),me.copy(I.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),me.copy(Ce.boundingSphere.center)),me.applyMatrix4(I.matrixWorld).applyMatrix4(Y)),Array.isArray(He)){let We=Ce.groups;for(let nt=0,it=We.length;nt<it;nt++){let Xe=We[nt],tt=He[Xe.materialIndex];tt&&tt.visible&&m.push(I,Ce,tt,$,me.z,Xe)}}else He.visible&&m.push(I,Ce,He,$,me.z,null)}}let be=I.children;for(let Ce=0,He=be.length;Ce<He;Ce++)er(be[Ce],W,$,j)}function Ka(I,W,$,j){let G=I.opaque,be=I.transmissive,Ce=I.transparent;p.setupLightsView($),ee===!0&&Me.setGlobalState(v.clippingPlanes,$),j&&J.viewport(C.copy(j)),G.length>0&&Rs(G,W,$),be.length>0&&Rs(be,W,$),Ce.length>0&&Rs(Ce,W,$),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function tr(I,W,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Vt(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?qt:ji,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let be=p.state.transmissionRenderTarget[j.id],Ce=j.viewport||C;be.setSize(Ce.z,Ce.w);let He=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(N),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ke.render($);let We=v.toneMapping;v.toneMapping=ms;let nt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ee===!0&&Me.setGlobalState(v.clippingPlanes,j),Rs(I,$,j),L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be),ue.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Xe=0,tt=W.length;Xe<tt;Xe++){let Rt=W[Xe],It=Rt.object,bn=Rt.geometry,pt=Rt.material,qe=Rt.group;if(pt.side===ft&&It.layers.test(j.layers)){let ii=pt.side;pt.side=Bt,pt.needsUpdate=!0,Cs(It,$,j,bn,pt,qe),pt.side=ii,pt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(be),L.updateRenderTargetMipmap(be))}v.setRenderTarget(He),v.setClearColor(N,H),nt!==void 0&&(j.viewport=nt),v.toneMapping=We}function Rs(I,W,$){let j=W.isScene===!0?W.overrideMaterial:null;for(let G=0,be=I.length;G<be;G++){let Ce=I[G],He=Ce.object,We=Ce.geometry,nt=j===null?Ce.material:j,it=Ce.group;He.layers.test($.layers)&&Cs(He,W,$,We,nt,it)}}function Cs(I,W,$,j,G,be){I.onBeforeRender(v,W,$,j,G,be),I.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),G.onBeforeRender(v,W,$,j,I,be),G.transparent===!0&&G.side===ft&&G.forceSinglePass===!1?(G.side=Bt,G.needsUpdate=!0,v.renderBufferDirect($,W,j,G,I,be),G.side=Ri,G.needsUpdate=!0,v.renderBufferDirect($,W,j,G,I,be),G.side=ft):v.renderBufferDirect($,W,j,G,I,be),I.onAfterRender(v,W,$,j,G,be)}function Hi(I,W,$){W.isScene!==!0&&(W=Ee);let j=fe.get(I),G=p.state.lights,be=p.state.shadowsArray,Ce=G.state.version,He=Le.getParameters(I,G.state,be,W,$),We=Le.getProgramCacheKey(He),nt=j.programs;j.environment=I.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(I.isMeshStandardMaterial?k:A).get(I.envMap||j.environment),j.envMapRotation=j.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,nt===void 0&&(I.addEventListener("dispose",ze),nt=new Map,j.programs=nt);let it=nt.get(We);if(it!==void 0){if(j.currentProgram===it&&j.lightsStateVersion===Ce)return ia(I,He),it}else He.uniforms=Le.getUniforms(I),I.onBeforeCompile(He,v),it=Le.acquireProgram(He,We),nt.set(We,it),j.uniforms=He.uniforms;let Xe=j.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Xe.clippingPlanes=Me.uniform),ia(I,He),j.needsLights=Pl(I),j.lightsStateVersion=Ce,j.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=it,j.uniformsList=null,it}function Za(I){if(I.uniformsList===null){let W=I.currentProgram.getUniforms();I.uniformsList=Ar.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function ia(I,W){let $=fe.get(I);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Cl(I,W,$,j,G){W.isScene!==!0&&(W=Ee),L.resetTextureUnits();let be=W.fog,Ce=j.isMeshStandardMaterial?W.environment:null,He=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kr,We=(j.isMeshStandardMaterial?k:A).get(j.envMap||Ce),nt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,it=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Xe=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,Rt=!!$.morphAttributes.color,It=ms;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(It=v.toneMapping);let bn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pt=bn!==void 0?bn.length:0,qe=fe.get(j),ii=p.state.lights;if(ee===!0&&(ae===!0||I!==y)){let Yn=I===y&&j.id===_;Me.setState(j,I,Yn)}let vt=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ii.state.version||qe.outputColorSpace!==He||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==We||j.fog===!0&&qe.fog!==be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==it||qe.morphTargets!==Xe||qe.morphNormals!==tt||qe.morphColors!==Rt||qe.toneMapping!==It||qe.morphTargetsCount!==pt)&&(vt=!0):(vt=!0,qe.__version=j.version);let On=qe.currentProgram;vt===!0&&(On=Hi(j,W,G));let Bi=!1,Rn=!1,xt=!1,yt=On.getUniforms(),qn=qe.uniforms;if(J.useProgram(On.program)&&(Bi=!0,Rn=!0,xt=!0),j.id!==_&&(_=j.id,Rn=!0),Bi||y!==I){J.buffers.depth.getReversed()?(q.copy(I.projectionMatrix),F0(q),z0(q),yt.setValue(U,"projectionMatrix",q)):yt.setValue(U,"projectionMatrix",I.projectionMatrix),yt.setValue(U,"viewMatrix",I.matrixWorldInverse);let Oi=yt.map.cameraPosition;Oi!==void 0&&Oi.setValue(U,ye.setFromMatrixPosition(I.matrixWorld)),_e.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&yt.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,Rn=!0,xt=!0)}if(G.isSkinnedMesh){yt.setOptional(U,G,"bindMatrix"),yt.setOptional(U,G,"bindMatrixInverse");let Yn=G.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),yt.setValue(U,"boneTexture",Yn.boneTexture,L))}G.isBatchedMesh&&(yt.setOptional(U,G,"batchingTexture"),yt.setValue(U,"batchingTexture",G._matricesTexture,L),yt.setOptional(U,G,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",G._indirectTexture,L),yt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",G._colorsTexture,L));let ss=$.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Ze.update(G,$,On),(Rn||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,yt.setValue(U,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(qn.envMap.value=We,qn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(qn.envMapIntensity.value=W.environmentIntensity),Rn&&(yt.setValue(U,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&$a(qn,xt),be&&j.fog===!0&&Ae.refreshFogUniforms(qn,be),Ae.refreshMaterialUniforms(qn,j,z,B,p.state.transmissionRenderTarget[I.id]),Ar.upload(U,Za(qe),qn,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ar.upload(U,Za(qe),qn,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&yt.setValue(U,"center",G.center),yt.setValue(U,"modelViewMatrix",G.modelViewMatrix),yt.setValue(U,"normalMatrix",G.normalMatrix),yt.setValue(U,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Yn=j.uniformsGroups;for(let Oi=0,pi=Yn.length;Oi<pi;Oi++){let Ja=Yn[Oi];V.update(Ja,On),V.bind(Ja,On)}}return On}function $a(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Pl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,W,$){fe.get(I.texture).__webglTexture=W,fe.get(I.depthTexture).__webglTexture=$;let j=fe.get(I);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){let $=fe.get(I);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(I,W=0,$=0){T=I,b=W,E=$;let j=!0,G=null,be=!1,Ce=!1;if(I){let We=fe.get(I);if(We.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(We.__webglFramebuffer===void 0)L.setupRenderTarget(I);else if(We.__hasExternalTextures)L.rebindTextures(I,fe.get(I.texture).__webglTexture,fe.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Xe=I.depthTexture;if(We.__boundDepthTexture!==Xe){if(Xe!==null&&fe.has(Xe)&&(I.width!==Xe.image.width||I.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(I)}}let nt=I.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);let it=fe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(it[W])?G=it[W][$]:G=it[W],be=!0):I.samples>0&&L.useMultisampledRTT(I)===!1?G=fe.get(I).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[$]:G=it,C.copy(I.viewport),P.copy(I.scissor),D=I.scissorTest}else C.copy(se).multiplyScalar(z).floor(),P.copy(de).multiplyScalar(z).floor(),D=we;if(J.bindFramebuffer(U.FRAMEBUFFER,G)&&j&&J.drawBuffers(I,G),J.viewport(C),J.scissor(P),J.setScissorTest(D),be){let We=fe.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,We.__webglTexture,$)}else if(Ce){let We=fe.get(I.texture),nt=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,$||0,nt)}_=-1},this.readRenderTargetPixels=function(I,W,$,j,G,be,Ce){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(He=He[Ce]),He){J.bindFramebuffer(U.FRAMEBUFFER,He);try{let We=I.texture,nt=We.format,it=We.type;if(!_e.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-j&&$>=0&&$<=I.height-G&&U.readPixels(W,$,j,G,lt.convert(nt),lt.convert(it),be)}finally{let We=T!==null?fe.get(T).__webglFramebuffer:null;J.bindFramebuffer(U.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(I,W,$,j,G,be,Ce){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=fe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ce!==void 0&&(He=He[Ce]),He){let We=I.texture,nt=We.format,it=We.type;if(!_e.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-j&&$>=0&&$<=I.height-G){J.bindFramebuffer(U.FRAMEBUFFER,He);let Xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.bufferData(U.PIXEL_PACK_BUFFER,be.byteLength,U.STREAM_READ),U.readPixels(W,$,j,G,lt.convert(nt),lt.convert(it),0);let tt=T!==null?fe.get(T).__webglFramebuffer:null;J.bindFramebuffer(U.FRAMEBUFFER,tt);let Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await N0(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,be),U.deleteBuffer(Xe),U.deleteSync(Rt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,$=0){I.isTexture!==!0&&(xa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);let j=Math.pow(2,-$),G=Math.floor(I.image.width*j),be=Math.floor(I.image.height*j),Ce=W!==null?W.x:0,He=W!==null?W.y:0;L.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ce,He,G,be),J.unbindTexture()},this.copyTextureToTexture=function(I,W,$=null,j=null,G=0){I.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,I=arguments[1],W=arguments[2],G=arguments[3]||0,$=null);let be,Ce,He,We,nt,it,Xe,tt,Rt,It=I.isCompressedTexture?I.mipmaps[G]:I.image;$!==null?(be=$.max.x-$.min.x,Ce=$.max.y-$.min.y,He=$.isBox3?$.max.z-$.min.z:1,We=$.min.x,nt=$.min.y,it=$.isBox3?$.min.z:0):(be=It.width,Ce=It.height,He=It.depth||1,We=0,nt=0,it=0),j!==null?(Xe=j.x,tt=j.y,Rt=j.z):(Xe=0,tt=0,Rt=0);let bn=lt.convert(W.format),pt=lt.convert(W.type),qe;W.isData3DTexture?(L.setTexture3D(W,0),qe=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),qe=U.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),qe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);let ii=U.getParameter(U.UNPACK_ROW_LENGTH),vt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),On=U.getParameter(U.UNPACK_SKIP_PIXELS),Bi=U.getParameter(U.UNPACK_SKIP_ROWS),Rn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,We),U.pixelStorei(U.UNPACK_SKIP_ROWS,nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,it);let xt=I.isDataArrayTexture||I.isData3DTexture,yt=W.isDataArrayTexture||W.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){let qn=fe.get(I),ss=fe.get(W),Yn=fe.get(qn.__renderTarget),Oi=fe.get(ss.__renderTarget);J.bindFramebuffer(U.READ_FRAMEBUFFER,Yn.__webglFramebuffer),J.bindFramebuffer(U.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let pi=0;pi<He;pi++)xt&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fe.get(I).__webglTexture,G,it+pi),I.isDepthTexture?(yt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fe.get(W).__webglTexture,G,Rt+pi),U.blitFramebuffer(We,nt,be,Ce,Xe,tt,be,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST)):yt?U.copyTexSubImage3D(qe,G,Xe,tt,Rt+pi,We,nt,be,Ce):U.copyTexSubImage2D(qe,G,Xe,tt,Rt+pi,We,nt,be,Ce);J.bindFramebuffer(U.READ_FRAMEBUFFER,null),J.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yt?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(qe,G,Xe,tt,Rt,be,Ce,He,bn,pt,It.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(qe,G,Xe,tt,Rt,be,Ce,He,bn,It.data):U.texSubImage3D(qe,G,Xe,tt,Rt,be,Ce,He,bn,pt,It):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,Xe,tt,be,Ce,bn,pt,It.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,Xe,tt,It.width,It.height,bn,It.data):U.texSubImage2D(U.TEXTURE_2D,G,Xe,tt,be,Ce,bn,pt,It);U.pixelStorei(U.UNPACK_ROW_LENGTH,ii),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,On),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rn),G===0&&W.generateMipmaps&&U.generateMipmap(qe),J.unbindTexture()},this.copyTextureToTexture3D=function(I,W,$=null,j=null,G=0){return I.isTexture!==!0&&(xa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,I=arguments[2],W=arguments[3],G=arguments[4]||0),xa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,$,j,G)},this.initRenderTarget=function(I){fe.get(I).__webglFramebuffer===void 0&&L.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?L.setTextureCube(I,0):I.isData3DTexture?L.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?L.setTexture2DArray(I,0):L.setTexture2D(I,0),J.unbindTexture()},this.resetState=function(){b=0,E=0,T=null,J.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}},An=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ca=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fn=new R,Br=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Je(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pa=class extends Ci{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ha=new R,yr=new R,_r=new R,Mr=new re,da=new re,zf=new $e,wo=new R,fa=new R,Eo=new R,Gd=new re,fc=new re,Xd=new re,Yo=class extends tn{constructor(e=new Pa){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Ye;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ca(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Br(n,3,0,!1)),xr.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-_r.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;bo(wo.set(-.5,-.5,0),_r,a,yr,s,r),bo(fa.set(.5,-.5,0),_r,a,yr,s,r),bo(Eo.set(.5,.5,0),_r,a,yr,s,r),Gd.set(0,0),fc.set(1,0),Xd.set(1,1);let o=e.ray.intersectTriangle(wo,fa,Eo,!1,ha);if(o===null&&(bo(fa.set(-.5,.5,0),_r,a,yr,s,r),fc.set(0,1),o=e.ray.intersectTriangle(wo,Eo,fa,!1,ha),o===null))return;let l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||t.push({distance:l,point:ha.clone(),uv:fs.getInterpolation(ha,wo,fa,Eo,Gd,fc,Xd,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ia=class extends ln{constructor(e=null,t=1,n=1,s,r,a,o,l,c=ei,u=ei,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ut=class extends Je{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new $e,qd=new $e,So=[],Yd=new Qi,Py=new $e,pa=new ge,ma=new Hn,vn=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ut(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Py)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Yd.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(Yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),ma.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),qd.multiplyMatrices(n,wr),pa.matrixWorld=qd,pa.raycast(e,So);for(let a=0,o=So.length;a<o;a++){let l=So[a];l.instanceId=r,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ut(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ia(new Float32Array(s*this.count),s,this.count,ju,Ti));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Or=class extends Ci{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ko=new R,Zo=new R,Kd=new $e,ga=new Dr,To=new Hn,pc=new R,Zd=new R,La=class extends tn{constructor(e=new Ye,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ko.fromBufferAttribute(t,s-1),Zo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ko.distanceTo(Zo);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;Kd.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),w=u.getX(x+1),M=Ao(this,e,ga,l,p,w);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Ao(this,e,ga,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=Ao(this,e,ga,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ao(this,e,ga,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};$d=new R,Jd=new R,kr=class extends La{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$d.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$d.distanceTo(Jd);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends Ci{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jd=new $e,_u=new Dr,Ro=new Hn,Co=new R,Jt=class extends tn{constructor(e=new Ye,t=new Da){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;jd.copy(s).invert(),_u.copy(e.ray).applyMatrix4(jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Co.fromBufferAttribute(h,m),Qd(Co,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Co.fromBufferAttribute(h,g),Qd(Co,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Mi=class extends ln{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,s=[],r=[],a=[],o=new R,l=new $e;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(mn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(mn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ua=class extends li{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mu=class extends Ua{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Po=new R,mc=new rh,gc=new rh,vc=new rh,Vr=class extends li{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),c=Po);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),mc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),gc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),vc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),gc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),vc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(mc.calc(l),gc.calc(l),vc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};$o=class extends li{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,s.x,r.x,a.x,o.x),ba(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wu=class extends li{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,s.x,r.x,a.x,o.x),ba(e,s.y,r.y,a.y,o.y),ba(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jo=class extends li{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eu=class extends li{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends li{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ea(e,s.x,r.x,a.x),Ea(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bu=class extends li{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ea(e,s.x,r.x,a.x),Ea(e,s.y,r.y,a.y),Ea(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(ef(o,l.x,c.x,u.x,h.x),ef(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Su=Object.freeze({__proto__:null,ArcCurve:Mu,CatmullRomCurve3:Vr,CubicBezierCurve:$o,CubicBezierCurve3:wu,EllipseCurve:Ua,LineCurve:Jo,LineCurve3:Eu,QuadraticBezierCurve:jo,QuadraticBezierCurve3:bu,SplineCurve:Qo}),Tu=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Su[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Su[s.type]().fromJSON(s))}return this}},el=class extends Tu{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jo(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new jo(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new $o(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ua(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pi=class i extends Ye{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=mn(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new R,d=new re,f=new R,g=new R,x=new R,m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let w=0;w<=t;w++){let M=n+w*u*s,v=Math.sin(M),S=Math.cos(M);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*v,h.y=e[b].y,h.z=e[b].x*S,a.push(h.x,h.y,h.z),d.x=w/t,d.y=b/(e.length-1),o.push(d.x,d.y);let E=l[3*b+0]*v,T=l[3*b+1],_=l[3*b+0]*S;c.push(E,T,_)}}for(let w=0;w<t;w++)for(let M=0;M<e.length-1;M++){let v=M+w*e.length,S=v,b=v+e.length,E=v+e.length+1,T=v+1;r.push(S,b,T),r.push(E,T,b)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Wr=class i extends Ye{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new R,u=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ii=class i extends Ye{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;w(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function w(){let v=new R,S=new R,b=0,E=(t-e)/n;for(let T=0;T<=r;T++){let _=[],y=T/r,C=y*(t-e)+e;for(let P=0;P<=s;P++){let D=P/s,N=D*l+o,H=Math.sin(N),F=Math.cos(N);S.x=C*H,S.y=-y*n+m,S.z=C*F,h.push(S.x,S.y,S.z),v.set(H,E,F).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-y),_.push(g++)}x.push(_)}for(let T=0;T<s;T++)for(let _=0;_<r;_++){let y=x[_][T],C=x[_+1][T],P=x[_+1][T+1],D=x[_][T+1];(e>0||_!==0)&&(u.push(y,C,D),b+=3),(t>0||_!==r-1)&&(u.push(C,P,D),b+=3)}c.addGroup(p,b,0),p+=b}function M(v){let S=g,b=new re,E=new R,T=0,_=v===!0?e:t,y=v===!0?1:-1;for(let P=1;P<=s;P++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let C=g;for(let P=0;P<=s;P++){let N=P/s*l+o,H=Math.cos(N),F=Math.sin(N);E.x=_*F,E.y=m*y,E.z=_*H,h.push(E.x,E.y,E.z),d.push(0,y,0),b.x=H*.5+.5,b.y=F*.5*y+.5,f.push(b.x,b.y),g++}for(let P=0;P<s;P++){let D=S+P,N=C+P;v===!0?u.push(N,N+1,D):u.push(N+1,N,D),T+=3}c.addGroup(p,T,v===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Au=class i extends Ye{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let M=new R,v=new R,S=new R;for(let b=0;b<t.length;b+=3)f(t[b+0],M),f(t[b+1],v),f(t[b+2],S),l(M,v,S,w)}function l(w,M,v,S){let b=S+1,E=[];for(let T=0;T<=b;T++){E[T]=[];let _=w.clone().lerp(v,T/b),y=M.clone().lerp(v,T/b),C=b-T;for(let P=0;P<=C;P++)P===0&&T===b?E[T][P]=_:E[T][P]=_.clone().lerp(y,P/C)}for(let T=0;T<b;T++)for(let _=0;_<2*(b-T)-1;_++){let y=Math.floor(_/2);_%2===0?(d(E[T][y+1]),d(E[T+1][y]),d(E[T][y])):(d(E[T][y+1]),d(E[T+1][y+1]),d(E[T+1][y]))}}function c(w){let M=new R;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(w),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function u(){let w=new R;for(let M=0;M<r.length;M+=3){w.x=r[M+0],w.y=r[M+1],w.z=r[M+2];let v=m(w)/2/Math.PI+.5,S=p(w)/Math.PI+.5;a.push(v,1-S)}g(),h()}function h(){for(let w=0;w<a.length;w+=6){let M=a[w+0],v=a[w+2],S=a[w+4],b=Math.max(M,v,S),E=Math.min(M,v,S);b>.9&&E<.1&&(M<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),S<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,M){let v=w*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){let w=new R,M=new R,v=new R,S=new R,b=new re,E=new re,T=new re;for(let _=0,y=0;_<r.length;_+=9,y+=6){w.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),b.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),T.set(a[y+4],a[y+5]),S.copy(w).add(M).add(v).divideScalar(3);let C=m(S);x(b,y+0,w,C),x(E,y+2,M,C),x(T,y+4,v,C)}}function x(w,M,v,S){S<0&&w.x===1&&(a[M]=w.x-1),v.x===0&&v.z===0&&(a[M]=S/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},ys=class extends el{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new el().fromJSON(s))}return this}},Hy={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,d,f;if(n&&(r=Wy(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return Na(r,a,t,o,l,f,0),a}};gs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];nf(e),sf(n,e);let a=e.length;t.forEach(nf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,sf(n,t[l]);let o=Hy.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};tl=class i extends Ye{constructor(e=new ys([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ge(s,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:t_,M,v=!1,S,b,E,T;p&&(M=p.getSpacedPoints(u),v=!0,d=!1,S=p.computeFrenetFrames(u,!1),b=new R,E=new R,T=new R),d||(m=0,f=0,g=0,x=0);let _=o.extractPoints(c),y=_.shape,C=_.holes;if(!gs.isClockWise(y)){y=y.reverse();for(let Q=0,he=C.length;Q<he;Q++){let U=C[Q];gs.isClockWise(U)&&(C[Q]=U.reverse())}}let D=gs.triangulateShape(y,C),N=y;for(let Q=0,he=C.length;Q<he;Q++){let U=C[Q];y=y.concat(U)}function H(Q,he,U){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(he,U)}let F=y.length,B=D.length;function z(Q,he,U){let ve,ue,_e,J=Q.x-he.x,Se=Q.y-he.y,fe=U.x-Q.x,L=U.y-Q.y,A=J*J+Se*Se,k=J*L-Se*fe;if(Math.abs(k)>Number.EPSILON){let te=Math.sqrt(A),pe=Math.sqrt(fe*fe+L*L),ie=he.x-Se/te,Le=he.y+J/te,Ae=U.x-L/pe,Pe=U.y+fe/pe,et=((Ae-ie)*L-(Pe-Le)*fe)/(J*L-Se*fe);ve=ie+J*et-Q.x,ue=Le+Se*et-Q.y;let Me=ve*ve+ue*ue;if(Me<=2)return new re(ve,ue);_e=Math.sqrt(Me/2)}else{let te=!1;J>Number.EPSILON?fe>Number.EPSILON&&(te=!0):J<-Number.EPSILON?fe<-Number.EPSILON&&(te=!0):Math.sign(Se)===Math.sign(L)&&(te=!0),te?(ve=-Se,ue=J,_e=Math.sqrt(A)):(ve=J,ue=Se,_e=Math.sqrt(A/2))}return new re(ve/_e,ue/_e)}let O=[];for(let Q=0,he=N.length,U=he-1,ve=Q+1;Q<he;Q++,U++,ve++)U===he&&(U=0),ve===he&&(ve=0),O[Q]=z(N[Q],N[U],N[ve]);let Z=[],se,de=O.concat();for(let Q=0,he=C.length;Q<he;Q++){let U=C[Q];se=[];for(let ve=0,ue=U.length,_e=ue-1,J=ve+1;ve<ue;ve++,_e++,J++)_e===ue&&(_e=0),J===ue&&(J=0),se[ve]=z(U[ve],U[_e],U[J]);Z.push(se),de=de.concat(se)}for(let Q=0;Q<m;Q++){let he=Q/m,U=f*Math.cos(he*Math.PI/2),ve=g*Math.sin(he*Math.PI/2)+x;for(let ue=0,_e=N.length;ue<_e;ue++){let J=H(N[ue],O[ue],ve);q(J.x,J.y,-U)}for(let ue=0,_e=C.length;ue<_e;ue++){let J=C[ue];se=Z[ue];for(let Se=0,fe=J.length;Se<fe;Se++){let L=H(J[Se],se[Se],ve);q(L.x,L.y,-U)}}}let we=g+x;for(let Q=0;Q<F;Q++){let he=d?H(y[Q],de[Q],we):y[Q];v?(E.copy(S.normals[0]).multiplyScalar(he.x),b.copy(S.binormals[0]).multiplyScalar(he.y),T.copy(M[0]).add(E).add(b),q(T.x,T.y,T.z)):q(he.x,he.y,0)}for(let Q=1;Q<=u;Q++)for(let he=0;he<F;he++){let U=d?H(y[he],de[he],we):y[he];v?(E.copy(S.normals[Q]).multiplyScalar(U.x),b.copy(S.binormals[Q]).multiplyScalar(U.y),T.copy(M[Q]).add(E).add(b),q(T.x,T.y,T.z)):q(U.x,U.y,h/u*Q)}for(let Q=m-1;Q>=0;Q--){let he=Q/m,U=f*Math.cos(he*Math.PI/2),ve=g*Math.sin(he*Math.PI/2)+x;for(let ue=0,_e=N.length;ue<_e;ue++){let J=H(N[ue],O[ue],ve);q(J.x,J.y,h+U)}for(let ue=0,_e=C.length;ue<_e;ue++){let J=C[ue];se=Z[ue];for(let Se=0,fe=J.length;Se<fe;Se++){let L=H(J[Se],se[Se],ve);v?q(L.x,L.y+M[u-1].y,M[u-1].x+U):q(L.x,L.y,h+U)}}}X(),ee();function X(){let Q=s.length/3;if(d){let he=0,U=F*he;for(let ve=0;ve<B;ve++){let ue=D[ve];Y(ue[2]+U,ue[1]+U,ue[0]+U)}he=u+m*2,U=F*he;for(let ve=0;ve<B;ve++){let ue=D[ve];Y(ue[0]+U,ue[1]+U,ue[2]+U)}}else{for(let he=0;he<B;he++){let U=D[he];Y(U[2],U[1],U[0])}for(let he=0;he<B;he++){let U=D[he];Y(U[0]+F*u,U[1]+F*u,U[2]+F*u)}}n.addGroup(Q,s.length/3-Q,0)}function ee(){let Q=s.length/3,he=0;ae(N,he),he+=N.length;for(let U=0,ve=C.length;U<ve;U++){let ue=C[U];ae(ue,he),he+=ue.length}n.addGroup(Q,s.length/3-Q,1)}function ae(Q,he){let U=Q.length;for(;--U>=0;){let ve=U,ue=U-1;ue<0&&(ue=Q.length-1);for(let _e=0,J=u+m*2;_e<J;_e++){let Se=F*_e,fe=F*(_e+1),L=he+ve+Se,A=he+ue+Se,k=he+ue+fe,te=he+ve+fe;ye(L,A,k,te)}}}function q(Q,he,U){l.push(Q),l.push(he),l.push(U)}function Y(Q,he,U){me(Q),me(he),me(U);let ve=s.length/3,ue=w.generateTopUV(n,s,ve-3,ve-2,ve-1);Ee(ue[0]),Ee(ue[1]),Ee(ue[2])}function ye(Q,he,U,ve){me(Q),me(he),me(ve),me(he),me(U),me(ve);let ue=s.length/3,_e=w.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Ee(_e[0]),Ee(_e[1]),Ee(_e[3]),Ee(_e[1]),Ee(_e[2]),Ee(_e[3])}function me(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Ee(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return n_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Su[s.type]().fromJSON(s)),new i(n,e.options)}},t_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-h),new re(d,1-g),new re(x,1-p)]:[new re(o,1-l),new re(u,1-h),new re(f,1-g),new re(m,1-p)]}};nl=class i extends Au{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ha=class i extends Ye{constructor(e=new ys([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(a,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;gs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let w=g[m];gs.isClockWise(w)===!0&&(g[m]=w.reverse())}let x=gs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let w=g[m];f=f.concat(w)}for(let m=0,p=f.length;m<p;m++){let w=f[m];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let m=0,p=x.length;m<p;m++){let w=x[m],M=w[0]+h,v=w[1]+h,S=w[2]+h;n.push(M,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return i_(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};xn=class i extends Ye{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let w=[],M=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){let b=S/t;h.x=-e*Math.cos(s+b*r)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(s+b*r)*Math.sin(a+M*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+v,1-M),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let M=u[p][w+1],v=u[p][w],S=u[p+1][w],b=u[p+1][w+1];(p!==0||a>0)&&f.push(M,v,b),(p!==n-1||l<Math.PI)&&f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},il=class extends Te{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Nt=class extends Ci{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tf,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};Gr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pu=class extends Gr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zh:r=e,o=2*t-n;break;case $h:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:a=e,l=2*n-t;break;case $h:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,w=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+w*a[c+S]+M*a[l+S]+v*a[h+S];return r}},Iu=class extends Gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Lu=class extends Gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Do(t,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Do(e.times,Array),values:Do(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case su:t=this.InterpolantFactoryMethodLinear;break;case Ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return su;case this.InterpolantFactoryMethodSmooth:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&s_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ol,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=su;Ys=class extends wi{constructor(e,t,n){super(e,t,n)}};Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Oo;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;Du=class extends wi{};Du.prototype.ValueTypeName="color";Uu=class extends wi{};Uu.prototype.ValueTypeName="number";Nu=class extends Gr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Dt.slerpFlat(r,0,a,c-o,a,c,l);return r}},sl=class extends wi{InterpolantFactoryMethodLinear(e){return new Nu(this.times,this.values,this.getValueSize(),e)}};sl.prototype.ValueTypeName="quaternion";sl.prototype.InterpolantFactoryMethodSmooth=void 0;Ks=class extends wi{constructor(e,t,n){super(e,t,n)}};Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Oo;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;Fu=class extends wi{};Fu.prototype.ValueTypeName="vector";rf={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zu=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},ah=new zu,Ba=class{constructor(e){this.manager=e!==void 0?e:ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";Hu=class extends Ba{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=rf.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Aa("img");function l(){u(),rf.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},rl=class extends Ba{constructor(e){super(e)}load(e,t,n,s){let r=new ln,a=new Hu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xr=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ci=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xc=new $e,af=new R,of=new R,al=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lf=new $e,va=new R,yc=new R,Bu=class extends al{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),n.position.copy(va),yc.copy(n.position),yc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yc),n.updateMatrixWorld(),s.makeTranslation(-va.x,-va.y,-va.z),lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf)}},qr=class extends Xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ou=class extends al{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vn=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Ou}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ol=class extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ui=class extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Yr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=cf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};oh="\\[\\]\\.:\\/",r_=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",a_="[^"+oh.replace("\\.","")+"]",o_=/((?:WC+[\/:])*)/.source.replace("WC",lh),l_=/(WCOD+)?/.source.replace("WCOD",a_),c_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),u_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),h_=new RegExp("^"+o_+l_+c_+u_+"$"),d_=["material","materials","bones","map"],ku=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(r_,"")}static parseTrackName(e){let t=h_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=ku;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];v1=new Float32Array(1),uf=new $e,ll=class{constructor(e,t,n=0,s=1/0){this.ray=new Dr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(e,t=!0,n=[]){return Vu(e,this,n,t),n.sort(hf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Vu(e[s],this,n,t);return n.sort(hf),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu)});var Mh={};Fp(Mh,{computeMikkTSpaceTangents:()=>L_,computeMorphedAttributes:()=>O_,deepCloneAttribute:()=>U_,deinterleaveAttribute:()=>Sl,deinterleaveGeometry:()=>F_,estimateBytesUsed:()=>z_,interleaveAttributes:()=>N_,mergeAttributes:()=>_h,mergeGeometries:()=>D_,mergeGroups:()=>k_,mergeVertices:()=>H_,toCreasedNormals:()=>V_,toTrianglesDrawMode:()=>B_});function L_(i,e,t=!0){if(!e||!e.isReady)throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");if(!i.hasAttribute("position")||!i.hasAttribute("normal")||!i.hasAttribute("uv"))throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function n(a){if(a.normalized||a.isInterleavedBufferAttribute){let o=new Float32Array(a.count*a.itemSize);for(let l=0,c=0;l<a.count;l++)o[c++]=a.getX(l),o[c++]=a.getY(l),a.itemSize>2&&(o[c++]=a.getZ(l));return o}return a.array instanceof Float32Array?a.array:new Float32Array(a.array)}let s=i.index?i.toNonIndexed():i,r=e.generateTangents(n(s.attributes.position),n(s.attributes.normal),n(s.attributes.uv));if(t)for(let a=3;a<r.length;a+=4)r[a]*=-1;return s.setAttribute("tangent",new Je(r,4)),i!==s&&i.copy(s),i}function D_(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ye,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=_h(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let g=_h(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function _h(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Je(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);o.setComponent(d+h,g,x)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function U_(i){return i.isInstancedInterleavedBufferAttribute||i.isInterleavedBufferAttribute?Sl(i):i.isInstancedBufferAttribute?new Ut().copy(i):new Je().copy(i)}function N_(i){let e,t=0,n=0;for(let c=0,u=i.length;c<u;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=h.array.length,n+=h.itemSize}let s=new Ca(new e(t),n),r=0,a=[],o=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,u=i.length;c<u;c++){let h=i[c],d=h.itemSize,f=h.count,g=new Br(s,d,r,h.normalized);a.push(g),r+=d;for(let x=0;x<f;x++)for(let m=0;m<d;m++)g[l[m]](x,h[o[m]](x))}return a}function Sl(i){let e=i.data.array.constructor,t=i.count,n=i.itemSize,s=i.normalized,r=new e(t*n),a;i.isInstancedInterleavedBufferAttribute?a=new Ut(r,n,s,i.meshPerAttribute):a=new Je(r,n,s);for(let o=0;o<t;o++)a.setX(o,i.getX(o)),n>=2&&a.setY(o,i.getY(o)),n>=3&&a.setZ(o,i.getZ(o)),n>=4&&a.setW(o,i.getW(o));return a}function F_(i){let e=i.attributes,t=i.morphTargets,n=new Map;for(let s in e){let r=e[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,Sl(r)),e[s]=n.get(r))}for(let s in t){let r=t[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,Sl(r)),t[s]=n.get(r))}}function z_(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function H_(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let w=0,M=o.length;w<M;w++){let v=o[w],S=i.attributes[v];l[v]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let b=i.morphAttributes[v];b&&(c[v]||(c[v]=[]),b.forEach((E,T)=>{let _=new E.array.constructor(E.count*E.itemSize);c[v][T]=new E.constructor(_,E.itemSize,E.normalized)}))}let f=e*.5,g=Math.log10(1/e),x=Math.pow(10,g),m=f*x;for(let w=0;w<r;w++){let M=n?n.getX(w):w,v="";for(let S=0,b=o.length;S<b;S++){let E=o[S],T=i.getAttribute(E),_=T.itemSize;for(let y=0;y<_;y++)v+=`${~~(T[h[y]](M)*x+m)},`}if(v in t)u.push(t[v]);else{for(let S=0,b=o.length;S<b;S++){let E=o[S],T=i.getAttribute(E),_=i.morphAttributes[E],y=T.itemSize,C=l[E],P=c[E];for(let D=0;D<y;D++){let N=h[D],H=d[D];if(C[H](a,T[N](M)),_)for(let F=0,B=_.length;F<B;F++)P[F][H](a,_[F][N](M))}}t[v]=a,u.push(a),a++}}let p=i.clone();for(let w in i.attributes){let M=l[w];if(p.setAttribute(w,new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)),w in c)for(let v=0;v<c[w].length;v++){let S=c[w][v];p.morphAttributes[w][v]=new S.constructor(S.array.slice(0,a*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(u),p}function B_(i,e){if(e===bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===nh||e===Sf){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===nh)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function O_(i){let e=new R,t=new R,n=new R,s=new R,r=new R,a=new R,o=new R,l=new R,c=new R;function u(O,Z,se,de,we,X,ee,ae){e.fromBufferAttribute(Z,we),t.fromBufferAttribute(Z,X),n.fromBufferAttribute(Z,ee);let q=O.morphTargetInfluences;if(se&&q){o.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let Y=0,ye=se.length;Y<ye;Y++){let me=q[Y],Ee=se[Y];me!==0&&(s.fromBufferAttribute(Ee,we),r.fromBufferAttribute(Ee,X),a.fromBufferAttribute(Ee,ee),de?(o.addScaledVector(s,me),l.addScaledVector(r,me),c.addScaledVector(a,me)):(o.addScaledVector(s.sub(e),me),l.addScaledVector(r.sub(t),me),c.addScaledVector(a.sub(n),me)))}e.add(o),t.add(l),n.add(c)}O.isSkinnedMesh&&(O.applyBoneTransform(we,e),O.applyBoneTransform(X,t),O.applyBoneTransform(ee,n)),ae[we*3+0]=e.x,ae[we*3+1]=e.y,ae[we*3+2]=e.z,ae[X*3+0]=t.x,ae[X*3+1]=t.y,ae[X*3+2]=t.z,ae[ee*3+0]=n.x,ae[ee*3+1]=n.y,ae[ee*3+2]=n.z}let h=i.geometry,d=i.material,f,g,x,m=h.index,p=h.attributes.position,w=h.morphAttributes.position,M=h.morphTargetsRelative,v=h.attributes.normal,S=h.morphAttributes.position,b=h.groups,E=h.drawRange,T,_,y,C,P,D,N,H=new Float32Array(p.count*p.itemSize),F=new Float32Array(v.count*v.itemSize);if(m!==null)if(Array.isArray(d))for(T=0,y=b.length;T<y;T++)for(P=b[T],D=Math.max(P.start,E.start),N=Math.min(P.start+P.count,E.start+E.count),_=D,C=N;_<C;_+=3)f=m.getX(_),g=m.getX(_+1),x=m.getX(_+2),u(i,p,w,M,f,g,x,H),u(i,v,S,M,f,g,x,F);else for(D=Math.max(0,E.start),N=Math.min(m.count,E.start+E.count),T=D,y=N;T<y;T+=3)f=m.getX(T),g=m.getX(T+1),x=m.getX(T+2),u(i,p,w,M,f,g,x,H),u(i,v,S,M,f,g,x,F);else if(Array.isArray(d))for(T=0,y=b.length;T<y;T++)for(P=b[T],D=Math.max(P.start,E.start),N=Math.min(P.start+P.count,E.start+E.count),_=D,C=N;_<C;_+=3)f=_,g=_+1,x=_+2,u(i,p,w,M,f,g,x,H),u(i,v,S,M,f,g,x,F);else for(D=Math.max(0,E.start),N=Math.min(p.count,E.start+E.count),T=D,y=N;T<y;T+=3)f=T,g=T+1,x=T+2,u(i,p,w,M,f,g,x,H),u(i,v,S,M,f,g,x,F);let B=new Ge(H,3),z=new Ge(F,3);return{positionAttribute:p,normalAttribute:v,morphedPositionAttribute:B,morphedNormalAttribute:z}}function k_(i){if(i.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),i;let e=i.groups;if(e=e.sort((a,o)=>a.materialIndex!==o.materialIndex?a.materialIndex-o.materialIndex:a.start-o.start),i.getIndex()===null){let a=i.getAttribute("position"),o=[];for(let l=0;l<a.count;l+=3)o.push(l,l+1,l+2);i.setIndex(o)}let t=i.getIndex(),n=[];for(let a=0;a<e.length;a++){let o=e[a],l=o.start,c=l+o.count;for(let u=l;u<c;u++)n.push(t.getX(u))}i.dispose(),i.setIndex(n);let s=0;for(let a=0;a<e.length;a++){let o=e[a];o.start=s,s+=o.count}let r=e[0];i.groups=[r];for(let a=1;a<e.length;a++){let o=e[a];r.materialIndex===o.materialIndex?r.count+=o.count:(r=o,i.groups.push(r))}return i}function V_(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new R,new R,new R],r=new R,a=new R,o=new R,l=new R;function c(x){let m=~~(x.x*n),p=~~(x.y*n),w=~~(x.z*n);return`${m},${p},${w}`}let u=i.index?i.toNonIndexed():i,h=u.attributes.position,d={};for(let x=0,m=h.count/3;x<m;x++){let p=3*x,w=s[0].fromBufferAttribute(h,p+0),M=s[1].fromBufferAttribute(h,p+1),v=s[2].fromBufferAttribute(h,p+2);r.subVectors(v,M),a.subVectors(w,M);let S=new R().crossVectors(r,a).normalize();for(let b=0;b<3;b++){let E=s[b],T=c(E);T in d||(d[T]=[]),d[T].push(S)}}let f=new Float32Array(h.count*3),g=new Je(f,3,!1);for(let x=0,m=h.count/3;x<m;x++){let p=3*x,w=s[0].fromBufferAttribute(h,p+0),M=s[1].fromBufferAttribute(h,p+1),v=s[2].fromBufferAttribute(h,p+2);r.subVectors(v,M),a.subVectors(w,M),o.crossVectors(r,a).normalize();for(let S=0;S<3;S++){let b=s[S],E=c(b),T=d[E];l.set(0,0,0);for(let _=0,y=T.length;_<y;_++){let C=T[_];o.dot(C)>t&&l.add(C)}l.normalize(),g.setXYZ(p+S,l.x,l.y,l.z)}}return u.setAttribute("normal",g),u}var wh=Xh(()=>{Pt()});Pt();Pt();var fl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Pt();Pt();var ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},f_=new zr(-1,1,1,-1,0,1),ch=class extends Ye{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},p_=new ch,_s=class{constructor(e){this._mesh=new ge(p_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ms=class extends ti{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Te?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Li.clone(e.uniforms),this.material=new Te({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _s(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Oa=class extends ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},pl=class extends ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ml=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(fl),this.copyPass.material.blending=oi,this.clock=new Yr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Oa!==void 0&&(a instanceof Oa?n=!0:a instanceof pl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Pt();var gl=class extends ti{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};Pt();Pt();var kf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var $r=class i extends ti{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:qt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Vt(r,a,{type:qt});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Vt(r,a,{type:qt});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=kf;this.highPassUniforms=Li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=fl;this.copyUniforms=Li.clone(u.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:St,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new Tn,this.fsQuad=new _s(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Te({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Te({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};$r.BlurDirectionX=new re(1,0);$r.BlurDirectionY=new re(0,1);Pt();var Vf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var vl=class extends ti{constructor(){super();let e=Vf;this.uniforms=Li.clone(e.uniforms),this.material=new il({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new _s(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ku&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};Pt();var $s=class i extends ge{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Zt;let n=this,s=t.color!==void 0?new xe(t.color):new xe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new jn,h=new R,d=new R,f=new R,g=new $e,x=new R(0,0,-1),m=new je,p=new R,w=new R,M=new je,v=new $e,S=this.camera,b=new Vt(r,a,{samples:c,type:qt}),E=new Te({name:l.name!==void 0?l.name:"unspecified",uniforms:Li.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=b.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=v,this.material=E,this.onBeforeRender=function(T,_,y){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0)return;p.reflect(h).negate(),p.add(d),g.extractRotation(y.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),w.subVectors(d,x),w.reflect(h).negate(),w.add(d),S.position.copy(p),S.up.set(0,1,0),S.up.applyMatrix4(g),S.up.reflect(h),S.lookAt(w),S.far=y.far,S.updateMatrixWorld(),S.projectionMatrix.copy(y.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(S.projectionMatrix),v.multiply(S.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(S.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let C=S.projectionMatrix;M.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],M.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],M.z=-1,M.w=(1+C.elements[10])/C.elements[14],m.multiplyScalar(2/m.dot(M)),C.elements[2]=m.x,C.elements[6]=m.y,C.elements[10]=m.z+1-o,C.elements[14]=m.w,n.visible=!1;let P=T.getRenderTarget(),D=T.xr.enabled,N=T.shadowMap.autoUpdate;T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,T.setRenderTarget(b),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(_,S),T.xr.enabled=D,T.shadowMap.autoUpdate=N,T.setRenderTarget(P);let H=y.viewport;H!==void 0&&T.state.viewport(H),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};$s.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};Pt();var ni=`
  uniform float uTime, uFogK; uniform vec3 uSun, uFogCol;
  vec3 applyFog(vec3 c, vec3 w){
    vec3 d = w - cameraPosition; float l = length(d);
    float f = 1.0 - exp(-max(l - 25.0, 0.0) * uFogK);
    float s = pow(max(dot(d / l, uSun), 0.0), 6.0);
    vec3 col = uFogCol * mix(vec3(1.0), vec3(1.35, 1.05, 0.75), s);
    return mix(c, col, f);
  }`,Wf=`
  float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y); }`;function ka(i,e,t=1,n=1){let s=new Ye,r=[],a=[],o=4;for(let f=0;f<o;f++){let g=f/o;r.push(-.5,g,0,.5,g,0)}r.push(0,1,0);for(let f=0;f<o-1;f++){let g=f*2;a.push(g,g+1,g+3,g,g+3,g+2)}a.push((o-1)*2,(o-1)*2+1,o*2),s.setAttribute("position",new Ge(r,3)),s.setIndex(a);let l=new ui;l.index=s.index,l.attributes.position=s.attributes.position;let c=n*9301+49297,u=()=>(c=c*16807%2147483647)/2147483647,h=new Float32Array(i*4),d=new Float32Array(i*2);for(let f=0;f<i;f++)h[f*4]=u()*e,h[f*4+1]=u()*e,h[f*4+2]=u()*Math.PI*2,h[f*4+3]=u(),d[f*2]=u(),d[f*2+1]=u()*2-1;return l.setAttribute("aOff",new Ut(h,4)),l.setAttribute("aVar",new Ut(d,2)),l.instanceCount=i,l}function uh(i,e=!1){return new Te({side:ft,uniforms:{uNear:{value:0},...i},defines:e?{FAR:""}:{},vertexShader:`
      ${Wf}
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
      ${ni}
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
      }`})}Pt();function Gf(i,e,t){let n=new nl(1,0),s=new ui;s.attributes.position=n.attributes.position,s.attributes.normal=n.attributes.normal;let r=[],a=[],o=77,l=()=>(o=o*16807%2147483647)/2147483647;for(let[u,h,d,f,g]of i){let x=Math.max(g,.6)*1.05,m=Math.round(e*Math.min(1.6,f*x/9));for(let p=0;p<m;p++){let w=Math.pow(l(),.85),M=(w<.22?Math.sqrt(w/.22):Math.pow((1-w)/.78,.85))*x;w<.04&&(M*=.5);let v=l()*Math.PI*2,S=M*(.55+.45*Math.sqrt(l())),b=.16+l()*.2;r.push(u+Math.cos(v)*S,h+.25+w*f,d+Math.sin(v)*S,b*(.7+.6*(1-w))),a.push(u,h,d,f)}}s.setAttribute("aC",new Ut(new Float32Array(r),4)),s.setAttribute("aT",new Ut(new Float32Array(a),4)),s.instanceCount=r.length/4;let c=new ge(s,new Te({uniforms:t,vertexShader:`
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
      ${ni}
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
      }`}));return c.frustumCulled=!1,c}Pt();var Va={y:9,z:150},Di=7.3,xl=8.1,yl=5.5+2.9,Xf=[{pos:[0,9.4,Va.z+26],tgt:[0,5.2,Va.z],w:1.5},{pos:[-12,7.6,Va.z-4],tgt:[0,10,60],w:1.4},{pos:[0,7.5,128],tgt:[0,10,20],w:1.4},{pos:[0,1.75,82],tgt:[0,6.5,26],w:1.4},{pos:[-4.3,1.9,48],tgt:[0,7.5,24],w:1},{pos:[2,3.4,18],tgt:[0,14,-30],w:1.2},{pos:[0,5.8,2],tgt:[0,20,-16],w:1.2},{pos:[0,6.8,-9],tgt:[0,9,-40],w:1},{pos:[0,Di,-20],tgt:[0,8.6,-50],w:1},{pos:[0,Di,-27.5],tgt:[0,8.6,-60],w:1.1},{pos:[.6,Di,-31.4],tgt:[-xl,yl,-32],w:1.5},{pos:[0,Di,-34.6],tgt:[0,8.5,-70],w:.9},{pos:[-.6,Di,-35.8],tgt:[xl,yl,-36.4],w:1.5},{pos:[0,Di,-39],tgt:[0,8.5,-70],w:.9},{pos:[.6,Di,-40.2],tgt:[-xl,yl,-40.8],w:1.5},{pos:[0,Di,-43.4],tgt:[0,8.4,-70],w:.9},{pos:[-.6,Di,-44.6],tgt:[xl,yl,-45.2],w:1.5},{pos:[0,Di,-49],tgt:[0,8,-80],w:1},{pos:[0,7.4,-53],tgt:[0,7.6,-90],w:0}],Es=[0];Xf.slice(0,-1).forEach(i=>Es.push(Es[Es.length-1]+i.w));var hh=Es[Es.length-1],ws=i=>Es[i]/hh,Js=Es[2]/hh,_l=i=>(Es[2]+i*12.2)/hh,Jr=1,Ml={pos:[0,9.1,-53.35],size:[4.5,7.2]};var eM=new R(0,Va.y,Va.z),qf=[{at:[0,Js*.55],kick:"Welcome to Nomadiic Horse Designs",line:"Turn our horse, then scroll to step inside."},{at:[Js*.55,_l(.2)],kick:"We are Nomadiic Horse Designs",line:"A very detailed design team from Bangalore, India."},{at:[_l(.2),_l(.36)],kick:"Our philosophy",line:"We build brands the way the Greeks built palaces: with proportion, patience and a little audacity."},{at:[_l(.36),ws(9)],kick:"What we make",line:"Branding and websites for founders who want to be remembered."},{at:[ws(9),ws(11)],kick:"About us",line:"Selected as Top 1% Framer Designers."},{at:[ws(11),ws(13)],kick:"About us",line:"Selected as Framer Experts by Team Framer."},{at:[ws(13),ws(15)],kick:"About us",line:"Selected as a Shopify Partner."},{at:[ws(15),1.01],kick:"About us",line:"20+ clients across India, the USA and Australia. Step through, and meet a few of them."}];function bs(i=Xf){let e=i.length,t=new Vr(i.map(v=>new R(...v.pos)),!1,"centripetal",.5),n=new Vr(i.map(v=>new R(...v.tgt)),!1,"centripetal"),s=i.slice(0,-1).map(v=>v.w||1),r=[0];s.forEach(v=>r.push(r[r.length-1]+v));let a=r[r.length-1],o=4e3,l=t.getLengths(o),c=i.map((v,S)=>l[Math.round(S/(e-1)*o)]),u=s.map((v,S)=>Math.max(c[S+1]-c[S],.001)),h=s.map((v,S)=>r[S]+v/2),d=s.map((v,S)=>u[S]/v),f=v=>{if(v<=h[0])return d[0];for(let S=0;S<d.length-1;S++)if(v<=h[S+1])return ut.lerp(d[S],d[S+1],(v-h[S])/(h[S+1]-h[S]));return d[d.length-1]},g=v=>{let S=0,b=120;for(let E=0;E<b;E++)S+=f(r[v]+(E+.5)/b*s[v]);return S/b*s[v]};for(let v=0;v<60;v++)d=d.map((S,b)=>Math.max(.05,S*Math.pow(u[b]/Math.max(g(b),1e-6),.7)));let x=6e3,m=new Float32Array(x+1);for(let v=1;v<=x;v++){let S=(v-1)/x*a,b=v/x*a;m[v]=m[v-1]+f((S+b)/2)*(b-S)}let p=l[o]/m[x],w=v=>{let S=0,b=o;for(;S<b;){let y=S+b>>1;l[y]<v?S=y+1:b=y}let E=Math.max(1,S),T=l[E-1],_=l[E];return(E-1+(_>T?(v-T)/(_-T):0))/o},M=v=>{let S=ut.clamp(v,0,1)*x,b=Math.floor(S),E=S-b;return w((b>=x?m[x]:m[b]+(m[b+1]-m[b])*E)*p)};return{sample(v,S,b){let E=M(v);return t.getPoint(E,S),n.getPoint(E,b),E*(e-1)}}}var dh=[{lines:["Selected as","Top 1% Framer Designers"],x:-7.66,z:-32},{lines:["Selected as","Framer Experts by Team Framer"],x:7.66,z:-36.4},{lines:["Selected as","Shopify Partner"],x:-7.66,z:-40.8},{lines:["20+ clients","India \xB7 USA \xB7 Australia"],x:7.66,z:-45.2}];Pt();Pt();var wl=class extends An{constructor(){super();let e=new gn;e.deleteAttribute("uv");let t=new Nt({side:Bt}),n=new Nt,s=new qr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ge(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new ge(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new ge(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ge(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new ge(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new ge(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new ge(e,jr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new ge(e,jr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new ge(e,jr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new ge(e,jr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new ge(e,jr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new ge(e,jr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function jr(i){let e=new Tn;return e.color.setScalar(i),e}function Kf(){let i=null,e=null,t=null,n=null,s=null,r=null,a=!1,o=null,l=null,c=1,u=0,h=0,d=2.5,f=0,g=-99,x=0,m=0,p=[.5,.7],w=[],M={flash:0,flashPos:p,rain:1,started:!1,get strikeId(){return x},start(v){if(M.started=!0,!!v)try{i=new(window.AudioContext||window.webkitAudioContext),e=i.createGain(),e.gain.value=0,e.connect(i.destination),e.gain.linearRampToValueAtTime(.9,i.currentTime+2.5);let S=i.sampleRate,b=S*4;o=i.createBuffer(1,b,S);let E=o.getChannelData(0);for(let ee=0;ee<b;ee++)E[ee]=Math.random()*2-1;l=i.createBuffer(1,b,S);let T=l.getChannelData(0),_=0;for(let ee=0;ee<b;ee++)_=(_+.02*(Math.random()*2-1))/1.02,T[ee]=_*3.5;let y=ee=>{let ae=i.createBufferSource();return ae.buffer=ee,ae.loop=!0,ae.start(i.currentTime+Math.random()),ae};t=i.createGain(),t.gain.value=0,t.connect(e);for(let[ee,ae,q]of[[700,5200,1],[2600,9e3,.45]]){let Y=y(o),ye=i.createBiquadFilter(),me=i.createBiquadFilter(),Ee=i.createGain();ye.type="highpass",ye.frequency.value=ee,me.type="lowpass",me.frequency.value=ae,Ee.gain.value=q,Y.connect(ye),ye.connect(me),me.connect(Ee),Ee.connect(t)}n=i.createGain(),n.gain.value=0,n.connect(e);let C=y(l),P=i.createBiquadFilter();P.type="lowpass",P.frequency.value=380,P.Q.value=.7;let D=i.createOscillator(),N=i.createGain();D.frequency.value=.06,N.gain.value=240,D.connect(N),N.connect(P.frequency),D.start(),C.connect(P),P.connect(n),s=i.createGain(),s.gain.value=0,s.connect(e);let H=i.createBiquadFilter();H.type="lowpass",H.frequency.value=260,H.connect(s);for(let[ee,ae]of[[55,"sine"],[82.6,"triangle"],[110.3,"sine"]]){let q=i.createOscillator();q.type=ae,q.frequency.value=ee,q.detune.value=(Math.random()-.5)*12;let Y=i.createGain();Y.gain.value=ae==="sine"?.6:.25,q.connect(Y),Y.connect(H),q.start()}r=i.createGain(),r.gain.value=0,r.connect(e);let F=i.createBiquadFilter();F.type="lowpass",F.frequency.value=1800,F.connect(r);let B=i.createDelay(1),z=i.createGain(),O=i.createBiquadFilter();B.delayTime.value=.42,z.gain.value=.38,O.type="lowpass",O.frequency.value=1400,F.connect(B),B.connect(O),O.connect(z),z.connect(B),O.connect(r),M._mus=F;let Z=y(l),se=i.createBiquadFilter(),de=i.createGain(),we=i.createOscillator(),X=i.createGain();se.type="lowpass",se.frequency.value=700,de.gain.value=0,we.frequency.value=.09,X.gain.value=.05,we.connect(X),X.connect(de.gain),we.start(),Z.connect(se),se.connect(de),de.connect(e),M._surf=de}catch(S){console.warn("[storm] audio",S),i=null}},strike(v=.6+Math.random()*.4,S=null){g=f,m=v,x++,p[0]=S?S[0]:.2+Math.random()*.6,p[1]=S?S[1]:.62+Math.random()*.3,w.push({at:f+.25+(1-v)*2.4,pow:v})},thunder(v){if(!i||a)return;let S=i.currentTime,b=4+v*4,E=i.createGain();if(E.gain.value=0,E.connect(e),v>.75){let N=i.createBufferSource();N.buffer=o;let H=i.createBiquadFilter();H.type="highpass",H.frequency.value=1400;let F=i.createGain();F.gain.setValueAtTime(0,S),F.gain.linearRampToValueAtTime(.5*v,S+.01),F.gain.exponentialRampToValueAtTime(.001,S+.35),N.connect(H),H.connect(F),F.connect(e),N.start(S,Math.random()*3,.5)}let T=i.createBufferSource();T.buffer=l,T.loop=!0;let _=i.createBiquadFilter();_.type="lowpass",_.frequency.value=140+v*220,_.frequency.setValueAtTime(140+v*380,S),_.frequency.exponentialRampToValueAtTime(90,S+b),T.connect(_),_.connect(E),T.start(S,Math.random()*3),T.stop(S+b+.5),E.gain.setValueAtTime(1e-4,S),E.gain.exponentialRampToValueAtTime(1.15*v,S+.35+(1-v)*.5),E.gain.setTargetAtTime(1e-4,S+.9+(1-v)*.5,b*.28);let y=i.createOscillator(),C=i.createGain();y.frequency.value=.35+Math.random()*.25,C.gain.value=.18*v,y.connect(C),C.connect(E.gain),y.start(S),y.stop(S+b+.5);let P=i.createOscillator();P.frequency.value=38+Math.random()*8;let D=i.createGain();D.gain.setValueAtTime(1e-4,S),D.gain.exponentialRampToValueAtTime(.18*v,S+.6),D.gain.setTargetAtTime(1e-4,S+1,b*.25),P.connect(D),D.connect(e),P.start(S),P.stop(S+b)},setRain(v){M.rain=v,M.setMix(v)},setMix(v){if(c=v,!t)return;let S=i.currentTime;t.gain.setTargetAtTime(0,S,.5),n.gain.setTargetAtTime(0,S,.5),s.gain.setTargetAtTime(0,S,.5),r.gain.setTargetAtTime(.16*(1-v),S,1.2)},get mix(){return c},amb:"",setAmb(v){M.amb=v,M._surf&&M._surf.gain.setTargetAtTime(v==="sea"?.09:0,i.currentTime,1.2)},chirp(){if(!i||a)return;let v=i.currentTime,S=i.createStereoPanner();S.pan.value=Math.random()*1.6-.8,S.connect(e);let b=2+Math.floor(Math.random()*5),E=2200+Math.random()*1800,T=.05+Math.random()*.06,_=T+.03+Math.random()*.05,y=.012+Math.random()*.02;for(let C=0;C<b;C++){let P=i.createOscillator(),D=i.createGain(),N=v+C*_;P.type="sine",P.frequency.setValueAtTime(E*(.9+Math.random()*.15),N),P.frequency.exponentialRampToValueAtTime(E*(1.4+Math.random()*.5),N+T),D.gain.setValueAtTime(0,N),D.gain.linearRampToValueAtTime(y,N+.008),D.gain.exponentialRampToValueAtTime(1e-4,N+T),P.connect(D),D.connect(S),P.start(N),P.stop(N+T+.02)}},gull(){if(!i||a)return;let v=i.currentTime,S=i.createStereoPanner();S.pan.value=Math.random()*1.4-.7,S.connect(e);for(let b=0;b<2+Math.floor(Math.random()*3);b++){let E=v+b*.32,T=i.createOscillator(),_=i.createOscillator(),y=i.createGain(),C=i.createGain(),P=i.createBiquadFilter();T.type="sawtooth",T.frequency.setValueAtTime(1500,E),T.frequency.exponentialRampToValueAtTime(820,E+.26),_.frequency.value=28,y.gain.value=40,_.connect(y),y.connect(T.frequency),P.type="bandpass",P.frequency.value=1300,P.Q.value=3,C.gain.setValueAtTime(0,E),C.gain.linearRampToValueAtTime(.012,E+.03),C.gain.exponentialRampToValueAtTime(1e-4,E+.28),T.connect(P),P.connect(C),C.connect(S),T.start(E),_.start(E),T.stop(E+.3),_.stop(E+.3)}},setMuted(v){a=v,e&&e.gain.setTargetAtTime(v?0:.9,i.currentTime,.25)},get muted(){return a},get hasSound(){return!!i},update(v,S=!0){f+=v,M.started&&S&&f>d&&(M.strike(),d=f+2.5+Math.random()*5.5);let b=f-g;M.flash=b<0?0:m*(b<.05?b/.05:Math.exp(-(b-.05)*14)+(b>.16&&b<.5?.75*Math.exp(-(b-.16)*9):0)+(b>.42?.35*Math.exp(-(b-.42)*6):0));for(let E=w.length-1;E>=0;E--)f>=w[E].at&&(c>.4&&M.thunder(w[E].pow*c),w.splice(E,1));if(M.amb==="forest"&&Math.random()<v*.9&&M.chirp(),M.amb==="sea"&&Math.random()<v*.12&&M.gull(),i&&M._mus&&c<.95){if(u-=v,u<=0){u=7;let E=[[146.8,220,277.2,370],[123.5,185,246.9,293.7],[98,196,246.9,293.7],[110,164.8,220,277.2]],T=i.currentTime;for(let _ of E[h++%E.length])for(let[y,C,P]of[["triangle",-4,.05],["sine",5,.07]]){let D=i.createOscillator(),N=i.createGain();D.type=y,D.frequency.value=_,D.detune.value=C,N.gain.setValueAtTime(0,T),N.gain.linearRampToValueAtTime(P,T+2.6),N.gain.setValueAtTime(P,T+6),N.gain.linearRampToValueAtTime(0,T+9.5),D.connect(N),N.connect(M._mus),D.start(T),D.stop(T+10)}}if(Math.random()<v*.35){let E=[587.3,659.3,740,880,987.8,1174.7],T=i.currentTime,_=E[Math.floor(Math.random()*E.length)];for(let[y,C]of[[1,.06],[2.01,.015]]){let P=i.createOscillator(),D=i.createGain();P.type="sine",P.frequency.value=_*y,D.gain.setValueAtTime(0,T),D.gain.linearRampToValueAtTime(C,T+.01),D.gain.exponentialRampToValueAtTime(1e-4,T+3.5),P.connect(D),D.connect(M._mus),P.start(T),P.stop(T+3.6)}}}return M.flash},destroy(){try{i&&i.close()}catch{}}};return M}var m_=`
.nst{position:absolute;inset:0;z-index:30;background:transparent;color:#dfe6f2;font-family:Satoshi,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden;cursor:default;transition:opacity 1.6s ease}
.nst canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.nst .bolt{pointer-events:none}
.nst .mark{position:absolute;left:50%;bottom:calc(6% + 78px);transform:translate(-50%,0);text-align:center;pointer-events:none;transition:opacity 1.2s ease, transform 2.4s cubic-bezier(.6,0,.2,1)}
.nst .mark .wm{font-family:"Nomadiic Line",Satoshi,sans-serif;font-size:13px;letter-spacing:.62em;padding-left:.62em;color:#e8edf6;white-space:nowrap}
.nst .mark .sub{margin-top:9px;font-size:7.5px;letter-spacing:.9em;padding-left:.9em;color:rgba(223,230,242,.55);text-transform:uppercase}
.nst .load{position:absolute;left:50%;bottom:6.5%;transform:translateX(-50%);display:flex;align-items:center;gap:14px;transition:opacity .8s ease}
.nst .load .bar{width:120px;height:1px;background:rgba(223,230,242,.16);position:relative;overflow:hidden}
.nst .load .bar i{position:absolute;inset:0;background:rgba(223,230,242,.75);transform-origin:0 50%;transform:scaleX(0);transition:transform .4s ease}
.nst .load .stage{position:absolute;bottom:calc(100% + 12px);left:50%;transform:translateX(-50%);white-space:nowrap;font-size:8.5px;letter-spacing:.32em;text-transform:uppercase;color:rgba(223,230,242,.6)}
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
`,Yf="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",g_=`
precision highp float;
uniform float uTime, uFlash, uDive, uLoad, uReady, uFade, uClear, uMorph, uMarkA, uMarkR; uniform vec2 uRes, uFlashPos, uMarkC; uniform sampler2D tHorse; uniform float uHorseAsp;
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
  // ---- the mark: two thin rings (the inner one draws itself as the world loads) and our horse inside. On ENTER it never
  // leaves: it glides to where the gold emblem stands in the palace and turns to gold, and the emblem takes its place
  vec2 q = (fc - uMarkC) / uMarkR;                            // ring radius = 1
  float rr = length(q), ang = atan(q.x, q.y);
  float px = 1.0 / uMarkR;
  float arc = step(fract((ang / 6.2831853) + 1.0), uLoad);
  float ring1 = (1.0 - smoothstep(0.0, 1.4 * px, abs(rr - 1.0))) * mix(0.16, 1.0, arc) * mix(0.6, 1.0, uReady);
  float ring2 = (1.0 - smoothstep(0.0, 1.1 * px, abs(rr - 1.195))) * 0.22 * uReady * (1.0 - uMorph);
  float ticks = step(0.985, fract(ang / 6.2831853 * 72.0)) * (1.0 - smoothstep(0.0, 6.0 * px, abs(rr - 1.255))) * 0.25 * uReady * (1.0 - uMorph);
  vec2 hv = (q - vec2(0.0, 0.02)) / 0.74 * vec2(1.0, 1.0 / uHorseAsp) * 0.5 + 0.5;
  float hz = (hv.x > 0.01 && hv.x < 0.99 && hv.y > 0.01 && hv.y < 0.99) ? texture2D(tHorse, hv).a : 0.0;
  float markA = 0.0;
  vec3 gold = vec3(1.0, 0.74, 0.34) * (1.05 + 0.18 * sin(ang * 3.0 + uTime * 1.2));   // brushed gold: a slow glint travels round
  vec3 markC = gold * (1.0 + uFlash * 0.25);
  col += vec3(0.55, 0.4, 0.2) * exp(-max(rr - 1.0, 0.0) * 3.0) * 0.18 * uReady;   // the gold's warmth on the cloud around it   // a faint halo on the ring
  // ---- film: vignette and grain (on the storm only)
  col *= 1.0 - 0.5 * smoothstep(0.35, 1.15, length((vUv - 0.5) * vec2(R.x / R.y, 1.0)) * 1.25);
  col += (h21(fc + fract(t * 7.13) * 91.7) - 0.5) * 0.035;
  // the clouds part from the mark outwards and the palace shows through
  float reach = mix(-6.0, 2.6 * max(R.x, R.y) / uMarkR, uClear);
  float bgA = smoothstep(reach - 2.5, reach + 0.5, rr + (fbm(p * 4.0 + t * 0.15) - 0.5) * 3.0);
  bgA = uClear > 0.999 ? 0.0 : bgA;
  float ma = clamp(markA, 0.0, 1.0);
  vec3 outC = col * bgA * (1.0 - ma) + markC * ma;            // premultiplied
  gl_FragColor = vec4(pow(max(outC, 0.0), vec3(0.95)), max(bgA, ma) * (1.0 - ma) + ma);
}`;function Zf(i,e,t,{onEnter:n,onDone:s}={}){if(!document.getElementById("nst-css")){let J=document.createElement("style");J.id="nst-css",J.textContent=m_,document.head.appendChild(J)}try{for(let[J,Se]of[["instrument-serif.woff2","normal"],["instrument-serif-italic.woff2","italic"]])new FontFace("Instrument Serif",`url(${t}storm/${J})`,{style:Se}).load().then(L=>document.fonts.add(L)).catch(()=>{})}catch{}let r=document.createElement("div");r.className="nst",r.innerHTML=`<canvas></canvas><canvas class="bolt"></canvas>
    <div class="mark"><div class="wm">NOMADIIC HORSE DESIGNS</div></div>
    <div class="load"><div class="stage">Loading the palace</div><div class="bar"><i></i></div><div class="pc">0%</div></div>
    <div class="go"><button type="button">ENTER</button></div>
    <button class="quiet" type="button">WITHOUT SOUND</button>
    <div class="hint">HEADPHONES RECOMMENDED</div>`,i.appendChild(r);let[a,o]=r.querySelectorAll("canvas"),l=r.querySelector(".mark"),c=r.querySelector(".bar i"),u=r.querySelector(".pc"),h=r.querySelector(".go"),d=h.querySelector("button"),f=r.querySelector(".quiet"),g=r.querySelector(".hint"),x=r.querySelector(".load"),m=new Hr({canvas:a,antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"});m.setClearColor(0,0),m.setPixelRatio(Math.min(devicePixelRatio,2));let p=matchMedia("(pointer: coarse)").matches?.3:.45,w=new Vt(2,2),M=new ln;M.colorSpace=on;let v={uTime:{value:0},uFlash:{value:0},uDive:{value:0},uLoad:{value:0},uReady:{value:0},uFade:{value:0},uClear:{value:0},uMorph:{value:0},uMarkA:{value:1},uMarkR:{value:100},uMarkC:{value:new re(0,0)},uRes:{value:new re(1,1)},uFlashPos:{value:new re(.5,.7)},tHorse:{value:M},uHorseAsp:{value:202/175}},S=new Image;S.crossOrigin="anonymous",S.onload=()=>{let J=document.createElement("canvas");J.width=700,J.height=Math.round(700*S.height/S.width),J.getContext("2d").drawImage(S,0,0,J.width,J.height),M.image=J,M.generateMipmaps=!1,M.minFilter=$t,M.needsUpdate=!0,v.uHorseAsp.value=J.height/J.width},S.src=t+"storm/horse.svg";let b=new ge(new Et(2,2),new Te({vertexShader:Yf,fragmentShader:g_,uniforms:v,depthTest:!1})),E=new An;E.add(b);let T=new Nr,_=new An;_.add(new ge(new Et(2,2),new Te({depthTest:!1,depthWrite:!1,blending:oi,transparent:!1,uniforms:{tC:{value:null}},vertexShader:Yf,fragmentShader:"uniform sampler2D tC; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tC, vUv); }"}))),m.toneMapping=Zs,m.toneMappingExposure=1.15,m.outputColorSpace=Ft;let y=new An,C=new Zt;C.matrixAutoUpdate=!1,y.environment=new xs(m).fromScene(new wl,.04).texture;let P=new Nt({color:new xe("#f2b24c"),metalness:1,roughness:.2,emissive:new xe(.42,.25,.05),transparent:!0}),D=new Vn(16769720,2.2);D.position.set(-3,5,6),y.add(D,new ol(8425648,.4));let N=null,H=o.getContext("2d"),F=1,B=()=>{let J=r.clientWidth||innerWidth,Se=r.clientHeight||innerHeight;F=J,m.setSize(J,Se,!1);let fe=Math.max(2,Math.round(J*p*1.5)),L=Math.max(2,Math.round(Se*p*1.5));w.setSize(fe,L),v.uRes.value.set(fe,L),o.width=J*2,o.height=Se*2},z=new ResizeObserver(B);z.observe(r),B();let O=0,Z=(J,Se)=>{let fe=o.width,L=o.height;H.clearRect(0,0,fe,L);let A=(k,te,pe,ie,Le,Ae)=>{let Pe=k,et=te,Me=14+Math.floor(Math.random()*8);for(let Fe=1;Fe<=Me;Fe++){let Ke=Fe/Me,Ze=k+(pe-k)*Ke+(Math.random()-.5)*fe*.035*(1-Ke*.5),Ne=te+(ie-te)*Ke;H.lineWidth=Le*(1-Ke*.6),H.beginPath(),H.moveTo(Pe,et),H.lineTo(Ze,Ne),H.stroke(),Ae<2&&Math.random()<.16&&A(Ze,Ne,Ze+(Math.random()-.5)*fe*.25,Ne+L*(.08+Math.random()*.2),Le*.45,Ae+1),Pe=Ze,et=Ne}};H.strokeStyle="rgba(225,235,255,0.95)",H.shadowColor="rgba(150,180,255,0.9)",H.shadowBlur=26,H.lineCap="round",A(J*fe,-10,J*fe+(Math.random()-.5)*fe*.2,Se*L,3.2,0),O=1},se=document.createElement("div");se.className="nst-head",se.innerHTML='<div class="k">NOMADIIC HORSE DESIGNS &nbsp;\xB7&nbsp; BANGALORE</div><h1>We build brands<br>the way the Greeks<br><em>built palaces.</em></h1>';let de=document.createElement("button");de.className="nst-snd",de.type="button",de.setAttribute("aria-label","Sound");let we=J=>J?'<svg viewBox="0 0 16 16"><path d="M2 8h1.5M5 5v6M8 3v10M11 6v4M14 7.3v1.4"/></svg>':'<svg viewBox="0 0 16 16"><path d="M2 8h12"/></svg>';de.innerHTML=we(!0),de.onclick=()=>{e.setMuted(!e.muted),de.innerHTML=we(!e.muted)};let X=null,ee=0,ae="load",q=0,Y=0,ye=0,me=-1,Ee=!0,Q=0,he=performance.now(),U=!1,ve=J=>{ae==="ready"&&(ae="dive",me=0,e.start(J),n&&n(),h.classList.remove("on"),f.classList.remove("on"),g.classList.remove("on"),l.style.opacity="0",l.style.transform="translate(-50%,40px)")};d.onclick=()=>ve(!0),f.onclick=()=>ve(!1);function ue(J){if(!Ee)return;Q=requestAnimationFrame(ue);let Se=Math.min((J-he)/1e3,.05);if(he=J,v.uTime.value+=Se,Y+=(q-Y)*(1-Math.exp(-Se*4)),v.uLoad.value=Y,c.style.transform=`scaleX(${Y})`,u.textContent=Math.round(Y*100)+"%",ae==="load"&&q>=1&&Y>.995&&(ae="ready",x.style.opacity="0",h.classList.add("on"),f.classList.add("on"),g.classList.add("on")),ae!=="load"&&(ye=Math.min(1,ye+Se*.7)),v.uReady.value=ye,ae==="ready"&&Math.random()<Se*.12&&e.strike(.3+Math.random()*.25),ae==="dive"){me+=Se,!U&&me>.35&&(U=!0,e.strike(1,[.3,.75]),Z(.3,.75));let L=(A,k)=>{let te=Math.min(1,Math.max(0,(me-A)/(k-A)));return te*te*(3-2*te)};if(v.uDive.value=Math.min(1,me/3.6)*.35,v.uClear.value=L(.5,3.8),ee=1,me>3.9&&r.style.opacity!=="0"&&(r.style.transition="opacity .4s",r.style.opacity="0",r.style.pointerEvents="none",s&&s(),i.appendChild(de),requestAnimationFrame(()=>{e.hasSound&&de.classList.add("on")})),me>4.4){Ee=!1,cancelAnimationFrame(Q),z.disconnect(),w.dispose(),m.dispose(),m.forceContextLoss(),r.remove();return}}let fe=e.update(Se,ae!=="load");v.uFlash.value=fe,v.uFlashPos.value.set(e.flashPos[0],e.flashPos[1]),O>0&&(O=Math.max(0,O-Se*3.2),o.style.opacity=String(Math.min(1,fe*1.4)*O));{let L=v.uRes.value.x/F,A=v.uRes.value.x,k=v.uRes.value.y,te=Math.min(A,k),pe=A/2,ie=k/2,Le=.205*te;if(X){ee=1;let Ae=X[0]*L,Pe=k-X[1]*L,et=X[2]*L;pe+=(Ae-pe)*ee,ie+=(Pe-ie)*ee,Le+=(et-Le)*ee}v.uMarkC.value.set(pe,ie),v.uMarkR.value=Le}_.children[0].material.uniforms.tC.value=w.texture,m.autoClear=!0,m.setRenderTarget(w),m.render(E,T),m.setRenderTarget(null),m.render(_,T),N&&_e&&(P.opacity=1-Math.min(1,Math.max(0,(v.uClear.value-.55)/.35)),N.visible=P.opacity>.001&&ye>0,P.opacity*=ye,m.autoClear=!1,m.clearDepth(),m.render(y,C),m.autoClear=!0)}let _e=null;return Q=requestAnimationFrame(ue),{get diving(){return ae==="dive"},get showing(){return ae!=="load"},setTarget(J,Se,fe){X=[J,Se,fe]},setEmblem(J){N||(N=new ge(J,P),N.matrixAutoUpdate=!1,y.add(N))},setView(J,Se){_e=!0,C.projectionMatrix.copy(J.projectionMatrix),C.projectionMatrixInverse.copy(J.projectionMatrixInverse),C.matrixWorld.copy(J.matrixWorld),C.matrixWorldInverse.copy(J.matrixWorldInverse),N&&N.matrix.copy(Se)},setStage(J){let Se=r.querySelector(".stage");Se&&Se.textContent!==J&&(Se.textContent=J)},setProgress(J){q=Math.max(q,Math.min(1,J))},ready(){q=1},hideHead(){se.classList.remove("on")},destroy(){Ee=!1,cancelAnimationFrame(Q),z.disconnect(),m.dispose(),r.remove(),se.remove(),de.remove()}}}var El=`
  float sh_(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float sn_(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(sh_(i), sh_(i + vec2(1, 0)), f.x), mix(sh_(i + vec2(0, 1)), sh_(i + vec2(1, 1)), f.x), f.y); }
  float sf_(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++) { s += a * sn_(p); p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.02 + 7.1; a *= 0.5; } return s * 1.07; }
  float sf2_(vec2 p){ return (sn_(p) * 0.6 + sn_(p * 2.1 + 3.7) * 0.4); }
  vec3 stormSky(vec3 d, float t, float flash){             // a low, heavy deck rolling overhead, its underside lit by the lightning
    vec2 q = d.xz / (max(d.y, 0.0) + 0.12) * 0.55 + vec2(t * 0.012, t * 0.004);
    vec2 w = vec2(sf2_(q * 0.8 + t * 0.01), sf2_(q * 0.8 + 5.3));                 // a cheap warp (4 noise reads), then one detailed deck (4)
    float c = smoothstep(0.34, 0.78, sf_(q + 2.6 * w));
    float edge = clamp(0.5 + (w.x - w.y) * 1.6, 0.0, 1.0);                         // the side facing the light, from the warp itself
    vec3 base = mix(vec3(0.05, 0.055, 0.07), vec3(0.4, 0.42, 0.47), clamp(edge * 0.75 * (1.0 - c * 0.6) + (1.0 - c) * 0.35, 0.0, 1.0));   // heavy dark bellies, lit rims
    base = mix(base, vec3(0.24, 0.26, 0.3), smoothstep(0.25, -0.02, d.y));   // towards the horizon the deck is rain and haze
    return base * (1.0 + flash * 2.6 * (0.35 + c));
  }`;function $f(){let i=new ai;i.frustumCulled=!1;let e=new Tn({color:new xe(9,10,14),transparent:!0,opacity:0,blending:St,depthWrite:!1,side:ft,fog:!1,toneMapped:!0}),t=null,n=R,s=new n(0,1,0),r=(o,l,c,u,h)=>{if(u===0){h.push(l.clone());return}let d=o.clone().lerp(l,.5);d.x+=(Math.random()-.5)*c,d.z+=(Math.random()-.5)*c,d.y+=(Math.random()-.5)*c*.3,r(o,d,c*.55,u-1,h),r(d,l,c*.55,u-1,h)},a=(o,l,c,u)=>{for(let h=0;h<o.length-1;h++){let d=o[h],f=o[h+1],g=l*(1-h/o.length*.4),x=l*(1-(h+1)/o.length*.4),m=d.clone().addScaledVector(c,-g),p=d.clone().addScaledVector(c,g),w=f.clone().addScaledVector(c,-x),M=f.clone().addScaledVector(c,x);for(let v of[m,p,M,m,M,w])u.push(v.x,v.y,v.z)}};return{group:i,strike(o,l=0){let c=new n;o.getWorldDirection(c),c.y=0,c.normalize();let u=c.clone().applyAxisAngle(s,(Math.random()-.5)*1.3),h=260+Math.random()*700,d=o.position.clone().addScaledVector(u,h);d.y=l;let f=d.clone();f.y=l+300+Math.random()*220,f.x+=(Math.random()-.5)*140,f.z+=(Math.random()-.5)*140;let g=new n().crossVectors(u,s).normalize(),x=1.2+h*.0042,m=[f.clone()];r(f,d,90,6,m);let p=[];a(m,x,g,p);for(let M=0;M<4;M++){let v=6+Math.floor(Math.random()*(m.length*.6)),S=m[v];if(!S)continue;let b=S.clone().add(new n((Math.random()-.5)*120,-(40+Math.random()*120),(Math.random()-.5)*120)),E=[S.clone()];r(S,b,40,4,E),a(E,x*.45,g,p)}t&&(i.remove(t),t.geometry.dispose());let w=new Ye;w.setAttribute("position",new Ge(p,3)),t=new ge(w,e),t.frustumCulled=!1,t.renderOrder=9,i.add(t)},update(o){e.opacity=Math.min(1,o*1.5),i.visible=o>.01}}}Pt();var Ss=new $e,js=new Dt,bl=new R,Qr=new R,fh=new cn;function Wa({count:i=40,center:e=[0,60,0],radius:t=80,height:n=18,size:s=1,color:r=1447964,speed:a=1,glide:o=.5}={}){let l=[],c=[],u=(E,T,_,y,C,P,D,N)=>{l.push(...E,...T,..._,...E,..._,...y),c.push(C,P,D,C,D,N)};for(let E of[-1,1])u([0,0,.18],[E*.45,0,.12],[E*.45,0,-.12],[0,0,-.14],0,.55*E,.55*E,0),u([E*.45,0,.12],[E*1,0,-.02],[E*.95,0,-.2],[E*.45,0,-.12],.55*E,1*E,1*E,.55*E);l.push(0,0,.42,.07,0,0,0,0,-.5,0,0,.42,0,0,-.5,-.07,0,0),c.push(0,0,0,0,0,0);let h=new Ye;h.setAttribute("position",new Ge(l,3)),h.setAttribute("aWing",new Ge(c,1));let d=new Float32Array(i),f=new Float32Array(i);for(let E=0;E<i;E++)d[E]=Math.random()*6.28,f[E]=7+Math.random()*4;h.setAttribute("aPhase",new Ut(d,1)),h.setAttribute("aBeat",new Ut(f,1));let g=new Ut(new Float32Array(i),1);g.setUsage(Rf),h.setAttribute("aFlap",g);let x=new Te({side:ft,uniforms:{uTime:{value:0},uCol:{value:new xe(r)},uFog:{value:new je(.6,.65,.7,7e-4)}},vertexShader:`uniform float uTime; attribute float aWing, aPhase, aBeat, aFlap; varying float vD;
      void main(){ vec3 p = position; float w = abs(aWing);
        float a = sin(uTime * aBeat + aPhase) * aFlap;                        // a wing beat; aFlap = 0 when gliding
        p.y += (a * 0.9 + 0.12) * w * w * 1.1; p.x *= 1.0 - abs(a) * 0.12 * w;  // the wingtips travel furthest, the span folds a little on the beat
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform vec4 uFog; varying float vD; void main(){ gl_FragColor = vec4(mix(uCol, uFog.rgb, 1.0 - exp(-vD * uFog.a)), 1.0); }"}),m=new vn(h,x,i);m.frustumCulled=!1;let p=Array.from({length:i},()=>({o:new R((Math.random()-.5)*30,(Math.random()-.5)*8,(Math.random()-.5)*30),ph:Math.random()*100,glideT:Math.random()*4,gl:!1,prev:new R})),w=new R(...e),M=new R,v=new R,S=new R(0,1,0),b=(E,T,_)=>{let y=E*.045*a;return _.set(w.x+Math.cos(y)*t+Math.sin(y*1.7)*t*.3,w.y+Math.sin(y*.9)*n,w.z+Math.sin(y)*t*.75+Math.cos(y*1.3)*t*.25),_.x+=T.o.x+Math.sin(E*.35+T.ph)*6,_.y+=T.o.y+Math.sin(E*.5+T.ph*1.3)*2.5,_.z+=T.o.z+Math.cos(E*.3+T.ph)*6,_};return{mesh:m,update(E,T,_,y){x.uniforms.uTime.value=E,_&&x.uniforms.uFog.value.set(_.r,_.g,_.b,y);for(let C=0;C<i;C++){let P=p[C];b(E,P,Qr),b(E+.25,P,M),v.subVectors(M,Qr),P.glideT-=T,P.glideT<0&&(P.gl=!P.gl,P.glideT=P.gl?1.5+Math.random()*3*o:1+Math.random()*2.5),g.array[C]+=((P.gl?.08:1)-g.array[C])*Math.min(1,T*3);let D=Math.atan2(v.x,v.z),N=-Math.atan2(v.y,Math.hypot(v.x,v.z))*.6,H=ut.clamp(-(v.x*P.prev.z-v.z*P.prev.x)*4,-.7,.7);P.prev.copy(v),js.setFromEuler(fh.set(N,D,H,"YXZ")),Ss.compose(Qr,js,bl.setScalar(s*(.85+C%5*.06))),m.setMatrixAt(C,Ss)}m.instanceMatrix.needsUpdate=!0,g.needsUpdate=!0}}}function Jf({count:i=24,box:e=[-20,20,.4,3,-20,20],colors:t=[15905076,15265522,14178090,7317724]}={}){let n=[],s=[];for(let d of[-1,1])n.push(0,0,.05,d*.09,0,.09,d*.1,0,-.02,0,0,.05,d*.1,0,-.02,0,0,-.05,0,0,-.05,d*.1,0,-.02,d*.07,0,-.1),s.push(0,d,d,0,d,0,0,d,d);let r=new Ye;r.setAttribute("position",new Ge(n,3)),r.setAttribute("aWing",new Ge(s,1));let a=new Float32Array(i*3),o=new Float32Array(i),l=new xe;for(let d=0;d<i;d++)l.set(t[d%t.length]),a.set([l.r,l.g,l.b],d*3),o[d]=Math.random()*6.28;r.setAttribute("aCol",new Ut(a,3)),r.setAttribute("aPhase",new Ut(o,1));let c=new Te({side:ft,uniforms:{uTime:{value:0}},vertexShader:`uniform float uTime; attribute float aWing, aPhase; attribute vec3 aCol; varying vec3 vC;
      void main(){ vec3 p = position; float a = (0.5 + 0.5 * sin(uTime * 22.0 + aPhase)) * 1.25; float s = sign(aWing);
        p = vec3(p.x * cos(a), abs(p.x) * sin(a), p.z); vC = aCol * (0.75 + 0.25 * abs(aWing));
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0); }`,fragmentShader:"varying vec3 vC; void main(){ gl_FragColor = vec4(vC, 1.0); }"}),u=new vn(r,c,i);u.frustumCulled=!1;let h=Array.from({length:i},()=>({p:new R(e[0]+Math.random()*(e[1]-e[0]),e[2]+Math.random()*(e[3]-e[2]),e[4]+Math.random()*(e[5]-e[4])),v:new R,ph:Math.random()*100}));return{mesh:u,update(d,f){c.uniforms.uTime.value=d;for(let g=0;g<i;g++){let x=h[g];x.v.x+=(Math.sin(d*1.3+x.ph)+Math.sin(d*3.1+x.ph*2))*f*1.2,x.v.z+=(Math.cos(d*1.1+x.ph)+Math.sin(d*2.7+x.ph))*f*1.2,x.v.y+=Math.sin(d*2.3+x.ph)*f*.9,x.v.multiplyScalar(.97),x.p.addScaledVector(x.v,f*1.6),(x.p.x<e[0]||x.p.x>e[1])&&(x.v.x*=-1),(x.p.z<e[4]||x.p.z>e[5])&&(x.v.z*=-1),x.p.y=ut.clamp(x.p.y,e[2],e[3]),Math.abs(x.p.x-(e[0]+e[1])/2)<3.2&&(x.v.x+=Math.sign(x.p.x-(e[0]+e[1])/2||1)*f*4),js.setFromEuler(fh.set(0,Math.atan2(x.v.x,x.v.z),0)),Ss.compose(x.p,js,bl.setScalar(.75)),u.setMatrixAt(g,Ss)}u.instanceMatrix.needsUpdate=!0}}}function jf({count:i=120,box:e=[-15,15,0,16,-15,15],colors:t=[7043626,9071140,11045167,5917212],follow:n=null}={}){let s=new Et(.11,.07),r=new Float32Array(i*3),a=new xe;for(let f=0;f<i;f++)a.set(t[f%t.length]),r.set([a.r,a.g,a.b],f*3);s.setAttribute("aCol",new Ut(r,3));let o=new Te({side:ft,uniforms:{uFog:{value:new je(.6,.6,.6,.02)}},vertexShader:"attribute vec3 aCol; varying vec3 vC; varying float vD; void main(){ vC = aCol; vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec4 uFog; varying vec3 vC; varying float vD; void main(){ gl_FragColor = vec4(mix(vC, uFog.rgb, 1.0 - exp(-vD * uFog.a)), 1.0); }"}),l=new vn(s,o,i);l.frustumCulled=!1;let c=Array.from({length:i},()=>({x:Math.random(),y:Math.random(),z:Math.random(),ph:Math.random()*100,sp:.5+Math.random()*.5,spin:(Math.random()-.5)*6})),u=e[1]-e[0],h=e[3]-e[2],d=e[5]-e[4];return{mesh:l,leaves:!0,update(f,g,x,m,p){m&&o.uniforms.uFog.value.set(m.r,m.g,m.b,p);let w=x?x.position.x:0,M=x?x.position.z:0;for(let v=0;v<i;v++){let S=c[v];S.y-=g*.045*S.sp,S.y<0&&(S.y+=1);let b=Math.sin(f*1.6*S.sp+S.ph),E=e[0]+((S.x*u+w-e[0])%u+u)%u+b*.5,T=e[4]+((S.z*d+M-e[4])%d+d)%d+Math.cos(f*1.2+S.ph)*.3;n&&(E+=w-(e[0]+e[1])/2,T+=M-(e[4]+e[5])/2),Qr.set(E,e[2]+S.y*h,T),js.setFromEuler(fh.set(b*1.1,f*S.spin+S.ph,Math.cos(f*2+S.ph)*.8)),Ss.compose(Qr,js,bl.setScalar(1)),l.setMatrixAt(v,Ss)}l.instanceMatrix.needsUpdate=!0}}}function ph({count:i=18,box:e=[-60,60,.5,6,-60,60],color:t=[.8,.84,.86],opacity:n=.22,size:s=[26,6]}={}){let r=new Et(1,1),a=new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCol:{value:new xe(...t)},uA:{value:n}},vertexShader:`varying vec2 vUv; varying float vI; void main(){ vUv = uv; vI = float(gl_InstanceID);
      vec4 c = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); vec3 r = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);   // always faces the camera sideways, stays upright
      vec3 sx = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), 1.0);
      vec3 w = c.xyz + r * position.x * sx.x + vec3(0.0, 1.0, 0.0) * position.y * sx.y; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uCol; uniform float uA; varying vec2 vUv; varying float vI;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      void main(){ vec2 q = vUv * vec2(4.0, 1.4) + vec2(uTime * 0.03 + vI * 3.7, vI);
        float d = n(q) * 0.6 + n(q * 2.3) * 0.3 + n(q * 5.1) * 0.1;
        float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y);
        gl_FragColor = vec4(uCol, smoothstep(0.35, 0.8, d) * edge * uA); }`}),o=new vn(r,a,i);o.frustumCulled=!1,o.renderOrder=5;let l=Array.from({length:i},()=>({x:e[0]+Math.random()*(e[1]-e[0]),y:e[2]+Math.random()*(e[3]-e[2]),z:e[4]+Math.random()*(e[5]-e[4]),v:.3+Math.random()*.6,s:.7+Math.random()*.6}));return{mesh:o,update(c,u){a.uniforms.uTime.value=c;for(let h=0;h<i;h++){let d=l[h];d.x+=d.v*u,d.x>e[1]&&(d.x=e[0]),Ss.compose(Qr.set(d.x,d.y,d.z),js.identity(),bl.set(s[0]*d.s,s[1]*d.s,1)),o.setMatrixAt(h,Ss)}o.instanceMatrix.needsUpdate=!0}}}Pt();var v_=`
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
  }`,x_=`
  ${ni}
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
  }`,Qf=async i=>{for(let e=0;;e++)try{let t=await fetch(i);if(t.ok)return t.json();throw 0}catch(t){if(e>2)throw t;await new Promise(n=>setTimeout(n,500))}};async function Ui({base:i,unpack:e,loader:t,U:n,groundLm:s,groundK:r,rect:a,tier:o,onPart:l,layout:c=null}){let[u,h]=await Promise.all([Qf(i+"plants/protos.json"),c?Promise.resolve(c):Qf(i+"garden.json")]),d=new ai;d.name="garden";let f={};h.items.forEach((E,T)=>{o!=="high"&&E[0].startsWith("flower")&&T%2||(f[E[0]]=f[E[0]]||[]).push(E)});let g={},x=E=>g[E]||(g[E]=new Promise(T=>t.load(i+"plants/"+E,_=>{_.colorSpace=Ft,_.flipY=!0,_.anisotropy=4,T(_)},void 0,()=>T(null)))),m={value:0},p=new $e,w=new Dt,M=new R,v=new R,S=new R(0,1,0),b=[];for(let[E,T]of Object.entries(f)){let _=u[E];if(!_)continue;let y=_.size[1],C=E.startsWith("flower")||E.startsWith("periwinkle")||E.startsWith("fern");for(let P of _.parts)b.push((async()=>{let D,N;try{[D,N]=await Promise.all([e(i+"plants/"+P.pack),P.tex?x(P.tex):null])}catch(B){console.warn("[garden] skipped",P.pack,B);return}let H=new Te({side:ft,uniforms:{...n,tAlb:{value:N},uHasTex:{value:N?1:0},uTint:{value:new xe(.5,.45,.4)},uLeaf:{value:P.leaf?1:0},uSway:{value:P.leaf?y>2?.35:.12:0},uH:{value:Math.max(y,.2)},uFar:{value:C?o==="high"?150:90:2e3},uFade:m,tLm:{value:s},uK:{value:r},uRect:{value:a}},vertexShader:v_,fragmentShader:x_});if(_.kind==="solid"&&_.parts.length===1){D.computeBoundingBox();let B=D.boundingBox;B.min.y>.01&&D.translate(0,-B.min.y-(B.max.y-B.min.y)*.06,0)}let F=new vn(D,H,T.length);T.forEach((B,z)=>{let[,O,Z,se,de,we]=B;p.compose(v.set(O,Z,se),w.setFromAxisAngle(S,de),M.set(we,we,we)),F.setMatrixAt(z,p)}),F.instanceMatrix.needsUpdate=!0,F.frustumCulled=!1,F.layers.set(1),d.add(F),l&&l()})())}return await Promise.all(b),{group:d,fade:m,layout:h}}Pt();function ep(i,e,t,n){let s=new Ye,r=new Float32Array(t*4);for(let l=0;l<t;l++){let c=Math.random();r[l*4]=c<.45?0:c<.9?1:2,r[l*4+1]=Math.random()*Math.PI*2,r[l*4+2]=Math.random(),r[l*4+3]=Math.random()}s.setAttribute("position",new Je(new Float32Array(t*3),3)),s.setAttribute("aD",new Je(r,4)),s.boundingSphere=new Hn(new R(i,1.5,e),6);let a=new Te({transparent:!0,depthWrite:!1,blending:St,uniforms:{...n,uC:{value:new R(i,0,e)},uPx:{value:1}},vertexShader:`
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
      ${ni}
      varying float vA; varying vec3 vW;
      void main(){
        vec2 d = gl_PointCoord - 0.5; float r = dot(d, d);
        float a = (1.0 - smoothstep(0.0, 0.25, r)) * clamp(vA, 0.0, 1.0);
        vec3 c = vec3(0.85, 0.9, 0.95) * a * 0.9;
        gl_FragColor = vec4(c, a);
      }`}),o=new Jt(s,a);return o.frustumCulled=!1,o}var tp="data:font/woff2;base64,d09GMk9UVE8AAAqkAAkAAAAAF7QAAApcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAADag8BmAAgSgBNgIkAzYEBgWCGAcgGxEXUVSSLgjwxWEMxtLDLs7eeWszuaNSaSydCcIXN/5QhCLcaD67t8GHMDE2pCq7iyu4T1HGr4fO3uoaACTG7v/RZsVIvf1r7FmfmY+Ik4koogkEGutGuoDQiAUiDsSEmI14dk7UC65GeMi/vft9xCCxFNvyIE4wDALJW1GQR+2qoMLvf+3V3t0NvPBbN4kCdhESUKjIqMT9+M0EiB2Ri3sBLm8rqwBVzxemDlkDKcEjo3S9BmHqr9E+3/Lz0olCQNfLJRCjAOitVRxWyssqamvLf12o9h8Ycd4XI0U7yb/3by867ChqdmLKK337/wcQyXgJv/k1QbK/+a+UiAOy+BJGZ7Z2cPXyC467VKf/+Me9owN2jB1le9jetr/lZVOR3pTta/n1Up7bo7GPu3owxX+/XHs3M4YkAPp/3OF5iagAiIGt13Potr97e3z7T3Yc3ME/84Xn/yd4+dVnyA8pOZWW6khUSc78VbYW3rX8USCIFqP2ys6rXdXQ2pg2tpkhyY6YwiZIKJu0DTFQRY0xfQbOFOQ36zah5mb9reqboFrULVQVQLZBX2WzfRm4C4Hd+Bxg+g4dxEggLxGe9Be8k+D+58m1f6VBSi+Tz6XDDMntJNHU3Elz4Z49jxIaRXP1cFsdjSJET3JAR3KImUTdn6ALyBP9PcMRihqJhFJOQAeVJGQPUW+IUIoYXptQISDeYSIlRiehQEq/JPJSMvObyH3NwlchHHt782gUCJuwSO3lPA2AxLdcX8TfBIFeooMC8hKWSOivxISJ64mfGTZBRviUBL7+OWANzmZOCfa6TspXNcFJlf8HLf2Q+Ec9EVCBG2gaN0BjfVQKmN6gIxhh8oCEGS+B4iS09Mf6W7theHWl+2YCpPRSUVQKZRZ8QdwiwK+5uyeyX4L8Z3s/1v9pmKfuKKSJaEUN+Jx+p+AEgfNyvBtc7vun9YHNbwvxUTD3OmccOVD//DPkrGIR1EM1bbIgcNghcALUuOqb9Aqwmh0mzgiG8+wZ8zlQf/H47NovgqPBea5JC7zTydsF4Lycnw8C3+IRhRB4Ooi+GNy2CNHeeD7dAVPL8313QyClC0dKyUwSp9y/HYgfRkSL/zf+1/cDiaXxX6PXlP8y7NYf8+/CQL0xMmKjz4jBs+BJrXogKWRwEsO0MIWnMPwW3xN+tAK3pwp3U9+D5Fbzz8s3gXJIGO05RqPioAiEJoJtIP0rnS+lMK241+/Xg18tqLEaMHVEmFpiauWnVoCNXnezADKMPIt4xbcEARLGk/AWEg44Gg6LIkhp36KylMxcDxK956YXMO/+M8HX7FfrvECdORo5THlUCIQinkYQTBF8+hCBYSL1QTf+ldjBQpj3VGMryIV63CAANXkpcVDmH4A6EKGRNBIBsYeHv/l9nuA4SOmekrKUztwOIP9e9MjWSjIfbT0yfIpT67Fzmh7g27BTbIfe7lZbLgLk+i/0fcWCInoIUtqlBEpHGbqIEd6FyCJGdGCRrWdcxF1WggzZfAdjgh4zsTiDUKM0qxPLJFSuPmvRtsdSiqYt18EYZ8CMVryBaJCx6sAycVeWX9TJHjTfTRnOtTO1i0YYbOvd03HnF8oaTB03nadwuwNNHCAt+PTMqkqL542OU5lL/8LjE+WXbVbIFmg1qMNdjgzXn3NboXNRU42DkUcF1ml0WA+CDw20nHbfJLmCvdKu0IPd3Sc94AXXuM9Iyjt0ZgttiVy+g8dGdY9D8cnT7qdZVqQOkZNwWDQ6bBVccaceoPfXc4BXlpTrm9Xj5IccKc3Sd91H9bwq33MHcY/zztMNptbJ8jaOjMqJ52kVLLOd08nddKHb/ZOSum0le8mi7Z6zKd+/kEe+RmR+H6m3XHYJbTkdtPD1RMTwFipiZLL4e8adYo+zhJgxC8du5TELmEWtkpwUlgyJxrU8osVXP8qTeaYo6Uo9kpyT4ZpbqRR3pq4jLZ0pSeetcwpr0NVaj2kTtWioIpxGZnElSdWuFRMMxAdXnkOgD1jsIo/gAi5jovyFHLknobCiAuNQbHJ98aAn19PGVfk4jdacjfXIrDvvllwXGnPyDANutjnEuGnrOREHsOlRTRyMTSHmXiYnz6UNDAZ3kQfo0Lep8TM0nqeNSfW+x/ZTwymo8Qq9oKLgC7iAQmVMbLicc11bL2bO3nauy9Zm7amhCljJnLnvdNKPNksNDXBWcdJaCnmH9Y6f9K5dzICfe4vc614dc6ZR/sJGdo/IfJ+a90C5lNepULDFtjNKcZve7mW9EAVz3HRS2RqjxXdZJxgLExknp1mMfuCekIJbxJEOBwfYDX4Q4lWwmCj22p3i0vheetF/HTHTn7W7hVfhYV9M3oB2YZi+AW1FN23Nc8r19OyygrPnpaP4wUXpEtHdtLiATX3kn5jBoWrG1OOPeNFtqX/Ji4OP33rhxVlfp78OGSi6AQxu4/iiiir1SOVFtwWCA4mBGbuDPJc9nFogBIvx4XF7Wjkq/DBntUID4tSgAwPMdX6amcyMyPbeGzWo/Tw4RXkmUF8H2Y2qDH7G8cqzKzKfvFa92U9NC4RJSxstxyKaMVvp8BNNuxvNbaYGNdFMgCvxisfc3pCd1k5I4nMe4gUH3Kw8DwmuYg84Ze5RhK2VDQOyhr44ZW9Rns38lXVT9RiDvUmTNnFpeRJ62r3TYGGBoVP+4mTm9Z3SGps3buzRfXnnSuKEMrhZbJ/WsrM17x1VWB68DGdWpAJMlB6QB17kzQrUUXePPLg8f5ZXdfA5ONIpv9FwFmcwSo9oOKsMrEKij93Ke4VIk+ZGMz1s7l077z+U3nCz53R0sgU4MPc0CYs1xnL3pNljE7LlqjgNHNTv29lGgitXK5wyew2EeXpHdf+G9Q0eoV2yAXX3wqdkXQa5JHST5F3LhPhT20+SszKjcjSziiqziPs8cyxHs8uoNofYLzCHDWh+CdVnkenLzF4DWppH8hzSf4XZKUcrBaQi1deZ7om1aaSNU923mE7aHEd6qtrNZOjGCGq6e9k+JsSiG0OIS6CzZ5mwbddSEUccpeq7Io5er+uIokytfOusUPA5jok60fQ6sodQd429Cr5kZ2I8Gr6BbCHUX9Wu4KtWJu5G3XeQLYiGqngVXG1hEl6UvI/YAJqsmoGN8tJfHQEFt5DFh+gK2dBnqVzS8eeRAlyk2/4DEIDG7fMSYDacCZ6SxXbTKwlZeQ+VhCE6m4tPOwC9kpfrQOurklRb08Xg2xNgWAdoSGAcRLho8VJlKletXqvOTHKzRoqVLCNzpVrNOubzyg3e6f73cDaroGHoNSthzZ7z0cLBwsMnwMaAYELcnBbY2ktlfUb5lZe+/F/ODvxOAoA3z3/D4Vs8JSns0G//iwTaUP81EjgTnuTEGBRGSQZahQ6Fayfu4/gV2jXoYy24NZol2DjM3mQaIMIQW4EMBysXZENNPA3SQWmIiCENc+WYxuAoL41JZfhNWGwtS4pWzcpVqVevEpFER2uLahmq1erWpFwHIqD8PuS+XW+DOarfGzvf3FYt13TnyqONzfDlH/MAAAAA";var y_=`
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
.nrt-ui .book,.nrt-ui .endcta{display:inline-block;margin-top:18px;pointer-events:auto;cursor:pointer;font:700 12px/1 Satoshi,system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;color:#2a1704;background:linear-gradient(180deg,#ffe2a2 0%,#f2b24c 45%,#c98a2c 100%);border:1px solid rgba(255,232,180,.9);padding:13px 24px;border-radius:999px;transform:translateZ(0);animation:nrtGlow 2.4s ease-in-out infinite;transition:transform .25s}
@keyframes nrtGlow{0%,100%{box-shadow:0 0 14px rgba(242,178,76,.55),0 0 34px rgba(242,178,76,.25)}50%{box-shadow:0 0 22px rgba(255,205,120,.9),0 0 60px rgba(242,178,76,.45)}}
.nrt-ui .endcta{font-size:13px;padding:15px 30px}   /* no backdrop blur: over a live canvas it flickers */
.nrt-ui .book:hover,.nrt-ui .endcta:hover{transform:translateY(-2px) scale(1.03)}
.nrt-ui .ch:not(.on) .book,.nrt-ui .ch:not(.on) .endcta{pointer-events:none}
.nrt-ui .hint{position:absolute;left:50%;bottom:26px;transform:translateX(-50%);font-size:11px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.85);opacity:0;transition:opacity 1s}
.nrt-ui .hint:after{content:"";display:block;width:1px;height:18px;margin:10px auto 0;background:rgba(255,255,255,.8);animation:nrtDrop 1.8s ease-in-out infinite}
@keyframes nrtDrop{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
@media (max-width:640px){.nrt-ui .brand{left:20px;top:20px;font-size:12.5px}.nrt-ui .cta{right:16px;top:14px;padding:9px 15px;font-size:12px}
  .nrt-ui .line{font-size:19px;line-height:1.42}.nrt-ui .story{bottom:92px}.nrt-ui .kick{font-size:10.5px;letter-spacing:.26em}}
`;function np(i,e,{contactUrl:t="https://nomadiichorse.com/contact-us",onBook:n=null}={}){if(!document.getElementById("nrt-css")){let l=document.createElement("style");l.id="nrt-css",l.textContent=`@font-face{font-family:"Nomadiic Line";src:url(${tp}) format("woff2");font-display:block}`+y_,document.head.appendChild(l);let c=document.createElement("link");c.rel="stylesheet",c.href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap",document.head.appendChild(c)}let s=document.createElement("div");s.className="nrt-ui",s.innerHTML=`<div class="scrim"></div><div class="brand">NOMADIIC HORSE DESIGNS</div><a class="cta" href="${t}">Contact us</a>
    <div class="story">${e.map((l,c)=>`<div class="ch" data-i="${c}"><div class="kick">${l.kick}</div><div class="line">${l.line}</div>${l.book?`<button class="book" data-book="${l.book}">Explore the book</button>`:""}${l.contact?`<div><a class="endcta" href="${t}">Contact us</a></div>`:""}</div>`).join("")}</div>
    <div class="hint">Scroll to enter</div>`,i.appendChild(s);let r=[...s.querySelectorAll(".ch")],a=l=>s.querySelector(l);s.querySelectorAll(".book").forEach(l=>l.addEventListener("click",c=>{c.stopPropagation(),n&&n(l.dataset.book)}));let o=-2;return{el:s,update(l,c){let u=window.visualViewport?window.visualViewport.height:innerHeight,h=Math.max(0,Math.round(i.getBoundingClientRect().bottom-u));h!==this._extra&&(this._extra=h,a(".story").style.transform=`translate(-50%, ${-h}px)`,a(".hint").style.transform=`translate(-50%, ${-h}px)`);let d=c>1.2;a(".brand").style.opacity=d?1:0,a(".cta").style.opacity=d?1:0,a(".scrim").style.opacity=d?1:0,a(".hint").style.opacity=d&&l<.004&&c>3?1:0;let f=d?e.findIndex(g=>l>=g.at[0]&&l<g.at[1]):-1;f!==o&&(o=f,r.forEach((g,x)=>g.classList.toggle("on",x===f)))},destroy(){s.remove()}}}function ip(i){let e=document.createElement("canvas");e.width=4096,e.height=160;let t=e.getContext("2d");return t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font='120px "Nomadiic Line", Satoshi, serif',"letterSpacing"in t&&(t.letterSpacing="38px"),t.fillText(i,e.width/2,e.height/2+6),e}function sp(i){let n=document.createElement("canvas");n.width=1024,n.height=372;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,372);r.addColorStop(0,"#6b4a2b"),r.addColorStop(.5,"#4f341d"),r.addColorStop(1,"#3a2614"),s.fillStyle=r,s.fillRect(0,0,1024,372);for(let c=0;c<90;c++){let u=Math.random()*1024,h=Math.random()*372,d=20+Math.random()*90,f=s.createRadialGradient(u,h,0,u,h,d);f.addColorStop(0,Math.random()<.5?"rgba(70,90,60,0.10)":"rgba(30,18,8,0.14)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(u-d,h-d,d*2,d*2)}let a=s.getImageData(0,0,1024,372);for(let c=0;c<a.data.length;c+=4){let u=(Math.random()-.5)*14;a.data[c]+=u,a.data[c+1]+=u,a.data[c+2]+=u}s.putImageData(a,0,0);let o=(c,u="#f6d58e",h="rgba(20,10,4,0.75)")=>{s.save(),s.translate(2,3),s.fillStyle=h,s.strokeStyle=h,c(),s.restore(),s.save(),s.translate(-1,-1.5),s.fillStyle="#fff3c9",s.strokeStyle="#fff3c9",c(),s.restore();let d=s.createLinearGradient(0,0,0,372);d.addColorStop(0,"#f2c66e"),d.addColorStop(1,"#b9832f"),s.fillStyle=d,s.strokeStyle=d,c()};o(()=>{s.lineWidth=7,s.strokeRect(26,26,972,320),s.lineWidth=2,s.strokeRect(42,42,940,288)}),s.textAlign="center",s.textBaseline="middle";let l=(c,u,h)=>{let d=h;do s.font=`${u} ${d}px Satoshi, system-ui, sans-serif`,d-=2;while(s.measureText(c).width>874&&d>30)};return i[0]==="Selected as"?(o(()=>{s.font="600 46px Satoshi, system-ui, sans-serif","letterSpacing"in s&&(s.letterSpacing="14px"),s.fillText("SELECTED AS",1024/2,118),"letterSpacing"in s&&(s.letterSpacing="0px")}),o(()=>{l(i[1],600,100),s.fillText(i[1],1024/2,230)})):(o(()=>{l(i[0],600,i.length>1?106:112),s.fillText(i[0],1024/2,i.length>1?140:190)}),i[1]&&o(()=>{l(i[1],500,70),"letterSpacing"in s&&(s.letterSpacing="4px"),s.fillText(i[1],1024/2,258),"letterSpacing"in s&&(s.letterSpacing="0px")})),n}Pt();Pt();var __=`
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
  float relief(vec3 nd, vec3 n){ return clamp(1.0 + (dot(nd, uSunDir) - dot(n, uSunDir)) * 0.9, 0.45, 1.6); }`;function M_(i){return Object.entries(i||{}).map(([e,t])=>`
  uniform sampler2D tD_${e}, tN_${e};
  vec3 D_${e}(vec3 p, vec3 n){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    return texture2D(tD_${e}, p.zy * s).rgb * w.x + texture2D(tD_${e}, p.xz * s).rgb * w.y + texture2D(tD_${e}, p.xy * s).rgb * w.z; }
  vec3 N_${e}(vec3 p, vec3 n, float k){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    vec3 tx = texture2D(tN_${e}, p.zy * s).xyz * 2.0 - 1.0, ty = texture2D(tN_${e}, p.xz * s).xyz * 2.0 - 1.0, tz = texture2D(tN_${e}, p.xy * s).xyz * 2.0 - 1.0;
    tx.xy *= k; ty.xy *= k; tz.xy *= k;
    vec3 nx = vec3(tx.xy + n.zy, abs(tx.z) * n.x), ny = vec3(ty.xy + n.xz, abs(ty.z) * n.y), nz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
    return normalize(nx.zyx * w.x + ny.xzy * w.y + nz.xyz * w.z); }`).join(`
`)}function w_(i,e=1,t=0,n=[.5,.5,.55],s=.03){let r=new ge(new xn(3500,64,32),new Te({side:Bt,depthWrite:!1,uniforms:{tSky:{value:i},uExp:{value:e},uRot:{value:t},uHaze:{value:new xe(...n)},uCut:{value:s},uStorm:{value:0},uFlash:{value:0},uT:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform sampler2D tSky; uniform float uExp, uRot, uCut, uStorm, uFlash, uT; uniform vec3 uHaze; varying vec3 vD; ${El}
      void main(){ vec3 d = normalize(vD); float k = smoothstep(uCut, uCut + 0.12, d.y);
        vec3 c = uHaze;
        if (k > 0.0) { float lon = atan(d.z, d.x) + uRot, lat = asin(clamp(d.y, -1.0, 1.0));      // only the photograph's sky is ever sampled: no stretched rows
          c = mix(uHaze, pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * uExp, k); }
        if (uStorm > 0.001) { vec3 ph = c * mix(vec3(1.0), vec3(0.42, 0.47, 0.58), uStorm);           // the skyline (mountains) stays, darkened under the deck
          c = mix(ph, stormSky(d, uT, uFlash), uStorm * smoothstep(0.035, 0.16, d.y)); }
        gl_FragColor = vec4(c, 1.0); }`}));return r.renderOrder=-1,r.frustumCulled=!1,r}var E_=`
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
    gl_Position = projectionMatrix * viewMatrix * w; }`;function ap(i,e){let t=new $e().makeTranslation(...i.origin);return t.multiply(new $e().makeRotationY(i.yaw-e.yaw)),t.multiply(new $e().makeTranslation(-e.origin[0],-e.origin[1],-e.origin[2])),t}async function mh(i,e,t){let n=t.renderTarget,s=i.getRenderTarget();try{i.setRenderTarget(n,0);let r=i.compileAsync(e,t.children[0]||t);i.setRenderTarget(s),await r}catch{i.setRenderTarget(s)}t.update(i,e)}var rp=(i,e)=>{globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(i,Math.round(performance.now()-e)+"ms")};async function hi(i,{base:e,unpack:t,loader:n,renderer:s,tier:r,grainTex:a}){let o=e+i.dir+"/",l=y=>new Promise((C,P)=>n.load(o+y,D=>{D.colorSpace=on,D.anisotropy=4,D.generateMipmaps=/_lm\./.test(y)?!1:D.generateMipmaps,/_lm\./.test(y)&&(D.minFilter=$t),C(D)},void 0,P)),c=await fetch(o+"scene.json").then(y=>y.json()),u=new An;u.background=new xe(...i.background||[.1,.1,.1]);let h={uTime:{value:0},uFogCol:{value:new xe(...i.fog?.col||[.5,.5,.5])},uFogK:{value:i.fog?.k??0}},d=new Gs(r==="high"?256:128,{generateMipmaps:!0,minFilter:Qn,type:qt}),f=[],g={},x={};await Promise.all(Object.entries(i.textures||{}).map(async([y,C])=>{let P=(H,F)=>new Promise((B,z)=>n.load(e+"tex/"+H,O=>{O.wrapS=O.wrapT=ks,O.anisotropy=8,O.colorSpace=F?Ft:on,B(O)},void 0,z)),[D,N]=await Promise.all([P(C.id+"_diff.webp",!0),P(C.id+"_nor.webp",!1)]);x["tD_"+y]={value:D},x["tN_"+y]={value:N}}));let m=M_(i.textures),p={value:new R(...i.sun||[.4,.8,.3]).normalize()},w={value:new xe(...i.sunCol||[1,.82,.58])},M={value:i.scatter??.5};for(let y of i.parts){let C=typeof y=="string"?y:y.name,P=typeof y=="object"&&y.planar,[D,N]=await Promise.all([t(o+C+".pack"),l(C+"_lm.webp")]),H=performance.now();D.computeVertexNormals(),rp(i.dir+" normals "+C,H);let F=new Te({uniforms:{...h,tLm:{value:N},tGrain:{value:a},tEnv:{value:d.texture},uHasEnv:{value:0},uK:{value:c.lm[C]},uRect:{value:new je(...c.rect||[0,1,0,1])},uSunDir:p,uSunCol:w,uScatter:M,...x,...i.uniforms||{}},defines:P?{PLANAR:""}:{},side:P?ft:Ri,vertexShader:E_,fragmentShader:`${__}
${m}
${i.glsl||""}
void main(){
          vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 1.0, 0.0);
          vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
          vec3 V = normalize(cameraPosition - vW), R = reflect(-V, n);
          float fres = pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0);
          float k = vKind + 0.5; vec3 c = vec3(0.5) * L;
          ${i.palette}
          gl_FragColor = vec4(clamp(fog(c), vec3(0.0), vec3(16.0)), 1.0); }`}),B=new ge(D,F);B.frustumCulled=!1,u.add(B),f.push(F),P&&(g.groundLm=N)}if(i.sky){let y=await new Promise((C,P)=>n.load(e+"tex/"+i.sky.file,D=>{D.colorSpace=on,D.generateMipmaps=!1,D.minFilter=$t,C(D)},void 0,P));g.sky=w_(y,i.sky.exposure??1,i.sky.rot??0,i.sky.haze||i.fog?.col||[.5,.5,.55],i.sky.cut??.03),u.add(g.sky)}let v={scene:u,U:h,info:c,renderer:s,tier:r,loader:n,dir:o,unpack:t,texL:l,envTex:d.texture,base:e,groundLm:g.groundLm,texU:x,sunDir:p,sky:g.sky},S=performance.now(),b=i.extras?await i.extras(v):null;if(rp(i.dir+" extras (incl. awaits)",S),i.envAt){let y=new Ws(.3,4e3,d);y.position.set(...i.envAt),u.add(y),await mh(s,u,y),f.forEach(C=>C.uniforms.uHasEnv.value=1)}let E=bs(i.way),T=new R,_=new R;return{key:i.dir,scene:u,sky:g.sky,chapters:i.chapters,exposure:i.exposure??1,sun:p.value.clone(),entry:i.entry,exit:i.exit,exitPortal:i.exitPortal,pose(y,C){E.sample(y,T,_),C.position.copy(T),C.lookAt(_)},closeUp(y){return(i.closeUps||[]).some(([C,P,D,N])=>(y.x-C)**2+(y.y-P)**2+(y.z-D)**2<N*N)},update(y,C,P,D){h.uTime.value=y,b?.update?.(y,C,P,D)},setPx(y){b?.setPx?.(y)},dispose(){u.traverse(y=>{y.geometry?.dispose?.();let C=y.material;C&&(Array.isArray(C)?C:[C]).forEach(P=>{P.uniforms?.tLm?.value?.dispose?.(),P.dispose()})}),d.dispose(),b?.dispose?.()}}}var b_="M\u012B\u1E6Dhr\u0101k\u012B",di={w:44,h:22,z:-46,y:11},Ga=-7,Xa=-16,Yt=(i,e,t)=>[i,e,t],S_=[{pos:Yt(0,1.9,42),tgt:Yt(0,2.1,5),w:1},{pos:Yt(0,7,34),tgt:Yt(-4,6,-16),w:1.2},{pos:Yt(-16,6.5,8),tgt:Yt(Ga,6,Xa),w:1.2},{pos:Yt(-12.5,5,1.5),tgt:Yt(Ga+1,4.6,Xa+3),w:1.1},{pos:Yt(-6.6,3.3,-9.2),tgt:Yt(Ga+2.6,2.05,Xa+3.9),w:1.3},{pos:Yt(-3.2,3.3,-6.2),tgt:Yt(Ga+4.5,2.2,Xa+5),w:1.3},{pos:Yt(4,9,6),tgt:Yt(0,11,di.z),w:1.3},{pos:Yt(0,11,-14),tgt:Yt(0,11.5,di.z),w:1.4},{pos:Yt(0,11,-26),tgt:Yt(0,11,di.z),w:1},{pos:Yt(12,4.5,-31),tgt:Yt(27,3.6,-36),w:1},{pos:Yt(25.6,1.9,-36),tgt:Yt(60,2.1,-36),w:0}],vh=[{at:[.06,.42],kick:"Our own brand \xB7 "+b_,line:"Pure Arabica from Shimoga, treated like engineering. Brand identity, packaging and a Shopify store."},{at:[.42,.86],kick:"We do not brew. We execute.",line:"Every bean measured, every mark specified, and a warm face against the cold data.",book:"mithraki"}],op=`
  attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
  void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w; }`,gh=`
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
      vec3 Lb = mix(vec3(dot(L, vec3(0.333))), L, 0.3);                    // the lightmap's island edges pick up the red floor: keep the beans' light neutral
      c = roast * Lb * 0.8 + vec3(dot(env(R, 0.7), vec3(0.333))) * (0.04 + 0.4 * fres) * 0.7 + vec3(1.0, 0.88, 0.75) * pow(max(dot(R, normalize(vec3(-0.4, 0.85, 0.3))), 0.0), 60.0) * 0.5 * dot(Lb, vec3(0.33));
    }
    else if (k < 10.0) c = vec3(0.26, 0.06, 0.065) * mix(vec3(1.0), grain, 0.3) * L;                                // oxblood dado plaster
    else if (k < 11.0) {                                                                                            // espresso crema: tiger-striped, glossy
      vec2 q = vW.xz; float r = fract(length(q - floor(q / 2.6 + 0.5) * 2.6) * 2.2);
      float tig = 0.5 + 0.5 * sin(atan(vW.z, vW.x) * 9.0 + vW.x * 14.0 + grain.r * 6.0);
      vec3 cr = mix(vec3(0.36, 0.19, 0.08), vec3(0.72, 0.47, 0.24), 0.45 + 0.35 * tig) * (0.85 + 0.15 * r);
      c = cr * (L * 0.8 + 0.25) + env(R, 0.4) * (0.04 + 0.5 * fres);
    }
    else {                                                                                                          // jute: a coarse open weave
      vec2 pq = abs(n.y) > 0.7 ? vW.xz : vec2(abs(n.x) > abs(n.z) ? vW.z : vW.x, vW.y);   // the weave runs along the sack's own surface
      vec2 f = pq * 9.0; float aa = 1.0 - smoothstep(0.25, 0.6, length(fwidth(f)));        // fades out where it would shimmer (moir\xE9)
      float weave = (0.5 + 0.5 * sin(f.x * 6.2832) * sin(f.y * 6.2832 + 1.57 * step(0.5, fract(f.x * 0.5)))) * aa + 0.5 * (1.0 - aa);
      vec3 jute = vec3(0.5, 0.39, 0.24) * mix(vec3(1.0), grain, 0.45) * (0.8 + 0.2 * weave);
      c = jute * max(mix(vec3(dot(L, vec3(0.333))), L, 0.5), vec3(0.62, 0.56, 0.5));   // the sack's bake faced inwards: a floor of room light
    }
    gl_FragColor = vec4(clamp(c, vec3(0.0), vec3(16.0)), 1.0);
  }`;async function lp({base:i,unpack:e,loader:t,renderer:n,tier:s,grainTex:r}){let a=i+"mithraki/",o=q=>new Promise((Y,ye)=>t.load(a+q,me=>{me.colorSpace=on,me.anisotropy=8,Y(me)},void 0,ye)),[l,c,u,h,d,f,g]=await Promise.all([fetch(a+"scene.json").then(q=>q.json()),e(a+"room.pack"),o("room_lm.webp"),e(a+"relief.pack"),o("relief_lm.webp"),e(a+"machine.pack"),o("machine_lm.webp")]);c.computeVertexNormals();let x=new An;x.background=new xe(.85,.82,.78);let m={uTime:{value:0},uWake:{value:0},uHandOn:{value:0},uHand:{value:new R(0,11,di.z+3)}},p=new Gs(s==="high"?256:128,{generateMipmaps:!0,minFilter:Qn,type:qt}),w=new Te({uniforms:{...m,tLm:{value:u},tGrain:{value:r},tEnv:{value:p.texture},uK:{value:l.lm}},vertexShader:op,fragmentShader:gh}),M=new ge(c,w);M.frustumCulled=!1,x.add(M),f.computeVertexNormals();let v=new Te({uniforms:{...m,tLm:{value:g},tGrain:{value:r},tEnv:{value:p.texture},uK:{value:l.lmMachine}},vertexShader:op,fragmentShader:gh}),S=new ge(f,v);S.frustumCulled=!1,x.add(S),h.computeVertexNormals();let b=l.relief.rect,E=new Te({uniforms:{...m,tLm:{value:d},tGrain:{value:r},uK:{value:l.relief.k},uRect:{value:new je(b[0],b[1],b[2],b[3])}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tLm, tGrain; uniform float uK, uWake, uHandOn; uniform vec3 uHand; uniform vec4 uRect; varying vec3 vW, vN;
      vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
      void main(){
        vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 0.0, 1.0);
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (vW.y - uRect.z) / (uRect.w - uRect.z));
        vec3 L = lmDecode(texture2D(tLm, uv).rgb, uK);
        vec3 alb = vec3(0.93, 0.89, 0.83) * mix(1.0, texture2D(tGrain, vW.xy / 3.0).r * 1.08, 0.3);
        vec3 d = uHand - vW; float dist = length(d); vec3 l = d / max(dist, 1e-3);
        float hand = max(dot(n, l), 0.0) * exp(-dist * dist / 16.0) * uHandOn;          // a warm light held close to the plaster
        vec3 c = alb * (L * (0.85 + 0.15 * uWake) + vec3(1.0, 0.6, 0.32) * hand * 2.4 * (0.4 + 0.6 * uWake));
        gl_FragColor = vec4(clamp(c, vec3(0.0), vec3(16.0)), 1.0); }`}),T=new ge(h,E);T.frustumCulled=!1,x.add(T);let _=new Fr;w.uniforms.tEnv.value=null;let y=new Ws(.5,300,p);y.position.set(-2,4,-2),x.add(y);let C=w.clone();C.uniforms={...w.uniforms,tEnv:{value:null}},C.fragmentShader=gh.replace("vec3 env(vec3 R, float lod){ return textureLod(tEnv, R, lod).rgb; }","vec3 env(vec3 R, float lod){ return vec3(0.18, 0.16, 0.15); }");let P=C.clone();P.uniforms={...C.uniforms,tLm:{value:g},uK:{value:l.lmMachine}},M.material=C,S.material=P,await mh(n,x,y),M.material=w,S.material=v,w.uniforms.tEnv.value=p.texture,C.dispose(),P.dispose();let D=s==="high"?700:300,N=new Ye,H=new Float32Array(D*4);for(let q=0;q<D;q++)H[q*4]=q%2?1:-1,H[q*4+1]=Math.random(),H[q*4+2]=Math.random()*6.28,H[q*4+3]=Math.random();N.setAttribute("position",new Je(new Float32Array(D*3),3)),N.setAttribute("aD",new Je(H,4));let F=new Jt(N,new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:m.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; attribute vec4 aD; varying float vA;
      void main(){ float life = fract(uTime * 0.12 + aD.y); float gx = ${Ga.toFixed(1)} + aD.x * 2.6;
        vec3 p = vec3(gx + sin(life * 6.0 + aD.z) * 0.5 * life, 2.4 + life * 6.5, ${(Xa+3.85).toFixed(2)} + cos(life * 5.0 + aD.z) * 0.4 * life);
        vA = 0.045 * sin(life * 3.14159) * (0.5 + aD.w * 0.5);
        vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.35 + life * 1.6) * uPx / max(-mv.z, 0.5), 1.0, 90.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.93, 0.9) * a, a); }",blending:St}));F.frustumCulled=!1,x.add(F);let B=new re(-9,-9),z=new ll,O=new jn(new R(0,0,1),-di.z-.3),Z=-10,se=new R,de=q=>{let Y=n.domElement.getBoundingClientRect();B.set((q.clientX-Y.left)/Y.width*2-1,-((q.clientY-Y.top)/Y.height)*2+1),Z=performance.now()/1e3};n.domElement.addEventListener("pointermove",de,{passive:!0});let we=bs(S_),X=new R,ee=new R,ae=new R(0,11,di.z+3);return{sun:new R(...l.sun||[-.42,.87,-.25]).normalize(),scene:x,chapters:vh,exposure:.98,entry:{origin:[0,0,42],yaw:0},exit:{origin:[26,0,-36],yaw:-Math.PI/2},exitPortal:{pos:[25.97,3.6,-36],size:[4.5,7.2],yaw:-Math.PI/2},pose(q,Y){we.sample(q,X,ee),Y.position.copy(X),Y.lookAt(ee)},update(q,Y,ye,me){m.uTime.value=q,m.uWake.value+=(ut.smoothstep(ye,.45,.85)-m.uWake.value)*(1-Math.exp(-Y*2));let Ee=performance.now()/1e3,Q=!1;Ee-Z<2.5&&(z.setFromCamera(B,me),z.ray.intersectPlane(O,se)&&Math.abs(se.x)<di.w/2&&Math.abs(se.y-di.y)<di.h/2&&(ae.set(se.x,se.y,di.z+3.2),Q=!0)),Q||ae.set(Math.sin(q*.21)*9+Math.sin(q*.53)*3,di.y+Math.sin(q*.33)*5,di.z+3.2),m.uHand.value.lerp(ae,1-Math.exp(-Y*4)),m.uHandOn.value+=((ye>.35?1:0)-m.uHandOn.value)*(1-Math.exp(-Y*1.5))},setPx(q){F.material.uniforms.uPx.value=q},destroy(){n.domElement.removeEventListener("pointermove",de),p.dispose()},dispose(){n.domElement.removeEventListener("pointermove",de),p.dispose(),x.traverse(q=>{q.geometry?.dispose?.();for(let Y of[].concat(q.material||[]))Y.dispose()})}}}Pt();var yn=(i,e,t)=>[i,e,t],T_=[{pos:yn(0,1.9,48.4),tgt:yn(0,2.1,10),w:.8},{pos:yn(0,2.6,40),tgt:yn(0,4,18),w:1.2},{pos:yn(-.6,2.4,31),tgt:yn(0,4.5,6),w:1.2},{pos:yn(.6,2.7,23),tgt:yn(3.6,1.4,11),w:1.4},{pos:yn(-.6,2.7,9),tgt:yn(-3.6,1.4,-3),w:1.4},{pos:yn(0,2.8,-6),tgt:yn(0,3,-40),w:1},{pos:yn(0,2.6,-34),tgt:yn(0,2.4,-70),w:1},{pos:yn(0,2.1,-50),tgt:yn(0,2.1,-80),w:1},{pos:yn(0,1.9,-57.6),tgt:yn(0,2.1,-95),w:0}],xh=[{at:[.04,.5],kick:"Client \xB7 Revise Tax",line:"Full branding and website for Revise Tax."},{at:[.5,1.01],kick:"The result",line:"One of the best-looking tax websites in India, where money feels calm, clear and trusted."}],A_=`
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
    vec3 bt = vec3(1.0, 0.74, 0.38); vec3 nd = n; float dly = 0.0; float plate = 0.0, pin = 0.0, edge = 1.0;
    if (abs(n.x) > 0.5) {
      float u = vW.z + 53.7, m = floor((u + 0.85) / 6.0), w = u - 6.0 * m, col = clamp(floor(w / 1.7 + 0.5), 0.0, 2.0);
      vec2 dl = vec2(w - col * 1.7, vW.y - 1.1 - clamp(floor((vW.y - 1.1) / 1.35 + 0.5), 0.0, 3.0) * 1.35); dly = dl.y;
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
    float el = pow(dot(env(Rn, 0.9), vec3(0.33)), 0.8), Lg = dot(L, vec3(0.333));
    float streak = pow(max(dot(Rn, normalize(vec3(0.0, 1.0, 0.15))), 0.0), 30.0) + 0.5 * pow(max(dot(Rn, normalize(vec3(0.0, 0.3, 1.0))), 0.0), 12.0);
    float sheen = exp(-pow((dly + Rn.y * 0.55) * 4.0, 2.0));          // brushed metal: a soft band of light slides across each door as you move
    c = (bt * bt * (Lg * 0.4 + el * 1.1 + 0.04) * brush * (0.7 + 0.6 * sheen) + bt * streak * 1.4 * (0.4 + Lg) + bt * sheen * 0.22 * (0.5 + Lg)) * occ * edge;   // polished brass: the room and the skylight in it, warm and bright
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
`;function cp(i){return hi({dir:"revisetax",parts:["room"],way:T_,chapters:xh,palette:A_,textures:{trav:{id:"palace_marble",s:3.2},marb:{id:"marble_tiles",s:4},plas:{id:"white_plaster_rough_01",s:2}},sun:[-.2,.93,.3],sunCol:[1,.85,.62],scatter:.35,background:[.6,.66,.74],fog:{col:[.78,.74,.66],k:.004},exposure:1,envAt:[0,3,10],entry:{origin:[0,0,48],yaw:0},exit:{origin:[0,0,-58],yaw:0},exitPortal:{pos:[0,3.6,-58.03],size:[4.5,7.2],yaw:0},extras:async({scene:e,info:t,tier:n,U:s,envTex:r})=>{let a=new Te({transparent:!0,depthWrite:!1,blending:St,side:ft,uniforms:{uTime:s.uTime},vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vL; uniform float uTime;
          void main(){ float h = clamp(vL.y / 9.5 + 0.5, 0.0, 1.0); float edge = 1.0 - smoothstep(0.25, 0.5, max(abs(vL.x) / 3.0, abs(vL.z) / 3.0));
            float a = edge * (0.25 + 0.75 * h) * 0.055 * (0.9 + 0.1 * sin(uTime * 0.7 + vL.y)); gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`});for(let D of t.sky){let N=new gn(3,9.5,3,1,1,1),H=N.attributes.position;for(let B=0;B<H.count;B++){let z=H.getY(B);H.setX(B,H.getX(B)-z*.19),H.setZ(B,H.getZ(B)+z*.38)}let F=new ge(N,a);F.position.set(1,4.75,D-1.8),F.renderOrder=5,e.add(F)}let o=n==="high"?160:70,l=new Ii(.032,.032,.006,16),c=new Nt({color:new xe("#e6ac40"),metalness:1,roughness:.22,envMapIntensity:1.4});c.envMap=r;let u=new vn(l,c,o);u.frustumCulled=!1,e.add(u);let h=[],d=(()=>{let D=7;return()=>(D=D*16807%2147483647)/2147483647})(),f=()=>(d()+d()+d()-1.5)*.8,g=(D,N)=>.9+.36*Math.pow(Math.max(0,1-(D/.8)**2-(N/.48)**2),.65),x=new xn(1,28,12,0,Math.PI*2,0,Math.PI/2);t.chests.forEach(([D,N,H],F)=>{let B=F<2?2600:1100,z=Math.cos(H),O=Math.sin(H);for(let se=0;se<B;se++){let de=(d()*2-1)*.8,we=(d()*2-1)*.48,X=g(de,we);if(X<.905&&d()<.7)continue;let ee=Math.floor(d()*3),ae=X-ee*.011+d()*.004,q=(g(de+.02,we)-g(de-.02,we))/.04,Y=(g(de,we+.02)-g(de,we-.02))/.04;h.push([D+de*z+we*O,ae,N-de*O+we*z,Math.atan(Y)+f()*.5,d()*6.28,-Math.atan(q)+f()*.5])}let Z=new ge(x,c);Z.scale.set(.79,.34,.47),Z.position.set(D,.9,N),Z.rotation.y=H,e.add(Z);for(let se=0;se<(F<2?420:160);se++){let de=d()*6.283,we=.95+Math.pow(d(),2.2)*1.8;h.push([D+Math.cos(de)*we*1.1,.004+d()*.006,N+Math.sin(de)*we*.75,f()*.08,d()*6.28,f()*.08])}});let m=new Ii(.032,.032,.006,12),p=new vn(m,c,h.length);p.frustumCulled=!1;{let D=new $e,N=new Dt,H=new cn,F=new R,B=new R(1,1,1);h.forEach((z,O)=>{H.set(z[3],z[4],z[5],"YXZ"),N.setFromEuler(H),D.compose(F.set(z[0],z[1],z[2]),N,B),p.setMatrixAt(O,D)})}e.add(p),e.add(new ci(16773597,3811864,1.2));let w=new Vn(16769720,2.5);w.position.set(-3,10,6),e.add(w);let M=Array.from({length:o},(D,N)=>{let H=t.chests[N%t.chests.length];return{x:H[0]+(Math.random()-.5)*.9,z:H[1]+(Math.random()-.5)*.6,ph:Math.random(),sp:.6+Math.random()*.5,r:Math.random()*6}}),v=new $e,S=new Dt,b=new cn,E=new R,T=new R(1,1,1),_=n==="high"?1400:500,y=new Ye,C=new Float32Array(_*3);for(let D=0;D<_;D++){let N=t.sky[D%t.sky.length];C[D*3]=(Math.random()-.5)*4+1,C[D*3+1]=Math.random()*9,C[D*3+2]=N-1.8+(Math.random()-.5)*4}y.setAttribute("position",new Je(C,3));let P=new Jt(y,new Te({transparent:!0,depthWrite:!1,blending:St,uniforms:{uTime:s.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uTime * 0.08, 9.0); p.x += sin(uTime * 0.3 + p.z) * 0.2;
          vA = 0.35 * smoothstep(0.0, 1.0, p.y) * (1.0 - smoothstep(7.5, 9.0, p.y)); vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.02 * uPx / -mv.z, 1.0, 6.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * a, a); }"}));return P.frustumCulled=!1,e.add(P),{update(D){for(let N=0;N<o;N++){let H=M[N],F=(D*H.sp*.25+H.ph)%1,B=9.6-F*F*8.7;b.set(D*3+H.r,D*2+H.r,0),S.setFromEuler(b),E.set(H.x,Math.max(B,1.15),H.z),v.compose(E,S,T),u.setMatrixAt(N,v)}u.instanceMatrix.needsUpdate=!0},setPx(D){P.material.uniforms.uPx.value=D}}}},i)}Pt();Pt();var R_=`
  float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }`;function ea(i){let e={uTime:i.U.uTime,uFogCol:i.U.uFogCol,uFogK:i.U.uFogK,uCenter:{value:new re},uTile:{value:i.tile||60},uFade:{value:new re(...i.fade||[24,32])},uH:{value:i.height||.5},uWide:{value:i.wide||1.2},uPxAng:{value:.0015},tLm:{value:i.lm},uK:{value:i.K},uRect:{value:new je(...i.rect)},uSun:{value:(i.sun||new R(.5,.6,.4)).clone().normalize()},uTip:{value:new xe(...i.tip||[.22,.3,.07])},uDry:{value:new xe(...i.dry||[.42,.38,.16])},uRoot:{value:new xe(...i.root||[.035,.05,.015])},uWind:{value:i.wind??1}},t=new Te({side:ft,uniforms:e,vertexShader:`${R_}
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
      }`}),n=new ge(ka(i.count||12e4,e.uTile.value,1,i.seed||3),t);n.frustumCulled=!1;let s=new R;return{mesh:n,update(r){r.getWorldDirection(s),e.uCenter.value.set(r.position.x+s.x*e.uTile.value*.38,r.position.z+s.z*e.uTile.value*.38)},setPx(r){e.uPxAng.value=r}}}var _n=i=>3.2*Math.sin(i*.045)+1.6*Math.sin(i*.11+1.3),Kt=(i,e,t)=>[i,e,t],Bn=-58,Wn=_n(Bn)+3.3;function C_(i,e){let t=Math.abs(i-_n(e)),n=Math.pow(Math.min(1,Math.max(0,(t-2.6)/6)),1.5),s=1.4*Math.sin(i*.09+.5)*Math.cos(e*.07)+.9*Math.sin((i-e)*.13)+.5*Math.sin(i*.31+e*.23);return s=s*n+.06*Math.sin(e*.5),s*=Math.min(1,Math.abs(e-52)/8)*Math.min(1,Math.abs(e+100)/8),s+.02*t*n*3}var Ei=C_(Wn,Bn)+.44,P_=[{pos:Kt(0,1.9,52.4),tgt:Kt(_n(30),2.2,30),w:.8},{pos:Kt(_n(40),2.3,40),tgt:Kt(_n(18),2.6,18),w:1},{pos:Kt(_n(22),2.4,22),tgt:Kt(_n(0),2.8,0),w:1},{pos:Kt(_n(2),2.5,2),tgt:Kt(_n(-24),2.6,-24),w:1},{pos:Kt(_n(-22)+1.2,2.2,-22),tgt:Kt(_n(-34)-3.2,1.6,-34),w:1.4},{pos:Kt(_n(-34)+1,1.9,-34),tgt:Kt(_n(-38)-3,1.9,-38),w:1.6},{pos:Kt(_n(-50)-.4,2.3,-50),tgt:Kt(Wn,Ei,Bn),w:1.2},{pos:Kt(Wn-.9,Ei+.42,Bn+.8),tgt:Kt(Wn-.05,Ei+.06,Bn),w:1.6},{pos:Kt(_n(-68),2.3,-68),tgt:Kt(_n(-86),2.6,-86),w:1},{pos:Kt(_n(-78)*.6,2.2,-80),tgt:Kt(0,3.4,-100),w:1},{pos:Kt(0,1.9,-99.6),tgt:Kt(0,2.1,-140),w:0}],yh=[{at:[.04,.42],kick:"Client \xB7 Bisi Kaapi",line:"Branding and website for Bisi Kaapi: filter coffee rooted in the hills of Karnataka."},{at:[.42,1.01],kick:"From the forest to the cup",line:"Coffee grows in forests like this one. We designed a brand that tastes like a Bangalore morning."}],I_=`
  const float HX = ${Wn.toFixed(3)}, HZ = ${Bn.toFixed(1)};
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
`;function up(i){return hi({dir:"bisikaapi",parts:["room",{name:"ground",planar:!0}],way:P_,chapters:yh,palette:I_,textures:{leaf:{id:"forest_leaves_02",s:2.4},lat:{id:"red_laterite_soil_stones",s:3.2},mud:{id:"brown_mud_leaves_01",s:2.2},bark:{id:"bark_brown_02",s:1.4},wall:{id:"mossy_stone_wall",s:3},mrock:{id:"mossy_rock",s:2},flag:{id:"rock_pitted_mossy",s:1.1}},sun:[.45,.5,-.6],sunCol:[1,.84,.58],scatter:1.1,envAt:[Wn,Ei+.5,Bn],closeUps:[[Wn,Ei,Bn,2.6]],sky:{file:"rainforest_trail_sky.webp",exposure:.9,cut:.45},background:[.6,.72,.8],fog:{col:[.5,.6,.55],k:.0048},exposure:1.05,entry:{origin:[0,0,52],yaw:0},exit:{origin:[0,0,-100],yaw:0},exitPortal:{pos:[0,3.6,-100.03],size:[4.5,7.2],yaw:0,arch:!0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:a,base:o,unpack:l,groundLm:c,dir:u}=e,h=new R(.45,.5,-.6).normalize(),d={uTime:r.uTime,uSun:{value:h},uFogCol:r.uFogCol,uFogK:r.uFogK},f=new je(...n.rect),g=await Ui({base:o,unpack:l,loader:a,U:d,groundLm:c,groundK:n.lm.ground,rect:f,tier:s,layout:{items:n.items.filter(F=>!F[0].startsWith("rock_moss_set"))}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let x=await new Promise(F=>a.load(u+"leaves.webp",B=>{B.colorSpace=Ft,B.anisotropy=4,F(B)})),m=(F,B,z,O)=>{let Z=new Ye,se=[],de=[],we=[],X=[],ee=O,ae=()=>(ee=ee*16807%2147483647)/2147483647;for(let q=0;q<F;q++){let Y=new R(ae()-.5,ae()-.5,ae()-.5).multiplyScalar(1.7),ye=new R(ae()-.5,ae()*.6,ae()-.5).normalize(),me=new R().crossVectors(ye,new R(ae()-.5,ae()-.5,ae()-.5)).normalize(),Ee=.75+ae()*.5,Q=Math.floor(ae()*16),he=Q%4/4,U=1-(Math.floor(Q/4)+1)/4,ve=se.length/3;for(let[ue,_e]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let J=Y.clone().addScaledVector(me,ue*z*Ee).addScaledVector(ye,_e*B*Ee);se.push(J.x,J.y,J.z),de.push(he+(ue+1)/8,U+(_e+1)/8),X.push(Y.length()/1.2)}we.push(ve,ve+1,ve+2,ve,ve+2,ve+3)}return Z.setAttribute("position",new Ge(se,3)),Z.setAttribute("uv",new Ge(de,2)),Z.setAttribute("aOut",new Ge(X,1)),Z.setIndex(we),Z},p=s==="high",w=(F,B)=>{let z=new ui;z.index=F.index;for(let O of["position","uv","aOut"])z.attributes[O]=F.attributes[O];return z.setAttribute("aC",new Ut(new Float32Array(B.flatMap(O=>[O[0],O[1],O[2],O[3]])),4)),z.setAttribute("aT",new Ut(new Float32Array(B.flatMap((O,Z)=>[O[4],Z*.6180339%1])),2)),z.instanceCount=B.length,z},M=n.clusters.filter((F,B)=>F[4]!==1&&(p||B%3!==0)),v=n.clusters.filter(F=>F[4]===1),S=w(m(p?80:46,.3,.3,9),M),b=w(m(p?70:44,.24,.24,21),v),E=new ge(b,new Te({side:ft,uniforms:{...d,tLeaf:{value:x},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:f}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
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
            gl_FragColor = vec4(c, 1.0); }`}));E.frustumCulled=!1,t.add(E);let T=new ge(S,E.material);T.frustumCulled=!1,t.add(T);let _=n.cherries.filter((F,B)=>s==="high"||B%2===0),y=new vn(new xn(.045,10,8),new Nt({roughness:.25,metalness:0}),_.length),C=new $e,P=new xe;_.forEach((F,B)=>{C.makeTranslation(F[0],F[1],F[2]),y.setMatrixAt(B,C),y.setColorAt(B,F[3]?P.setRGB(.55,.03,.03):P.setRGB(.25,.42,.08))}),y.frustumCulled=!1,t.add(y),t.add(new ci(13624063,2761750,1.1));let D=new Vn(16769200,2.2);D.position.copy(h).multiplyScalar(50),t.add(D);let N=new Te({transparent:!0,depthWrite:!1,blending:St,side:ft,uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.3, vUv.x) * (1.0 - smoothstep(0.7, 1.0, vUv.x)) * smoothstep(0.0, 0.5, vUv.y) * 0.09 * (0.85 + 0.15 * sin(uTime * 0.4 + vUv.x * 9.0));
          gl_FragColor = vec4(vec3(1.0, 0.92, 0.75) * a, a); }`});for(let F=0;F<18;F++){let B=40-F*8+(Math.random()-.5)*4,z=_n(B)+(Math.random()-.5)*14,O=new ge(new Et(2.5+Math.random()*3,26),N);O.position.set(z,11,B),O.rotation.set(-.5,Math.random()*.6-.3,.42)}{let F=(q,Y=64)=>new Pi(q.map(([ye,me])=>new re(ye,me)),Y),B=q=>e.texU[q].value,z=F([[0,0],[.62,0],[.7,.08],[.72,.22],[.66,.36],[.5,.43],[.2,.445],[0,.445]],40),O=z.attributes.position;for(let q=0;q<O.count;q++){let Y=O.getX(q),ye=O.getZ(q),me=Math.atan2(ye,Y),Ee=1+.06*Math.sin(me*5+1)+.04*Math.sin(me*11);O.setX(q,Y*Ee),O.setZ(q,ye*Ee*.85)}z.computeVertexNormals();let Z=new ge(z,new Nt({map:B("tD_mrock"),normalMap:B("tN_mrock"),roughness:.92,color:14211276}));Z.position.set(Wn,Ei-.445,Bn),t.add(Z);let se=new Nt({color:13803600,metalness:1,roughness:.24,envMap:e.envTex,envMapIntensity:1.3}),de=new ge(F([[0,0],[.085,0],[.1,.012],[.112,.045],[.128,.062],[.125,.066],[.106,.05],[.094,.016],[0,.012]]),se),we=F([[0,0],[.04,0],[.044,.008],[.05,.11],[.056,.124],[.053,.126],[.046,.112],[.038,.012],[0,.01]]),X=new ge(we,se),ee=new ge(we,se);de.position.set(Wn-.05,Ei,Bn),X.position.set(Wn-.05,Ei+.018,Bn),ee.position.set(Wn+.2,Ei,Bn+.08);let ae=new ge(new Wr(.047,40),new Te({uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vP; uniform float uTime; float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
            void main(){ float r = length(vP) / 0.047; float foam = smoothstep(0.55, 0.95, r) * (0.7 + 0.3 * h(floor(vP * 900.0)));
              vec3 c = mix(vec3(0.16, 0.08, 0.035), vec3(0.62, 0.45, 0.28), foam * 0.9 + 0.12 * h(floor(vP * 500.0 + uTime)));   // filter coffee, frothed by pouring
              gl_FragColor = vec4(c * 0.9, 1.0); }`}));ae.rotation.x=-Math.PI/2,ae.position.set(Wn+.2,Ei+.105,Bn+.08),t.add(de,X,ee,ae),n.hero=[Wn+.2,Ei+.12,Bn+.08]}if(n.hero){let B=new Ye,z=new Float32Array(90*4);for(let Z=0;Z<90;Z++)z[Z*4]=Math.random(),z[Z*4+1]=Math.random()*6.28,z[Z*4+2]=Math.random(),z[Z*4+3]=Math.random();B.setAttribute("position",new Je(z.slice(0,90*3),3)),B.setAttribute("aS",new Je(z,4));let O=new Jt(B,new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uO:{value:new R(...n.hero)}},vertexShader:`uniform float uTime; uniform vec3 uO; attribute vec4 aS; varying float vA;
            void main(){ float t = fract(aS.x + uTime * (0.16 + aS.z * 0.08)); float h = t * 0.5;
              vec3 p = uO + vec3(cos(aS.y + h * 9.0) * (0.012 + h * 0.09), h, sin(aS.y + h * 9.0) * (0.012 + h * 0.09)) + vec3(sin(uTime * 0.9 + h * 10.0) * 0.06 * h, 0.0, 0.0);
              vA = sin(t * 3.14159) * 0.03 * smoothstep(0.0, 0.15, t); vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((14.0 + 46.0 * t) / -mv.z, 1.0, 60.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.96, 0.94), a); }"}));O.frustumCulled=!1,O.renderOrder=7,t.add(O)}let H=ea({U:r,lm:c,K:n.lm.ground,rect:n.rect,sun:h,tile:56,count:p?14e4:6e4,fade:[20,27],height:.42,wide:1.25,tip:[.16,.24,.06],dry:[.3,.3,.12],root:[.03,.04,.012],seed:7,heightGLSL:`float groundY(vec2 p){ float x = p.x, z = p.y; float px = 3.2 * sin(z * 0.045) + 1.6 * sin(z * 0.11 + 1.3); float d = abs(x - px);
          float fl = pow(clamp((d - 2.6) / 6.0, 0.0, 1.0), 1.5);
          float h = 1.4 * sin(x * 0.09 + 0.5) * cos(z * 0.07) + 0.9 * sin((x - z) * 0.13) + 0.5 * sin(x * 0.31 + z * 0.23);
          h = h * fl + 0.06 * sin(z * 0.5); h *= min(1.0, abs(z - 52.0) / 8.0) * min(1.0, abs(z + 100.0) / 8.0); return h + 0.02 * d * fl * 3.0; }`,maskGLSL:`float grassMask(vec2 p){ float px = 3.2 * sin(p.y * 0.045) + 1.6 * sin(p.y * 0.11 + 1.3);
          return smoothstep(2.2, 3.2, abs(p.x - px)) * smoothstep(2.4, 3.4, distance(p, vec2(${Wn.toFixed(2)}, ${Bn.toFixed(1)}))) * smoothstep(0.25, 0.6, gn(p * 0.21)); }`});return t.add(H.mesh),{update(F,B,z,O){H.update(O)},setPx(F){H.setPx(1/F)}}}},i)}Pt();var Mn=(i,e,t)=>[i,e,t],W_=[{pos:Mn(0,1.9,12.4),tgt:Mn(0,1,-40),w:.45},{pos:Mn(0,5.5,-6.5),tgt:Mn(0,-24,-95),w:1},{pos:Mn(-44,14,-28),tgt:Mn(0,0,-105),w:1},{pos:Mn(-66,34,-80),tgt:Mn(0,30,-108),w:1.1},{pos:Mn(-44,74,-132),tgt:Mn(0,30,-112),w:1.1},{pos:Mn(10,86,-142),tgt:Mn(0,20,-118),w:1},{pos:Mn(12,24,-172),tgt:Mn(0,10,-130),w:1.1},{pos:Mn(6,-8,-180),tgt:Mn(0,-14,-200),w:1},{pos:Mn(2,-32,-184),tgt:Mn(0,-56,-190),w:0}],Eh=[{at:[.04,.45],kick:"Client \xB7 Glavida",line:"Branding and website for Glavida, a real estate company that builds homes worth waiting for."},{at:[.45,.94],kick:"From line to landmark",line:"Every great building starts as a line on paper. We gave Glavida a brand people want to move into."}],G_="uniform float uBuild, uSea;",X_=`
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
`;function hp(i){return hi({dir:"glavida",parts:["room"],way:W_,chapters:Eh,palette:X_,glsl:G_,textures:{stone:{id:"large_sandstone_blocks",s:3},conc:{id:"concrete_tile_facade",s:3.2},rock:{id:"rock_face_03",s:6},asph:{id:"asphalt_02",s:4},lawn:{id:"forest_ground_04",s:3}},sun:[-.7,.25,-.35],sunCol:[1,.6,.4],scatter:.9,sky:{file:"kiara_9_dusk_sky.webp",exposure:1,rot:3.734,cut:0,haze:[.22,.3,.44]},uniforms:{uBuild:{value:-24},uSea:{value:-26}},background:[.16,.26,.42],fog:{col:[.22,.3,.44],k:.0026},exposure:.95,envAt:[0,30,-20],entry:{origin:[0,0,12],yaw:0},exit:{origin:[2,-26,-184],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:a,base:o,unpack:l,renderer:c}=e,u=e.sky,h=new $s(new Et(600,300),{textureWidth:1024,textureHeight:512,color:5928336,shader:{name:"harbour",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:r.uTime},vertexShader:"uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW; void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime; varying vec4 vUv4; varying vec3 vW;
            void main(){ float dd = length(vW - cameraPosition); vec2 r = vec2(sin(vW.x * 0.71 + vW.z * 0.23 + uTime * 0.9) + 0.6 * sin(vW.x * 1.93 - vW.z * 1.37 - uTime * 1.3) + 0.35 * sin(vW.z * 3.1 + vW.x * 0.6 + uTime * 1.7), sin(vW.z * 0.83 - vW.x * 0.31 + uTime * 0.7) + 0.6 * sin(vW.z * 2.17 + vW.x * 1.11 + uTime * 1.1)) * 0.009 / (1.0 + dd * 0.012);
              vec4 uv = vUv4; uv.xy += r * uv.w; vec3 V = normalize(cameraPosition - vW); float f = 0.05 + 0.95 * pow(1.0 - max(V.y, 0.0), 4.0);
              vec3 c = mix(vec3(0.01, 0.03, 0.05), texture2DProj(tDiffuse, uv).rgb, clamp(f, 0.0, 1.0)); gl_FragColor = vec4(c, 1.0); }`}});h.rotation.x=-Math.PI/2,h.position.set(0,n.sea,-305),t.add(h);let d=new Ia(new Uint8Array([200,200,200,255]),1,1);d.needsUpdate=!0;let f={uTime:r.uTime,uSun:{value:new R(-.7,.3,.25).normalize()},uFogCol:r.uFogCol,uFogK:r.uFogK},g=await Ui({base:o,unpack:l,loader:a,U:f,groundLm:d,groundK:.5,rect:new je(-1,1,-1,1),tier:s,layout:{items:n.items}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let x=new Nt({color:13214247,metalness:.3,roughness:.6});t.add(new ci(9414872,1710626,.9));let m=new Vn(16756864,1);m.position.set(-70,35,25),t.add(m);let p=(_,y,C)=>{let P=[],D=(B,z,O)=>{let Z=new R().subVectors(z,B),se=new Ii(O,O,Z.length(),4,1,!0);se.applyQuaternion(new Dt().setFromUnitVectors(new R(0,1,0),Z.clone().normalize())),se.translate((B.x+z.x)/2,(B.y+z.y)/2,(B.z+z.z)/2),P.push(se)},N=(B,z,O)=>C==="y"?new R(z*y/2,B,O*y/2):new R(B,z*y/2,O*y/2),H=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[B,z]of H)D(N(0,B,z),N(_,B,z),.09);let F=y*1.1;for(let B=0;B<_-.01;B+=F)for(let z=0;z<4;z++){let[O,Z]=H[z],[se,de]=H[(z+1)%4],we=Math.min(_,B+F);D(N(B,O,Z),N(B,se,de),.05),D(N(B,O,Z),N(we,se,de),.045)}return w(P)},{mergeGeometries:w}=await Promise.resolve().then(()=>(wh(),Mh)),M=[];for(let _ of[1,2,5]){let y=n.towers[_],C=y[5]+2,P=y[0]+y[2]/2+3,D=y[1],N=C+16-n.gy,H=new ge(p(N,1.6,"y"),x);H.position.set(P,n.gy,D),t.add(H);let F=new ai;F.position.set(P,C+16,D),t.add(F);let B=new ge(p(50,1.1,"x"),x);B.position.x=-12,F.add(B);let z=new ge(new gn(2.2,2,2),new Nt({color:14210248,roughness:.5}));z.position.set(1.8,-1.6,0),F.add(z);let O=new ge(new gn(3.6,2.4,2),new Nt({color:7170660,roughness:.9}));O.position.set(-9.5,-1.4,0),F.add(O);let Z=new ge(new Ii(.03,.03,20,4),new Tn({color:1710618}));Z.position.set(26,-10,0),F.add(Z);let se=new ge(new gn(.5,.7,.3),new Nt({color:13214247}));se.position.set(26,-20.3,0),F.add(se);let de=new ge(new xn(.25,8,6),new Tn({color:new xe(6,.4,.2)}));de.position.set(38,.8,0),F.add(de),M.push({jib:F,ph:_,beacon:de})}let v=[];t.traverse(_=>{_.isMesh&&_.material.uniforms&&_.material.uniforms.uBuild&&v.push(_.material)});let S=n.sea,b=r.uFogCol.value.clone(),E=r.uFogK.value,T=t.background.clone();return{update(_,y,C,P){let D=ut.lerp(-26,92,ut.smoothstep(C,.05,.6));v.forEach(H=>H.uniforms.uBuild.value=D),M.forEach(H=>{H.jib.rotation.y=Math.sin(_*.07+H.ph)*1.4,H.beacon.visible=Math.sin(_*3+H.ph)>.2});let N=P.position.y<S;r.uFogCol.value.copy(N?new xe(.02,.12,.2):b),r.uFogK.value=N?.06:E,t.background.copy(N?new xe(.02,.12,.2):T),u.visible=!N,h.visible=!N}}}},i)}Pt();var nn=(i,e,t)=>[i,e,t],q_=[{pos:nn(0,46,50),tgt:nn(-2,22,44),w:.6},{pos:nn(0,39,46),tgt:nn(0,20,6),w:1},{pos:nn(2,18,28),tgt:nn(0,2,-10),w:1},{pos:nn(-1,5,6),tgt:nn(0,2,-30),w:1},{pos:nn(1.5,3.2,-30),tgt:nn(4,1.5,-78),w:1},{pos:nn(0,4,-62),tgt:nn(0,3,-100),w:1},{pos:nn(2,6.5,-88),tgt:nn(0,22,-120),w:1},{pos:nn(0,24,-108),tgt:nn(0,52,-136),w:1},{pos:nn(0,43.5,-122),tgt:nn(0,70,-150),w:1},{pos:nn(0,51.2,-126),tgt:nn(0,55,-170),w:0}],bh=[{at:[.04,.5],kick:"Client \xB7 Innovious",line:"Branding and website for Innovious, a technology company."},{at:[.5,1.01],kick:"Invisible, until it lights up",line:"Like the cables under every ocean, great technology works quietly. We gave it a voice and a face."}],Y_=`
  // caustics: sunlight focused by the waves above into bright, sharp, slowly crawling webs, split slightly into colour
  float caus1(vec2 p, float t){ vec2 q = p; float c = 0.0;
    for (int i = 0; i < 4; i++) { float s = float(i) + 1.0;
      q = p * (0.6 + s * 0.35) + vec2(sin(t * 0.55 + q.y * 1.6 + s), cos(t * 0.47 + q.x * 1.3 - s)) * (0.9 / s);
      c += 1.0 / (1.0 + 24.0 * abs(sin(q.x) * sin(q.y))); }
    return pow(c / 4.0, 1.7) * 2.6; }
  vec3 caustic3(vec2 p, float t){ return vec3(caus1(p + 0.012, t), caus1(p, t), caus1(p - 0.012, t)); }`,K_=`
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
`;function dp(i){return hi({dir:"innovious",parts:["room",{name:"ground",planar:!0}],way:q_,chapters:bh,palette:K_,glsl:Y_,textures:{sand:{id:"sand_02",s:2.5},grav:{id:"coral_gravel",s:2},rock:{id:"rock_wall_08",s:3.5}},sun:[.1,.95,.2],sunCol:[.5,.8,.85],scatter:.7,background:[.03,.2,.28],fog:{col:[.03,.2,.28],k:.012},exposure:1.2,entry:{origin:[0,52,50],yaw:0},exit:{origin:[0,52,-126],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r}=e,a=new xe(.1,.42,.5),o=new xe(.02,.16,.25),l=s==="high"?420:180,c=16,u=new Et(.5,1,1,c);u.translate(0,.5,0);let h=new ui;h.index=u.index,h.attributes.position=u.attributes.position,h.attributes.uv=u.attributes.uv;let d=new Float32Array(l*4);for(let O=0;O<l;O++){let Z=Math.random()<.5?-1:1;d[O*4]=Z*(6+Math.random()*40),d[O*4+1]=60-Math.random()*200,d[O*4+2]=8+Math.random()*18,d[O*4+3]=Math.random()*6.28}h.setAttribute("aK",new Ut(d,4)),h.instanceCount=l;let f=new ge(h,new Te({side:ft,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK},vertexShader:`uniform float uTime; attribute vec4 aK; varying float vY; varying vec3 vW; varying vec2 vUv;
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
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}));f.frustumCulled=!1,t.add(f);let g=new Te({transparent:!0,depthWrite:!1,blending:St,side:ft,uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.4, vUv.x) * (1.0 - smoothstep(0.6, 1.0, vUv.x)) * smoothstep(0.0, 0.9, vUv.y) * 0.085 * (0.55 + 0.45 * sin(uTime * 0.5 + vUv.x * 7.0));
          gl_FragColor = vec4(vec3(0.6, 0.9, 1.0) * a, a); }`});for(let O=0;O<26;O++){let Z=new ge(new Et(3+Math.random()*6,60),g);Z.position.set((Math.random()-.5)*60,26,50-O*7.5),Z.rotation.set(.12,Math.random()*Math.PI,.08),Z.renderOrder=6,t.add(Z)}let x=new ge(new Et(420,420,1,1),new Te({side:ft,depthWrite:!1,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; uniform vec3 uFogCol; varying vec3 vW;
          float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
          float hgt(vec2 p, float t){ return n2(p * 0.35 + vec2(t * 0.11, t * 0.05)) * 1.0 + n2(p * 0.95 - vec2(t * 0.17, -t * 0.09)) * 0.45 + n2(p * 2.4 + vec2(t * 0.3, t * 0.21)) * 0.18 + n2(p * 6.1 - t * 0.45) * 0.06; }
          void main(){ vec3 V = normalize(vW - cameraPosition); float t = uTime;
            // a real water skin: many small waves (fine detail stays sharp however close you rise), seen through Snell's window
            float e = 0.08, h0 = hgt(vW.xz, t); vec2 g = vec2(hgt(vW.xz + vec2(e, 0.0), t) - h0, hgt(vW.xz + vec2(0.0, e), t) - h0) / e;
            vec3 nrm = normalize(vec3(-g.x * 0.35, -1.0, -g.y * 0.35));
            vec3 T = refract(V, nrm, 1.33); float win = dot(T, T) > 0.0 ? 1.0 : 0.0;
            vec3 D = win > 0.5 ? normalize(T) : reflect(V, nrm);
            vec3 sunD = normalize(vec3(0.12, 0.96, -0.25)); float sd = max(dot(D, sunD), 0.0);
            vec3 sky = mix(vec3(0.3, 0.6, 0.72), vec3(0.62, 0.84, 0.94), smoothstep(0.3, 1.0, D.y));
            vec3 below = vec3(0.025, 0.15, 0.19);
            float edge = 1.0 - smoothstep(0.0, 0.18, abs(dot(V, nrm)) - 0.66);
            vec3 c = mix(below, sky, win) + vec3(0.55, 0.85, 0.9) * edge * 0.12 * win + vec3(1.0, 0.96, 0.85) * (pow(sd, 220.0) * 9.0 + pow(sd, 18.0) * 0.5) * win;
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * 0.011)), 1.0); }`}));x.rotation.x=Math.PI/2,x.position.set(0,52,-100),x.renderOrder=2,t.add(x);let m=s==="high"?2500:900,p=new Ye,w=new Float32Array(m*3);for(let O=0;O<m;O++)w[O*3]=(Math.random()-.5)*80,w[O*3+1]=Math.random()*50,w[O*3+2]=60-Math.random()*200;p.setAttribute("position",new Je(w,3));let M=new Jt(p,new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y - uTime * 0.25, 50.0); p.x += sin(uTime * 0.2 + p.z) * 0.6;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(5.0, 60.0, -mv.z)) * 0.5; gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.06 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.8, 0.9, 0.95) * a, a); }"}));M.frustumCulled=!1,t.add(M);let v=s==="high"?260:120,S=new Pi([[0,-.21],[.03,-.18],[.06,-.08],[.065,.02],[.05,.12],[.02,.18],[.012,.2]].map(([O,Z])=>new re(O,Z)),10);S.scale(1,1,.55),S.rotateX(-Math.PI/2);let b=new Ye;b.setAttribute("position",new Ge([0,0,-.19,0,.07,-.29,0,-.07,-.29],3));let{mergeGeometries:E}=await Promise.resolve().then(()=>(wh(),Mh)),T=S.toNonIndexed();T.deleteAttribute("uv"),T.deleteAttribute("normal");let _=E([T,b]);_.deleteAttribute("normal"),_.computeVertexNormals();let y=new Nt({color:13162206,metalness:.85,roughness:.28,side:ft});y.onBeforeCompile=O=>{O.uniforms.uTime=r.uTime,O.vertexShader=`uniform float uTime;
`+O.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += sin(uTime * 14.0 + float(gl_InstanceID) * 1.7 + position.z * 18.0) * 0.025 * (1.0 - smoothstep(-0.3, 0.05, position.z));`),O.fragmentShader=O.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(vec3(0.35, 0.45, 0.55), vec3(1.0), smoothstep(-0.03, 0.04, -vNormal.y));`)};let C=new vn(_,y,v);C.frustumCulled=!1,t.add(C),t.add(new ci(10475775,661536,1.4));let P=Array.from({length:v},()=>({r:4+Math.random()*5,h:(Math.random()-.5)*3,ph:Math.random()*6.28,sp:.25+Math.random()*.15})),D=new $e,N=new Dt,H=new R,F=new R(1,1,1),B=new R(0,1,0),z=ea({U:r,lm:e.groundLm,K:n.lm.ground,rect:n.rect,sun:new R(.1,.95,.2),tile:50,count:s==="high"?11e4:45e3,fade:[18,25],height:.75,wide:1.6,tip:[.2,.38,.12],dry:[.36,.42,.16],root:[.03,.07,.04],wind:.9,seed:21,heightGLSL:"float groundY(vec2 p){ float x = p.x, z = p.y; return 1.6 * sin(x * 0.05 + 0.4) * cos(z * 0.04) + 0.9 * sin((x + z) * 0.09) + 0.35 * sin(x * 0.23 - z * 0.17) - 0.0002 * x * x; }",maskGLSL:"float grassMask(vec2 p){ return smoothstep(0.42, 0.62, gn(p * 0.09) * 0.7 + gn(p * 0.5) * 0.3); }"});return t.add(z.mesh),{update(O,Z,se,de){z.update(de);let we=ut.clamp((de.position.y-5)/40,0,1);r.uFogCol.value.copy(o).lerp(a,we),t.background.copy(r.uFogCol.value);let X=3,ee=-40+Math.sin(O*.05)*20;P.forEach((ae,q)=>{let Y=O*ae.sp+ae.ph;H.set(X+Math.cos(Y)*ae.r,7+ae.h+Math.sin(Y*2)*.6,ee+Math.sin(Y)*ae.r),N.setFromAxisAngle(B,-Y),D.compose(H,N,F),C.setMatrixAt(q,D)}),C.instanceMatrix.needsUpdate=!0},setPx(O){M.material.uniforms.uPx.value=O,z.setPx(1/O)}}}},i)}Pt();var qa=-18,Ts=i=>2+1.6*Math.sin(i*.06);function pp(i,e){let t=(e-qa)/26,n=-2.2+2.2/(1+Math.exp(-t*3))+Math.max(0,e-qa)*.035,s=1.2*Math.max(0,Math.tanh((e-6)/10))*(.6+.4*Math.sin(i*.12+1))+.5*Math.sin(i*.21+e*.13)*Math.max(0,Math.tanh((e-2)/8)),r=Math.min(1,Math.abs(i-Ts(e))/5);return n+s*(.35+.65*r)+.04*Math.sin(i*1.3)*Math.sin(e*.9)}var Qs=i=>Math.max(pp(Ts(i),i),.15)+.42+1.62,Gt=37,fn=Ts(Gt)+.2,es=pp(fn,Gt)+.13,Dn=(i,e,t)=>[i,e,t],Z_=[{pos:Dn(0,-.8,-66),tgt:Dn(0,3,-22),w:.7},{pos:Dn(0,.7,-54),tgt:Dn(1,2.4,-8),w:1},{pos:Dn(1.4,1.5,-32),tgt:Dn(Ts(0),2.6,8),w:1.1},{pos:Dn(Ts(-8),Qs(-8),-8),tgt:Dn(Ts(10),Qs(10)-.3,10),w:1},{pos:Dn(Ts(12)-.4,Qs(12),12),tgt:Dn(Ts(28),Qs(28)-.6,28),w:1.1},{pos:Dn(fn-.55,es+.3,Gt-.95),tgt:Dn(fn,es+.06,Gt),w:1.4},{pos:Dn(fn+3,Qs(Gt)+2,Gt+2.5),tgt:Dn(fn-30,26,Gt+110),w:1.1},{pos:Dn(fn+2,Qs(Gt)+16,Gt+10),tgt:Dn(fn-30,110,Gt+240),w:0}],Sh=[{at:[.04,.5],kick:"Client \xB7 House of Moh",line:"Branding and website for House of Moh: daily creams for women and men."},{at:[.5,1.01],kick:"Soft by nature",line:"Gentle as a twilight shore and made for every day. We designed a brand you want on your skin."}],fp=`
  float hmH(float x, float z){ float t = (z - ${qa.toFixed(1)}) / 26.0;
    float base = -2.2 + 2.2 / (1.0 + exp(-t * 3.0)) + max(0.0, z - ${qa.toFixed(1)}) * 0.035;
    float wx = 2.0 + 1.6 * sin(z * 0.06);
    float dune = 1.2 * max(0.0, tanh((z - 6.0) / 10.0)) * (0.6 + 0.4 * sin(x * 0.12 + 1.0)) + 0.5 * sin(x * 0.21 + z * 0.13) * max(0.0, tanh((z - 2.0) / 8.0));
    return base + dune * (0.35 + 0.65 * min(1.0, abs(x - wx) / 5.0)); }`,$_=`
  if (distance(vW.xz, vec2(${fn.toFixed(3)}, ${Gt.toFixed(1)})) < 1.45 && k > 1.5 && k < 7.0) discard;   // the baked plinth and jar: drawn live, at true scale
  if (k < 1.0) {                                     // sand: fine and dry above, dark and glassy where the waves have been, rippled below
    float wet = 1.0 - smoothstep(0.05, 0.55, vW.y);
    vec3 nd = N_sand(vW, n, 1.2); vec3 dry = D_sand(vW, n), dmp = D_wet(vW, n) * 0.8;
    vec3 a = mix(dry, dmp, wet); nd = normalize(mix(nd, N_wet(vW, n, 1.0), wet));
    float jd = distance(vW.xz, vec2(${fn.toFixed(3)}, ${Gt.toFixed(1)}));                            // the old plinth's baked shadow lifted
    vec3 Ls = mix(max(L, vec3(0.42, 0.4, 0.46)) * (0.7 + 0.3 * smoothstep(0.4, 0.75, jd)), L, smoothstep(1.6, 2.6, jd));
    c = a * Ls * 1.2 * relief(nd, n);
    c += env(reflect(-V, nd), 1.0) * wet * (0.04 + 0.5 * fres) * 0.5;                // the wet sand mirrors the sky
  }
  else if (k < 3.0) {                               // sandstone headlands and the plinth (the old stand-in's baked shadow lifted; a soft contact shadow kept)
    float jd = distance(vW.xz, vec2(${fn.toFixed(3)}, ${Gt.toFixed(1)}));
    vec3 Lp = mix(max(L, vec3(0.5, 0.46, 0.5)) * (0.55 + 0.45 * smoothstep(0.09, 0.2, jd)), L, smoothstep(0.75, 1.1, jd));
    vec3 nd = N_rock(vW, n, 1.3); c = D_rock(vW, n) * Lp * 1.25 * relief(nd, n); }
  else if (k < 4.0) { vec3 nd = N_plank(vW, n, 1.2); c = D_plank(vW, n) * L * 1.2 * relief(nd, n); }     // sun-silvered boardwalk planks
  else if (k < 5.0) c = D_rock(vW * 2.0, n) * vec3(0.8, 0.8, 0.78) * L;                                    // frangipani bark, smooth and grey
  else if (k < 6.0) { c = vec3(0.93, 0.88, 0.8) * max(L, vec3(0.62, 0.6, 0.66)) + env(R, 0.5) * (0.05 + 0.5 * fres) * 0.6; }   // the cream jar, glazed
  else if (k < 7.0) { c = vec3(0.85, 0.62, 0.3) * (L * 0.25 + 0.2) + vec3(0.85, 0.62, 0.3) * env(R, 0.8) * 1.2; }               // gold lid
  else c = vec3(0.04) * L + vec3(0.1) * fres;                                                                 // lantern iron
`;function mp(i){return hi({dir:"houseofmoh",parts:["room",{name:"ground",planar:!0}],way:Z_,chapters:Sh,palette:$_,textures:{sand:{id:"coast_sand_01",s:2.4},wet:{id:"damp_beach_sand",s:2},plank:{id:"weathered_planks",s:1.8},rock:{id:"coast_sand_rocks_02",s:4}},sun:[.2,.15,-1],sunCol:[1,.62,.42],scatter:1.1,closeUps:[[fn,es,Gt,2.6]],sky:{file:"kiara_9_dusk_sky.webp",exposure:1.05,rot:2.429,cut:0},envAt:[fn,es+.4,Gt],background:[.2,.25,.4],fog:{col:[.42,.42,.55],k:.0035},exposure:1.05,entry:{origin:[0,0,-66],yaw:Math.PI},exit:{origin:[fn+2,Qs(Gt)+16,Gt+10],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:a,base:o,unpack:l,groundLm:c}=e,u=s==="high",h=new R(-.3,.42,.86).normalize(),d=new R(.2,.05,-1).normalize(),f=`uniform sampler2D tSky; uniform float uSkyRot;
        vec3 skyCol(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
          return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)); }`,g=e.sky,x=new ge(new Et(4e3,4e3,u?400:240,u?400:240),new Te({transparent:!0,depthWrite:!1,side:ft,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK,tSky:g.material.uniforms.tSky,uSkyRot:g.material.uniforms.uRot},vertexShader:`uniform float uTime; varying vec3 vW; varying float vCrest;
          void main(){ vec3 p = (modelMatrix * vec4(position, 1.0)).xyz;
            float w1 = sin(p.z * 0.35 + uTime * 1.1 + sin(p.x * 0.05) * 1.5), w2 = sin(p.x * 0.21 - p.z * 0.17 + uTime * 0.7), w3 = sin(p.z * 0.9 + p.x * 0.3 + uTime * 1.9);
            float shoal = smoothstep(-40.0, -8.0, p.z);                            // the swell grows as it shoals
            p.y += (w1 * 0.16 + w2 * 0.08 + w3 * 0.03) * (0.6 + shoal * 0.8); vCrest = w1 * 0.5 + 0.5; vW = p;
            gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uFogCol; uniform float uFogK; varying vec3 vW; varying float vCrest; ${fp} ${f}
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
            float dc = length(vW - cameraPosition);
            vec2 sl = waveSlope(vW.xz, uTime) * (0.55 + 0.45 / (1.0 + dc * 0.015))              // long swell calms with distance: no contour stripes
                    + (vec2(wn(vW.xz * 1.3 + uTime * 0.4), wn(vW.xz * 1.3 - uTime * 0.35 + 9.0)) - 0.5) * 0.16
                    + (vec2(wn(vW.xz * 3.7 + uTime * 0.8), wn(vW.xz * 3.7 - uTime * 0.7 + 4.0)) - 0.5) * 0.1 / (1.0 + dc * 0.03)
                    + (vec2(wn(vW.xz * 9.0 - uTime * 1.3), wn(vW.xz * 9.0 + uTime * 1.1 + 2.0)) - 0.5) * 0.06 / (1.0 + dc * 0.08);
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
            vec3 body = mix(shallow, deep, smoothstep(0.3, 7.0, depth)) * (0.92 + 0.16 * smoothstep(0.0, 0.25, sl.y + sl.x * 0.3));   // light through the crests
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
            gl_FragColor = vec4(c, a); }`}));x.rotation.x=-Math.PI/2,x.position.set(0,0,-120),x.renderOrder=4,x.frustumCulled=!1,t.add(x);let m=h.clone(),p={uTime:r.uTime,uSun:{value:m},uFogCol:r.uFogCol,uFogK:r.uFogK},w=new je(...n.rect),M=n.items.filter(Y=>!(Y[0].startsWith("coast_rocks")&&Y[3]<qa+1)),v=await Ui({base:o,unpack:l,loader:a,U:p,groundLm:c,groundK:n.lm.ground,rect:w,tier:s,layout:{items:M}}).catch(()=>null);v&&(t.add(v.group),v.fade.value=1);let S=await new Promise(Y=>a.load(o+"bisikaapi/leaves.webp",ye=>{ye.colorSpace=Ft,ye.anisotropy=4,Y(ye)})),b=(Y,ye,me)=>{let Ee=new Ye,Q=[],he=[],U=[],ve=[],ue=me,_e=()=>(ue=ue*16807%2147483647)/2147483647;for(let J=0;J<Y;J++){let Se=new R(_e()-.5,_e()-.5,_e()-.5).multiplyScalar(1.6),fe=new R(_e()-.5,.2+_e()*.7,_e()-.5).normalize(),L=new R().crossVectors(fe,new R(_e()-.5,_e()-.5,_e()-.5)).normalize(),A=.75+_e()*.5,k=Math.floor(_e()*16),te=k%4/4,pe=1-(Math.floor(k/4)+1)/4,ie=Q.length/3;for(let[Le,Ae]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let Pe=Se.clone().addScaledVector(L,Le*ye*A).addScaledVector(fe,Ae*ye*A);Q.push(Pe.x,Pe.y,Pe.z),he.push(te+(Le+1)/8,pe+(Ae+1)/8),ve.push(Se.length()/1.1)}U.push(ie,ie+1,ie+2,ie,ie+2,ie+3)}return Ee.setAttribute("position",new Ge(Q,3)),Ee.setAttribute("uv",new Ge(he,2)),Ee.setAttribute("aOut",new Ge(ve,1)),Ee.setIndex(U),Ee},E=(Y,ye)=>{let me=new ui;me.index=Y.index;for(let Ee of["position","uv","aOut"])me.attributes[Ee]=Y.attributes[Ee];return me.setAttribute("aC",new Ut(new Float32Array(ye.flatMap(Ee=>[Ee[0],Ee[1],Ee[2],Ee[3]])),4)),me.setAttribute("aT",new Ut(new Float32Array(ye.flatMap((Ee,Q)=>[Ee[4],Q*.6180339%1])),2)),me.instanceCount=ye.length,me},T=new Te({side:ft,uniforms:{...p,tLeaf:{value:S},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:w}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
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
            float d = length(vW - cameraPosition); c = mix(c, uFogCol, 1.0 - exp(-d * uFogK)); gl_FragColor = vec4(c, 1.0); }`}),_=new ge(E(b(u?70:42,.2,5),n.clusters.filter(Y=>Y[4]===0).map(Y=>[Y[0],Y[1]+.15,Y[2],Y[3]*1.7,0])),T);_.frustumCulled=!1,t.add(_);let y=new ge(E(b(u?64:40,.11,13),n.clusters.filter(Y=>Y[4]===1)),T);y.frustumCulled=!1,t.add(y);let C=(Y,ye)=>{let me=[],Ee=[],Q=[];me.push(0,0,0),Ee.push(0,0,0);for(let U=0;U<5;U++)for(let ve=1;ve<=4;ve++)for(let ue=-1;ue<=1;ue++){let _e=U*1.2566+ue*.42*Math.sin(ve/4*Math.PI*.9+.3)+ve/4*.35,J=Y*(ve/4);me.push(Math.cos(_e)*J,ye*(ve/4)**2*Y,Math.sin(_e)*J),Ee.push(ve/4,0,0)}for(let U=0;U<5;U++){let ve=1+U*12;Q.push(0,ve+1,ve),Q.push(0,ve+2,ve+1);for(let ue=0;ue<3;ue++)for(let _e=0;_e<2;_e++){let J=ve+ue*3+_e,Se=J+3;Q.push(J,Se,J+1,J+1,Se,Se+1)}}let he=new Ye;return he.setAttribute("position",new Ge(me,3)),he.setAttribute("aR",new Ge(Ee.filter((U,ve)=>ve%3===0),1)),he.setIndex(Q),he.computeVertexNormals(),he},P=(Y,ye)=>new Te({side:ft,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK,uIn:{value:new xe(...Y)},uOut:{value:new xe(...ye)},uMoon:{value:h}},vertexShader:`uniform float uTime; attribute float aR; varying float vR; varying vec3 vN, vW; void main(){ vR = aR; vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vec3 o = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;               // each flower nods in the sea breeze, the petals flutter a little
          w.xyz += vec3(sin(uTime * 1.7 + o.x * 0.8 + o.z * 0.6), 0.0, cos(uTime * 1.4 + o.z * 0.7)) * 0.03 + vec3(0.0, sin(uTime * 6.0 + o.x * 9.0 + aR * 5.0) * 0.006 * aR, 0.0); vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uIn, uOut, uFogCol, uMoon; uniform float uFogK; varying float vR; varying vec3 vN, vW;
          void main(){ vec3 n = normalize(vN); vec3 alb = mix(uIn, uOut, smoothstep(0.15, 0.6, vR));
            vec3 c = alb * (0.45 + 0.55 * abs(dot(n, uMoon))) * vec3(0.75, 0.75, 0.9) + alb * 0.12;
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}),D=new $e,N=new Dt,H=new cn,F=new R,B=new R;for(let[Y,ye,me,Ee,Q]of[[0,.075,.5,[1,.82,.25],[.98,.95,.88]],[1,.11,.7,[.35,.02,.05],[.85,.08,.1]]]){let he=n.flowers.filter(ve=>ve[3]===Y),U=new vn(C(ye,me),P(Ee,Q),he.length);U.frustumCulled=!1,he.forEach((ve,ue)=>{H.set((Math.random()-.5)*1.6,Math.random()*6.28,(Math.random()-.5)*1.6),N.setFromEuler(H),D.compose(B.set(ve[0],ve[1],ve[2]),N,F.setScalar(.8+Math.random()*.4)),U.setMatrixAt(ue,D)}),t.add(U)}let z=(()=>{let Y=document.createElement("canvas");Y.width=Y.height=128;let ye=Y.getContext("2d"),me=ye.createRadialGradient(64,64,0,64,64,64);return me.addColorStop(0,"rgba(255,210,150,1)"),me.addColorStop(.2,"rgba(255,170,90,0.5)"),me.addColorStop(1,"rgba(255,120,40,0)"),ye.fillStyle=me,ye.fillRect(0,0,128,128),new Mi(Y)})(),O=[];for(let[Y,ye,me]of n.lanterns){let Ee=new ge(new gn(.22,.34,.22),new Tn({color:new xe(3.2,1.9,.9)}));Ee.position.set(Y,ye,me),t.add(Ee);let Q=new Yo(new Pa({map:z,color:16777215,transparent:!0,depthWrite:!1,blending:St,opacity:.8}));Q.position.set(Y,ye,me),Q.scale.setScalar(1.6),Q.renderOrder=6,t.add(Q),O.push({halo:Q,glass:Ee,ph:Math.random()*6.28})}let Z=u?600:260,se=new Ye,de=new Float32Array(Z*3);for(let Y=0;Y<Z;Y++)de[Y*3]=(Math.random()-.5)*50,de[Y*3+1]=Math.random()*6,de[Y*3+2]=Math.random()*60-10;se.setAttribute("position",new Je(de,3));let we=new Jt(se,new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA, vT; void main(){ vec3 p = position; float t = uTime * 0.25 + p.x * 0.1;
          p.x = mod(p.x + uTime * 0.6 + 25.0, 50.0) - 25.0; p.y = 0.4 + mod(p.y - uTime * 0.12, 6.0) + sin(t * 3.0) * 0.2; p.z += sin(t * 2.0 + p.y) * 0.6; vT = fract(position.z * 7.31);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 1.0 - smoothstep(18.0, 40.0, -mv.z); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.07 * uPx / -mv.z, 1.5, 9.0); }`,fragmentShader:`varying float vA, vT; void main(){ vec2 d = gl_PointCoord - 0.5; d.x *= 1.8; float a = (1.0 - smoothstep(0.15, 0.25, dot(d, d))) * vA * 0.85;
          gl_FragColor = vec4(mix(vec3(0.98, 0.93, 0.85), vec3(0.95, 0.55, 0.6), step(0.7, vT)), a); }`}));we.frustumCulled=!1,we.renderOrder=7,t.add(we),t.add(new ci(10465496,2760728,.8));{let Y=(fe,L=72)=>new Pi(fe.map(([A,k])=>new re(A,k)),L),ye=new Nt({color:15920354,roughness:.16,metalness:0,envMap:e.envTex,envMapIntensity:.9}),me=new Nt({color:14267498,roughness:.32,metalness:1,envMap:e.envTex,envMapIntensity:1.2}),Ee=new ge(Y([[0,0],[.085,0],[.093,.004],[.098,.02],[.1,.075],[.096,.086],[.088,.09],[.088,.096],[0,.096]]),ye),Q=new ge(Y([[0,.094],[.094,.094],[.1,.098],[.102,.122],[.098,.13],[.06,.133],[0,.133]]),me);for(let fe of[Ee,Q])fe.position.set(fn,es+.001,Gt),t.add(fe);let he=new gn(.62,.16,.44,8,2,6),U=he.attributes.position;for(let fe=0;fe<U.count;fe++){let L=U.getX(fe),A=U.getY(fe),k=U.getZ(fe),te=1+.03*Math.sin(L*23+k*17);U.setX(fe,L*te),U.setZ(fe,k*te),A>0&&U.setY(fe,A+.006*Math.sin(L*40)*Math.cos(k*37))}he.computeVertexNormals();let ve=e.texU.tD_sand.value.clone(),ue=e.texU.tN_sand.value.clone();for(let fe of[ve,ue])fe.repeat.set(.7,.5),fe.needsUpdate=!0;let _e=new ge(he,new Nt({map:ve,normalMap:ue,normalScale:new re(1.6,1.6),roughness:.92,color:15786700}));_e.position.set(fn,es-.08,Gt),_e.rotation.y=.2,t.add(_e);let J=new Vn(16757898,1.4);J.position.set(fn+4,es+3,Gt-12),J.target.position.set(fn,es,Gt),t.add(J,J.target);let Se=new qr(16754784,2.2,6,2);Se.position.set(fn-1.3,es+.6,Gt-1.6),t.add(Se)}let X=ea({U:r,lm:c,K:n.lm.ground,rect:n.rect,sun:new R(.2,.15,-1),tile:60,count:u?12e4:5e4,fade:[22,30],height:.85,wide:1.1,tip:[.42,.42,.2],dry:[.6,.52,.32],root:[.1,.1,.05],wind:1.5,seed:11,heightGLSL:`${fp} float groundY(vec2 p){ return hmH(p.x, p.y); }`,maskGLSL:`float grassMask(vec2 p){ float wx = 2.0 + 1.6 * sin(p.y * 0.06);
          return smoothstep(0.45, 0.9, hmH(p.x, p.y)) * smoothstep(1.9, 2.8, abs(p.x - wx)) * smoothstep(2.2, 3.2, distance(p, vec2(${fn.toFixed(2)}, ${Gt.toFixed(1)})))
            * smoothstep(0.3, 0.62, gn(p * 0.16) * 0.7 + gn(p * 0.9) * 0.3); }`});t.add(X.mesh);let ee=r.uFogCol.value.clone(),ae=r.uFogK.value,q=t.background.clone();return{update(Y,ye,me,Ee){let Q=Ee.position.y<.05*Math.sin(Y);r.uFogCol.value.copy(Q?new xe(.05,.27,.33):ee),r.uFogK.value=Q?.06:ae,t.background.copy(Q?new xe(.05,.27,.33):q),g.visible=!Q,X.update(Ee);for(let he of O){let U=.85+.1*Math.sin(Y*9+he.ph)*Math.sin(Y*5.3+he.ph*2);he.halo.material.opacity=.55*U,he.halo.scale.setScalar(1.5+.15*U)}},setPx(Y){we.material.uniforms.uPx.value=Y,X.setPx(1/Y)}}}},i)}Pt();var Fi=i=>Math.sin(i*.02)*10,Th=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},wn=-130;function Tl(i,e){let t=(1-Th(-140,70,e))*78,n=Math.abs(i-Fi(e)),s=-Math.pow(n*.18,1.7)*3,r=Math.sin(i*.11+e*.07)*1.6+Math.sin(i*.31-e*.23)*.6+Math.abs(Math.sin(i*.05+e*.03))*4,a=Math.min(1,n/4),o=1-Th(6,16,Math.hypot(i-Fi(wn),e-wn)),l=(1-Th(-140,70,wn))*78+2;return(t+s+r*(.35+.65*a))*(1-o)+l*o}var ts=(i,e=0,t=1.75)=>[Fi(i)+e,Tl(Fi(i)+e,i)+t,i],Gn=Fi(wn),Ni=Tl(Gn,wn),J_=[{pos:[Fi(84),Tl(Fi(84),84)+22,86],tgt:ts(40,0,0),w:.8},{pos:[Fi(72)+4,Tl(Fi(72)+4,72)+8,74],tgt:ts(30,0,2),w:1.1},{pos:ts(46,1.2),tgt:ts(20,0,2.6),w:1},{pos:ts(4,-1),tgt:ts(-24,0,3.4),w:1},{pos:ts(-46,1),tgt:ts(-80,0,4),w:1},{pos:ts(-92,-.8),tgt:[Gn,Ni+2.4,wn],w:1.1},{pos:[Gn+3.5,Ni+2.4,wn+13],tgt:[Gn-.4,Ni+1.6,wn],w:1.3},{pos:[Gn+7,Ni+3.2,wn+9],tgt:[Gn-30,Ni+140,wn-170],w:0}],Ah=[{at:[.04,1.01],kick:"Our platform \xB7 Cosmos",line:"Cosmos: our real estate platform, designed in-house from the first sketch."}],VM=new R(-.4,.5,-1).normalize(),j_=`uniform sampler2D tSky; uniform float uSkyRot;
  vec3 nightSky(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
    return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * 1.2; }`,Q_=`
  
  if (k < 1.0 && abs(vW.x - ${Gn.toFixed(2)}) < 8.9 && abs(vW.z - ${wn.toFixed(1)}) < 6.4 && vW.y > ${(Ni+.1).toFixed(2)}) discard;   // no drift inside the pavilion
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
`;function gp(i){return hi({dir:"cosmos",parts:["room",{name:"ground",planar:!0}],way:J_,chapters:Ah,palette:Q_,textures:{snow:{id:"snow_02",s:3},rock:{id:"rock_face_03",s:4},conc:{id:"brushed_concrete",s:2},oak:{id:"oak_wood_planks",s:1.6}},sun:[-.4,.5,-1],sunCol:[.55,.65,.95],scatter:.35,sky:{file:"rogland_moonlit_night_sky.webp",exposure:1,rot:2.573,cut:.4,haze:[.16,.22,.36]},background:[.03,.05,.1],fog:{col:[.16,.22,.36],k:.0026},exposure:1.25,entry:{origin:[Fi(84),0,86],yaw:0},exit:{origin:[Gn+7,Ni+3.2,wn+9],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,base:a,unpack:o,loader:l}=e,c=s==="high",u=e.sky,h={tSky:u.material.uniforms.tSky,uSkyRot:u.material.uniforms.uRot},d=await Ui({base:a,unpack:o,loader:l,U:{uTime:r.uTime,uSun:{value:new R(-.4,.5,-1).normalize()},uFogCol:r.uFogCol,uFogK:r.uFogK},groundLm:e.groundLm,groundK:n.lm.ground,rect:new je(...n.rect),tier:s,layout:{items:(n.items||[]).map(T=>T[0]==="rock_07"?["rock_09",T[1],T[2]-.15,T[3],T[4],T[5]*2.2]:T)}}).catch(()=>null);d&&(t.add(d.group),d.fade.value=1);{let y=new Ye,C=[],P=[],D=(z,O)=>{let Z=Math.sin(z*127.1+O*311.7)*43758.5453;return Z-Math.floor(Z)},N=(z,O)=>{let Z=Math.floor(z),se=Math.floor(O),de=z-Z,we=O-se,X=de*de*(3-2*de),ee=we*we*(3-2*we);return(D(Z,se)*(1-X)+D(Z+1,se)*X)*(1-ee)+(D(Z,se+1)*(1-X)+D(Z+1,se+1)*X)*ee},H=(z,O)=>{let Z=0,se=1,de=1,we=1;for(let X=0;X<6;X++){let ee=1-Math.abs(N(z*de,O*de)*2-1);ee=ee*ee*we,Z+=ee*se,we=Math.min(1,ee*1.8),se*=.5,de*=2.03}return Z};for(let z=0;z<220;z++)for(let O=0;O<=360;O++){let Z=z/219,se=650+Z*1300,de=O/360*Math.PI*2,we=Math.cos(de)*se,X=-40+Math.sin(de)*se,ee=Math.pow(N(Math.cos(de)*2.2+5,Math.sin(de)*2.2+5),1.4),ae=H(we/520,X/520)*230*(.45+.9*ee)*Math.sin(Math.min(1,Z*1.6)*Math.PI*.5)*(1-.35*Z)-20;C.push(we,ae,X)}for(let z=0;z<219;z++)for(let O=0;O<360;O++){let Z=z*361+O,se=Z+360+1;P.push(Z,se,Z+1,Z+1,se,se+1)}y.setAttribute("position",new Ge(C,3)),y.setIndex(P),y.computeVertexNormals();let F=z=>e.texU[z].value,B=new ge(y,new Te({uniforms:{tS:{value:F("tD_snow")},tR:{value:F("tD_rock")},uFogCol:r.uFogCol,uMoon:{value:new R(-.4,.5,-1).normalize()}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tS, tR; uniform vec3 uFogCol, uMoon; varying vec3 vW, vN;
            vec3 tri(sampler2D t, vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0)); return texture2D(t, p.zy * s).rgb * w.x + texture2D(t, p.xz * s).rgb * w.y + texture2D(t, p.xy * s).rgb * w.z; }
            void main(){ vec3 Nf = normalize(cross(dFdx(vW), dFdy(vW))); if (Nf.y < 0.0) Nf = -Nf; vec3 n = normalize(mix(normalize(vN), Nf, 0.6));
              vec3 rock = tri(tR, vW, n, 1.0 / 40.0) * vec3(0.55, 0.6, 0.72), snowT = tri(tS, vW, n, 1.0 / 25.0);
              float slope = 1.0 - n.y, hold = 1.0 - smoothstep(0.38, 0.62, slope + (dot(rock, vec3(0.333)) - 0.35) * 0.4);   // snow lies where it can
              vec3 alb = mix(rock * 0.5, snowT * vec3(0.92, 0.96, 1.05), hold);
              float moon = max(dot(n, uMoon), 0.0), sky = 0.5 + 0.5 * n.y;
              vec3 c = alb * (vec3(0.55, 0.62, 0.85) * moon * 0.9 + vec3(0.08, 0.1, 0.16) * sky);
              float d = length(vW - cameraPosition); c = mix(c, uFogCol * 1.25, 1.0 - exp(-d * 0.0008));            // night haze: each range fainter than the one before
              gl_FragColor = vec4(c, 1.0); }`}));B.renderOrder=1,B.frustumCulled=!1,t.add(B)}let f=new ge(new Et(3e3,3e3,1,1),new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; varying vec3 vW;
          float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5), b = fract(sin(dot(i + vec2(1, 0), vec2(127.1, 311.7))) * 43758.5),
            c = fract(sin(dot(i + vec2(0, 1), vec2(127.1, 311.7))) * 43758.5), d = fract(sin(dot(i + vec2(1, 1), vec2(127.1, 311.7))) * 43758.5); return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
          float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
          void main(){ vec2 p = vW.xz * 0.006 + vec2(uTime * 0.004, uTime * 0.002); float f = fbm(p), g = fbm(p * 2.5 + 3.0);
            vec3 c = mix(vec3(0.12, 0.16, 0.27), vec3(0.62, 0.68, 0.82), smoothstep(0.35, 0.8, f) * (0.7 + 0.3 * g));
            float d = length(vW.xz - cameraPosition.xz); float a = smoothstep(0.25, 0.55, f) * (1.0 - smoothstep(1200.0, 1500.0, d));
            gl_FragColor = vec4(c, a * 0.95); }`}));f.rotation.x=-Math.PI/2,f.position.y=-4,f.renderOrder=3,f.frustumCulled=!1,t.add(f);let g=c?6e3:2500,x=new Ye,m=new Float32Array(g*3);for(let T=0;T<g;T++)m[T*3]=Math.random()*60,m[T*3+1]=Math.random()*30,m[T*3+2]=Math.random()*60;x.setAttribute("position",new Je(m,3));let p=new Jt(x,new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uCam:{value:new R},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
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
          gl_FragColor = vec4(vec3(0.9, 0.94, 1.0) * (1.0 + vGlint * 1.5), a); }`}));p.frustumCulled=!1,p.renderOrder=8,t.add(p);let w=c?3500:1400,M=new Ye,v=new Float32Array(w*3);for(let T=0;T<w;T++)v[T*3]=Math.random()*40,v[T*3+1]=Math.random(),v[T*3+2]=Math.random()*40;M.setAttribute("position",new Je(v,3));let S=new Jt(M,new Te({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uCam:{value:new R},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
          void main(){ vec3 p = position; float sp = 4.0 + fract(p.z * 3.7) * 3.0; p.x += uTime * sp; p.z += sin(uTime * 1.3 + p.x * 0.4) * 0.6;
            p.xz = mod(p.xz - uCam.xz + 20.0, 40.0) + uCam.xz - 20.0; p.y = uCam.y - 1.7 + p.y * p.y * 1.1 + sin(uTime * 2.0 + p.x) * 0.06;
            vec4 mv = viewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(6.0, 18.0, -mv.z)) * 0.5 * (0.5 + 0.5 * sin(p.x * 0.3 + uTime));
            gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.05 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.9, 0.94, 1.0), a); }"}));S.frustumCulled=!1,S.renderOrder=8,t.add(S);let b=new ge(new xn(14,24,12),new Te({transparent:!0,depthWrite:!1,blending:St,side:Bt,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW; void main(){ vec3 V = normalize(vW - cameraPosition); vec3 toC = uC - cameraPosition; float t = dot(toC, V); float d = length(toC - V * t);
          float a = exp(-d * d / 30.0) * 0.12; gl_FragColor = vec4(vec3(1.0, 0.7, 0.42) * a, a); }`,uniforms:{uC:{value:new R(Gn,Ni+2.5,wn)}}}));b.position.set(Gn,Ni+2.5,wn),b.renderOrder=9,t.add(b);let E=new Te({transparent:!0,depthWrite:!1,side:ft,uniforms:h,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; ${j_} void main(){ vec3 V = normalize(cameraPosition - vW); vec3 n = normalize(vN); if (dot(n, V) < 0.0) n = -n;
          float fr = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0); vec3 R = reflect(-V, n);
          vec3 c = nightSky(normalize(R)) * 1.4 * fr + vec3(1.0, 0.7, 0.45) * 0.03; gl_FragColor = vec4(c, 0.1 + 0.75 * fr); }`});for(let[T,_,y,C]of[[Gn,wn+5.1,15.2,0],[Gn,wn-5.1,15.2,0],[Gn-7.6,wn,10.2,Math.PI/2],[Gn+7.6,wn,10.2,Math.PI/2]]){let P=new ge(new Et(y,4),E);P.position.set(T,Ni+2.6,_),P.rotation.y=C,P.renderOrder=10,t.add(P)}return{update(T,_,y,C){p.material.uniforms.uCam.value.copy(C.position),S.material.uniforms.uCam.value.copy(C.position)},setPx(T){p.material.uniforms.uPx.value=T,S.material.uniforms.uPx.value=T}}}},i)}Pt();var Xn=(i,e,t)=>[i,e,t],e1=[{pos:Xn(0,-10,60),tgt:Xn(0,40,-60),w:1},{pos:Xn(0,2,-20),tgt:Xn(0,4,-90),w:1.1},{pos:Xn(-8,6,-170),tgt:Xn(0,30,-360),w:1.2},{pos:Xn(4,2,-370),tgt:Xn(0,0,-440),w:1.2},{pos:Xn(0,3,-485),tgt:Xn(0,4,-560),w:1},{pos:Xn(0,6,-520),tgt:Xn(0,4,-580),w:1.1},{pos:Xn(0,170,-400),tgt:Xn(0,150,-900),w:0}],Rh=[{at:[0,.36],kick:"Client \xB7 Perseid Pictures",line:"Branding and website for Perseid Pictures: a studio that keeps its camera pointed at the stars."},{at:[.36,.74],kick:"And many more",line:"20+ clients across India, the USA and Australia. A small team, close to every brand we build."},{at:[.74,1.01],kick:"Nomadiic Horse Designs \xB7 Bangalore",line:"Branding and websites, built with obsessive detail. Let's build yours.",contact:!0}];async function vp({tier:i}){let e=i==="high",t=new An;t.background=new xe(0,0,.004);let n={uTime:{value:0}},s=new ge(new xn(4e3,64,32),new Te({side:Bt,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`varying vec3 vD;
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
        gl_FragColor = vec4(c, 1.0); }`}));s.renderOrder=-2,s.frustumCulled=!1,t.add(s);let r=5200,a=new R(0,-r-140,-380),o=new ge(new xn(r,160,80),new Te({vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW, vN;
      float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hh(i), hh(i + vec3(1, 0, 0)), f.x), mix(hh(i + vec3(0, 1, 0)), hh(i + vec3(1, 1, 0)), f.x), f.y), mix(mix(hh(i + vec3(0, 0, 1)), hh(i + vec3(1, 0, 1)), f.x), mix(hh(i + vec3(0, 1, 1)), hh(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW); vec3 q = (vW - uC) / 5200.0;
        float land = smoothstep(0.5, 0.56, n3(q * 6.0) * 0.6 + n3(q * 14.0) * 0.4);
        float metro = smoothstep(0.5, 0.72, n3(q * 40.0)) * land;
        float city = metro * (pow(n3(q * 1500.0), 7.0) * 2.2 + pow(n3(q * 420.0), 4.0) * 0.45);
        vec3 c = mix(vec3(0.004, 0.008, 0.02), vec3(0.012, 0.012, 0.01), land) + vec3(1.0, 0.72, 0.38) * city;
        float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0); c += vec3(0.1, 0.25, 0.6) * rim * 0.6;
        gl_FragColor = vec4(c, 1.0); }`,uniforms:{uC:{value:a}}}));o.position.copy(a),t.add(o);let l=new ge(new xn(r*1.018,160,80),new Te({transparent:!0,depthWrite:!1,blending:St,side:Bt,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; void main(){ vec3 V = normalize(cameraPosition - vW); float f = pow(max(dot(vN, V), 0.0), 6.0);
      float side = smoothstep(-0.6, 0.9, normalize(vW).x * 0.0 + V.x * -0.6 + 0.4);
      vec3 c = mix(vec3(0.15, 0.4, 1.0), vec3(1.0, 0.55, 0.25), smoothstep(0.6, 1.0, f) * side) * f * 1.6; gl_FragColor = vec4(c, f); }`}));l.position.copy(a),l.renderOrder=2,t.add(l);let c=e?40:22,u=new Ye,h=new Float32Array(c*6),d=new Float32Array(c*6);u.setAttribute("position",new Je(h,3)),u.setAttribute("color",new Je(d,3));let f=new kr(u,new Or({vertexColors:!0,transparent:!0,blending:St,depthWrite:!1}));f.frustumCulled=!1,t.add(f);let g=new R(30,260,-520),x=Array.from({length:c},()=>({t0:Math.random()*6,dur:.6+Math.random()*.9,dir:new R,start:new R})),m=(y,C)=>{y.t0=C+Math.random()*3.5,y.dur=.5+Math.random()*.9,y.dir.set(Math.random()-.5,Math.random()-.75,Math.random()-.3).normalize(),y.start.copy(g).addScaledVector(new R(Math.random()-.5,Math.random()-.5,Math.random()-.5),160).addScaledVector(y.dir,40)};x.forEach(y=>m(y,0));let p=Array.from({length:16},(y,C)=>{let P=C/16*Math.PI*2;return new R(Math.cos(P+Math.sin(C)*.4)*(22+C%3*6),Math.sin(P*2)*12+C%4*3,-440+Math.sin(C*1.7)*18)}),w=(()=>{let y=document.createElement("canvas");y.width=y.height=64;let C=y.getContext("2d"),P=C.createRadialGradient(32,32,0,32,32,32);return P.addColorStop(0,"rgba(255,255,255,1)"),P.addColorStop(.2,"rgba(255,228,190,0.85)"),P.addColorStop(1,"rgba(255,170,90,0)"),C.fillStyle=P,C.fillRect(0,0,64,64),new Mi(y)})(),M=new Jt(new Ye().setFromPoints(p),new Da({size:4.5,map:w,transparent:!0,blending:St,depthWrite:!1,color:16769208}));t.add(M);let v=[0,3,6,9,12,15,2,5,8,11,14,1,4,7,10,13,0],S=new Ye().setFromPoints(v.map(y=>p[y])),b=new La(S,new Or({color:15975034,transparent:!0,opacity:.55,blending:St}));t.add(b);let E=bs(e1),T=new R,_=new R;return{key:"perseid",scene:t,chapters:Rh,exposure:1,entry:{origin:[0,0,60],yaw:0},exit:{origin:[0,4,-528],yaw:0},pose(y,C){E.sample(y,T,_),C.position.copy(T),C.lookAt(_)},update(y,C,P){n.uTime.value=y,x.forEach((N,H)=>{let F=(y-N.t0)/N.dur;F>1&&(m(N,y),F=-1);let B=F>=0?Math.sin(Math.PI*F):0,z=N.start.clone().addScaledVector(N.dir,Math.max(F,0)*120),O=z.clone().addScaledVector(N.dir,-18-20*Math.max(F,0));h.set([z.x,z.y,z.z,O.x,O.y,O.z],H*6),d.set([B,B*.95,B*.85,0,0,0],H*6)}),u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0;let D=ut.smoothstep(P,.42,.66);S.setDrawRange(0,Math.max(2,Math.floor(D*v.length))),b.material.opacity=.55*D},setPx(){},dispose(){t.traverse(y=>{y.geometry?.dispose?.();for(let C of[].concat(y.material||[]))C.dispose()})}}}Pt();var t1=`
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
`;function xp(i,{count:e,width:t=20,font:n="500 150px Satoshi, sans-serif",lineGap:s=1.05,letterSpacing:r=0}={}){let a=document.createElement("canvas"),o=a.getContext("2d");o.font=n;let l=i.map(p=>o.measureText(p)),c=parseFloat(/(\d+)px/.exec(n)[1]),u=Math.ceil(Math.max(...l.map(p=>p.width))+c*.4+r*30),h=Math.ceil(c*s*i.length+c*.4);a.width=u,a.height=h,o.font=n,o.fillStyle="#fff",o.textAlign="center",o.textBaseline="middle",r&&(o.letterSpacing=r+"px"),i.forEach((p,w)=>o.fillText(p,u/2,c*.2+c*s*(w+.5)));let d=o.getImageData(0,0,u,h).data,f=[];for(let p=0;p<h;p+=1)for(let w=0;w<u;w+=1)d[(p*u+w)*4+3]>128&&f.push(w,p);let g=t/u,x=new Float32Array(e*3),m=f.length/2;for(let p=0;p<e;p++){let w=Math.floor(Math.random()*m)*2;x[p*3]=(f[w]+Math.random()-u/2)*g,x[p*3+1]=(h/2-f[w+1]-Math.random())*g,x[p*3+2]=(Math.random()-.5)*g*6}return x}var Al=class extends Jt{constructor({count:e=2e4,size:t=9,colorA:n="#ffd2a1",colorB:s="#f59a4b",colorC:r="#ffffff",spread:a=14,additive:o=!0}={}){let l=new Ye,c=new Float32Array(e*4);for(let d=0;d<c.length;d++)c[d]=Math.random();let u=new Float32Array(e*3);l.setAttribute("position",new Je(u.slice(),3)),l.setAttribute("aA",new Je(u.slice(),3)),l.setAttribute("aB",new Je(u.slice(),3)),l.setAttribute("aSeed",new Je(c,4)),l.boundingSphere=new Hn(new R,1e5);let h=new Te({transparent:!0,depthWrite:!1,blending:o?St:ps,uniforms:{uTime:{value:0},uMorph:{value:0},uAssemble:{value:0},uDance:{value:1},uSpread:{value:a},uSize:{value:t},uPR:{value:Math.min(devicePixelRatio,2)},uOpacity:{value:1},uWind:{value:new R(0,0,0)},cA:{value:new xe(n)},cB:{value:new xe(s)},cC:{value:new xe(r)}},vertexShader:`${t1}
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
        }`});super(l,h),this.count=e,this.frustumCulled=!1,this.slot=0}setShape(e,t="A"){let n=this.geometry.getAttribute(t==="A"?"aA":"aB");n.array.set(e.subarray(0,n.array.length)),n.needsUpdate=!0}morphTo(e){let t=this.slot===0?"B":"A";return this.setShape(e,t),this.slot=this.slot===0?1:0,this.slot}get u(){return this.material.uniforms}};var Xt=[{key:"mithraki",share:9,build:lp,chapters:vh},{key:"revisetax",share:5,build:cp,chapters:xh,hud:{lines:["Revise Tax"],at:[.02,.3]}},{key:"bisikaapi",share:8,build:up,chapters:yh,hud:{lines:["Bisi Kaapi"],at:[.4,.8]}},{key:"glavida",share:6,build:hp,chapters:Eh,hud:{lines:["Glavida"],at:[.02,.3]}},{key:"innovious",share:5,build:dp,chapters:bh,hud:{lines:["Innovious"],at:[.12,.5]}},{key:"houseofmoh",share:5,build:mp,chapters:Sh,hud:{lines:["House of Moh"],at:[.08,.5]}},{key:"cosmos",share:5,build:gp,chapters:Ah,hud:{lines:["Cosmos"],at:[.08,.45]},veil:[.8,.84,.92]},{key:"perseid",share:7,build:vp,chapters:Rh,veil:[.015,.04,.09],hud:[{lines:["Perseid Pictures"],at:[.02,.34]},{lines:["20+ clients"],at:[.42,.72]},{lines:["Let's build yours"],at:[.78,1.5]}]}],Mp=20,wp=Mp+Xt.reduce((i,e)=>i+e.share,0),ns=Mp/wp,En=[];{let i=ns;for(let e of Xt){let t=i+e.share/wp;En.push([i,t]),i=t}}var n1={origin:[0,5.5,-53],yaw:0},Ch=new URL(".",import.meta.url).href,Ph=new URL(import.meta.url).searchParams.get("v"),Ep=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches||typeof innerWidth<"u"&&Math.min(innerWidth,innerHeight)<600,i1=/(_lm|_lm_s|_sky|_diff|_nor|leaves|leaves_nor|mtn_c|mtn_c_s|marble|meadow)\.webp(\?|$)/,s1=i=>Ep&&typeof i=="string"&&i1.test(i)&&!/\.m\.webp/.test(i)?i.replace(/\.webp(\?|$)/,".m.webp$1"):i,na=i=>{let e=s1(i);return Ph&&typeof e=="string"&&e.startsWith(Ch)&&!/[?&]v=/.test(e)?e+(e.includes("?")?"&":"?")+"v="+Ph:e},yp="nrt-"+(Ph||"dev"),is=null,r1=(async()=>{try{if(!globalThis.caches)return null;for(let i of await caches.keys())i.startsWith("nrt-")&&i!==yp&&await caches.delete(i);is=await caches.open(yp)}catch{is=null}return is})(),bp=i=>{try{return new URL(i,location.href).href}catch{return i}};if(!globalThis.__nrtFetch){let i=globalThis.fetch.bind(globalThis);globalThis.__nrtFetch=!0,globalThis.__nrtF0=i,globalThis.fetch=async(e,t)=>{let n=typeof e=="string"?na(e):e;if(typeof n=="string"&&is&&!(t&&t.cache==="no-store"))try{let s=await is.match(bp(n));if(s)return s}catch{}return i(n,t)},ah.setURLModifier(na)}async function a1(i,e=3){for(let t=0;;t++)try{let n=await fetch(i);if(!n.ok)throw new Error(n.status+" "+i);return n}catch(n){if(t>=e-1)throw n;await new Promise(s=>setTimeout(s,400*(t+1)))}}async function ta(i){let e=await a1(i),t=await new Response(e.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),n=new DataView(t),s=n.getUint32(0,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,s))),a=4+s,{nv:o,ni:l,min:c,max:u}=r,h=new Uint16Array(t.slice(a,a+o*6));a+=o*6;let d=new Float32Array(o*3);for(let x=0;x<o*3;x++){let m=x%3;d[x]=c[m]+h[x]/65535*(u[m]-c[m])}let f=new Uint32Array(t.slice(a,a+l*4));a+=l*4;let g=new Ye;g.setAttribute("position",new Je(d,3)),g.setIndex(new Je(f,1));for(let[x,m,p]of r.extra)if(m==="unorm16"){let w=new Uint16Array(t.slice(a,a+o*p*2));a+=o*p*2,g.setAttribute(x,new Je(w,p,!0))}else if(m==="f32"){let w=new Float32Array(t.slice(a,a+o*p*4));a+=o*p*4,g.setAttribute(x,new Je(w,p))}else{let w=new Uint8Array(t.slice(a,a+o*p));a+=o*p,a+=(4-a%4)%4,g.setAttribute(x,new Je(new Float32Array(w),p))}return g}function fi(i,e,{srgb:t=!1,repeat:n=!1,flip:s=!0}={}){return new Promise((r,a)=>i.load(e,o=>{o.colorSpace=t?Ft:on,o.flipY=s,o.anisotropy=8,n&&(o.wrapS=o.wrapT=ks);let l=/_lm|mtn_c|sky\./.test(e);o.generateMipmaps=!l,o.minFilter=l?$t:Qn,r(o)},void 0,a))}function _p(i){return new Promise((e,t)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=na(i)})}var Rl=`
  vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
  vec3 srgb2lin(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }`;async function yw(i,e={}){let t=e.base||Ch+"assets/",n=e.intro==="storm",s={uNight:{value:0},uFront:{value:1e4},uGlowK:{value:0},uStorm:{value:0}},r=0,a=0,o=n?$f():null,l=n?Kf():null,c=n,u=n?1e9:0,h=n?Zf(i,l,t,{onDone:()=>{c=!1,u=Ul.elapsedTime-.3,Ce=Math.max(Ce,.016)}}):null,d=e.onProgress||(()=>{}),f=0,g=n?0:1,x=!1,m=!n,p=()=>{h&&(h.setProgress(Math.min(.995,f*.3+g*.7)),x&&m&&h.ready())},w=(K,ce)=>{d(K,ce),f=K,p()};n&&(async()=>{let K=globalThis.__nrtF0||fetch;try{await r1;let ce=await(await K(na(t+"manifest.json"),{cache:"no-store"})).json(),oe=["","storm","mithraki","revisetax","bisikaapi","plants","glavida","innovious","houseofmoh","cosmos","tex","book"],Be=Ot=>Ot.includes("/")?Ot.split("/")[0]:"",ke=new Set(ce.files.map(Ot=>Ot[0]).filter(Ot=>Ot.endsWith(".m.webp"))),Ve=ce.files.filter(([Ot])=>Ep?!ke.has(Ot.replace(/\.webp$/,".m.webp"))||Ot.endsWith(".m.webp"):!Ot.endsWith(".m.webp")).sort((Ot,Oe)=>(oe.indexOf(Be(Ot[0]))+99)%99-(oe.indexOf(Be(Oe[0]))+99)%99),st={"":"the palace",storm:"the storm",mithraki:"M\u012B\u1E6Dhr\u0101k\u012B",revisetax:"Revise Tax",bisikaapi:"Bisi Kaapi\u2019s forest",plants:"trees, plants and stones",glavida:"Glavida\u2019s city",innovious:"Innovious under the sea",houseofmoh:"House of Moh\u2019s cove",cosmos:"the Cosmos summit",tex:"stone, wood and sky textures",book:"the project books"},Mt=0,bt=Ve.reduce((Ot,Oe)=>Ot+Oe[1],0)||1,Nn=Ve.slice(),Kn=performance.now(),ki=async()=>{for(;Nn.length;){let[Ot,Oe]=Nn.shift();h.setStage("Loading "+(st[Be(Ot)]||"the journey"));let rt=bp(na(t+Ot));try{if(!(is&&await is.match(rt))){let ct=await K(rt);ct.ok&&(is?await is.put(rt,ct):await ct.arrayBuffer())}}catch{}Mt+=Oe,g=Mt/bt,p(),performance.now()-Kn>45e3&&!m&&(m=!0,p())}};await Promise.all([0,1,2,3].map(ki))}catch(ce){console.warn("[nomadiic-rt] preload",ce)}g=1,m=!0,h.setStage("Ready"),p()})();let M=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<600,v=e.tier||(M?"low":"high"),S=v==="high"?{pr:1.5,grassNear:22e4,grassFar:6e4,clumps:900,msaa:2,spray:2400}:{pr:1.3,grassNear:8e4,grassFar:24e3,clumps:380,msaa:0,spray:700},b=new Hr({antialias:!1,powerPreference:"high-performance",alpha:!1});b.setPixelRatio(Math.min(devicePixelRatio,S.pr)),b.toneMapping=Zs,b.toneMappingExposure=e.exposure??.95,b.outputColorSpace=Ft,i.appendChild(b.domElement),Object.assign(b.domElement.style,{width:"100%",height:"100%",display:"block",touchAction:"none"});let E=new An;b.domElement.addEventListener("webglcontextlost",K=>{K.preventDefault(),console.warn("[nomadiic-rt] context lost")},!1),b.domElement.addEventListener("webglcontextrestored",()=>location.reload(),!1);let T=[...qf.map(K=>({...K,at:[K.at[0]/Jr*ns,Math.min(K.at[1]/Jr,1)*ns]})),...Xt.flatMap((K,ce)=>K.chapters.map(oe=>({...oe,at:[En[ce][0]+oe.at[0]*(En[ce][1]-En[ce][0]),En[ce][0]+Math.min(oe.at[1],1)*(En[ce][1]-En[ce][0])]})))],_=!1,y=async K=>{if(!_){_=!0;try{let ce=await import(na(Ch+"book.js"));ce.setBookBase(t+"book/"),ce.openBook(i,K,{onClose:()=>{_=!1}})}catch(ce){console.error("[nomadiic-rt] book",ce),_=!1}}},C=np(i,T,{contactUrl:e.contactUrl,onBook:y}),P=new Zt(42,1,1,6e3),D=new class extends rl{load(K,ce,oe,Be){let ke=new ln,Ve=this.manager.resolveURL(K);return fetch(Ve).then(st=>{if(!st.ok)throw new Error(st.status+" "+Ve);return st.blob()}).then(async st=>{if(navigator.userAgentData&&globalThis.createImageBitmap)ke.image=await createImageBitmap(st,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}),ke.flipY=!1;else{let Mt=new Image,bt=URL.createObjectURL(st);Mt.src=bt,await Mt.decode(),URL.revokeObjectURL(bt),ke.image=Mt}ke.needsUpdate=!0,ce&&ce(ke)}).catch(st=>{Be?Be(st):console.warn("[nomadiic-rt] texture",st)}),ke}loadOld(K,ce,oe,Be){return super.load(K,ke=>{let Ve=ke.image,st=()=>ce&&ce(ke);navigator.userAgentData&&globalThis.createImageBitmap&&Ve?createImageBitmap(Ve,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(Mt=>{ke.image=Mt,ke.flipY=!1,ke.needsUpdate=!0,st()}).catch(st):(Ve&&Ve.decode?Ve.decode().catch(()=>{}):Promise.resolve()).then(st)},oe,Be)}},N=0,H=14,F=()=>w(++N/H),B=K=>K.then(ce=>(F(),ce)),[z,O,Z,se,de,we]=await Promise.all([B(fetch(t+"scene.json").then(K=>K.json())),B(fi(D,t+"sky.jpg",{srgb:!1})),B(fi(D,t+"ground_lm_s.webp")),B(fi(D,t+"meadow.webp",{srgb:!0,repeat:!0})),B(_p(t+"grass_mask.png")),B(ta(t+"emblem.pack"))]);{let K=document.createElement("canvas");K.width=64,K.height=32;let ce=K.getContext("2d");ce.drawImage(O.image,0,0,64,32);let oe=ce.getImageData(0,14,64,2).data,Be=0,ke=0,Ve=0;for(let bt=0;bt<oe.length;bt+=4)Be+=oe[bt],ke+=oe[bt+1],Ve+=oe[bt+2];let st=oe.length/4,Mt=bt=>(bt/=255*st,bt<=.04045?bt/12.92:Math.pow((bt+.055)/1.055,2.4));e.fog=[Mt(Be),Mt(ke),Mt(Ve)]}let X=z.frames,ee=X.length,ae=new R(...z.sun).normalize();P.fov=z.fov,P.updateProjectionMatrix();let q={uTime:{value:0},uSun:{value:ae},uFogCol:{value:new xe(...e.fog)},uFogK:{value:34e-5},uCam:{value:P.position}},Y=new ge(new xn(5e3,48,24),new Te({side:Bt,depthWrite:!1,fog:!1,uniforms:{tSky:{value:O},uNight:{value:0},uFlash:{value:0},uT:{value:0},uFP:{value:new re(.5,.7)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`${Rl} uniform sampler2D tSky; uniform float uNight, uFlash, uT; varying vec3 vDir;
      ${El}
      void main(){ vec3 d = normalize(vDir); vec3 b = vec3(d.x, -d.z, d.y);
        float lon = atan(b.x, b.y), lat = asin(clamp(b.z, -1.0, 1.0));
        vec2 uv = vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927);
        vec3 sk = srgb2lin(texture2D(tSky, uv).rgb);
        if (uNight > 0.001) sk = mix(sk, stormSky(d, uT, uFlash), uNight);
        gl_FragColor = vec4(sk, 1.0); }`}));Y.renderOrder=-1,Y.frustumCulled=!1,E.add(Y);let ye=Wa({count:34,center:[0,58,40],radius:130,height:16,size:.6,color:1711136});E.add(ye.mesh);let me=ph({count:16,box:[-160,160,.6,5,-10,170],color:[.62,.68,.78],opacity:.16,size:[34,7]});E.add(me.mesh);let Ee=null;if(n){let K=v==="high"?14e3:6e3,ce=new Float32Array(K*6),oe=new Float32Array(K*2);for(let Ve=0;Ve<K;Ve++){let st=Math.random(),Mt=Math.random(),bt=Math.random(),Nn=Math.random();ce.set([st,Mt,bt,st,Mt,bt],Ve*6),oe[Ve*2]=oe[Ve*2+1]=Nn}let Be=new Ye;Be.setAttribute("position",new Je(ce,3));let ke=new Float32Array(K*2);for(let Ve=0;Ve<K;Ve++)ke[Ve*2]=0,ke[Ve*2+1]=1;Be.setAttribute("aEnd",new Je(ke,1)),Be.setAttribute("aSeed",new Je(oe,1)),Ee=new kr(Be,new Te({transparent:!0,depthWrite:!1,blending:St,uniforms:{uTime:q.uTime,uCam:q.uCam,uA:{value:1},uFl:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; attribute float aEnd, aSeed; varying float vA;
        void main(){ vec3 B = vec3(46.0, 30.0, 46.0); vec3 p = position * B;
          float sp = 22.0 + aSeed * 8.0; p.y = mod(p.y - uTime * sp - uCam.y, B.y);
          p.x = mod(p.x - uCam.x + uTime * 4.0, B.x); p.z = mod(p.z - uCam.z, B.z);
          vec3 w = uCam + p - B * vec3(0.5, 0.35, 0.5);
          w += vec3(0.04, -1.0, 0.01) * aEnd * (0.16 + aSeed * 0.22);
          vec4 mv = viewMatrix * vec4(w, 1.0); vA = (1.0 - smoothstep(3.0, 16.0, -mv.z)) * smoothstep(0.8, 2.5, -mv.z) * (0.35 + 0.65 * fract(aSeed * 13.7)) * (1.0 - aEnd * 0.7);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform float uA, uFl; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.62, 0.7, 0.86) * (0.09 + uFl * 0.5), vA * uA * 0.4); }"})),Ee.frustumCulled=!1,Ee.renderOrder=8,E.add(Ee)}let Q=new xs(b),he=new An;he.add(Y.clone()),he.add(new ge(new Wr(4e3,32).rotateX(-Math.PI/2),new Tn({color:new xe(.035,.045,.018)})));let U=Q.fromScene(he,0,.1,6e3).texture;E.environment=U;let ve=z.ground,ue=new Te({uniforms:{...q,tLm:{value:Z},tAlb:{value:se},uK:{value:z.lm.ground},uRect:{value:new je(ve.x0,ve.x1,ve.z0,ve.z1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Rl} ${ni} uniform sampler2D tLm, tAlb; uniform float uK; uniform vec4 uRect; varying vec3 vW;
      void main(){
        vec3 alb = texture2D(tAlb, vW.xz / 9.0).rgb * 0.6 + texture2D(tAlb, vW.xz / 53.0 + 0.37).rgb * 0.4;
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - vW.z) / (uRect.w - uRect.z));
        vec3 open = lmDecode(vec3(0.83), uK);
        vec3 L = lmDecode(texture2D(tLm, clamp(uv, 0.002, 0.998)).rgb, uK);
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        float edge = inside * smoothstep(0.0, 0.08, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
        vec3 c = alb * mix(open, L, edge);
        gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),_e=new ge(new Et(9e3,9e3,1,1).rotateX(-Math.PI/2),ue);_e.position.y=-.01,E.add(_e),we.computeVertexNormals();let J=new Nt({color:new xe("#e9a94a"),metalness:1,roughness:.16,envMapIntensity:1.1}),Se=new ge(we,J);Se.matrixAutoUpdate=!1,E.add(Se),n&&(J.emissive=new xe(.32,.2,.06),h.setEmblem(we));let fe={p:new R,q:new Dt,s:new R};new $e().fromArray(X[0].emb).decompose(fe.p,fe.q,fe.s);let L=new tn;L.position.copy(fe.p),L.lookAt(X[0].cam[0],fe.p.y,X[0].cam[2]);let A=L.quaternion.clone().invert().multiply(fe.q),k={a:0,v:.25,drag:!1,x:0},te=new R,pe=new R,ie=new Vn(new xe(1,.72,.48),6);ie.position.copy(ae).multiplyScalar(100),E.add(ie,ie.target);let Le=document.createElement("canvas");Le.width=de.width,Le.height=de.height,Le.getContext("2d").drawImage(de,0,0);let Ae=new Mi(Le);Ae.flipY=!1,Ae.colorSpace=on;let Pe=z.mask,et={...q,tLm:{value:Z},uK:{value:z.lm.ground},uRect:{value:new je(ve.x0,ve.x1,ve.z0,ve.z1)},uPxAng:{value:6e-4},tMask:{value:Ae},uMask:{value:new je(Pe.x0,Pe.x1,Pe.z0,Pe.z1)},uCenter:{value:new re}},Me=new ge(ka(S.grassNear,84,1,1),uh({...et,uTile:{value:84},uWide:{value:M?1.6:1.15},uFade:{value:new re(30,42)}})),Fe=new ge(ka(S.grassFar,300,1,2),uh({...et,uTile:{value:300},uWide:{value:3.4},uFade:{value:new re(130,150)},uNear:{value:44}},!0));Me.frustumCulled=Fe.frustumCulled=!1,Me.layers.set(1),Fe.layers.set(1),P.layers.enable(1),E.add(Me,Fe);let Ke=null,Ze=null,Ne={value:0},ot=null,lt=null,Tt=null,V=null,De=null,ne=null,le=null,Ue=null,Re=new Zt,ze=Xt.map(()=>null),At=Xt.map(()=>!1),sn=K=>new Te({uniforms:{tP:{value:K},uRes:{value:new re(1,1)},uReady:{value:0},uCol:{value:new xe(.9,.86,.8)},uFog:{value:new je(.5,.5,.5,0)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tP; uniform vec2 uRes; uniform float uReady; uniform vec3 uCol; uniform vec4 uFog; varying vec2 vUv;
      void main(){ vec3 glow = uCol * mix(1.35, 0.75, vUv.y) * (0.85 + 0.25 * (1.0 - abs(vUv.x - 0.5) * 2.0));   // soft daylight beyond the door, never a white panel
        vec3 c = uReady > 0.5 ? texture2D(tP, gl_FragCoord.xy / uRes).rgb : glow; gl_FragColor = vec4(mix(c, uFog.rgb, uFog.a), 1.0); }`}),_t=K=>K.traverse(ce=>{ce.geometry?.dispose?.();for(let oe of[].concat(ce.material||[])){for(let Be of Object.values(oe))Be&&Be.isTexture&&!Be.isRenderTargetTexture&&Be.dispose();for(let Be of Object.values(oe.uniforms||{}))Be&&Be.value&&Be.value.isTexture&&!Be.value.isRenderTargetTexture&&Be.value.dispose()}}),rn=-1,Un=!1,As=Xt.map(()=>null),Ya=K=>K==="bisikaapi"?[Jf({count:36,box:[-12,12,.6,2.6,-70,30]}),jf({count:140,box:[-12,12,0,14,-12,12],follow:!0}),ph({count:22,box:[-60,60,.4,4.5,-100,50],color:[.78,.82,.8],opacity:.2})]:K==="glavida"?[Wa({count:28,center:[10,30,-150],radius:90,height:14,size:.55,color:2764083})]:K==="houseofmoh"?[Wa({count:14,center:[0,18,-60],radius:55,height:8,size:.75,color:13225684,glide:2.5,speed:.7})]:K==="cosmos"?[Wa({count:2,center:[0,95,-40],radius:140,height:12,size:1.9,color:3814964,glide:4,speed:.5})]:[],zi=K=>{let ce=ze[K];ce&&(ze[K]=null,At[K]=!1,_t(ce.scene),ce.scene.traverse(oe=>{oe.isReflector&&oe.dispose()}),ce.dispose?.())},er=()=>new Promise(K=>requestAnimationFrame(()=>K())),Ka=async K=>{let ce=performance.now();try{b.setRenderTarget(le);let Be=b.compileAsync(K.scene,P);b.setRenderTarget(null),await Be}catch{b.setRenderTarget(null)}globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(K.key,"compileAsync",Math.round(performance.now()-ce)+"ms");let oe=new Set;K.scene.traverse(Be=>{for(let ke of[].concat(Be.material||[])){for(let Ve of Object.values(ke))Ve&&Ve.isTexture&&!Ve.isRenderTargetTexture&&oe.add(Ve);for(let Ve of Object.values(ke.uniforms||{}))Ve&&Ve.value&&Ve.value.isTexture&&!Ve.value.isRenderTargetTexture&&oe.add(Ve.value)}});for(let Be of oe)ce=performance.now(),b.initTexture(Be),globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(K.key,"tex",Be.image&&Be.image.width,Math.round(performance.now()-ce)+"ms"),await er()},tr={a:"#f6c47a",b:"#e0913a",c:"#fff0d2"},Rs=(K,ce)=>{let oe=new Al({count:v==="high"?3e4:18e3,size:34,colorA:tr.a,colorB:tr.b,colorC:tr.c,spread:16,additive:!1});oe.setShape(xp(K,{count:oe.count,width:20,font:"600 150px Satoshi, sans-serif",lineGap:.95}),"A"),oe.material.depthTest=!1,oe.renderOrder=20,oe.visible=!1;let Be=new ge(new Et(1,1),new Te({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec2 vUv; void main(){ float r = length((vUv - 0.5) * vec2(1.0, 2.2)); gl_FragColor = vec4(0.03, 0.035, 0.05, uA * 0.72 * (1.0 - smoothstep(0.05, 0.5, r))); }"}));return Be.renderOrder=19,Be.scale.set(30,11,1),Be.position.z=-.5,oe.add(Be),oe.userData.halo=Be,ce.add(oe),oe},Cs=new R,Hi=new R,Za=(K,ce,oe,Be)=>{let[ke,Ve]=ce,st=ut.smoothstep(oe,ke,ke+.05)*(1-ut.smoothstep(oe,Ve-.05,Ve));if(K.visible=st>.001,!K.visible){K.u.uAssemble.value=0;return}let Mt=18,bt=Math.tan(ut.degToRad(P.fov/2)),Nn=ut.clamp((1.1-P.aspect)/.6,0,1);Cs.set(0,0,-1).applyQuaternion(P.quaternion),Hi.set(0,1,0).applyQuaternion(P.quaternion),K.position.copy(P.position).addScaledVector(Cs,Mt).addScaledVector(Hi,Mt*bt*ut.lerp(.26,.2,Nn)),K.quaternion.copy(P.quaternion),K.scale.setScalar(2*Mt*bt*P.aspect*ut.lerp(.5,.84,Nn)/20),K.u.uTime.value=Be,K.u.uAssemble.value=st,K.u.uDance.value=.35+(1-st)*2.2,K.userData.halo.material.uniforms.uA.value=st},ia=K=>{K<0||K>=Xt.length||ze[K]||At[K]||At.some(Boolean)||(At[K]=!0,Xt[K].build({base:t,unpack:ta,loader:D,renderer:b,tier:v,grainTex:V}).then(async ce=>{if(await Ka(ce),!At[K]){ce.dispose?.();return}if(ce.huds=[].concat(Xt[K].hud||[]).map(oe=>({H:Rs(oe.lines,ce.scene),at:oe.at})),At[K]=!1,ze[K]=ce,K===0&&(De=ce),ce.exitPortal){let oe=new Et(...ce.exitPortal.size);if(ce.exitPortal.arch){let[ke,Ve]=ce.exitPortal.size,st=ke/2,Mt=new ys;Mt.moveTo(-st,-Ve/2),Mt.lineTo(st,-Ve/2),Mt.lineTo(st,Ve/2-st),Mt.absarc(0,Ve/2-st,st,0,Math.PI,!1),Mt.lineTo(-st,-Ve/2),oe=new Ha(Mt,32);let bt=oe.attributes.position,Nn=oe.attributes.uv;for(let Kn=0;Kn<bt.count;Kn++)Nn.setXY(Kn,bt.getX(Kn)/ke+.5,bt.getY(Kn)/Ve+.5)}let Be=new ge(oe,sn(le.texture));Be.position.set(...ce.exitPortal.pos),Be.rotation.y=ce.exitPortal.yaw,Be.visible=!1,ce.scene.add(Be),ce.portalQuad=Be}yt(),e.debug&&(window.__worlds=ze)}).catch(ce=>{console.error("[nomadiic-rt] world",Xt[K].key,ce),At[K]=!1}))},Cl=K=>{for(let ce of[K+1,K-1])if(ce>=0&&ce<Xt.length&&!ze[ce]){ia(ce);return}},$a=(async()=>{let[K,ce,oe,Be]=await Promise.all([B(ta(t+"arch.pack")),B(fi(D,t+"arch_lm_s.webp").catch(()=>fi(D,t+"arch_lm.webp"))),B(fi(D,t+"marble.webp",{srgb:!0,repeat:!0})),B(ta(t+"water.pack"))]);V=oe;let ke=K.toNonIndexed();ke.computeVertexNormals();let Ve=[];for(let Qe of[-30,-36,-42,-48])for(let wt of[-6.9,6.9])Ve.push(new R(wt,11.6,Qe));let st=(Qe,wt,at)=>new Te({uniforms:{...q,...s,tLm:{value:Qe},tMarble:{value:oe},uK:{value:wt},uLamps:{value:Ve}},defines:at?{HALL:""}:{},vertexShader:`attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
        void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${Rl} ${ni} uniform sampler2D tLm, tMarble; uniform float uK, uNight, uFront, uGlowK, uStorm; uniform vec3 uLamps[8]; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
        vec3 tri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
          return texture2D(tMarble, p.zy / s).rgb * w.x + texture2D(tMarble, p.xz / s).rgb * w.y + texture2D(tMarble, p.xy / s).rgb * w.z; }
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){
          vec3 n = vN; n = (dot(n, n) > 1e-8 && n == n) ? normalize(n) : vec3(0.0, 1.0, 0.0); vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
          #ifdef HALL
            { float lum = dot(L, vec3(0.333)); L *= 0.85 / (1.0 + max(lum - 0.85, 0.0) * 1.4); }   // the stone right under each lamp baked hot: rolled off so nothing burns white
          #else
            if (vW.z < -24.8 && vW.z > -55.5 && abs(vW.x) < 8.3 && vW.y > 5.6 && vW.y < 16.5) discard;
            if (abs(vW.x) < 1.4 && vW.y > 23.35 && (abs(vW.z + 20.7) < 1.6 || abs(vW.z + 59.3) < 1.6)) discard;   // the old ball on each apex   // outside pieces (the colonnade's basins) that poke through into the hall
          #endif
          if (uNight > 0.001) L = mix(L, pow(L, vec3(0.62)) * 0.82, uNight);
          L += vec3(0.16, 0.15, 0.14) * uStorm;   // under the storm the marble glows softly, as if lit from within
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
          gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),Mt=st(ce,z.lm.arch,!1),bt=Mt.uniforms;Ke=new ge(ke,Mt),E.add(Ke),Promise.all([ta(t+"hall.pack"),fi(D,t+"hall_lm.webp")]).then(([Qe,wt])=>{let at=Qe.toNonIndexed();at.computeVertexNormals(),E.add(new ge(at,st(wt,z.lm.hall*.125,!0)))}).catch(Qe=>console.error("[nomadiic-rt] hall",Qe)),Be.computeBoundingBox();let Nn=Be.boundingBox,Kn=Nn.getSize(new R),ki=Nn.getCenter(new R),Ot=new $s(new Et(Kn.x,Kn.z),{textureWidth:Math.round(innerWidth*Math.min(devicePixelRatio,S.pr)*.5),textureHeight:Math.round(innerHeight*Math.min(devicePixelRatio,S.pr)*.5),shader:{name:"Pool",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},...q},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW;
          void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${ni} uniform sampler2D tDiffuse; varying vec4 vUv4; varying vec3 vW;
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
            gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}});Ot.rotation.x=-Math.PI/2,Ot.position.set(ki.x,Nn.max.y+.02,ki.z),Ot.camera.layers.set(0),E.add(Ot);let Oe=Gf(z.trees,S.clumps,q);E.add(Oe);try{await document.fonts.load('120px "Nomadiic Line"')}catch{}let rt=new Mi(ip("NOMADIIC HORSE DESIGNS"));rt.anisotropy=8,new ge(new Et(19.5,.76),new Te({transparent:!0,depthWrite:!1,blending:Bo,premultipliedAlpha:!0,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{tT:{value:rt}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tT; varying vec2 vUv;
        void main(){ float a = texture2D(tT, vUv).r; float up = texture2D(tT, vUv + vec2(0.0, 0.012)).r;
          float shade = mix(1.0, 0.42, a) + clamp(up - a, 0.0, 1.0) * 0.0 + clamp(a - up, 0.0, 1.0) * 0.55;   // dark groove, lit lower lip
          gl_FragColor = vec4(vec3(shade), 1.0); }`})).position.set(0,17.98,-20.9);{let Qe={base:19.95,apex:23.45,half:11.05},wt=document.createElement("canvas");wt.width=2048,wt.height=330;let at=wt.getContext("2d");at.fillStyle="#000",at.fillRect(0,0,2048,330),at.filter="blur(3px)";let Cn=!1,aa=(Ht,gt,Pn,Qt,Gh)=>{at.save(),at.translate(Ht,gt),at.rotate(Pn),at.beginPath(),at.ellipse(0,0,Qt,Gh,0,0,Math.PI*2),at.fill(),at.restore()};for(let Ht of Cn?[-1,1]:[]){at.strokeStyle="#9a9a9a",at.lineWidth=9,at.beginPath();for(let gt=0;gt<=1.0001;gt+=.02){let Pn=1024+Ht*(190+gt*760),Qt=120+gt*150-Math.sin(gt*Math.PI)*50;gt===0?at.moveTo(Pn,Qt):at.lineTo(Pn,Qt)}at.stroke(),at.fillStyle="#e6e6e6";for(let gt=.03;gt<.98;gt+=.032){let Pn=1024+Ht*(190+gt*760),Qt=120+gt*150-Math.sin(gt*Math.PI)*50,as=(34-gt*16)*1.5;aa(Pn-Ht*as*.3,Qt-as*.55,Ht*-.55,as,as*.42),aa(Pn-Ht*as*.3,Qt+as*.55,Ht*.55,as,as*.42)}for(let gt=0;gt<5;gt++)at.beginPath(),at.arc(1024+Ht*(260+gt*150),150+gt*28-Math.sin(gt/5*Math.PI)*40,11,0,Math.PI*2),at.fillStyle="#ffffff",at.fill()}at.filter="none";let ir=new Mi(wt);ir.anisotropy=8;let bi=new ys;bi.moveTo(-Qe.half,0),bi.lineTo(Qe.half,0),bi.lineTo(0,Qe.apex-Qe.base),bi.closePath();let zl=new Ha(bi),Hl=zl.attributes.position,Cp=zl.attributes.uv;for(let Ht=0;Ht<Hl.count;Ht++)Cp.setXY(Ht,(Hl.getX(Ht)+Qe.half)/(2*Qe.half),Hl.getY(Ht)/(Qe.apex-Qe.base));let Pp=(Ht=>new Te({uniforms:{tM:{value:oe},tR:{value:ir}},vertexShader:"varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tM, tR; varying vec3 vW, vN; varying vec2 vUv;
          void main(){ vec3 n = normalize(vN); ${Ht}
            vec3 m = texture2D(tM, vW.xy * 0.08 + vW.z * 0.03).rgb * vec3(1.0, 0.98, 0.95);
            float sun = max(dot(n, normalize(vec3(-0.35, 0.75, 0.55))), 0.0);
            gl_FragColor = vec4(m * (0.62 + 0.5 * sun) * vec3(0.99, 0.985, 0.975) + 0.05, 1.0); }`}))(`float e = 1.0 / 2048.0, h = texture2D(tR, vUv).r, hx = texture2D(tR, vUv + vec2(e * 2.0, 0.0)).r, hy = texture2D(tR, vUv + vec2(0.0, e * 12.0)).r;
            n = normalize(n + vec3(-(hx - h) * 9.0, -(hy - h) * 9.0, 0.0)); float occ = 1.0 - h * 0.0;`),Ip=we,Lp=fe.s.clone().multiplyScalar(.27),Dp=new R,p1=new R(1,1,1),Up=new Te({uniforms:{tM:{value:oe}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tM; varying vec3 vW, vN;
          void main(){ vec3 n = normalize(vN); vec3 m = texture2D(tM, vW.xy * 0.08 + vW.z * 0.03).rgb;
            float key = max(dot(n, normalize(vec3(-0.55, 0.65, 0.5))), 0.0), fill = max(dot(n, normalize(vec3(0.6, 0.2, 0.75))), 0.0);
            float face = smoothstep(0.75, 0.98, n.z * (n.z > 0.0 ? 1.0 : -1.0));            // flat field faces sit back a little
            gl_FragColor = vec4(m * (0.2 + 0.95 * key + 0.25 * fill) * mix(1.0, 0.86, face) * vec3(0.99, 0.985, 0.975), 1.0); }`}),Wi=new ys;Wi.moveTo(0,0);for(let Ht=0;Ht<=6;Ht++){let gt=Math.PI*(.1+Ht*.133),Pn=Ht%2?1.2:1.55,Qt=.075;Wi.lineTo(Math.cos(gt-Qt)*.42,.25+Math.sin(gt-Qt)*.42),Wi.bezierCurveTo(Math.cos(gt-Qt*1.6)*Pn,.25+Math.sin(gt-Qt*1.6)*Pn,Math.cos(gt+Qt*1.6)*Pn,.25+Math.sin(gt+Qt*1.6)*Pn,Math.cos(gt+Qt)*.42,.25+Math.sin(gt+Qt)*.42)}Wi.lineTo(.6,0),Wi.quadraticCurveTo(.7,-.35,.3,-.35),Wi.lineTo(-.3,-.35),Wi.quadraticCurveTo(-.7,-.35,-.6,0),Wi.lineTo(0,0),new tl(Wi,{depth:.28,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2,curveSegments:10}).translate(0,0,-.14);for(let[Ht,gt]of[[-20.68,0],[-59.32,Math.PI]]){let Pn=new ge(zl,Pp);Pn.position.set(0,Qe.base,Ht),Pn.rotation.y=gt,E.add(Pn);let Qt=new ge(Ip,Up);Qt.matrixAutoUpdate=!1,Qt.matrix.compose(Dp.set(0,Qe.base+1.62,Ht+(gt?-.34:.34)),new Dt().setFromAxisAngle(new R(0,1,0),gt).multiply(A),Lp),E.add(Qt)}}try{await document.fonts.load("600 100px Satoshi")}catch{}for(let Qe of dh){let wt=new Mi(sp(Qe.lines));wt.anisotropy=8,wt.colorSpace=Ft;let at=new gn(4,1.46,.09),Cn=new ge(at,new Te({uniforms:{...q,tT:{value:wt},uLz:{value:Qe.z}},vertexShader:"varying vec2 vUv; varying vec3 vW, vN; varying float vFront; void main(){ vUv = uv; vFront = step(0.5, normal.z); vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tT; uniform float uTime, uLz; varying vec2 vUv; varying vec3 vW, vN; varying float vFront;
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
            gl_FragColor = vec4(c * 1.15, 1.0); }`}));Cn.position.set(Qe.x+(Qe.x<0?.05:-.05),8.4,Qe.z),Cn.rotation.y=Qe.x<0?Math.PI/2:-Math.PI/2,E.add(Cn)}let zt=new Pi([[0,0],[.38,.02],[.5,.18],[.54,.34],[.5,.36],[0,.3]].map(([Qe,wt])=>new re(Qe,wt)),28),an=new Nt({color:new xe("#8a5a2b"),metalness:.55,roughness:.4,emissive:new xe("#3a2410")}),jt=new Et(.7,1.2);jt.translate(0,.55,0);let Zn=new Te({transparent:!0,depthWrite:!1,blending:St,uniforms:{uTime:q.uTime},vertexShader:"varying vec2 vUv; uniform float uTime; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * vec2(1.0, 1.0 + 0.08 * sin(uTime * 9.0)); gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        float n(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(n(i), n(i + vec2(1, 0)), f.x), mix(n(i + vec2(0, 1)), n(i + vec2(1, 1)), f.x), f.y); }
        void main(){ vec2 p = vUv - vec2(0.5, 0.08); float t = uTime * 2.6;
          float w = 0.32 * (1.0 - vUv.y) + 0.02; float d = abs(p.x + (vn(vec2(vUv.y * 4.0 - t, 1.0)) - 0.5) * 0.18 * vUv.y) / w;
          float body = (1.0 - smoothstep(0.55, 1.0, d)) * smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y + (vn(vec2(vUv.x * 3.0, vUv.y * 5.0 - t)) - 0.5) * 0.25));
          vec3 col = mix(vec3(1.0, 0.85, 0.5), vec3(1.0, 0.35, 0.08), smoothstep(0.1, 0.8, vUv.y));
          gl_FragColor = vec4(col * body * 9.0, body); }`});for(let Qe of dh){let wt=Math.sign(Qe.x),at=new R(Qe.x-wt*.56,0,Qe.z),Cn=10.25,aa=new ge(zt,an);aa.position.set(at.x,Cn-.55,at.z),E.add(aa);let ir=new ge(new Ii(.05,.05,.58,8),an);ir.rotation.z=Math.PI/2,ir.position.set(at.x+wt*.28,Cn-.5,at.z),E.add(ir);let bi=new ge(jt,Zn);bi.position.set(at.x,Cn-.22,at.z),bi.renderOrder=8,bi.frustumCulled=!1,E.add(bi)}let si=ep(0,45.1,S.spray,q);E.add(si),Tt=si,yt(),Ui({base:t,unpack:ta,loader:D,U:q,groundLm:ue.uniforms.tLm.value,groundK:z.lm.ground,rect:ue.uniforms.uRect.value,tier:v,onPart:()=>{}}).then(async Qe=>{try{let wt=new Vt(1,1,{type:qt});b.setRenderTarget(wt);let at=b.compileAsync(Qe.group,P,E);b.setRenderTarget(null),await at,wt.dispose()}catch{b.setRenderTarget(null)}E.add(Qe.group),ot=Qe.fade,lt=Qe,F()}).catch(Qe=>console.error("[nomadiic-rt] garden",Qe)).finally(()=>{le=new Vt(2,2,{type:qt,minFilter:$t,magFilter:$t}),Ue=new Vt(2,2,{type:qt,minFilter:$t,magFilter:$t}),ne=new ge(new Et(Ml.size[0],Ml.size[1]),sn(le.texture)),ne.position.set(...Ml.pos),ne.visible=!1,E.add(ne),ia(0)});let[kn,Sn,rs,Ps]=await Promise.all([fetch(t+"terrain.json").then(Qe=>Qe.json()),B(_p(t+"terrain.png")),B(fi(D,t+"mtn_c_s.webp")),fi(D,t+"tex/rock_face_03_diff.webp",{srgb:!0,repeat:!0}).catch(()=>null)]),Vi=document.createElement("canvas");Vi.width=Sn.width,Vi.height=Sn.height;let ja=Vi.getContext("2d");ja.drawImage(Sn,0,0);let Qa=ja.getImageData(0,0,Vi.width,Vi.height).data,nr=Vi.width,Nl=v==="high"?1:2,ra=Math.floor((nr-1)/Nl)+1,Fl=new Et(kn.ext*2,kn.ext*2,ra-1,ra-1).rotateX(-Math.PI/2),Wh=Fl.attributes.position;for(let Qe=0;Qe<ra;Qe++)for(let wt=0;wt<ra;wt++){let at=(Qe*Nl*nr+wt*Nl)*4,Cn=(Qa[at]*256+Qa[at+1])/65535;Wh.setY(Qe*ra+wt,kn.lo+Cn*(kn.hi-kn.lo))}Wh.needsUpdate=!0,Fl.computeBoundingSphere(),Promise.all([fi(D,t+"arch_lm.webp"),fi(D,t+"ground_lm.webp"),fi(D,t+"mtn_c.webp")]).then(([Qe,wt,at])=>{bt.tLm.value=Qe,ue.uniforms.tLm.value=wt,et.tLm.value=wt,Ze.material.uniforms.tC.value=at,F(),E.traverse(Cn=>{Cn.isInstancedMesh&&Cn.material.uniforms&&Cn.material.uniforms.tLm&&(Cn.material.uniforms.tLm.value=wt)})}).catch(()=>{}),Ze=new ge(Fl,new Te({transparent:!0,depthWrite:!0,uniforms:{...q,...s,tC:{value:rs},tR:{value:Ps},uK:{value:z.lm.mtn},uA:Ne,uLo:{value:kn.lo},uHi:{value:kn.hi}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Rl} ${ni} uniform sampler2D tC, tR; uniform float uK, uA, uLo, uHi, uStorm; varying vec3 vW;
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
          float sunSide = mix(clamp(dot(Nw, uSun), 0.0, 1.0), 0.35 + 0.25 * Nw.y, uStorm * 0.85); float gully = smoothstep(0.25, 0.75, nz);
          vec3 c = base * mix(vec3(1.0), detail, 0.85) * (0.42 + 1.05 * sunSide) * (0.75 + 0.35 * gully);
          c += vec3(0.05, 0.07, 0.11) * (1.0 - sunSide) * lum;                                              // sky light in the shade
          float veg = (1.0 - smoothstep(0.18, 0.42, hN + (nz - 0.4) * 0.15)) * (1.0 - smoothstep(0.32, 0.6, slope));      // forest on the lower slopes
          c = mix(c, lum * vec3(0.2, 0.3, 0.14) * mix(1.0, nz * 2.2, 0.7) * (0.5 + 0.9 * sunSide), veg * 0.8);
          float snow = smoothstep(0.6, 0.74, hN + (nz - 0.45) * 0.18) * (1.0 - smoothstep(0.42, 0.68, slope));               // snow where it can lie
          c = mix(c, vec3(0.93, 0.95, 1.0) * max(lum, 0.12) * 2.3, snow);
          float d = length(vW - cameraPosition);
          c = mix(c, vec3(0.6, 0.7, 0.84) * 0.85, (1.0 - exp(-d * 0.00032)) * 0.55);                       // aerial perspective: every ridge bluer than the last
          vec3 f = applyFog(c, vW); f = mix(c, f, 0.5);
          if (uStorm > 0.001) {                    // in the storm: veils of rain between the ridges, the summits lost in the cloud deck
            float veil = 1.0 - exp(-d * 0.00065);
            float drift = nz * 0.35 + 0.5 * sin(vW.x * 0.004 + uTime * 0.05) * sin(vW.z * 0.003 - uTime * 0.04);
            float cloud = smoothstep(0.7, 0.95, hN + drift * 0.25) * 0.8;   // only the highest summits go into the cloud
            vec3 sc = mix(f, vec3(0.27, 0.29, 0.33), veil * 0.7);
            sc = mix(sc, vec3(0.3, 0.32, 0.36), cloud * 0.92);
            f = mix(f, sc, uStorm);
          }
          gl_FragColor = vec4(f, uA); }`})),Ze.renderOrder=0,E.add(Ze)})();$a.catch(K=>console.error("[nomadiic-rt] stage 2",K));let Pl=new Vt(2,2,{type:qt,samples:S.msaa}),I=new ml(b,Pl),W=new gl(E,P);I.addPass(W),I.addPass(new Ms({uniforms:{tDiffuse:{value:null},uPx:{value:new re(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      bool bad(vec3 c){ return any(isnan(c)) || any(isinf(c)); }
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (bad(c)) { vec2 px = 1.0 / vec2(textureSize(tDiffuse, 0)); vec3 s = vec3(0.0); float n = 0.0;
          for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) { vec3 t = texture2D(tDiffuse, vUv + vec2(i, j) * px).rgb; if (!bad(t)) { s += t; n += 1.0; } }
          c = n > 0.0 ? s / n : vec3(0.0); }
        gl_FragColor = vec4(min(max(c, vec3(0.0)), vec3(12.0)), 1.0); }`}));let $=new Ms({uniforms:{tDiffuse:{value:null},uSun:{value:new re(.5,.8)},uOn:{value:0},uThresh:{value:.7},uTint:{value:new xe(1,.9,.72)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uOn, uThresh; uniform vec3 uTint; varying vec2 vUv;
      void main(){ vec3 base = texture2D(tDiffuse, vUv).rgb;
        if (uOn < 0.001) { gl_FragColor = vec4(base, 1.0); return; }
        vec2 d = (vUv - uSun) * (0.92 / 40.0); vec2 p = vUv; vec3 acc = vec3(0.0); float w = 1.0;
        for (int i = 0; i < 40; i++) { p -= d; vec3 s = texture2D(tDiffuse, p).rgb; float l = dot(s, vec3(0.3333));
          acc += s * clamp((l - uThresh) / max(l, 1e-3), 0.0, 1.0) * w; w *= 0.955; }
        vec3 add = acc * (uOn / 40.0) * uTint; add = add / (1.0 + dot(add, vec3(0.3333)));    // rays brighten, never white out the frame
        gl_FragColor = vec4(base + add * 0.9, 1.0); }`});I.addPass($),v!=="high"&&($.enabled=!1);let j=new $r(new re(2,2),.22,.6,1.6),G=j.materialHighPassFilter;G.fragmentShader=G.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); if (texel.r != texel.r || texel.g != texel.g || texel.b != texel.b) texel = vec4(0.0); texel.rgb = min(texel.rgb, vec3(4.0));"),G.needsUpdate=!0,I.addPass(j),I.addPass(new vl);let be=new Ms({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new re(1,1)},uVeil:{value:0},uVeilCol:{value:new xe(.96,.93,.88)},uSat:{value:1.22},uCon:{value:.38},uWarm:{value:0},uNight:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVeil, uSat, uCon, uWarm, uNight, uFlash; uniform vec2 uRes; uniform vec3 uVeilCol; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        c = mix(c, c * c * (3.0 - 2.0 * c), uCon);                       // punchy contrast, like Blender's AgX Punchy
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c = mix(vec3(l), c, uSat);
        c *= vec3(1.0 + uWarm * 0.06, 1.0, 1.0 - uWarm * 0.08);           // each world's time of day: warm afternoons, cool nights
        c = mix(c, c + vec3(0.02, 0.025, 0.04) * (1.0 - l), max(-uWarm, 0.0) * 0.6);   // night: lifted cool shadows
        if (uNight > 0.001) {                                                // a thunderstorm in daylight: overcast, cooler, a little darker
          float L = dot(c, vec3(0.2126, 0.7152, 0.0722));
          vec3 st = mix(vec3(L), c, 0.5) * vec3(0.6, 0.72, 1.0) * 0.72 + vec3(0.006, 0.01, 0.022);
          st = st * st * (3.0 - 2.0 * st) * 0.35 + st * 0.65;                  // storm light: flat, heavy, a little contrast
          st = mix(st, c * 0.92, smoothstep(0.14, 0.34, (c.r - c.b) / max(c.r, 1e-3)) * smoothstep(0.015, 0.08, L));   // gold, fire and lamplight keep their colour
          st += vec3(0.6, 0.68, 0.9) * uFlash * (0.12 + 0.75 * L);            // lightning lights the whole scene for an instant
          c = mix(c, st, uNight);
        }
        vec2 d = vUv - 0.5; c *= 1.0 - 0.32 * smoothstep(0.2, 0.85, dot(d, d) * 2.2);
        c += (h(vUv * uRes) - 0.5) * 0.018;
        c = mix(c, uVeilCol, uVeil);                                         // the light you step into between worlds
        gl_FragColor = vec4(c, 1.0); }`});I.addPass(be);let Ce=0,He=0,We=0,nt=0,it=0,Xe=0,tt=b.domElement,Rt=()=>{let K=rn<0?-1:rn-1;for(let ce=Math.max(0,rn);ce<Xt.length&&ze[ce];ce++)K=ce;return K<0?ze[0]?En[0][1]:ns*.9:K+1<Xt.length&&!ze[K+1]?En[K][0]+(En[K][1]-En[K][0])*.8:En[K][1]},It=()=>{let K=Math.max(0,rn);for(;K>0&&ze[K-1];)K--;return K===0?0:En[K][0]},bn=K=>{K.preventDefault(),!_&&(Ce=ut.clamp(Ce+K.deltaY*32e-5*ns,It(),Rt()))},pt=null,qe=K=>{pt=K.touches[0].clientY},ii=K=>{if(pt==null||_)return;let ce=K.touches[0].clientY;Ce=ut.clamp(Ce+(pt-ce)*.0011*ns,It(),Rt()),pt=ce,K.preventDefault()},vt=K=>{let ce=tt.getBoundingClientRect();if(We=((K.clientX-ce.left)/ce.width-.5)*2,nt=((K.clientY-ce.top)/ce.height-.5)*2,k.drag){let oe=K.clientX-k.x;k.x=K.clientX,k.a+=oe*.012,k.v=ut.clamp(oe*.012/Math.max(Uh,1/120),-12,12)}},On=K=>{He/ns*Jr<Js*.9&&(k.drag=!0,k.x=K.clientX,tt.style.cursor="grabbing")},Bi=()=>{k.drag=!1,tt.style.cursor=He/ns*Jr<Js*.9?"grab":""};tt.addEventListener("pointerdown",On),addEventListener("pointerup",Bi);let Rn=K=>{c||((K.key==="ArrowDown"||K.key==="PageDown"||K.key===" ")&&(Ce=Math.min(Rt(),Ce+.03)),(K.key==="ArrowUp"||K.key==="PageUp")&&(Ce=Math.max(It(),Ce-.03)))};tt.addEventListener("wheel",bn,{passive:!1}),tt.addEventListener("touchstart",qe,{passive:!0}),tt.addEventListener("touchmove",ii,{passive:!1}),tt.addEventListener("pointermove",vt),addEventListener("keydown",Rn);let xt={pr:Math.min(devicePixelRatio,S.pr),acc:0,n:0,hold:0},yt=()=>{let K=i.clientWidth||innerWidth,ce=i.clientHeight||innerHeight,oe=Math.min(devicePixelRatio,S.pr,xt.pr);b.setPixelRatio(oe),I.setPixelRatio(oe),b.setSize(K,ce,!1),I.setSize(K,ce),P.aspect=K/ce,P.fov=ut.lerp(z.fov,66,ut.clamp((1.2-P.aspect)/.7,0,1)),P.updateProjectionMatrix(),be.uniforms.uRes.value.set(K*b.getPixelRatio(),ce*b.getPixelRatio()),et.uPxAng.value=2*Math.tan(ut.degToRad(P.fov)/2)/(ce*b.getPixelRatio());let Be=ce*b.getPixelRatio()*.5/Math.tan(ut.degToRad(P.fov)/2);if(Tt&&(Tt.material.uniforms.uPx.value=Be),le){let ke=b.getPixelRatio();le.setSize(Math.round(K*ke),Math.round(ce*ke));for(let Ve of[ne,...ze.map(st=>st&&st.portalQuad)])Ve&&Ve.material.uniforms.uRes.value.set(K*ke,ce*ke)}ze.forEach(ke=>ke&&ke.setPx(Be))},qn=new ResizeObserver(yt);qn.observe(i),yt();let ss=()=>{yt(),matchMedia(`(resolution: ${devicePixelRatio}dppx)`).addEventListener("change",ss,{once:!0})};ss();let Yn=new Dt,Oi=new Dt,pi=new Dt,Ja=new cn,o1=new $e,l1=new $e,c1=new R,u1=new R,h1=new R,d1=new R,Il=new R,Sp=bs(),Ih=new R,Lh=new R,Dh=new Dt,Tp=new R(0,1,0),Ll=new R,Uh=1/60;function Ap(K,ce,oe){let Be=ut.clamp(K,0,1)*Jr;Sp.sample(Be,Ih,Lh),P.position.copy(Ih),P.lookAt(Lh);let ke=Math.abs(Ce-He)<.002&&!k.drag?1:0;return it+=(We*ke-it)*.02,pi.setFromEuler(Ja.set(0,-it*.025,0,"YXZ")),P.quaternion.multiply(pi),c&&(k.a=0,k.v=0),k.drag||(k.a+=k.v*oe,k.v+=(.22-k.v)*(1-Math.exp(-oe*.9))),L.lookAt(P.position.x,fe.p.y,P.position.z),Dh.copy(L.quaternion).multiply(new Dt().setFromAxisAngle(Tp,k.a)).multiply(A),Ll.copy(fe.p),Ll.y+=Math.sin(ce*.9)*.12,Se.matrix.compose(Ll,Dh,fe.s),Se.visible=P.position.z>40,Be}let Nh=new $e,Fh=new Xs,zh=new Hn,Hh=new xe(.95,.9,.82),mi=new R,Bh=new R,Oh={palace:{rays:.35,thresh:.85,sat:1.18,con:.36,warm:.3},mithraki:{rays:.3,thresh:.9,sat:1.12,con:.34,warm:.2},revisetax:{rays:.55,thresh:.8,sat:1.12,con:.36,warm:.4},bisikaapi:{rays:.9,thresh:.62,sat:1.18,con:.4,warm:.25},glavida:{rays:.3,thresh:.75,sat:1.15,con:.38,warm:.1},innovious:{rays:.4,thresh:.8,sat:1.15,con:.34,warm:-.3},houseofmoh:{rays:.45,thresh:.7,sat:1.1,con:.34,warm:.15},cosmos:{rays:.15,thresh:.85,sat:1.05,con:.36,warm:-.8},perseid:{rays:0,thresh:1,sat:1.1,con:.3,warm:-.5}},Dl=null;document.fonts.load("600 150px Satoshi").catch(()=>{}).finally(()=>{Dl=Rs(["Nomadiic Horse Designs"],E)});let Rp=(K,ce)=>{let oe=Dl,Be=ut.smoothstep(ce,.5,2.6)*(1-ut.smoothstep(K,Js*.75,Js*1.15));if(oe.visible=Be>.001,!oe.visible)return;let ke=18,Ve=Math.tan(ut.degToRad(P.fov/2)),st=ut.clamp((1.1-P.aspect)/.6,0,1);Cs.set(0,0,-1).applyQuaternion(P.quaternion),Hi.set(0,1,0).applyQuaternion(P.quaternion),oe.position.copy(P.position).addScaledVector(Cs,ke).addScaledVector(Hi,ke*Ve*ut.lerp(.62,.5,st)),oe.quaternion.copy(P.quaternion),oe.scale.setScalar(2*ke*Ve*P.aspect*ut.lerp(.62,.9,st)/20),oe.u.uTime.value=ce,oe.u.uAssemble.value=Be,oe.u.uDance.value=.3+(1-Be)*2.2,oe.userData.halo.material.uniforms.uA.value=Be*.6},Ul=new Yr,kh=0,Vh=!0;function sa(){if(!Vh)return;kh=requestAnimationFrame(sa);let K=Math.min(Ul.getDelta(),.05),ce=Ul.elapsedTime;He+=(Ce-He)*(1-Math.exp(-K*3.2)),Uh=K;let oe=-1;for(let Oe=0;Oe<Xt.length;Oe++)He>=En[Oe][0]&&ze[Oe]&&(oe=Oe);if(oe!==rn){rn=oe;for(let Oe=0;Oe<Xt.length;Oe++)(Oe<oe-1||Oe>oe+1)&&zi(Oe);oe>=1&&!Un?(_t(E),Un=!0):oe===0&&Un?(Un=!1,(async()=>{let Oe=new Set;E.traverse(rt=>{for(let ct of[].concat(rt.material||[])){for(let zt of Object.values(ct))zt&&zt.isTexture&&!zt.isRenderTargetTexture&&Oe.add(zt);for(let zt of Object.values(ct.uniforms||{}))zt&&zt.value&&zt.value.isTexture&&!zt.value.isRenderTargetTexture&&Oe.add(zt.value)}});for(let rt of Oe){if(rn!==0)return;b.initTexture(rt),await er()}})()):oe<0&&(Un=!1)}le&&Cl(oe);let Be,ke,Ve;if(oe>=0){let Oe=ze[oe],rt=(He-En[oe][0])/(En[oe][1]-En[oe][0]);Oe.pose(rt,P),Oe.update(ce,K,rt,P),ze.forEach(ct=>{if(ct&&ct!==Oe)for(let zt of ct.huds||[])zt.H.visible=!1});for(let ct of Oe.huds||[])Za(ct.H,ct.at,rt,ce);W.scene=Oe.scene,b.toneMappingExposure=Oe.exposure,Se.visible=!1,Be=Oe.exit,ke=Oe.portalQuad,Ve=ze[oe+1],E.visible&&ne&&(ne.visible=!1)}else{let Oe=Ap(He/ns,ce,K);W.scene=E,Dl&&Rp(Oe,ce-u),b.toneMappingExposure=e.exposure??.95,Be=n1,ke=ne,Ve=ze[0]}ze.forEach(Oe=>{Oe&&Oe.portalQuad&&Oe.portalQuad!==ke&&(Oe.portalQuad.visible=!1)}),oe>=0&&ne&&(ne.visible=!1);let st=Be.origin,Mt=Math.hypot(P.position.x-st[0],P.position.z-st[2]),bt=oe>=0?ze[oe].entry.origin:null,Nn=bt?Math.hypot(P.position.x-bt[0],P.position.z-bt[2]):99,Kn=Mt<1.6||Nn<1||oe<0&&P.position.z<-44||oe>=0&&ze[oe].closeUp?.(P.position);if(P.near<.5!==Kn&&(P.near=Kn?.08:1,P.updateProjectionMatrix()),ke){ke.updateMatrixWorld(),P.updateMatrixWorld(),Nh.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Fh.setFromProjectionMatrix(Nh),ke.geometry.boundingSphere||ke.geometry.computeBoundingSphere(),zh.copy(ke.geometry.boundingSphere).applyMatrix4(ke.matrixWorld),ke.visible=Fh.intersectsSphere(zh)&&(oe>=0||P.position.z<-22);let Oe=ke.material.uniforms,rt=!!Ve;{let ct=oe>=0&&ze[oe].scene.background?ze[oe].scene.background:q.uFogCol.value;Oe.uFog.value.set(ct.r,ct.g,ct.b,ut.smoothstep(Mt,22,120)*.88)}if(Oe.uReady.value=rt?1:0,rt||Oe.uCol.value.copy(oe>=0&&ze[oe].scene.background?ze[oe].scene.background:Hh).lerp(Hh,.5),ke.visible&&rt){let ct=le;Oe.tP.value=ct.texture;let zt=ap(Ve.entry,Be);Re.copy(P),Re.matrixAutoUpdate=!1,Re.matrixWorld.multiplyMatrices(zt,P.matrixWorld),Re.matrixWorldInverse.copy(Re.matrixWorld).invert(),Re.near=.08,Re.updateProjectionMatrix(),Re.matrixWorld.decompose(Re.position,Re.quaternion,Re.scale),Ve.update(ce,K,0,Re);let an=1,jt=1,Zn=-1,si=-1,kn=ke.geometry.attributes.position;for(let nr=0;nr<kn.count;nr++){if(mi.fromBufferAttribute(kn,nr).applyMatrix4(ke.matrixWorld).project(P),mi.z>1){an=-1,jt=-1,Zn=1,si=1;break}an=Math.min(an,mi.x),Zn=Math.max(Zn,mi.x),jt=Math.min(jt,mi.y),si=Math.max(si,mi.y)}let Sn=ct.width,rs=ct.height,Ps=Math.max(0,Math.floor((an*.5+.5)*Sn)-2),Vi=Math.max(0,Math.floor((jt*.5+.5)*rs)-2),ja=Math.min(Sn,Math.ceil((Zn*.5+.5)*Sn)+2)-Ps,Qa=Math.min(rs,Math.ceil((si*.5+.5)*rs)+2)-Vi;ct.scissor.set(Ps,Vi,Math.max(1,ja),Math.max(1,Qa)),ct.scissorTest=!0,b.setRenderTarget(ct),b.render(Ve.scene,Re),ct.scissorTest=!1,b.setRenderTarget(null)}}let ki=0;for(let Oe=0;Oe<Xt.length;Oe++)if(Xt[Oe].veil){let rt=1-ut.smoothstep(Math.abs(He-En[Oe][0]),.0015,.014);rt>ki&&(ki=rt,be.uniforms.uVeilCol.value.setRGB(...Xt[Oe].veil))}be.uniforms.uVeil.value=ki;{let Oe=oe>=0?Xt[oe].key:"palace",rt=Oh[Oe]||Oh.palace,ct=oe>=0?ze[oe].sun:ae,zt=oe<0&&P.position.z<-24;if(ct&&rt.rays>0&&!zt){mi.copy(P.position).addScaledVector(ct,1e3).project(P),P.getWorldDirection(Bh);let jt=ut.smoothstep(Bh.dot(ct),.05,.45),Zn=1-ut.smoothstep(Math.hypot(mi.x,mi.y),1,1.8);$.uniforms.uSun.value.set(mi.x*.5+.5,mi.y*.5+.5),$.uniforms.uOn.value=rt.rays*jt*Zn*(1-ki),$.uniforms.uThresh.value=rt.thresh}else $.uniforms.uOn.value=0;let an=be.uniforms;an.uSat.value+=(rt.sat-an.uSat.value)*.05,an.uCon.value+=(rt.con-an.uCon.value)*.05,an.uWarm.value+=(rt.warm-an.uWarm.value)*.05}let Ot=He;if(C.update(Ot,ce),ce>6&&ot&&ot.value>=1&&(xt.acc+=K,xt.n++,xt.acc>1.2)){let Oe=xt.n/xt.acc;xt.acc=0,xt.n=0,xt.hold=Math.max(0,xt.hold-1);let rt=Math.min(devicePixelRatio,S.pr);if(xt.low=Oe<42?(xt.low||0)+1:0,xt.low>=2&&xt.hold===0&&(xt.q||0)<5){if(xt.q=(xt.q||0)+1,xt.hold=3,xt.low=0,xt.q<=2)xt.pr=Math.max(1,xt.pr-.25),yt();else if(xt.q===3)for(let[ct,zt]of[[Me.geometry,.55],[Fe.geometry,.6]]){let an=ct.index?ct.index.count:ct.attributes.position.count;ct.setDrawRange(0,Math.floor(an*zt/3)*3)}else xt.q===4?$.enabled=!1:(xt.pr=.85,yt());e.debug&&console.log("[nomadiic-rt] quality step",xt.q,"pr",xt.pr)}}if(ot&&ot.value<1&&(ot.value=Math.min(1,ot.value+K*.7)),q.uTime.value=ce,be.uniforms.uTime.value=ce%10,oe<0)ye.update(ce,K,q.uFogCol.value,9e-4),me.update(ce,K),me.mesh.visible=r>.05;else{if(!As[oe]&&ze[oe]){As[oe]=Ya(Xt[oe].key);for(let rt of As[oe])ze[oe].scene.add(rt.mesh)}let Oe=ze[oe].scene.background||q.uFogCol.value;for(let rt of As[oe]||[])rt.leaves?rt.update(ce,K,P,Oe,.03):rt.update(ce,K,Oe,.0012)}if(n){let Oe=P.position.z,rt=oe>=0?Xt[oe].key:"palace",ct=P.position.y,zt=0,an=0,jt=1;oe<0?(zt=ut.smoothstep(Oe,-30,-16),jt=ut.smoothstep(Oe,-26,-18)):rt==="glavida"?(zt=1,an=-23,jt=ct>-24?1:0):rt==="houseofmoh"&&(zt=1,jt=ct>.3?1:0),r+=(zt-r)*Math.min(1,K*3),ze.forEach((Sn,rs)=>{if(Sn&&Sn.sky&&(Xt[rs].key==="glavida"||Xt[rs].key==="houseofmoh")){let Ps=Sn.sky.material.uniforms;Ps.uStorm.value=1,Ps.uT.value=ce}});let Zn=c?0:l.update(K,r>.3&&jt>.5);l.strikeId!==a&&(a=l.strikeId,!c&&r>.3&&jt>.5&&o.strike(P,an));let si=W.scene;Ee.parent!==si&&si.add(Ee),o.group.parent!==si&&si.add(o.group),o.update(Zn*r*jt),be.uniforms.uNight.value=oe<0?0:r*(rt==="houseofmoh"?.55:1),Y.material.uniforms.uNight.value=oe<0?r:0,Y.material.uniforms.uFlash.value=Zn,Y.material.uniforms.uT.value=ce;let kn=oe>=0?ze[oe].sky:null;kn&&kn.material.uniforms.uStorm.value>0&&(kn.material.uniforms.uFlash.value=Zn),s.uStorm.value=oe<0?r:0,Ee.visible=r*jt>.01,Ee.material.uniforms.uA.value=r*jt,Ee.material.uniforms.uFl.value=Zn;{let Sn=r*jt;!c&&Math.abs(Sn-l.mix)>.04&&l.setMix(Sn)}{let Sn=rt==="bisikaapi"?"forest":rt==="houseofmoh"&&jt>.5?"sea":"";!c&&Sn!==l.amb&&l.setAmb(Sn)}}if(P.getWorldDirection(Il),et.uCenter.value.set(P.position.x+Il.x*34,P.position.z+Il.z*34),Ze&&Ne.value<1&&(Ne.value=Math.min(1,Ne.value+K*.8)),n&&c){we.boundingSphere||we.computeBoundingSphere();let Oe=we.boundingSphere;te.copy(Oe.center).applyMatrix4(Se.matrix),pe.set(0,1,0).applyQuaternion(P.quaternion).multiplyScalar(Oe.radius*fe.s.x*.86).add(te),te.project(P),pe.project(P);let rt=i.clientWidth||innerWidth,ct=i.clientHeight||innerHeight;h.setTarget((te.x*.5+.5)*rt,(.5-te.y*.5)*ct,Math.hypot((pe.x-te.x)*.5*rt,(pe.y-te.y)*.5*ct)),P.updateMatrixWorld(),h.setView(P,Se.matrix)}!c||h.diving?I.render(K):h.showing&&(sa.warmN||0)<3&&(sa.warmN=(sa.warmN||0)+1,I.render(K))}return sa(),w(1,"ready"),x=!0,p(),e.debug&&Object.assign(window,{__portal:()=>[le&&[le.width,le.height,le.texture.minFilter,le.texture.magFilter],Ue&&[Ue.width,Ue.height]],__weather:l,__scene:E,__composer:I,__renderer:b,__camera:P,__bloom:j}),{get progress(){return He},set progress(K){Ce=K},ready:$a,destroy(){Vh=!1,cancelAnimationFrame(kh),qn.disconnect(),tt.removeEventListener("wheel",bn),tt.removeEventListener("touchstart",qe),tt.removeEventListener("touchmove",ii),tt.removeEventListener("pointermove",vt),removeEventListener("keydown",Rn),tt.removeEventListener("pointerdown",On),removeEventListener("pointerup",Bi),C.destroy(),E.traverse(K=>{K.geometry?.dispose?.();let ce=K.material;ce&&(Array.isArray(ce)?ce:[ce]).forEach(oe=>oe.dispose())}),I.dispose?.(),b.dispose(),tt.remove(),h&&h.destroy(),l&&l.destroy()}}}export{yw as mount};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
