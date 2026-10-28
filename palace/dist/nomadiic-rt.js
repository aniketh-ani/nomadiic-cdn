var D0=Object.defineProperty;var kd=(i,e)=>()=>(i&&(e=i(i=0)),e);var U0=(i,e)=>{for(var t in e)D0(i,t,{get:e[t],enumerable:!0})};function ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zn[i&255]+Zn[i>>8&255]+Zn[i>>16&255]+Zn[i>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[t&63|128]+Zn[t>>8&255]+"-"+Zn[t>>16&255]+Zn[t>>24&255]+Zn[n&255]+Zn[n>>8&255]+Zn[n>>16&255]+Zn[n>>24&255]).toLowerCase()}function Un(i,e,t){return Math.max(e,Math.min(t,i))}function Xh(i,e){return(i%e+e)%e}function gm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vm(i,e,t){return i!==e?(t-i)/(e-i):0}function oa(i,e,t){return(1-t)*i+t*e}function xm(i,e,t,n){return oa(i,e,1-Math.exp(-t*n))}function ym(i,e=1){return e-Math.abs(Xh(i,e*2)-e)}function _m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bm(i,e){return i+Math.random()*(e-i)}function Em(i){return i*(.5-Math.random())}function Sm(i){i!==void 0&&(Kd=i);let e=Kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tm(i){return i*ra}function Am(i){return i*da}function Rm(i){return(i&i-1)===0&&i!==0}function Cm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Im(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Sp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lm(){let i=fa("canvas");return i.style.display="block",i}function ia(i){i in Zd||(Zd[i]=!0,console.warn(i))}function Dm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Um(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Dc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){lr.fromArray(i,r);let a=s.x*Math.abs(lr.x)+s.y*Math.abs(lr.y)+s.z*Math.abs(lr.z),l=e.dot(lr),c=t.dot(lr),u=n.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function qc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ym(i,e,t,n,s,r,o,a){let l;if(e.side===qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ns,a),l===null)return null;il.copy(a),il.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(il);return c<t.near||c>t.far?null:{distance:c,point:il.clone(),object:i}}function sl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Qa),i.getVertexPosition(l,el),i.getVertexPosition(c,tl);let u=Ym(i,e,t,n,Qa,el,tl,ff);if(u){let d=new A;Vs.getBarycoord(ff,Qa,el,tl,d),s&&(u.uv=Vs.getInterpolatedAttribute(s,a,l,c,d,new oe)),r&&(u.uv1=Vs.getInterpolatedAttribute(r,a,l,c,d,new oe)),o&&(u.normal=Vs.getInterpolatedAttribute(o,a,l,c,d,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new A,materialIndex:0};Vs.getNormal(Qa,el,tl,h.normal),u.face=h,u.barycoord=d}return u}function po(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qn(i){let e={};for(let t=0;t<i.length;t++){let n=po(i[t]);for(let s in n)e[s]=n[s]}return e}function Km(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ap(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}function Rp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qm(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Ux(i,e,t,n,s,r,o){let a=new de(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M}function v(_){let M=!1,x=g(_);x===null?p(a,l):x&&x.isColor&&(p(x,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,M){let x=g(M);x&&(x.isCubeTexture||x.mapping===Zl)?(u===void 0&&(u=new ae(new Nn(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:po(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hr.copy(M.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(hr)),u.material.toneMapped=bt.getTransfer(x.colorSpace)!==Nt,(d!==x||h!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ae(new St(2,2),new ve({name:"BackgroundMaterial",uniforms:po(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=bt.getTransfer(x.colorSpace)!==Nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,M){_.getRGB(ol,Ap(i)),n.buffers.color.setClear(ol.r,ol.g,ol.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:m}}function Fx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(y,C,I,D,F){let B=!1,N=d(D,I,C);r!==N&&(r=N,c(r.object)),B=f(y,D,I,F),B&&g(y,D,I,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(y,C,I,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,C,I){let D=I.wireframe===!0,F=n[y.id];F===void 0&&(F={},n[y.id]=F);let B=F[C.id];B===void 0&&(B={},F[C.id]=B);let N=B[D];return N===void 0&&(N=h(l()),B[D]=N),N}function h(y){let C=[],I=[],D=[];for(let F=0;F<t;F++)C[F]=0,I[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,C,I,D){let F=r.attributes,B=C.attributes,N=0,k=I.getAttributes();for(let U in k)if(k[U].location>=0){let Z=F[U],se=B[U];if(se===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;N++}return r.attributesNum!==N||r.index!==D}function g(y,C,I,D){let F={},B=C.attributes,N=0,k=I.getAttributes();for(let U in k)if(k[U].location>=0){let Z=B[U];Z===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));let se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),F[U]=se,N++}r.attributes=F,r.attributesNum=N,r.index=D}function v(){let y=r.newAttributes;for(let C=0,I=y.length;C<I;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){let I=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;I[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),F[y]!==C&&(i.vertexAttribDivisor(y,C),F[y]=C)}function _(){let y=r.newAttributes,C=r.enabledAttributes;for(let I=0,D=C.length;I<D;I++)C[I]!==y[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function M(y,C,I,D,F,B,N){N===!0?i.vertexAttribIPointer(y,C,I,F,B):i.vertexAttribPointer(y,C,I,D,F,B)}function x(y,C,I,D){v();let F=D.attributes,B=I.getAttributes(),N=C.defaultAttributeValues;for(let k in B){let U=B[k];if(U.location>=0){let H=F[k];if(H===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),H!==void 0){let Z=H.normalized,se=H.itemSize,fe=e.get(H);if(fe===void 0)continue;let _e=fe.buffer,q=fe.type,ne=fe.bytesPerElement,re=q===i.INT||q===i.UNSIGNED_INT||H.gpuType===zh;if(H.isInterleavedBufferAttribute){let K=H.data,he=K.stride,Ue=H.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<U.locationSize;Ee++)p(U.location+Ee,K.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<U.locationSize;Ee++)m(U.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Ee=0;Ee<U.locationSize;Ee++)M(U.location+Ee,se/U.locationSize,q,Z,he*ne,(Ue+se/U.locationSize*Ee)*ne,re)}else{if(H.isInstancedBufferAttribute){for(let K=0;K<U.locationSize;K++)p(U.location+K,H.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let K=0;K<U.locationSize;K++)m(U.location+K);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let K=0;K<U.locationSize;K++)M(U.location+K,se/U.locationSize,q,Z,se*ne,se/U.locationSize*K*ne,re)}}else if(N!==void 0){let Z=N[k];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(U.location,Z);break;case 3:i.vertexAttrib3fv(U.location,Z);break;case 4:i.vertexAttrib4fv(U.location,Z);break;default:i.vertexAttrib1fv(U.location,Z)}}}}_()}function T(){R();for(let y in n){let C=n[y];for(let I in C){let D=C[I];for(let F in D)u(D[F].object),delete D[F];delete C[I]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let I in C){let D=C[I];for(let F in D)u(D[F].object),delete D[F];delete C[I]}delete n[y.id]}function E(y){for(let C in n){let I=n[C];if(I[y.id]===void 0)continue;let D=I[y.id];for(let F in D)u(D[F].object),delete D[F];delete I[y.id]}}function R(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Nx(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==yi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Es&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==es&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function Hx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new vi,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:n,M=_*4,x=p.clippingState||null;l.value=x,x=u(g,h,M,f);for(let T=0;T!==M;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==v;++M,x+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Bx(i){let e=new WeakMap;function t(o,a){return a===xu?o.mapping=lo:a===yu&&(o.mapping=co),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xu||a===yu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qs(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function kx(i){let e=[],t=[],n=[],s=i,r=i-no+1+gf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-no?l=gf[o-i+no-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){let E=b%3*2/3-1,R=b>2?0:-1,w=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(w,v*g*b),M.set(h,m*g*b);let y=[b,b,b,b,b,b];x.set(y,p*g*b)}let T=new Ye;T.setAttribute("position",new qe(_,v)),T.setAttribute("uv",new qe(M,m)),T.setAttribute("faceIndex",new qe(x,p)),e.push(T),s>no&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yf(i,e,t){let n=new jt(i,e,t);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function al(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ox(i,e,t){let n=new Float32Array(mr),s=new A(0,1,0);return new ve({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function _f(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Mf(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function Vx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xu||l===yu,u=l===lo||l===co;if(c||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ys(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Ys(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ia("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gx(i,e,t,n){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let M=0,x=_.length;M<x;M+=3){let T=_[M+0],b=_[M+1],E=_[M+2];h.push(T,b,b,E,E,T)}}else if(g!==void 0){let _=g.array;v=g.version;for(let M=0,x=_.length/3-1;M<x;M+=3){let T=M+0,b=M+1,E=M+2;h.push(T,b,b,E,E,T)}}else return;let m=new(Sp(h)?Ll:Il)(h,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Xx(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yx(i,e,t){let n=new WeakMap,s=new st;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let x=a.attributes.position.count*M,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*T*4*d),E=new Pl(b,x,T,d);E.type=es,E.needsUpdate=!0;let R=M*4;for(let y=0;y<d;y++){let C=m[y],I=p[y],D=_[y],F=x*T*4*y;for(let B=0;B<C.count;B++){let N=B*R;f===!0&&(s.fromBufferAttribute(C,B),b[F+N+0]=s.x,b[F+N+1]=s.y,b[F+N+2]=s.z,b[F+N+3]=0),g===!0&&(s.fromBufferAttribute(I,B),b[F+N+4]=s.x,b[F+N+5]=s.y,b[F+N+6]=s.z,b[F+N+7]=0),v===!0&&(s.fromBufferAttribute(D,B),b[F+N+8]=s.x,b[F+N+9]=s.y,b[F+N+10]=s.z,b[F+N+11]=D.itemSize===4?s.w:1)}}h={count:d,texture:E,size:new oe(x,T)},n.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Kx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Po(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jl(i,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),Tn(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),Tn(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),Tn(t,e)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),Tn(t,n)}}function ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Tf.set(n),i.uniformMatrix3fv(this.addr,!1,Tf),Tn(t,n)}}function ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Sf.set(n),i.uniformMatrix4fv(this.addr,!1,Sf),Tn(t,n)}}function ny(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),Tn(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),Tn(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),Tn(t,e)}}function oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),Tn(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),Tn(t,e)}}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),Tn(t,e)}}function uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wf.compareFunction=bp,r=wf):r=Cp,t.setTexture2D(e||r,s)}function hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ip,s)}function dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Lp,s)}function fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pp,s)}function py(i){switch(i){case 5126:return Zx;case 35664:return $x;case 35665:return Jx;case 35666:return jx;case 35674:return Qx;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return ry;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return fy}}function my(i,e){i.uniform1fv(this.addr,e)}function gy(i,e){let t=Po(e,this.size,2);i.uniform2fv(this.addr,t)}function vy(i,e){let t=Po(e,this.size,3);i.uniform3fv(this.addr,t)}function xy(i,e){let t=Po(e,this.size,4);i.uniform4fv(this.addr,t)}function yy(i,e){let t=Po(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _y(i,e){let t=Po(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function My(i,e){let t=Po(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wy(i,e){i.uniform1iv(this.addr,e)}function by(i,e){i.uniform2iv(this.addr,e)}function Ey(i,e){i.uniform3iv(this.addr,e)}function Sy(i,e){i.uniform4iv(this.addr,e)}function Ty(i,e){i.uniform1uiv(this.addr,e)}function Ay(i,e){i.uniform2uiv(this.addr,e)}function Ry(i,e){i.uniform3uiv(this.addr,e)}function Cy(i,e){i.uniform4uiv(this.addr,e)}function Py(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Cp,r[o])}function Iy(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ip,r[o])}function Ly(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Lp,r[o])}function Dy(i,e,t){let n=this.cache,s=e.length,r=Jl(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),Tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pp,r[o])}function Uy(i){switch(i){case 5126:return my;case 35664:return gy;case 35665:return vy;case 35666:return xy;case 35674:return yy;case 35675:return _y;case 35676:return My;case 5124:case 35670:return wy;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return Sy;case 5125:return Ty;case 36294:return Ay;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}function Rf(i,e){i.seq.push(e),i.map[e.id]=e}function Fy(i,e,t){let n=i.name,s=n.length;for(tu.lastIndex=0;;){let r=tu.exec(n),o=tu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rf(t,c===void 0?new ju(a,i,e):new Qu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new eh(a),Rf(t,d)),t=d}}}function Cf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Hy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function By(i){bt._getMatrix(Pf,bt.workingColorSpace,i);let e=`mat3( ${Pf.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case $l:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function If(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hy(i.getShaderSource(e),o)}else return s}function ky(i,e){let t=By(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Oy(i,e){let t;switch(e){case Lh:t="Linear";break;case Dh:t="Reinhard";break;case Uh:t="Cineon";break;case Fh:t="ACESFilmic";break;case br:t="AgX";break;case Nh:t="Neutral";break;case sm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vy(){bt.getLuminanceCoefficients(ll);let i=ll.x.toFixed(4),e=ll.y.toFixed(4),t=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function Gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function sa(i){return i!==""}function Lf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function th(i){return i.replace(qy,Ky)}function Ky(i,e){let t=mt[e];if(t===void 0){let n=Yy.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}function Uf(i){return i.replace(Zy,$y)}function $y(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Jy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_s&&(e="SHADOWMAP_TYPE_VSM"),e}function jy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function e1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cp:e="ENVMAP_BLENDING_MULTIPLY";break;case nm:e="ENVMAP_BLENDING_MIX";break;case im:e="ENVMAP_BLENDING_ADD";break}return e}function t1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function n1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Jy(t),c=jy(t),u=Qy(t),d=e1(t),h=t1(t),f=Wy(t),g=Gy(r),v=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(m=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gs?"#define TONE_MAPPING":"",t.toneMapping!==Gs?mt.tonemapping_pars_fragment:"",t.toneMapping!==Gs?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),Vy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),o=th(o),o=Lf(o,t),o=Df(o,t),a=th(a),a=Lf(a,t),a=Df(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+m+o,x=_+p+a,T=Cf(s,s.VERTEX_SHADER,M),b=Cf(s,s.FRAGMENT_SHADER,x);s.attachShader(v,T),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(C){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(b).trim(),B=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,b);else{let k=If(s,T,"vertex"),U=If(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+k+`
`+U)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(D===""||F==="")&&(N=!1);N&&(C.diagnostics={runnable:B,programLog:I,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(b),R=new oo(s,v),w=Xy(s,v)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Ny)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}function s1(i,e,t,n,s,r,o){let a=new pa,l=new nh,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,C,I,D){let F=I.fog,B=D.geometry,N=w.isMeshStandardMaterial?I.environment:null,k=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),U=k&&k.mapping===Zl?k.image.height:null,H=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let Z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=Z!==void 0?Z.length:0,fe=0;B.morphAttributes.position!==void 0&&(fe=1),B.morphAttributes.normal!==void 0&&(fe=2),B.morphAttributes.color!==void 0&&(fe=3);let _e,q,ne,re;if(H){let ke=Qi[H];_e=ke.vertexShader,q=ke.fragmentShader}else _e=w.vertexShader,q=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),re=l.getFragmentShaderID(w);let K=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ue=D.isInstancedMesh===!0,Ee=D.isBatchedMesh===!0,Qe=!!w.map,pe=!!w.matcap,je=!!k,z=!!w.aoMap,ze=!!w.lightMap,Ce=!!w.bumpMap,He=!!w.normalMap,ye=!!w.displacementMap,ue=!!w.emissiveMap,le=!!w.metalnessMap,L=!!w.roughnessMap,S=w.anisotropy>0,V=w.clearcoat>0,$=w.dispersion>0,ie=w.iridescence>0,Q=w.sheen>0,we=w.transmission>0,xe=S&&!!w.anisotropyMap,be=V&&!!w.clearcoatMap,nt=V&&!!w.clearcoatNormalMap,me=V&&!!w.clearcoatRoughnessMap,Te=ie&&!!w.iridescenceMap,We=ie&&!!w.iridescenceThicknessMap,tt=Q&&!!w.sheenColorMap,Pe=Q&&!!w.sheenRoughnessMap,ht=!!w.specularMap,at=!!w.specularColorMap,Lt=!!w.specularIntensityMap,O=we&&!!w.transmissionMap,Ae=we&&!!w.thicknessMap,ee=!!w.gradientMap,ce=!!w.alphaMap,Ie=w.alphaTest>0,Me=!!w.alphaHash,et=!!w.extensions,Ot=Gs;w.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let Tt={shaderID:H,shaderType:w.type,shaderName:w.name,vertexShader:_e,fragmentShader:q,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&D._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Co,alphaToCoverage:!!w.alphaToCoverage,map:Qe,matcap:pe,envMap:je,envMapMode:je&&k.mapping,envMapCubeUVHeight:U,aoMap:z,lightMap:ze,bumpMap:Ce,normalMap:He,displacementMap:h&&ye,emissiveMap:ue,normalMapObjectSpace:He&&w.normalMapType===lm,normalMapTangentSpace:He&&w.normalMapType===wp,metalnessMap:le,roughnessMap:L,anisotropy:S,anisotropyMap:xe,clearcoat:V,clearcoatMap:be,clearcoatNormalMap:nt,clearcoatRoughnessMap:me,dispersion:$,iridescence:ie,iridescenceMap:Te,iridescenceThicknessMap:We,sheen:Q,sheenColorMap:tt,sheenRoughnessMap:Pe,specularMap:ht,specularColorMap:at,specularIntensityMap:Lt,transmission:we,transmissionMap:O,thicknessMap:Ae,gradientMap:ee,opaque:w.transparent===!1&&w.blending===Ws&&w.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ie,alphaHash:Me,combine:w.combine,mapUv:Qe&&v(w.map.channel),aoMapUv:z&&v(w.aoMap.channel),lightMapUv:ze&&v(w.lightMap.channel),bumpMapUv:Ce&&v(w.bumpMap.channel),normalMapUv:He&&v(w.normalMap.channel),displacementMapUv:ye&&v(w.displacementMap.channel),emissiveMapUv:ue&&v(w.emissiveMap.channel),metalnessMapUv:le&&v(w.metalnessMap.channel),roughnessMapUv:L&&v(w.roughnessMap.channel),anisotropyMapUv:xe&&v(w.anisotropyMap.channel),clearcoatMapUv:be&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(w.sheenRoughnessMap.channel),specularMapUv:ht&&v(w.specularMap.channel),specularColorMapUv:at&&v(w.specularColorMap.channel),specularIntensityMapUv:Lt&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:Ae&&v(w.thicknessMap.channel),alphaMapUv:ce&&v(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(He||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Qe||ce),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:he,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Qe&&w.map.isVideoTexture===!0&&bt.getTransfer(w.map.colorSpace)===Nt,decodeVideoTextureEmissive:ue&&w.emissiveMap.isVideoTexture===!0&&bt.getTransfer(w.emissiveMap.colorSpace)===Nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gt,flipSided:w.side===qt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:et&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&w.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let C in w.defines)y.push(C),y.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(_(y,w),M(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function _(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function M(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let y=g[w.type],C;if(y){let I=Qi[y];C=os.clone(I.uniforms)}else C=w.uniforms;return C}function T(w,y){let C;for(let I=0,D=u.length;I<D;I++){let F=u[I];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new n1(i,y,w,r),u.push(C)),C}function b(w){if(--w.usedTimes===0){let y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function E(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:R}}function r1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function o1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,f,g,v,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||o1),n.length>1&&n.sort(h||Nf),s.length>1&&s.sort(h||Nf)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function a1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new zf,i.set(n,[o])):s>=r.length?(o=new zf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function l1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new de};break;case"SpotLight":t={position:new A,direction:new A,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function c1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function h1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d1(i){let e=new l1,t=c1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new $e,o=new $e;function a(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,M=0,x=0,T=0,b=0,E=0;c.sort(h1);for(let w=0,y=c.length;w<y;w++){let C=c[w],I=C.color,D=C.intensity,F=C.distance,B=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*D,d+=I.g*D,h+=I.b*D;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],D);E++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,U=t.get(C);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=N,f++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(I).multiplyScalar(D),N.distance=F,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[v]=N;let k=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,k.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[v]=k.matrix,C.castShadow){let U=t.get(C);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=B,x++}v++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(I).multiplyScalar(D),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let k=C.shadow,U=t.get(C);U.shadowIntensity=k.intensity,U.shadowBias=k.bias,U.shadowNormalBias=k.normalBias,U.shadowRadius=k.radius,U.shadowMapSize=k.mapSize,U.shadowCameraNear=k.camera.near,U.shadowCameraFar=k.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=N,g++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(D),N.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=E,n.version=u1++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let M=c[p];if(M.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(M.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let x=n.point[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Hf(i){let e=new d1(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function f1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Hf(i),e.set(s,[a])):r>=o.length?(a=new Hf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function g1(i,e,t){let n=new Ss,s=new oe,r=new oe,o=new st,a=new sh({depthPacking:am}),l=new rh,c={},u=t.maxTextureSize,d={[ns]:qt,[qt]:ns,[gt]:gt},h=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ae(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lp;let p=this.type;this.render=function(b,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let w=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Ri),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let D=p!==_s&&this.type===_s,F=p===_s&&this.type!==_s;for(let B=0,N=b.length;B<N;B++){let k=b[B],U=k.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let H=U.getFrameExtents();if(s.multiply(H),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,U.mapSize.y=r.y)),U.map===null||D===!0||F===!0){let se=this.type!==_s?{minFilter:_i,magFilter:_i}:{};U.map!==null&&U.map.dispose(),U.map=new jt(s.x,s.y,se),U.map.texture.name=k.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();let Z=U.getViewportCount();for(let se=0;se<Z;se++){let fe=U.getViewport(se);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),I.viewport(o),U.updateMatrices(k,se),n=U.getFrustum(),x(E,R,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===_s&&_(U,R),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,y,C)};function _(b,E){let R=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new jt(s.x,s.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,R,h,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,R,f,v,null)}function M(b,E,R,w){let y=null,C=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let I=y.uuid,D=E.uuid,F=c[I];F===void 0&&(F={},c[I]=F);let B=F[D];B===void 0&&(B=y.clone(),F[D]=B,E.addEventListener("dispose",T)),y=B}if(y.visible=E.visible,y.wireframe=E.wireframe,w===_s?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let I=i.properties.get(y);I.light=R}return y}function x(b,E,R,w,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===_s)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let D=e.update(b),F=b.material;if(Array.isArray(F)){let B=D.groups;for(let N=0,k=B.length;N<k;N++){let U=B[N],H=F[U.materialIndex];if(H&&H.visible){let Z=M(b,H,w,y);b.onBeforeShadow(i,b,E,R,D,Z,U),i.renderBufferDirect(R,null,D,Z,b,U),b.onAfterShadow(i,b,E,R,D,Z,U)}}}else if(F.visible){let B=M(b,F,w,y);b.onBeforeShadow(i,b,E,R,D,B,null),i.renderBufferDirect(R,null,D,B,b,null),b.onAfterShadow(i,b,E,R,D,B,null)}}let I=b.children;for(let D=0,F=I.length;D<F;D++)x(I[D],E,R,w,y)}function T(b){b.target.removeEventListener("dispose",T);for(let R in c){let w=c[R],y=b.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function x1(i,e){function t(){let O=!1,Ae=new st,ee=null,ce=new st(0,0,0,0);return{setMask:function(Ie){ee!==Ie&&!O&&(i.colorMask(Ie,Ie,Ie,Ie),ee=Ie)},setLocked:function(Ie){O=Ie},setClear:function(Ie,Me,et,Ot,Tt){Tt===!0&&(Ie*=Ot,Me*=Ot,et*=Ot),Ae.set(Ie,Me,et,Ot),ce.equals(Ae)===!1&&(i.clearColor(Ie,Me,et,Ot),ce.copy(Ae))},reset:function(){O=!1,ee=null,ce.set(-1,0,0,0)}}}function n(){let O=!1,Ae=!1,ee=null,ce=null,Ie=null;return{setReversed:function(Me){if(Ae!==Me){let et=e.get("EXT_clip_control");Ae?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let Ot=Ie;Ie=null,this.setClear(Ot)}Ae=Me},getReversed:function(){return Ae},setTest:function(Me){Me?K(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Me){ee!==Me&&!O&&(i.depthMask(Me),ee=Me)},setFunc:function(Me){if(Ae&&(Me=v1[Me]),ce!==Me){switch(Me){case hu:i.depthFunc(i.NEVER);break;case du:i.depthFunc(i.ALWAYS);break;case fu:i.depthFunc(i.LESS);break;case ao:i.depthFunc(i.LEQUAL);break;case pu:i.depthFunc(i.EQUAL);break;case mu:i.depthFunc(i.GEQUAL);break;case gu:i.depthFunc(i.GREATER);break;case vu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Me}},setLocked:function(Me){O=Me},setClear:function(Me){Ie!==Me&&(Ae&&(Me=1-Me),i.clearDepth(Me),Ie=Me)},reset:function(){O=!1,ee=null,ce=null,Ie=null,Ae=!1}}}function s(){let O=!1,Ae=null,ee=null,ce=null,Ie=null,Me=null,et=null,Ot=null,Tt=null;return{setTest:function(ke){O||(ke?K(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(ke){Ae!==ke&&!O&&(i.stencilMask(ke),Ae=ke)},setFunc:function(ke,yn,wi){(ee!==ke||ce!==yn||Ie!==wi)&&(i.stencilFunc(ke,yn,wi),ee=ke,ce=yn,Ie=wi)},setOp:function(ke,yn,wi){(Me!==ke||et!==yn||Ot!==wi)&&(i.stencilOp(ke,yn,wi),Me=ke,et=yn,Ot=wi)},setLocked:function(ke){O=ke},setClear:function(ke){Tt!==ke&&(i.clearStencil(ke),Tt=ke)},reset:function(){O=!1,Ae=null,ee=null,ce=null,Ie=null,Me=null,et=null,Ot=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,M=null,x=null,T=null,b=null,E=new de(0,0,0),R=0,w=!1,y=null,C=null,I=null,D=null,F=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,k=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=k>=1):U.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=k>=2);let H=null,Z={},se=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),_e=new st().fromArray(se),q=new st().fromArray(fe);function ne(O,Ae,ee,ce){let Ie=new Uint8Array(4),Me=i.createTexture();i.bindTexture(O,Me),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<ee;et++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Ae+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Me}let re={};re[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(ao),Ce(!1),He(Od),K(i.CULL_FACE),z(Ri);function K(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function he(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Ue(O,Ae){return d[O]!==Ae?(i.bindFramebuffer(O,Ae),d[O]=Ae,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ae),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ee(O,Ae){let ee=f,ce=!1;if(O){ee=h.get(Ae),ee===void 0&&(ee=[],h.set(Ae,ee));let Ie=O.textures;if(ee.length!==Ie.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,et=Ie.length;Me<et;Me++)ee[Me]=i.COLOR_ATTACHMENT0+Me;ee.length=Ie.length,ce=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,ce=!0);ce&&i.drawBuffers(ee)}function Qe(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let pe={[pr]:i.FUNC_ADD,[B0]:i.FUNC_SUBTRACT,[k0]:i.FUNC_REVERSE_SUBTRACT};pe[O0]=i.MIN,pe[V0]=i.MAX;let je={[W0]:i.ZERO,[G0]:i.ONE,[X0]:i.SRC_COLOR,[cu]:i.SRC_ALPHA,[J0]:i.SRC_ALPHA_SATURATE,[Z0]:i.DST_COLOR,[Y0]:i.DST_ALPHA,[q0]:i.ONE_MINUS_SRC_COLOR,[uu]:i.ONE_MINUS_SRC_ALPHA,[$0]:i.ONE_MINUS_DST_COLOR,[K0]:i.ONE_MINUS_DST_ALPHA,[j0]:i.CONSTANT_COLOR,[Q0]:i.ONE_MINUS_CONSTANT_COLOR,[em]:i.CONSTANT_ALPHA,[tm]:i.ONE_MINUS_CONSTANT_ALPHA};function z(O,Ae,ee,ce,Ie,Me,et,Ot,Tt,ke){if(O===Ri){v===!0&&(he(i.BLEND),v=!1);return}if(v===!1&&(K(i.BLEND),v=!0),O!==H0){if(O!==m||ke!==w){if((p!==pr||x!==pr)&&(i.blendEquation(i.FUNC_ADD),p=pr,x=pr),ke)switch(O){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dt:i.blendFunc(i.ONE,i.ONE);break;case Vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,M=null,T=null,b=null,E.set(0,0,0),R=0,m=O,w=ke}return}Ie=Ie||Ae,Me=Me||ee,et=et||ce,(Ae!==p||Ie!==x)&&(i.blendEquationSeparate(pe[Ae],pe[Ie]),p=Ae,x=Ie),(ee!==_||ce!==M||Me!==T||et!==b)&&(i.blendFuncSeparate(je[ee],je[ce],je[Me],je[et]),_=ee,M=ce,T=Me,b=et),(Ot.equals(E)===!1||Tt!==R)&&(i.blendColor(Ot.r,Ot.g,Ot.b,Tt),E.copy(Ot),R=Tt),m=O,w=!1}function ze(O,Ae){O.side===gt?he(i.CULL_FACE):K(i.CULL_FACE);let ee=O.side===qt;Ae&&(ee=!ee),Ce(ee),O.blending===Ws&&O.transparent===!1?z(Ri):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ce=O.stencilWrite;a.setTest(ce),ce&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function He(O){O!==F0?(K(i.CULL_FACE),O!==C&&(O===Od?i.cullFace(i.BACK):O===N0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),C=O}function ye(O){O!==I&&(N&&i.lineWidth(O),I=O)}function ue(O,Ae,ee){O?(K(i.POLYGON_OFFSET_FILL),(D!==Ae||F!==ee)&&(i.polygonOffset(Ae,ee),D=Ae,F=ee)):he(i.POLYGON_OFFSET_FILL)}function le(O){O?K(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+B-1),H!==O&&(i.activeTexture(O),H=O)}function S(O,Ae,ee){ee===void 0&&(H===null?ee=i.TEXTURE0+B-1:ee=H);let ce=Z[ee];ce===void 0&&(ce={type:void 0,texture:void 0},Z[ee]=ce),(ce.type!==O||ce.texture!==Ae)&&(H!==ee&&(i.activeTexture(ee),H=ee),i.bindTexture(O,Ae||re[O]),ce.type=O,ce.texture=Ae)}function V(){let O=Z[H];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(O){_e.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),_e.copy(O))}function Pe(O){q.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),q.copy(O))}function ht(O,Ae){let ee=c.get(Ae);ee===void 0&&(ee=new WeakMap,c.set(Ae,ee));let ce=ee.get(O);ce===void 0&&(ce=i.getUniformBlockIndex(Ae,O.name),ee.set(O,ce))}function at(O,Ae){let ce=c.get(Ae).get(O);l.get(Ae)!==ce&&(i.uniformBlockBinding(Ae,ce,O.__bindingPointIndex),l.set(Ae,ce))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},H=null,Z={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,M=null,x=null,T=null,b=null,E=new de(0,0,0),R=0,w=!1,y=null,C=null,I=null,D=null,F=null,_e.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:he,bindFramebuffer:Ue,drawBuffers:Ee,useProgram:Qe,setBlending:z,setMaterial:ze,setFlipSided:Ce,setCullFace:He,setLineWidth:ye,setPolygonOffset:ue,setScissorTest:le,activeTexture:L,bindTexture:S,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:ie,texImage2D:Te,texImage3D:We,updateUBOMapping:ht,uniformBlockBinding:at,texStorage2D:nt,texStorage3D:me,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:xe,compressedTexSubImage3D:be,scissor:tt,viewport:Pe,reset:Lt}}function Bf(i,e,t,n){let s=y1(n);switch(t){case pp:return i*e;case gp:return i*e;case vp:return i*e*2;case kh:return i*e/s.components*s.byteLength;case Oh:return i*e/s.components*s.byteLength;case xp:return i*e*2/s.components*s.byteLength;case Vh:return i*e*2/s.components*s.byteLength;case mp:return i*e*3/s.components*s.byteLength;case yi:return i*e*4/s.components*s.byteLength;case Wh:return i*e*4/s.components*s.byteLength;case Ml:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bl:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wu:case Eu:return Math.max(i,16)*Math.max(e,8)/4;case Mu:case bu:return Math.max(i,8)*Math.max(e,8)/2;case Su:case Tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Du:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ku:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Vu:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yp:case Gu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xu:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y1(i){switch(i){case Es:case hp:return{byteLength:1,components:1};case ha:case dp:case sn:return{byteLength:2,components:1};case Hh:case Bh:return{byteLength:2,components:4};case vr:case zh:case es:return{byteLength:4,components:1};case fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):fa("canvas")}function v(L,S,V){let $=1,ie=le(L);if((ie.width>V||ie.height>V)&&($=V/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Q=Math.floor($*ie.width),we=Math.floor($*ie.height);d===void 0&&(d=g(Q,we));let xe=S?g(Q,we):d;return xe.width=Q,xe.height=we,xe.getContext("2d").drawImage(L,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+we+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,S,V,$,ie=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=S;if(S===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),S===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),S===i.RGBA){let we=ie?$l:bt.getTransfer($);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=we===Nt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(L,S){let V;return L?S===null||S===vr||S===uo?V=i.DEPTH24_STENCIL8:S===es?V=i.DEPTH32F_STENCIL8:S===ha&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vr||S===uo?V=i.DEPTH_COMPONENT24:S===es?V=i.DEPTH_COMPONENT32F:S===ha&&(V=i.DEPTH_COMPONENT16),V}function T(L,S){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function b(L){let S=L.target;S.removeEventListener("dispose",b),R(S),S.isVideoTexture&&u.delete(S)}function E(L){let S=L.target;S.removeEventListener("dispose",E),y(S)}function R(L){let S=n.get(L);if(S.__webglInit===void 0)return;let V=L.source,$=h.get(V);if($){let ie=$[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(L),Object.keys($).length===0&&h.delete(V)}n.remove(L)}function w(L){let S=n.get(L);i.deleteTexture(S.__webglTexture);let V=L.source,$=h.get(V);delete $[S.__cacheKey],o.memory.textures--}function y(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ie=0;ie<S.__webglFramebuffer[$].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[$][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=L.textures;for(let $=0,ie=V.length;$<ie;$++){let Q=n.get(V[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(L)}let C=0;function I(){C=0}function D(){let L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function F(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function B(L,S){let V=n.get(L);if(L.isVideoTexture&&ye(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){let $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,L,S);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function N(L,S){let V=n.get(L);if(L.version>0&&V.__version!==L.version){q(V,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function k(L,S){let V=n.get(L);if(L.version>0&&V.__version!==L.version){q(V,L,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function U(L,S){let V=n.get(L);if(L.version>0&&V.__version!==L.version){ne(V,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let H={[gr]:i.REPEAT,[Ms]:i.CLAMP_TO_EDGE,[_u]:i.MIRRORED_REPEAT},Z={[_i]:i.NEAREST,[rm]:i.NEAREST_MIPMAP_NEAREST,[Va]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Rc]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},se={[cm]:i.NEVER,[mm]:i.ALWAYS,[um]:i.LESS,[bp]:i.LEQUAL,[hm]:i.EQUAL,[pm]:i.GEQUAL,[dm]:i.GREATER,[fm]:i.NOTEQUAL};function fe(L,S){if(S.type===es&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===Rc||S.magFilter===Va||S.magFilter===xi||S.minFilter===tn||S.minFilter===Rc||S.minFilter===Va||S.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,H[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,H[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,H[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Z[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_i||S.minFilter!==Va&&S.minFilter!==xi||S.type===es&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function _e(L,S){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",b));let $=S.source,ie=h.get($);ie===void 0&&(ie={},h.set($,ie));let Q=F(S);if(Q!==L.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[Q].usedTimes++;let we=ie[L.__cacheKey];we!==void 0&&(ie[L.__cacheKey].usedTimes--,we.usedTimes===0&&w(S)),L.__cacheKey=Q,L.__webglTexture=ie[Q].texture}return V}function q(L,S,V){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);let ie=_e(L,S),Q=S.source;t.bindTexture($,L.__webglTexture,i.TEXTURE0+V);let we=n.get(Q);if(Q.version!==we.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);let xe=bt.getPrimaries(bt.workingColorSpace),be=S.colorSpace===Mn?null:bt.getPrimaries(S.colorSpace),nt=S.colorSpace===Mn||xe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let me=v(S.image,!1,s.maxTextureSize);me=ue(S,me);let Te=r.convert(S.format,S.colorSpace),We=r.convert(S.type),tt=M(S.internalFormat,Te,We,S.colorSpace,S.isVideoTexture);fe($,S);let Pe,ht=S.mipmaps,at=S.isVideoTexture!==!0,Lt=we.__version===void 0||ie===!0,O=Q.dataReady,Ae=T(S,me);if(S.isDepthTexture)tt=x(S.format===ho,S.type),Lt&&(at?t.texStorage2D(i.TEXTURE_2D,1,tt,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,tt,me.width,me.height,0,Te,We,null));else if(S.isDataTexture)if(ht.length>0){at&&Lt&&t.texStorage2D(i.TEXTURE_2D,Ae,tt,ht[0].width,ht[0].height);for(let ee=0,ce=ht.length;ee<ce;ee++)Pe=ht[ee],at?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Te,We,Pe.data):t.texImage2D(i.TEXTURE_2D,ee,tt,Pe.width,Pe.height,0,Te,We,Pe.data);S.generateMipmaps=!1}else at?(Lt&&t.texStorage2D(i.TEXTURE_2D,Ae,tt,me.width,me.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Te,We,me.data)):t.texImage2D(i.TEXTURE_2D,0,tt,me.width,me.height,0,Te,We,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){at&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,tt,ht[0].width,ht[0].height,me.depth);for(let ee=0,ce=ht.length;ee<ce;ee++)if(Pe=ht[ee],S.format!==yi)if(Te!==null)if(at){if(O)if(S.layerUpdates.size>0){let Ie=Bf(Pe.width,Pe.height,S.format,S.type);for(let Me of S.layerUpdates){let et=Pe.data.subarray(Me*Ie/Pe.data.BYTES_PER_ELEMENT,(Me+1)*Ie/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Me,Pe.width,Pe.height,1,Te,et)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,Te,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,tt,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,Te,We,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,tt,Pe.width,Pe.height,me.depth,0,Te,We,Pe.data)}else{at&&Lt&&t.texStorage2D(i.TEXTURE_2D,Ae,tt,ht[0].width,ht[0].height);for(let ee=0,ce=ht.length;ee<ce;ee++)Pe=ht[ee],S.format!==yi?Te!==null?at?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Te,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,tt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Te,We,Pe.data):t.texImage2D(i.TEXTURE_2D,ee,tt,Pe.width,Pe.height,0,Te,We,Pe.data)}else if(S.isDataArrayTexture)if(at){if(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,tt,me.width,me.height,me.depth),O)if(S.layerUpdates.size>0){let ee=Bf(me.width,me.height,S.format,S.type);for(let ce of S.layerUpdates){let Ie=me.data.subarray(ce*ee/me.data.BYTES_PER_ELEMENT,(ce+1)*ee/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,Te,We,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Te,We,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,me.width,me.height,me.depth,0,Te,We,me.data);else if(S.isData3DTexture)at?(Lt&&t.texStorage3D(i.TEXTURE_3D,Ae,tt,me.width,me.height,me.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Te,We,me.data)):t.texImage3D(i.TEXTURE_3D,0,tt,me.width,me.height,me.depth,0,Te,We,me.data);else if(S.isFramebufferTexture){if(Lt)if(at)t.texStorage2D(i.TEXTURE_2D,Ae,tt,me.width,me.height);else{let ee=me.width,ce=me.height;for(let Ie=0;Ie<Ae;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,tt,ee,ce,0,Te,We,null),ee>>=1,ce>>=1}}else if(ht.length>0){if(at&&Lt){let ee=le(ht[0]);t.texStorage2D(i.TEXTURE_2D,Ae,tt,ee.width,ee.height)}for(let ee=0,ce=ht.length;ee<ce;ee++)Pe=ht[ee],at?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Te,We,Pe):t.texImage2D(i.TEXTURE_2D,ee,tt,Te,We,Pe);S.generateMipmaps=!1}else if(at){if(Lt){let ee=le(me);t.texStorage2D(i.TEXTURE_2D,Ae,tt,ee.width,ee.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,We,me)}else t.texImage2D(i.TEXTURE_2D,0,tt,Te,We,me);m(S)&&p($),we.__version=Q.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ne(L,S,V){if(S.image.length!==6)return;let $=_e(L,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);let Q=n.get(ie);if(ie.version!==Q.__version||$===!0){t.activeTexture(i.TEXTURE0+V);let we=bt.getPrimaries(bt.workingColorSpace),xe=S.colorSpace===Mn?null:bt.getPrimaries(S.colorSpace),be=S.colorSpace===Mn||we===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let nt=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let ce=0;ce<6;ce++)!nt&&!me?Te[ce]=v(S.image[ce],!0,s.maxCubemapSize):Te[ce]=me?S.image[ce].image:S.image[ce],Te[ce]=ue(S,Te[ce]);let We=Te[0],tt=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),ht=M(S.internalFormat,tt,Pe,S.colorSpace),at=S.isVideoTexture!==!0,Lt=Q.__version===void 0||$===!0,O=ie.dataReady,Ae=T(S,We);fe(i.TEXTURE_CUBE_MAP,S);let ee;if(nt){at&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ht,We.width,We.height);for(let ce=0;ce<6;ce++){ee=Te[ce].mipmaps;for(let Ie=0;Ie<ee.length;Ie++){let Me=ee[Ie];S.format!==yi?tt!==null?at?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,Me.width,Me.height,tt,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,ht,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,Me.width,Me.height,tt,Pe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,ht,Me.width,Me.height,0,tt,Pe,Me.data)}}}else{if(ee=S.mipmaps,at&&Lt){ee.length>0&&Ae++;let ce=le(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ht,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){at?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Te[ce].width,Te[ce].height,tt,Pe,Te[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ht,Te[ce].width,Te[ce].height,0,tt,Pe,Te[ce].data);for(let Ie=0;Ie<ee.length;Ie++){let et=ee[Ie].image[ce].image;at?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,et.width,et.height,tt,Pe,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,ht,et.width,et.height,0,tt,Pe,et.data)}}else{at?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,tt,Pe,Te[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ht,tt,Pe,Te[ce]);for(let Ie=0;Ie<ee.length;Ie++){let Me=ee[Ie];at?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,tt,Pe,Me.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,ht,tt,Pe,Me.image[ce])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ie.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function re(L,S,V,$,ie,Q){let we=r.convert(V.format,V.colorSpace),xe=r.convert(V.type),be=M(V.internalFormat,we,xe,V.colorSpace),nt=n.get(S),me=n.get(V);if(me.__renderTarget=S,!nt.__hasExternalTextures){let Te=Math.max(1,S.width>>Q),We=Math.max(1,S.height>>Q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,be,Te,We,S.depth,0,we,xe,null):t.texImage2D(ie,Q,be,Te,We,0,we,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),He(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ie,me.__webglTexture,0,Ce(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ie,me.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(L,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){let $=S.depthTexture,ie=$&&$.isDepthTexture?$.type:null,Q=x(S.stencilBuffer,ie),we=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=Ce(S);He(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,Q,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,L)}else{let $=S.textures;for(let ie=0;ie<$.length;ie++){let Q=$[ie],we=r.convert(Q.format,Q.colorSpace),xe=r.convert(Q.type),be=M(Q.internalFormat,we,xe,Q.colorSpace),nt=Ce(S);V&&He(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,be,S.width,S.height):He(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);let ie=$.__webglTexture,Q=Ce(S);if(S.depthTexture.format===so)He(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(S.depthTexture.format===ho)He(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ue(L){let S=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=$}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,L)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),K(S.__webglDepthbuffer[$],L,!1);else{let ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,L,!1);else{let $=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(L,S,V){let $=n.get(L);S!==void 0&&re($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ue(L)}function Qe(L){let S=L.texture,V=n.get(L),$=n.get(S);L.addEventListener("dispose",E);let ie=L.textures,Q=L.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[xe]=[];for(let be=0;be<S.mipmaps.length;be++)V.__webglFramebuffer[xe][be]=i.createFramebuffer()}else V.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)V.__webglFramebuffer[xe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(we)for(let xe=0,be=ie.length;xe<be;xe++){let nt=n.get(ie[xe]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&He(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){let be=ie[xe];V.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[xe]);let nt=r.convert(be.format,be.colorSpace),me=r.convert(be.type),Te=M(be.internalFormat,nt,me,be.colorSpace,L.isXRRenderTarget===!0),We=Ce(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Te,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,V.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),K(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),fe(i.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)re(V.__webglFramebuffer[xe][be],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else re(V.__webglFramebuffer[xe],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let xe=0,be=ie.length;xe<be;xe++){let nt=ie[xe],me=n.get(nt);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),fe(i.TEXTURE_2D,nt),re(V.__webglFramebuffer,L,nt,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(nt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,$.__webglTexture),fe(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)re(V.__webglFramebuffer[be],L,S,i.COLOR_ATTACHMENT0,xe,be);else re(V.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,xe,0);m(S)&&p(xe),t.unbindTexture()}L.depthBuffer&&Ue(L)}function pe(L){let S=L.textures;for(let V=0,$=S.length;V<$;V++){let ie=S[V];if(m(ie)){let Q=_(L),we=n.get(ie).__webglTexture;t.bindTexture(Q,we),p(Q),t.unbindTexture()}}}let je=[],z=[];function ze(L){if(L.samples>0){if(He(L)===!1){let S=L.textures,V=L.width,$=L.height,ie=i.COLOR_BUFFER_BIT,Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(L),xe=S.length>1;if(xe)for(let be=0;be<S.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<S.length;be++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let nt=n.get(S[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,V,$,0,0,V,$,ie,i.NEAREST),l===!0&&(je.length=0,z.length=0,je.push(i.COLOR_ATTACHMENT0+be),L.depthBuffer&&L.resolveDepthBuffer===!1&&(je.push(Q),z.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let be=0;be<S.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let nt=n.get(S[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ce(L){return Math.min(s.maxSamples,L.samples)}function He(L){let S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(L){let S=o.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function ue(L,S){let V=L.colorSpace,$=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Co&&V!==Mn&&(bt.getTransfer(V)===Nt?($!==yi||ie!==Es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function le(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=U,this.rebindTextures=Ee,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=re,this.useMultisampledRTT=He}function M1(i,e){function t(n,s=Mn){let r,o=bt.getTransfer(s);if(n===Es)return i.UNSIGNED_BYTE;if(n===Hh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hp)return i.BYTE;if(n===dp)return i.SHORT;if(n===ha)return i.UNSIGNED_SHORT;if(n===zh)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===es)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===pp)return i.ALPHA;if(n===mp)return i.RGB;if(n===yi)return i.RGBA;if(n===gp)return i.LUMINANCE;if(n===vp)return i.LUMINANCE_ALPHA;if(n===so)return i.DEPTH_COMPONENT;if(n===ho)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===Oh)return i.RED_INTEGER;if(n===xp)return i.RG;if(n===Vh)return i.RG_INTEGER;if(n===Wh)return i.RGBA_INTEGER;if(n===Ml||n===wl||n===bl||n===El)if(o===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ml)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ml)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mu||n===wu||n===bu||n===Eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===Tu||n===Au)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Su||n===Tu)return o===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Au)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Fu||n===Nu||n===zu||n===Hu||n===Bu||n===ku||n===Ou)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ru)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Iu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Du)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bu)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ku)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ou)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===Vu||n===Wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yp||n===Gu||n===Xu||n===qu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===uo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function T1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ap(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,x=_.envMapRotation;M&&(m.envMap.value=M,dr.copy(x),dr.x*=-1,dr.y*=-1,dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(dr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A1(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let x=M.program;n.uniformBlockBinding(_,x)}function c(_,M){let x=s[_.id];x===void 0&&(g(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",m));let T=M.program;n.updateUBOMapping(_,T);let b=e.render.frame;r[_.id]!==b&&(h(_),r[_.id]=b)}function u(_){let M=d();_.__bindingPointIndex=M;let x=i.createBuffer(),T=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let M=s[_.id],x=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,E=x.length;b<E;b++){let R=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,y=R.length;w<y;w++){let C=R[w];if(f(C,b,w,T)===!0){let I=C.__offset,D=Array.isArray(C.value)?C.value:[C.value],F=0;for(let B=0;B<D.length;B++){let N=D[B],k=v(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,I+F,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,M,x,T){let b=_.value,E=M+"_"+x;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{let R=T[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function g(_){let M=_.uniforms,x=0,T=16;for(let E=0,R=M.length;E<R;E++){let w=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,C=w.length;y<C;y++){let I=w[y],D=Array.isArray(I.value)?I.value:[I.value];for(let F=0,B=D.length;F<B;F++){let N=D[F],k=v(N),U=x%T,H=U%k.boundary,Z=U+H;x+=H,Z!==0&&T-Z<k.storage&&(x+=T-Z),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=k.storage}}}let b=x%T;return b>0&&(x+=T-b),_.__size=x,_.__cache={},this}function v(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){let M=_.target;M.removeEventListener("dispose",m);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function hl(i,e,t,n,s,r){eo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Jo.x=r*eo.x-s*eo.y,Jo.y=s*eo.x+r*eo.y):Jo.copy(eo),i.copy(e),i.x+=Jo.x,i.y+=Jo.y,i.applyMatrix4(Dp)}function pl(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Fl.fromBufferAttribute(o,s),Nl.fromBufferAttribute(o,r),t.distanceSqToSegment(Fl,Nl,iu,Xf)>n)return;iu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(iu);if(!(l<e.near||l>e.far))return{distance:l,point:Xf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Zf(i,e,t,n,s,r,o){let a=ch.distanceSqToPoint(i);if(a<t){let l=new A;ch.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function Yh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function $f(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function C1(i,e){let t=1-i;return t*t*e}function P1(i,e){return 2*(1-i)*i*e}function I1(i,e){return i*i*e}function la(i,e,t,n){return C1(i,e)+P1(i,t)+I1(i,n)}function L1(i,e){let t=1-i;return t*t*t*e}function D1(i,e){let t=1-i;return 3*t*t*i*e}function U1(i,e){return 3*(1-i)*i*i*e}function F1(i,e){return i*i*i*e}function ca(i,e,t,n,s){return L1(i,e)+D1(i,t)+U1(i,n)+F1(i,s)}function Up(i,e,t,n,s){let r,o;if(s===j1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=jf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=jf(r,i[r],i[r+1],o);return o&&jl(o,o.next)&&(wa(o),o=o.next),o}function _r(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(jl(t,t.next)||Qt(t.prev,t,t.next)===0)){if(wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _a(i,e,t,n,s,r,o){if(!i)return;!o&&r&&q1(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?H1(i,n,s,r):z1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),wa(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=B1(_r(i),e,t),_a(i,e,t,n,s,r,2)):o===2&&k1(i,e,t,n,s,r):_a(_r(i),e,t,n,s,r,1);break}}}function z1(i){let e=i.prev,t=i,n=i.next;if(Qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&io(s,a,r,l,o,c,g.x,g.y)&&Qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function H1(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,v=a>l?a>c?a:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,p=gh(f,g,e,t,n),_=gh(v,m,e,t,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=_;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&io(a,u,l,d,c,h,M.x,M.y)&&Qt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&io(a,u,l,d,c,h,x.x,x.y)&&Qt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&io(a,u,l,d,c,h,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&io(a,u,l,d,c,h,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function B1(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!jl(s,r)&&Fp(s,n,n.next,r)&&Ma(s,r)&&Ma(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),wa(n),wa(n.next),n=i=r),n=n.next}while(n!==i);return _r(n)}function k1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Z1(o,a)){let l=Np(o,a);o=_r(o,o.next),l=_r(l,l.next),_a(o,e,t,n,s,r,0),_a(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function O1(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Up(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(K1(c));for(s.sort(V1),r=0;r<s.length;r++)t=W1(s[r],t);return t}function V1(i,e){return i.x-e.x}function W1(i,e){let t=G1(i,e);if(!t)return e;let n=Np(t,i);return _r(n,n.next),_r(t,t.next)}function G1(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&io(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Ma(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&X1(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function X1(i,e){return Qt(i.prev,i,e.prev)<0&&Qt(e.next,i,i.next)<0}function q1(i,e,t,n){let s=i;do s.z===0&&(s.z=gh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y1(s)}function Y1(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function gh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function K1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function io(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Z1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$1(i,e)&&(Ma(i,e)&&Ma(e,i)&&J1(i,e)&&(Qt(i.prev,i,e.prev)||Qt(i,e.prev,e))||jl(i,e)&&Qt(i.prev,i,i.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jl(i,e){return i.x===e.x&&i.y===e.y}function Fp(i,e,t,n){let s=yl(Qt(i,e,t)),r=yl(Qt(i,e,n)),o=yl(Qt(t,n,i)),a=yl(Qt(t,n,e));return!!(s!==r&&o!==a||s===0&&xl(i,t,e)||r===0&&xl(i,n,e)||o===0&&xl(t,i,n)||a===0&&xl(t,e,n))}function xl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function yl(i){return i>0?1:i<0?-1:0}function $1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ma(i,e){return Qt(i.prev,i,i.next)<0?Qt(i,e,i.next)>=0&&Qt(i,i.prev,e)>=0:Qt(i,e,i.prev)<0||Qt(i,i.next,e)<0}function J1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Np(i,e){let t=new vh(i.i,i.x,i.y),n=new vh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jf(i,e,t,n){let s=new vh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function j1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Qf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ep(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Q1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}function _l(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function e_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rp(){return performance.now()}function ap(i,e){return i.distance-e.distance}function Ph(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ph(r[o],e,t,!0)}}var Ih,F0,Od,N0,lp,z0,_s,ns,qt,gt,Ri,Ws,Dt,Vd,Tl,H0,pr,B0,k0,O0,V0,W0,G0,X0,q0,cu,uu,Y0,K0,Z0,$0,J0,j0,Q0,em,tm,hu,du,fu,ao,pu,mu,gu,vu,cp,nm,im,Gs,Lh,Dh,Uh,Fh,sm,br,Nh,up,lo,co,xu,yu,Zl,gr,Ms,_u,_i,rm,Va,tn,Rc,xi,Es,hp,dp,ha,zh,vr,es,sn,Hh,Bh,uo,fp,pp,mp,yi,gp,vp,so,ho,kh,Oh,xp,Vh,Wh,Ml,wl,bl,El,Mu,wu,bu,Eu,Su,Tu,Au,Ru,Cu,Pu,Iu,Lu,Du,Uu,Fu,Nu,zu,Hu,Bu,ku,Ou,Sl,Vu,Wu,yp,Gu,Xu,qu,Al,Yu,Cc,Wd,Gd,Xd,_p,Mp,Gh,om,am,wp,lm,Mn,Xt,Co,$l,Nt,zr,qd,cm,um,hm,bp,dm,fm,pm,mm,Ku,Ep,Yd,ws,Rl,Xs,Zn,Kd,ra,da,dt,oe,ft,Pc,Zd,bt,$d,Jd,jd,Qd,ef,Hr,Zu,Nm,Cl,zm,wn,st,$u,jt,Pl,Ju,zt,A,Lc,tf,ri,ms,ki,Wa,Br,kr,Or,Ns,zs,ar,qo,Ga,Xa,lr,Hm,Yo,Uc,bn,gs,Fc,qa,Hs,Nc,Ya,zc,fo,$e,Vr,Oi,Bm,km,Bs,Ka,mi,nf,sf,En,pa,Om,rf,Wr,vs,Za,Ko,Vm,Wm,of,af,lf,cf,Gm,Gr,Hc,gn,Vi,xs,Bc,ys,Xr,qr,uf,kc,Oc,Vc,Wc,Gc,Xc,Vs,Tp,ks,$a,de,$n,Xm,is,On,mn,Ja,qe,Il,Ll,Je,qm,Ai,Yc,Yr,gi,Zo,Dn,Ye,hf,cr,ja,df,Qa,el,tl,Kc,nl,ff,il,ae,Nn,os,Zm,$m,ve,mo,Os,pf,mf,ln,Kr,Zr,xr,go,qs,Zc,Jm,jm,vi,ur,rl,Ss,St,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,ug,hg,dg,fg,pg,mg,gg,vg,xg,yg,_g,Mg,wg,bg,Eg,Sg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Fg,Ng,zg,Hg,Bg,kg,Og,Vg,Wg,Gg,Xg,qg,Yg,Kg,Zg,$g,Jg,jg,Qg,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,uv,hv,dv,fv,pv,mv,gv,vv,xv,yv,_v,Mv,wv,bv,Ev,Sv,Tv,Av,Rv,Cv,Pv,Iv,Lv,Dv,Uv,Fv,Nv,zv,Hv,Bv,kv,Ov,Vv,Wv,Gv,Xv,qv,Yv,Kv,Zv,$v,Jv,jv,Qv,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,ux,hx,dx,fx,px,mx,gx,vx,xx,yx,_x,Mx,wx,bx,Ex,Sx,Tx,Ax,Rx,Cx,Px,Ix,Lx,mt,Se,Qi,ol,hr,Dx,vo,no,gf,mr,$c,vf,Jc,jc,Qc,eu,fr,$r,xf,Ys,Dl,Cp,wf,Pp,Ip,Lp,bf,Ef,Sf,Tf,Af,ju,Qu,eh,tu,oo,Ny,zy,Pf,ll,qy,Yy,Zy,i1,nh,ih,u1,sh,rh,p1,m1,v1,oh,Fn,w1,aa,b1,E1,ah,lh,dr,S1,xo,Vn,ma,jn,yo,ga,Jr,$o,jr,Qr,eo,Jo,Dp,cl,jo,ul,kf,nu,Of,Ul,yr,Ct,to,Vf,dl,Wf,R1,Qo,ea,vn,_o,Fl,Nl,Gf,ta,fl,iu,Xf,va,qf,Yf,Mo,xa,Kf,ch,ml,gl,nn,Gi,Ci,ya,uh,vl,su,ru,ou,wo,zl,hh,Hl,dh,Bl,fh,kl,Jf,ph,Ol,ss,bo,rs,mh,Eo,N1,ua,Vl,ba,zn,Wl,Wt,So,xh,yh,_h,Xi,Mr,Mh,wh,bh,Gl,wr,Eh,tp,Sh,Kh,Ea,Th,Xl,To,Pi,au,np,ip,ql,sp,na,lu,Ah,Ao,Rh,oi,Yl,Wn,Ro,Zh,t_,$h,n_,i_,s_,r_,o_,a_,l_,Ch,Jt,pM,op,Kl,It=kd(()=>{Ih="170",F0=0,Od=1,N0=2,lp=1,z0=2,_s=3,ns=0,qt=1,gt=2,Ri=0,Ws=1,Dt=2,Vd=3,Tl=4,H0=5,pr=100,B0=101,k0=102,O0=103,V0=104,W0=200,G0=201,X0=202,q0=203,cu=204,uu=205,Y0=206,K0=207,Z0=208,$0=209,J0=210,j0=211,Q0=212,em=213,tm=214,hu=0,du=1,fu=2,ao=3,pu=4,mu=5,gu=6,vu=7,cp=0,nm=1,im=2,Gs=0,Lh=1,Dh=2,Uh=3,Fh=4,sm=5,br=6,Nh=7,up=300,lo=301,co=302,xu=303,yu=304,Zl=306,gr=1e3,Ms=1001,_u=1002,_i=1003,rm=1004,Va=1005,tn=1006,Rc=1007,xi=1008,Es=1009,hp=1010,dp=1011,ha=1012,zh=1013,vr=1014,es=1015,sn=1016,Hh=1017,Bh=1018,uo=1020,fp=35902,pp=1021,mp=1022,yi=1023,gp=1024,vp=1025,so=1026,ho=1027,kh=1028,Oh=1029,xp=1030,Vh=1031,Wh=1033,Ml=33776,wl=33777,bl=33778,El=33779,Mu=35840,wu=35841,bu=35842,Eu=35843,Su=36196,Tu=37492,Au=37496,Ru=37808,Cu=37809,Pu=37810,Iu=37811,Lu=37812,Du=37813,Uu=37814,Fu=37815,Nu=37816,zu=37817,Hu=37818,Bu=37819,ku=37820,Ou=37821,Sl=36492,Vu=36494,Wu=36495,yp=36283,Gu=36284,Xu=36285,qu=36286,Al=2300,Yu=2301,Cc=2302,Wd=2400,Gd=2401,Xd=2402,_p=0,Mp=1,Gh=2,om=3200,am=3201,wp=0,lm=1,Mn="",Xt="srgb",Co="srgb-linear",$l="linear",Nt="srgb",zr=7680,qd=519,cm=512,um=513,hm=514,bp=515,dm=516,fm=517,pm=518,mm=519,Ku=35044,Ep=35048,Yd="300 es",ws=2e3,Rl=2001,Xs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kd=1234567,ra=Math.PI/180,da=180/Math.PI;dt={DEG2RAD:ra,RAD2DEG:da,generateUUID:ts,clamp:Un,euclideanModulo:Xh,mapLinear:gm,inverseLerp:vm,lerp:oa,damp:xm,pingpong:ym,smoothstep:_m,smootherstep:Mm,randInt:wm,randFloat:bm,randFloatSpread:Em,seededRandom:Sm,degToRad:Tm,radToDeg:Am,isPowerOfTwo:Rm,ceilPowerOfTwo:Cm,floorPowerOfTwo:Pm,setQuaternionFromProperEuler:Im,normalize:Bt,denormalize:Wi},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],M=s[4],x=s[7],T=s[2],b=s[5],E=s[8];return r[0]=o*v+a*_+l*T,r[3]=o*m+a*M+l*b,r[6]=o*p+a*x+l*E,r[1]=c*v+u*_+d*T,r[4]=c*m+u*M+d*b,r[7]=c*p+u*x+d*E,r[2]=h*v+f*_+g*T,r[5]=h*m+f*M+g*b,r[8]=h*p+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pc.makeScale(e,t)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pc=new ft;Zd={};bt={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Nt&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Nt&&(i.r=ro(i.r),i.g=ro(i.g),i.b=ro(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?$l:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};$d=[.64,.33,.3,.6,.15,.06],Jd=[.2126,.7152,.0722],jd=[.3127,.329],Qd=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[Co]:{primaries:$d,whitePoint:jd,transfer:$l,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:Jd,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:$d,whitePoint:jd,transfer:Nt,toXYZ:Qd,fromXYZ:ef,luminanceCoefficients:Jd,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});Zu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=fa("canvas")),Hr.width=e.width,Hr.height=e.height;let n=Hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nm=0,Cl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ic(s[o].image)):r.push(Ic(s[o]))}else r=Ic(s);n.url=r}return t||(e.images[this.uuid]=n),n}};zm=0,wn=class i extends Xs{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ms,s=Ms,r=tn,o=xi,a=yi,l=Es,c=i.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=ts(),this.name="",this.source=new Cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case _u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case _u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=up;wn.DEFAULT_ANISOTROPY=1;st=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,x=(f+1)/2,T=(p+1)/2,b=(u+h)/4,E=(d+v)/4,R=(g+m)/4;return M>x&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=E/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=R/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$u=class extends Xs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new wn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends $u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pl=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ju=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==g){let m=1-a,p=l*h+c*f+u*g+d*v,_=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let T=Math.sqrt(M),b=Math.atan2(T,p*_);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}let x=a*_;if(l=l*m+h*x,c=c*m+f*x,u=u*m+g*x,d=d*m+v*x,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new A,tf=new zt,ri=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(r,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Ga.subVectors(this.max,qo),Br.subVectors(e.a,qo),kr.subVectors(e.b,qo),Or.subVectors(e.c,qo),Ns.subVectors(kr,Br),zs.subVectors(Or,kr),ar.subVectors(Br,Or);let t=[0,-Ns.z,Ns.y,0,-zs.z,zs.y,0,-ar.z,ar.y,Ns.z,0,-Ns.x,zs.z,0,-zs.x,ar.z,0,-ar.x,-Ns.y,Ns.x,0,-zs.y,zs.x,0,-ar.y,ar.x,0];return!Dc(t,Br,kr,Or,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Dc(t,Br,kr,Or,Ga))?!1:(Xa.crossVectors(Ns,zs),t=[Xa.x,Xa.y,Xa.z],Dc(t,Br,kr,Or,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ms=[new A,new A,new A,new A,new A,new A,new A,new A],ki=new A,Wa=new ri,Br=new A,kr=new A,Or=new A,Ns=new A,zs=new A,ar=new A,qo=new A,Ga=new A,Xa=new A,lr=new A;Hm=new ri,Yo=new A,Uc=new A,bn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);let t=Yo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Uc)),this.expandByPoint(Yo.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gs=new A,Fc=new A,qa=new A,Hs=new A,Nc=new A,Ya=new A,zc=new A,fo=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gs.copy(this.origin).addScaledVector(this.direction,t),gs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Hs.copy(this.origin).sub(Fc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=Hs.dot(this.direction),l=-Hs.dot(qa),c=Hs.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fc).addScaledVector(qa,h),f}intersectSphere(e,t){gs.subVectors(e.center,this.origin);let n=gs.dot(this.direction),s=gs.dot(gs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gs)!==null}intersectTriangle(e,t,n,s,r){Nc.subVectors(t,e),Ya.subVectors(n,e),zc.crossVectors(Nc,Ya);let o=this.direction.dot(zc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hs.subVectors(this.origin,e);let l=a*this.direction.dot(Ya.crossVectors(Hs,Ya));if(l<0)return null;let c=a*this.direction.dot(Nc.cross(Hs));if(c<0||l+c>o)return null;let u=-a*Hs.dot(zc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class i{constructor(e,t,n,s,r,o,a,l,c,u,d,h,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,km)}lookAt(e,t,n){let s=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Bs.crossVectors(n,mi),Bs.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Bs.crossVectors(n,mi)),Bs.normalize(),Ka.crossVectors(mi,Bs),s[0]=Bs.x,s[4]=Ka.x,s[8]=mi.x,s[1]=Bs.y,s[5]=Ka.y,s[9]=mi.y,s[2]=Bs.z,s[6]=Ka.z,s[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],M=n[7],x=n[11],T=n[15],b=s[0],E=s[4],R=s[8],w=s[12],y=s[1],C=s[5],I=s[9],D=s[13],F=s[2],B=s[6],N=s[10],k=s[14],U=s[3],H=s[7],Z=s[11],se=s[15];return r[0]=o*b+a*y+l*F+c*U,r[4]=o*E+a*C+l*B+c*H,r[8]=o*R+a*I+l*N+c*Z,r[12]=o*w+a*D+l*k+c*se,r[1]=u*b+d*y+h*F+f*U,r[5]=u*E+d*C+h*B+f*H,r[9]=u*R+d*I+h*N+f*Z,r[13]=u*w+d*D+h*k+f*se,r[2]=g*b+v*y+m*F+p*U,r[6]=g*E+v*C+m*B+p*H,r[10]=g*R+v*I+m*N+p*Z,r[14]=g*w+v*D+m*k+p*se,r[3]=_*b+M*y+x*F+T*U,r[7]=_*E+M*C+x*B+T*H,r[11]=_*R+M*I+x*N+T*Z,r[15]=_*w+M*D+x*k+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*f-n*l*f)+v*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+m*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*d+t*a*h+s*o*d-n*o*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=d*m*c-v*h*c+v*l*f-a*m*f-d*l*p+a*h*p,M=g*h*c-u*m*c-g*l*f+o*m*f+u*l*p-o*h*p,x=u*v*c-g*d*c+g*a*f-o*v*f-u*a*p+o*d*p,T=g*d*l-u*v*l-g*a*h+o*v*h+u*a*m-o*d*m,b=t*_+n*M+s*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=_*E,e[1]=(v*h*r-d*m*r-v*s*f+n*m*f+d*s*p-n*h*p)*E,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*E,e[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*f-n*l*f)*E,e[4]=M*E,e[5]=(u*m*r-g*h*r+g*s*f-t*m*f-u*s*p+t*h*p)*E,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*E,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*f+t*l*f)*E,e[8]=x*E,e[9]=(g*d*r-u*v*r-g*n*f+t*v*f+u*n*p-t*d*p)*E,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*f-t*a*f)*E,e[12]=T*E,e[13]=(u*v*s-g*d*s+g*n*h-t*v*h-u*n*m+t*d*m)*E,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*E,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*h+t*a*h)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,g=r*d,v=o*u,m=o*d,p=a*d,_=l*c,M=l*u,x=l*d,T=n.x,b=n.y,E=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+x)*T,s[2]=(g-M)*T,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(h+p))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(g+M)*E,s[9]=(m-_)*E,s[10]=(1-(h+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Vr.set(s[0],s[1],s[2]).length(),o=Vr.set(s[4],s[5],s[6]).length(),a=Vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Oi.copy(this);let c=1/r,u=1/o,d=1/a;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=u,Oi.elements[5]*=u,Oi.elements[6]*=u,Oi.elements[8]*=d,Oi.elements[9]*=d,Oi.elements[10]*=d,t.setFromRotationMatrix(Oi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ws){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s),f,g;if(a===ws)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Rl)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ws){let l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-r),h=(t+e)*c,f=(n+s)*u,g,v;if(a===ws)g=(o+r)*d,v=-2*d;else if(a===Rl)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vr=new A,Oi=new $e,Bm=new A(0,0,0),km=new A(1,1,1),Bs=new A,Ka=new A,mi=new A,nf=new $e,sf=new zt,En=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sf.setFromEuler(this),this.setFromQuaternion(sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Om=0,rf=new A,Wr=new zt,vs=new $e,Za=new A,Ko=new A,Vm=new A,Wm=new zt,of=new A(1,0,0),af=new A(0,1,0),lf=new A(0,0,1),cf={type:"added"},Gm={type:"removed"},Gr={type:"childadded",child:null},Hc={type:"childremoved",child:null},gn=class i extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new En,n=new zt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new ft}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(of,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(lf,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(of,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vs.lookAt(Ko,Za,this.up):vs.lookAt(Za,Ko,this.up),this.quaternion.setFromRotationMatrix(vs),s&&(vs.extractRotation(s.matrixWorld),Wr.setFromRotationMatrix(vs),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gm),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vs.multiply(e.parent.matrixWorld)),e.applyMatrix4(vs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,Wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};gn.DEFAULT_UP=new A(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Vi=new A,xs=new A,Bc=new A,ys=new A,Xr=new A,qr=new A,uf=new A,kc=new A,Oc=new A,Vc=new A,Wc=new st,Gc=new st,Xc=new st,Vs=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vi.subVectors(e,t),s.cross(Vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vi.subVectors(s,t),xs.subVectors(n,t),Bc.subVectors(e,t);let o=Vi.dot(Vi),a=Vi.dot(xs),l=Vi.dot(Bc),c=xs.dot(xs),u=xs.dot(Bc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ys)===null?!1:ys.x>=0&&ys.y>=0&&ys.x+ys.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ys)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ys.x),l.addScaledVector(o,ys.y),l.addScaledVector(a,ys.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wc.setScalar(0),Gc.setScalar(0),Xc.setScalar(0),Wc.fromBufferAttribute(e,t),Gc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wc,r.x),o.addScaledVector(Gc,r.y),o.addScaledVector(Xc,r.z),o}static isFrontFacing(e,t,n,s){return Vi.subVectors(n,t),xs.subVectors(e,t),Vi.cross(xs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Vi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Xr.subVectors(s,n),qr.subVectors(r,n),kc.subVectors(e,n);let l=Xr.dot(kc),c=qr.dot(kc);if(l<=0&&c<=0)return t.copy(n);Oc.subVectors(e,s);let u=Xr.dot(Oc),d=qr.dot(Oc);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xr,o);Vc.subVectors(e,r);let f=Xr.dot(Vc),g=qr.dot(Vc);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qr,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return uf.subVectors(r,s),a=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(uf,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(Xr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ks={h:0,s:0,l:0},$a={h:0,s:0,l:0};de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Xh(e,1),t=Un(t,0,1),n=Un(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qc(o,r,e+1/3),this.g=qc(o,r,e),this.b=qc(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return bt.fromWorkingColorSpace($n.copy(this),e),Math.round(Un($n.r*255,0,255))*65536+Math.round(Un($n.g*255,0,255))*256+Math.round(Un($n.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace($n.copy(this),t);let n=$n.r,s=$n.g,r=$n.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=Xt){bt.fromWorkingColorSpace($n.copy(this),e);let t=$n.r,n=$n.g,s=$n.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ks),this.setHSL(ks.h+e,ks.s+t,ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ks),e.getHSL($a);let n=oa(ks.h,$a.h,t),s=oa(ks.s,$a.s,t),r=oa(ks.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new de;de.NAMES=Tp;Xm=0,is=class extends Xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ts(),this.name="",this.blending=Ws,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=uu,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cu&&(n.blendSrc=this.blendSrc),this.blendDst!==uu&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},On=class extends is{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mn=new A,Ja=new oe,qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}},Il=class extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ll=class extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Je=class extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},qm=0,Ai=new $e,Yc=new gn,Yr=new A,gi=new ri,Zo=new ri,Dn=new A,Ye=class i extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Ll:Il)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,n){return Ai.makeTranslation(e,t,n),this.applyMatrix4(Ai),this}scale(e,t,n){return Ai.makeScale(e,t,n),this.applyMatrix4(Ai),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(gi.min,Zo.min),gi.expandByPoint(Dn),Dn.addVectors(gi.max,Zo.max),gi.expandByPoint(Dn)):(gi.expandByPoint(Zo.min),gi.expandByPoint(Zo.max))}gi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dn.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(e,c),Dn.add(Yr)),s=Math.max(s,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new A,l[R]=new A;let c=new A,u=new A,d=new A,h=new oe,f=new oe,g=new oe,v=new A,m=new A;function p(R,w,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,R),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(v),a[w].add(v),a[y].add(v),l[R].add(m),l[w].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,w=_.length;R<w;++R){let y=_[R],C=y.start,I=y.count;for(let D=C,F=C+I;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new A,x=new A,T=new A,b=new A;function E(R){T.fromBufferAttribute(s,R),b.copy(T);let w=a[R];M.copy(w),M.sub(T.multiplyScalar(T.dot(w))).normalize(),x.crossVectors(b,w);let C=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,w=_.length;R<w;++R){let y=_[R],C=y.start,I=y.count;for(let D=C,F=C+I;D<F;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,d=new A;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new qe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hf=new $e,cr=new fo,ja=new bn,df=new A,Qa=new A,el=new A,tl=new A,Kc=new A,nl=new A,ff=new A,il=new A,ae=class extends gn{constructor(e=new Ye,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Kc.fromBufferAttribute(d,e),o?nl.addScaledVector(Kc,u):nl.addScaledVector(Kc.sub(t),u))}t.add(nl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),cr.copy(e.ray).recast(e.near),!(ja.containsPoint(cr.origin)===!1&&(cr.intersectSphere(ja,df)===null||cr.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(hf.copy(r).invert(),cr.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,T=M;x<T;x+=3){let b=a.getX(x),E=a.getX(x+1),R=a.getX(x+2);s=sl(this,p,e,n,c,u,d,b,E,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=sl(this,o,e,n,c,u,d,_,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,T=M;x<T;x+=3){let b=x,E=x+1,R=x+2;s=sl(this,p,e,n,c,u,d,b,E,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,M=m+1,x=m+2;s=sl(this,o,e,n,c,u,d,_,M,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Nn=class i extends Ye{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function g(v,m,p,_,M,x,T,b,E,R,w){let y=x/E,C=T/R,I=x/2,D=T/2,F=b/2,B=E+1,N=R+1,k=0,U=0,H=new A;for(let Z=0;Z<N;Z++){let se=Z*C-D;for(let fe=0;fe<B;fe++){let _e=fe*y-I;H[v]=_e*_,H[m]=se*M,H[p]=F,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[p]=b>0?1:-1,u.push(H.x,H.y,H.z),d.push(fe/E),d.push(1-Z/R),k+=1}}for(let Z=0;Z<R;Z++)for(let se=0;se<E;se++){let fe=h+se+B*Z,_e=h+se+B*(Z+1),q=h+(se+1)+B*(Z+1),ne=h+(se+1)+B*Z;l.push(fe,_e,ne),l.push(_e,q,ne),U+=6}a.addGroup(f,U,w),f+=U,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};os={clone:po,merge:Qn},Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends is{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=$m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=Km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},mo=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ws}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Os=new A,pf=new oe,mf=new oe,ln=class extends mo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Os.x,Os.y).multiplyScalar(-e/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Os.x,Os.y).multiplyScalar(-e/Os.z)}getViewSize(e,t){return this.getViewBounds(e,pf,mf),t.subVectors(mf,pf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kr=-90,Zr=1,xr=class extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Kr,Zr,e,t);s.layers=this.layers,this.add(s);let r=new ln(Kr,Zr,e,t);r.layers=this.layers,this.add(r);let o=new ln(Kr,Zr,e,t);o.layers=this.layers,this.add(o);let a=new ln(Kr,Zr,e,t);a.layers=this.layers,this.add(a);let l=new ln(Kr,Zr,e,t);l.layers=this.layers,this.add(l);let c=new ln(Kr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ws)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},go=class extends wn{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qs=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new go(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:po(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Ri});r.uniforms.tEquirect.value=t;let o=new ae(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=tn),new xr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Zc=new A,Jm=new A,jm=new ft,vi=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zc.subVectors(n,t).cross(Jm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jm.getNormalMatrix(e),s=this.coplanarPoint(Zc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ur=new bn,rl=new A,Ss=class{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ws){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],M=s[14],x=s[15];if(n[0].setComponents(l-r,h-c,m-f,x-p).normalize(),n[1].setComponents(l+r,h+c,m+f,x+p).normalize(),n[2].setComponents(l+o,h+u,m+g,x+_).normalize(),n[3].setComponents(l-o,h-u,m-g,x-_).normalize(),n[4].setComponents(l-a,h-d,m-v,x-M).normalize(),t===ws)n[5].setComponents(l+a,h+d,m+v,x+M).normalize();else if(t===Rl)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(rl.x=s.normal.x>0?e.max.x:e.min.x,rl.y=s.normal.y>0?e.max.y:e.min.y,rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};St=class i extends Ye{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let _=p*h-o;for(let M=0;M<c;M++){let x=M*d-r;g.push(x,-_,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let M=_+c*p,x=_+c*(p+1),T=_+1+c*(p+1),b=_+1+c*p;f.push(M,x,b),f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
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
#endif`,ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lg=`#ifdef USE_BATCHING
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
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fg=`#ifdef USE_IRIDESCENCE
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
#endif`,pg=`#ifdef USE_BUMPMAP
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bg=`#define PI 3.141592653589793
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
} // validated`,Eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
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
}`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xg=`uniform bool receiveShadow;
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
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
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
#endif`,jg=`struct PhysicalMaterial {
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
}`,Qg=`
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
#endif`,ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
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
#endif`,gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wv=`#ifdef USE_NORMALMAP
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
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hv=`float getShadowMask() {
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
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#ifdef USE_TRANSMISSION
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,lx=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,yx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,Mx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,bx=`#define STANDARD
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
}`,Ex=`#define STANDARD
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
}`,Sx=`#define TOON
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
}`,Tx=`#define TOON
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
}`,Ax=`uniform float size;
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
}`,Rx=`uniform vec3 diffuse;
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
}`,Cx=`#include <common>
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
}`,Px=`uniform vec3 color;
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
}`,Ix=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:eg,alphahash_pars_fragment:tg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:sg,alphatest_pars_fragment:rg,aomap_fragment:og,aomap_pars_fragment:ag,batching_pars_vertex:lg,batching_vertex:cg,begin_vertex:ug,beginnormal_vertex:hg,bsdfs:dg,iridescence_fragment:fg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:vg,clipping_planes_vertex:xg,color_fragment:yg,color_pars_fragment:_g,color_pars_vertex:Mg,color_vertex:wg,common:bg,cube_uv_reflection_fragment:Eg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:Tg,displacementmap_vertex:Ag,emissivemap_fragment:Rg,emissivemap_pars_fragment:Cg,colorspace_fragment:Pg,colorspace_pars_fragment:Ig,envmap_fragment:Lg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ug,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:qg,envmap_vertex:Ng,fog_vertex:zg,fog_pars_vertex:Hg,fog_fragment:Bg,fog_pars_fragment:kg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Vg,lights_lambert_fragment:Wg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Xg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Kg,lights_phong_fragment:Zg,lights_phong_pars_fragment:$g,lights_physical_fragment:Jg,lights_physical_pars_fragment:jg,lights_fragment_begin:Qg,lights_fragment_maps:ev,lights_fragment_end:tv,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:rv,map_fragment:ov,map_pars_fragment:av,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:hv,morphinstance_vertex:dv,morphcolor_vertex:fv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:gv,normal_fragment_begin:vv,normal_fragment_maps:xv,normal_pars_fragment:yv,normal_pars_vertex:_v,normal_vertex:Mv,normalmap_pars_fragment:wv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:Ev,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:Tv,opaque_fragment:Av,packing:Rv,premultiplied_alpha_fragment:Cv,project_vertex:Pv,dithering_fragment:Iv,dithering_pars_fragment:Lv,roughnessmap_fragment:Dv,roughnessmap_pars_fragment:Uv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Nv,shadowmap_vertex:zv,shadowmask_pars_fragment:Hv,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:Ov,skinnormal_vertex:Vv,specularmap_fragment:Wv,specularmap_pars_fragment:Gv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:Kv,uv_pars_fragment:Zv,uv_pars_vertex:$v,uv_vertex:Jv,worldpos_vertex:jv,background_vert:Qv,background_frag:ex,backgroundCube_vert:tx,backgroundCube_frag:nx,cube_vert:ix,cube_frag:sx,depth_vert:rx,depth_frag:ox,distanceRGBA_vert:ax,distanceRGBA_frag:lx,equirect_vert:cx,equirect_frag:ux,linedashed_vert:hx,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:px,meshlambert_vert:mx,meshlambert_frag:gx,meshmatcap_vert:vx,meshmatcap_frag:xx,meshnormal_vert:yx,meshnormal_frag:_x,meshphong_vert:Mx,meshphong_frag:wx,meshphysical_vert:bx,meshphysical_frag:Ex,meshtoon_vert:Sx,meshtoon_frag:Tx,points_vert:Ax,points_frag:Rx,shadow_vert:Cx,shadow_frag:Px,sprite_vert:Ix,sprite_frag:Lx},Se={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Qi={basic:{uniforms:Qn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Qn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new de(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Qn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Qn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Qn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new de(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Qn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Qn([Se.points,Se.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Qn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Qn([Se.common,Se.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Qn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Qn([Se.sprite,Se.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Qn([Se.common,Se.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Qn([Se.lights,Se.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Qi.physical={uniforms:Qn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};ol={r:0,b:0,g:0},hr=new En,Dx=new $e;vo=class extends mo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},no=4,gf=[.125,.215,.35,.446,.526,.582],mr=20,$c=new vo,vf=new de,Jc=null,jc=0,Qc=0,eu=!1,fr=(1+Math.sqrt(5))/2,$r=1/fr,xf=[new A(-fr,$r,0),new A(fr,$r,0),new A(-$r,0,fr),new A($r,0,fr),new A(0,fr,-$r),new A(0,fr,$r),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Ys=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,jc,Qc),this._renderer.xr.enabled=eu,e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:sn,format:yi,colorSpace:Co,depthBuffer:!1},s=yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(r)),this._blurMaterial=Ox(r,e,t)}return s}_compileMaterial(e){let t=new ae(this._lodPlanes[0],e);this._renderer.compile(t,$c)}_sceneToCubeUV(e,t,n,s){let a=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(vf),u.toneMapping=Gs,u.autoClear=!1;let f=new On({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new ae(new Nn,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(vf),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;al(s,_*M,p>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===lo||e.mapping===co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;al(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$c)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xf[(s-r-1)%xf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new ae(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mr-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):mr;m>mr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);let p=[],_=0;for(let E=0;E<mr;++E){let R=E/v,w=Math.exp(-R*R/2);p.push(w),E===0?_+=w:E<m&&(_+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;let x=this._sizeLods[s],T=3*x*(s>M-no?s-M+no:0),b=4*(this._cubeSize-x);al(t,T,b,3*x,2*x),l.setRenderTarget(t),l.render(d,$c)}};Dl=class extends wn{constructor(e,t,n,s,r,o,a,l,c,u=so){if(u!==so&&u!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===so&&(n=vr),n===void 0&&u===ho&&(n=uo),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_i,this.minFilter=l!==void 0?l:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cp=new wn,wf=new Dl(1,1),Pp=new Pl,Ip=new Ju,Lp=new go,bf=[],Ef=[],Sf=new Float32Array(16),Tf=new Float32Array(9),Af=new Float32Array(4);ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=py(t.type)}},Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uy(t.type)}},eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},tu=/(\w+)(\])?(\[|\.)?/g;oo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Fy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};Ny=37297,zy=0;Pf=new ft;ll=new A;qy=/^[ \t]*#include +<([\w\d./]+)>/gm;Yy=new Map;Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;i1=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ih(e),t.set(e,n)),n}},ih=class{constructor(e){this.id=i1++,this.code=e,this.usedTimes=0}};u1=0;sh=class extends is{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rh=class extends is{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
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
}`;v1={[hu]:du,[fu]:gu,[pu]:vu,[ao]:mu,[du]:hu,[gu]:fu,[vu]:pu,[mu]:ao};oh=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Fn=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},w1={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new wn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ve({vertexShader:b1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new St(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends Xs{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=new ah,m=t.getContextAttributes(),p=null,_=null,M=[],x=[],T=new oe,b=null,E=new ln;E.viewport=new st;let R=new ln;R.viewport=new st;let w=[E,R],y=new oh,C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=M[q];return ne===void 0&&(ne=new aa,M[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=M[q];return ne===void 0&&(ne=new aa,M[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=M[q];return ne===void 0&&(ne=new aa,M[q]=ne),ne.getHandSpace()};function D(q){let ne=x.indexOf(q.inputSource);if(ne===-1)return;let re=M[ne];re!==void 0&&(re.update(q.inputSource,q.frame,c||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",B);for(let q=0;q<M.length;q++){let ne=x[q];ne!==null&&(x[q]=null,M[q].disconnect(ne))}C=null,I=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,s=null,_=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new jt(f.framebufferWidth,f.framebufferHeight,{format:yi,type:Es,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,re=null,K=null;m.depth&&(K=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?ho:so,re=m.stencil?uo:vr);let he={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(he),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new jt(h.textureWidth,h.textureHeight,{format:yi,type:Es,depthTexture:new Dl(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(q){for(let ne=0;ne<q.removed.length;ne++){let re=q.removed[ne],K=x.indexOf(re);K>=0&&(x[K]=null,M[K].disconnect(re))}for(let ne=0;ne<q.added.length;ne++){let re=q.added[ne],K=x.indexOf(re);if(K===-1){for(let Ue=0;Ue<M.length;Ue++)if(Ue>=x.length){x.push(re),K=Ue;break}else if(x[Ue]===null){x[Ue]=re,K=Ue;break}if(K===-1)break}let he=M[K];he&&he.connect(re)}}let N=new A,k=new A;function U(q,ne,re){N.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(re.matrixWorld);let K=N.distanceTo(k),he=ne.projectionMatrix.elements,Ue=re.projectionMatrix.elements,Ee=he[14]/(he[10]-1),Qe=he[14]/(he[10]+1),pe=(he[9]+1)/he[5],je=(he[9]-1)/he[5],z=(he[8]-1)/he[0],ze=(Ue[8]+1)/Ue[0],Ce=Ee*z,He=Ee*ze,ye=K/(-z+ze),ue=ye*-z;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ue),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),he[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let le=Ee+ye,L=Qe+ye,S=Ce-ue,V=He+(K-ue),$=pe*Qe/L*le,ie=je*Qe/L*le;q.projectionMatrix.makePerspective(S,V,$,ie,le,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function H(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,re=q.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(re=v.depthFar)),y.near=R.near=E.near=ne,y.far=R.far=E.far=re,(C!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,I=y.far),E.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|R.layers.mask;let K=q.parent,he=y.cameras;H(y,K);for(let Ue=0;Ue<he.length;Ue++)H(he[Ue],K);he.length===2?U(y,E,R):y.projectionMatrix.copy(E.projectionMatrix),Z(q,y,K)};function Z(q,ne,re){re===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=da*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let se=null;function fe(q,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){let re=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let K=!1;re.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let Ue=0;Ue<re.length;Ue++){let Ee=re[Ue],Qe=null;if(f!==null)Qe=f.getViewport(Ee);else{let je=d.getViewSubImage(h,Ee);Qe=je.viewport,Ue===0&&(e.setRenderTargetTextures(_,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(_))}let pe=w[Ue];pe===void 0&&(pe=new ln,pe.layers.enable(Ue),pe.viewport=new st,w[Ue]=pe),pe.matrix.fromArray(Ee.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ee.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ue===0&&(y.matrix.copy(pe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(pe)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")){let Ue=d.getDepthInformation(re[0]);Ue&&Ue.isValid&&Ue.texture&&v.init(e,Ue,s.renderState)}}for(let re=0;re<M.length;re++){let K=x[re],he=M[re];K!==null&&he!==void 0&&he.update(K,ne,c||o)}se&&se(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let _e=new Rp;_e.setAnimationLoop(fe),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}},dr=new En,S1=new $e;xo=class{constructor(e={}){let{canvas:t=Lm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,_=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Gs,this.toneMappingExposure=1;let x=this,T=!1,b=0,E=0,R=null,w=-1,y=null,C=new st,I=new st,D=null,F=new de(0),B=0,N=t.width,k=t.height,U=1,H=null,Z=null,se=new st(0,0,N,k),fe=new st(0,0,N,k),_e=!1,q=new Ss,ne=!1,re=!1,K=new $e,he=new $e,Ue=new A,Ee=new st,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function je(){return R===null?U:1}let z=n;function ze(P,G){return t.getContext(P,G)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ih}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Me,!1),z===null){let G="webgl2";if(z=ze(G,P),z===null)throw ze(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ce,He,ye,ue,le,L,S,V,$,ie,Q,we,xe,be,nt,me,Te,We,tt,Pe,ht,at,Lt,O;function Ae(){Ce=new Wx(z),Ce.init(),at=new M1(z,Ce),He=new zx(z,Ce,e,at),ye=new x1(z,Ce),He.reverseDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),ue=new qx(z),le=new r1,L=new _1(z,Ce,ye,le,He,at,ue),S=new Bx(x),V=new Vx(x),$=new Qm(z),Lt=new Fx(z,$),ie=new Gx(z,$,ue,Lt),Q=new Kx(z,ie,$,ue),tt=new Yx(z,He,L),me=new Hx(le),we=new s1(x,S,V,Ce,He,Lt,me),xe=new T1(x,le),be=new a1,nt=new f1(Ce),We=new Ux(x,S,V,ye,Q,f,l),Te=new g1(x,Q,He),O=new A1(z,ue,He,ye),Pe=new Nx(z,Ce,ue),ht=new Xx(z,Ce,ue),ue.programs=we.programs,x.capabilities=He,x.extensions=Ce,x.properties=le,x.renderLists=be,x.shadowMap=Te,x.state=ye,x.info=ue}Ae();let ee=new lh(x,z);this.xr=ee,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let P=Ce.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ce.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(P){P!==void 0&&(U=P,this.setSize(N,k,!1))},this.getSize=function(P){return P.set(N,k)},this.setSize=function(P,G,J=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,k=G,t.width=Math.floor(P*U),t.height=Math.floor(G*U),J===!0&&(t.style.width=P+"px",t.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(N*U,k*U).floor()},this.setDrawingBufferSize=function(P,G,J){N=P,k=G,U=J,t.width=Math.floor(P*J),t.height=Math.floor(G*J),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(se)},this.setViewport=function(P,G,J,Y){P.isVector4?se.set(P.x,P.y,P.z,P.w):se.set(P,G,J,Y),ye.viewport(C.copy(se).multiplyScalar(U).round())},this.getScissor=function(P){return P.copy(fe)},this.setScissor=function(P,G,J,Y){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,G,J,Y),ye.scissor(I.copy(fe).multiplyScalar(U).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(P){ye.setScissorTest(_e=P)},this.setOpaqueSort=function(P){H=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(P=!0,G=!0,J=!0){let Y=0;if(P){let W=!1;if(R!==null){let ge=R.texture.format;W=ge===Wh||ge===Vh||ge===Oh}if(W){let ge=R.texture.type,Re=ge===Es||ge===vr||ge===ha||ge===uo||ge===Hh||ge===Bh,Ve=We.getClearColor(),Fe=We.getClearAlpha(),Ke=Ve.r,it=Ve.g,Ge=Ve.b;Re?(g[0]=Ke,g[1]=it,g[2]=Ge,g[3]=Fe,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=Ke,v[1]=it,v[2]=Ge,v[3]=Fe,z.clearBufferiv(z.COLOR,0,v))}else Y|=z.COLOR_BUFFER_BIT}G&&(Y|=z.DEPTH_BUFFER_BIT),J&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),be.dispose(),nt.dispose(),le.dispose(),S.dispose(),V.dispose(),Q.dispose(),Lt.dispose(),O.dispose(),we.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Bo),ee.removeEventListener("sessionend",ui),hi.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let P=ue.autoReset,G=Te.enabled,J=Te.autoUpdate,Y=Te.needsUpdate,W=Te.type;Ae(),ue.autoReset=P,Te.enabled=G,Te.autoUpdate=J,Te.needsUpdate=Y,Te.type=W}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function et(P){let G=P.target;G.removeEventListener("dispose",et),Ot(G)}function Ot(P){Tt(P),le.remove(P)}function Tt(P){let G=le.get(P).programs;G!==void 0&&(G.forEach(function(J){we.releaseProgram(J)}),P.isShaderMaterial&&we.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,J,Y,W,ge){G===null&&(G=Qe);let Re=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Ar(P,G,J,Y,W);ye.setMaterial(Y,Re);let Fe=J.index,Ke=1;if(Y.wireframe===!0){if(Fe=ie.getWireframeAttribute(J),Fe===void 0)return;Ke=2}let it=J.drawRange,Ge=J.attributes.position,Et=it.start*Ke,Ut=(it.start+it.count)*Ke;ge!==null&&(Et=Math.max(Et,ge.start*Ke),Ut=Math.min(Ut,(ge.start+ge.count)*Ke)),Fe!==null?(Et=Math.max(Et,0),Ut=Math.min(Ut,Fe.count)):Ge!=null&&(Et=Math.max(Et,0),Ut=Math.min(Ut,Ge.count));let Gt=Ut-Et;if(Gt<0||Gt===1/0)return;Lt.setup(W,Y,Ve,J,Fe);let Ht,Mt=Pe;if(Fe!==null&&(Ht=$.get(Fe),Mt=ht,Mt.setIndex(Ht)),W.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*je()),Mt.setMode(z.LINES)):Mt.setMode(z.TRIANGLES);else if(W.isLine){let Ze=Y.linewidth;Ze===void 0&&(Ze=1),ye.setLineWidth(Ze*je()),W.isLineSegments?Mt.setMode(z.LINES):W.isLineLoop?Mt.setMode(z.LINE_LOOP):Mt.setMode(z.LINE_STRIP)}else W.isPoints?Mt.setMode(z.POINTS):W.isSprite&&Mt.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Mt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ce.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ze=W._multiDrawStarts,di=W._multiDrawCounts,At=W._multiDrawCount,Gn=Fe?$.get(Fe).bytesPerElement:1,hs=le.get(Y).currentProgram.getUniforms();for(let Xn=0;Xn<At;Xn++)hs.setValue(z,"_gl_DrawID",Xn),Mt.render(Ze[Xn]/Gn,di[Xn])}else if(W.isInstancedMesh)Mt.renderInstances(Et,Gt,W.count);else if(J.isInstancedBufferGeometry){let Ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,di=Math.min(J.instanceCount,Ze);Mt.renderInstances(Et,Gt,di)}else Mt.render(Et,Gt)};function ke(P,G,J){P.transparent===!0&&P.side===gt&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,Is(P,G,J),P.side=ns,P.needsUpdate=!0,Is(P,G,J),P.side=gt):Is(P,G,J)}this.compile=function(P,G,J=null){J===null&&(J=P),p=nt.get(J),p.init(G),M.push(p),J.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),P!==J&&P.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let Y=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){let Ve=ge[Re];ke(Ve,J,W),Y.add(Ve)}else ke(ge,J,W),Y.add(ge)}),M.pop(),p=null,Y},this.compileAsync=function(P,G,J=null){let Y=this.compile(P,G,J);return new Promise(W=>{function ge(){if(Y.forEach(function(Re){le.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){W(P);return}setTimeout(ge,10)}Ce.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let yn=null;function wi(P){yn&&yn(P)}function Bo(){hi.stop()}function ui(){hi.start()}let hi=new Rp;hi.setAnimationLoop(wi),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(P){yn=P,ee.setAnimationLoop(P),P===null?hi.stop():hi.start()},ee.addEventListener("sessionstart",Bo),ee.addEventListener("sessionend",ui),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(G),G=ee.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,G,R),p=nt.get(P,M.length),p.init(G),M.push(p),he.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix(he),re=this.localClippingEnabled,ne=me.init(this.clippingPlanes,re),m=be.get(P,_.length),m.init(),_.push(m),ee.enabled===!0&&ee.isPresenting===!0){let ge=x.xr.getDepthSensingMesh();ge!==null&&Ps(ge,G,-1/0,x.sortObjects)}Ps(P,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(H,Z),pe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,pe&&We.addToRenderList(m,P),this.info.render.frame++,ne===!0&&me.beginShadows();let J=p.state.shadowsArray;Te.render(J,P,G),ne===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,W=m.transmissive;if(p.setupLights(),G.isArrayCamera){let ge=G.cameras;if(W.length>0)for(let Re=0,Ve=ge.length;Re<Ve;Re++){let Fe=ge[Re];Fa(Y,W,P,Fe)}pe&&We.render(P);for(let Re=0,Ve=ge.length;Re<Ve;Re++){let Fe=ge[Re];Ua(m,P,Fe,Fe.viewport)}}else W.length>0&&Fa(Y,W,P,G),pe&&We.render(P),Ua(m,P,G);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(x,P,G),Lt.resetDefaultState(),w=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],ne===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ps(P,G,J,Y){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){Y&&Ee.setFromMatrixPosition(P.matrixWorld).applyMatrix4(he);let Re=Q.update(P),Ve=P.material;Ve.visible&&m.push(P,Re,Ve,J,Ee.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){let Re=Q.update(P),Ve=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ee.copy(P.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ee.copy(Re.boundingSphere.center)),Ee.applyMatrix4(P.matrixWorld).applyMatrix4(he)),Array.isArray(Ve)){let Fe=Re.groups;for(let Ke=0,it=Fe.length;Ke<it;Ke++){let Ge=Fe[Ke],Et=Ve[Ge.materialIndex];Et&&Et.visible&&m.push(P,Re,Et,J,Ee.z,Ge)}}else Ve.visible&&m.push(P,Re,Ve,J,Ee.z,null)}}let ge=P.children;for(let Re=0,Ve=ge.length;Re<Ve;Re++)Ps(ge[Re],G,J,Y)}function Ua(P,G,J,Y){let W=P.opaque,ge=P.transmissive,Re=P.transparent;p.setupLightsView(J),ne===!0&&me.setGlobalState(x.clippingPlanes,J),Y&&ye.viewport(C.copy(Y)),W.length>0&&nr(W,G,J),ge.length>0&&nr(ge,G,J),Re.length>0&&nr(Re,G,J),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Fa(P,G,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new jt(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?sn:Es,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));let ge=p.state.transmissionRenderTarget[Y.id],Re=Y.viewport||C;ge.setSize(Re.z,Re.w);let Ve=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(F),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),pe&&We.render(J);let Fe=x.toneMapping;x.toneMapping=Gs;let Ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ne===!0&&me.setGlobalState(x.clippingPlanes,Y),nr(P,J,Y),L.updateMultisampleRenderTarget(ge),L.updateRenderTargetMipmap(ge),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ge=0,Et=G.length;Ge<Et;Ge++){let Ut=G[Ge],Gt=Ut.object,Ht=Ut.geometry,Mt=Ut.material,Ze=Ut.group;if(Mt.side===gt&&Gt.layers.test(Y.layers)){let di=Mt.side;Mt.side=qt,Mt.needsUpdate=!0,Na(Gt,J,Y,Ht,Mt,Ze),Mt.side=di,Mt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(ge),L.updateRenderTargetMipmap(ge))}x.setRenderTarget(Ve),x.setClearColor(F,B),Ke!==void 0&&(Y.viewport=Ke),x.toneMapping=Fe}function nr(P,G,J){let Y=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ge=P.length;W<ge;W++){let Re=P[W],Ve=Re.object,Fe=Re.geometry,Ke=Y===null?Re.material:Y,it=Re.group;Ve.layers.test(J.layers)&&Na(Ve,G,J,Fe,Ke,it)}}function Na(P,G,J,Y,W,ge){P.onBeforeRender(x,G,J,Y,W,ge),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(x,G,J,Y,P,ge),W.transparent===!0&&W.side===gt&&W.forceSinglePass===!1?(W.side=qt,W.needsUpdate=!0,x.renderBufferDirect(J,G,Y,W,P,ge),W.side=ns,W.needsUpdate=!0,x.renderBufferDirect(J,G,Y,W,P,ge),W.side=gt):x.renderBufferDirect(J,G,Y,W,P,ge),P.onAfterRender(x,G,J,Y,W,ge)}function Is(P,G,J){G.isScene!==!0&&(G=Qe);let Y=le.get(P),W=p.state.lights,ge=p.state.shadowsArray,Re=W.state.version,Ve=we.getParameters(P,W.state,ge,G,J),Fe=we.getProgramCacheKey(Ve),Ke=Y.programs;Y.environment=P.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(P.isMeshStandardMaterial?V:S).get(P.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Ke===void 0&&(P.addEventListener("dispose",et),Ke=new Map,Y.programs=Ke);let it=Ke.get(Fe);if(it!==void 0){if(Y.currentProgram===it&&Y.lightsStateVersion===Re)return ir(P,Ve),it}else Ve.uniforms=we.getUniforms(P),P.onBeforeCompile(Ve,x),it=we.acquireProgram(Ve,Fe),Ke.set(Fe,it),Y.uniforms=Ve.uniforms;let Ge=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ge.clippingPlanes=me.uniform),ir(P,Ve),Y.needsLights=za(P),Y.lightsStateVersion=Re,Y.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=it,Y.uniformsList=null,it}function ko(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=oo.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function ir(P,G){let J=le.get(P);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Ar(P,G,J,Y,W){G.isScene!==!0&&(G=Qe),L.resetTextureUnits();let ge=G.fog,Re=Y.isMeshStandardMaterial?G.environment:null,Ve=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Co,Fe=(Y.isMeshStandardMaterial?V:S).get(Y.envMap||Re),Ke=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!J.morphAttributes.position,Et=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color,Gt=Gs;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let Ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mt=Ht!==void 0?Ht.length:0,Ze=le.get(Y),di=p.state.lights;if(ne===!0&&(re===!0||P!==y)){let rt=P===y&&Y.id===w;me.setState(Y,P,rt)}let At=!1;Y.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==di.state.version||Ze.outputColorSpace!==Ve||W.isBatchedMesh&&Ze.batching===!1||!W.isBatchedMesh&&Ze.batching===!0||W.isBatchedMesh&&Ze.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ze.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ze.instancing===!1||!W.isInstancedMesh&&Ze.instancing===!0||W.isSkinnedMesh&&Ze.skinning===!1||!W.isSkinnedMesh&&Ze.skinning===!0||W.isInstancedMesh&&Ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ze.instancingMorph===!1&&W.morphTexture!==null||Ze.envMap!==Fe||Y.fog===!0&&Ze.fog!==ge||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==me.numPlanes||Ze.numIntersection!==me.numIntersection)||Ze.vertexAlphas!==Ke||Ze.vertexTangents!==it||Ze.morphTargets!==Ge||Ze.morphNormals!==Et||Ze.morphColors!==Ut||Ze.toneMapping!==Gt||Ze.morphTargetsCount!==Mt)&&(At=!0):(At=!0,Ze.__version=Y.version);let Gn=Ze.currentProgram;At===!0&&(Gn=Is(Y,G,W));let hs=!1,Xn=!1,Ls=!1,kt=Gn.getUniforms(),fi=Ze.uniforms;if(ye.useProgram(Gn.program)&&(hs=!0,Xn=!0,Ls=!0),Y.id!==w&&(w=Y.id,Xn=!0),hs||y!==P){ye.buffers.depth.getReversed()?(K.copy(P.projectionMatrix),Um(K),Fm(K),kt.setValue(z,"projectionMatrix",K)):kt.setValue(z,"projectionMatrix",P.projectionMatrix),kt.setValue(z,"viewMatrix",P.matrixWorldInverse);let qn=kt.map.cameraPosition;qn!==void 0&&qn.setValue(z,Ue.setFromMatrixPosition(P.matrixWorld)),He.logarithmicDepthBuffer&&kt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&kt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,Xn=!0,Ls=!0)}if(W.isSkinnedMesh){kt.setOptional(z,W,"bindMatrix"),kt.setOptional(z,W,"bindMatrixInverse");let rt=W.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),kt.setValue(z,"boneTexture",rt.boneTexture,L))}W.isBatchedMesh&&(kt.setOptional(z,W,"batchingTexture"),kt.setValue(z,"batchingTexture",W._matricesTexture,L),kt.setOptional(z,W,"batchingIdTexture"),kt.setValue(z,"batchingIdTexture",W._indirectTexture,L),kt.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&kt.setValue(z,"batchingColorTexture",W._colorsTexture,L));let Ds=J.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&tt.update(W,J,Gn),(Xn||Ze.receiveShadow!==W.receiveShadow)&&(Ze.receiveShadow=W.receiveShadow,kt.setValue(z,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(fi.envMap.value=Fe,fi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&G.environment!==null&&(fi.envMapIntensity.value=G.environmentIntensity),Xn&&(kt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&gc(fi,Ls),ge&&Y.fog===!0&&xe.refreshFogUniforms(fi,ge),xe.refreshMaterialUniforms(fi,Y,U,k,p.state.transmissionRenderTarget[P.id]),oo.upload(z,ko(Ze),fi,L)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(oo.upload(z,ko(Ze),fi,L),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&kt.setValue(z,"center",W.center),kt.setValue(z,"modelViewMatrix",W.modelViewMatrix),kt.setValue(z,"normalMatrix",W.normalMatrix),kt.setValue(z,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let rt=Y.uniformsGroups;for(let qn=0,Ui=rt.length;qn<Ui;qn++){let Oo=rt[qn];O.update(Oo,Gn),O.bind(Oo,Gn)}}return Gn}function gc(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function za(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,G,J){le.get(P.texture).__webglTexture=G,le.get(P.depthTexture).__webglTexture=J;let Y=le.get(P);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=J===void 0,Y.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,G){let J=le.get(P);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,J=0){R=P,b=G,E=J;let Y=!0,W=null,ge=!1,Re=!1;if(P){let Fe=le.get(P);if(Fe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(z.FRAMEBUFFER,null),Y=!1;else if(Fe.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Fe.__hasExternalTextures)L.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ge=P.depthTexture;if(Fe.__boundDepthTexture!==Ge){if(Ge!==null&&le.has(Ge)&&(P.width!==Ge.image.width||P.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}let Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Re=!0);let it=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[G])?W=it[G][J]:W=it[G],ge=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?W=le.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?W=it[J]:W=it,C.copy(P.viewport),I.copy(P.scissor),D=P.scissorTest}else C.copy(se).multiplyScalar(U).floor(),I.copy(fe).multiplyScalar(U).floor(),D=_e;if(ye.bindFramebuffer(z.FRAMEBUFFER,W)&&Y&&ye.drawBuffers(P,W),ye.viewport(C),ye.scissor(I),ye.setScissorTest(D),ge){let Fe=le.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,J)}else if(Re){let Fe=le.get(P.texture),Ke=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.__webglTexture,J||0,Ke)}w=-1},this.readRenderTargetPixels=function(P,G,J,Y,W,ge,Re){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Re!==void 0&&(Ve=Ve[Re]),Ve){ye.bindFramebuffer(z.FRAMEBUFFER,Ve);try{let Fe=P.texture,Ke=Fe.format,it=Fe.type;if(!He.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-Y&&J>=0&&J<=P.height-W&&z.readPixels(G,J,Y,W,at.convert(Ke),at.convert(it),ge)}finally{let Fe=R!==null?le.get(R).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(P,G,J,Y,W,ge,Re){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Re!==void 0&&(Ve=Ve[Re]),Ve){let Fe=P.texture,Ke=Fe.format,it=Fe.type;if(!He.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=P.width-Y&&J>=0&&J<=P.height-W){ye.bindFramebuffer(z.FRAMEBUFFER,Ve);let Ge=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ge),z.bufferData(z.PIXEL_PACK_BUFFER,ge.byteLength,z.STREAM_READ),z.readPixels(G,J,Y,W,at.convert(Ke),at.convert(it),0);let Et=R!==null?le.get(R).__webglFramebuffer:null;ye.bindFramebuffer(z.FRAMEBUFFER,Et);let Ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Dm(z,Ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ge),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ge),z.deleteBuffer(Ge),z.deleteSync(Ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,G=null,J=0){P.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,P=arguments[1]);let Y=Math.pow(2,-J),W=Math.floor(P.image.width*Y),ge=Math.floor(P.image.height*Y),Re=G!==null?G.x:0,Ve=G!==null?G.y:0;L.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Re,Ve,W,ge),ye.unbindTexture()},this.copyTextureToTexture=function(P,G,J=null,Y=null,W=0){P.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,P=arguments[1],G=arguments[2],W=arguments[3]||0,J=null);let ge,Re,Ve,Fe,Ke,it,Ge,Et,Ut,Gt=P.isCompressedTexture?P.mipmaps[W]:P.image;J!==null?(ge=J.max.x-J.min.x,Re=J.max.y-J.min.y,Ve=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,Ke=J.min.y,it=J.isBox3?J.min.z:0):(ge=Gt.width,Re=Gt.height,Ve=Gt.depth||1,Fe=0,Ke=0,it=0),Y!==null?(Ge=Y.x,Et=Y.y,Ut=Y.z):(Ge=0,Et=0,Ut=0);let Ht=at.convert(G.format),Mt=at.convert(G.type),Ze;G.isData3DTexture?(L.setTexture3D(G,0),Ze=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),Ze=z.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),Ze=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);let di=z.getParameter(z.UNPACK_ROW_LENGTH),At=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Gn=z.getParameter(z.UNPACK_SKIP_PIXELS),hs=z.getParameter(z.UNPACK_SKIP_ROWS),Xn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Gt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Gt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Fe),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,it);let Ls=P.isDataArrayTexture||P.isData3DTexture,kt=G.isDataArrayTexture||G.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let fi=le.get(P),Ds=le.get(G),rt=le.get(fi.__renderTarget),qn=le.get(Ds.__renderTarget);ye.bindFramebuffer(z.READ_FRAMEBUFFER,rt.__webglFramebuffer),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ui=0;Ui<Ve;Ui++)Ls&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,le.get(P).__webglTexture,W,it+Ui),P.isDepthTexture?(kt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,le.get(G).__webglTexture,W,Ut+Ui),z.blitFramebuffer(Fe,Ke,ge,Re,Ge,Et,ge,Re,z.DEPTH_BUFFER_BIT,z.NEAREST)):kt?z.copyTexSubImage3D(Ze,W,Ge,Et,Ut+Ui,Fe,Ke,ge,Re):z.copyTexSubImage2D(Ze,W,Ge,Et,Ut+Ui,Fe,Ke,ge,Re);ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else kt?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Ze,W,Ge,Et,Ut,ge,Re,Ve,Ht,Mt,Gt.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,W,Ge,Et,Ut,ge,Re,Ve,Ht,Gt.data):z.texSubImage3D(Ze,W,Ge,Et,Ut,ge,Re,Ve,Ht,Mt,Gt):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,W,Ge,Et,ge,Re,Ht,Mt,Gt.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,W,Ge,Et,Gt.width,Gt.height,Ht,Gt.data):z.texSubImage2D(z.TEXTURE_2D,W,Ge,Et,ge,Re,Ht,Mt,Gt);z.pixelStorei(z.UNPACK_ROW_LENGTH,di),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,At),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Gn),z.pixelStorei(z.UNPACK_SKIP_ROWS,hs),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xn),W===0&&G.generateMipmaps&&z.generateMipmap(Ze),ye.unbindTexture()},this.copyTextureToTexture3D=function(P,G,J=null,Y=null,W=0){return P.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Y=arguments[1]||null,P=arguments[2],G=arguments[3],W=arguments[4]||0),ia('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,G,J,Y,W)},this.initRenderTarget=function(P){le.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),ye.unbindTexture()},this.resetState=function(){b=0,E=0,R=null,ye.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ws}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}},Vn=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ma=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ku,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ts()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jn=new A,yo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ga=class extends is{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$o=new A,jr=new A,Qr=new A,eo=new oe,Jo=new oe,Dp=new $e,cl=new A,jo=new A,ul=new A,kf=new oe,nu=new oe,Of=new oe,Ul=class extends gn{constructor(e=new ga){if(super(),this.isSprite=!0,this.type="Sprite",Jr===void 0){Jr=new Ye;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ma(t,5);Jr.setIndex([0,1,2,0,2,3]),Jr.setAttribute("position",new yo(n,3,0,!1)),Jr.setAttribute("uv",new yo(n,2,3,!1))}this.geometry=Jr,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jr.setFromMatrixScale(this.matrixWorld),Dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-Qr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;hl(cl.set(-.5,-.5,0),Qr,o,jr,s,r),hl(jo.set(.5,-.5,0),Qr,o,jr,s,r),hl(ul.set(.5,.5,0),Qr,o,jr,s,r),kf.set(0,0),nu.set(1,0),Of.set(1,1);let a=e.ray.intersectTriangle(cl,jo,ul,!1,$o);if(a===null&&(hl(jo.set(-.5,.5,0),Qr,o,jr,s,r),nu.set(0,1),a=e.ray.intersectTriangle(cl,ul,jo,!1,$o),a===null))return;let l=e.ray.origin.distanceTo($o);l<e.near||l>e.far||t.push({distance:l,point:$o.clone(),uv:Vs.getInterpolation($o,cl,jo,ul,kf,nu,Of,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};yr=class extends wn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=_i,u=_i,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ct=class extends qe{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},to=new $e,Vf=new $e,dl=[],Wf=new ri,R1=new $e,Qo=new ae,ea=new bn,vn=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ct(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,R1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),Wf.copy(e.boundingBox).applyMatrix4(to),this.boundingBox.union(Wf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,to),ea.copy(e.boundingSphere).applyMatrix4(to),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Qo.geometry=this.geometry,Qo.material=this.material,Qo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,to),Vf.multiplyMatrices(n,to),Qo.matrixWorld=Vf,Qo.raycast(e,dl);for(let o=0,a=dl.length;o<a;o++){let l=dl[o];l.instanceId=r,l.object=this,t.push(l)}dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ct(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yr(new Float32Array(s*this.count),s,this.count,kh,es));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},_o=class extends is{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fl=new A,Nl=new A,Gf=new $e,ta=new fo,fl=new bn,iu=new A,Xf=new A,va=class extends gn{constructor(e=new Ye,t=new _o){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fl.fromBufferAttribute(t,s-1),Nl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fl.distanceTo(Nl);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;Gf.copy(s).invert(),ta.copy(e.ray).applyMatrix4(Gf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),_=u.getX(v+1),M=pl(this,e,ta,l,p,_);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=pl(this,e,ta,l,v,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=pl(this,e,ta,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=pl(this,e,ta,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};qf=new A,Yf=new A,Mo=class extends va{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qf.fromBufferAttribute(t,s),Yf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qf.distanceTo(Yf);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xa=class extends is{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kf=new $e,ch=new fo,ml=new bn,gl=new A,nn=class extends gn{constructor(e=new Ye,t=new xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(s),ml.radius+=r,e.ray.intersectsSphere(ml)===!1)return;Kf.copy(s).invert(),ch.copy(e.ray).applyMatrix4(Kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,v=f;g<v;g++){let m=c.getX(g);gl.fromBufferAttribute(d,m),Zf(gl,m,l,s,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)gl.fromBufferAttribute(d,g),Zf(gl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Gi=class extends wn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],o=[],a=new A,l=new $e;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Un(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Un(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ya=class extends Ci{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},uh=class extends ya{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};vl=new A,su=new Yh,ru=new Yh,ou=new Yh,wo=class extends Ci{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(vl.subVectors(s[0],s[1]).add(s[0]),c=vl);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(vl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),su.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,m),ru.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,m),ou.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(su.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ru.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),ou.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(su.calc(l),ru.calc(l),ou.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};zl=class extends Ci{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ca(e,s.x,r.x,o.x,a.x),ca(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hh=class extends Ci{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ca(e,s.x,r.x,o.x,a.x),ca(e,s.y,r.y,o.y,a.y),ca(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hl=class extends Ci{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dh=class extends Ci{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends Ci{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(la(e,s.x,r.x,o.x),la(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fh=class extends Ci{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(la(e,s.x,r.x,o.x),la(e,s.y,r.y,o.y),la(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kl=class extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set($f(a,l.x,c.x,u.x,d.x),$f(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},Jf=Object.freeze({__proto__:null,ArcCurve:uh,CatmullRomCurve3:wo,CubicBezierCurve:zl,CubicBezierCurve3:hh,EllipseCurve:ya,LineCurve:Hl,LineCurve3:dh,QuadraticBezierCurve:Bl,QuadraticBezierCurve3:fh,SplineCurve:kl}),ph=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Jf[s.type]().fromJSON(s))}return this}},Ol=class extends ph{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Hl(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Bl(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new zl(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new kl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ya(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ss=class i extends Ye{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Un(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,d=new A,h=new oe,f=new A,g=new A,v=new A,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){let M=n+_*u*s,x=Math.sin(M),T=Math.cos(M);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*x,d.y=e[b].y,d.z=e[b].x*T,o.push(d.x,d.y,d.z),h.x=_/t,h.y=b/(e.length-1),a.push(h.x,h.y);let E=l[3*b+0]*x,R=l[3*b+1],w=l[3*b+0]*T;c.push(E,R,w)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let x=M+_*e.length,T=x,b=x+e.length,E=x+e.length+1,R=x+1;r.push(T,b,R),r.push(E,R,b)}this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},bo=class i extends Ye{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new A,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rs=class i extends Ye{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,v=[],m=n/2,p=0;_(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Je(d,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(f,2));function _(){let x=new A,T=new A,b=0,E=(t-e)/n;for(let R=0;R<=r;R++){let w=[],y=R/r,C=y*(t-e)+e;for(let I=0;I<=s;I++){let D=I/s,F=D*l+a,B=Math.sin(F),N=Math.cos(F);T.x=C*B,T.y=-y*n+m,T.z=C*N,d.push(T.x,T.y,T.z),x.set(B,E,N).normalize(),h.push(x.x,x.y,x.z),f.push(D,1-y),w.push(g++)}v.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){let y=v[w][R],C=v[w+1][R],I=v[w+1][R+1],D=v[w][R+1];(e>0||w!==0)&&(u.push(y,C,D),b+=3),(t>0||w!==r-1)&&(u.push(C,I,D),b+=3)}c.addGroup(p,b,0),p+=b}function M(x){let T=g,b=new oe,E=new A,R=0,w=x===!0?e:t,y=x===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*y,0),h.push(0,y,0),f.push(.5,.5),g++;let C=g;for(let I=0;I<=s;I++){let F=I/s*l+a,B=Math.cos(F),N=Math.sin(F);E.x=w*N,E.y=m*y,E.z=w*B,d.push(E.x,E.y,E.z),h.push(0,y,0),b.x=B*.5+.5,b.y=N*.5*y+.5,f.push(b.x,b.y),g++}for(let I=0;I<s;I++){let D=T+I,F=C+I;x===!0?u.push(F,F+1,D):u.push(F+1,F,D),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mh=class i extends Ye{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let M=new A,x=new A,T=new A;for(let b=0;b<t.length;b+=3)f(t[b+0],M),f(t[b+1],x),f(t[b+2],T),l(M,x,T,_)}function l(_,M,x,T){let b=T+1,E=[];for(let R=0;R<=b;R++){E[R]=[];let w=_.clone().lerp(x,R/b),y=M.clone().lerp(x,R/b),C=b-R;for(let I=0;I<=C;I++)I===0&&R===b?E[R][I]=w:E[R][I]=w.clone().lerp(y,I/C)}for(let R=0;R<b;R++)for(let w=0;w<2*(b-R)-1;w++){let y=Math.floor(w/2);w%2===0?(h(E[R][y+1]),h(E[R+1][y]),h(E[R][y])):(h(E[R][y+1]),h(E[R+1][y+1]),h(E[R+1][y]))}}function c(_){let M=new A;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(_),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){let _=new A;for(let M=0;M<r.length;M+=3){_.x=r[M+0],_.y=r[M+1],_.z=r[M+2];let x=m(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;o.push(x,1-T)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){let M=o[_+0],x=o[_+2],T=o[_+4],b=Math.max(M,x,T),E=Math.min(M,x,T);b>.9&&E<.1&&(M<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function f(_,M){let x=_*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){let _=new A,M=new A,x=new A,T=new A,b=new oe,E=new oe,R=new oe;for(let w=0,y=0;w<r.length;w+=9,y+=6){_.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),T.copy(_).add(M).add(x).divideScalar(3);let C=m(T);v(b,y+0,_,C),v(E,y+2,M,C),v(R,y+4,x,C)}}function v(_,M,x,T){T<0&&_.x===1&&(o[M]=_.x-1),x.x===0&&x.z===0&&(o[M]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Eo=class extends Ol{constructor(e){super(e),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ol().fromJSON(s))}return this}},N1={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Up(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,d,h,f;if(n&&(r=O1(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)d=i[g],h=i[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return _a(r,o,t,a,l,f,0),o}};ua=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Qf(e),ep(n,e);let o=e.length;t.forEach(Qf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ep(n,t[l]);let a=N1.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Vl=class i extends mh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ba=class i extends Ye{constructor(e=new Eo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function c(u){let d=s.length/3,h=u.extractPoints(t),f=h.shape,g=h.holes;ua.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];ua.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=ua.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){let _=v[m],M=_[0]+d,x=_[1]+d,T=_[2]+d;n.push(M,x,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Q1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};zn=class i extends Ye{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new A,h=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],M=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let b=T/t;d.x=-e*Math.cos(s+b*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+b*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(b+x,1-M),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=u[p][_+1],x=u[p][_],T=u[p+1][_],b=u[p+1][_+1];(p!==0||o>0)&&f.push(M,x,b),(p!==n-1||l<Math.PI)&&f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Wl=class extends ve{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Wt=class extends is{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wp,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};So=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xh=class extends So{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gd:r=e,a=2*t-n;break;case Xd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gd:o=e,l=2*n-t;break;case Xd:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,_=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+_*o[c+T]+M*o[l+T]+x*o[d+T];return r}},yh=class extends So{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}},_h=class extends So{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_l(t,this.TimeBufferType),this.values=_l(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_l(e.times,Array),values:_l(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _h(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Al:t=this.InterpolantFactoryMethodDiscrete;break;case Yu:t=this.InterpolantFactoryMethodLinear;break;case Cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Al;case this.InterpolantFactoryMethodLinear:return Yu;case this.InterpolantFactoryMethodSmooth:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&e_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=Yu;Mr=class extends Xi{constructor(e,t,n){super(e,t,n)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=Al;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;Mh=class extends Xi{};Mh.prototype.ValueTypeName="color";wh=class extends Xi{};wh.prototype.ValueTypeName="number";bh=class extends So{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Gl=class extends Xi{InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}};Gl.prototype.ValueTypeName="quaternion";Gl.prototype.InterpolantFactoryMethodSmooth=void 0;wr=class extends Xi{constructor(e,t,n){super(e,t,n)}};wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Al;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;Eh=class extends Xi{};Eh.prototype.ValueTypeName="vector";tp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Sh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Kh=new Sh,Ea=class{constructor(e){this.manager=e!==void 0?e:Kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";Th=class extends Ea{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=tp.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=fa("img");function l(){u(),tp.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}},Xl=class extends Ea{constructor(e){super(e)}load(e,t,n,s){let r=new wn,o=new Th(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},To=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Pi=class extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},au=new $e,np=new A,ip=new A,ql=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),ip.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ip),t.updateMatrixWorld(),au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sp=new $e,na=new A,lu=new A,Ah=class extends ql{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),n.position.copy(na),lu.copy(n.position),lu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lu),n.updateMatrixWorld(),s.makeTranslation(-na.x,-na.y,-na.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp)}},Ao=class extends To{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Rh=class extends ql{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oi=class extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Rh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Yl=class extends To{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Wn=class extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ro=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=rp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Zh="\\[\\]\\.:\\/",t_=new RegExp("["+Zh+"]","g"),$h="[^"+Zh+"]",n_="[^"+Zh.replace("\\.","")+"]",i_=/((?:WC+[\/:])*)/.source.replace("WC",$h),s_=/(WCOD+)?/.source.replace("WCOD",n_),r_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),o_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),a_=new RegExp("^"+i_+s_+r_+o_+"$"),l_=["material","materials","bones","map"],Ch=class{constructor(e,t,n){let s=n||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(e){let t=a_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);l_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=Ch;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];pM=new Float32Array(1),op=new $e,Kl=class{constructor(e,t,n=0,s=1/0){this.ray=new fo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(op),this}intersectObject(e,t=!0,n=[]){return Ph(e,this,n,t),n.sort(ap),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ph(e[s],this,n,t);return n.sort(ap),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih)});var fd={};U0(fd,{computeMikkTSpaceTangents:()=>C_,computeMorphedAttributes:()=>z_,deepCloneAttribute:()=>I_,deinterleaveAttribute:()=>fc,deinterleaveGeometry:()=>D_,estimateBytesUsed:()=>U_,interleaveAttributes:()=>L_,mergeAttributes:()=>dd,mergeGeometries:()=>P_,mergeGroups:()=>H_,mergeVertices:()=>F_,toCreasedNormals:()=>B_,toTrianglesDrawMode:()=>N_});function C_(i,e,t=!0){if(!e||!e.isReady)throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");if(!i.hasAttribute("position")||!i.hasAttribute("normal")||!i.hasAttribute("uv"))throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function n(o){if(o.normalized||o.isInterleavedBufferAttribute){let a=new Float32Array(o.count*o.itemSize);for(let l=0,c=0;l<o.count;l++)a[c++]=o.getX(l),a[c++]=o.getY(l),o.itemSize>2&&(a[c++]=o.getZ(l));return a}return o.array instanceof Float32Array?o.array:new Float32Array(o.array)}let s=i.index?i.toNonIndexed():i,r=e.generateTangents(n(s.attributes.position),n(s.attributes.normal),n(s.attributes.uv));if(t)for(let o=3;o<r.length;o+=4)r[o]*=-1;return s.setAttribute("tangent",new qe(r,4)),i!==s&&i.copy(s),i}function P_(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ye,c=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=dd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);let g=dd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function dd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new qe(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){let v=u.getComponent(h,g);a.setComponent(h+d,g,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function I_(i){return i.isInstancedInterleavedBufferAttribute||i.isInterleavedBufferAttribute?fc(i):i.isInstancedBufferAttribute?new Ct().copy(i):new qe().copy(i)}function L_(i){let e,t=0,n=0;for(let c=0,u=i.length;c<u;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=d.array.length,n+=d.itemSize}let s=new ma(new e(t),n),r=0,o=[],a=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,u=i.length;c<u;c++){let d=i[c],h=d.itemSize,f=d.count,g=new yo(s,h,r,d.normalized);o.push(g),r+=h;for(let v=0;v<f;v++)for(let m=0;m<h;m++)g[l[m]](v,d[a[m]](v))}return o}function fc(i){let e=i.data.array.constructor,t=i.count,n=i.itemSize,s=i.normalized,r=new e(t*n),o;i.isInstancedInterleavedBufferAttribute?o=new Ct(r,n,s,i.meshPerAttribute):o=new qe(r,n,s);for(let a=0;a<t;a++)o.setX(a,i.getX(a)),n>=2&&o.setY(a,i.getY(a)),n>=3&&o.setZ(a,i.getZ(a)),n>=4&&o.setW(a,i.getW(a));return o}function D_(i){let e=i.attributes,t=i.morphTargets,n=new Map;for(let s in e){let r=e[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,fc(r)),e[s]=n.get(r))}for(let s in t){let r=t[s];r.isInterleavedBufferAttribute&&(n.has(r)||n.set(r,fc(r)),t[s]=n.get(r))}}function U_(i){let e=0;for(let n in i.attributes){let s=i.getAttribute(n);e+=s.count*s.itemSize*s.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function F_(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],d=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let _=0,M=a.length;_<M;_++){let x=a[_],T=i.attributes[x];l[x]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);let b=i.morphAttributes[x];b&&(c[x]||(c[x]=[]),b.forEach((E,R)=>{let w=new E.array.constructor(E.count*E.itemSize);c[x][R]=new E.constructor(w,E.itemSize,E.normalized)}))}let f=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=f*v;for(let _=0;_<r;_++){let M=n?n.getX(_):_,x="";for(let T=0,b=a.length;T<b;T++){let E=a[T],R=i.getAttribute(E),w=R.itemSize;for(let y=0;y<w;y++)x+=`${~~(R[d[y]](M)*v+m)},`}if(x in t)u.push(t[x]);else{for(let T=0,b=a.length;T<b;T++){let E=a[T],R=i.getAttribute(E),w=i.morphAttributes[E],y=R.itemSize,C=l[E],I=c[E];for(let D=0;D<y;D++){let F=d[D],B=h[D];if(C[B](o,R[F](M)),w)for(let N=0,k=w.length;N<k;N++)I[N][B](o,w[N][F](M))}}t[x]=o,u.push(o),o++}}let p=i.clone();for(let _ in i.attributes){let M=l[_];if(p.setAttribute(_,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),_ in c)for(let x=0;x<c[_].length;x++){let T=c[_][x];p.morphAttributes[_][x]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return p.setIndex(u),p}function N_(i,e){if(e===_p)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gh||e===Mp){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Gh)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function z_(i){let e=new A,t=new A,n=new A,s=new A,r=new A,o=new A,a=new A,l=new A,c=new A;function u(H,Z,se,fe,_e,q,ne,re){e.fromBufferAttribute(Z,_e),t.fromBufferAttribute(Z,q),n.fromBufferAttribute(Z,ne);let K=H.morphTargetInfluences;if(se&&K){a.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let he=0,Ue=se.length;he<Ue;he++){let Ee=K[he],Qe=se[he];Ee!==0&&(s.fromBufferAttribute(Qe,_e),r.fromBufferAttribute(Qe,q),o.fromBufferAttribute(Qe,ne),fe?(a.addScaledVector(s,Ee),l.addScaledVector(r,Ee),c.addScaledVector(o,Ee)):(a.addScaledVector(s.sub(e),Ee),l.addScaledVector(r.sub(t),Ee),c.addScaledVector(o.sub(n),Ee)))}e.add(a),t.add(l),n.add(c)}H.isSkinnedMesh&&(H.applyBoneTransform(_e,e),H.applyBoneTransform(q,t),H.applyBoneTransform(ne,n)),re[_e*3+0]=e.x,re[_e*3+1]=e.y,re[_e*3+2]=e.z,re[q*3+0]=t.x,re[q*3+1]=t.y,re[q*3+2]=t.z,re[ne*3+0]=n.x,re[ne*3+1]=n.y,re[ne*3+2]=n.z}let d=i.geometry,h=i.material,f,g,v,m=d.index,p=d.attributes.position,_=d.morphAttributes.position,M=d.morphTargetsRelative,x=d.attributes.normal,T=d.morphAttributes.position,b=d.groups,E=d.drawRange,R,w,y,C,I,D,F,B=new Float32Array(p.count*p.itemSize),N=new Float32Array(x.count*x.itemSize);if(m!==null)if(Array.isArray(h))for(R=0,y=b.length;R<y;R++)for(I=b[R],D=Math.max(I.start,E.start),F=Math.min(I.start+I.count,E.start+E.count),w=D,C=F;w<C;w+=3)f=m.getX(w),g=m.getX(w+1),v=m.getX(w+2),u(i,p,_,M,f,g,v,B),u(i,x,T,M,f,g,v,N);else for(D=Math.max(0,E.start),F=Math.min(m.count,E.start+E.count),R=D,y=F;R<y;R+=3)f=m.getX(R),g=m.getX(R+1),v=m.getX(R+2),u(i,p,_,M,f,g,v,B),u(i,x,T,M,f,g,v,N);else if(Array.isArray(h))for(R=0,y=b.length;R<y;R++)for(I=b[R],D=Math.max(I.start,E.start),F=Math.min(I.start+I.count,E.start+E.count),w=D,C=F;w<C;w+=3)f=w,g=w+1,v=w+2,u(i,p,_,M,f,g,v,B),u(i,x,T,M,f,g,v,N);else for(D=Math.max(0,E.start),F=Math.min(p.count,E.start+E.count),R=D,y=F;R<y;R+=3)f=R,g=R+1,v=R+2,u(i,p,_,M,f,g,v,B),u(i,x,T,M,f,g,v,N);let k=new Je(B,3),U=new Je(N,3);return{positionAttribute:p,normalAttribute:x,morphedPositionAttribute:k,morphedNormalAttribute:U}}function H_(i){if(i.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),i;let e=i.groups;if(e=e.sort((o,a)=>o.materialIndex!==a.materialIndex?o.materialIndex-a.materialIndex:o.start-a.start),i.getIndex()===null){let o=i.getAttribute("position"),a=[];for(let l=0;l<o.count;l+=3)a.push(l,l+1,l+2);i.setIndex(a)}let t=i.getIndex(),n=[];for(let o=0;o<e.length;o++){let a=e[o],l=a.start,c=l+a.count;for(let u=l;u<c;u++)n.push(t.getX(u))}i.dispose(),i.setIndex(n);let s=0;for(let o=0;o<e.length;o++){let a=e[o];a.start=s,s+=a.count}let r=e[0];i.groups=[r];for(let o=1;o<e.length;o++){let a=e[o];r.materialIndex===a.materialIndex?r.count+=a.count:(r=a,i.groups.push(r))}return i}function B_(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,s=[new A,new A,new A],r=new A,o=new A,a=new A,l=new A;function c(v){let m=~~(v.x*n),p=~~(v.y*n),_=~~(v.z*n);return`${m},${p},${_}`}let u=i.index?i.toNonIndexed():i,d=u.attributes.position,h={};for(let v=0,m=d.count/3;v<m;v++){let p=3*v,_=s[0].fromBufferAttribute(d,p+0),M=s[1].fromBufferAttribute(d,p+1),x=s[2].fromBufferAttribute(d,p+2);r.subVectors(x,M),o.subVectors(_,M);let T=new A().crossVectors(r,o).normalize();for(let b=0;b<3;b++){let E=s[b],R=c(E);R in h||(h[R]=[]),h[R].push(T)}}let f=new Float32Array(d.count*3),g=new qe(f,3,!1);for(let v=0,m=d.count/3;v<m;v++){let p=3*v,_=s[0].fromBufferAttribute(d,p+0),M=s[1].fromBufferAttribute(d,p+1),x=s[2].fromBufferAttribute(d,p+2);r.subVectors(x,M),o.subVectors(_,M),a.crossVectors(r,o).normalize();for(let T=0;T<3;T++){let b=s[T],E=c(b),R=h[E];l.set(0,0,0);for(let w=0,y=R.length;w<y;w++){let C=R[w];a.dot(C)>t&&l.add(C)}l.normalize(),g.setXYZ(p+T,l.x,l.y,l.z)}}return u.setAttribute("normal",g),u}var pd=kd(()=>{It()});It();It();var Ql={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};It();It();var Mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},c_=new vo(-1,1,1,-1,0,1),Jh=class extends Ye{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},u_=new Jh,Ks=class{constructor(e){this._mesh=new ae(u_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,c_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Zs=class extends Mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ve?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=os.clone(e.uniforms),this.material=new ve({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ks(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sa=class extends Mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ec=class extends Mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var tc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zs(Ql),this.copyPass.material.blending=Ri,this.clock=new Ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sa!==void 0&&(o instanceof Sa?n=!0:o instanceof ec&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};It();var nc=class extends Mi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};It();It();var zp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Io=class i extends Mi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new de(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,o,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let h=new jt(r,o,{type:sn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new jt(r,o,{type:sn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=zp;this.highPassUniforms=os.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Ql;this.copyUniforms=os.clone(u.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Dt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new de,this.oldClearAlpha=1,this.basic=new On,this.fsQuad=new Ks(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ve({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ve({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Io.BlurDirectionX=new oe(1,0);Io.BlurDirectionY=new oe(0,1);It();var Hp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ic=class extends Mi{constructor(){super();let e=Hp;this.uniforms=os.clone(e.uniforms),this.material=new Wl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===br?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};It();var Ts=class i extends ae{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new ln;let n=this,s=t.color!==void 0?new de(t.color):new de(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new vi,d=new A,h=new A,f=new A,g=new $e,v=new A(0,0,-1),m=new st,p=new A,_=new A,M=new st,x=new $e,T=this.camera,b=new jt(r,o,{samples:c,type:sn}),E=new ve({name:l.name!==void 0?l.name:"unspecified",uniforms:os.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=b.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=x,this.material=E,this.onBeforeRender=function(R,w,y){if(h.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(h,f),p.dot(d)>0)return;p.reflect(d).negate(),p.add(h),g.extractRotation(y.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(f),_.subVectors(h,v),_.reflect(d).negate(),_.add(h),T.position.copy(p),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(d),T.lookAt(_),T.far=y.far,T.updateMatrixWorld(),T.projectionMatrix.copy(y.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(T.projectionMatrix),x.multiply(T.matrixWorldInverse),x.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let C=T.projectionMatrix;M.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],M.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],M.z=-1,M.w=(1+C.elements[10])/C.elements[14],m.multiplyScalar(2/m.dot(M)),C.elements[2]=m.x,C.elements[6]=m.y,C.elements[10]=m.z+1-a,C.elements[14]=m.w,n.visible=!1;let I=R.getRenderTarget(),D=R.xr.enabled,F=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(b),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(w,T),R.xr.enabled=D,R.shadowMap.autoUpdate=F,R.setRenderTarget(I);let B=y.viewport;B!==void 0&&R.state.viewport(B),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};Ts.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};It();var ai=`
  uniform float uTime, uFogK; uniform vec3 uSun, uFogCol;
  vec3 applyFog(vec3 c, vec3 w){
    vec3 d = w - cameraPosition; float l = length(d);
    float f = 1.0 - exp(-max(l - 25.0, 0.0) * uFogK);
    float s = pow(max(dot(d / l, uSun), 0.0), 6.0);
    vec3 col = uFogCol * mix(vec3(1.0), vec3(1.35, 1.05, 0.75), s);
    return mix(c, col, f);
  }`,Bp=`
  float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y); }`;function Ta(i,e,t=1,n=1){let s=new Ye,r=[],o=[],a=4;for(let f=0;f<a;f++){let g=f/a;r.push(-.5,g,0,.5,g,0)}r.push(0,1,0);for(let f=0;f<a-1;f++){let g=f*2;o.push(g,g+1,g+3,g,g+3,g+2)}o.push((a-1)*2,(a-1)*2+1,a*2),s.setAttribute("position",new Je(r,3)),s.setIndex(o);let l=new Wn;l.index=s.index,l.attributes.position=s.attributes.position;let c=n*9301+49297,u=()=>(c=c*16807%2147483647)/2147483647,d=new Float32Array(i*4),h=new Float32Array(i*2);for(let f=0;f<i;f++)d[f*4]=u()*e,d[f*4+1]=u()*e,d[f*4+2]=u()*Math.PI*2,d[f*4+3]=u(),h[f*2]=u(),h[f*2+1]=u()*2-1;return l.setAttribute("aOff",new Ct(d,4)),l.setAttribute("aVar",new Ct(h,2)),l.instanceCount=i,l}function jh(i,e=!1){return new ve({side:gt,uniforms:{uNear:{value:0},...i},defines:e?{FAR:""}:{},vertexShader:`
      ${Bp}
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
      ${ai}
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
      }`})}It();function kp(i,e,t){let n=new Vl(1,0),s=new Wn;s.attributes.position=n.attributes.position,s.attributes.normal=n.attributes.normal;let r=[],o=[],a=77,l=()=>(a=a*16807%2147483647)/2147483647;for(let[u,d,h,f,g]of i){let v=Math.max(g,.6)*1.05,m=Math.round(e*Math.min(1.6,f*v/9));for(let p=0;p<m;p++){let _=Math.pow(l(),.85),M=(_<.22?Math.sqrt(_/.22):Math.pow((1-_)/.78,.85))*v;_<.04&&(M*=.5);let x=l()*Math.PI*2,T=M*(.55+.45*Math.sqrt(l())),b=.16+l()*.2;r.push(u+Math.cos(x)*T,d+.25+_*f,h+Math.sin(x)*T,b*(.7+.6*(1-_))),o.push(u,d,h,f)}}s.setAttribute("aC",new Ct(new Float32Array(r),4)),s.setAttribute("aT",new Ct(new Float32Array(o),4)),s.instanceCount=r.length/4;let c=new ae(s,new ve({uniforms:t,vertexShader:`
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
      ${ai}
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
      }`}));return c.frustumCulled=!1,c}It();var Qh=(i,e,t,n)=>Math.floor(i/n)+","+Math.floor(e/n)+","+Math.floor(t/n),ed=(i,e,t,n)=>{var r;let s=(r=i.userData).cells||(r.cells=[]);for(let o of t)o.userData.far=n>0?5/n:1e9,s.push(o);return e};function Op(i,e,{cell:t=48,fogK:n=0,minTris:s=24e3}={}){let r=i.geometry,o=r.index,a=r.attributes.position;if(!o||o.count/3<s)return i;let l=o.count/3,c=o.array,u=a.array,d=new Int32Array(l),h=new Map,f=[];for(let T=0;T<l;T++){let b=c[T*3]*3,E=c[T*3+1]*3,R=c[T*3+2]*3,w=Qh((u[b]+u[E]+u[R])/3,(u[b+1]+u[E+1]+u[R+1])/3,(u[b+2]+u[E+2]+u[R+2])/3,t),y=h.get(w);y===void 0&&(y=f.length,h.set(w,y),f.push(w)),d[T]=y}let g=f.length,v=new Uint32Array(g+1);for(let T=0;T<l;T++)v[d[T]+1]++;for(let T=0;T<g;T++)v[T+1]+=v[T];let m=v.slice(0,g),p=new Uint32Array(c.length);for(let T=0;T<l;T++){let b=m[d[T]]++*3;p[b]=c[T*3],p[b+1]=c[T*3+1],p[b+2]=c[T*3+2]}let _=new qe(p,1),M=new Fn,x=[];for(let T=0;T<g;T++){let b=v[T],E=v[T+1];if(E===b)continue;let R=new Ye;for(let C in r.attributes)R.setAttribute(C,r.attributes[C]);R.setIndex(_),R.setDrawRange(b*3,(E-b)*3);let w=new ri;for(let C=b*3;C<E*3;C++){let I=p[C]*3;w.expandByPoint(Vp.set(u[I],u[I+1],u[I+2]))}R.boundingBox=w,R.boundingSphere=w.getBoundingSphere(new bn);let y=new ae(R,i.material);y.frustumCulled=!0,y.renderOrder=i.renderOrder,y.layers.mask=i.layers.mask,M.add(y),x.push(y)}return M.name=(i.name||"static")+"-cells",M.renderOrder=i.renderOrder,ed(e,M,x,n)}var Vp=new A;function Lo(i,e,{cell:t=40,fogK:n=0,minCount:s=160,far:r=0}={}){let o=i.count;if(o<s)return i;let a=i.instanceMatrix.array,l=i.instanceColor?i.instanceColor.array:null,c=new Map;for(let h=0;h<o;h++){let f=Qh(a[h*16+12],a[h*16+13],a[h*16+14],t);(c.get(f)||c.set(f,[]).get(f)).push(h)}let u=new Fn,d=[];for(let h of c.values()){let f=new vn(i.geometry,i.material,h.length);h.forEach((g,v)=>{f.instanceMatrix.array.set(a.subarray(g*16,g*16+16),v*16),l&&f.setColorAt(v,h_.fromArray(l,g*3))}),f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.frustumCulled=!0,f.renderOrder=i.renderOrder,f.layers.mask=i.layers.mask,u.add(f),d.push(f)}if(u.name=(i.name||"instances")+"-cells",ed(e,u,d,n),r)for(let h of d)h.userData.far=Math.min(h.userData.far,r);return u}var h_=new de;function $s(i,e,{at:t="aC",cell:n=40,pad:s=3,fogK:r=0,minCount:o=400}={}){let a=i.geometry,l=a.instanceCount;if(!a.isInstancedBufferGeometry||l<o)return i;let c=[];for(let m in a.attributes)a.attributes[m].isInstancedBufferAttribute&&c.push(m);let u=a.attributes[t],d=u.array,h=u.itemSize,f=new Map;for(let m=0;m<l;m++){let p=Qh(d[m*h],d[m*h+1],d[m*h+2],n);(f.get(p)||f.set(p,[]).get(p)).push(m)}let g=new Fn,v=[];for(let m of f.values()){let p=new Wn;p.index=a.index;for(let x in a.attributes)c.includes(x)||p.setAttribute(x,a.attributes[x]);for(let x of c){let T=a.attributes[x],b=T.itemSize,E=new Float32Array(m.length*b);m.forEach((R,w)=>{for(let y=0;y<b;y++)E[w*b+y]=T.array[R*b+y]}),p.setAttribute(x,new Ct(E,b))}p.instanceCount=m.length;let _=new ri;for(let x of m)_.expandByPoint(Vp.set(d[x*h],d[x*h+1],d[x*h+2]));_.expandByScalar(s),p.boundingBox=_,p.boundingSphere=_.getBoundingSphere(new bn);let M=new ae(p,i.material);M.frustumCulled=!0,M.renderOrder=i.renderOrder,M.layers.mask=i.layers.mask,g.add(M),v.push(M)}return g.name=(i.name||"instanced-geo")+"-cells",ed(e,g,v,r)}var sc=new bn;function td(i,e){let t=i.userData.cells;if(t)for(let n of t){n.isInstancedMesh?(n.boundingSphere||n.computeBoundingSphere(),sc.copy(n.boundingSphere)):sc.copy(n.geometry.boundingSphere);let s=Math.max(0,e.distanceTo(sc.center)-sc.radius);n.visible=s<n.userData.far}}It();var rc=(i,e)=>i-e*Math.floor(i/e),Wp=new $e,Gp=new Ss,nd=new ri;function Aa(i,{tile:e,n:t=8,lod:n=16}){let s=i.geometry,r=s.attributes.aOff.array,o=s.attributes.aVar.array,a=s.instanceCount,l=s.attributes.position.count-1,c=new qe(new Uint16Array([0,1,l]),1),u=e/t,d=Array.from({length:t*t},()=>[]);for(let v=0;v<a;v++){let m=Math.min(t-1,Math.floor(rc(r[v*4],e)/u)),p=Math.min(t-1,Math.floor(rc(r[v*4+1],e)/u));d[p*t+m].push(v)}let h=new Fn,f=[];d.forEach((v,m)=>{if(!v.length)return;let p=new Wn;p.index=s.index,p.attributes.position=s.attributes.position;let _=new Float32Array(v.length*4),M=new Float32Array(v.length*2);v.forEach((b,E)=>{_.set(r.subarray(b*4,b*4+4),E*4),M.set(o.subarray(b*2,b*2+2),E*2)}),p.setAttribute("aOff",new Ct(_,4)),p.setAttribute("aVar",new Ct(M,2)),p.instanceCount=v.length;let x=new Wn;x.index=c,x.attributes.position=s.attributes.position,x.setAttribute("aOff",p.attributes.aOff),x.setAttribute("aVar",p.attributes.aVar),x.instanceCount=v.length;let T=new ae(p,i.material);T.frustumCulled=!1,T.layers.mask=i.layers.mask,T.renderOrder=i.renderOrder,T.userData.grass=!0,h.add(T),f.push({m:T,full:p,simple:x,cx:(m%t+.5)*u,cz:(Math.floor(m/t)+.5)*u})}),h.layers.mask=i.layers.mask;let g=u*.7072+2;return{group:h,update(v,m,p,_=0){v.updateMatrixWorld(),Wp.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),Gp.setFromProjectionMatrix(Wp);let M=v.position.x,x=v.position.y,T=v.position.z,b=e/2;for(let E of f){let R=m.x+rc(E.cx-m.x+b,e)-b,w=m.y+rc(E.cz-m.y+b,e)-b,y=Math.hypot(R-m.x,w-m.y)-g<p;if(y&&_&&(y=Math.hypot(R-M,w-T)+g>_-6),y&&(nd.min.set(R-g,x-80,w-g),nd.max.set(R+g,x+30,w+g),y=Gp.intersectsBox(nd)),E.m.visible=y,y){let C=Math.max(0,Math.hypot(R-M,w-T)-g);E.m.geometry=C>n?E.simple:E.full}}}}}It();var Ra={y:9,z:150},qi=7.3,oc=8.1,ac=5.5+2.9,Xp=[{pos:[0,9.4,Ra.z+26],tgt:[0,5.2,Ra.z],w:1.5},{pos:[-12,7.6,Ra.z-4],tgt:[0,10,60],w:1.4},{pos:[0,7.5,128],tgt:[0,10,20],w:1.4},{pos:[0,1.75,82],tgt:[0,6.5,26],w:1.4},{pos:[-4.3,1.9,48],tgt:[0,7.5,24],w:1},{pos:[2,3.4,18],tgt:[0,14,-30],w:1.2},{pos:[0,5.8,2],tgt:[0,20,-16],w:1.2},{pos:[0,6.8,-9],tgt:[0,9,-40],w:1},{pos:[0,qi,-20],tgt:[0,8.6,-50],w:1},{pos:[0,qi,-27.5],tgt:[0,8.6,-60],w:1.1},{pos:[.6,qi,-31.4],tgt:[-oc,ac,-32],w:1.5},{pos:[0,qi,-34.6],tgt:[0,8.5,-70],w:.9},{pos:[-.6,qi,-35.8],tgt:[oc,ac,-36.4],w:1.5},{pos:[0,qi,-39],tgt:[0,8.5,-70],w:.9},{pos:[.6,qi,-40.2],tgt:[-oc,ac,-40.8],w:1.5},{pos:[0,qi,-43.4],tgt:[0,8.4,-70],w:.9},{pos:[-.6,qi,-44.6],tgt:[oc,ac,-45.2],w:1.2},{pos:[-.2,qi,-46.4],tgt:[0,8.2,-80],w:.8},{pos:[0,qi,-49],tgt:[0,8,-80],w:1},{pos:[0,7.4,-53],tgt:[0,7.6,-90],w:0}],js=[0];Xp.slice(0,-1).forEach(i=>js.push(js[js.length-1]+i.w));var id=js[js.length-1],Js=i=>js[i]/id,Er=js[2]/id,lc=i=>(js[2]+i*12.2)/id,Do=1,cc={pos:[0,9.1,-53.35],size:[4.5,7.2]};var QM=new A(0,Ra.y,Ra.z),qp=[{at:[0,Er*.55],kick:"Welcome to Nomadiic Horse Designs",line:"Turn our horse, then scroll to step inside."},{at:[Er*.55,lc(.2)],kick:"We are Nomadiic Horse Designs",line:"A very detailed design team from Bangalore, India."},{at:[lc(.2),lc(.36)],kick:"Our philosophy",line:"We build brands the way the Greeks built palaces: with proportion, patience and a little audacity."},{at:[lc(.36),Js(9)],kick:"What we make",line:"Branding and websites for founders who want to be remembered."},{at:[Js(9),Js(11)],kick:"About us",line:"Selected as Top 1% Framer Designers."},{at:[Js(11),Js(13)],kick:"About us",line:"Selected as Framer Experts by Team Framer."},{at:[Js(13),Js(15)],kick:"About us",line:"Selected as a Shopify Partner."},{at:[Js(15),1.01],kick:"About us",line:"20+ clients across India, the USA and Australia. Step through, and meet a few of them."}];function Qs(i=Xp){let e=i.length,t=new wo(i.map(x=>new A(...x.pos)),!1,"centripetal",.5),n=new wo(i.map(x=>new A(...x.tgt)),!1,"centripetal"),s=i.slice(0,-1).map(x=>x.w||1),r=[0];s.forEach(x=>r.push(r[r.length-1]+x));let o=r[r.length-1],a=4e3,l=t.getLengths(a),c=i.map((x,T)=>l[Math.round(T/(e-1)*a)]),u=s.map((x,T)=>Math.max(c[T+1]-c[T],.001)),d=s.map((x,T)=>r[T]+x/2),h=s.map((x,T)=>u[T]/x),f=x=>{if(x<=d[0])return h[0];for(let T=0;T<h.length-1;T++)if(x<=d[T+1])return dt.lerp(h[T],h[T+1],(x-d[T])/(d[T+1]-d[T]));return h[h.length-1]},g=x=>{let T=0,b=120;for(let E=0;E<b;E++)T+=f(r[x]+(E+.5)/b*s[x]);return T/b*s[x]};for(let x=0;x<60;x++)h=h.map((T,b)=>Math.max(.05,T*Math.pow(u[b]/Math.max(g(b),1e-6),.7)));let v=6e3,m=new Float32Array(v+1);for(let x=1;x<=v;x++){let T=(x-1)/v*o,b=x/v*o;m[x]=m[x-1]+f((T+b)/2)*(b-T)}let p=l[a]/m[v],_=x=>{let T=0,b=a;for(;T<b;){let y=T+b>>1;l[y]<x?T=y+1:b=y}let E=Math.max(1,T),R=l[E-1],w=l[E];return(E-1+(w>R?(x-R)/(w-R):0))/a},M=x=>{let T=dt.clamp(x,0,1)*v,b=Math.floor(T),E=T-b;return _((b>=v?m[v]:m[b]+(m[b+1]-m[b])*E)*p)};return{sample(x,T,b){let E=M(x);return t.getPoint(E,T),n.getPoint(E,b),E*(e-1)}}}var sd=[{lines:["Selected as","Top 1% Framer Designers"],x:-7.66,z:-32},{lines:["Selected as","Framer Experts by Team Framer"],x:7.66,z:-36.4},{lines:["Selected as","Shopify Partner"],x:-7.66,z:-40.8},{lines:["20+ clients","India \xB7 USA \xB7 Australia"],x:7.66,z:-45.2}];It();It();var uc=class extends Vn{constructor(){super();let e=new Nn;e.deleteAttribute("uv");let t=new Wt({side:qt}),n=new Wt,s=new Ao(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ae(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new ae(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new ae(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new ae(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new ae(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let d=new ae(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let h=new ae(e,Uo(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let f=new ae(e,Uo(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new ae(e,Uo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new ae(e,Uo(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new ae(e,Uo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new ae(e,Uo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Uo(i){let e=new On;return e.color.setScalar(i),e}function Kp(){let i=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,e=null,t=!1,n=0,s=0,r=2.5,o=-99,a=0,l=0,c=[.5,.7],u=.8,d=()=>{e&&(document.hidden?e.pause():t||e.play().catch(()=>{}))};typeof document<"u"&&document.addEventListener("visibilitychange",d);let h={flash:0,flashPos:c,rain:1,started:!1,get strikeId(){return a},start(f,g){if(h.started=!0,!!f)try{e=new Audio(g+"score.m4a"),e.loop=!0,e.volume=0,e.play().then(()=>{n=0}).catch(v=>{console.warn("[score]",v),e=null})}catch(v){console.warn("[score]",v),e=null}},strike(f=.6+Math.random()*.4,g=null){o=s,l=f,a++,c[0]=g?g[0]:.2+Math.random()*.6,c[1]=g?g[1]:.62+Math.random()*.3},mix:1,setMix(f){h.mix=f},amb:"",setAmb(f){h.amb=f},setMuted(f){t=f},get muted(){return t},get hasSound(){return!!e},update(f,g=!0){if(s+=f,e){let m=t?0:u*Math.min(1,n+=f*.4);e.volume+=(m-e.volume)*Math.min(1,f*3)}h.started&&g&&s>r&&(h.strike(),r=s+2.5+Math.random()*5.5);let v=s-o;return h.flash=v<0?0:(i?.3:1)*l*(v<.05?v/.05:Math.exp(-(v-.05)*14)+(v>.16&&v<.5?.75*Math.exp(-(v-.16)*9):0)+(v>.42?.35*Math.exp(-(v-.42)*6):0)),h.flash},destroy(){try{e&&e.pause(),document.removeEventListener("visibilitychange",d)}catch{}}};return h}var d_=`
.nst{position:absolute;inset:0;z-index:30;background:transparent;color:#dfe6f2;font-family:Satoshi,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden;cursor:default;transition:opacity 1.6s ease}
.nst canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.nst .bolt{pointer-events:none}
.nst .mark{position:absolute;left:50%;bottom:calc(6% + 78px);transform:translate(-50%,0);text-align:center;pointer-events:none;transition:opacity 1.2s ease, transform 2.4s cubic-bezier(.6,0,.2,1)}
.nst .mark .wm{font-family:"Nomadiic Line",Satoshi,sans-serif;font-size:13px;letter-spacing:.62em;padding-left:.62em;color:#e8edf6;white-space:nowrap}
.nst .mark .sub{margin-top:9px;font-size:7.5px;letter-spacing:.9em;padding-left:.9em;color:rgba(223,230,242,.55);text-transform:uppercase}
.nst .load{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(680px,88vw);display:flex;flex-direction:column;align-items:center;text-align:center;gap:0;transition:opacity .8s ease;pointer-events:none}
.nst .load .wm2{font-family:"Nomadiic Line",Satoshi,sans-serif;font-size:15px;letter-spacing:.55em;padding-left:.55em;color:#e8edf6;white-space:nowrap}
.nst .load .ttl{margin:26px 0 0;font:400 clamp(30px,4.4vw,54px)/1.1 "Instrument Serif",Georgia,serif;color:#f1f4f9;text-shadow:0 2px 30px rgba(5,8,16,.6)}
.nst .load .ttl em{font-style:italic;color:#f4d9b0}
.nst .load .row{margin-top:34px;display:flex;align-items:center;gap:14px}
.nst .load .tip{margin:16px auto 0;max-width:min(440px,86vw);font-size:13px;line-height:1.55;letter-spacing:.02em;color:rgba(223,230,242,.78)}
.nst.ld .mark{opacity:0}
.nst .load .bar{width:min(260px,52vw);height:2px;border-radius:2px;background:rgba(223,230,242,.16);position:relative;overflow:hidden}
.nst .load .bar i{position:absolute;inset:0;background:rgba(223,230,242,.75);transform-origin:0 50%;transform:scaleX(0);transition:transform .4s ease}
.nst .load .stage{margin-top:18px;min-height:1.5em;font-size:17px;line-height:1.5;letter-spacing:.01em;color:rgba(232,237,246,.85);transition:opacity .35s ease}
.nst .load .pc{font-size:13px;letter-spacing:.08em;color:rgba(223,230,242,.7);width:44px;text-align:left;font-variant-numeric:tabular-nums}
@media (max-width:640px){.nst .load .wm2{font-size:12px;letter-spacing:.45em}.nst .load .stage{font-size:15px}.nst .load .ttl{margin-top:20px}}
.nst .go{position:absolute;left:50%;bottom:6%;transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity 1.4s ease .2s}
.nst .go.on{opacity:1;pointer-events:auto}
.nst .go button{all:unset;cursor:pointer;font-size:12px;letter-spacing:.42em;padding:15px 26px 15px 30px;border:1px solid rgba(223,230,242,.38);color:#e8edf6;transition:border-color .4s, background .4s, letter-spacing .6s}
.nst .go button:hover{border-color:rgba(223,230,242,.9);background:rgba(223,230,242,.06);letter-spacing:.5em}
.nst .quiet{position:absolute;right:34px;bottom:9%;all:unset;position:absolute;right:34px;bottom:calc(6% + 15px);cursor:pointer;font-size:11px;letter-spacing:.28em;padding:12px 6px;color:rgba(223,230,242,.72);opacity:0;pointer-events:none;transition:opacity 1.4s ease .5s, color .3s}
.nst .quiet.on{opacity:1;pointer-events:auto}.nst .quiet:hover{color:#fff}.nst .go button:focus-visible,.nst .quiet:focus-visible,.nst-snd:focus-visible{outline:2px solid #ffd9a8;outline-offset:4px}
.nst .hint{position:absolute;left:34px;bottom:calc(6% + 15px);font-size:11px;letter-spacing:.28em;color:rgba(223,230,242,.62);opacity:0;transition:opacity 1.4s ease .8s}
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
`,Yp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",f_=`
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
}`;function Zp(i,e,t,{onEnter:n,onDone:s}={}){if(!document.getElementById("nst-css")){let ue=document.createElement("style");ue.id="nst-css",ue.textContent=d_,document.head.appendChild(ue)}try{for(let[ue,le]of[["instrument-serif.woff2","normal"],["instrument-serif-italic.woff2","italic"]])new FontFace("Instrument Serif",`url(${t}storm/${ue})`,{style:le}).load().then(S=>document.fonts.add(S)).catch(()=>{})}catch{}let r=document.createElement("div");r.className="nst ld",r.innerHTML=`<canvas></canvas><canvas class="bolt"></canvas>
    <div class="mark"><div class="wm">NOMADIIC HORSE DESIGNS</div></div>
    <div class="load"><div class="wm2">NOMADIIC HORSE DESIGNS</div><div class="ttl">We\u2019re building the world<br>you\u2019re about to <em>walk through.</em></div><div class="stage">Raising a marble palace above the clouds</div><div class="row"><div class="bar"><i></i></div><div class="pc">0%</div></div><div class="tip">A few seconds, only the first time. Every visit after is instant.</div></div>
    <div class="go"><button type="button">ENTER</button></div>
    <button class="quiet" type="button">WITHOUT SOUND</button>
    <div class="hint">HEADPHONES RECOMMENDED</div>`,i.appendChild(r);let[o,a]=r.querySelectorAll("canvas"),l=r.querySelector(".mark"),c=r.querySelector(".bar i"),u=r.querySelector(".pc"),d=r.querySelector(".go"),h=d.querySelector("button"),f=r.querySelector(".quiet"),g=r.querySelector(".hint"),v=r.querySelector(".load"),m=new xo({canvas:o,antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"});m.setClearColor(0,0),m.setPixelRatio(Math.min(devicePixelRatio,2));let p=matchMedia("(pointer: coarse)").matches?.3:.45,_=new jt(2,2),M=new wn;M.colorSpace=Mn;let x={uTime:{value:0},uFlash:{value:0},uDive:{value:0},uLoad:{value:0},uReady:{value:0},uFade:{value:0},uClear:{value:0},uMorph:{value:0},uMarkA:{value:1},uMarkR:{value:100},uMarkC:{value:new oe(0,0)},uRes:{value:new oe(1,1)},uFlashPos:{value:new oe(.5,.7)},tHorse:{value:M},uHorseAsp:{value:202/175}},T=new Image;T.crossOrigin="anonymous",T.onload=()=>{let ue=document.createElement("canvas");ue.width=700,ue.height=Math.round(700*T.height/T.width),ue.getContext("2d").drawImage(T,0,0,ue.width,ue.height),M.image=ue,M.generateMipmaps=!1,M.minFilter=tn,M.needsUpdate=!0,x.uHorseAsp.value=ue.height/ue.width},T.src=t+"storm/horse.svg";let b=new ae(new St(2,2),new ve({vertexShader:Yp,fragmentShader:f_,uniforms:x,depthTest:!1})),E=new Vn;E.add(b);let R=new mo,w=new Vn;w.add(new ae(new St(2,2),new ve({depthTest:!1,depthWrite:!1,blending:Ri,transparent:!1,uniforms:{tC:{value:null}},vertexShader:Yp,fragmentShader:"uniform sampler2D tC; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tC, vUv); }"}))),m.toneMapping=br,m.toneMappingExposure=1.15,m.outputColorSpace=Xt;let y=new Vn,C=new ln;C.matrixAutoUpdate=!1,y.environment=new Ys(m).fromScene(new uc,.04).texture;let I=new Wt({color:new de("#f2b24c"),metalness:1,roughness:.2,emissive:new de(.42,.25,.05),transparent:!0}),D=new oi(16769720,2.2);D.position.set(-3,5,6),y.add(D,new Yl(8425648,.4));let F=null,B=a.getContext("2d"),N=1,k=()=>{let ue=r.clientWidth||innerWidth,le=r.clientHeight||innerHeight;N=ue,m.setSize(ue,le,!1);let L=Math.max(2,Math.round(ue*p*1.5)),S=Math.max(2,Math.round(le*p*1.5));_.setSize(L,S),x.uRes.value.set(L,S),a.width=ue*2,a.height=le*2},U=new ResizeObserver(k);U.observe(r),k();let H=0,Z=(ue,le)=>{let L=a.width,S=a.height;B.clearRect(0,0,L,S);let V=($,ie,Q,we,xe,be)=>{let nt=$,me=ie,Te=14+Math.floor(Math.random()*8);for(let We=1;We<=Te;We++){let tt=We/Te,Pe=$+(Q-$)*tt+(Math.random()-.5)*L*.035*(1-tt*.5),ht=ie+(we-ie)*tt;B.lineWidth=xe*(1-tt*.6),B.beginPath(),B.moveTo(nt,me),B.lineTo(Pe,ht),B.stroke(),be<2&&Math.random()<.16&&V(Pe,ht,Pe+(Math.random()-.5)*L*.25,ht+S*(.08+Math.random()*.2),xe*.45,be+1),nt=Pe,me=ht}};B.strokeStyle="rgba(225,235,255,0.95)",B.shadowColor="rgba(150,180,255,0.9)",B.shadowBlur=26,B.lineCap="round",V(ue*L,-10,ue*L+(Math.random()-.5)*L*.2,le*S,3.2,0),H=1},se=document.createElement("div");se.className="nst-head",se.innerHTML='<div class="k">NOMADIIC HORSE DESIGNS &nbsp;\xB7&nbsp; BANGALORE</div><h1>We build brands<br>the way the Greeks<br><em>built palaces.</em></h1>';let fe=document.createElement("button");fe.className="nst-snd",fe.type="button",fe.setAttribute("aria-label","Sound");let _e=ue=>ue?'<svg viewBox="0 0 16 16"><path d="M2 8h1.5M5 5v6M8 3v10M11 6v4M14 7.3v1.4"/></svg>':'<svg viewBox="0 0 16 16"><path d="M2 8h12"/></svg>';fe.innerHTML=_e(!0),fe.onclick=()=>{e.setMuted(!e.muted),fe.innerHTML=_e(!e.muted)};let q=null,ne=0,re="load",K=0,he=0,Ue=0,Ee=-1,Qe=!0,pe=0,je=performance.now(),z=!1,ze=!1,Ce=ue=>{re==="ready"&&(re="dive",Ee=0,e.start(ue,t),n&&n(),d.classList.remove("on"),f.classList.remove("on"),g.classList.remove("on"),l.style.opacity="0",l.style.transform="translate(-50%,40px)")};h.onclick=()=>Ce(!0),f.onclick=()=>Ce(!1);function He(ue){if(!Qe)return;pe=requestAnimationFrame(He);let le=Math.min((ue-je)/1e3,.05);if(je=ue,x.uTime.value+=le,he+=(K-he)*(1-Math.exp(-le*4)),x.uLoad.value=he,c.style.transform=`scaleX(${he})`,u.textContent=Math.round(he*100)+"%",re==="load"&&K>=1&&he>.995&&(re="ready",v.style.opacity="0",r.classList.remove("ld"),d.classList.add("on"),f.classList.add("on"),g.classList.add("on")),re!=="load"&&(Ue=Math.min(1,Ue+le*.7)),x.uReady.value=Ue,re==="ready"&&Math.random()<le*.12&&e.strike(.3+Math.random()*.25),re==="dive"){Ee+=le,!z&&Ee>.35&&(z=!0,e.strike(1,[.3,.75]),Z(.3,.75));let S=(V,$)=>{let ie=Math.min(1,Math.max(0,(Ee-V)/($-V)));return ie*ie*(3-2*ie)};if(x.uDive.value=Math.min(1,Ee/3.6)*.35,x.uClear.value=S(.5,3.8),ne=1,Ee>3.9&&!ze&&(ze=!0,r.style.transition="none",r.style.pointerEvents="none",s&&s(),i.appendChild(fe),requestAnimationFrame(()=>{e.hasSound&&fe.classList.add("on")})),ze&&(r.style.opacity=String(Math.max(0,1-(Ee-3.9)/.55))),Ee>4.45){Qe=!1,cancelAnimationFrame(pe),U.disconnect(),_.dispose(),m.dispose(),m.forceContextLoss(),r.remove();return}}let L=e.update(le,re!=="load");x.uFlash.value=L,x.uFlashPos.value.set(e.flashPos[0],e.flashPos[1]),H>0&&(H=Math.max(0,H-le*3.2),a.style.opacity=String(Math.min(1,L*1.4)*H));{let S=x.uRes.value.x/N,V=x.uRes.value.x,$=x.uRes.value.y,ie=Math.min(V,$),Q=V/2,we=$/2,xe=.205*ie;if(q){ne=1;let be=q[0]*S,nt=$-q[1]*S,me=q[2]*S;Q+=(be-Q)*ne,we+=(nt-we)*ne,xe+=(me-xe)*ne}x.uMarkC.value.set(Q,we),x.uMarkR.value=xe}w.children[0].material.uniforms.tC.value=_.texture,m.autoClear=!0,m.setRenderTarget(_),m.render(E,R),m.setRenderTarget(null),m.render(w,R),F&&ye&&(I.opacity=1-Math.min(1,Math.max(0,(x.uClear.value-.55)/.35)),F.visible=I.opacity>.001&&Ue>0,I.opacity*=Ue,m.autoClear=!1,m.clearDepth(),m.render(y,C),m.autoClear=!0)}let ye=null;return pe=requestAnimationFrame(He),{get diving(){return re==="dive"},get showing(){return re!=="load"},setTarget(ue,le,L){q=[ue,le,L]},setEmblem(ue){F||(F=new ae(ue,I),F.matrixAutoUpdate=!1,y.add(F))},setView(ue,le){ye=!0,C.projectionMatrix.copy(ue.projectionMatrix),C.projectionMatrixInverse.copy(ue.projectionMatrixInverse),C.matrixWorld.copy(ue.matrixWorld),C.matrixWorldInverse.copy(ue.matrixWorldInverse),F&&F.matrix.copy(le)},setTip(ue){let le=r.querySelector(".tip");le&&(le.textContent=ue)},setStage(ue){let le=r.querySelector(".stage");!le||le.dataset.t===ue||(le.dataset.t=ue,le.style.opacity="0",clearTimeout(le._t),le._t=setTimeout(()=>{le.textContent=le.dataset.t,le.style.opacity="1"},320))},setProgress(ue){K=Math.max(K,Math.min(1,ue))},ready(){K=1},hideHead(){se.classList.remove("on")},destroy(){Qe=!1,cancelAnimationFrame(pe),U.disconnect(),m.dispose(),r.remove(),se.remove(),fe.remove()}}}var hc=`
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
  }`;function $p(){let i=new Fn;i.frustumCulled=!1;let e=new On({color:new de(9,10,14),transparent:!0,opacity:0,blending:Dt,depthWrite:!1,side:gt,fog:!1,toneMapped:!0}),t=null,n=A,s=new n(0,1,0),r=(a,l,c,u,d)=>{if(u===0){d.push(l.clone());return}let h=a.clone().lerp(l,.5);h.x+=(Math.random()-.5)*c,h.z+=(Math.random()-.5)*c,h.y+=(Math.random()-.5)*c*.3,r(a,h,c*.55,u-1,d),r(h,l,c*.55,u-1,d)},o=(a,l,c,u)=>{for(let d=0;d<a.length-1;d++){let h=a[d],f=a[d+1],g=l*(1-d/a.length*.4),v=l*(1-(d+1)/a.length*.4),m=h.clone().addScaledVector(c,-g),p=h.clone().addScaledVector(c,g),_=f.clone().addScaledVector(c,-v),M=f.clone().addScaledVector(c,v);for(let x of[m,p,M,m,M,_])u.push(x.x,x.y,x.z)}};return{group:i,strike(a,l=0){let c=new n;a.getWorldDirection(c),c.y=0,c.normalize();let u=c.clone().applyAxisAngle(s,(Math.random()-.5)*1.3),d=260+Math.random()*700,h=a.position.clone().addScaledVector(u,d);h.y=l;let f=h.clone();f.y=l+300+Math.random()*220,f.x+=(Math.random()-.5)*140,f.z+=(Math.random()-.5)*140;let g=new n().crossVectors(u,s).normalize(),v=1.2+d*.0042,m=[f.clone()];r(f,h,90,6,m);let p=[];o(m,v,g,p);for(let M=0;M<4;M++){let x=6+Math.floor(Math.random()*(m.length*.6)),T=m[x];if(!T)continue;let b=T.clone().add(new n((Math.random()-.5)*120,-(40+Math.random()*120),(Math.random()-.5)*120)),E=[T.clone()];r(T,b,40,4,E),o(E,v*.45,g,p)}t&&(i.remove(t),t.geometry.dispose());let _=new Ye;_.setAttribute("position",new Je(p,3)),t=new ae(_,e),t.frustumCulled=!1,t.renderOrder=9,i.add(t)},update(a){e.opacity=Math.min(1,a*1.5),i.visible=a>.01}}}It();var er=new $e,Sr=new zt,dc=new A,Fo=new A,rd=new En;function Ca({count:i=40,center:e=[0,60,0],radius:t=80,height:n=18,size:s=1,color:r=1447964,speed:o=1,glide:a=.5}={}){let l=[],c=[],u=(E,R,w,y,C,I,D,F)=>{l.push(...E,...R,...w,...E,...w,...y),c.push(C,I,D,C,D,F)};for(let E of[-1,1])u([0,0,.18],[E*.45,0,.12],[E*.45,0,-.12],[0,0,-.14],0,.55*E,.55*E,0),u([E*.45,0,.12],[E*1,0,-.02],[E*.95,0,-.2],[E*.45,0,-.12],.55*E,1*E,1*E,.55*E);l.push(0,0,.42,.07,0,0,0,0,-.5,0,0,.42,0,0,-.5,-.07,0,0),c.push(0,0,0,0,0,0);let d=new Ye;d.setAttribute("position",new Je(l,3)),d.setAttribute("aWing",new Je(c,1));let h=new Float32Array(i),f=new Float32Array(i);for(let E=0;E<i;E++)h[E]=Math.random()*6.28,f[E]=7+Math.random()*4;d.setAttribute("aPhase",new Ct(h,1)),d.setAttribute("aBeat",new Ct(f,1));let g=new Ct(new Float32Array(i),1);g.setUsage(Ep),d.setAttribute("aFlap",g);let v=new ve({side:gt,uniforms:{uTime:{value:0},uCol:{value:new de(r)},uFog:{value:new st(.6,.65,.7,7e-4)}},vertexShader:`uniform float uTime; attribute float aWing, aPhase, aBeat, aFlap; varying float vD;
      void main(){ vec3 p = position; float w = abs(aWing);
        float a = sin(uTime * aBeat + aPhase) * aFlap;                        // a wing beat; aFlap = 0 when gliding
        p.y += (a * 0.9 + 0.12) * w * w * 1.1; p.x *= 1.0 - abs(a) * 0.12 * w;  // the wingtips travel furthest, the span folds a little on the beat
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform vec4 uFog; varying float vD; void main(){ gl_FragColor = vec4(mix(uCol, uFog.rgb, 1.0 - exp(-vD * uFog.a)), 1.0); }"}),m=new vn(d,v,i);m.frustumCulled=!1;let p=Array.from({length:i},()=>({o:new A((Math.random()-.5)*30,(Math.random()-.5)*8,(Math.random()-.5)*30),ph:Math.random()*100,glideT:Math.random()*4,gl:!1,prev:new A})),_=new A(...e),M=new A,x=new A,T=new A(0,1,0),b=(E,R,w)=>{let y=E*.045*o;return w.set(_.x+Math.cos(y)*t+Math.sin(y*1.7)*t*.3,_.y+Math.sin(y*.9)*n,_.z+Math.sin(y)*t*.75+Math.cos(y*1.3)*t*.25),w.x+=R.o.x+Math.sin(E*.35+R.ph)*6,w.y+=R.o.y+Math.sin(E*.5+R.ph*1.3)*2.5,w.z+=R.o.z+Math.cos(E*.3+R.ph)*6,w};return{mesh:m,update(E,R,w,y){v.uniforms.uTime.value=E,w&&v.uniforms.uFog.value.set(w.r,w.g,w.b,y);for(let C=0;C<i;C++){let I=p[C];b(E,I,Fo),b(E+.25,I,M),x.subVectors(M,Fo),I.glideT-=R,I.glideT<0&&(I.gl=!I.gl,I.glideT=I.gl?1.5+Math.random()*3*a:1+Math.random()*2.5),g.array[C]+=((I.gl?.08:1)-g.array[C])*Math.min(1,R*3);let D=Math.atan2(x.x,x.z),F=-Math.atan2(x.y,Math.hypot(x.x,x.z))*.6,B=dt.clamp(-(x.x*I.prev.z-x.z*I.prev.x)*4,-.7,.7);I.prev.copy(x),Sr.setFromEuler(rd.set(F,D,B,"YXZ")),er.compose(Fo,Sr,dc.setScalar(s*(.85+C%5*.06))),m.setMatrixAt(C,er)}m.instanceMatrix.needsUpdate=!0,g.needsUpdate=!0}}}function Jp({count:i=24,box:e=[-20,20,.4,3,-20,20],colors:t=[15905076,15265522,14178090,7317724]}={}){let n=[],s=[];for(let h of[-1,1])n.push(0,0,.05,h*.09,0,.09,h*.1,0,-.02,0,0,.05,h*.1,0,-.02,0,0,-.05,0,0,-.05,h*.1,0,-.02,h*.07,0,-.1),s.push(0,h,h,0,h,0,0,h,h);let r=new Ye;r.setAttribute("position",new Je(n,3)),r.setAttribute("aWing",new Je(s,1));let o=new Float32Array(i*3),a=new Float32Array(i),l=new de;for(let h=0;h<i;h++)l.set(t[h%t.length]),o.set([l.r,l.g,l.b],h*3),a[h]=Math.random()*6.28;r.setAttribute("aCol",new Ct(o,3)),r.setAttribute("aPhase",new Ct(a,1));let c=new ve({side:gt,uniforms:{uTime:{value:0}},vertexShader:`uniform float uTime; attribute float aWing, aPhase; attribute vec3 aCol; varying vec3 vC;
      void main(){ vec3 p = position; float a = (0.5 + 0.5 * sin(uTime * 22.0 + aPhase)) * 1.25; float s = sign(aWing);
        p = vec3(p.x * cos(a), abs(p.x) * sin(a), p.z); vC = aCol * (0.75 + 0.25 * abs(aWing));
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0); }`,fragmentShader:"varying vec3 vC; void main(){ gl_FragColor = vec4(vC, 1.0); }"}),u=new vn(r,c,i);u.frustumCulled=!1;let d=Array.from({length:i},()=>({p:new A(e[0]+Math.random()*(e[1]-e[0]),e[2]+Math.random()*(e[3]-e[2]),e[4]+Math.random()*(e[5]-e[4])),v:new A,ph:Math.random()*100}));return{mesh:u,update(h,f){c.uniforms.uTime.value=h;for(let g=0;g<i;g++){let v=d[g];v.v.x+=(Math.sin(h*1.3+v.ph)+Math.sin(h*3.1+v.ph*2))*f*1.2,v.v.z+=(Math.cos(h*1.1+v.ph)+Math.sin(h*2.7+v.ph))*f*1.2,v.v.y+=Math.sin(h*2.3+v.ph)*f*.9,v.v.multiplyScalar(.97),v.p.addScaledVector(v.v,f*1.6),(v.p.x<e[0]||v.p.x>e[1])&&(v.v.x*=-1),(v.p.z<e[4]||v.p.z>e[5])&&(v.v.z*=-1),v.p.y=dt.clamp(v.p.y,e[2],e[3]),Math.abs(v.p.x-(e[0]+e[1])/2)<3.2&&(v.v.x+=Math.sign(v.p.x-(e[0]+e[1])/2||1)*f*4),Sr.setFromEuler(rd.set(0,Math.atan2(v.v.x,v.v.z),0)),er.compose(v.p,Sr,dc.setScalar(.75)),u.setMatrixAt(g,er)}u.instanceMatrix.needsUpdate=!0}}}function jp({count:i=120,box:e=[-15,15,0,16,-15,15],colors:t=[7043626,9071140,11045167,5917212],follow:n=null}={}){let s=new St(.11,.07),r=new Float32Array(i*3),o=new de;for(let f=0;f<i;f++)o.set(t[f%t.length]),r.set([o.r,o.g,o.b],f*3);s.setAttribute("aCol",new Ct(r,3));let a=new ve({side:gt,uniforms:{uFog:{value:new st(.6,.6,.6,.02)}},vertexShader:"attribute vec3 aCol; varying vec3 vC; varying float vD; void main(){ vC = aCol; vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec4 uFog; varying vec3 vC; varying float vD; void main(){ gl_FragColor = vec4(mix(vC, uFog.rgb, 1.0 - exp(-vD * uFog.a)), 1.0); }"}),l=new vn(s,a,i);l.frustumCulled=!1;let c=Array.from({length:i},()=>({x:Math.random(),y:Math.random(),z:Math.random(),ph:Math.random()*100,sp:.5+Math.random()*.5,spin:(Math.random()-.5)*6})),u=e[1]-e[0],d=e[3]-e[2],h=e[5]-e[4];return{mesh:l,leaves:!0,update(f,g,v,m,p){m&&a.uniforms.uFog.value.set(m.r,m.g,m.b,p);let _=v?v.position.x:0,M=v?v.position.z:0;for(let x=0;x<i;x++){let T=c[x];T.y-=g*.045*T.sp,T.y<0&&(T.y+=1);let b=Math.sin(f*1.6*T.sp+T.ph),E=e[0]+((T.x*u+_-e[0])%u+u)%u+b*.5,R=e[4]+((T.z*h+M-e[4])%h+h)%h+Math.cos(f*1.2+T.ph)*.3;n&&(E+=_-(e[0]+e[1])/2,R+=M-(e[4]+e[5])/2),Fo.set(E,e[2]+T.y*d,R),Sr.setFromEuler(rd.set(b*1.1,f*T.spin+T.ph,Math.cos(f*2+T.ph)*.8)),er.compose(Fo,Sr,dc.setScalar(1)),l.setMatrixAt(x,er)}l.instanceMatrix.needsUpdate=!0}}}function od({count:i=18,box:e=[-60,60,.5,6,-60,60],color:t=[.8,.84,.86],opacity:n=.22,size:s=[26,6]}={}){let r=new St(1,1),o=new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCol:{value:new de(...t)},uA:{value:n}},vertexShader:`varying vec2 vUv; varying float vI; void main(){ vUv = uv; vI = float(gl_InstanceID);
      vec4 c = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); vec3 r = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);   // always faces the camera sideways, stays upright
      vec3 sx = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), 1.0);
      vec3 w = c.xyz + r * position.x * sx.x + vec3(0.0, 1.0, 0.0) * position.y * sx.y; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uCol; uniform float uA; varying vec2 vUv; varying float vI;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      void main(){ vec2 q = vUv * vec2(4.0, 1.4) + vec2(uTime * 0.03 + vI * 3.7, vI);
        float d = n(q) * 0.6 + n(q * 2.3) * 0.3 + n(q * 5.1) * 0.1;
        float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y);
        gl_FragColor = vec4(uCol, smoothstep(0.35, 0.8, d) * edge * uA); }`}),a=new vn(r,o,i);a.frustumCulled=!1,a.renderOrder=5;let l=Array.from({length:i},()=>({x:e[0]+Math.random()*(e[1]-e[0]),y:e[2]+Math.random()*(e[3]-e[2]),z:e[4]+Math.random()*(e[5]-e[4]),v:.3+Math.random()*.6,s:.7+Math.random()*.6}));return{mesh:a,update(c,u){o.uniforms.uTime.value=c;for(let d=0;d<i;d++){let h=l[d];h.x+=h.v*u,h.x>e[1]&&(h.x=e[0]),er.compose(Fo.set(h.x,h.y,h.z),Sr.identity(),dc.set(s[0]*h.s,s[1]*h.s,1)),a.setMatrixAt(d,er)}a.instanceMatrix.needsUpdate=!0}}}It();var p_=`
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
  }`,m_=`
  ${ai}
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
    else c += vec3(0.05, 0.057, 0.075) * (0.45 + 0.55 * n.y) * (0.4 + 0.6 * ao) + vec3(0.04) * pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0) * vLit;                     // a little sheen on glaze and stone, and a floor of ambient so no rock is ever pure black
    gl_FragColor = vec4(applyFog(clamp(c, vec3(0.0), vec3(1.4)), vW), 1.0);
  }`,Qp=async i=>{for(let e=0;;e++)try{let t=await fetch(i);if(t.ok)return t.json();throw 0}catch(t){if(e>2)throw t;await new Promise(n=>setTimeout(n,500))}};async function as({base:i,unpack:e,loader:t,U:n,groundLm:s,groundK:r,rect:o,tier:a,onPart:l,scene:c=null,layout:u=null}){let[d,h]=await Promise.all([Qp(i+"plants/protos.json"),u?Promise.resolve(u):Qp(i+"garden.json")]),f=new Fn;f.name="garden";let g={};h.items.forEach((R,w)=>{a!=="high"&&R[0].startsWith("flower")&&w%2||a!=="high"&&(d[R[0]]?.size?.[1]??9)<1.2&&w%2||(g[R[0]]=g[R[0]]||[]).push(R)});let v={},m=R=>v[R]||(v[R]=new Promise(w=>t.load(i+"plants/"+R,y=>{y.colorSpace=Xt,y.flipY=!0,y.anisotropy=4,w(y)},void 0,()=>w(null)))),p={value:0},_=new $e,M=new zt,x=new A,T=new A,b=new A(0,1,0),E=[];for(let[R,w]of Object.entries(g)){let y=d[R];if(!y)continue;let C=y.size[1],I=R.startsWith("flower")||R.startsWith("periwinkle")||R.startsWith("fern"),D=Math.min(a==="high"?520:320,a==="high"?70+C*90:26+C*44);for(let F of y.parts)E.push((async()=>{let B,N;try{[B,N]=await Promise.all([e(i+"plants/"+F.pack),F.tex?m(F.tex):null])}catch(H){console.warn("[garden] skipped",F.pack,H);return}let k=new ve({side:gt,uniforms:{...n,tAlb:{value:N},uHasTex:{value:N?1:0},uTint:{value:new de(.5,.45,.4)},uLeaf:{value:F.leaf?1:0},uSway:{value:F.leaf?C>2?.35:.12:0},uH:{value:Math.max(C,.2)},uFar:{value:D},uFade:p,tLm:{value:s},uK:{value:r},uRect:{value:o}},vertexShader:p_,fragmentShader:m_});if(y.kind==="solid"&&y.parts.length===1){B.computeBoundingBox();let H=B.boundingBox;H.min.y>.01&&B.translate(0,-H.min.y-(H.max.y-H.min.y)*.06,0)}let U=new vn(B,k,w.length);w.forEach((H,Z)=>{let[,se,fe,_e,q,ne]=H;_.compose(T.set(se,fe,_e),M.setFromAxisAngle(b,q),x.set(ne,ne,ne)),U.setMatrixAt(Z,_)}),U.instanceMatrix.needsUpdate=!0,U.frustumCulled=!1,U.layers.set(1),f.add(c?Lo(U,c,{cell:w.length<200?80:48,minCount:6,fogK:n.uFogK?n.uFogK.value:0,far:D+10}):U),l&&l()})())}return await Promise.all(E),{group:f,fade:p,layout:h}}It();function e0(i,e,t,n){let s=new Ye,r=new Float32Array(t*4);for(let l=0;l<t;l++){let c=Math.random();r[l*4]=c<.45?0:c<.9?1:2,r[l*4+1]=Math.random()*Math.PI*2,r[l*4+2]=Math.random(),r[l*4+3]=Math.random()}s.setAttribute("position",new qe(new Float32Array(t*3),3)),s.setAttribute("aD",new qe(r,4)),s.boundingSphere=new bn(new A(i,1.5,e),6);let o=new ve({transparent:!0,depthWrite:!1,blending:Dt,uniforms:{...n,uC:{value:new A(i,0,e)},uPx:{value:1}},vertexShader:`
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
      ${ai}
      varying float vA; varying vec3 vW;
      void main(){
        vec2 d = gl_PointCoord - 0.5; float r = dot(d, d);
        float a = (1.0 - smoothstep(0.0, 0.25, r)) * clamp(vA, 0.0, 1.0);
        vec3 c = vec3(0.85, 0.9, 0.95) * a * 0.9;
        gl_FragColor = vec4(c, a);
      }`}),a=new nn(s,o);return a.frustumCulled=!1,a}var t0="data:font/woff2;base64,d09GMk9UVE8AAAqkAAkAAAAAF7QAAApcAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAADag8BmAAgSgBNgIkAzYEBgWCGAcgGxEXUVSSLgjwxWEMxtLDLs7eeWszuaNSaSydCcIXN/5QhCLcaD67t8GHMDE2pCq7iyu4T1HGr4fO3uoaACTG7v/RZsVIvf1r7FmfmY+Ik4koogkEGutGuoDQiAUiDsSEmI14dk7UC65GeMi/vft9xCCxFNvyIE4wDALJW1GQR+2qoMLvf+3V3t0NvPBbN4kCdhESUKjIqMT9+M0EiB2Ri3sBLm8rqwBVzxemDlkDKcEjo3S9BmHqr9E+3/Lz0olCQNfLJRCjAOitVRxWyssqamvLf12o9h8Ycd4XI0U7yb/3by867ChqdmLKK337/wcQyXgJv/k1QbK/+a+UiAOy+BJGZ7Z2cPXyC467VKf/+Me9owN2jB1le9jetr/lZVOR3pTta/n1Up7bo7GPu3owxX+/XHs3M4YkAPp/3OF5iagAiIGt13Potr97e3z7T3Yc3ME/84Xn/yd4+dVnyA8pOZWW6khUSc78VbYW3rX8USCIFqP2ys6rXdXQ2pg2tpkhyY6YwiZIKJu0DTFQRY0xfQbOFOQ36zah5mb9reqboFrULVQVQLZBX2WzfRm4C4Hd+Bxg+g4dxEggLxGe9Be8k+D+58m1f6VBSi+Tz6XDDMntJNHU3Elz4Z49jxIaRXP1cFsdjSJET3JAR3KImUTdn6ALyBP9PcMRihqJhFJOQAeVJGQPUW+IUIoYXptQISDeYSIlRiehQEq/JPJSMvObyH3NwlchHHt782gUCJuwSO3lPA2AxLdcX8TfBIFeooMC8hKWSOivxISJ64mfGTZBRviUBL7+OWANzmZOCfa6TspXNcFJlf8HLf2Q+Ec9EVCBG2gaN0BjfVQKmN6gIxhh8oCEGS+B4iS09Mf6W7theHWl+2YCpPRSUVQKZRZ8QdwiwK+5uyeyX4L8Z3s/1v9pmKfuKKSJaEUN+Jx+p+AEgfNyvBtc7vun9YHNbwvxUTD3OmccOVD//DPkrGIR1EM1bbIgcNghcALUuOqb9Aqwmh0mzgiG8+wZ8zlQf/H47NovgqPBea5JC7zTydsF4Lycnw8C3+IRhRB4Ooi+GNy2CNHeeD7dAVPL8313QyClC0dKyUwSp9y/HYgfRkSL/zf+1/cDiaXxX6PXlP8y7NYf8+/CQL0xMmKjz4jBs+BJrXogKWRwEsO0MIWnMPwW3xN+tAK3pwp3U9+D5Fbzz8s3gXJIGO05RqPioAiEJoJtIP0rnS+lMK241+/Xg18tqLEaMHVEmFpiauWnVoCNXnezADKMPIt4xbcEARLGk/AWEg44Gg6LIkhp36KylMxcDxK956YXMO/+M8HX7FfrvECdORo5THlUCIQinkYQTBF8+hCBYSL1QTf+ldjBQpj3VGMryIV63CAANXkpcVDmH4A6EKGRNBIBsYeHv/l9nuA4SOmekrKUztwOIP9e9MjWSjIfbT0yfIpT67Fzmh7g27BTbIfe7lZbLgLk+i/0fcWCInoIUtqlBEpHGbqIEd6FyCJGdGCRrWdcxF1WggzZfAdjgh4zsTiDUKM0qxPLJFSuPmvRtsdSiqYt18EYZ8CMVryBaJCx6sAycVeWX9TJHjTfTRnOtTO1i0YYbOvd03HnF8oaTB03nadwuwNNHCAt+PTMqkqL542OU5lL/8LjE+WXbVbIFmg1qMNdjgzXn3NboXNRU42DkUcF1ml0WA+CDw20nHbfJLmCvdKu0IPd3Sc94AXXuM9Iyjt0ZgttiVy+g8dGdY9D8cnT7qdZVqQOkZNwWDQ6bBVccaceoPfXc4BXlpTrm9Xj5IccKc3Sd91H9bwq33MHcY/zztMNptbJ8jaOjMqJ52kVLLOd08nddKHb/ZOSum0le8mi7Z6zKd+/kEe+RmR+H6m3XHYJbTkdtPD1RMTwFipiZLL4e8adYo+zhJgxC8du5TELmEWtkpwUlgyJxrU8osVXP8qTeaYo6Uo9kpyT4ZpbqRR3pq4jLZ0pSeetcwpr0NVaj2kTtWioIpxGZnElSdWuFRMMxAdXnkOgD1jsIo/gAi5jovyFHLknobCiAuNQbHJ98aAn19PGVfk4jdacjfXIrDvvllwXGnPyDANutjnEuGnrOREHsOlRTRyMTSHmXiYnz6UNDAZ3kQfo0Lep8TM0nqeNSfW+x/ZTwymo8Qq9oKLgC7iAQmVMbLicc11bL2bO3nauy9Zm7amhCljJnLnvdNKPNksNDXBWcdJaCnmH9Y6f9K5dzICfe4vc614dc6ZR/sJGdo/IfJ+a90C5lNepULDFtjNKcZve7mW9EAVz3HRS2RqjxXdZJxgLExknp1mMfuCekIJbxJEOBwfYDX4Q4lWwmCj22p3i0vheetF/HTHTn7W7hVfhYV9M3oB2YZi+AW1FN23Nc8r19OyygrPnpaP4wUXpEtHdtLiATX3kn5jBoWrG1OOPeNFtqX/Ji4OP33rhxVlfp78OGSi6AQxu4/iiiir1SOVFtwWCA4mBGbuDPJc9nFogBIvx4XF7Wjkq/DBntUID4tSgAwPMdX6amcyMyPbeGzWo/Tw4RXkmUF8H2Y2qDH7G8cqzKzKfvFa92U9NC4RJSxstxyKaMVvp8BNNuxvNbaYGNdFMgCvxisfc3pCd1k5I4nMe4gUH3Kw8DwmuYg84Ze5RhK2VDQOyhr44ZW9Rns38lXVT9RiDvUmTNnFpeRJ62r3TYGGBoVP+4mTm9Z3SGps3buzRfXnnSuKEMrhZbJ/WsrM17x1VWB68DGdWpAJMlB6QB17kzQrUUXePPLg8f5ZXdfA5ONIpv9FwFmcwSo9oOKsMrEKij93Ke4VIk+ZGMz1s7l077z+U3nCz53R0sgU4MPc0CYs1xnL3pNljE7LlqjgNHNTv29lGgitXK5wyew2EeXpHdf+G9Q0eoV2yAXX3wqdkXQa5JHST5F3LhPhT20+SszKjcjSziiqziPs8cyxHs8uoNofYLzCHDWh+CdVnkenLzF4DWppH8hzSf4XZKUcrBaQi1deZ7om1aaSNU923mE7aHEd6qtrNZOjGCGq6e9k+JsSiG0OIS6CzZ5mwbddSEUccpeq7Io5er+uIokytfOusUPA5jok60fQ6sodQd429Cr5kZ2I8Gr6BbCHUX9Wu4KtWJu5G3XeQLYiGqngVXG1hEl6UvI/YAJqsmoGN8tJfHQEFt5DFh+gK2dBnqVzS8eeRAlyk2/4DEIDG7fMSYDacCZ6SxXbTKwlZeQ+VhCE6m4tPOwC9kpfrQOurklRb08Xg2xNgWAdoSGAcRLho8VJlKletXqvOTHKzRoqVLCNzpVrNOubzyg3e6f73cDaroGHoNSthzZ7z0cLBwsMnwMaAYELcnBbY2ktlfUb5lZe+/F/ODvxOAoA3z3/D4Vs8JSns0G//iwTaUP81EjgTnuTEGBRGSQZahQ6Fayfu4/gV2jXoYy24NZol2DjM3mQaIMIQW4EMBysXZENNPA3SQWmIiCENc+WYxuAoL41JZfhNWGwtS4pWzcpVqVevEpFER2uLahmq1erWpFwHIqD8PuS+XW+DOarfGzvf3FYt13TnyqONzfDlH/MAAAAA";var g_=`
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
.nrt-ui .hint{position:absolute;left:50%;bottom:26px;transform:translateX(-50%);font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.92);opacity:0;transition:opacity 1s}
.nrt-ui .snd{position:absolute;left:20px;bottom:22px;width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.55);background:rgba(14,18,24,.38);color:#fff;display:grid;place-items:center;cursor:pointer;pointer-events:auto;opacity:0;transition:opacity 1s,background .25s}
.nrt-ui .snd svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round}
.nrt-ui .snd:hover{background:rgba(14,18,24,.6)}
.nrt-ui .busy{position:absolute;left:50%;bottom:calc(50% - 20px);transform:translateX(-50%);padding:10px 18px;border-radius:999px;background:rgba(14,18,24,.55);color:#fff;font-size:12px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:0;transition:opacity .5s;white-space:nowrap}
.nrt-ui .busy:before{content:"";display:inline-block;width:8px;height:8px;margin-right:10px;border-radius:50%;background:#ffb067;animation:nrtGlow 1.2s ease-in-out infinite}
.nrt-ui .prog{position:absolute;left:0;bottom:0;height:3px;width:0;background:linear-gradient(90deg,#f2822f,#ffb067);opacity:0;transition:opacity 1s}
.nrt-ui a:focus-visible,.nrt-ui button:focus-visible{outline:2px solid #ffd9a8;outline-offset:3px}
@media (prefers-reduced-motion:reduce){.nrt-ui *,.nrt-ui *:after{animation:none!important;transition-duration:.01s!important}}
.nrt-ui .hint:after{content:"";display:block;width:1px;height:18px;margin:10px auto 0;background:rgba(255,255,255,.8);animation:nrtDrop 1.8s ease-in-out infinite}
@keyframes nrtDrop{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
@media (max-width:640px){.nrt-ui .brand{left:16px;top:22px;font-size:11px;letter-spacing:.1em;max-width:calc(100% - 150px);white-space:nowrap}.nrt-ui .cta{right:16px;top:14px;padding:9px 15px;font-size:12px}
  .nrt-ui .line{font-size:19px;line-height:1.42}.nrt-ui .story{bottom:92px}.nrt-ui .kick{font-size:11.5px;letter-spacing:.24em}.nrt-ui .snd{left:14px;bottom:18px}}
`;function n0(i,e,{contactUrl:t="https://nomadiichorse.com/contact-us",onBook:n=null,sound:s=null}={}){if(!document.getElementById("nrt-css")){let h=document.createElement("style");h.id="nrt-css",h.textContent=`@font-face{font-family:"Nomadiic Line";src:url(${t0}) format("woff2");font-display:block}`+g_,document.head.appendChild(h);let f=document.createElement("link");f.rel="stylesheet",f.href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap",document.head.appendChild(f)}let r=document.createElement("div");r.className="nrt-ui",r.innerHTML=`<div class="scrim"></div><div class="brand">NOMADIIC HORSE DESIGNS</div><a class="cta" href="${t}">Contact us</a><button class="snd" type="button" aria-label="Sound" aria-pressed="true"></button><div class="prog" aria-hidden="true"></div><div class="busy" role="status">Loading the next world</div>
    <div class="story">${e.map((h,f)=>`<div class="ch" data-i="${f}"><div class="kick">${h.kick}</div><div class="line">${h.line}</div>${h.book?`<button class="book" data-book="${h.book}">Explore the book</button>`:""}${h.contact?`<div><a class="endcta" href="${t}">Contact us</a></div>`:""}</div>`).join("")}</div>
    <div class="hint">${matchMedia("(pointer: coarse)").matches?"Swipe up to enter":"Scroll to enter"}</div>`,r.querySelector(".story").setAttribute("role","region"),r.querySelector(".story").setAttribute("aria-label","Story"),r.querySelector(".story").setAttribute("aria-live","polite"),i.appendChild(r);let o=[...r.querySelectorAll(".ch")],a=h=>r.querySelector(h);r.querySelectorAll(".book").forEach(h=>h.addEventListener("click",f=>{f.stopPropagation(),n&&n(h.dataset.book)}));let l=a(".snd"),c=h=>h?'<svg viewBox="0 0 16 16"><path d="M2 8h1.5M5 5v6M8 3v10M11 6v4M14 7.3v1.4"/></svg>':'<svg viewBox="0 0 16 16"><path d="M2 8h12"/></svg>',u=()=>{let h=!(s&&s.muted);l.innerHTML=c(h),l.setAttribute("aria-pressed",String(h)),l.setAttribute("aria-label",h?"Mute sound":"Turn sound on")};u(),l.addEventListener("click",h=>{h.stopPropagation(),s&&(s.setMuted(!s.muted),u())});let d=-2;return{el:r,update(h,f){let g=window.visualViewport?window.visualViewport.height:innerHeight,v=Math.max(0,Math.round(i.getBoundingClientRect().bottom-g));v!==this._extra&&(this._extra=v,a(".story").style.transform=`translate(-50%, ${-v}px)`,a(".hint").style.transform=`translate(-50%, ${-v}px)`);let m=f>1.2;a(".brand").style.opacity=m?1:0,a(".cta").style.opacity=m?1:0,a(".scrim").style.opacity=m?1:0,a(".hint").style.opacity=m&&h<.004&&f>3?1:0,l.style.opacity=m&&s&&s.hasSound?1:0,l.style.pointerEvents=l.style.opacity==="1"?"auto":"none",a(".prog").style.opacity=m?1:0,a(".prog").style.width=Math.max(0,Math.min(1,h))*100+"%";let p=m?e.findIndex(_=>h>=_.at[0]&&h<_.at[1]):-1;p!==d&&(d=p,o.forEach((_,M)=>{_.classList.toggle("on",M===p),_.setAttribute("aria-hidden",String(M!==p))}))},setBusy(h){let f=a(".busy"),g=h?"1":"0";f.style.opacity!==g&&(f.style.opacity=g)},destroy(){r.remove()}}}function i0(i){let e=document.createElement("canvas");e.width=4096,e.height=160;let t=e.getContext("2d");return t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font='120px "Nomadiic Line", Satoshi, serif',"letterSpacing"in t&&(t.letterSpacing="38px"),t.fillText(i,e.width/2,e.height/2+6),e}function s0(i){let n=document.createElement("canvas");n.width=1024,n.height=372;let s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,372);r.addColorStop(0,"#6b4a2b"),r.addColorStop(.5,"#4f341d"),r.addColorStop(1,"#3a2614"),s.fillStyle=r,s.fillRect(0,0,1024,372);for(let c=0;c<90;c++){let u=Math.random()*1024,d=Math.random()*372,h=20+Math.random()*90,f=s.createRadialGradient(u,d,0,u,d,h);f.addColorStop(0,Math.random()<.5?"rgba(70,90,60,0.10)":"rgba(30,18,8,0.14)"),f.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=f,s.fillRect(u-h,d-h,h*2,h*2)}let o=s.getImageData(0,0,1024,372);for(let c=0;c<o.data.length;c+=4){let u=(Math.random()-.5)*14;o.data[c]+=u,o.data[c+1]+=u,o.data[c+2]+=u}s.putImageData(o,0,0);let a=(c,u="#f6d58e",d="rgba(20,10,4,0.75)")=>{s.save(),s.translate(2,3),s.fillStyle=d,s.strokeStyle=d,c(),s.restore(),s.save(),s.translate(-1,-1.5),s.fillStyle="#fff3c9",s.strokeStyle="#fff3c9",c(),s.restore();let h=s.createLinearGradient(0,0,0,372);h.addColorStop(0,"#f2c66e"),h.addColorStop(1,"#b9832f"),s.fillStyle=h,s.strokeStyle=h,c()};a(()=>{s.lineWidth=7,s.strokeRect(26,26,972,320),s.lineWidth=2,s.strokeRect(42,42,940,288)}),s.textAlign="center",s.textBaseline="middle";let l=(c,u,d)=>{let h=d;do s.font=`${u} ${h}px Satoshi, system-ui, sans-serif`,h-=2;while(s.measureText(c).width>874&&h>30)};return i[0]==="Selected as"?(a(()=>{s.font="600 46px Satoshi, system-ui, sans-serif","letterSpacing"in s&&(s.letterSpacing="14px"),s.fillText("SELECTED AS",1024/2,118),"letterSpacing"in s&&(s.letterSpacing="0px")}),a(()=>{l(i[1],600,100),s.fillText(i[1],1024/2,230)})):(a(()=>{l(i[0],600,i.length>1?106:112),s.fillText(i[0],1024/2,i.length>1?140:190)}),i[1]&&a(()=>{l(i[1],500,70),"letterSpacing"in s&&(s.letterSpacing="4px"),s.fillText(i[1],1024/2,258),"letterSpacing"in s&&(s.letterSpacing="0px")})),n}It();It();var v_=`
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
  float relief(vec3 nd, vec3 n){ return clamp(1.0 + (dot(nd, uSunDir) - dot(n, uSunDir)) * 0.9, 0.45, 1.6); }`;function x_(i){return Object.entries(i||{}).map(([e,t])=>`
  uniform sampler2D tD_${e}, tN_${e};
  vec3 D_${e}(vec3 p, vec3 n){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    return texture2D(tD_${e}, p.zy * s).rgb * w.x + texture2D(tD_${e}, p.xz * s).rgb * w.y + texture2D(tD_${e}, p.xy * s).rgb * w.z; }
  vec3 N_${e}(vec3 p, vec3 n, float k){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    vec3 tx = texture2D(tN_${e}, p.zy * s).xyz * 2.0 - 1.0, ty = texture2D(tN_${e}, p.xz * s).xyz * 2.0 - 1.0, tz = texture2D(tN_${e}, p.xy * s).xyz * 2.0 - 1.0;
    tx.xy *= k; ty.xy *= k; tz.xy *= k;
    vec3 nx = vec3(tx.xy + n.zy, abs(tx.z) * n.x), ny = vec3(ty.xy + n.xz, abs(ty.z) * n.y), nz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
    return normalize(nx.zyx * w.x + ny.xzy * w.y + nz.xyz * w.z); }`).join(`
`)}function y_(i,e=1,t=0,n=[.5,.5,.55],s=.03){let r=new ae(new zn(3500,64,32),new ve({side:qt,depthWrite:!1,uniforms:{tSky:{value:i},uExp:{value:e},uRot:{value:t},uHaze:{value:new de(...n)},uCut:{value:s},uStorm:{value:0},uFlash:{value:0},uT:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform sampler2D tSky; uniform float uExp, uRot, uCut, uStorm, uFlash, uT; uniform vec3 uHaze; varying vec3 vD; ${hc}
      void main(){ vec3 d = normalize(vD); float k = smoothstep(uCut, uCut + 0.12, d.y);
        vec3 c = uHaze;
        if (k > 0.0) { float lon = atan(d.z, d.x) + uRot, lat = asin(clamp(d.y, -1.0, 1.0));      // only the photograph's sky is ever sampled: no stretched rows
          c = mix(uHaze, pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * uExp, k); }
        if (uStorm > 0.001) { vec3 ph = c * mix(vec3(1.0), vec3(0.42, 0.47, 0.58), uStorm);           // the skyline (mountains) stays, darkened under the deck
          c = mix(ph, stormSky(d, uT, uFlash), uStorm * smoothstep(0.035, 0.16, d.y)); }
        gl_FragColor = vec4(c, 1.0); }`}));return r.renderOrder=-1,r.frustumCulled=!1,r}var __=`
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
    gl_Position = projectionMatrix * viewMatrix * w; }`;function o0(i,e){let t=new $e().makeTranslation(...i.origin);return t.multiply(new $e().makeRotationY(i.yaw-e.yaw)),t.multiply(new $e().makeTranslation(-e.origin[0],-e.origin[1],-e.origin[2])),t}async function ad(i,e,t){let n=t.renderTarget,s=i.getRenderTarget();try{i.setRenderTarget(n,0);let r=i.compileAsync(e,t.children[0]||t);i.setRenderTarget(s),await r}catch{i.setRenderTarget(s)}t.update(i,e)}var r0=(i,e)=>{globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(i,Math.round(performance.now()-e)+"ms")};async function Ii(i,{base:e,unpack:t,loader:n,renderer:s,tier:r,grainTex:o}){let a=e+i.dir+"/",l=y=>new Promise((C,I)=>n.load(a+y,D=>{D.colorSpace=Mn,D.anisotropy=4,D.generateMipmaps=/_lm\./.test(y)?!1:D.generateMipmaps,/_lm\./.test(y)&&(D.minFilter=tn),C(D)},void 0,I)),c=await fetch(a+"scene.json").then(y=>y.json()),u=new Vn;u.background=new de(...i.background||[.1,.1,.1]);let d={uTime:{value:0},uFogCol:{value:new de(...i.fog?.col||[.5,.5,.5])},uFogK:{value:i.fog?.k??0}},h=new qs(r==="high"?256:128,{generateMipmaps:!0,minFilter:xi,type:sn}),f=[],g={},v={};await Promise.all(Object.entries(i.textures||{}).map(async([y,C])=>{let I=(B,N)=>new Promise((k,U)=>n.load(e+"tex/"+B,H=>{H.wrapS=H.wrapT=gr,H.anisotropy=8,H.colorSpace=N?Xt:Mn,k(H)},void 0,U)),[D,F]=await Promise.all([I(C.id+"_diff.webp",!0),I(C.id+"_nor.webp",!1)]);v["tD_"+y]={value:D},v["tN_"+y]={value:F}}));let m=x_(i.textures),p={value:new A(...i.sun||[.4,.8,.3]).normalize()},_={value:new de(...i.sunCol||[1,.82,.58])},M={value:i.scatter??.5};for(let y of i.parts){let C=typeof y=="string"?y:y.name,I=typeof y=="object"&&y.planar,[D,F]=await Promise.all([t(a+C+".pack"),l(C+"_lm.webp")]),B=performance.now();D.computeVertexNormals(),r0(i.dir+" normals "+C,B);let N=new ve({uniforms:{...d,tLm:{value:F},tGrain:{value:o},tEnv:{value:h.texture},uHasEnv:{value:0},uK:{value:c.lm[C]},uRect:{value:new st(...c.rect||[0,1,0,1])},uSunDir:p,uSunCol:_,uScatter:M,...v,...i.uniforms||{}},defines:I?{PLANAR:""}:{},side:I?gt:ns,vertexShader:__,fragmentShader:`${v_}
${m}
${i.glsl||""}
void main(){
          vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 1.0, 0.0);
          vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
          vec3 V = normalize(cameraPosition - vW), R = reflect(-V, n);
          float fres = pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0);
          float k = vKind + 0.5; vec3 c = vec3(0.5) * L;
          ${i.palette}
          gl_FragColor = vec4(clamp(fog(c), vec3(0.0), vec3(16.0)), 1.0); }`}),k=new ae(D,N);k.frustumCulled=!1,u.add(Op(k,u,{fogK:i.fog?.k||0})),f.push(N),I&&(g.groundLm=F)}if(i.sky){let y=await new Promise((C,I)=>n.load(e+"tex/"+i.sky.file,D=>{D.colorSpace=Mn,D.generateMipmaps=!1,D.minFilter=tn,C(D)},void 0,I));g.sky=y_(y,i.sky.exposure??1,i.sky.rot??0,i.sky.haze||i.fog?.col||[.5,.5,.55],i.sky.cut??.03),u.add(g.sky)}let x={scene:u,U:d,info:c,renderer:s,tier:r,loader:n,dir:a,unpack:t,texL:l,envTex:h.texture,base:e,groundLm:g.groundLm,texU:v,sunDir:p,sky:g.sky},T=performance.now(),b=i.extras?await i.extras(x):null;if(r0(i.dir+" extras (incl. awaits)",T),i.envAt){let y=new xr(.3,4e3,h);y.position.set(...i.envAt),u.add(y);let C=new qs(2),I=[];u.traverse(D=>{for(let F of[].concat(D.material||[]))F.uniforms&&F.uniforms.tEnv&&F.uniforms.tEnv.value===h.texture&&(I.push(()=>{F.uniforms.tEnv.value=h.texture}),F.uniforms.tEnv.value=C.texture),F.envMap===h.texture&&(I.push(()=>{F.envMap=h.texture,F.needsUpdate=!0}),F.envMap=null,F.needsUpdate=!0)}),u.traverse(D=>{D.visible&&(D.isInstancedMesh||D.geometry?.isInstancedBufferGeometry)&&(D.visible=!1,I.push(()=>{D.visible=!0}))});try{await ad(s,u,y)}finally{I.forEach(D=>D()),C.dispose()}f.forEach(D=>D.uniforms.uHasEnv.value=1)}let E=Qs(i.way),R=new A,w=new A;return{key:i.dir,scene:u,sky:g.sky,chapters:i.chapters,exposure:i.exposure??1,sun:p.value.clone(),entry:i.entry,exit:i.exit,exitPortal:i.exitPortal,pose(y,C){E.sample(y,R,w),C.position.copy(R),C.lookAt(w)},closeUp(y){return(i.closeUps||[]).some(([C,I,D,F])=>(y.x-C)**2+(y.y-I)**2+(y.z-D)**2<F*F)},update(y,C,I,D){d.uTime.value=y,b?.update?.(y,C,I,D)},setPx(y){b?.setPx?.(y)},dispose(){u.traverse(y=>{y.geometry?.dispose?.();let C=y.material;C&&(Array.isArray(C)?C:[C]).forEach(I=>{I.uniforms?.tLm?.value?.dispose?.(),I.dispose()})}),h.dispose(),b?.dispose?.()}}}var M_="M\u012B\u1E6Dhr\u0101k\u012B",Li={w:44,h:22,z:-46,y:11},Pa=-7,Ia=-16,rn=(i,e,t)=>[i,e,t],w_=[{pos:rn(0,1.9,42),tgt:rn(0,2.1,5),w:1},{pos:rn(0,7,34),tgt:rn(-4,6,-16),w:1.2},{pos:rn(-16,6.5,8),tgt:rn(Pa,6,Ia),w:1.2},{pos:rn(-12.5,5,1.5),tgt:rn(Pa+1,4.6,Ia+3),w:1.1},{pos:rn(-7.2,3.9,-5.4),tgt:rn(Pa+2.6,2.05,Ia+3.9),w:1.3},{pos:rn(-1.8,3.9,-4.2),tgt:rn(Pa+4.5,2.2,Ia+5),w:1.3},{pos:rn(4,9,6),tgt:rn(0,11,Li.z),w:1.3},{pos:rn(0,11,-14),tgt:rn(0,11.5,Li.z),w:1.4},{pos:rn(0,11,-26),tgt:rn(0,11,Li.z),w:1},{pos:rn(12,4.5,-31),tgt:rn(27,3.6,-36),w:1},{pos:rn(25.6,1.9,-36),tgt:rn(60,2.1,-36),w:0}],cd=[{at:[.06,.42],kick:"Our own brand \xB7 "+M_,line:"Pure Arabica from Shimoga, treated like engineering. Brand identity, packaging and a Shopify store."},{at:[.42,.86],kick:"We do not brew. We execute.",line:"Every bean measured, every mark specified, and a warm face against the cold data.",book:"mithraki"}],a0=`
  attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
  void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w; }`,ld=`
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
    else if (k < 4.0) { c = vec3(0.50, 0.51, 0.53) * L * 0.55 + env(R, 3.4) * vec3(0.66, 0.68, 0.70) * (0.5 + 0.35 * fres); }   // brushed steel: a soft, broad reflection so flutes never smear                                // brushed steel
    else if (k < 5.0) { c = vec3(0.62, 0.42, 0.18) * L * 0.5 + env(R, 3.4) * vec3(0.95, 0.70, 0.36) * (0.5 + 0.3 * fres); }                                // brass
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
  }`;async function l0({base:i,unpack:e,loader:t,renderer:n,tier:s,grainTex:r}){let o=i+"mithraki/",a=K=>new Promise((he,Ue)=>t.load(o+K,Ee=>{Ee.colorSpace=Mn,Ee.anisotropy=8,he(Ee)},void 0,Ue)),[l,c,u,d,h,f,g]=await Promise.all([fetch(o+"scene.json").then(K=>K.json()),e(o+"room.pack"),a("room_lm.webp"),e(o+"relief.pack"),a("relief_lm.webp"),e(o+"machine.pack"),a("machine_lm.webp")]);c.computeVertexNormals();let v=new Vn;v.background=new de(.85,.82,.78);let m={uTime:{value:0},uWake:{value:0},uHandOn:{value:0},uHand:{value:new A(0,11,Li.z+3)}},p=new qs(s==="high"?256:128,{generateMipmaps:!0,minFilter:xi,type:sn}),_=new ve({uniforms:{...m,tLm:{value:u},tGrain:{value:r},tEnv:{value:p.texture},uK:{value:l.lm}},vertexShader:a0,fragmentShader:ld}),M=new ae(c,_);M.frustumCulled=!1,v.add(M),f.computeVertexNormals();let x=new ve({uniforms:{...m,tLm:{value:g},tGrain:{value:r},tEnv:{value:p.texture},uK:{value:l.lmMachine}},vertexShader:a0,fragmentShader:ld}),T=new ae(f,x);T.frustumCulled=!1,v.add(T),d.computeVertexNormals();let b=l.relief.rect,E=new ve({uniforms:{...m,tLm:{value:h},tGrain:{value:r},uK:{value:l.relief.k},uRect:{value:new st(b[0],b[1],b[2],b[3])}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tLm, tGrain; uniform float uK, uWake, uHandOn; uniform vec3 uHand; uniform vec4 uRect; varying vec3 vW, vN;
      vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
      void main(){
        vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 0.0, 1.0);
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (vW.y - uRect.z) / (uRect.w - uRect.z));
        vec3 L = lmDecode(texture2D(tLm, uv).rgb, uK);
        vec3 alb = vec3(0.93, 0.89, 0.83) * mix(1.0, texture2D(tGrain, vW.xy / 3.0).r * 1.08, 0.3);
        vec3 d = uHand - vW; float dist = length(d); vec3 l = d / max(dist, 1e-3);
        float hand = max(dot(n, l), 0.0) * exp(-dist * dist / 16.0) * uHandOn;          // a warm light held close to the plaster
        vec3 c = alb * (L * (0.85 + 0.15 * uWake) + vec3(1.0, 0.6, 0.32) * hand * 2.4 * (0.4 + 0.6 * uWake));
        gl_FragColor = vec4(clamp(c, vec3(0.0), vec3(16.0)), 1.0); }`}),R=new ae(d,E);R.frustumCulled=!1,v.add(R);let w=new go;_.uniforms.tEnv.value=null;let y=new xr(.5,300,p);y.position.set(-2,4,-2),v.add(y);let C=_.clone();C.uniforms={..._.uniforms,tEnv:{value:null}},C.fragmentShader=ld.replace("vec3 env(vec3 R, float lod){ return textureLod(tEnv, R, lod).rgb; }","vec3 env(vec3 R, float lod){ return vec3(0.18, 0.16, 0.15); }");let I=C.clone();I.uniforms={...C.uniforms,tLm:{value:g},uK:{value:l.lmMachine}},M.material=C,T.material=I,await ad(n,v,y),M.material=_,T.material=x,_.uniforms.tEnv.value=p.texture,C.dispose(),I.dispose();{let K=s==="high",he=new Ts(new St(54,92),{textureWidth:K?1024:512,textureHeight:K?1024:512,clipBias:.003,shader:{name:"mithrakiFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:"uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW; void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tDiffuse; varying vec4 vUv4; varying vec3 vW; void main(){ vec3 V = normalize(cameraPosition - vW); float f = pow(1.0 - clamp(V.y, 0.0, 1.0), 3.0);
          vec3 r = texture2DProj(tDiffuse, vUv4).rgb; gl_FragColor = vec4(r, clamp(0.16 + 0.6 * f, 0.0, 0.72)); }`}});he.rotation.x=-Math.PI/2,he.position.set(0,.012,-4),he.material.transparent=!0,he.material.depthWrite=!1,he.renderOrder=1,v.add(he)}let D=s==="high"?700:300,F=new Ye,B=new Float32Array(D*4);for(let K=0;K<D;K++)B[K*4]=K%2?1:-1,B[K*4+1]=Math.random(),B[K*4+2]=Math.random()*6.28,B[K*4+3]=Math.random();F.setAttribute("position",new qe(new Float32Array(D*3),3)),F.setAttribute("aD",new qe(B,4));let N=new nn(F,new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:m.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; attribute vec4 aD; varying float vA;
      void main(){ float life = fract(uTime * 0.12 + aD.y); float gx = ${Pa.toFixed(1)} + aD.x * 2.6;
        vec3 p = vec3(gx + sin(life * 6.0 + aD.z) * 0.5 * life, 2.4 + life * 6.5, ${(Ia+3.85).toFixed(2)} + cos(life * 5.0 + aD.z) * 0.4 * life);
        vA = 0.045 * sin(life * 3.14159) * (0.5 + aD.w * 0.5);
        vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.35 + life * 1.6) * uPx / max(-mv.z, 0.5), 1.0, 90.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.93, 0.9) * a, a); }",blending:Dt}));N.frustumCulled=!1,v.add(N);let k=new oe(-9,-9),U=new Kl,H=new vi(new A(0,0,1),-Li.z-.3),Z=-10,se=new A,fe=K=>{let he=n.domElement.getBoundingClientRect();k.set((K.clientX-he.left)/he.width*2-1,-((K.clientY-he.top)/he.height)*2+1),Z=performance.now()/1e3};n.domElement.addEventListener("pointermove",fe,{passive:!0});let _e=Qs(w_),q=new A,ne=new A,re=new A(0,11,Li.z+3);return{sun:new A(...l.sun||[-.42,.87,-.25]).normalize(),scene:v,chapters:cd,exposure:.98,entry:{origin:[0,0,42],yaw:0},exit:{origin:[26,0,-36],yaw:-Math.PI/2},exitPortal:{pos:[25.97,3.6,-36],size:[4.5,7.2],yaw:-Math.PI/2},pose(K,he){_e.sample(K,q,ne),he.position.copy(q),he.lookAt(ne)},update(K,he,Ue,Ee){m.uTime.value=K,m.uWake.value+=(dt.smoothstep(Ue,.45,.85)-m.uWake.value)*(1-Math.exp(-he*2));let Qe=performance.now()/1e3,pe=!1;Qe-Z<2.5&&(U.setFromCamera(k,Ee),U.ray.intersectPlane(H,se)&&Math.abs(se.x)<Li.w/2&&Math.abs(se.y-Li.y)<Li.h/2&&(re.set(se.x,se.y,Li.z+3.2),pe=!0)),pe||re.set(Math.sin(K*.21)*9+Math.sin(K*.53)*3,Li.y+Math.sin(K*.33)*5,Li.z+3.2),m.uHand.value.lerp(re,1-Math.exp(-he*4)),m.uHandOn.value+=((Ue>.35?1:0)-m.uHandOn.value)*(1-Math.exp(-he*1.5))},setPx(K){N.material.uniforms.uPx.value=K},destroy(){n.domElement.removeEventListener("pointermove",fe),p.dispose()},dispose(){n.domElement.removeEventListener("pointermove",fe),p.dispose(),v.traverse(K=>{K.geometry?.dispose?.();for(let he of[].concat(K.material||[]))he.dispose()})}}}It();var Hn=(i,e,t)=>[i,e,t],b_=[{pos:Hn(0,1.9,48.4),tgt:Hn(0,2.1,10),w:.8},{pos:Hn(0,2.6,40),tgt:Hn(0,4,18),w:1.2},{pos:Hn(-.6,2.4,31),tgt:Hn(0,4.5,6),w:1.2},{pos:Hn(.6,2.7,23),tgt:Hn(3.6,1.4,11),w:1.4},{pos:Hn(-.6,2.7,9),tgt:Hn(-3.6,1.4,-3),w:1.4},{pos:Hn(0,2.8,-6),tgt:Hn(0,3,-40),w:1},{pos:Hn(0,2.6,-34),tgt:Hn(0,2.4,-70),w:1},{pos:Hn(0,2.1,-50),tgt:Hn(0,2.1,-80),w:1},{pos:Hn(0,1.9,-57.6),tgt:Hn(0,2.1,-95),w:0}],ud=[{at:[.04,.5],kick:"Client \xB7 Revise Tax",line:"Full branding and website for Revise Tax."},{at:[.5,1.01],kick:"The result",line:"One of the best-looking tax websites in India, where money feels calm, clear and trusted.",book:"revisetax"}],E_=`
  vec3 grain = tri(vW, n, 3.0);
  if (k < 1.0) { vec3 nd = N_trav(vW, n, 0.8); c = D_trav(vW, n) * vec3(1.0, 0.97, 0.92) * L * 1.12 * relief(nd, n) + env(reflect(-V, nd), 1.6) * (0.02 + 0.2 * fres); }   // the palace's marble, softly polished
  else if (k < 2.0) {                               // polished marble tiles: the vault mirrored in them, softened by their own relief
    // large polished slabs set on the diagonal: cream marble with verde diamonds and fine joints, each slab from its own block
    vec2 q = mat2(0.7071, -0.7071, 0.7071, 0.7071) * vW.xz / 0.62; vec2 cell = floor(q), f = abs(fract(q) - 0.5);
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
    dly = fract((vW.y - 0.425) / 1.35) - 0.5;                                // the doors are real geometry now (each bay laid out differently)
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
`;function c0(i){return Ii({dir:"revisetax",parts:["room"],way:b_,chapters:ud,palette:E_,textures:{trav:{id:"palace_marble",s:3.2},marb:{id:"marble_tiles",s:4},plas:{id:"white_plaster_rough_01",s:2}},sun:[-.2,.93,.3],sunCol:[1,.85,.62],scatter:.35,background:[.6,.66,.74],fog:{col:[.78,.74,.66],k:.004},exposure:1,envAt:[0,3,10],entry:{origin:[0,0,48],yaw:0},exit:{origin:[0,0,-58],yaw:0},exitPortal:{pos:[0,3.6,-58.03],size:[4.5,7.2],yaw:0},extras:async({scene:e,info:t,tier:n,U:s,envTex:r})=>{let o=new ve({transparent:!0,depthWrite:!1,blending:Dt,side:gt,uniforms:{uTime:s.uTime},vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vL; uniform float uTime;
          void main(){ float h = clamp(vL.y / 9.5 + 0.5, 0.0, 1.0); float edge = 1.0 - smoothstep(0.25, 0.5, max(abs(vL.x) / 3.0, abs(vL.z) / 3.0));
            float a = edge * (0.25 + 0.75 * h) * 0.055 * (0.9 + 0.1 * sin(uTime * 0.7 + vL.y)); gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`});for(let D of t.sky){let F=new Nn(3,9.5,3,1,1,1),B=F.attributes.position;for(let k=0;k<B.count;k++){let U=B.getY(k);B.setX(k,B.getX(k)-U*.19),B.setZ(k,B.getZ(k)+U*.38)}let N=new ae(F,o);N.position.set(1,4.75,D-1.8),N.renderOrder=5,e.add(N)}let a=n==="high"?160:70,l=new rs(.032,.032,.006,16),c=new Wt({color:new de("#e6ac40"),metalness:1,roughness:.22,envMapIntensity:1.4});c.envMap=r;let u=new vn(l,c,a);u.frustumCulled=!1,e.add(u);let d=[],h=(()=>{let D=7;return()=>(D=D*16807%2147483647)/2147483647})(),f=()=>(h()+h()+h()-1.5)*.8,g=(D,F)=>.9+.36*Math.pow(Math.max(0,1-(D/.8)**2-(F/.48)**2),.65),v=new zn(1,28,12,0,Math.PI*2,0,Math.PI/2);t.chests.forEach(([D,F,B],N)=>{let k=N<2?2600:1100,U=Math.cos(B),H=Math.sin(B);for(let se=0;se<k;se++){let fe=(h()*2-1)*.8,_e=(h()*2-1)*.48,q=g(fe,_e);if(q<.905&&h()<.7)continue;let ne=Math.floor(h()*3),re=q-ne*.011+h()*.004,K=(g(fe+.02,_e)-g(fe-.02,_e))/.04,he=(g(fe,_e+.02)-g(fe,_e-.02))/.04;d.push([D+fe*U+_e*H,re,F-fe*H+_e*U,Math.atan(he)+f()*.5,h()*6.28,-Math.atan(K)+f()*.5])}let Z=new ae(v,c);Z.scale.set(.79,.34,.47),Z.position.set(D,.9,F),Z.rotation.y=B,e.add(Z);for(let se=0;se<(N<2?420:160);se++){let fe=h()*6.283,_e=.95+Math.pow(h(),2.2)*1.8;d.push([D+Math.cos(fe)*_e*1.1,.004+h()*.006,F+Math.sin(fe)*_e*.75,f()*.08,h()*6.28,f()*.08])}});let m=new rs(.032,.032,.006,12),p=new vn(m,c,d.length);p.frustumCulled=!1;{let D=new $e,F=new zt,B=new En,N=new A,k=new A(1,1,1);d.forEach((U,H)=>{B.set(U[3],U[4],U[5],"YXZ"),F.setFromEuler(B),D.compose(N.set(U[0],U[1],U[2]),F,k),p.setMatrixAt(H,D)})}e.add(p),e.add(new Pi(16773597,3811864,1.2));let _=new oi(16769720,2.5);_.position.set(-3,10,6),e.add(_);let M=Array.from({length:a},(D,F)=>{let B=t.chests[F%t.chests.length];return{x:B[0]+(Math.random()-.5)*.9,z:B[1]+(Math.random()-.5)*.6,ph:Math.random(),sp:.6+Math.random()*.5,r:Math.random()*6}}),x=new $e,T=new zt,b=new En,E=new A,R=new A(1,1,1),w=n==="high"?1400:500,y=new Ye,C=new Float32Array(w*3);for(let D=0;D<w;D++){let F=t.sky[D%t.sky.length];C[D*3]=(Math.random()-.5)*4+1,C[D*3+1]=Math.random()*9,C[D*3+2]=F-1.8+(Math.random()-.5)*4}y.setAttribute("position",new qe(C,3));let I=new nn(y,new ve({transparent:!0,depthWrite:!1,blending:Dt,uniforms:{uTime:s.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uTime * 0.08, 9.0); p.x += sin(uTime * 0.3 + p.z) * 0.2;
          vA = 0.35 * smoothstep(0.0, 1.0, p.y) * (1.0 - smoothstep(7.5, 9.0, p.y)); vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.02 * uPx / -mv.z, 1.0, 6.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * a, a); }"}));return I.frustumCulled=!1,e.add(I),{update(D){for(let F=0;F<a;F++){let B=M[F],N=(D*B.sp*.25+B.ph)%1,k=9.6-N*N*8.7;b.set(D*3+B.r,D*2+B.r,0),T.setFromEuler(b),E.set(B.x,Math.max(k,1.15),B.z),x.compose(E,T,R),u.setMatrixAt(F,x)}u.instanceMatrix.needsUpdate=!0},setPx(D){I.material.uniforms.uPx.value=D}}}},i)}It();It();var S_=`
  float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }`;function No(i){let e={uTime:i.U.uTime,uFogCol:i.U.uFogCol,uFogK:i.U.uFogK,uCenter:{value:new oe},uTile:{value:i.tile||60},uFade:{value:new oe(...i.fade||[24,32])},uH:{value:i.height||.5},uWide:{value:i.wide||1.2},uPxAng:{value:.0015},tLm:{value:i.lm},uK:{value:i.K},uRect:{value:new st(...i.rect)},uSun:{value:(i.sun||new A(.5,.6,.4)).clone().normalize()},uTip:{value:new de(...i.tip||[.22,.3,.07])},uDry:{value:new de(...i.dry||[.42,.38,.16])},uRoot:{value:new de(...i.root||[.035,.05,.015])},uWind:{value:i.wind??1}},t=new ve({side:gt,uniforms:e,vertexShader:`${S_}
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
      }`}),n=new ae(Ta(i.count||12e4,e.uTile.value,1,i.seed||3),t);n.frustumCulled=!1;let s=Aa(n,{tile:e.uTile.value}),r=new A;return{mesh:s.group,update(o){o.getWorldDirection(r),e.uCenter.value.set(o.position.x+r.x*e.uTile.value*.38,o.position.z+r.z*e.uTile.value*.38),s.update(o,e.uCenter.value,e.uFade.value.y)},setPx(o){e.uPxAng.value=o}}}var Bn=i=>3.2*Math.sin(i*.045)+1.6*Math.sin(i*.11+1.3),on=(i,e,t)=>[i,e,t],ei=-58,li=Bn(ei)+3.3;function T_(i,e){let t=Math.abs(i-Bn(e)),n=Math.pow(Math.min(1,Math.max(0,(t-2.6)/6)),1.5),s=1.4*Math.sin(i*.09+.5)*Math.cos(e*.07)+.9*Math.sin((i-e)*.13)+.5*Math.sin(i*.31+e*.23);return s=s*n+.06*Math.sin(e*.5),s*=Math.min(1,Math.abs(e-52)/8)*Math.min(1,Math.abs(e+100)/8),s+.02*t*n*3}var Yi=T_(li,ei)+.44,A_=[{pos:on(0,1.9,52.4),tgt:on(Bn(30),2.2,30),w:.8},{pos:on(Bn(40),2.3,40),tgt:on(Bn(18),2.6,18),w:1},{pos:on(Bn(22),2.4,22),tgt:on(Bn(0),2.8,0),w:1},{pos:on(Bn(2),2.5,2),tgt:on(Bn(-24),2.6,-24),w:1},{pos:on(Bn(-22)+1.2,2.2,-22),tgt:on(Bn(-34)-3.2,1.6,-34),w:1.4},{pos:on(Bn(-34)+1,1.9,-34),tgt:on(Bn(-38)-3,1.9,-38),w:1.6},{pos:on(Bn(-50)-.4,2.3,-50),tgt:on(li,Yi,ei),w:1.2},{pos:on(li-.9,Yi+.42,ei+.8),tgt:on(li-.05,Yi+.06,ei),w:1.6},{pos:on(Bn(-68),2.3,-68),tgt:on(Bn(-86),2.6,-86),w:1},{pos:on(Bn(-78)*.6,2.2,-80),tgt:on(0,3.4,-100),w:1},{pos:on(0,1.9,-99.6),tgt:on(0,2.1,-140),w:0}],hd=[{at:[.04,.42],kick:"Client \xB7 Bisi Kaapi",line:"Branding and website for Bisi Kaapi: filter coffee rooted in the hills of Karnataka."},{at:[.42,1.01],kick:"From the forest to the cup",line:"Coffee grows in forests like this one. We designed a brand that tastes like a Bangalore morning.",book:"bisikaapi"}],R_=`
  const float HX = ${li.toFixed(3)}, HZ = ${ei.toFixed(1)};
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
`;function u0(i){return Ii({dir:"bisikaapi",parts:["room",{name:"ground",planar:!0}],way:A_,chapters:hd,palette:R_,textures:{leaf:{id:"forest_leaves_02",s:2.4},lat:{id:"red_laterite_soil_stones",s:3.2},mud:{id:"brown_mud_leaves_01",s:2.2},bark:{id:"bark_brown_02",s:1.4},wall:{id:"mossy_stone_wall",s:3},mrock:{id:"mossy_rock",s:2},flag:{id:"rock_pitted_mossy",s:1.1}},sun:[.45,.5,-.6],sunCol:[1,.84,.58],scatter:1.1,envAt:[li,Yi+.5,ei],closeUps:[[li,Yi,ei,2.6]],sky:{file:"rainforest_trail_sky.webp",exposure:.9,cut:.45},background:[.6,.72,.8],fog:{col:[.5,.6,.55],k:.0048},exposure:1.05,entry:{origin:[0,0,52],yaw:0},exit:{origin:[0,0,-100],yaw:0},exitPortal:{pos:[0,3.6,-100.03],size:[4.5,7.2],yaw:0,arch:!0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:o,base:a,unpack:l,groundLm:c,dir:u}=e,d=new A(.45,.5,-.6).normalize(),h={uTime:r.uTime,uSun:{value:d},uFogCol:r.uFogCol,uFogK:r.uFogK},f=new st(...n.rect),g=await as({base:a,unpack:l,loader:o,U:h,groundLm:c,groundK:n.lm.ground,rect:f,tier:s,scene:t,layout:{items:n.items.filter(N=>!N[0].startsWith("rock_moss_set"))}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let v=await new Promise(N=>o.load(u+"leaves.webp",k=>{k.colorSpace=Xt,k.anisotropy=4,N(k)})),m=(N,k,U,H)=>{let Z=new Ye,se=[],fe=[],_e=[],q=[],ne=H,re=()=>(ne=ne*16807%2147483647)/2147483647;for(let K=0;K<N;K++){let he=new A(re()-.5,re()-.5,re()-.5).multiplyScalar(1.7),Ue=new A(re()-.5,re()*.6,re()-.5).normalize(),Ee=new A().crossVectors(Ue,new A(re()-.5,re()-.5,re()-.5)).normalize(),Qe=.75+re()*.5,pe=Math.floor(re()*16),je=pe%4/4,z=1-(Math.floor(pe/4)+1)/4,ze=se.length/3;for(let[Ce,He]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let ye=he.clone().addScaledVector(Ee,Ce*U*Qe).addScaledVector(Ue,He*k*Qe);se.push(ye.x,ye.y,ye.z),fe.push(je+(Ce+1)/8,z+(He+1)/8),q.push(he.length()/1.2)}_e.push(ze,ze+1,ze+2,ze,ze+2,ze+3)}return Z.setAttribute("position",new Je(se,3)),Z.setAttribute("uv",new Je(fe,2)),Z.setAttribute("aOut",new Je(q,1)),Z.setIndex(_e),Z},p=s==="high",_=(N,k)=>{let U=new Wn;U.index=N.index;for(let H of["position","uv","aOut"])U.attributes[H]=N.attributes[H];return U.setAttribute("aC",new Ct(new Float32Array(k.flatMap(H=>[H[0],H[1],H[2],H[3]])),4)),U.setAttribute("aT",new Ct(new Float32Array(k.flatMap((H,Z)=>[H[4],Z*.6180339%1])),2)),U.instanceCount=k.length,U},M=n.clusters.filter((N,k)=>N[4]!==1&&(p||k%2===0)),x=n.clusters.filter((N,k)=>N[4]===1&&(p||k%3!==0)),T=_(m(p?80:46,.3,.3,9),M),b=_(m(p?70:44,.24,.24,21),x),E=new ae(b,new ve({side:gt,uniforms:{...h,tLeaf:{value:v},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:f}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
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
            gl_FragColor = vec4(c, 1.0); }`}));E.frustumCulled=!1,t.add($s(E,t,{cell:36,pad:4,fogK:h.uFogK?h.uFogK.value:0}));let R=new ae(T,E.material);R.frustumCulled=!1,t.add($s(R,t,{cell:36,pad:4,fogK:h.uFogK?h.uFogK.value:0}));let w=n.cherries.filter((N,k)=>s==="high"||k%2===0),y=new vn(new zn(.045,6,4),new Wt({roughness:.25,metalness:0}),w.length),C=new $e,I=new de;w.forEach((N,k)=>{C.makeTranslation(N[0],N[1],N[2]),y.setMatrixAt(k,C),y.setColorAt(k,N[3]?I.setRGB(.55,.03,.03):I.setRGB(.25,.42,.08))}),y.frustumCulled=!1,t.add(Lo(y,t,{cell:30,minCount:120,fogK:h.uFogK?h.uFogK.value:0})),t.add(new Pi(13624063,2761750,1.1));let D=new oi(16769200,2.2);D.position.copy(d).multiplyScalar(50),t.add(D);let F=new ve({transparent:!0,depthWrite:!1,blending:Dt,side:gt,uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.3, vUv.x) * (1.0 - smoothstep(0.7, 1.0, vUv.x)) * smoothstep(0.0, 0.5, vUv.y) * 0.09 * (0.85 + 0.15 * sin(uTime * 0.4 + vUv.x * 9.0));
          gl_FragColor = vec4(vec3(1.0, 0.92, 0.75) * a, a); }`});for(let N=0;N<18;N++){let k=40-N*8+(Math.random()-.5)*4,U=Bn(k)+(Math.random()-.5)*14,H=new ae(new St(2.5+Math.random()*3,26),F);H.position.set(U,11,k),H.rotation.set(-.5,Math.random()*.6-.3,.42)}{let N=(K,he=64)=>new ss(K.map(([Ue,Ee])=>new oe(Ue,Ee)),he),k=K=>e.texU[K].value,U=N([[0,0],[.62,0],[.7,.08],[.72,.22],[.66,.36],[.5,.43],[.2,.445],[0,.445]],40),H=U.attributes.position;for(let K=0;K<H.count;K++){let he=H.getX(K),Ue=H.getZ(K),Ee=Math.atan2(Ue,he),Qe=1+.06*Math.sin(Ee*5+1)+.04*Math.sin(Ee*11);H.setX(K,he*Qe),H.setZ(K,Ue*Qe*.85)}U.computeVertexNormals();let Z=new ae(U,new Wt({map:k("tD_mrock"),normalMap:k("tN_mrock"),roughness:.92,color:14211276}));Z.position.set(li,Yi-.445,ei),t.add(Z);let se=new Wt({color:13803600,metalness:1,roughness:.24,envMap:e.envTex,envMapIntensity:1.3}),fe=new ae(N([[0,0],[.085,0],[.1,.012],[.112,.045],[.128,.062],[.125,.066],[.106,.05],[.094,.016],[0,.012]]),se),_e=N([[0,0],[.04,0],[.044,.008],[.05,.11],[.056,.124],[.053,.126],[.046,.112],[.038,.012],[0,.01]]),q=new ae(_e,se),ne=new ae(_e,se);fe.position.set(li-.05,Yi,ei),q.position.set(li-.05,Yi+.018,ei),ne.position.set(li+.2,Yi,ei+.08);let re=new ae(new bo(.047,40),new ve({uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vP; uniform float uTime; float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
            void main(){ float r = length(vP) / 0.047; float foam = smoothstep(0.55, 0.95, r) * (0.7 + 0.3 * h(floor(vP * 900.0)));
              vec3 c = mix(vec3(0.16, 0.08, 0.035), vec3(0.62, 0.45, 0.28), foam * 0.9 + 0.12 * h(floor(vP * 500.0 + uTime)));   // filter coffee, frothed by pouring
              gl_FragColor = vec4(c * 0.9, 1.0); }`}));re.rotation.x=-Math.PI/2,re.position.set(li+.2,Yi+.105,ei+.08),t.add(fe,q,ne,re),n.hero=[li+.2,Yi+.12,ei+.08]}if(n.hero){let k=new Ye,U=new Float32Array(90*4);for(let Z=0;Z<90;Z++)U[Z*4]=Math.random(),U[Z*4+1]=Math.random()*6.28,U[Z*4+2]=Math.random(),U[Z*4+3]=Math.random();k.setAttribute("position",new qe(U.slice(0,90*3),3)),k.setAttribute("aS",new qe(U,4));let H=new nn(k,new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uO:{value:new A(...n.hero)}},vertexShader:`uniform float uTime; uniform vec3 uO; attribute vec4 aS; varying float vA;
            void main(){ float t = fract(aS.x + uTime * (0.16 + aS.z * 0.08)); float h = t * 0.5;
              vec3 p = uO + vec3(cos(aS.y + h * 9.0) * (0.012 + h * 0.09), h, sin(aS.y + h * 9.0) * (0.012 + h * 0.09)) + vec3(sin(uTime * 0.9 + h * 10.0) * 0.06 * h, 0.0, 0.0);
              vA = sin(t * 3.14159) * 0.03 * smoothstep(0.0, 0.15, t); vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((14.0 + 46.0 * t) / -mv.z, 1.0, 60.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.96, 0.94), a); }"}));H.frustumCulled=!1,H.renderOrder=7,t.add(H)}let B=No({U:r,lm:c,K:n.lm.ground,rect:n.rect,sun:d,tile:56,count:p?14e4:6e4,fade:[20,27],height:.42,wide:1.25,tip:[.16,.24,.06],dry:[.3,.3,.12],root:[.03,.04,.012],seed:7,heightGLSL:`float groundY(vec2 p){ float x = p.x, z = p.y; float px = 3.2 * sin(z * 0.045) + 1.6 * sin(z * 0.11 + 1.3); float d = abs(x - px);
          float fl = pow(clamp((d - 2.6) / 6.0, 0.0, 1.0), 1.5);
          float h = 1.4 * sin(x * 0.09 + 0.5) * cos(z * 0.07) + 0.9 * sin((x - z) * 0.13) + 0.5 * sin(x * 0.31 + z * 0.23);
          h = h * fl + 0.06 * sin(z * 0.5); h *= min(1.0, abs(z - 52.0) / 8.0) * min(1.0, abs(z + 100.0) / 8.0); return h + 0.02 * d * fl * 3.0; }`,maskGLSL:`float grassMask(vec2 p){ float px = 3.2 * sin(p.y * 0.045) + 1.6 * sin(p.y * 0.11 + 1.3);
          return smoothstep(2.2, 3.2, abs(p.x - px)) * smoothstep(2.4, 3.4, distance(p, vec2(${li.toFixed(2)}, ${ei.toFixed(1)}))) * smoothstep(0.25, 0.6, gn(p * 0.21)); }`});return t.add(B.mesh),{update(N,k,U,H){B.update(H)},setPx(N){B.setPx(1/N)}}}},i)}It();var kn=(i,e,t)=>[i,e,t],k_=[{pos:kn(0,1.9,12.4),tgt:kn(0,1,-40),w:.45},{pos:kn(0,5.5,-6.5),tgt:kn(0,-24,-95),w:1},{pos:kn(-44,14,-28),tgt:kn(0,0,-105),w:1},{pos:kn(-66,34,-80),tgt:kn(0,30,-108),w:1.1},{pos:kn(-44,74,-132),tgt:kn(0,30,-112),w:1.1},{pos:kn(10,86,-142),tgt:kn(0,20,-118),w:1},{pos:kn(12,24,-172),tgt:kn(0,10,-130),w:1.1},{pos:kn(6,-8,-180),tgt:kn(0,-14,-200),w:1},{pos:kn(2,-32,-184),tgt:kn(0,-56,-190),w:0}],md=[{at:[.04,.45],kick:"Client \xB7 Glavida",line:"Branding and website for Glavida, a real estate company that builds homes worth waiting for."},{at:[.45,.94],kick:"From line to landmark",line:"Every great building starts as a line on paper. We gave Glavida a brand people want to move into.",book:"glavida"}],O_="uniform float uBuild, uSea;",V_=`
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
  else if (k < 5.0) { vec3 nd = N_rock(vW, n, 1.3); c = D_rock(vW, n) * vec3(0.55, 0.66, 0.82) * L * 1.2 * relief(nd, n); }                          // cliff rock
  else if (k < 6.0) { vec3 nd = N_asph(vW, n, 1.0); c = D_asph(vW, n) * 0.7 * L + env(reflect(-V, nd), 1.0) * (0.02 + 0.3 * fres); }   // asphalt, damp
  else if (k < 7.0) c = env(R, 2.0) * 0.5 + L * 0.06;                                                      // metal
  else if (k < 8.0) c = D_lawn(vW, n) * vec3(0.8, 0.95, 0.7) * (L * 1.3 + vec3(0.03, 0.04, 0.03));                   // lawns, roof gardens, planters
  else { float gr = sin(vW.x * 9.0 + sin(vW.z * 2.0)) * 0.5 + 0.5; c = mix(vec3(0.36, 0.22, 0.12), vec3(0.5, 0.33, 0.18), gr) * (L * 1.4 + vec3(0.12, 0.07, 0.04)); }   // timber soffits, warm from the rooms
  c += vec3(1.0, 0.55, 0.2) * band * 1.4;
`;function h0(i){return Ii({dir:"glavida",parts:["room"],way:k_,chapters:md,palette:V_,glsl:O_,textures:{stone:{id:"large_sandstone_blocks",s:3},conc:{id:"concrete_tile_facade",s:3.2},rock:{id:"rock_face_03",s:2.8},asph:{id:"asphalt_02",s:4},lawn:{id:"forest_ground_04",s:3}},sun:[-.7,.25,-.35],sunCol:[1,.6,.4],scatter:.9,sky:{file:"kiara_9_dusk_sky.webp",exposure:1,rot:3.734,cut:0,haze:[.22,.3,.44]},uniforms:{uBuild:{value:-24},uSea:{value:-26}},background:[.16,.26,.42],fog:{col:[.22,.3,.44],k:.0026},exposure:.95,envAt:[0,30,-20],entry:{origin:[0,0,12],yaw:0},exit:{origin:[2,-26,-184],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:o,base:a,unpack:l,renderer:c}=e,u=e.sky,d=new Ts(new St(8e3,5e3),{textureWidth:1024,textureHeight:512,color:5928336,shader:{name:"harbour",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:r.uTime},vertexShader:"uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW; void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime; varying vec4 vUv4; varying vec3 vW;
            float hgt(vec2 p){ float t = uTime; return 0.5 * sin(p.x * 0.7 + p.y * 0.23 + t * 0.9) + 0.3 * sin(p.x * 1.9 - p.y * 1.4 - t * 1.3) + 0.15 * sin(p.y * 3.1 + p.x * 0.6 + t * 1.7) + 0.07 * sin(p.x * 6.3 + p.y * 5.1 - t * 2.4); }
            void main(){
              float dd = length(vW - cameraPosition), e = 0.12; vec2 p = vW.xz * 0.55; p += 1.4 * vec2(sin(p.y * 0.41 + uTime * 0.3), cos(p.x * 0.33 - uTime * 0.25));   // a warped field: no repeating grid
              float h0 = hgt(p); vec2 g = vec2(hgt(p + vec2(e, 0.0)) - h0, hgt(p + vec2(0.0, e)) - h0) / e;         // the slope of the swell
              vec3 n = normalize(vec3(-g.x * 0.2, 1.0, -g.y * 0.2) / (1.0 + dd * 0.004));
              vec3 V = normalize(cameraPosition - vW); float cs = max(dot(n, V), 0.0), F = 0.03 + 0.97 * pow(1.0 - cs, 5.0);
              vec4 uv = vUv4; uv.xy += n.xz * 0.06 * uv.w;
              vec3 base = mix(vec3(0.012, 0.045, 0.08), vec3(0.04, 0.13, 0.19), 0.5 + 0.5 * h0);                      // deep harbour water, lighter in the troughs
              vec3 c = mix(base, texture2DProj(tDiffuse, uv).rgb, clamp(F * 1.25, 0.0, 0.9));
              c += vec3(1.0, 0.72, 0.5) * pow(max(dot(reflect(-V, n), normalize(vec3(-0.7, 0.25, -0.35))), 0.0), 80.0) * 1.1;   // low sun glints
              c = mix(c, vec3(0.2, 0.3, 0.45), smoothstep(60.0, 260.0, dd) * smoothstep(0.0, 0.5, 1.0 - V.y) * 0.95);        // far water, seen at a grazing angle, goes to haze; looking down it stays water
              gl_FragColor = vec4(c, 1.0); }`}});d.rotation.x=-Math.PI/2,d.position.set(0,n.sea,-305),t.add(d);let h=new yr(new Uint8Array([200,200,200,255]),1,1);h.needsUpdate=!0;let f={uTime:r.uTime,uSun:{value:new A(-.7,.3,.25).normalize()},uFogCol:r.uFogCol,uFogK:r.uFogK},g=await as({base:a,unpack:l,loader:o,U:f,groundLm:h,groundK:.5,rect:new st(-1,1,-1,1),tier:s,scene:t,layout:{items:n.items}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let v=new Wt({color:13214247,metalness:.3,roughness:.6});t.add(new Pi(9414872,1710626,.9));let m=new oi(16756864,1);m.position.set(-70,35,25),t.add(m);let p=(w,y,C)=>{let I=[],D=(k,U,H)=>{let Z=new A().subVectors(U,k),se=new rs(H,H,Z.length(),4,1,!0);se.applyQuaternion(new zt().setFromUnitVectors(new A(0,1,0),Z.clone().normalize())),se.translate((k.x+U.x)/2,(k.y+U.y)/2,(k.z+U.z)/2),I.push(se)},F=(k,U,H)=>C==="y"?new A(U*y/2,k,H*y/2):new A(k,U*y/2,H*y/2),B=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[k,U]of B)D(F(0,k,U),F(w,k,U),.09);let N=y*1.1;for(let k=0;k<w-.01;k+=N)for(let U=0;U<4;U++){let[H,Z]=B[U],[se,fe]=B[(U+1)%4],_e=Math.min(w,k+N);D(F(k,H,Z),F(k,se,fe),.05),D(F(k,H,Z),F(_e,se,fe),.045)}return _(I)},{mergeGeometries:_}=await Promise.resolve().then(()=>(pd(),fd)),M=[];for(let w of[1,2,5]){let y=n.towers[w],C=y[5]+2,I=y[0]+y[2]/2+3,D=y[1],F=C+16-n.gy,B=new ae(p(F,1.6,"y"),v);B.position.set(I,n.gy,D),t.add(B);let N=new Fn;N.position.set(I,C+16,D),t.add(N);let k=new ae(p(50,1.1,"x"),v);k.position.x=-12,N.add(k);let U=new ae(new Nn(2.2,2,2),new Wt({color:14210248,roughness:.5}));U.position.set(1.8,-1.6,0),N.add(U);let H=new ae(new Nn(3.6,2.4,2),new Wt({color:7170660,roughness:.9}));H.position.set(-9.5,-1.4,0),N.add(H);let Z=new ae(new rs(.03,.03,20,4),new On({color:1710618}));Z.position.set(26,-10,0),N.add(Z);let se=new ae(new Nn(.5,.7,.3),new Wt({color:13214247}));se.position.set(26,-20.3,0),N.add(se);let fe=new ae(new zn(.25,8,6),new On({color:new de(6,.4,.2)}));fe.position.set(38,.8,0),N.add(fe),M.push({jib:N,ph:w,beacon:fe})}let x=[];t.traverse(w=>{w.isMesh&&w.material.uniforms&&w.material.uniforms.uBuild&&x.push(w.material)});let T=n.sea,b=r.uFogCol.value.clone(),E=r.uFogK.value,R=t.background.clone();return{update(w,y,C,I){let D=dt.lerp(-26,92,dt.smoothstep(C,.05,.6));x.forEach(B=>B.uniforms.uBuild.value=D),M.forEach(B=>{B.jib.rotation.y=Math.sin(w*.07+B.ph)*1.4,B.beacon.visible=Math.sin(w*3+B.ph)>.2});let F=I.position.y<T;r.uFogCol.value.copy(F?new de(.02,.12,.2):b),r.uFogK.value=F?.12:E,t.background.copy(F?new de(.02,.12,.2):R),u.visible=!F,d.visible=!F}}}},i)}It();var xn=(i,e,t)=>[i,e,t],W_=[{pos:xn(0,46,50),tgt:xn(-2,22,44),w:.6},{pos:xn(0,39,46),tgt:xn(0,20,6),w:1},{pos:xn(2,18,28),tgt:xn(0,2,-10),w:1},{pos:xn(-1,5,6),tgt:xn(0,2,-30),w:1},{pos:xn(1.5,3.2,-30),tgt:xn(4,1.5,-78),w:1},{pos:xn(0,4,-62),tgt:xn(0,3,-100),w:1},{pos:xn(2,6.5,-88),tgt:xn(0,22,-120),w:1},{pos:xn(0,24,-108),tgt:xn(0,52,-136),w:1},{pos:xn(0,43.5,-122),tgt:xn(0,70,-150),w:1},{pos:xn(0,51.2,-126),tgt:xn(0,110,-150),w:0}],gd=[{at:[.04,.5],kick:"Client \xB7 Innovius",line:"Branding and website for Innovius, a technology company."},{at:[.5,1.01],kick:"Invisible, until it lights up",line:"Like the cables under every ocean, great technology works quietly. We gave it a voice and a face.",book:"innovius"}],G_=`
  // caustics: sunlight focused by the waves above into bright, sharp, slowly crawling webs, split slightly into colour
  float caus1(vec2 p, float t){ vec2 q = p; float c = 0.0;
    for (int i = 0; i < 4; i++) { float s = float(i) + 1.0;
      q = p * (0.6 + s * 0.35) + vec2(sin(t * 0.55 + q.y * 1.6 + s), cos(t * 0.47 + q.x * 1.3 - s)) * (0.9 / s);
      c += 1.0 / (1.0 + 24.0 * abs(sin(q.x) * sin(q.y))); }
    return pow(c / 4.0, 1.7) * 2.6; }
  vec3 caustic3(vec2 p, float t){ return vec3(caus1(p + 0.012, t), caus1(p, t), caus1(p - 0.012, t)); }`,X_=`
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
`;function d0(i){return Ii({dir:"innovious",parts:["room",{name:"ground",planar:!0}],way:W_,chapters:gd,palette:X_,glsl:G_,textures:{sand:{id:"sand_02",s:2.5},grav:{id:"coral_gravel",s:2},rock:{id:"rock_wall_08",s:3.5}},sun:[.1,.95,.2],sunCol:[.5,.8,.85],scatter:.7,background:[.03,.2,.28],fog:{col:[.03,.2,.28],k:.012},exposure:1.2,entry:{origin:[0,52,50],yaw:0},exit:{origin:[0,52,-126],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r}=e,o=new de(.1,.42,.5),a=new de(.02,.16,.25),l=s==="high"?420:180,c=16,u=new St(1.15,1,2,c*2);u.translate(0,.5,0);let d=new Wn;d.index=u.index,d.attributes.position=u.attributes.position,d.attributes.uv=u.attributes.uv;let h=new Float32Array(l*4);for(let H=0;H<l;H++){let Z=Math.random()<.5?-1:1;h[H*4]=Z*(6+Math.random()*40),h[H*4+1]=60-Math.random()*200,h[H*4+2]=8+Math.random()*18,h[H*4+3]=Math.random()*6.28}d.setAttribute("aK",new Ct(h,4)),d.instanceCount=l;let f=new ae(d,new ve({side:gt,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK},vertexShader:`uniform float uTime; attribute vec4 aK; varying float vY; varying vec3 vW; varying vec2 vUv;
          void main(){ float y = position.y; vY = y; vUv = uv; float h = aK.z;
            vec3 p = vec3(position.x * (0.35 + 0.65 * smoothstep(0.0, 0.18, y)) * (1.0 - 0.45 * y) * (0.72 + 0.28 * sin(y * h * 1.9 + aK.w * 3.0)), y * h, 0.0);   // a frond, not a straw: narrow stipe, wide wavy blade
            float s = sin(uTime * 0.6 + aK.w + y * 2.5) * 1.6 * y * y + sin(uTime * 1.3 + aK.w * 2.0 + y * 6.0) * 0.15 * y;
            p.x += s; p.z += cos(uTime * 0.5 + aK.w + y * 2.0) * 0.8 * y * y;
            mat2 r = mat2(cos(aK.w), -sin(aK.w), sin(aK.w), cos(aK.w)); p.xz = r * p.xz;
            vec3 w = vec3(aK.x, -0.5, aK.y) + p; vW = w; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`uniform vec3 uFogCol; uniform float uFogK; varying float vY; varying vec3 vW; varying vec2 vUv;
          void main(){ float x = abs(vUv.x - 0.5) * 2.0;
            float rib = 1.0 - smoothstep(0.0, 0.12, x), ruffle = 0.85 + 0.15 * sin(vW.y * 9.0 + x * 6.0), edge = smoothstep(0.75, 1.0, x);
            vec3 V = normalize(cameraPosition - vW); float glow = pow(max(-V.y * 0.5 + 0.5, 0.0), 2.0) * (0.4 + 0.6 * vY);   // sun through the frond from above
            vec3 c = mix(vec3(0.03, 0.045, 0.02), vec3(0.16, 0.17, 0.06), vY) * ruffle * (1.0 - edge * 0.3) + vec3(0.1, 0.09, 0.03) * rib * 0.3;   // giant kelp: olive-brown, never straw yellow
            c += vec3(0.2, 0.24, 0.08) * glow * 0.3 * (1.0 - rib * 0.3);
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}));f.frustumCulled=!1,t.add(f);let g=new ve({transparent:!0,depthWrite:!1,blending:Dt,side:gt,uniforms:{uTime:r.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.4, vUv.x) * (1.0 - smoothstep(0.6, 1.0, vUv.x)) * smoothstep(0.0, 0.9, vUv.y) * 0.085 * (0.55 + 0.45 * sin(uTime * 0.5 + vUv.x * 7.0));
          gl_FragColor = vec4(vec3(0.6, 0.9, 1.0) * a, a); }`});for(let H=0;H<26;H++){let Z=new ae(new St(3+Math.random()*6,60),g);Z.position.set((Math.random()-.5)*60,26,50-H*7.5),Z.rotation.set(.12,Math.random()*Math.PI,.08),Z.renderOrder=6,t.add(Z)}let v=new ae(new St(420,420,1,1),new ve({side:gt,depthWrite:!1,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; uniform vec3 uFogCol; varying vec3 vW;
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
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * 0.011)), 1.0); }`}));v.rotation.x=Math.PI/2,v.position.set(0,52,-100),v.renderOrder=2,t.add(v);let m=s==="high"?2500:900,p=new Ye,_=new Float32Array(m*3);for(let H=0;H<m;H++)_[H*3]=(Math.random()-.5)*80,_[H*3+1]=Math.random()*50,_[H*3+2]=60-Math.random()*200;p.setAttribute("position",new qe(_,3));let M=new nn(p,new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y - uTime * 0.25, 50.0); p.x += sin(uTime * 0.2 + p.z) * 0.6;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(5.0, 60.0, -mv.z)) * 0.5; gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.06 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.8, 0.9, 0.95) * a, a); }"}));M.frustumCulled=!1,t.add(M);let x=s==="high"?260:120,T=new ss([[0,-.21],[.03,-.18],[.06,-.08],[.065,.02],[.05,.12],[.02,.18],[.012,.2]].map(([H,Z])=>new oe(H,Z)),10);T.scale(1,1,.55),T.rotateX(-Math.PI/2);let b=new Ye;b.setAttribute("position",new Je([0,0,-.19,0,.07,-.29,0,-.07,-.29],3));let{mergeGeometries:E}=await Promise.resolve().then(()=>(pd(),fd)),R=T.toNonIndexed();R.deleteAttribute("uv"),R.deleteAttribute("normal");let w=E([R,b]);w.deleteAttribute("normal"),w.computeVertexNormals();let y=new Wt({color:12176598,metalness:.25,roughness:.4,emissive:1915464,side:gt});y.onBeforeCompile=H=>{H.uniforms.uTime=r.uTime,H.vertexShader=`uniform float uTime;
`+H.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += sin(uTime * 14.0 + float(gl_InstanceID) * 1.7 + position.z * 18.0) * 0.025 * (1.0 - smoothstep(-0.3, 0.05, position.z));`),H.fragmentShader=H.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(vec3(0.35, 0.45, 0.55), vec3(1.0), smoothstep(-0.03, 0.04, -vNormal.y));`)};let C=new vn(w,y,x);C.frustumCulled=!1,t.add(C),t.add(new Pi(10475775,661536,1.4));let I=Array.from({length:x},()=>({r:4+Math.random()*5,h:(Math.random()-.5)*3,ph:Math.random()*6.28,sp:.25+Math.random()*.15})),D=new $e,F=new zt,B=new A,N=new A(1,1,1),k=new A(0,1,0),U=No({U:r,lm:e.groundLm,K:n.lm.ground,rect:n.rect,sun:new A(.1,.95,.2),tile:50,count:s==="high"?11e4:45e3,fade:[18,25],height:.75,wide:1.6,tip:[.2,.38,.12],dry:[.36,.42,.16],root:[.03,.07,.04],wind:.9,seed:21,heightGLSL:"float groundY(vec2 p){ float x = p.x, z = p.y; return 1.6 * sin(x * 0.05 + 0.4) * cos(z * 0.04) + 0.9 * sin((x + z) * 0.09) + 0.35 * sin(x * 0.23 - z * 0.17) - 0.0002 * x * x; }",maskGLSL:"float grassMask(vec2 p){ return smoothstep(0.42, 0.62, gn(p * 0.09) * 0.7 + gn(p * 0.5) * 0.3); }"});return t.add(U.mesh),{update(H,Z,se,fe){U.update(fe);let _e=dt.clamp((fe.position.y-5)/40,0,1);r.uFogCol.value.copy(a).lerp(o,_e),t.background.copy(r.uFogCol.value);let q=3,ne=-40+Math.sin(H*.05)*20;I.forEach((re,K)=>{let he=H*re.sp+re.ph;B.set(q+Math.cos(he)*re.r,7+re.h+Math.sin(he*2)*.6,ne+Math.sin(he)*re.r),F.setFromAxisAngle(k,-he),D.compose(B,F,N),C.setMatrixAt(K,D)}),C.instanceMatrix.needsUpdate=!0},setPx(H){M.material.uniforms.uPx.value=H,U.setPx(1/H)}}}},i)}It();var La=-18,tr=i=>2+1.6*Math.sin(i*.06);function p0(i,e){let t=(e-La)/26,n=-2.2+2.2/(1+Math.exp(-t*3))+Math.max(0,e-La)*.035,s=1.2*Math.max(0,Math.tanh((e-6)/10))*(.6+.4*Math.sin(i*.12+1))+.5*Math.sin(i*.21+e*.13)*Math.max(0,Math.tanh((e-2)/8)),r=Math.min(1,Math.abs(i-tr(e))/5);return n+s*(.35+.65*r)+.04*Math.sin(i*1.3)*Math.sin(e*.9)}var Tr=i=>Math.max(p0(tr(i),i),.15)+.42+1.62,en=37,An=tr(en)+.2,As=p0(An,en)+.13,Jn=(i,e,t)=>[i,e,t],q_=[{pos:Jn(0,-.8,-66),tgt:Jn(0,14,-44),w:.7},{pos:Jn(0,.7,-54),tgt:Jn(1,2.4,-8),w:1},{pos:Jn(1.4,1.5,-32),tgt:Jn(tr(0),2.6,8),w:1.1},{pos:Jn(tr(-8),Tr(-8),-8),tgt:Jn(tr(10),Tr(10)-.3,10),w:1},{pos:Jn(tr(12)-.4,Tr(12),12),tgt:Jn(tr(28),Tr(28)-.6,28),w:1.1},{pos:Jn(An-.55,As+.3,en-.95),tgt:Jn(An,As+.06,en),w:1.4},{pos:Jn(An+3,Tr(en)+2,en+2.5),tgt:Jn(An-30,26,en+110),w:1.1},{pos:Jn(An+2,Tr(en)+16,en+10),tgt:Jn(An-30,20,en+240),w:0}],vd=[{at:[.04,.5],kick:"Client \xB7 House of Moh",line:"Branding and website for House of Moh: daily creams for women and men."},{at:[.5,1.01],kick:"Soft by nature",line:"Gentle as a twilight shore and made for every day. We designed a brand you want on your skin.",book:"houseofmoh"}],f0=`
  float hmH(float x, float z){ float t = (z - ${La.toFixed(1)}) / 26.0;
    float base = -2.2 + 2.2 / (1.0 + exp(-t * 3.0)) + max(0.0, z - ${La.toFixed(1)}) * 0.035;
    float wx = 2.0 + 1.6 * sin(z * 0.06);
    float dune = 1.2 * max(0.0, tanh((z - 6.0) / 10.0)) * (0.6 + 0.4 * sin(x * 0.12 + 1.0)) + 0.5 * sin(x * 0.21 + z * 0.13) * max(0.0, tanh((z - 2.0) / 8.0));
    return base + dune * (0.35 + 0.65 * min(1.0, abs(x - wx) / 5.0)); }`,Y_=`
  if (distance(vW.xz, vec2(${An.toFixed(3)}, ${en.toFixed(1)})) < 1.45 && k > 1.5 && k < 7.0) discard;   // the baked plinth and jar: drawn live, at true scale
  if (k < 1.0) {                                     // sand: fine and dry above, dark and glassy where the waves have been, rippled below
    float wet = 1.0 - smoothstep(0.05, 0.55, vW.y);
    vec3 nd = N_sand(vW, n, 1.2); vec3 dry = D_sand(vW, n), dmp = D_wet(vW, n) * 0.8;
    vec3 a = mix(dry, dmp, wet); nd = normalize(mix(nd, N_wet(vW, n, 1.0), wet));
    float jd = distance(vW.xz, vec2(${An.toFixed(3)}, ${en.toFixed(1)}));                            // the old plinth's baked shadow lifted
    vec3 Ls = mix(max(L, vec3(0.42, 0.4, 0.46)) * (0.7 + 0.3 * smoothstep(0.4, 0.75, jd)), L, smoothstep(1.6, 2.6, jd));
    c = a * Ls * 1.2 * relief(nd, n);
    c += env(reflect(-V, nd), 1.0) * wet * (0.04 + 0.5 * fres) * 0.5;                // the wet sand mirrors the sky
  }
  else if (k < 3.0) {                               // sandstone headlands and the plinth (the old stand-in's baked shadow lifted; a soft contact shadow kept)
    float jd = distance(vW.xz, vec2(${An.toFixed(3)}, ${en.toFixed(1)}));
    vec3 Lp = mix(max(L, vec3(0.5, 0.46, 0.5)) * (0.55 + 0.45 * smoothstep(0.09, 0.2, jd)), L, smoothstep(0.75, 1.1, jd));
    vec3 nd = N_rock(vW, n, 1.3); c = D_rock(vW, n) * Lp * 1.25 * relief(nd, n); }
  else if (k < 4.0) { vec3 nd = N_plank(vW, n, 1.2); c = D_plank(vW, n) * L * 1.2 * relief(nd, n); }     // sun-silvered boardwalk planks
  else if (k < 5.0) c = D_rock(vW * 2.0, n) * vec3(0.8, 0.8, 0.78) * L;                                    // frangipani bark, smooth and grey
  else if (k < 6.0) { c = vec3(0.93, 0.88, 0.8) * max(L, vec3(0.62, 0.6, 0.66)) + env(R, 0.5) * (0.05 + 0.5 * fres) * 0.6; }   // the cream jar, glazed
  else if (k < 7.0) { c = vec3(0.85, 0.62, 0.3) * (L * 0.25 + 0.2) + vec3(0.85, 0.62, 0.3) * env(R, 0.8) * 1.2; }               // gold lid
  else c = vec3(0.04) * L + vec3(0.1) * fres;                                                                 // lantern iron
`;function m0(i){return Ii({dir:"houseofmoh",parts:["room",{name:"ground",planar:!0}],way:q_,chapters:vd,palette:Y_,textures:{sand:{id:"coast_sand_01",s:2.4},wet:{id:"damp_beach_sand",s:2},plank:{id:"weathered_planks",s:1.8},rock:{id:"coast_sand_rocks_02",s:4}},sun:[.2,.15,-1],sunCol:[1,.62,.42],scatter:1.1,closeUps:[[An,As,en,2.6]],sky:{file:"kiara_9_dusk_sky.webp",exposure:1.05,rot:2.429,cut:0},envAt:[An,As+.4,en],background:[.2,.25,.4],fog:{col:[.42,.42,.55],k:.0035},exposure:1.05,entry:{origin:[0,0,-66],yaw:Math.PI},exit:{origin:[An+2,Tr(en)+16,en+10],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,loader:o,base:a,unpack:l,groundLm:c}=e,u=s==="high",d=new A(-.3,.42,.86).normalize(),h=new A(.2,.05,-1).normalize(),f=`uniform sampler2D tSky; uniform float uSkyRot;
        vec3 skyCol(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
          return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)); }`,g=e.sky,v=new ae(new St(4e3,4e3,u?400:240,u?400:240),new ve({transparent:!0,depthWrite:!1,side:gt,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK,tSky:g.material.uniforms.tSky,uSkyRot:g.material.uniforms.uRot},vertexShader:`uniform float uTime; varying vec3 vW; varying float vCrest;
          void main(){ vec3 p = (modelMatrix * vec4(position, 1.0)).xyz;
            float w1 = sin(p.z * 0.35 + uTime * 1.1 + sin(p.x * 0.05) * 1.5), w2 = sin(p.x * 0.21 - p.z * 0.17 + uTime * 0.7), w3 = sin(p.z * 0.9 + p.x * 0.3 + uTime * 1.9);
            float shoal = smoothstep(-40.0, -8.0, p.z);                            // the swell grows as it shoals
            p.y += (w1 * 0.16 + w2 * 0.08 + w3 * 0.03) * (0.6 + shoal * 0.8); vCrest = w1 * 0.5 + 0.5; vW = p;
            gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uFogCol; uniform float uFogK; varying vec3 vW; varying float vCrest; ${f0} ${f}
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
            vec3 R = reflect(-V, n); R.y = max(abs(R.y), 0.2); R = normalize(R);   // never reflect the dark band under the sky photo's horizon: that made flat puddles
            float fr = 0.02 + 0.98 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
            vec3 deep = vec3(0.008, 0.05, 0.085), shallow = vec3(0.08, 0.36, 0.38);
            vec3 body = mix(shallow, deep, smoothstep(0.3, 7.0, depth)) * (0.92 + 0.16 * smoothstep(0.0, 0.25, sl.y + sl.x * 0.3));   // light through the crests
            vec3 c = mix(body, skyCol(R), fr);
            vec3 SUN = normalize(vec3(0.2, 0.06, -1.0));
            c += vec3(1.0, 0.72, 0.45) * (pow(max(dot(R, SUN), 0.0), 900.0) * 18.0 + pow(max(dot(R, SUN), 0.0), 60.0) * 0.5);   // the sun's glitter path
            float lace = smoothstep(0.5, 0.95, wn(vW.xz * 2.2 + vec2(uTime * 0.3, 0.0)) * 0.6 + wn(vW.xz * 7.0 - uTime * 0.5) * 0.4);
            float run = 0.35 + 0.25 * sin(vW.x * 0.25 + uTime * 0.9) + 0.15 * sin(uTime * 0.37);
            float foam = (1.0 - smoothstep(0.0, run, depth)) * (0.45 + 0.55 * lace);
            foam += smoothstep(run, run + 0.6, depth) * (1.0 - smoothstep(run + 0.6, run + 1.6, depth)) * lace * 0.45;   // the broken lace behind the wave
            foam += smoothstep(0.9, 1.0, vCrest) * smoothstep(-14.0, -4.0, vW.z) * lace * 0.1;   // only a whisper of white on the crests near the shore
            c = mix(c, vec3(0.74, 0.8, 0.84) * (0.6 + 0.4 * dot(n, vec3(0.0, 1.0, 0.0))), clamp(foam, 0.0, 1.0) * 0.85);
            float a = clamp(0.35 + depth * 0.9, 0.3, 0.96); a = max(a, foam);
            if (depth < -0.05) discard;
            float d = length(vW - cameraPosition); c = mix(c, uFogCol, (1.0 - exp(-d * uFogK)) * 0.55);
            gl_FragColor = vec4(c, a); }`}));v.rotation.x=-Math.PI/2,v.position.set(0,0,-120),v.renderOrder=4,v.frustumCulled=!1,t.add(v);let m=d.clone(),p={uTime:r.uTime,uSun:{value:m},uFogCol:r.uFogCol,uFogK:r.uFogK},_=new st(...n.rect),M=n.items.filter(pe=>!(pe[0].startsWith("coast_rocks")&&pe[3]<La+1)),x=await as({base:a,unpack:l,loader:o,U:p,groundLm:c,groundK:n.lm.ground,rect:_,tier:s,scene:t,layout:{items:M}}).catch(()=>null);x&&(t.add(x.group),x.fade.value=1);let T=await new Promise(pe=>o.load(a+"bisikaapi/leaves.webp",je=>{je.colorSpace=Xt,je.anisotropy=4,pe(je)})),b=(pe,je,z)=>{let ze=new Ye,Ce=[],He=[],ye=[],ue=[],le=z,L=()=>(le=le*16807%2147483647)/2147483647;for(let S=0;S<pe;S++){let V=new A(L()-.5,L()-.5,L()-.5).multiplyScalar(1.6),$=new A(L()-.5,.2+L()*.7,L()-.5).normalize(),ie=new A().crossVectors($,new A(L()-.5,L()-.5,L()-.5)).normalize(),Q=.75+L()*.5,we=Math.floor(L()*16),xe=we%4/4,be=1-(Math.floor(we/4)+1)/4,nt=Ce.length/3;for(let[me,Te]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let We=V.clone().addScaledVector(ie,me*je*Q).addScaledVector($,Te*je*Q);Ce.push(We.x,We.y,We.z),He.push(xe+(me+1)/8,be+(Te+1)/8),ue.push(V.length()/1.1)}ye.push(nt,nt+1,nt+2,nt,nt+2,nt+3)}return ze.setAttribute("position",new Je(Ce,3)),ze.setAttribute("uv",new Je(He,2)),ze.setAttribute("aOut",new Je(ue,1)),ze.setIndex(ye),ze},E=(pe,je)=>{let z=new Wn;z.index=pe.index;for(let ze of["position","uv","aOut"])z.attributes[ze]=pe.attributes[ze];return z.setAttribute("aC",new Ct(new Float32Array(je.flatMap(ze=>[ze[0],ze[1],ze[2],ze[3]])),4)),z.setAttribute("aT",new Ct(new Float32Array(je.flatMap((ze,Ce)=>[ze[4],Ce*.6180339%1])),2)),z.instanceCount=je.length,z},R=new ve({side:gt,uniforms:{...p,tLeaf:{value:T},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:_}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
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
            float d = length(vW - cameraPosition); c = mix(c, uFogCol, 1.0 - exp(-d * uFogK)); gl_FragColor = vec4(c, 1.0); }`}),w=new ae(E(b(u?70:42,.2,5),n.clusters.filter(pe=>pe[4]===0).map(pe=>[pe[0],pe[1]+.15,pe[2],pe[3]*1.7,0])),R);w.frustumCulled=!1,t.add($s(w,t,{cell:36,pad:4,fogK:p.uFogK?p.uFogK.value:0}));let y=new ae(E(b(u?64:40,.11,13),n.clusters.filter(pe=>pe[4]===1)),R);y.frustumCulled=!1,t.add($s(y,t,{cell:36,pad:3,fogK:p.uFogK?p.uFogK.value:0}));let C=(pe,je)=>{let z=[],ze=[],Ce=[];z.push(0,0,0),ze.push(0,0,0);for(let ye=0;ye<5;ye++)for(let ue=1;ue<=4;ue++)for(let le=-1;le<=1;le++){let L=ye*1.2566+le*.42*Math.sin(ue/4*Math.PI*.9+.3)+ue/4*.35,S=pe*(ue/4);z.push(Math.cos(L)*S,je*(ue/4)**2*pe,Math.sin(L)*S),ze.push(ue/4,0,0)}for(let ye=0;ye<5;ye++){let ue=1+ye*12;Ce.push(0,ue+1,ue),Ce.push(0,ue+2,ue+1);for(let le=0;le<3;le++)for(let L=0;L<2;L++){let S=ue+le*3+L,V=S+3;Ce.push(S,V,S+1,S+1,V,V+1)}}let He=new Ye;return He.setAttribute("position",new Je(z,3)),He.setAttribute("aR",new Je(ze.filter((ye,ue)=>ue%3===0),1)),He.setIndex(Ce),He.computeVertexNormals(),He},I=(pe,je)=>new ve({side:gt,uniforms:{uTime:r.uTime,uFogCol:r.uFogCol,uFogK:r.uFogK,uIn:{value:new de(...pe)},uOut:{value:new de(...je)},uMoon:{value:d}},vertexShader:`uniform float uTime; attribute float aR; varying float vR; varying vec3 vN, vW; void main(){ vR = aR; vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vec3 o = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;               // each flower nods in the sea breeze, the petals flutter a little
          w.xyz += vec3(sin(uTime * 1.7 + o.x * 0.8 + o.z * 0.6), 0.0, cos(uTime * 1.4 + o.z * 0.7)) * 0.03 + vec3(0.0, sin(uTime * 6.0 + o.x * 9.0 + aR * 5.0) * 0.006 * aR, 0.0); vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uIn, uOut, uFogCol, uMoon; uniform float uFogK; varying float vR; varying vec3 vN, vW;
          void main(){ vec3 n = normalize(vN); vec3 alb = mix(uIn, uOut, smoothstep(0.15, 0.6, vR));
            vec3 c = alb * (0.45 + 0.55 * abs(dot(n, uMoon))) * vec3(0.75, 0.75, 0.9) + alb * 0.12;
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}),D=new $e,F=new zt,B=new En,N=new A,k=new A;for(let[pe,je,z,ze,Ce]of[[0,.075,.5,[1,.82,.25],[.98,.95,.88]],[1,.11,.7,[.35,.02,.05],[.85,.08,.1]]]){let He=n.flowers.filter(ue=>ue[3]===pe),ye=new vn(C(je,z),I(ze,Ce),He.length);ye.frustumCulled=!1,He.forEach((ue,le)=>{B.set((Math.random()-.5)*1.6,Math.random()*6.28,(Math.random()-.5)*1.6),F.setFromEuler(B),D.compose(k.set(ue[0],ue[1],ue[2]),F,N.setScalar(.8+Math.random()*.4)),ye.setMatrixAt(le,D)}),t.add(Lo(ye,t,{cell:30,minCount:120,fogK:p.uFogK?p.uFogK.value:0}))}let U=(()=>{let pe=document.createElement("canvas");pe.width=pe.height=128;let je=pe.getContext("2d"),z=je.createRadialGradient(64,64,0,64,64,64);return z.addColorStop(0,"rgba(255,210,150,1)"),z.addColorStop(.2,"rgba(255,170,90,0.5)"),z.addColorStop(1,"rgba(255,120,40,0)"),je.fillStyle=z,je.fillRect(0,0,128,128),new Gi(pe)})(),H=[];for(let[pe,je,z]of n.lanterns){let ze=new ae(new Nn(.22,.34,.22),new On({color:new de(3.2,1.9,.9)}));ze.position.set(pe,je,z),t.add(ze);let Ce=new Ul(new ga({map:U,color:16777215,transparent:!0,depthWrite:!1,blending:Dt,opacity:.8}));Ce.position.set(pe,je,z),Ce.scale.setScalar(1.6),Ce.renderOrder=6,t.add(Ce),H.push({halo:Ce,glass:ze,ph:Math.random()*6.28})}let Z=u?600:260,se=new Ye,fe=new Float32Array(Z*3);for(let pe=0;pe<Z;pe++)fe[pe*3]=(Math.random()-.5)*50,fe[pe*3+1]=Math.random()*6,fe[pe*3+2]=Math.random()*60-10;se.setAttribute("position",new qe(fe,3));let _e=new nn(se,new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA, vT; void main(){ vec3 p = position; float t = uTime * 0.25 + p.x * 0.1;
          p.x = mod(p.x + uTime * 0.6 + 25.0, 50.0) - 25.0; p.y = 0.4 + mod(p.y - uTime * 0.12, 6.0) + sin(t * 3.0) * 0.2; p.z += sin(t * 2.0 + p.y) * 0.6; vT = fract(position.z * 7.31);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 1.0 - smoothstep(18.0, 40.0, -mv.z); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.07 * uPx / -mv.z, 1.5, 9.0); }`,fragmentShader:`varying float vA, vT; void main(){ vec2 d = gl_PointCoord - 0.5; d.x *= 1.8; float a = (1.0 - smoothstep(0.15, 0.25, dot(d, d))) * vA * 0.85;
          gl_FragColor = vec4(mix(vec3(0.98, 0.93, 0.85), vec3(0.95, 0.55, 0.6), step(0.7, vT)), a); }`}));_e.frustumCulled=!1,_e.renderOrder=7,t.add(_e),t.add(new Pi(10465496,2760728,.8));{let pe=($,ie=72)=>new ss($.map(([Q,we])=>new oe(Q,we)),ie),je=new Wt({color:15920354,roughness:.16,metalness:0,envMap:e.envTex,envMapIntensity:.9}),z=new Wt({color:14267498,roughness:.32,metalness:1,envMap:e.envTex,envMapIntensity:1.2}),ze=new ae(pe([[0,0],[.085,0],[.093,.004],[.098,.02],[.1,.075],[.096,.086],[.088,.09],[.088,.096],[0,.096]]),je),Ce=new ae(pe([[0,.094],[.094,.094],[.1,.098],[.102,.122],[.098,.13],[.06,.133],[0,.133]]),z);for(let $ of[ze,Ce])$.position.set(An,As+.001,en),t.add($);let He=new Nn(.62,.16,.44,8,2,6),ye=He.attributes.position;for(let $=0;$<ye.count;$++){let ie=ye.getX($),Q=ye.getY($),we=ye.getZ($),xe=1+.03*Math.sin(ie*23+we*17);ye.setX($,ie*xe),ye.setZ($,we*xe),Q>0&&ye.setY($,Q+.006*Math.sin(ie*40)*Math.cos(we*37))}He.computeVertexNormals();let ue=e.texU.tD_sand.value.clone(),le=e.texU.tN_sand.value.clone();for(let $ of[ue,le])$.repeat.set(.7,.5),$.needsUpdate=!0;let L=new ae(He,new Wt({map:ue,normalMap:le,normalScale:new oe(1.6,1.6),roughness:.92,color:15786700}));L.position.set(An,As-.08,en),L.rotation.y=.2,t.add(L);let S=new oi(16757898,1.4);S.position.set(An+4,As+3,en-12),S.target.position.set(An,As,en),t.add(S,S.target);let V=new Ao(16754784,2.2,6,2);V.position.set(An-1.3,As+.6,en-1.6),t.add(V)}let q=No({U:r,lm:c,K:n.lm.ground,rect:n.rect,sun:new A(.2,.15,-1),tile:60,count:u?12e4:5e4,fade:[22,30],height:.85,wide:1.1,tip:[.42,.42,.2],dry:[.6,.52,.32],root:[.1,.1,.05],wind:1.5,seed:11,heightGLSL:`${f0} float groundY(vec2 p){ return hmH(p.x, p.y); }`,maskGLSL:`float grassMask(vec2 p){ float wx = 2.0 + 1.6 * sin(p.y * 0.06);
          return smoothstep(0.45, 0.9, hmH(p.x, p.y)) * smoothstep(1.9, 2.8, abs(p.x - wx)) * smoothstep(2.2, 3.2, distance(p, vec2(${An.toFixed(2)}, ${en.toFixed(1)})))
            * smoothstep(0.3, 0.62, gn(p * 0.16) * 0.7 + gn(p * 0.9) * 0.3); }`});t.add(q.mesh);let ne=r.uFogCol.value.clone(),re=r.uFogK.value,K=t.background.clone(),he=u?600:300,Ue=new Ye,Ee=new Float32Array(he*3);for(let pe=0;pe<Ee.length;pe++)Ee[pe]=Math.random();Ue.setAttribute("position",new qe(Ee,3));let Qe=new nn(Ue,new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uCam:{value:new A},uPx:{value:700}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA; void main(){ vec3 B = vec3(16.0, 12.0, 16.0); vec3 q = position; float sp = 0.6 + 1.2 * fract(q.x * 37.1);
          vec3 p = vec3(q.x * B.x, mod(q.y * B.y + uTime * sp, B.y), q.z * B.z); p.x += sin(uTime * 1.3 + q.z * 40.0) * 0.15; vec3 w = uCam + p - B * 0.5; vec4 mv = viewMatrix * vec4(w, 1.0);
          gl_Position = projectionMatrix * mv; gl_PointSize = (0.4 + 1.6 * fract(q.z * 91.7)) * uPx * 0.05 / max(-mv.z, 0.1); vA = smoothstep(0.5, 3.0, -mv.z) * (1.0 - smoothstep(10.0, 16.0, -mv.z)); }`,fragmentShader:"varying float vA; void main(){ float r = length(gl_PointCoord - 0.5); float ring = smoothstep(0.5, 0.4, r) - smoothstep(0.4, 0.2, r) * 0.6; gl_FragColor = vec4(vec3(0.8, 0.95, 1.0), ring * vA * 0.7); }"}));return Qe.frustumCulled=!1,Qe.visible=!1,t.add(Qe),{update(pe,je,z,ze){let Ce=ze.position.y<.05*Math.sin(pe);r.uFogCol.value.copy(Ce?new de(.05,.27,.33):ne),r.uFogK.value=Ce?.06:re,t.background.copy(Ce?new de(.05,.27,.33):K),g.visible=!Ce,Qe.visible=Ce,Ce&&Qe.material.uniforms.uCam.value.copy(ze.position),q.update(ze);for(let He of H){let ye=.85+.1*Math.sin(pe*9+He.ph)*Math.sin(pe*5.3+He.ph*2);He.halo.material.opacity=.55*ye,He.halo.scale.setScalar(1.5+.15*ye)}},setPx(pe){_e.material.uniforms.uPx.value=pe,Qe.material.uniforms.uPx.value=pe,q.setPx(1/pe)}}}},i)}It();var cs=i=>Math.sin(i*.02)*10,xd=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Rn=-130;function pc(i,e){let t=(1-xd(-140,70,e))*78,n=Math.abs(i-cs(e)),s=-Math.pow(n*.18,1.7)*3,r=Math.sin(i*.11+e*.07)*1.6+Math.sin(i*.31-e*.23)*.6+Math.abs(Math.sin(i*.05+e*.03))*4,o=Math.min(1,n/4),a=1-xd(6,16,Math.hypot(i-cs(Rn),e-Rn)),l=(1-xd(-140,70,Rn))*78+2;return(t+s+r*(.35+.65*o))*(1-a)+l*a}var Rs=(i,e=0,t=1.75)=>[cs(i)+e,pc(cs(i)+e,i)+t,i],ti=cs(Rn),ls=pc(ti,Rn),K_=[{pos:[cs(84),pc(cs(84),84)+22,86],tgt:Rs(40,0,0),w:.8},{pos:[cs(72)+4,pc(cs(72)+4,72)+8,74],tgt:Rs(30,0,2),w:1.1},{pos:Rs(46,1.2),tgt:Rs(20,0,2.6),w:1},{pos:Rs(4,-1),tgt:Rs(-24,0,3.4),w:1},{pos:Rs(-46,1),tgt:Rs(-80,0,4),w:1},{pos:Rs(-92,-.8),tgt:[ti,ls+2.4,Rn],w:1.1},{pos:[ti+3.5,ls+2.4,Rn+13],tgt:[ti-.4,ls+1.6,Rn],w:1.3},{pos:[ti+7,ls+3.2,Rn+9],tgt:[ti-30,ls+140,Rn-170],w:0}],yd=[{at:[.04,1.01],kick:"Our platform \xB7 Cosmos",line:"Cosmos: our real estate platform, designed in-house from the first sketch."}],Yw=new A(-.4,.5,-1).normalize(),Z_=`uniform sampler2D tSky; uniform float uSkyRot;
  vec3 nightSky(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
    return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * 1.2; }`,$_=`
  
  if (k < 2.0 && abs(vW.x - ${ti.toFixed(2)}) < 8.9 && abs(vW.z - ${Rn.toFixed(1)}) < 6.4 && vW.y > ${(ls+.1).toFixed(2)}) discard;   // no drift inside the pavilion
  if (k < 1.0) {                                      // real snow: wind-packed crust, moonlit, a sparkle of crystals
    vec3 nd = N_snow(vW, n, 1.0);
    float macro = tri(vW * 0.04, vec3(0.0, 1.0, 0.0), 1.0).r, sas = 0.5 + 0.5 * sin(dot(vW.xz, vec2(0.55, 0.83)) * 0.9 + macro * 6.0);   // wind-sculpted sastrugi
    c = D_snow(vW, n) * vec3(0.9, 0.94, 1.02) * L * 0.85 * relief(nd, n) * (0.7 + 0.4 * macro + 0.16 * sas) + vec3(0.04, 0.05, 0.09);
    float gl = step(0.9975, fract(sin(dot(floor(vW * 9.0), vec3(12.9, 78.2, 37.7))) * 43758.5));
    c += vec3(0.85, 0.92, 1.0) * gl * pow(max(dot(reflect(-V, nd), uSunDir), 0.0), 2.0) * 2.5;
  }
  else if (k < 2.0) { vec3 nd = N_rock(vW, n, 1.3); c = mix(D_rock(vW, n) * vec3(0.7, 0.78, 0.92) * (L * 1.1 + 0.34) * relief(nd, n), D_snow(vW, n) * L * 0.85, smoothstep(0.55, 0.85, nd.y)); }   // cold granite in moonlight   // granite, snow lying on its ledges
  else if (k < 3.0) { vec3 nd = N_conc(vW, n, 1.0); c = D_conc(vW, n) * L * 1.15 * relief(nd, n); }       // brushed concrete
  else if (k < 4.0) discard;                                                                               // the glass is drawn live (see-through)
  else if (k < 5.0) c = vec3(0.04) * L + vec3(0.12, 0.13, 0.16) * fres;                                        // dark steel
  else if (k < 6.0) c = D_oak(vW, n) * L * 1.15;                                                             // oak, in lamplight
  else if (k < 7.0) c = vec3(0.95, 0.94, 0.9) * L;                                                           // the white model
  else if (k < 8.0) { float wv = 0.9 + 0.1 * sin(vW.x * 180.0) * sin(vW.z * 180.0 + vW.y * 60.0); c = vec3(0.56, 0.51, 0.44) * wv * L * 1.15; }   // linen, loosely woven
  else if (k < 9.0) c = vec3(0.4, 0.21, 0.1) * L * 1.2 + vec3(0.07, 0.06, 0.05) * fres;                      // leather, a soft sheen at the edges
  else if (k < 10.0) { float st = 0.8 + 0.25 * step(0.5, fract(vW.x * 5.0 + vW.z * 1.3)); c = vec3(0.11, 0.13, 0.22) * st * L * 1.2; }   // woven rug, banded
  else if (k < 11.0) c = vec3(0.06, 0.2, 0.06) * (0.8 + 0.4 * fres) * L * 1.5;                                // leaves
  else if (k < 12.0) c = vec3(2.8, 1.8, 0.9);                                                               // lamp glass, lit
  else if (k < 13.0) { float hb = fract(sin(dot(floor(vec3(vW.x * 26.0 + vW.z * 26.0, vW.y * 3.2, 0.0)), vec3(12.9, 78.2, 37.7))) * 43758.5); c = (0.35 + 0.5 * cos(6.2832 * (hb + vec3(0.0, 0.33, 0.67)))) * vec3(0.6, 0.45, 0.4) * L * 1.3; }   // books, every spine a different colour
  else if (k < 14.0) c = vec3(3.4, 1.15, 0.3);                                                              // the fire
  else c = vec3(0.86, 0.82, 0.74) * L * 1.1 + vec3(0.06) * fres;                                              // glazed ceramic
`;function g0(i){return Ii({dir:"cosmos",parts:["room",{name:"ground",planar:!0}],way:K_,chapters:yd,palette:$_,textures:{snow:{id:"snow_02",s:3},rock:{id:"rock_face_03",s:4},conc:{id:"brushed_concrete",s:2},oak:{id:"oak_wood_planks",s:1.6}},sun:[-.4,.5,-1],sunCol:[.55,.65,.95],scatter:.35,sky:{file:"rogland_moonlit_night_sky.webp",exposure:1,rot:2.573,cut:.4,haze:[.16,.22,.36]},background:[.03,.05,.1],fog:{col:[.16,.22,.36],k:.0026},exposure:1.25,entry:{origin:[cs(84),0,86],yaw:0},exit:{origin:[ti+7,ls+3.2,Rn+9],yaw:0},extras:async e=>{let{scene:t,info:n,tier:s,U:r,base:o,unpack:a,loader:l}=e,c=s==="high",u=e.sky,d={tSky:u.material.uniforms.tSky,uSkyRot:u.material.uniforms.uRot},h=await as({base:o,unpack:a,loader:l,U:{uTime:r.uTime,uSun:{value:new A(-.4,.5,-1).normalize()},uFogCol:r.uFogCol,uFogK:r.uFogK},groundLm:e.groundLm,groundK:n.lm.ground,rect:new st(...n.rect),tier:s,scene:t,layout:{items:(n.items||[]).filter(R=>!(Math.abs(R[1]-ti)<11&&Math.abs(R[3]-Rn)<8.5)).map(R=>R[0]==="rock_07"?["rock_09",R[1],R[2]-.15,R[3],R[4],R[5]*2.2]:R)}}).catch(()=>null);h&&(t.add(h.group),h.fade.value=1);{let y=new Ye,C=[],I=[],D=(U,H)=>{let Z=Math.sin(U*127.1+H*311.7)*43758.5453;return Z-Math.floor(Z)},F=(U,H)=>{let Z=Math.floor(U),se=Math.floor(H),fe=U-Z,_e=H-se,q=fe*fe*(3-2*fe),ne=_e*_e*(3-2*_e);return(D(Z,se)*(1-q)+D(Z+1,se)*q)*(1-ne)+(D(Z,se+1)*(1-q)+D(Z+1,se+1)*q)*ne},B=(U,H)=>{let Z=0,se=1,fe=1,_e=1;for(let q=0;q<6;q++){let ne=1-Math.abs(F(U*fe,H*fe)*2-1);ne=ne*ne*_e,Z+=ne*se,_e=Math.min(1,ne*1.8),se*=.5,fe*=2.03}return Z};for(let U=0;U<220;U++)for(let H=0;H<=360;H++){let Z=U/219,se=650+Z*1300,fe=H/360*Math.PI*2,_e=Math.cos(fe)*se,q=-40+Math.sin(fe)*se,ne=Math.pow(F(Math.cos(fe)*2.2+5,Math.sin(fe)*2.2+5),1.4),re=B(_e/520,q/520)*230*(.45+.9*ne)*Math.sin(Math.min(1,Z*1.6)*Math.PI*.5)*(1-.35*Z)-20;C.push(_e,re,q)}for(let U=0;U<219;U++)for(let H=0;H<360;H++){let Z=U*361+H,se=Z+360+1;I.push(Z,se,Z+1,Z+1,se,se+1)}y.setAttribute("position",new Je(C,3)),y.setIndex(I),y.computeVertexNormals();let N=U=>e.texU[U].value,k=new ae(y,new ve({uniforms:{tS:{value:N("tD_snow")},tR:{value:N("tD_rock")},uFogCol:r.uFogCol,uMoon:{value:new A(-.4,.5,-1).normalize()}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tS, tR; uniform vec3 uFogCol, uMoon; varying vec3 vW, vN;
            vec3 tri(sampler2D t, vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0)); return texture2D(t, p.zy * s).rgb * w.x + texture2D(t, p.xz * s).rgb * w.y + texture2D(t, p.xy * s).rgb * w.z; }
            void main(){ vec3 Nf = normalize(cross(dFdx(vW), dFdy(vW))); if (Nf.y < 0.0) Nf = -Nf; vec3 n = normalize(mix(normalize(vN), Nf, 0.6));
              vec3 rock = tri(tR, vW, n, 1.0 / 40.0) * vec3(0.55, 0.6, 0.72), snowT = tri(tS, vW, n, 1.0 / 25.0);
              float slope = 1.0 - n.y, hold = 1.0 - smoothstep(0.38, 0.62, slope + (dot(rock, vec3(0.333)) - 0.35) * 0.4);   // snow lies where it can
              vec3 alb = mix(rock * 0.5, snowT * vec3(0.92, 0.96, 1.05), hold);
              float moon = max(dot(n, uMoon), 0.0), sky = 0.5 + 0.5 * n.y;
              vec3 c = alb * (vec3(0.55, 0.62, 0.85) * moon * 0.9 + vec3(0.08, 0.1, 0.16) * sky);
              float d = length(vW - cameraPosition); c = mix(c, uFogCol * 1.25, 1.0 - exp(-d * 0.0008));            // night haze: each range fainter than the one before
              gl_FragColor = vec4(c, 1.0); }`}));k.renderOrder=1,k.frustumCulled=!1,t.add(k)}let f=new ae(new St(3e3,3e3,1,1),new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; varying vec3 vW;
          float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5), b = fract(sin(dot(i + vec2(1, 0), vec2(127.1, 311.7))) * 43758.5),
            c = fract(sin(dot(i + vec2(0, 1), vec2(127.1, 311.7))) * 43758.5), d = fract(sin(dot(i + vec2(1, 1), vec2(127.1, 311.7))) * 43758.5); return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
          float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
          void main(){ vec2 p = vW.xz * 0.006 + vec2(uTime * 0.004, uTime * 0.002); float f = fbm(p), g = fbm(p * 2.5 + 3.0);
            vec3 c = mix(vec3(0.12, 0.16, 0.27), vec3(0.62, 0.68, 0.82), smoothstep(0.35, 0.8, f) * (0.7 + 0.3 * g));
            float d = length(vW.xz - cameraPosition.xz); float a = smoothstep(0.25, 0.55, f) * (1.0 - smoothstep(1200.0, 1500.0, d));
            gl_FragColor = vec4(c, a * 0.95); }`}));f.rotation.x=-Math.PI/2,f.position.y=-4,f.renderOrder=3,f.frustumCulled=!1,t.add(f);let g=c?6e3:2500,v=new Ye,m=new Float32Array(g*3);for(let R=0;R<g;R++)m[R*3]=Math.random()*60,m[R*3+1]=Math.random()*30,m[R*3+2]=Math.random()*60;v.setAttribute("position",new qe(m,3));let p=new nn(v,new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uCam:{value:new A},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
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
          gl_FragColor = vec4(vec3(0.9, 0.94, 1.0) * (1.0 + vGlint * 1.5), a); }`}));p.frustumCulled=!1,p.renderOrder=8,t.add(p);let _=c?3500:1400,M=new Ye,x=new Float32Array(_*3);for(let R=0;R<_;R++)x[R*3]=Math.random()*40,x[R*3+1]=Math.random(),x[R*3+2]=Math.random()*40;M.setAttribute("position",new qe(x,3));let T=new nn(M,new ve({transparent:!0,depthWrite:!1,uniforms:{uTime:r.uTime,uCam:{value:new A},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
          void main(){ vec3 p = position; float sp = 4.0 + fract(p.z * 3.7) * 3.0; p.x += uTime * sp; p.z += sin(uTime * 1.3 + p.x * 0.4) * 0.6;
            p.xz = mod(p.xz - uCam.xz + 20.0, 40.0) + uCam.xz - 20.0; p.y = uCam.y - 1.7 + p.y * p.y * 1.1 + sin(uTime * 2.0 + p.x) * 0.06;
            vec4 mv = viewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(6.0, 18.0, -mv.z)) * 0.5 * (0.5 + 0.5 * sin(p.x * 0.3 + uTime));
            gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.05 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.9, 0.94, 1.0), a); }"}));T.frustumCulled=!1,T.renderOrder=8,t.add(T);let b=new ae(new zn(14,24,12),new ve({transparent:!0,depthWrite:!1,blending:Dt,side:qt,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW; void main(){ vec3 V = normalize(vW - cameraPosition); vec3 toC = uC - cameraPosition; float t = dot(toC, V); float d = length(toC - V * t);
          float a = exp(-d * d / 30.0) * 0.12; gl_FragColor = vec4(vec3(1.0, 0.7, 0.42) * a, a); }`,uniforms:{uC:{value:new A(ti,ls+2.5,Rn)}}}));b.position.set(ti,ls+2.5,Rn),b.renderOrder=9,t.add(b);let E=new ve({transparent:!0,depthWrite:!1,side:gt,uniforms:d,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; ${Z_} void main(){ vec3 V = normalize(cameraPosition - vW); vec3 n = normalize(vN); if (dot(n, V) < 0.0) n = -n;
          float fr = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0); vec3 R = reflect(-V, n);
          vec3 c = nightSky(normalize(R)) * 1.4 * fr + vec3(1.0, 0.7, 0.45) * 0.03; gl_FragColor = vec4(c, 0.1 + 0.75 * fr); }`});for(let[R,w,y,C]of[[ti,Rn+5.1,15.2,0],[ti,Rn-5.1,15.2,0],[ti-7.6,Rn,10.2,Math.PI/2],[ti+7.6,Rn,10.2,Math.PI/2]]){let I=new ae(new St(y,4),E);I.position.set(R,ls+2.6,w),I.rotation.y=C,I.renderOrder=10,t.add(I)}return{update(R,w,y,C){p.material.uniforms.uCam.value.copy(C.position),T.material.uniforms.uCam.value.copy(C.position)},setPx(R){p.material.uniforms.uPx.value=R,T.material.uniforms.uPx.value=R}}}},i)}It();var ci=(i,e,t)=>[i,e,t],J_=[{pos:ci(0,-10,60),tgt:ci(0,40,-60),w:1},{pos:ci(0,2,-20),tgt:ci(0,4,-90),w:1.1},{pos:ci(-8,6,-170),tgt:ci(0,30,-360),w:1.2},{pos:ci(4,2,-370),tgt:ci(0,0,-440),w:1.2},{pos:ci(0,3,-485),tgt:ci(0,4,-560),w:1},{pos:ci(0,6,-520),tgt:ci(0,4,-580),w:1.1},{pos:ci(0,170,-400),tgt:ci(0,150,-900),w:0}],_d=[{at:[0,.36],kick:"Client \xB7 Perseid Pictures",line:"Branding and website for Perseid Pictures: a studio that keeps its camera pointed at the stars."},{at:[.36,.74],kick:"And many more",line:"20+ clients across India, the USA and Australia. A small team, close to every brand we build."},{at:[.74,1.01],kick:"Nomadiic Horse Designs \xB7 Bangalore",line:"Branding and websites, built with obsessive detail. Let's build yours.",contact:!0}];async function v0({tier:i}){let e=i==="high",t=new Vn;t.background=new de(0,0,.004);let n={uTime:{value:0}},s=new ae(new zn(4e3,64,32),new ve({side:qt,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`varying vec3 vD;
      float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hh(i), hh(i + vec3(1, 0, 0)), f.x), mix(hh(i + vec3(0, 1, 0)), hh(i + vec3(1, 1, 0)), f.x), f.y), mix(mix(hh(i + vec3(0, 0, 1)), hh(i + vec3(1, 0, 1)), f.x), mix(hh(i + vec3(0, 1, 1)), hh(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      float fbm(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n3(p); p *= 2.1; a *= 0.5; } return s; }
      void main(){ vec3 d = normalize(vD);
        vec3 pole = normalize(vec3(0.35, 0.55, 0.76)); float lat = dot(d, pole);
        float band = exp(-lat * lat * 9.0), core = exp(-lat * lat * 40.0);
        float dust = smoothstep(0.45, 0.75, fbm(d * 7.0)) * exp(-lat * lat * 60.0);
        vec3 c = vec3(0.6, 0.62, 0.75) * band * 0.26 * (0.6 + 0.8 * fbm(d * 4.0)) + vec3(1.0, 0.86, 0.66) * core * 0.18 * fbm(d * 9.0);
        c *= 1.0 - dust * 0.85;
        c += (vec3(0.10, 0.05, 0.20) * fbm(d * 2.2 + 3.0) + vec3(0.02, 0.07, 0.16) * fbm(d * 3.1 + 9.0)) * (0.35 + band);   // faint violet and blue nebula wash: the black is never empty
        float s = hh(floor(d * 900.0)), b = hh(floor(d * 900.0) + 3.0);
        c += mix(vec3(0.75, 0.82, 1.0), vec3(1.0, 0.85, 0.7), b) * step(0.9945 - band * 0.005, s) * (0.3 + 1.7 * pow(b, 6.0));
        float s2 = hh(floor(d * 2200.0) + 7.0); c += vec3(0.8, 0.86, 1.0) * step(0.9975 - band * 0.003, s2) * 0.55;   // a second, finer layer of faint stars
        gl_FragColor = vec4(c, 1.0); }`}));s.renderOrder=-2,s.frustumCulled=!1,t.add(s);let r=5200,o=new A(0,-r-140,-380),a=new ae(new zn(r,160,80),new ve({vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW, vN;
      float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hh(i), hh(i + vec3(1, 0, 0)), f.x), mix(hh(i + vec3(0, 1, 0)), hh(i + vec3(1, 1, 0)), f.x), f.y), mix(mix(hh(i + vec3(0, 0, 1)), hh(i + vec3(1, 0, 1)), f.x), mix(hh(i + vec3(0, 1, 1)), hh(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW); vec3 q = (vW - uC) / 5200.0;
        float land = smoothstep(0.5, 0.56, n3(q * 6.0) * 0.6 + n3(q * 14.0) * 0.4);
        float metro = smoothstep(0.5, 0.72, n3(q * 40.0)) * land;
        float city = metro * (pow(n3(q * 1500.0), 7.0) * 2.2 + pow(n3(q * 420.0), 4.0) * 0.45);
        vec3 c = mix(vec3(0.004, 0.008, 0.02), vec3(0.012, 0.012, 0.01), land) + vec3(1.0, 0.72, 0.38) * city;
        float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0); c += vec3(0.1, 0.25, 0.6) * rim * 0.6;
        gl_FragColor = vec4(c, 1.0); }`,uniforms:{uC:{value:o}}}));a.position.copy(o),t.add(a);let l=new ae(new zn(r*1.018,160,80),new ve({transparent:!0,depthWrite:!1,blending:Dt,side:qt,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; void main(){ vec3 V = normalize(cameraPosition - vW); float f = pow(max(dot(vN, V), 0.0), 6.0);
      float side = smoothstep(-0.6, 0.9, normalize(vW).x * 0.0 + V.x * -0.6 + 0.4);
      vec3 c = mix(vec3(0.15, 0.4, 1.0), vec3(1.0, 0.55, 0.25), smoothstep(0.6, 1.0, f) * side) * f * 1.6; gl_FragColor = vec4(c, f); }`}));l.position.copy(o),l.renderOrder=2,t.add(l);let c=e?40:22,u=new Ye,d=new Float32Array(c*6),h=new Float32Array(c*6);u.setAttribute("position",new qe(d,3)),u.setAttribute("color",new qe(h,3));let f=new Mo(u,new _o({vertexColors:!0,transparent:!0,blending:Dt,depthWrite:!1}));f.frustumCulled=!1,t.add(f);let g=new A(30,260,-520),v=Array.from({length:c},()=>({t0:Math.random()*6,dur:.6+Math.random()*.9,dir:new A,start:new A})),m=(y,C)=>{y.t0=C+Math.random()*3.5,y.dur=.5+Math.random()*.9,y.dir.set(Math.random()-.5,Math.random()-.75,Math.random()-.3).normalize(),y.start.copy(g).addScaledVector(new A(Math.random()-.5,Math.random()-.5,Math.random()-.5),160).addScaledVector(y.dir,40)};v.forEach(y=>m(y,0));let p=Array.from({length:16},(y,C)=>{let I=C/16*Math.PI*2;return new A(Math.cos(I+Math.sin(C)*.4)*(22+C%3*6),Math.sin(I*2)*12+C%4*3,-440+Math.sin(C*1.7)*18)}),_=(()=>{let y=document.createElement("canvas");y.width=y.height=64;let C=y.getContext("2d"),I=C.createRadialGradient(32,32,0,32,32,32);return I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.2,"rgba(255,228,190,0.85)"),I.addColorStop(1,"rgba(255,170,90,0)"),C.fillStyle=I,C.fillRect(0,0,64,64),new Gi(y)})(),M=new nn(new Ye().setFromPoints(p),new xa({size:4.5,map:_,transparent:!0,blending:Dt,depthWrite:!1,color:16769208}));t.add(M);let x=[0,3,6,9,12,15,2,5,8,11,14,1,4,7,10,13,0],T=new Ye().setFromPoints(x.map(y=>p[y])),b=new va(T,new _o({color:15975034,transparent:!0,opacity:.55,blending:Dt}));t.add(b);let E=Qs(J_),R=new A,w=new A;return{key:"perseid",scene:t,chapters:_d,exposure:1,entry:{origin:[0,0,60],yaw:0},exit:{origin:[0,4,-528],yaw:0},pose(y,C){E.sample(y,R,w),C.position.copy(R),C.lookAt(w)},update(y,C,I){n.uTime.value=y,v.forEach((F,B)=>{let N=(y-F.t0)/F.dur;N>1&&(m(F,y),N=-1);let k=N>=0?Math.sin(Math.PI*N):0,U=F.start.clone().addScaledVector(F.dir,Math.max(N,0)*120),H=U.clone().addScaledVector(F.dir,-18-20*Math.max(N,0));d.set([U.x,U.y,U.z,H.x,H.y,H.z],B*6),h.set([k,k*.95,k*.85,0,0,0],B*6)}),u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0;let D=dt.smoothstep(I,.42,.66);T.setDrawRange(0,Math.max(2,Math.floor(D*x.length))),b.material.opacity=.55*D},setPx(){},dispose(){t.traverse(y=>{y.geometry?.dispose?.();for(let C of[].concat(y.material||[]))C.dispose()})}}}It();var j_=`
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
`;function x0(i,{count:e,width:t=20,font:n="500 150px Satoshi, sans-serif",lineGap:s=1.05,letterSpacing:r=0}={}){let o=document.createElement("canvas"),a=o.getContext("2d");a.font=n;let l=i.map(p=>a.measureText(p)),c=parseFloat(/(\d+)px/.exec(n)[1]),u=Math.ceil(Math.max(...l.map(p=>p.width))+c*.4+r*30),d=Math.ceil(c*s*i.length+c*.4);o.width=u,o.height=d,a.font=n,a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",r&&(a.letterSpacing=r+"px"),i.forEach((p,_)=>a.fillText(p,u/2,c*.2+c*s*(_+.5)));let h=a.getImageData(0,0,u,d).data,f=[];for(let p=0;p<d;p+=1)for(let _=0;_<u;_+=1)h[(p*u+_)*4+3]>128&&f.push(_,p);let g=t/u,v=new Float32Array(e*3),m=f.length/2;for(let p=0;p<e;p++){let _=Math.floor(Math.random()*m)*2;v[p*3]=(f[_]+Math.random()-u/2)*g,v[p*3+1]=(d/2-f[_+1]-Math.random())*g,v[p*3+2]=(Math.random()-.5)*g*6}return v}var mc=class extends nn{constructor({count:e=2e4,size:t=9,colorA:n="#ffd2a1",colorB:s="#f59a4b",colorC:r="#ffffff",spread:o=14,additive:a=!0}={}){let l=new Ye,c=new Float32Array(e*4);for(let h=0;h<c.length;h++)c[h]=Math.random();let u=new Float32Array(e*3);l.setAttribute("position",new qe(u.slice(),3)),l.setAttribute("aA",new qe(u.slice(),3)),l.setAttribute("aB",new qe(u.slice(),3)),l.setAttribute("aSeed",new qe(c,4)),l.boundingSphere=new bn(new A,1e5);let d=new ve({transparent:!0,depthWrite:!1,blending:a?Dt:Ws,uniforms:{uTime:{value:0},uMorph:{value:0},uAssemble:{value:0},uDance:{value:1},uSpread:{value:o},uSize:{value:t},uPR:{value:Math.min(devicePixelRatio,2)},uOpacity:{value:1},uWind:{value:new A(0,0,0)},cA:{value:new de(n)},cB:{value:new de(s)},cC:{value:new de(r)}},vertexShader:`${j_}
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
        }`});super(l,d),this.count=e,this.frustumCulled=!1,this.slot=0}setShape(e,t="A"){let n=this.geometry.getAttribute(t==="A"?"aA":"aB");n.array.set(e.subarray(0,n.array.length)),n.needsUpdate=!0}morphTo(e){let t=this.slot===0?"B":"A";return this.setShape(e,t),this.slot=this.slot===0?1:0,this.slot}get u(){return this.material.uniforms}};var Yt=[{key:"mithraki",share:9,build:l0,chapters:cd},{key:"revisetax",share:5,build:c0,chapters:ud,hud:{lines:["Revise Tax"],at:[.02,.3]}},{key:"bisikaapi",share:8,build:u0,chapters:hd,hud:{lines:["Bisi Kaapi"],at:[.4,.8]}},{key:"glavida",share:6,build:h0,chapters:md,hud:{lines:["Glavida"],at:[.02,.3]}},{key:"innovious",share:5,build:d0,chapters:gd,hud:{lines:["Innovius"],at:[.12,.5]}},{key:"houseofmoh",share:5,build:m0,chapters:vd,hud:{lines:["House of Moh"],at:[.08,.5]}},{key:"cosmos",share:5,build:g0,chapters:yd,hud:{lines:["Cosmos"],at:[.08,.45]},veil:[.8,.84,.92]},{key:"perseid",share:7,build:v0,chapters:_d,veil:[.015,.04,.09],hud:[{lines:["Perseid Pictures"],at:[.02,.34]},{lines:["20+ clients"],at:[.42,.72]},{lines:["Let's build yours"],at:[.78,1.5]}]}],M0=20,w0=M0+Yt.reduce((i,e)=>i+e.share,0),us=M0/w0,Cn=[];{let i=us;for(let e of Yt){let t=i+e.share/w0;Cn.push([i,t]),i=t}}var Q_={origin:[0,5.5,-53],yaw:0},Md=new URL(".",import.meta.url).href,wd=new URL(import.meta.url).searchParams.get("v"),eM=i=>{let e=[];return i.traverse(t=>{if(t.userData.grass){e.push(t);return}if(!t.isMesh||t.frustumCulled||t.isInstancedMesh)return;let n=t.geometry;(n.index?n.index.count:n.attributes.position?.count||0)/3*(n.isInstancedBufferGeometry&&n.instanceCount!==1/0?n.instanceCount:1)>1e5&&e.push(t)}),e},bd=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches||typeof innerWidth<"u"&&Math.min(innerWidth,innerHeight)<600,tM=/(_lm|_lm_s|_sky|_diff|_nor|leaves|leaves_nor|mtn_c|mtn_c_s|marble|meadow)\.webp(\?|$)/,nM=i=>bd&&typeof i=="string"&&tM.test(i)&&!/\.m\.webp/.test(i)?i.replace(/\.webp(\?|$)/,".m.webp$1"):i,Ho=i=>{let e=nM(i);return wd&&typeof e=="string"&&e.startsWith(Md)&&!/[?&]v=/.test(e)?e+(e.includes("?")?"&":"?")+"v="+wd:e},y0="nrt-"+(wd||"dev"),Cs=null,iM=(async()=>{try{if(!globalThis.caches)return null;for(let i of await caches.keys())i.startsWith("nrt-")&&i!==y0&&await caches.delete(i);Cs=await caches.open(y0)}catch{Cs=null}return Cs})(),b0=i=>{try{return new URL(i,location.href).href}catch{return i}};if(!globalThis.__nrtFetch){let i=globalThis.fetch.bind(globalThis);globalThis.__nrtFetch=!0,globalThis.__nrtF0=i,globalThis.fetch=async(e,t)=>{let n=typeof e=="string"?Ho(e):e;if(typeof n=="string"&&Cs&&!(t&&t.cache==="no-store"))try{let s=await Cs.match(b0(n));if(s)return s}catch{}return i(n,t)},Kh.setURLModifier(Ho)}async function E0(i,e=3){for(let t=0;;t++)try{let n=await fetch(i);if(!n.ok)throw new Error(n.status+" "+i);return n}catch(n){if(t>=e-1)throw n;await new Promise(s=>setTimeout(s,400*(t+1)))}}async function zo(i){let e=await E0(i),t=await new Response(e.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),n=new DataView(t),s=n.getUint32(0,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,s))),o=4+s,{nv:a,ni:l,min:c,max:u}=r,d=new Uint16Array(t.slice(o,o+a*6));o+=a*6;let h=new Float32Array(a*3);for(let v=0;v<a*3;v++){let m=v%3;h[v]=c[m]+d[v]/65535*(u[m]-c[m])}let f=new Uint32Array(t.slice(o,o+l*4));o+=l*4;let g=new Ye;g.setAttribute("position",new qe(h,3)),g.setIndex(new qe(f,1));for(let[v,m,p]of r.extra)if(m==="unorm16"){let _=new Uint16Array(t.slice(o,o+a*p*2));o+=a*p*2,g.setAttribute(v,new qe(_,p,!0))}else if(m==="f32"){let _=new Float32Array(t.slice(o,o+a*p*4));o+=a*p*4,g.setAttribute(v,new qe(_,p))}else{let _=new Uint8Array(t.slice(o,o+a*p));o+=a*p,o+=(4-o%4)%4,g.setAttribute(v,new qe(new Float32Array(_),p))}return g}function Di(i,e,{srgb:t=!1,repeat:n=!1,flip:s=!0}={}){return new Promise((r,o)=>i.load(e,a=>{a.colorSpace=t?Xt:Mn,a.flipY=s,a.anisotropy=8,n&&(a.wrapS=a.wrapT=gr);let l=/_lm|mtn_c|sky\./.test(e);a.generateMipmaps=!l,a.minFilter=l?tn:xi,r(a)},void 0,o))}function _0(i){return new Promise((e,t)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>e(n),n.onerror=t,n.src=Ho(i)})}var Da=`
  vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
  vec3 srgb2lin(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }`;async function Tb(i,e={}){{let X=!1;try{let j=document.createElement("canvas");X=!!(j.getContext("webgl2")||j.getContext("webgl"))}catch{}if(!X){let j=document.createElement("div");j.setAttribute("role","main"),j.style.cssText="position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:24px;background:#0c1220;color:#e9ecf3;font:400 18px/1.5 Satoshi,system-ui,sans-serif";let te=e.contactUrl||"https://nomadiichorse.com/contact-us";return j.innerHTML=`<div style="max-width:520px"><div style="font-size:12px;letter-spacing:.32em;color:#ffc48f;margin-bottom:14px">NOMADIIC HORSE DESIGNS \xB7 BANGALORE</div><h1 style="font:500 30px/1.25 Satoshi,system-ui,sans-serif;margin:0 0 14px">We build brands the way the Greeks built palaces.</h1><p style="margin:0 0 24px;opacity:.8">Our site is a 3D walk-through, and this browser can\u2019t show it. Open it in a current Chrome, Safari or Edge with graphics acceleration on, or write to us directly.</p><a href="${te}" style="display:inline-block;padding:13px 26px;border-radius:999px;background:#f2822f;color:#fff;font-weight:600;text-decoration:none">Contact us</a></div>`,i.appendChild(j),{destroy(){j.remove()}}}}let t=e.base||Md+"assets/",n=e.intro==="storm",s={uNight:{value:0},uFront:{value:1e4},uGlowK:{value:0},uStorm:{value:0}},r=0,o=0,a=n?$p():null,l=n?Kp():null,c=n,u=n?1e9:0,d=n?Zp(i,l,t,{onDone:()=>{c=!1,u=_c.elapsedTime-.3,Ke=Math.max(Ke,.016)}}):null,h=e.onProgress||(()=>{}),f=0,g=n?0:1,v=!1,m=!n,p=()=>{d&&(d.setProgress(Math.min(.995,f*.3+g*.7)),v&&m&&d.ready())},_=(X,j)=>{h(X,j),f=X,p()};n&&(async()=>{let X=globalThis.__nrtF0||fetch;try{await iM;let j=await(await X(Ho(t+"manifest.json"),{cache:"no-store"})).json(),te=["","storm","mithraki","revisetax","bisikaapi","plants","glavida","innovious","houseofmoh","cosmos","tex","book"],Le=Xe=>Xe.includes("/")?Xe.split("/")[0]:"",Ne=new Set(j.files.map(Xe=>Xe[0]).filter(Xe=>Xe.endsWith(".m.webp"))),De=j.files.filter(([Xe])=>bd?!Ne.has(Xe.replace(/\.webp$/,".m.webp"))||Xe.endsWith(".m.webp"):!Xe.endsWith(".m.webp")).sort((Xe,wt)=>(te.indexOf(Le(Xe[0]))+99)%99-(te.indexOf(Le(wt[0]))+99)%99),ct=null,pt=bd?Xe=>Le(Xe)==="storm"||Le(Xe)===""&&Xe!=="score.m4a":null;if(pt){let Xe=wt=>pt(wt)?0:wt==="score.m4a"?1:2;ct=De.slice().sort((wt,Ft)=>Xe(wt[0])-Xe(Ft[0]))}let Rt=pt?De.filter(([Xe])=>pt(Xe)).reduce((Xe,wt)=>Xe+wt[1],0)||1:0,Yn=0;{let Xe=Math.round(De.reduce((Ft,un)=>Ft+un[1],0)/1e6),wt=Math.max(1,Math.round(Rt/1e6));d&&d.setTip&&d.setTip(pt?`Every room you are about to walk through was built by hand in Blender, so there is a lot to gather. We load only the first rooms now (about ${wt} MB) and the rest arrives while you walk. Every visit after is instant.`:`Every room you are about to walk through was built by hand in Blender, so there is a lot to gather (about ${Xe} MB, once). Every visit after is instant.`)}let pi={"":"Raising a marble palace above the clouds",storm:"Gathering the storm over the palace",mithraki:"Pulling the first shot of M\u012B\u1E6Dhr\u0101k\u012B coffee",revisetax:"Counting the gold in the Revise Tax vaults",bisikaapi:"Growing Bisi Kaapi\u2019s coffee forest",plants:"Planting every tree and fern by hand",glavida:"Raising Glavida\u2019s towers, floor by floor",innovious:"Filling the sea for Innovius",houseofmoh:"Bringing the tide in at House of Moh",cosmos:"Lifting the Cosmos summit into the night",tex:"Polishing the stone, oiling the wood",book:"Binding the project books"},Ki=0,Us=De.reduce((Xe,wt)=>Xe+wt[1],0)||1,Be=(ct||De).slice(),lt=performance.now(),vt=async()=>{for(;Be.length;){let[Xe,wt]=Be.shift();pt&&m||d.setStage(pi[Le(Xe)]||"Building the journey");let Ft=b0(Ho(t+Xe));try{if(!(Cs&&await Cs.match(Ft))){let un=await X(Ft);un.ok&&(Cs?await Cs.put(Ft,un):await un.arrayBuffer())}}catch{}Ki+=wt,pt&&pt(Xe)&&(Yn+=wt),g=pt&&!m?Yn/Rt:Ki/Us,pt&&!m&&Yn>=Rt&&(m=!0,d.setStage("The world is ready")),p(),performance.now()-lt>45e3&&!m&&(m=!0,p())}};await Promise.all([0,1,2,3].map(vt))}catch(j){console.warn("[nomadiic-rt] preload",j)}g=1,m=!0,d.setStage("The world is ready"),p()})();let M=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<600,x=e.tier||(M?"low":"high"),T=x==="high"?{pr:1.5,grassNear:22e4,grassFar:6e4,clumps:900,msaa:2,spray:2400}:{pr:1.25,grassNear:52e3,grassFar:16e3,clumps:300,msaa:0,spray:600},b=new xo({antialias:!1,powerPreference:"high-performance",alpha:!1});b.setPixelRatio(Math.min(devicePixelRatio,T.pr)),b.toneMapping=br,b.toneMappingExposure=e.exposure??.95,b.outputColorSpace=Xt,i.appendChild(b.domElement),Object.assign(b.domElement.style,{width:"100%",height:"100%",display:"block",touchAction:"none"});let E=new Vn;b.domElement.addEventListener("webglcontextlost",X=>{X.preventDefault(),console.warn("[nomadiic-rt] context lost")},!1),b.domElement.addEventListener("webglcontextrestored",()=>location.reload(),!1);let R=[...qp.map(X=>({...X,at:[X.at[0]/Do*us,Math.min(X.at[1]/Do,1)*us]})),...Yt.flatMap((X,j)=>X.chapters.map(te=>({...te,at:[Cn[j][0]+te.at[0]*(Cn[j][1]-Cn[j][0]),Cn[j][0]+Math.min(te.at[1],1)*(Cn[j][1]-Cn[j][0])]})))],w=!1,y=async X=>{if(!w){w=!0;try{let j=await import(Ho(Md+"book.js"));j.setBookBase(t+"book/"),j.openBook(i,X,{onClose:()=>{w=!1}})}catch(j){console.error("[nomadiic-rt] book",j),w=!1}}},C=n0(i,R,{contactUrl:e.contactUrl,onBook:y,sound:l}),I=new ln(42,1,1,6e3),D=new class extends Xl{load(X,j,te,Le){let Ne=new wn,De=this.manager.resolveURL(X);return E0(De,4).then(ct=>ct.blob()).then(async ct=>{if(navigator.userAgentData&&globalThis.createImageBitmap)Ne.image=await createImageBitmap(ct,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}),Ne.flipY=!1;else{let pt=new Image,Rt=URL.createObjectURL(ct);pt.src=Rt,await pt.decode(),URL.revokeObjectURL(Rt),Ne.image=pt}Ne.needsUpdate=!0,j&&j(Ne)}).catch(ct=>{Le?Le(ct):console.warn("[nomadiic-rt] texture",ct)}),Ne}loadOld(X,j,te,Le){return super.load(X,Ne=>{let De=Ne.image,ct=()=>j&&j(Ne);navigator.userAgentData&&globalThis.createImageBitmap&&De?createImageBitmap(De,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(pt=>{Ne.image=pt,Ne.flipY=!1,Ne.needsUpdate=!0,ct()}).catch(ct):(De&&De.decode?De.decode().catch(()=>{}):Promise.resolve()).then(ct)},te,Le)}},F=0,B=14,N=()=>_(++F/B),k=X=>X.then(j=>(N(),j)),[U,H,Z,se,fe,_e]=await Promise.all([k(fetch(t+"scene.json").then(X=>X.json())),k(Di(D,t+"sky.jpg",{srgb:!1})),k(Di(D,t+"ground_lm_s.webp")),k(Di(D,t+"meadow.webp",{srgb:!0,repeat:!0})),k(_0(t+"grass_mask.png")),k(zo(t+"emblem.pack"))]);{let X=document.createElement("canvas");X.width=64,X.height=32;let j=X.getContext("2d");j.drawImage(H.image,0,0,64,32);let te=j.getImageData(0,14,64,2).data,Le=0,Ne=0,De=0;for(let Rt=0;Rt<te.length;Rt+=4)Le+=te[Rt],Ne+=te[Rt+1],De+=te[Rt+2];let ct=te.length/4,pt=Rt=>(Rt/=255*ct,Rt<=.04045?Rt/12.92:Math.pow((Rt+.055)/1.055,2.4));e.fog=[pt(Le),pt(Ne),pt(De)]}let q=U.frames,ne=q.length,re=new A(...U.sun).normalize();I.fov=U.fov,I.updateProjectionMatrix();let K={uTime:{value:0},uSun:{value:re},uFogCol:{value:new de(...e.fog)},uFogK:{value:34e-5},uCam:{value:I.position}},he=new ae(new zn(5e3,48,24),new ve({side:qt,depthWrite:!1,fog:!1,uniforms:{tSky:{value:H},uNight:{value:0},uFlash:{value:0},uT:{value:0},uFP:{value:new oe(.5,.7)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`${Da} uniform sampler2D tSky; uniform float uNight, uFlash, uT; varying vec3 vDir;
      ${hc}
      void main(){ vec3 d = normalize(vDir); vec3 b = vec3(d.x, -d.z, d.y);
        float lon = atan(b.x, b.y), lat = asin(clamp(b.z, -1.0, 1.0));
        vec2 uv = vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927);
        vec3 sk = srgb2lin(texture2D(tSky, uv).rgb);
        if (uNight > 0.001) sk = mix(sk, stormSky(d, uT, uFlash), uNight);
        gl_FragColor = vec4(sk, 1.0); }`}));he.renderOrder=-1,he.frustumCulled=!1,E.add(he);let Ue=Ca({count:34,center:[0,58,40],radius:130,height:16,size:.6,color:1711136});E.add(Ue.mesh);let Ee=od({count:16,box:[-160,160,.6,5,-10,170],color:[.62,.68,.78],opacity:.16,size:[34,7]});E.add(Ee.mesh);let Qe=null;if(n){let X=x==="high"?14e3:6e3,j=new Float32Array(X*6),te=new Float32Array(X*2);for(let De=0;De<X;De++){let ct=Math.random(),pt=Math.random(),Rt=Math.random(),Yn=Math.random();j.set([ct,pt,Rt,ct,pt,Rt],De*6),te[De*2]=te[De*2+1]=Yn}let Le=new Ye;Le.setAttribute("position",new qe(j,3));let Ne=new Float32Array(X*2);for(let De=0;De<X;De++)Ne[De*2]=0,Ne[De*2+1]=1;Le.setAttribute("aEnd",new qe(Ne,1)),Le.setAttribute("aSeed",new qe(te,1)),Qe=new Mo(Le,new ve({transparent:!0,depthWrite:!1,blending:Dt,uniforms:{uTime:K.uTime,uCam:K.uCam,uA:{value:1},uFl:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; attribute float aEnd, aSeed; varying float vA;
        void main(){ vec3 B = vec3(46.0, 30.0, 46.0); vec3 p = position * B;
          float sp = 22.0 + aSeed * 8.0; p.y = mod(p.y - uTime * sp - uCam.y, B.y);
          p.x = mod(p.x - uCam.x + uTime * 4.0, B.x); p.z = mod(p.z - uCam.z, B.z);
          vec3 w = uCam + p - B * vec3(0.5, 0.35, 0.5);
          w += vec3(0.04, -1.0, 0.01) * aEnd * (0.16 + aSeed * 0.22);
          vec4 mv = viewMatrix * vec4(w, 1.0); vA = (1.0 - smoothstep(3.0, 16.0, -mv.z)) * smoothstep(0.8, 2.5, -mv.z) * (0.35 + 0.65 * fract(aSeed * 13.7)) * (1.0 - aEnd * 0.7);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform float uA, uFl; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.62, 0.7, 0.86) * (0.09 + uFl * 0.5), vA * uA * 0.4); }"})),Qe.frustumCulled=!1,Qe.renderOrder=8,E.add(Qe)}let pe=new Ys(b),je=new Vn;je.add(he.clone()),je.add(new ae(new bo(4e3,32).rotateX(-Math.PI/2),new On({color:new de(.035,.045,.018)})));let z=pe.fromScene(je,0,.1,6e3).texture;E.environment=z;let ze=U.ground,Ce=new ve({uniforms:{...K,tLm:{value:Z},tAlb:{value:se},uK:{value:U.lm.ground},uRect:{value:new st(ze.x0,ze.x1,ze.z0,ze.z1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Da} ${ai} uniform sampler2D tLm, tAlb; uniform float uK; uniform vec4 uRect; varying vec3 vW;
      void main(){
        vec3 alb = texture2D(tAlb, vW.xz / 9.0).rgb * 0.6 + texture2D(tAlb, vW.xz / 53.0 + 0.37).rgb * 0.4;
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - vW.z) / (uRect.w - uRect.z));
        vec3 open = lmDecode(vec3(0.83), uK);
        vec3 L = lmDecode(texture2D(tLm, clamp(uv, 0.002, 0.998)).rgb, uK);
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        float edge = inside * smoothstep(0.0, 0.08, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
        vec3 c = alb * mix(open, L, edge);
        gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),He=new ae(new St(9e3,9e3,1,1).rotateX(-Math.PI/2),Ce);He.position.y=-.01,E.add(He),_e.computeVertexNormals();let ye=new Wt({color:new de("#e9a94a"),metalness:1,roughness:.16,envMapIntensity:1.1}),ue=new ae(_e,ye);ue.matrixAutoUpdate=!1,E.add(ue),n&&(ye.emissive=new de(.32,.2,.06),d.setEmblem(_e));let le={p:new A,q:new zt,s:new A};new $e().fromArray(q[0].emb).decompose(le.p,le.q,le.s);let L=new gn;L.position.copy(le.p),L.lookAt(q[0].cam[0],le.p.y,q[0].cam[2]);let S=L.quaternion.clone().invert().multiply(le.q),V={a:0,v:.25,drag:!1,x:0},$=new A,ie=new A,Q=new oi(new de(1,.72,.48),6);Q.position.copy(re).multiplyScalar(100),E.add(Q,Q.target);let we=document.createElement("canvas");we.width=fe.width,we.height=fe.height,we.getContext("2d").drawImage(fe,0,0);let xe=new Gi(we);xe.flipY=!1,xe.colorSpace=Mn;let be=U.mask,nt={...K,tLm:{value:Z},uK:{value:U.lm.ground},uRect:{value:new st(ze.x0,ze.x1,ze.z0,ze.z1)},uPxAng:{value:6e-4},tMask:{value:xe},uMask:{value:new st(be.x0,be.x1,be.z0,be.z1)},uCenter:{value:new oe}},me=new ae(Ta(T.grassNear,84,1,1),jh({...nt,uTile:{value:84},uWide:{value:M?1.6:1.15},uFade:{value:new oe(30,42)}})),Te=new ae(Ta(T.grassFar,300,1,2),jh({...nt,uTile:{value:300},uWide:{value:3.4},uFade:{value:new oe(130,150)},uNear:{value:44}},!0));me.frustumCulled=Te.frustumCulled=!1,me.layers.set(1),Te.layers.set(1),I.layers.enable(1);let We=Aa(me,{tile:84,lod:18}),tt=Aa(Te,{tile:300,lod:80});E.add(We.group,tt.group);let Pe=[We.group,tt.group],ht=null,at=null,Lt={value:0},O=null,Ae=null,ee=null,ce=null,Ie=null,Me=null,et=null,Ot=null,Tt=new ln,ke=Yt.map(()=>null),yn=Yt.map(()=>!1),wi=X=>new ve({uniforms:{tP:{value:X},uRes:{value:new oe(1,1)},uReady:{value:0},uCol:{value:new de(.9,.86,.8)},uFog:{value:new st(.5,.5,.5,0)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tP; uniform vec2 uRes; uniform float uReady; uniform vec3 uCol; uniform vec4 uFog; varying vec2 vUv;
      void main(){ vec3 glow = uCol * mix(1.35, 0.75, vUv.y) * (0.85 + 0.25 * (1.0 - abs(vUv.x - 0.5) * 2.0));   // soft daylight beyond the door, never a white panel
        vec3 c = uReady > 0.5 ? texture2D(tP, gl_FragCoord.xy / uRes).rgb : glow; gl_FragColor = vec4(mix(c, uFog.rgb, uFog.a), 1.0); }`}),Bo=X=>X.traverse(j=>{j.geometry?.dispose?.();for(let te of[].concat(j.material||[])){for(let Le of Object.values(te))Le&&Le.isTexture&&!Le.isRenderTargetTexture&&Le.dispose();for(let Le of Object.values(te.uniforms||{}))Le&&Le.value&&Le.value.isTexture&&!Le.value.isRenderTargetTexture&&Le.value.dispose()}}),ui=-1,hi=!1,Ps=Yt.map(()=>null),Ua=X=>X==="bisikaapi"?[Jp({count:36,box:[-12,12,.6,2.6,-70,30]}),jp({count:140,box:[-12,12,0,14,-12,12],follow:!0}),od({count:22,box:[-60,60,.4,4.5,-100,50],color:[.78,.82,.8],opacity:.2})]:X==="glavida"?[Ca({count:28,center:[10,30,-150],radius:90,height:14,size:.55,color:2764083})]:X==="houseofmoh"?[Ca({count:14,center:[0,18,-60],radius:55,height:8,size:.75,color:13225684,glide:2.5,speed:.7})]:X==="cosmos"?[Ca({count:2,center:[0,95,-40],radius:140,height:12,size:1.9,color:3814964,glide:4,speed:.5})]:[],Fa=X=>{let j=ke[X];j&&(ke[X]=null,yn[X]=!1,Bo(j.scene),j.scene.traverse(te=>{te.isReflector&&te.dispose()}),j.dispose?.())},nr=()=>new Promise(X=>requestAnimationFrame(()=>X())),Na=async X=>{let j=performance.now();try{b.setRenderTarget(et);let Le=b.compileAsync(X.scene,I);b.setRenderTarget(null),await Le}catch{b.setRenderTarget(null)}globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(X.key,"compileAsync",Math.round(performance.now()-j)+"ms");let te=new Set;X.scene.traverse(Le=>{for(let Ne of[].concat(Le.material||[])){for(let De of Object.values(Ne))De&&De.isTexture&&!De.isRenderTargetTexture&&te.add(De);for(let De of Object.values(Ne.uniforms||{}))De&&De.value&&De.value.isTexture&&!De.value.isRenderTargetTexture&&te.add(De.value)}});for(let Le of te)j=performance.now(),b.initTexture(Le),globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(X.key,"tex",Le.image&&Le.image.width,Math.round(performance.now()-j)+"ms"),await nr()},Is={a:"#f6c47a",b:"#e0913a",c:"#fff0d2"},ko=(X,j)=>{let te=new mc({count:x==="high"?3e4:18e3,size:34,colorA:Is.a,colorB:Is.b,colorC:Is.c,spread:16,additive:!1});te.setShape(x0(X,{count:te.count,width:20,font:"600 150px Satoshi, sans-serif",lineGap:.95}),"A"),te.material.depthTest=!1,te.renderOrder=20,te.visible=!1;let Le=new ae(new St(1,1),new ve({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec2 vUv; void main(){ float r = length((vUv - 0.5) * vec2(1.0, 2.2)); gl_FragColor = vec4(0.03, 0.035, 0.05, uA * 0.72 * (1.0 - smoothstep(0.05, 0.5, r))); }"}));return Le.renderOrder=19,Le.scale.set(30,11,1),Le.position.z=-.5,te.add(Le),te.userData.halo=Le,j.add(te),te},ir=new A,Ar=new A,gc=(X,j,te,Le)=>{let[Ne,De]=j,ct=dt.smoothstep(te,Ne,Ne+.05)*(1-dt.smoothstep(te,De-.05,De));if(X.visible=ct>.001,!X.visible){X.u.uAssemble.value=0;return}let pt=18,Rt=Math.tan(dt.degToRad(I.fov/2)),Yn=dt.clamp((1.1-I.aspect)/.6,0,1);ir.set(0,0,-1).applyQuaternion(I.quaternion),Ar.set(0,1,0).applyQuaternion(I.quaternion),X.position.copy(I.position).addScaledVector(ir,pt).addScaledVector(Ar,pt*Rt*dt.lerp(.26,.2,Yn)),X.quaternion.copy(I.quaternion),X.scale.setScalar(2*pt*Rt*I.aspect*dt.lerp(.5,.84,Yn)/20),X.u.uTime.value=Le,X.u.uAssemble.value=ct,X.u.uDance.value=.35+(1-ct)*2.2,X.userData.halo.material.uniforms.uA.value=ct},za=X=>{X<0||X>=Yt.length||ke[X]||yn[X]||yn.some(Boolean)||(yn[X]=!0,Yt[X].build({base:t,unpack:zo,loader:D,renderer:b,tier:x,grainTex:ce}).then(async j=>{if(await Na(j),!yn[X]){j.dispose?.();return}if(j.huds=[].concat(Yt[X].hud||[]).map(te=>({H:ko(te.lines,j.scene),at:te.at})),yn[X]=!1,ke[X]=j,X===0&&(Ie=j),j.exitPortal){let te=new St(...j.exitPortal.size);if(j.exitPortal.arch){let[Ne,De]=j.exitPortal.size,ct=Ne/2,pt=new Eo;pt.moveTo(-ct,-De/2),pt.lineTo(ct,-De/2),pt.lineTo(ct,De/2-ct),pt.absarc(0,De/2-ct,ct,0,Math.PI,!1),pt.lineTo(-ct,-De/2),te=new ba(pt,32);let Rt=te.attributes.position,Yn=te.attributes.uv;for(let pi=0;pi<Rt.count;pi++)Yn.setXY(pi,Rt.getX(pi)/Ne+.5,Rt.getY(pi)/De+.5)}let Le=new ae(te,wi(et.texture));Le.position.set(...j.exitPortal.pos),Le.rotation.y=j.exitPortal.yaw,Le.visible=!1,j.scene.add(Le),j.portalQuad=Le}qn(),e.debug&&(window.__worlds=ke)}).catch(j=>{console.error("[nomadiic-rt] world",Yt[X].key,j),yn[X]=!1}))},P=X=>{for(let j of[X+1,X-1])if(j>=0&&j<Yt.length&&!ke[j]){za(j);return}},G=(async()=>{let[X,j,te,Le]=await Promise.all([k(zo(t+"arch.pack")),k(Di(D,t+"arch_lm_s.webp").catch(()=>Di(D,t+"arch_lm.webp"))),k(Di(D,t+"marble.webp",{srgb:!0,repeat:!0})),k(zo(t+"water.pack"))]);ce=te;let Ne=X.toNonIndexed();Ne.computeVertexNormals();let De=[];for(let Oe of[-30,-36,-42,-48])for(let Pt of[-6.9,6.9])De.push(new A(Pt,11.6,Oe));let ct=(Oe,Pt,ut)=>new ve({uniforms:{...K,...s,tLm:{value:Oe},tMarble:{value:te},uK:{value:Pt},uLamps:{value:De}},defines:ut?{HALL:""}:{},vertexShader:`attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
        void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${Da} ${ai} uniform sampler2D tLm, tMarble; uniform float uK, uNight, uFront, uGlowK, uStorm; uniform vec3 uLamps[8]; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
        vec3 tri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
          return texture2D(tMarble, p.zy / s).rgb * w.x + texture2D(tMarble, p.xz / s).rgb * w.y + texture2D(tMarble, p.xy / s).rgb * w.z; }
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main(){
          vec3 n = vN; n = (dot(n, n) > 1e-8 && n == n) ? normalize(n) : vec3(0.0, 1.0, 0.0); vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
          #ifdef HALL
            { float lum = dot(L, vec3(0.333)); L *= 0.85 / (1.0 + max(lum - 0.85, 0.0) * 1.4);   // the stone right under each lamp baked hot: rolled off, then warmed so it never rings blue
              float l2 = dot(L, vec3(0.333)); L = mix(L, vec3(l2) * vec3(1.0, 0.93, 0.82), smoothstep(0.45, 0.8, lum) * 0.9);
              L = max(L, vec3(0.30, 0.275, 0.24)); }   // no corner of the hall is ever a dark slab: a warm floor of ambient light   // the stone right under each lamp baked hot: rolled off so nothing burns white
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
              vec3 mA = tri(vW + vec3(cell.x * 7.3, cell.y * 3.1, 0.0), n, 2.2); float lA = dot(mA, vec3(0.333));
              float grain = dot(tri(vW * 1.0 + vec3(cell.y * 1.7, 0.0, cell.x * 2.3), n, 0.42), vec3(0.333)), fine = dot(tri(vW, n, 0.13), vec3(0.333));
              // calm white marble: a soft vein from the coarse stone, a tooth of fine grain, never the blotches
              alb = vec3(0.90, 0.885, 0.85) * (0.9 + 0.28 * (lA - 0.55) + 0.16 * (grain - 0.55) + 0.10 * (fine - 0.55));
              alb *= mix(vec3(0.97, 0.96, 0.93), vec3(0.91, 0.9, 0.88), h21(cell)) * (1.0 - joint * 0.5);
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
          gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),pt=ct(j,U.lm.arch,!1),Rt=pt.uniforms;ht=new ae(Ne,pt),E.add(ht),Promise.all([zo(t+"hall.pack"),Di(D,t+"hall_lm.webp")]).then(([Oe,Pt])=>{let ut=Oe.toNonIndexed();ut.computeVertexNormals(),E.add(new ae(ut,ct(Pt,U.lm.hall*.125,!0)))}).catch(Oe=>console.error("[nomadiic-rt] hall",Oe)),Le.computeBoundingBox();let Yn=Le.boundingBox,pi=Yn.getSize(new A),Ki=Yn.getCenter(new A),Us=new Ts(new St(pi.x,pi.z),{textureWidth:Math.round(innerWidth*Math.min(devicePixelRatio,T.pr)*.5),textureHeight:Math.round(innerHeight*Math.min(devicePixelRatio,T.pr)*.5),shader:{name:"Pool",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},...K},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW;
          void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${ai} uniform sampler2D tDiffuse; varying vec4 vUv4; varying vec3 vW;
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
            gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}});Us.rotation.x=-Math.PI/2,Us.position.set(Ki.x,Yn.max.y+.02,Ki.z),Us.camera.layers.set(0),E.add(Us);let Be=$s(kp(U.trees,T.clumps,K),E,{cell:40,pad:3,minCount:400});E.add(Be),Pe.push(Be);try{await document.fonts.load('120px "Nomadiic Line"')}catch{}let lt=new Gi(i0("NOMADIIC HORSE DESIGNS"));lt.anisotropy=8,new ae(new St(19.5,.76),new ve({transparent:!0,depthWrite:!1,blending:Tl,premultipliedAlpha:!0,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{tT:{value:lt}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tT; varying vec2 vUv;
        void main(){ float a = texture2D(tT, vUv).r; float up = texture2D(tT, vUv + vec2(0.0, 0.012)).r;
          float shade = mix(1.0, 0.42, a) + clamp(up - a, 0.0, 1.0) * 0.0 + clamp(a - up, 0.0, 1.0) * 0.55;   // dark groove, lit lower lip
          gl_FragColor = vec4(vec3(shade), 1.0); }`})).position.set(0,17.98,-20.9);{let Oe={base:19.95,apex:23.45,half:11.05},Pt=document.createElement("canvas");Pt.width=2048,Pt.height=330;let ut=Pt.getContext("2d");ut.fillStyle="#000",ut.fillRect(0,0,2048,330),ut.filter="blur(3px)";let Kn=!1,Wo=(_t,xt,dn,fn,si)=>{ut.save(),ut.translate(_t,xt),ut.rotate(dn),ut.beginPath(),ut.ellipse(0,0,fn,si,0,0,Math.PI*2),ut.fill(),ut.restore()};for(let _t of Kn?[-1,1]:[]){ut.strokeStyle="#9a9a9a",ut.lineWidth=9,ut.beginPath();for(let xt=0;xt<=1.0001;xt+=.02){let dn=1024+_t*(190+xt*760),fn=120+xt*150-Math.sin(xt*Math.PI)*50;xt===0?ut.moveTo(dn,fn):ut.lineTo(dn,fn)}ut.stroke(),ut.fillStyle="#e6e6e6";for(let xt=.03;xt<.98;xt+=.032){let dn=1024+_t*(190+xt*760),fn=120+xt*150-Math.sin(xt*Math.PI)*50,Pn=(34-xt*16)*1.5;Wo(dn-_t*Pn*.3,fn-Pn*.55,_t*-.55,Pn,Pn*.42),Wo(dn-_t*Pn*.3,fn+Pn*.55,_t*.55,Pn,Pn*.42)}for(let xt=0;xt<5;xt++)ut.beginPath(),ut.arc(1024+_t*(260+xt*150),150+xt*28-Math.sin(xt/5*Math.PI)*40,11,0,Math.PI*2),ut.fillStyle="#ffffff",ut.fill()}ut.filter="none";let Rr=new Gi(Pt);Rr.anisotropy=8;let Zi=new Eo;Zi.moveTo(-Oe.half,0),Zi.lineTo(Oe.half,0),Zi.lineTo(0,Oe.apex-Oe.base),Zi.closePath();let Mc=new ba(Zi),wc=Mc.attributes.position,P0=Mc.attributes.uv;for(let _t=0;_t<wc.count;_t++)P0.setXY(_t,(wc.getX(_t)+Oe.half)/(2*Oe.half),wc.getY(_t)/(Oe.apex-Oe.base));let dM=_t=>new ve({uniforms:{tM:{value:te},tR:{value:Rr}},vertexShader:"varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tM, tR; varying vec3 vW, vN; varying vec2 vUv;
          void main(){ vec3 n = normalize(vN); ${_t}
            vec3 m = texture2D(tM, vW.xy * 0.08 + vW.z * 0.03).rgb * vec3(1.0, 0.98, 0.95);
            float sun = max(dot(n, normalize(vec3(-0.35, 0.75, 0.55))), 0.0);
            gl_FragColor = vec4(m * (0.62 + 0.5 * sun) * vec3(0.99, 0.985, 0.975) + 0.05, 1.0); }`}),Cr=_e,bc=le.s.clone().multiplyScalar(.27),I0=new A,Ec=Oe.base+1.62;Cr.boundingSphere||Cr.computeBoundingSphere();let ka=Cr.boundingSphere.radius*bc.x*.93,Vt=192,Si=48,Sc={};try{let _t=j.image,xt=_t.width,dn=_t.height,fn=document.createElement("canvas");fn.width=xt,fn.height=dn;let si=fn.getContext("2d",{willReadFrequently:!0});si.drawImage(_t,0,0);let Pn=si.getImageData(0,0,xt,dn).data,Kt=Ne.attributes.position.array,$i=Ne.attributes.uv.array,rr=Ne.attributes.normal.array;for(let[Tc,Pr]of[[-20.68,1],[-59.32,-1]]){let Ir=[];for(let ot=0,Zt=Kt.length/9;ot<Zt;ot++){let yt=ot*9,pn=(Kt[yt]+Kt[yt+3]+Kt[yt+6])/3,Ln=(Kt[yt+1]+Kt[yt+4]+Kt[yt+7])/3,an=(Kt[yt+2]+Kt[yt+5]+Kt[yt+8])/3;Math.abs(pn)>Oe.half+.6||Ln<Oe.base-.4||Ln>Oe.apex+.4||Math.abs(an-Tc)>1.6||(rr[yt+2]+rr[yt+5]+rr[yt+8])/3*Pr<.5||Ir.push(ot)}let In=new Float32Array(Vt*Si*3),ps=new Uint8Array(Vt*Si);for(let ot=0;ot<Si;ot++)for(let Zt=0;Zt<Vt;Zt++){let yt=-Oe.half+(Zt+.5)/Vt*2*Oe.half,pn=Pr*yt,Ln=Oe.base+(ot+.5)/Si*(Oe.apex-Oe.base),an=-1e9,Ti=0,zi=0;for(let _n of Ir){let $t=_n*9,Hi=Kt[$t],Bi=Kt[$t+1],or=Kt[$t+3],Dr=Kt[$t+4],Ur=Kt[$t+6],Fr=Kt[$t+7],Ac=(Dr-Fr)*(Hi-Ur)+(Ur-or)*(Bi-Fr);if(Math.abs(Ac)<1e-9)continue;let Go=((Dr-Fr)*(pn-Ur)+(Ur-or)*(Ln-Fr))/Ac,Xo=((Fr-Bi)*(pn-Ur)+(Hi-Ur)*(Ln-Fr))/Ac,Oa=1-Go-Xo;if(Go<-1e-4||Xo<-1e-4||Oa<-1e-4)continue;let Bd=(Go*Kt[$t+2]+Xo*Kt[$t+5]+Oa*Kt[$t+8])*Pr;if(Bd>an){an=Bd;let Nr=_n*6;Ti=Go*$i[Nr]+Xo*$i[Nr+2]+Oa*$i[Nr+4],zi=Go*$i[Nr+1]+Xo*$i[Nr+3]+Oa*$i[Nr+5]}}if(an>-1e8){let _n=Math.min(xt-1,Math.max(0,Ti*xt|0)),$t=Math.min(dn-1,Math.max(0,(1-zi)*dn|0)),Hi=($t*xt+_n)*4,Bi=(ot*Vt+Zt)*3;In[Bi]=Pn[Hi],In[Bi+1]=Pn[Hi+1],In[Bi+2]=Pn[Hi+2],ps[ot*Vt+Zt]=1}}for(let ot=0;ot<40;ot++){let Zt=0;for(let yt=0;yt<Si;yt++)for(let pn=0;pn<Vt;pn++){let Ln=yt*Vt+pn;if(ps[Ln])continue;let an=0,Ti=0,zi=0,_n=0;for(let[$t,Hi]of[[1,0],[-1,0],[0,1],[0,-1]]){let Bi=pn+$t,or=yt+Hi;if(Bi<0||or<0||Bi>=Vt||or>=Si||ps[or*Vt+Bi]!==1)continue;let Dr=(or*Vt+Bi)*3;Ti+=In[Dr],zi+=In[Dr+1],_n+=In[Dr+2],an++}if(an){let $t=Ln*3;In[$t]=Ti/an,In[$t+1]=zi/an,In[$t+2]=_n/an,ps[Ln]=2}else Zt++}for(let yt=0;yt<ps.length;yt++)ps[yt]===2&&(ps[yt]=1);if(!Zt)break}let Lr=new Float32Array(In.length);for(let ot=0;ot<4;ot++){for(let Zt=0;Zt<Si;Zt++)for(let yt=0;yt<Vt;yt++)for(let pn=0;pn<3;pn++){let Ln=0,an=0;for(let Ti=-2;Ti<=2;Ti++)for(let zi=-14;zi<=14;zi++){let _n=Math.min(Vt-1,Math.max(0,yt+zi)),$t=Math.min(Si-1,Math.max(0,Zt+Ti));Ln+=In[($t*Vt+_n)*3+pn],an++}Lr[(Zt*Vt+yt)*3+pn]=Ln/an}In.set(Lr)}for(let ot=0;ot<Si;ot++)for(let Zt=0;Zt<3;Zt++){let yt=0,pn=0,Ln=0,an=0;for(let _n=0;_n<Vt;_n++){let $t=_n/(Vt-1)-.5,Hi=In[(ot*Vt+_n)*3+Zt];yt+=$t,pn+=Hi,Ln+=$t*$t,an+=$t*Hi}let Ti=(Vt*an-yt*pn)/Math.max(1e-6,Vt*Ln-yt*yt),zi=(pn-Ti*yt)/Vt;for(let _n=0;_n<Vt;_n++)In[(ot*Vt+_n)*3+Zt]=zi+Ti*(_n/(Vt-1)-.5)}let Ji=new Uint8Array(Vt*Si*4);for(let ot=0;ot<Vt*Si;ot++)Ji[ot*4]=In[ot*3],Ji[ot*4+1]=In[ot*3+1],Ji[ot*4+2]=In[ot*3+2],Ji[ot*4+3]=255;let ji=new yr(Ji,Vt,Si,yi);ji.magFilter=ji.minFilter=tn,ji.wrapS=ji.wrapT=Ms,ji.needsUpdate=!0,Sc[Pr]=ji}}catch(_t){console.warn("[nomadiic-rt] pediment light",_t)}let L0=_t=>{let xt=new zt().setFromAxisAngle(new A(0,1,0),_t).multiply(S),dn=new $e().compose(new A,xt,bc),fn=Cr.attributes.position,si=Cr.index,Pn=new A(0,0,_t?-1:1),Kt=new A,$i=new A,rr=new A,Tc=new A,Pr=new A,Ir=new A,In=new A,ps=si?si.count/3:fn.count/3,Lr=[];for(let ot=0;ot<ps;ot++){let Zt=si?si.getX(ot*3):ot*3,yt=si?si.getX(ot*3+1):ot*3+1,pn=si?si.getX(ot*3+2):ot*3+2;Kt.fromBufferAttribute(fn,Zt).applyMatrix4(dn),$i.fromBufferAttribute(fn,yt).applyMatrix4(dn),rr.fromBufferAttribute(fn,pn).applyMatrix4(dn);let Ln=Tc.subVectors($i,Kt).cross(Pr.subVectors(rr,Kt)),an=Ln.length();an<1e-12||Lr.push([Ln.clone().divideScalar(an),an,(Kt.dot(Pn)+$i.dot(Pn)+rr.dot(Pn))/3])}let Ji=1e9,ji=-1e9;for(let ot of Lr)Ji=Math.min(Ji,ot[2]),ji=Math.max(ji,ot[2]);for(let ot of Lr)if(ot[2]>Ji+(ji-Ji)*.5){let Zt=ot[0].dot(Pn)<0?ot[0].clone().negate():ot[0];Ir.addScaledVector(Zt,ot[1])}return Ir.lengthSq()>0?Ir.normalize():Pn},Hd=(_t,xt)=>new ve({uniforms:{...K,...s,tM:{value:te},tP:{value:Sc[_t]||null},uK:{value:U.lm.arch},uDir:{value:_t},uHas:{value:Sc[_t]?1:0},uMf:{value:xt?L0(_t>0?0:Math.PI):new A(0,0,_t)},uMc:{value:new A(0,Ec,_t>0?-20.68+.3:-59.32-.3)}},defines:xt?{MED:""}:{},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Da} ${ai} uniform sampler2D tM, tP; uniform float uK, uDir, uHas, uNight, uStorm; uniform vec3 uMf, uMc; varying vec3 vW, vN;
          vec3 tri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
            return texture2D(tM, p.zy / s).rgb * w.x + texture2D(tM, p.xz / s).rgb * w.y + texture2D(tM, p.xy / s).rgb * w.z; }
          void main(){ vec3 n = normalize(vN); vec3 nf = vec3(0.0, 0.0, uDir);
            vec2 pu = clamp(vec2((uDir * vW.x + ${Oe.half.toFixed(3)}) / ${(2*Oe.half).toFixed(3)}, (vW.y - ${Oe.base.toFixed(3)}) / ${(Oe.apex-Oe.base).toFixed(3)}), 0.003, 0.997);
            vec3 L = uHas > 0.5 ? lmDecode(texture2D(tP, pu).rgb, uK) : vec3(0.75, 0.78, 0.8);
            if (uNight > 0.001) L = mix(L, pow(L, vec3(0.62)) * 0.82, uNight);   // night and storm: exactly as the temple stone
            L += vec3(0.16, 0.15, 0.14) * uStorm;
            vec3 alb = tri(vW, n, 3.2) * vec3(1.02, 1.0, 0.98);
            float shade = 1.0;
            #ifdef MED
              // carved relief: the same sun as the temple, normalised so the flat field of the medallion matches the wall exactly
              // a raking light across the carving (from the upper left, like the sun on the colonnade) and dark cut walls, so the
              // horse and wreath read as stone cut into stone; the flat field keeps exactly the wall's light
              // the coin is a heightfield relief (back at -0.1 m, field near +0.04, the horse and wreath up to +0.1): its smoothed
              // normals carry the modelling, lit by a raking sun and normalised so a face turned like the coin matches the wall;
              // the field sits a touch deeper in shade than the raised carving
              if (dot(n, uMf) < 0.0) n = -n;
              vec3 sd = normalize(vec3(-0.55 * uDir, 0.7, 0.45 * uDir));
              float lit = 0.12 + 0.88 * max(dot(n, sd), 0.0), flat0 = 0.12 + 0.88 * max(dot(uMf, sd), 0.0);
              float h = dot(vW - uMc, uMf);
              shade = clamp(pow(lit / flat0, 1.4), 0.3, 1.45) * mix(0.78, 0.98, smoothstep(0.02, 0.09, h));
            #else
              // a soft contact shadow where the medallion stands off the wall, falling a little down and away from the sun
              vec2 dd = vW.xy - vec2(0.0, ${Ec.toFixed(3)}) - vec2(-uSun.x * uDir, -max(uSun.y, 0.2)) * 0.12; float r = length(dd);
              // (only the band just outside the rim, where the coin stands off the stone)
              shade = 1.0 - 0.2 * smoothstep(${(ka*.9).toFixed(3)}, ${(ka*.99).toFixed(3)}, r) * (1.0 - smoothstep(${(ka*1).toFixed(3)}, ${(ka*1.12).toFixed(3)}, r));
            #endif
            gl_FragColor = vec4(applyFog(alb * L * shade, vW), 1.0); }`});for(let[_t,xt]of[[-20.68,0],[-59.32,Math.PI]]){let dn=new ae(Mc,Hd(xt?-1:1,!1));dn.position.set(0,Oe.base,_t),dn.rotation.y=xt,E.add(dn);let fn=new ae(Cr,Hd(xt?-1:1,!0));fn.matrixAutoUpdate=!1,fn.matrix.compose(I0.set(0,Ec,_t+(xt?-.3:.3)),new zt().setFromAxisAngle(new A(0,1,0),xt).multiply(S),bc),E.add(fn)}}try{await document.fonts.load("600 100px Satoshi")}catch{}for(let Oe of sd){let Pt=new Gi(s0(Oe.lines));Pt.anisotropy=8,Pt.colorSpace=Xt;let ut=new Nn(4,1.46,.09),Kn=new ae(ut,new ve({uniforms:{...K,tT:{value:Pt},uLz:{value:Oe.z}},vertexShader:"varying vec2 vUv; varying vec3 vW, vN; varying float vFront; void main(){ vUv = uv; vFront = step(0.5, normal.z); vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tT; uniform float uTime, uLz; varying vec2 vUv; varying vec3 vW, vN; varying float vFront;
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
            gl_FragColor = vec4(c * 1.15, 1.0); }`}));Kn.position.set(Oe.x+(Oe.x<0?.05:-.05),8.4,Oe.z),Kn.rotation.y=Oe.x<0?Math.PI/2:-Math.PI/2,E.add(Kn)}let Xe=new ss([[0,0],[.38,.02],[.5,.18],[.54,.34],[.5,.36],[0,.3]].map(([Oe,Pt])=>new oe(Oe,Pt)),28),wt=new Wt({color:new de("#8a5a2b"),metalness:.55,roughness:.4,emissive:new de("#3a2410")}),Ft=new St(.7,1.2);Ft.translate(0,.55,0);let un=new ve({transparent:!0,depthWrite:!1,blending:Dt,uniforms:{uTime:K.uTime},vertexShader:"varying vec2 vUv; uniform float uTime; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * vec2(1.0, 1.0 + 0.08 * sin(uTime * 9.0)); gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        float n(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(n(i), n(i + vec2(1, 0)), f.x), mix(n(i + vec2(0, 1)), n(i + vec2(1, 1)), f.x), f.y); }
        void main(){ vec2 p = vUv - vec2(0.5, 0.08); float t = uTime * 2.6;
          float w = 0.32 * (1.0 - vUv.y) + 0.02; float d = abs(p.x + (vn(vec2(vUv.y * 4.0 - t, 1.0)) - 0.5) * 0.18 * vUv.y) / w;
          float body = (1.0 - smoothstep(0.55, 1.0, d)) * smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y + (vn(vec2(vUv.x * 3.0, vUv.y * 5.0 - t)) - 0.5) * 0.25));
          vec3 col = mix(vec3(1.0, 0.85, 0.5), vec3(1.0, 0.35, 0.08), smoothstep(0.1, 0.8, vUv.y));
          gl_FragColor = vec4(col * body * 9.0, body); }`});for(let Oe of sd){let Pt=Math.sign(Oe.x),ut=new A(Oe.x-Pt*.56,0,Oe.z),Kn=10.25,Wo=new ae(Xe,wt);Wo.position.set(ut.x,Kn-.55,ut.z),E.add(Wo);let Rr=new ae(new rs(.05,.05,.58,8),wt);Rr.rotation.z=Math.PI/2,Rr.position.set(ut.x+Pt*.28,Kn-.5,ut.z),E.add(Rr);let Zi=new ae(Ft,un);Zi.position.set(ut.x,Kn-.22,ut.z),Zi.renderOrder=8,Zi.frustumCulled=!1,E.add(Zi)}let bi=e0(0,45.1,T.spray,K);E.add(bi),ee=bi,qn(),as({base:t,unpack:zo,loader:D,U:K,groundLm:Ce.uniforms.tLm.value,groundK:U.lm.ground,rect:Ce.uniforms.uRect.value,tier:x,scene:E,onPart:()=>{}}).then(async Oe=>{try{let Pt=new jt(1,1,{type:sn});b.setRenderTarget(Pt);let ut=b.compileAsync(Oe.group,I,E);b.setRenderTarget(null),await ut,Pt.dispose()}catch{b.setRenderTarget(null)}E.add(Oe.group),Pe.push(Oe.group),O=Oe.fade,Ae=Oe,N()}).catch(Oe=>console.error("[nomadiic-rt] garden",Oe)).finally(()=>{et=new jt(2,2,{type:sn,minFilter:tn,magFilter:tn}),Ot=new jt(2,2,{type:sn,minFilter:tn,magFilter:tn}),Me=new ae(new St(cc.size[0],cc.size[1]),wi(et.texture)),Me.position.set(...cc.pos),Me.visible=!1,E.add(Me),za(0)});let[ni,hn,Ei,ds]=await Promise.all([fetch(t+"terrain.json").then(Oe=>Oe.json()),k(_0(t+"terrain.png")),k(Di(D,t+"mtn_c_s.webp")),Di(D,t+"tex/rock_face_03_diff.webp",{srgb:!0,repeat:!0}).catch(()=>null)]),Ni=document.createElement("canvas");Ni.width=hn.width,Ni.height=hn.height;let Ha=Ni.getContext("2d");Ha.drawImage(hn,0,0);let Ba=Ha.getImageData(0,0,Ni.width,Ni.height).data,sr=Ni.width,fs=x==="high"?1:2,Fs=Math.floor((sr-1)/fs)+1,ii=new St(ni.ext*2,ni.ext*2,Fs-1,Fs-1).rotateX(-Math.PI/2),zd=ii.attributes.position;for(let Oe=0;Oe<Fs;Oe++)for(let Pt=0;Pt<Fs;Pt++){let ut=(Oe*fs*sr+Pt*fs)*4,Kn=(Ba[ut]*256+Ba[ut+1])/65535;zd.setY(Oe*Fs+Pt,ni.lo+Kn*(ni.hi-ni.lo))}zd.needsUpdate=!0,ii.computeBoundingSphere(),Promise.all([Di(D,t+"arch_lm.webp"),Di(D,t+"ground_lm.webp"),Di(D,t+"mtn_c.webp")]).then(([Oe,Pt,ut])=>{Rt.tLm.value=Oe,Ce.uniforms.tLm.value=Pt,nt.tLm.value=Pt,at.material.uniforms.tC.value=ut,N(),E.traverse(Kn=>{Kn.isInstancedMesh&&Kn.material.uniforms&&Kn.material.uniforms.tLm&&(Kn.material.uniforms.tLm.value=Pt)})}).catch(()=>{}),at=new ae(ii,new ve({transparent:!0,depthWrite:!0,uniforms:{...K,...s,tC:{value:Ei},tR:{value:ds},uK:{value:U.lm.mtn},uA:Lt,uLo:{value:ni.lo},uHi:{value:ni.hi}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Da} ${ai} uniform sampler2D tC, tR; uniform float uK, uA, uLo, uHi, uStorm; varying vec3 vW;
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
          gl_FragColor = vec4(f, uA); }`})),at.renderOrder=0,E.add(at),Pe.push(at)})();G.catch(X=>console.error("[nomadiic-rt] stage 2",X));let J=new jt(2,2,{type:sn,samples:T.msaa}),Y=new tc(b,J),W=new nc(E,I);Y.addPass(W),Y.addPass(new Zs({uniforms:{tDiffuse:{value:null},uPx:{value:new oe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      bool bad(vec3 c){ return any(isnan(c)) || any(isinf(c)); }
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (bad(c)) { vec2 px = 1.0 / vec2(textureSize(tDiffuse, 0)); vec3 s = vec3(0.0); float n = 0.0;
          for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) { vec3 t = texture2D(tDiffuse, vUv + vec2(i, j) * px).rgb; if (!bad(t)) { s += t; n += 1.0; } }
          c = n > 0.0 ? s / n : vec3(0.0); }
        gl_FragColor = vec4(min(max(c, vec3(0.0)), vec3(12.0)), 1.0); }`}));let ge=new Zs({uniforms:{tDiffuse:{value:null},uSun:{value:new oe(.5,.8)},uOn:{value:0},uThresh:{value:.7},uTint:{value:new de(1,.9,.72)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uOn, uThresh; uniform vec3 uTint; varying vec2 vUv;
      void main(){ vec3 base = texture2D(tDiffuse, vUv).rgb;
        if (uOn < 0.001) { gl_FragColor = vec4(base, 1.0); return; }
        vec2 d = (vUv - uSun) * (0.92 / 40.0); vec2 p = vUv; vec3 acc = vec3(0.0); float w = 1.0;
        for (int i = 0; i < 40; i++) { p -= d; vec3 s = texture2D(tDiffuse, p).rgb; float l = dot(s, vec3(0.3333));
          acc += s * clamp((l - uThresh) / max(l, 1e-3), 0.0, 1.0) * w; w *= 0.955; }
        vec3 add = acc * (uOn / 40.0) * uTint; add = add / (1.0 + dot(add, vec3(0.3333)));    // rays brighten, never white out the frame
        gl_FragColor = vec4(base + add * 0.9, 1.0); }`});Y.addPass(ge),x!=="high"&&(ge.enabled=!1);let Re=new Io(new oe(2,2),.22,.6,1.6),Ve=Re.materialHighPassFilter;Ve.fragmentShader=Ve.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); if (texel.r != texel.r || texel.g != texel.g || texel.b != texel.b) texel = vec4(0.0); texel.rgb = min(texel.rgb, vec3(4.0));"),Ve.needsUpdate=!0,Y.addPass(Re),Y.addPass(new ic);let Fe=new Zs({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new oe(1,1)},uVeil:{value:0},uVeilCol:{value:new de(.96,.93,.88)},uSat:{value:1.22},uCon:{value:.38},uWarm:{value:0},uNight:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVeil, uSat, uCon, uWarm, uNight, uFlash; uniform vec2 uRes; uniform vec3 uVeilCol; varying vec2 vUv;
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
        gl_FragColor = vec4(c, 1.0); }`});Y.addPass(Fe);let Ke=0,it=0,Ge=0,Et=0,Ut=0,Gt=0,Ht=b.domElement,Mt=()=>{let X=ui<0?-1:ui-1;for(let j=Math.max(0,ui);j<Yt.length&&ke[j];j++)X=j;return X<0?ke[0]?Cn[0][1]:us*.9:X+1<Yt.length&&!ke[X+1]?Cn[X][0]+(Cn[X][1]-Cn[X][0])*.8:Cn[X][1]},Ze=()=>{let X=ui<0?-1:ui-1;for(let j=Math.max(0,ui);j<Yt.length&&ke[j];j++)X=j;return X<0?!ke[0]:X+1<Yt.length&&!ke[X+1]},di=()=>{let X=Math.max(0,ui);for(;X>0&&ke[X-1];)X--;return X===0?0:Cn[X][0]},At=X=>{X.preventDefault(),!w&&(Ke=dt.clamp(Ke+X.deltaY*32e-5*us,di(),Mt()))},Gn=null,hs=X=>{Gn=X.touches[0].clientY},Xn=X=>{if(Gn==null||w)return;let j=X.touches[0].clientY;Ke=dt.clamp(Ke+(Gn-j)*.0011*us,di(),Mt()),Gn=j,X.preventDefault()},Ls=X=>{let j=Ht.getBoundingClientRect();if(Ge=((X.clientX-j.left)/j.width-.5)*2,Et=((X.clientY-j.top)/j.height-.5)*2,V.drag){let te=X.clientX-V.x;V.x=X.clientX,V.a+=te*.012,V.v=dt.clamp(te*.012/Math.max(Rd,1/120),-12,12)}},kt=X=>{it/us*Do<Er*.9&&(V.drag=!0,V.x=X.clientX,Ht.style.cursor="grabbing")},fi=()=>{V.drag=!1,Ht.style.cursor=it/us*Do<Er*.9?"grab":""};Ht.addEventListener("pointerdown",kt),addEventListener("pointerup",fi);let Ds=X=>{c||((X.key==="ArrowDown"||X.key==="PageDown"||X.key===" ")&&(Ke=Math.min(Mt(),Ke+.03)),(X.key==="ArrowUp"||X.key==="PageUp")&&(Ke=Math.max(di(),Ke-.03)))};Ht.addEventListener("wheel",At,{passive:!1}),Ht.addEventListener("touchstart",hs,{passive:!0}),Ht.addEventListener("touchmove",Xn,{passive:!1}),Ht.addEventListener("pointermove",Ls),addEventListener("keydown",Ds);let rt={pr:Math.min(devicePixelRatio,T.pr),acc:0,n:0,hold:0},qn=()=>{let X=i.clientWidth||innerWidth,j=i.clientHeight||innerHeight,te=Math.min(devicePixelRatio,T.pr,rt.pr);b.setPixelRatio(te),Y.setPixelRatio(te),b.setSize(X,j,!1),Y.setSize(X,j),I.aspect=X/j,I.fov=dt.lerp(U.fov,66,dt.clamp((1.2-I.aspect)/.7,0,1)),I.updateProjectionMatrix(),Fe.uniforms.uRes.value.set(X*b.getPixelRatio(),j*b.getPixelRatio()),nt.uPxAng.value=2*Math.tan(dt.degToRad(I.fov)/2)/(j*b.getPixelRatio());let Le=j*b.getPixelRatio()*.5/Math.tan(dt.degToRad(I.fov)/2);if(ee&&(ee.material.uniforms.uPx.value=Le),et){let Ne=b.getPixelRatio();et.setSize(Math.round(X*Ne),Math.round(j*Ne));for(let De of[Me,...ke.map(ct=>ct&&ct.portalQuad)])De&&De.material.uniforms.uRes.value.set(X*Ne,j*Ne)}ke.forEach(Ne=>Ne&&Ne.setPx(Le))},Ui=new ResizeObserver(qn);Ui.observe(i),qn();let Oo=()=>{qn(),matchMedia(`(resolution: ${devicePixelRatio}dppx)`).addEventListener("change",Oo,{once:!0})};Oo();let sM=new zt,rM=new zt,Ed=new zt,S0=new En,oM=new $e,aM=new $e,lM=new A,cM=new A,uM=new A,hM=new A,vc=new A,T0=Qs(),Sd=new A,Td=new A,Ad=new zt,A0=new A(0,1,0),xc=new A,Rd=1/60;function R0(X,j,te){let Le=dt.clamp(X,0,1)*Do;T0.sample(Le,Sd,Td),I.position.copy(Sd),I.lookAt(Td);let Ne=Math.abs(Ke-it)<.002&&!V.drag?1:0;return Ut+=(Ge*Ne-Ut)*.02,Ed.setFromEuler(S0.set(0,-Ut*.025,0,"YXZ")),I.quaternion.multiply(Ed),c&&(V.a=0,V.v=0),V.drag||(V.a+=V.v*te,V.v+=(.22-V.v)*(1-Math.exp(-te*.9))),L.lookAt(I.position.x,le.p.y,I.position.z),Ad.copy(L.quaternion).multiply(new zt().setFromAxisAngle(A0,V.a)).multiply(S),xc.copy(le.p),xc.y+=Math.sin(j*.9)*.12,ue.matrix.compose(xc,Ad,le.s),ue.visible=I.position.z>40,Le}let Cd=new $e,Pd=new Ss,Id=new bn,Ld=new de(.95,.9,.82),Fi=new A,Dd=new A,Ud={palace:{rays:.35,thresh:.85,sat:1.18,con:.36,warm:.3},mithraki:{rays:.3,thresh:.9,sat:1.12,con:.34,warm:.2},revisetax:{rays:.55,thresh:.8,sat:1.12,con:.36,warm:.4},bisikaapi:{rays:.9,thresh:.62,sat:1.18,con:.4,warm:.25},glavida:{rays:.3,thresh:.75,sat:1.15,con:.38,warm:.1},innovious:{rays:.4,thresh:.8,sat:1.15,con:.34,warm:-.3},houseofmoh:{rays:.45,thresh:.7,sat:1.1,con:.34,warm:.15},cosmos:{rays:.15,thresh:.85,sat:1.05,con:.36,warm:-.8},perseid:{rays:0,thresh:1,sat:1.1,con:.3,warm:-.5}},yc=null;document.fonts.load("600 150px Satoshi").catch(()=>{}).finally(()=>{yc=ko(["Nomadiic Horse Designs"],E)});let C0=(X,j)=>{let te=yc,Le=dt.smoothstep(j,.5,2.6)*(1-dt.smoothstep(X,Er*.75,Er*1.15));if(te.visible=Le>.001,!te.visible)return;let Ne=18,De=Math.tan(dt.degToRad(I.fov/2)),ct=dt.clamp((1.1-I.aspect)/.6,0,1);ir.set(0,0,-1).applyQuaternion(I.quaternion),Ar.set(0,1,0).applyQuaternion(I.quaternion),te.position.copy(I.position).addScaledVector(ir,Ne).addScaledVector(Ar,Ne*De*dt.lerp(.62,.5,ct)),te.quaternion.copy(I.quaternion),te.scale.setScalar(2*Ne*De*I.aspect*dt.lerp(.62,.9,ct)/20),te.u.uTime.value=j,te.u.uAssemble.value=Le,te.u.uDance.value=.3+(1-Le)*2.2,te.userData.halo.material.uniforms.uA.value=Le*.6},_c=new Ro,Fd=0,Nd=!0;function Vo(){if(!Nd)return;Fd=requestAnimationFrame(Vo);let X=Math.min(_c.getDelta(),.05),j=_c.elapsedTime;it+=(Ke-it)*(1-Math.exp(-X*3.2)),Rd=X;let te=-1;for(let Be=0;Be<Yt.length;Be++)it>=Cn[Be][0]&&ke[Be]&&(te=Be);if(te!==ui){ui=te;for(let Be=0;Be<Yt.length;Be++)(Be<te-1||Be>te+1)&&Fa(Be);te>=1&&!hi?(Bo(E),hi=!0):te===0&&hi?(hi=!1,(async()=>{let Be=new Set;E.traverse(lt=>{for(let vt of[].concat(lt.material||[])){for(let Xe of Object.values(vt))Xe&&Xe.isTexture&&!Xe.isRenderTargetTexture&&Be.add(Xe);for(let Xe of Object.values(vt.uniforms||{}))Xe&&Xe.value&&Xe.value.isTexture&&!Xe.value.isRenderTargetTexture&&Be.add(Xe.value)}});for(let lt of Be){if(ui!==0)return;b.initTexture(lt),await nr()}})()):te<0&&(hi=!1)}et&&P(te);{let Be=te<0&&I.position.z<-27;for(let lt of Pe)lt.visible=!Be}let Le,Ne,De;if(te>=0){let Be=ke[te],lt=(it-Cn[te][0])/(Cn[te][1]-Cn[te][0]);Be.pose(lt,I),Be.update(j,X,lt,I),ke.forEach(vt=>{if(vt&&vt!==Be)for(let Xe of vt.huds||[])Xe.H.visible=!1});for(let vt of Be.huds||[])gc(vt.H,vt.at,lt,j);W.scene=Be.scene,b.toneMappingExposure=Be.exposure,ue.visible=!1,Le=Be.exit,Ne=Be.portalQuad,De=ke[te+1],E.visible&&Me&&(Me.visible=!1)}else{let Be=R0(it/us,j,X);W.scene=E,yc&&C0(Be,j-u),b.toneMappingExposure=e.exposure??.95,Le=Q_,Ne=Me,De=ke[0]}ke.forEach(Be=>{Be&&Be.portalQuad&&Be.portalQuad!==Ne&&(Be.portalQuad.visible=!1)}),te>=0&&Me&&(Me.visible=!1),td(W.scene,I.position);let ct=Le.origin,pt=Math.hypot(I.position.x-ct[0],I.position.z-ct[2]),Rt=te>=0?ke[te].entry.origin:null,Yn=Rt?Math.hypot(I.position.x-Rt[0],I.position.z-Rt[2]):99,pi=pt<1.6||Yn<1||te<0&&I.position.z<-44||te>=0&&ke[te].closeUp?.(I.position);if(I.near<.5!==pi&&(I.near=pi?.08:1,I.updateProjectionMatrix()),Ne){Ne.updateMatrixWorld(),I.updateMatrixWorld(),Cd.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Pd.setFromProjectionMatrix(Cd),Ne.geometry.boundingSphere||Ne.geometry.computeBoundingSphere(),Id.copy(Ne.geometry.boundingSphere).applyMatrix4(Ne.matrixWorld),Ne.visible=Pd.intersectsSphere(Id)&&(te>=0||I.position.z<-22);let Be=Ne.material.uniforms,lt=!!De;{let vt=te>=0&&ke[te].scene.background?ke[te].scene.background:K.uFogCol.value;Be.uFog.value.set(vt.r,vt.g,vt.b,dt.smoothstep(pt,22,120)*.88)}if(Be.uReady.value=lt?1:0,lt||Be.uCol.value.copy(te>=0&&ke[te].scene.background?ke[te].scene.background:Ld).lerp(Ld,.5),Ne.visible&&lt){let vt=et;Be.tP.value=vt.texture;let Xe=o0(De.entry,Le);Tt.copy(I),Tt.matrixAutoUpdate=!1,Tt.matrixWorld.multiplyMatrices(Xe,I.matrixWorld),Tt.matrixWorldInverse.copy(Tt.matrixWorld).invert(),Tt.near=.08,Tt.updateProjectionMatrix(),Tt.matrixWorld.decompose(Tt.position,Tt.quaternion,Tt.scale),De.update(j,X,0,Tt),td(De.scene,Tt.position);let wt=1,Ft=1,un=-1,bi=-1,ni=Ne.geometry.attributes.position;for(let ii=0;ii<ni.count;ii++){if(Fi.fromBufferAttribute(ni,ii).applyMatrix4(Ne.matrixWorld).project(I),Fi.z>1){wt=-1,Ft=-1,un=1,bi=1;break}wt=Math.min(wt,Fi.x),un=Math.max(un,Fi.x),Ft=Math.min(Ft,Fi.y),bi=Math.max(bi,Fi.y)}let hn=vt.width,Ei=vt.height,ds=Math.max(0,Math.floor((wt*.5+.5)*hn)-2),Ni=Math.max(0,Math.floor((Ft*.5+.5)*Ei)-2),Ha=Math.min(hn,Math.ceil((un*.5+.5)*hn)+2)-ds,Ba=Math.min(Ei,Math.ceil((bi*.5+.5)*Ei)+2)-Ni,sr=Math.max(1,Ha),fs=Math.max(1,Ba);Tt.setViewOffset(hn,Ei,ds,Ei-Ni-fs,sr,fs);let Fs=sr*fs<hn*Ei*.12;if(Fs){De._detail||(De._detail=eM(De.scene));for(let ii of De._detail)ii.userData._pv=ii.visible,ii.visible=!1}if(vt.viewport.set(ds,Ni,sr,fs),vt.scissor.set(ds,Ni,sr,fs),vt.scissorTest=!0,b.setRenderTarget(vt),b.render(De.scene,Tt),vt.scissorTest=!1,vt.viewport.set(0,0,hn,Ei),Tt.clearViewOffset(),b.setRenderTarget(null),Fs)for(let ii of De._detail)ii.visible=ii.userData._pv}}let Ki=0;for(let Be=0;Be<Yt.length;Be++)if(Yt[Be].veil){let lt=1-dt.smoothstep(Math.abs(it-Cn[Be][0]),4e-4,.0075);lt>Ki&&(Ki=lt,Fe.uniforms.uVeilCol.value.setRGB(...Yt[Be].veil))}Fe.uniforms.uVeil.value=Ki;{let Be=te>=0?Yt[te].key:"palace",lt=Ud[Be]||Ud.palace,vt=te>=0?ke[te].sun:re,Xe=te<0&&I.position.z<-24;if(vt&&lt.rays>0&&!Xe){Fi.copy(I.position).addScaledVector(vt,1e3).project(I),I.getWorldDirection(Dd);let Ft=dt.smoothstep(Dd.dot(vt),.05,.45),un=1-dt.smoothstep(Math.hypot(Fi.x,Fi.y),1,1.8);ge.uniforms.uSun.value.set(Fi.x*.5+.5,Fi.y*.5+.5),ge.uniforms.uOn.value=lt.rays*Ft*un*(1-Ki),ge.uniforms.uThresh.value=lt.thresh}else ge.uniforms.uOn.value=0;let wt=Fe.uniforms;wt.uSat.value+=(lt.sat-wt.uSat.value)*.05,wt.uCon.value+=(lt.con-wt.uCon.value)*.05,wt.uWarm.value+=(lt.warm-wt.uWarm.value)*.05}let Us=it;if(C.update(Us,j),C.setBusy&&C.setBusy(!c&&Ze()&&Ke>=Mt()-.004),j>6&&O&&O.value>=1&&(rt.acc+=X,rt.n++,rt.acc>1.2)){let Be=rt.n/rt.acc;rt.acc=0,rt.n=0,rt.hold=Math.max(0,rt.hold-1);let lt=Math.min(devicePixelRatio,T.pr),vt=typeof document<"u"&&document.hidden;if(rt.low=!vt&&Be<40?(rt.low||0)+1:0,rt.fast=Be>57?(rt.fast||0)+1:0,rt.low>=4&&rt.hold===0&&(rt.q||0)<4){if(rt.q=(rt.q||0)+1,rt.hold=4,rt.low=0,rt.q===1)for(let[Xe,wt]of[[me.geometry,.55],[Te.geometry,.6]]){let Ft=Xe.index?Xe.index.count:Xe.attributes.position.count;Xe.setDrawRange(0,Math.floor(Ft*wt/3)*3)}else rt.q===2?ge.enabled=!1:(rt.pr=Math.max(1,rt.pr-.25),qn());e.debug&&console.log("[nomadiic-rt] quality step",rt.q,"pr",rt.pr)}else rt.fast>=5&&rt.hold===0&&rt.pr<lt&&(rt.pr=Math.min(lt,rt.pr+.25),rt.hold=6,rt.fast=0,rt.q=Math.max(2,(rt.q||0)-1),qn())}if(O&&O.value<1&&(O.value=Math.min(1,O.value+X*.7)),K.uTime.value=j,Fe.uniforms.uTime.value=j%10,te<0)Ue.update(j,X,K.uFogCol.value,9e-4),Ee.update(j,X),Ee.mesh.visible=r>.05;else{if(!Ps[te]&&ke[te]){Ps[te]=Ua(Yt[te].key);for(let lt of Ps[te])ke[te].scene.add(lt.mesh)}let Be=ke[te].scene.background||K.uFogCol.value;for(let lt of Ps[te]||[])lt.leaves?lt.update(j,X,I,Be,.03):lt.update(j,X,Be,.0012)}if(n){let Be=I.position.z,lt=te>=0?Yt[te].key:"palace",vt=I.position.y,Xe=0,wt=0,Ft=1;te<0?(Xe=dt.smoothstep(Be,-30,-16),Ft=dt.smoothstep(Be,-26,-18)):lt==="glavida"?(Xe=1,wt=-23,Ft=vt>-24?1:0):lt==="houseofmoh"&&(Xe=1,Ft=vt>.3?1:0),r+=(Xe-r)*Math.min(1,X*3),ke.forEach((hn,Ei)=>{if(hn&&hn.sky&&(Yt[Ei].key==="glavida"||Yt[Ei].key==="houseofmoh")){let ds=hn.sky.material.uniforms;ds.uStorm.value=1,ds.uT.value=j}});let un=c?0:l.update(X,r>.3&&Ft>.5);l.strikeId!==o&&(o=l.strikeId,!c&&r>.3&&Ft>.5&&a.strike(I,wt));let bi=W.scene;Qe.parent!==bi&&bi.add(Qe),a.group.parent!==bi&&bi.add(a.group),a.update(un*r*Ft),Fe.uniforms.uNight.value=te<0?0:r*(lt==="houseofmoh"?.55:1),he.material.uniforms.uNight.value=te<0?r:0,he.material.uniforms.uFlash.value=un,he.material.uniforms.uT.value=j;let ni=te>=0?ke[te].sky:null;ni&&ni.material.uniforms.uStorm.value>0&&(ni.material.uniforms.uFlash.value=un),s.uStorm.value=te<0?r:0,Qe.visible=r*Ft>.01,Qe.material.uniforms.uA.value=r*Ft,Qe.material.uniforms.uFl.value=un;{let hn=r*Ft;!c&&Math.abs(hn-l.mix)>.04&&l.setMix(hn)}{let hn=lt==="bisikaapi"?"forest":lt==="houseofmoh"&&Ft>.5?"sea":"";!c&&hn!==l.amb&&l.setAmb(hn)}}if(I.getWorldDirection(vc),nt.uCenter.value.set(I.position.x+vc.x*34,I.position.z+vc.z*34),We.group.visible&&(We.update(I,nt.uCenter.value,42),tt.update(I,nt.uCenter.value,150,44)),at&&Lt.value<1&&(Lt.value=Math.min(1,Lt.value+X*.8)),n&&c){_e.boundingSphere||_e.computeBoundingSphere();let Be=_e.boundingSphere;$.copy(Be.center).applyMatrix4(ue.matrix),ie.set(0,1,0).applyQuaternion(I.quaternion).multiplyScalar(Be.radius*le.s.x*.86).add($),$.project(I),ie.project(I);let lt=i.clientWidth||innerWidth,vt=i.clientHeight||innerHeight;d.setTarget(($.x*.5+.5)*lt,(.5-$.y*.5)*vt,Math.hypot((ie.x-$.x)*.5*lt,(ie.y-$.y)*.5*vt)),I.updateMatrixWorld(),d.setView(I,ue.matrix)}!c||d.diving?Y.render(X):d.showing&&(Vo.warmN||0)<3&&(Vo.warmN=(Vo.warmN||0)+1,Y.render(X))}return Vo(),_(1,"ready"),v=!0,p(),e.debug&&Object.assign(window,{__portal:()=>[et&&[et.width,et.height,et.texture.minFilter,et.texture.magFilter],Ot&&[Ot.width,Ot.height]],__weather:l,__ranges:Cn,__intro:d,__P0:us,__scene:E,__composer:Y,__renderer:b,__camera:I,__bloom:Re}),{get progress(){return it},set progress(X){Ke=X},ready:G,destroy(){Nd=!1,cancelAnimationFrame(Fd),Ui.disconnect(),Ht.removeEventListener("wheel",At),Ht.removeEventListener("touchstart",hs),Ht.removeEventListener("touchmove",Xn),Ht.removeEventListener("pointermove",Ls),removeEventListener("keydown",Ds),Ht.removeEventListener("pointerdown",kt),removeEventListener("pointerup",fi),C.destroy(),E.traverse(X=>{X.geometry?.dispose?.();let j=X.material;j&&(Array.isArray(j)?j:[j]).forEach(te=>te.dispose())}),Y.dispose?.(),b.dispose(),Ht.remove(),d&&d.destroy(),l&&l.destroy()}}}export{Tb as mount};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
