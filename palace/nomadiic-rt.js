var P0=Object.defineProperty;var Bd=(i,e)=>()=>(i&&(e=i(i=0)),e);var I0=(i,e)=>{for(var t in e)P0(i,t,{get:e[t],enumerable:!0})};function Qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function Pn(i,e,t){return Math.max(e,Math.min(t,i))}function Gh(i,e){return(i%e+e)%e}function fm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pm(i,e,t){return i!==e?(t-i)/(e-i):0}function ea(i,e,t){return(1-t)*i+t*e}function mm(i,e,t,n){return ea(i,e,1-Math.exp(-t*n))}function gm(i,e=1){return e-Math.abs(Gh(i,e*2)-e)}function vm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ym(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mm(i,e){return i+Math.random()*(e-i)}function wm(i){return i*(.5-Math.random())}function bm(i){i!==void 0&&(qd=i);let e=qd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(i){return i*$o}function _m(i){return i*oa}function Sm(i){return(i&i-1)===0&&i!==0}function Tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Am(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rm(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Ep(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){let i=aa("canvas");return i.style.display="block",i}function jo(i){i in Yd||(Yd[i]=!0,console.warn(i))}function Pm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Im(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Lc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){es.fromArray(i,s);let a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),u=n.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}function Xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Gm(i,e,t,n,r,s,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:i}}function $a(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Ka),i.getVertexPosition(l,Za),i.getVertexPosition(c,Ja);let u=Gm(i,e,t,n,Ka,Za,Ja,hf);if(u){let d=new S;Nr.getBarycoord(hf,Ka,Za,Ja,d),r&&(u.uv=Nr.getInterpolatedAttribute(r,a,l,c,d,new oe)),s&&(u.uv1=Nr.getInterpolatedAttribute(s,a,l,c,d,new oe)),o&&(u.normal=Nr.getInterpolatedAttribute(o,a,l,c,d,new S),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new S,materialIndex:0};Nr.getNormal(Ka,Za,Ja,h.normal),u.face=h,u.barycoord=d}return u}function co(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Zn(i){let e={};for(let t=0;t<i.length;t++){let n=co(i[t]);for(let r in n)e[r]=n[r]}return e}function Xm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}function Tp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jm(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}function Ix(i,e,t,n,r,s,o){let a=new ce(0),l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?t:e).get(w)),w}function v(M){let w=!1,x=g(M);x===null?p(a,l):x&&x.isColor&&(p(x,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,w){let x=g(w);x&&(x.isCubeTexture||x.mapping===ql)?(u===void 0&&(u=new de(new Wn(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:co(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),is.copy(w.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(is)),u.material.toneMapped=St.getTransfer(x.colorSpace)!==Pt,(d!==x||h!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new de(new Lt(2,2),new me({name:"BackgroundMaterial",uniforms:co(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=St.getTransfer(x.colorSpace)!==Pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,w){M.getRGB(tl,Sp(i)),n.buffers.color.setClear(tl.r,tl.g,tl.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m}}function Lx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(y,C,U,I,D){let H=!1,F=d(I,U,C);s!==F&&(s=F,c(s.object)),H=f(y,I,U,D),H&&g(y,I,U,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(y,C,U,I),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,C,U){let I=U.wireframe===!0,D=n[y.id];D===void 0&&(D={},n[y.id]=D);let H=D[C.id];H===void 0&&(H={},D[C.id]=H);let F=H[I];return F===void 0&&(F=h(l()),H[I]=F),F}function h(y){let C=[],U=[],I=[];for(let D=0;D<t;D++)C[D]=0,U[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:I,object:y,attributes:{},index:null}}function f(y,C,U,I){let D=s.attributes,H=C.attributes,F=0,V=U.getAttributes();for(let N in V)if(V[N].location>=0){let J=D[N],re=H[N];if(re===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;F++}return s.attributesNum!==F||s.index!==I}function g(y,C,U,I){let D={},H=C.attributes,F=0,V=U.getAttributes();for(let N in V)if(V[N].location>=0){let J=H[N];J===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));let re={};re.attribute=J,J&&J.data&&(re.data=J.data),D[N]=re,F++}s.attributes=D,s.attributesNum=F,s.index=I}function v(){let y=s.newAttributes;for(let C=0,U=y.length;C<U;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){let U=s.newAttributes,I=s.enabledAttributes,D=s.attributeDivisors;U[y]=1,I[y]===0&&(i.enableVertexAttribArray(y),I[y]=1),D[y]!==C&&(i.vertexAttribDivisor(y,C),D[y]=C)}function M(){let y=s.newAttributes,C=s.enabledAttributes;for(let U=0,I=C.length;U<I;U++)C[U]!==y[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function w(y,C,U,I,D,H,F){F===!0?i.vertexAttribIPointer(y,C,U,D,H):i.vertexAttribPointer(y,C,U,I,D,H)}function x(y,C,U,I){v();let D=I.attributes,H=U.getAttributes(),F=C.defaultAttributeValues;for(let V in H){let N=H[V];if(N.location>=0){let z=D[V];if(z===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(z=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(z=y.instanceColor)),z!==void 0){let J=z.normalized,re=z.itemSize,fe=e.get(z);if(fe===void 0)continue;let Me=fe.buffer,q=fe.type,te=fe.bytesPerElement,ue=q===i.INT||q===i.UNSIGNED_INT||z.gpuType===Fh;if(z.isInterleavedBufferAttribute){let ee=z.data,se=ee.stride,Le=z.offset;if(ee.isInstancedInterleavedBuffer){for(let Ne=0;Ne<N.locationSize;Ne++)p(N.location+Ne,ee.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ne=0;Ne<N.locationSize;Ne++)m(N.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ne=0;Ne<N.locationSize;Ne++)w(N.location+Ne,re/N.locationSize,q,J,se*te,(Le+re/N.locationSize*Ne)*te,ue)}else{if(z.isInstancedBufferAttribute){for(let ee=0;ee<N.locationSize;ee++)p(N.location+ee,z.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ee=0;ee<N.locationSize;ee++)m(N.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ee=0;ee<N.locationSize;ee++)w(N.location+ee,re/N.locationSize,q,J,re*te,re/N.locationSize*ee*te,ue)}}else if(F!==void 0){let J=F[V];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(N.location,J);break;case 3:i.vertexAttrib3fv(N.location,J);break;case 4:i.vertexAttrib4fv(N.location,J);break;default:i.vertexAttrib1fv(N.location,J)}}}}M()}function A(){E();for(let y in n){let C=n[y];for(let U in C){let I=C[U];for(let D in I)u(I[D].object),delete I[D];delete C[U]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let U in C){let I=C[U];for(let D in I)u(I[D].object),delete I[D];delete C[U]}delete n[y.id]}function _(y){for(let C in n){let U=n[C];if(U[y.id]===void 0)continue;let I=U[y.id];for(let D in I)u(I[D].object),delete I[D];delete U[y.id]}}function E(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Dx(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ux(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(_){return!(_!==pi&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let E=_===Jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==yr&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&_!==Ji&&!E)}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:A,maxSamples:R}}function Nx(i){let e=this,t=null,n=0,r=!1,s=!1,o=new di,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let M=s?0:n,w=M*4,x=p.clippingState||null;l.value=x,x=u(g,h,w,f);for(let A=0;A!==w;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==v;++w,x+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Fx(i){let e=new WeakMap;function t(o,a){return a===vu?o.mapping=ro:a===xu&&(o.mapping=so),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===vu||a===xu)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Or(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function zx(i){let e=[],t=[],n=[],r=i,s=i-Qs+1+pf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Qs?l=pf[o-i+Qs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),w=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){let _=R%3*2/3-1,E=R>2?0:-1,b=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];M.set(b,v*g*R),w.set(h,m*g*R);let y=[R,R,R,R,R,R];x.set(y,p*g*R)}let A=new Ve;A.setAttribute("position",new qe(M,v)),A.setAttribute("uv",new qe(w,m)),A.setAttribute("faceIndex",new qe(x,p)),e.push(A),r>Qs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vf(i,e,t){let n=new Zt(i,e,t);return n.texture.mapping=ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Bx(i,e,t){let n=new Float32Array(as),r=new S(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function xf(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function yf(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Xh(){return`

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
	`}function Ox(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===vu||l===xu,u=l===ro||l===so;if(c||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new fo(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new fo(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&jo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kx(i,e,t,n){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(d){let h=[],f=d.index,g=d.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let w=0,x=M.length;w<x;w+=3){let A=M[w+0],R=M[w+1],_=M[w+2];h.push(A,R,R,_,_,A)}}else if(g!==void 0){let M=g.array;v=g.version;for(let w=0,x=M.length/3-1;w<x;w+=3){let A=w+0,R=w+1,_=w+2;h.push(A,R,R,_,_,A)}}else return;let m=new(Ep(h)?Al:Tl)(h,1);m.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Vx(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,h*o,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Wx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gx(i,e,t){let n=new WeakMap,r=new Je;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let b=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let x=a.attributes.position.count*w,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let R=new Float32Array(x*A*4*d),_=new Sl(R,x,A,d);_.type=Ji,_.needsUpdate=!0;let E=w*4;for(let y=0;y<d;y++){let C=m[y],U=p[y],I=M[y],D=x*A*4*y;for(let H=0;H<C.count;H++){let F=H*E;f===!0&&(r.fromBufferAttribute(C,H),R[D+F+0]=r.x,R[D+F+1]=r.y,R[D+F+2]=r.z,R[D+F+3]=0),g===!0&&(r.fromBufferAttribute(U,H),R[D+F+4]=r.x,R[D+F+5]=r.y,R[D+F+6]=r.z,R[D+F+7]=0),v===!0&&(r.fromBufferAttribute(I,H),R[D+F+8]=r.x,R[D+F+9]=r.y,R[D+F+10]=r.z,R[D+F+11]=I.itemSize===4?r.w:1)}}h={count:d,texture:_,size:new oe(x,A)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Xx(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}function Eo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kl(i,e){let t=bf[e];t===void 0&&(t=new Int32Array(e),bf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function Jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;Sf.set(n),i.uniformMatrix2fv(this.addr,!1,Sf),bn(t,n)}}function jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),bn(t,n)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;Ef.set(n),i.uniformMatrix4fv(this.addr,!1,Ef),bn(t,n)}}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function iy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function ay(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Mf.compareFunction=wp,s=Mf):s=Ap,t.setTexture2D(e||s,r)}function ly(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cp,r)}function cy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Pp,r)}function uy(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rp,r)}function hy(i){switch(i){case 5126:return qx;case 35664:return Yx;case 35665:return Kx;case 35666:return Zx;case 35674:return Jx;case 35675:return jx;case 35676:return Qx;case 5124:case 35670:return $x;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return ry;case 36295:return sy;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return uy}}function dy(i,e){i.uniform1fv(this.addr,e)}function fy(i,e){let t=Eo(e,this.size,2);i.uniform2fv(this.addr,t)}function py(i,e){let t=Eo(e,this.size,3);i.uniform3fv(this.addr,t)}function my(i,e){let t=Eo(e,this.size,4);i.uniform4fv(this.addr,t)}function gy(i,e){let t=Eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vy(i,e){let t=Eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xy(i,e){let t=Eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yy(i,e){i.uniform1iv(this.addr,e)}function My(i,e){i.uniform2iv(this.addr,e)}function wy(i,e){i.uniform3iv(this.addr,e)}function by(i,e){i.uniform4iv(this.addr,e)}function Ey(i,e){i.uniform1uiv(this.addr,e)}function _y(i,e){i.uniform2uiv(this.addr,e)}function Sy(i,e){i.uniform3uiv(this.addr,e)}function Ty(i,e){i.uniform4uiv(this.addr,e)}function Ay(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);wn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ap,s[o])}function Ry(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);wn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cp,s[o])}function Cy(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);wn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Pp,s[o])}function Py(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);wn(n,s)||(i.uniform1iv(this.addr,s),bn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rp,s[o])}function Iy(i){switch(i){case 5126:return dy;case 35664:return fy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return vy;case 35676:return xy;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return wy;case 35669:case 35673:return by;case 5125:return Ey;case 36294:return _y;case 36295:return Sy;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Py}}function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function Ly(i,e,t){let n=i.name,r=n.length;for(eu.lastIndex=0;;){let s=eu.exec(n),o=eu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tf(t,c===void 0?new ju(a,i,e):new Qu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new $u(a),Tf(t,d)),t=d}}}function Af(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Ny(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Fy(i){St._getMatrix(Rf,St.workingColorSpace,i);let e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case Yl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ny(i.getShaderSource(e),o)}else return r}function zy(i,e){let t=Fy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function By(i,e){let t;switch(e){case Ih:t="Linear";break;case Lh:t="Reinhard";break;case Dh:t="Cineon";break;case Uh:t="ACESFilmic";break;case Ma:t="AgX";break;case Nh:t="Neutral";break;case tm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Oy(){St.getLuminanceCoefficients(il);let i=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function ky(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qo(i){return i!==""}function Pf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function eh(i){return i.replace(Wy,Xy)}function Xy(i,e){let t=mt[e];if(t===void 0){let n=Gy.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eh(t)}function Lf(i){return i.replace(qy,Yy)}function Yy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Df(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ky(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===op?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function Zy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function jy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ap:e="ENVMAP_BLENDING_MULTIPLY";break;case $0:e="ENVMAP_BLENDING_MIX";break;case em:e="ENVMAP_BLENDING_ADD";break}return e}function Qy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $y(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ky(t),c=Zy(t),u=Jy(t),d=jy(t),h=Qy(t),f=Hy(t),g=ky(s),v=r.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),p.length>0&&(p+=`
`)):(m=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),p=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?mt.tonemapping_pars_fragment:"",t.toneMapping!==zr?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,zy("linearToOutputTexel",t.outputColorSpace),Oy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=eh(o),o=Pf(o,t),o=If(o,t),a=eh(a),a=Pf(a,t),a=If(a,t),o=Lf(o),a=Lf(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+o,x=M+p+a,A=Af(r,r.VERTEX_SHADER,w),R=Af(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function _(C){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(A).trim(),D=r.getShaderInfoLog(R).trim(),H=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,A,R);else{let V=Cf(r,A,"vertex"),N=Cf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+V+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||D==="")&&(F=!1);F&&(C.diagnostics={runnable:H,programLog:U,vertexShader:{log:I,prefix:m},fragmentShader:{log:D,prefix:p}})}r.deleteShader(A),r.deleteShader(R),E=new no(r,v),b=Vy(r,v)}let E;this.getUniforms=function(){return E===void 0&&_(this),E};let b;this.getAttributes=function(){return b===void 0&&_(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Dy)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}function t1(i,e,t,n,r,s,o){let a=new la,l=new th,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,C,U,I){let D=U.fog,H=I.geometry,F=b.isMeshStandardMaterial?U.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||F),N=V&&V.mapping===ql?V.image.height:null,z=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=J!==void 0?J.length:0,fe=0;H.morphAttributes.position!==void 0&&(fe=1),H.morphAttributes.normal!==void 0&&(fe=2),H.morphAttributes.color!==void 0&&(fe=3);let Me,q,te,ue;if(z){let yt=Zi[z];Me=yt.vertexShader,q=yt.fragmentShader}else Me=b.vertexShader,q=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);let ee=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Le=I.isInstancedMesh===!0,Ne=I.isBatchedMesh===!0,it=!!b.map,le=!!b.matcap,je=!!V,B=!!b.aoMap,Ze=!!b.lightMap,Se=!!b.bumpMap,Fe=!!b.normalMap,ve=!!b.displacementMap,Ye=!!b.emissiveMap,Ae=!!b.metalnessMap,L=!!b.roughnessMap,T=b.anisotropy>0,X=b.clearcoat>0,K=b.dispersion>0,ie=b.iridescence>0,ne=b.sheen>0,Ie=b.transmission>0,xe=T&&!!b.anisotropyMap,Pe=X&&!!b.clearcoatMap,st=X&&!!b.clearcoatNormalMap,he=X&&!!b.clearcoatRoughnessMap,Re=ie&&!!b.iridescenceMap,Xe=ie&&!!b.iridescenceThicknessMap,et=ne&&!!b.sheenColorMap,Ue=ne&&!!b.sheenRoughnessMap,ft=!!b.specularMap,ot=!!b.specularColorMap,Tt=!!b.specularIntensityMap,k=Ie&&!!b.transmissionMap,be=Ie&&!!b.thicknessMap,$=!!b.gradientMap,ae=!!b.alphaMap,ye=b.alphaTest>0,ge=!!b.alphaHash,rt=!!b.extensions,xt=zr;b.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(xt=i.toneMapping);let $e={shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:Me,fragmentShader:q,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&I._colorsTexture!==null,instancing:Le,instancingColor:Le&&I.instanceColor!==null,instancingMorph:Le&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:bo,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:le,envMap:je,envMapMode:je&&V.mapping,envMapCubeUVHeight:N,aoMap:B,lightMap:Ze,bumpMap:Se,normalMap:Fe,displacementMap:h&&ve,emissiveMap:Ye,normalMapObjectSpace:Fe&&b.normalMapType===sm,normalMapTangentSpace:Fe&&b.normalMapType===Mp,metalnessMap:Ae,roughnessMap:L,anisotropy:T,anisotropyMap:xe,clearcoat:X,clearcoatMap:Pe,clearcoatNormalMap:st,clearcoatRoughnessMap:he,dispersion:K,iridescence:ie,iridescenceMap:Re,iridescenceThicknessMap:Xe,sheen:ne,sheenColorMap:et,sheenRoughnessMap:Ue,specularMap:ft,specularColorMap:ot,specularIntensityMap:Tt,transmission:Ie,transmissionMap:k,thicknessMap:be,gradientMap:$,opaque:b.transparent===!1&&b.blending===Fr&&b.alphaToCoverage===!1,alphaMap:ae,alphaTest:ye,alphaHash:ge,combine:b.combine,mapUv:it&&v(b.map.channel),aoMapUv:B&&v(b.aoMap.channel),lightMapUv:Ze&&v(b.lightMap.channel),bumpMapUv:Se&&v(b.bumpMap.channel),normalMapUv:Fe&&v(b.normalMap.channel),displacementMapUv:ve&&v(b.displacementMap.channel),emissiveMapUv:Ye&&v(b.emissiveMap.channel),metalnessMapUv:Ae&&v(b.metalnessMap.channel),roughnessMapUv:L&&v(b.roughnessMap.channel),anisotropyMapUv:xe&&v(b.anisotropyMap.channel),clearcoatMapUv:Pe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:et&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(b.sheenRoughnessMap.channel),specularMapUv:ft&&v(b.specularMap.channel),specularColorMapUv:ot&&v(b.specularColorMap.channel),specularIntensityMapUv:Tt&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:be&&v(b.thicknessMap.channel),alphaMapUv:ae&&v(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Fe||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(it||ae),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:se,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ye&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===Pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===gt,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(M(y,b),w(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function M(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function w(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let y=g[b.type],C;if(y){let U=Zi[y];C=ir.clone(U.uniforms)}else C=b.uniforms;return C}function A(b,y){let C;for(let U=0,I=u.length;U<I;U++){let D=u[U];if(D.cacheKey===y){C=D,++C.usedTimes;break}}return C===void 0&&(C=new $y(i,y,b,s),u.push(C)),C}function R(b){if(--b.usedTimes===0){let y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function _(b){l.remove(b)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:R,releaseShaderCache:_,programs:u,dispose:E}}function n1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function i1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nf(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,g,v,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,h,f,g,v,m){let p=o(d,h,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||i1),n.length>1&&n.sort(h||Uf),r.length>1&&r.sort(h||Uf)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function r1(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Nf,i.set(n,[o])):r>=s.length?(o=new Nf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function s1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new ce};break;case"SpotLight":t={position:new S,direction:new S,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new S,halfWidth:new S,halfHeight:new S};break}return i[e.id]=t,t}}}function o1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function l1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c1(i){let e=new s1,t=o1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);let r=new S,s=new Ke,o=new Ke;function a(c){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,w=0,x=0,A=0,R=0,_=0;c.sort(l1);for(let b=0,y=c.length;b<y;b++){let C=c[b],U=C.color,I=C.intensity,D=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*I,d+=U.g*I,h+=U.b*I;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],I);_++}else if(C.isDirectionalLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,N=t.get(C);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=F,f++}else if(C.isSpotLight){let F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(U).multiplyScalar(I),F.distance=D,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[v]=F;let V=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,V.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=V.matrix,C.castShadow){let N=t.get(C);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,n.spotShadow[v]=N,n.spotShadowMap[v]=H,x++}v++}else if(C.isRectAreaLight){let F=e.get(C);F.color.copy(U).multiplyScalar(I),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=F,m++}else if(C.isPointLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let V=C.shadow,N=t.get(C);N.shadowIntensity=V.intensity,N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,N.shadowCameraNear=V.camera.near,N.shadowCameraFar=V.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=F,g++}else if(C.isHemisphereLight){let F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(I),F.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let E=n.hash;(E.directionalLength!==f||E.pointLength!==g||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==x||E.numSpotMaps!==A||E.numLightProbes!==_)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=_,E.directionalLength=f,E.pointLength=g,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=x,E.numSpotMaps=A,E.numLightProbes=_,n.version=a1++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let w=c[p];if(w.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(w.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let x=n.point[h];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Ff(i){let e=new c1(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function u1(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Ff(i),e.set(r,[a])):s>=o.length?(a=new Ff(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function f1(i,e,t){let n=new hs,r=new oe,s=new oe,o=new Je,a=new ih({depthPacking:rm}),l=new rh,c={},u=t.maxTextureSize,d={[$i]:Kt,[Kt]:$i,[gt]:gt},h=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:h1,fragmentShader:d1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ve;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new de(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=op;let p=this.type;this.render=function(R,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ji),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let I=p!==mr&&this.type===mr,D=p===mr&&this.type!==mr;for(let H=0,F=R.length;H<F;H++){let V=R[H],N=V.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let z=N.getFrameExtents();if(r.multiply(z),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,N.mapSize.y=s.y)),N.map===null||I===!0||D===!0){let re=this.type!==mr?{minFilter:mi,magFilter:mi}:{};N.map!==null&&N.map.dispose(),N.map=new Zt(r.x,r.y,re),N.map.texture.name=V.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let J=N.getViewportCount();for(let re=0;re<J;re++){let fe=N.getViewport(re);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),U.viewport(o),N.updateMatrices(V,re),n=N.getFrustum(),x(_,E,N.camera,V,this.type)}N.isPointLightShadow!==!0&&this.type===mr&&M(N,E),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,C)};function M(R,_){let E=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zt(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(_,null,E,h,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(_,null,E,f,v,null)}function w(R,_,E,b){let y=null,C=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)y=C;else if(y=E.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let U=y.uuid,I=_.uuid,D=c[U];D===void 0&&(D={},c[U]=D);let H=D[I];H===void 0&&(H=y.clone(),D[I]=H,_.addEventListener("dispose",A)),y=H}if(y.visible=_.visible,y.wireframe=_.wireframe,b===mr?y.side=_.shadowSide!==null?_.shadowSide:_.side:y.side=_.shadowSide!==null?_.shadowSide:d[_.side],y.alphaMap=_.alphaMap,y.alphaTest=_.alphaTest,y.map=_.map,y.clipShadows=_.clipShadows,y.clippingPlanes=_.clippingPlanes,y.clipIntersection=_.clipIntersection,y.displacementMap=_.displacementMap,y.displacementScale=_.displacementScale,y.displacementBias=_.displacementBias,y.wireframeLinewidth=_.wireframeLinewidth,y.linewidth=_.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=i.properties.get(y);U.light=E}return y}function x(R,_,E,b,y){if(R.visible===!1)return;if(R.layers.test(_.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===mr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);let I=e.update(R),D=R.material;if(Array.isArray(D)){let H=I.groups;for(let F=0,V=H.length;F<V;F++){let N=H[F],z=D[N.materialIndex];if(z&&z.visible){let J=w(R,z,b,y);R.onBeforeShadow(i,R,_,E,I,J,N),i.renderBufferDirect(E,null,I,J,R,N),R.onAfterShadow(i,R,_,E,I,J,N)}}}else if(D.visible){let H=w(R,D,b,y);R.onBeforeShadow(i,R,_,E,I,H,null),i.renderBufferDirect(E,null,I,H,R,null),R.onAfterShadow(i,R,_,E,I,H,null)}}let U=R.children;for(let I=0,D=U.length;I<D;I++)x(U[I],_,E,b,y)}function A(R){R.target.removeEventListener("dispose",A);for(let E in c){let b=c[E],y=R.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}function m1(i,e){function t(){let k=!1,be=new Je,$=null,ae=new Je(0,0,0,0);return{setMask:function(ye){$!==ye&&!k&&(i.colorMask(ye,ye,ye,ye),$=ye)},setLocked:function(ye){k=ye},setClear:function(ye,ge,rt,xt,$e){$e===!0&&(ye*=xt,ge*=xt,rt*=xt),be.set(ye,ge,rt,xt),ae.equals(be)===!1&&(i.clearColor(ye,ge,rt,xt),ae.copy(be))},reset:function(){k=!1,$=null,ae.set(-1,0,0,0)}}}function n(){let k=!1,be=!1,$=null,ae=null,ye=null;return{setReversed:function(ge){if(be!==ge){let rt=e.get("EXT_clip_control");be?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);let xt=ye;ye=null,this.setClear(xt)}be=ge},getReversed:function(){return be},setTest:function(ge){ge?ee(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(ge){$!==ge&&!k&&(i.depthMask(ge),$=ge)},setFunc:function(ge){if(be&&(ge=p1[ge]),ae!==ge){switch(ge){case uu:i.depthFunc(i.NEVER);break;case hu:i.depthFunc(i.ALWAYS);break;case du:i.depthFunc(i.LESS);break;case io:i.depthFunc(i.LEQUAL);break;case fu:i.depthFunc(i.EQUAL);break;case pu:i.depthFunc(i.GEQUAL);break;case mu:i.depthFunc(i.GREATER);break;case gu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ge}},setLocked:function(ge){k=ge},setClear:function(ge){ye!==ge&&(be&&(ge=1-ge),i.clearDepth(ge),ye=ge)},reset:function(){k=!1,$=null,ae=null,ye=null,be=!1}}}function r(){let k=!1,be=null,$=null,ae=null,ye=null,ge=null,rt=null,xt=null,$e=null;return{setTest:function(yt){k||(yt?ee(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(yt){be!==yt&&!k&&(i.stencilMask(yt),be=yt)},setFunc:function(yt,$n,vi){($!==yt||ae!==$n||ye!==vi)&&(i.stencilFunc(yt,$n,vi),$=yt,ae=$n,ye=vi)},setOp:function(yt,$n,vi){(ge!==yt||rt!==$n||xt!==vi)&&(i.stencilOp(yt,$n,vi),ge=yt,rt=$n,xt=vi)},setLocked:function(yt){k=yt},setClear:function(yt){$e!==yt&&(i.clearStencil(yt),$e=yt)},reset:function(){k=!1,be=null,$=null,ae=null,ye=null,ge=null,rt=null,xt=null,$e=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,w=null,x=null,A=null,R=null,_=new ce(0,0,0),E=0,b=!1,y=null,C=null,U=null,I=null,D=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,V=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(N)[1]),F=V>=1):N.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),F=V>=2);let z=null,J={},re=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Me=new Je().fromArray(re),q=new Je().fromArray(fe);function te(k,be,$,ae){let ye=new Uint8Array(4),ge=i.createTexture();i.bindTexture(k,ge),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<$;rt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(be+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ge}let ue={};ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(io),Se(!1),Fe(Od),ee(i.CULL_FACE),B(ji);function ee(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function se(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Le(k,be){return d[k]!==be?(i.bindFramebuffer(k,be),d[k]=be,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=be),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Ne(k,be){let $=f,ae=!1;if(k){$=h.get(be),$===void 0&&($=[],h.set(be,$));let ye=k.textures;if($.length!==ye.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,rt=ye.length;ge<rt;ge++)$[ge]=i.COLOR_ATTACHMENT0+ge;$.length=ye.length,ae=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ae=!0);ae&&i.drawBuffers($)}function it(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let le={[os]:i.FUNC_ADD,[F0]:i.FUNC_SUBTRACT,[z0]:i.FUNC_REVERSE_SUBTRACT};le[B0]=i.MIN,le[O0]=i.MAX;let je={[H0]:i.ZERO,[k0]:i.ONE,[V0]:i.SRC_COLOR,[lu]:i.SRC_ALPHA,[K0]:i.SRC_ALPHA_SATURATE,[q0]:i.DST_COLOR,[G0]:i.DST_ALPHA,[W0]:i.ONE_MINUS_SRC_COLOR,[cu]:i.ONE_MINUS_SRC_ALPHA,[Y0]:i.ONE_MINUS_DST_COLOR,[X0]:i.ONE_MINUS_DST_ALPHA,[Z0]:i.CONSTANT_COLOR,[J0]:i.ONE_MINUS_CONSTANT_COLOR,[j0]:i.CONSTANT_ALPHA,[Q0]:i.ONE_MINUS_CONSTANT_ALPHA};function B(k,be,$,ae,ye,ge,rt,xt,$e,yt){if(k===ji){v===!0&&(se(i.BLEND),v=!1);return}if(v===!1&&(ee(i.BLEND),v=!0),k!==N0){if(k!==m||yt!==b){if((p!==os||x!==os)&&(i.blendEquation(i.FUNC_ADD),p=os,x=os),yt)switch(k){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ct:i.blendFunc(i.ONE,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ct:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,w=null,A=null,R=null,_.set(0,0,0),E=0,m=k,b=yt}return}ye=ye||be,ge=ge||$,rt=rt||ae,(be!==p||ye!==x)&&(i.blendEquationSeparate(le[be],le[ye]),p=be,x=ye),($!==M||ae!==w||ge!==A||rt!==R)&&(i.blendFuncSeparate(je[$],je[ae],je[ge],je[rt]),M=$,w=ae,A=ge,R=rt),(xt.equals(_)===!1||$e!==E)&&(i.blendColor(xt.r,xt.g,xt.b,$e),_.copy(xt),E=$e),m=k,b=!1}function Ze(k,be){k.side===gt?se(i.CULL_FACE):ee(i.CULL_FACE);let $=k.side===Kt;be&&($=!$),Se($),k.blending===Fr&&k.transparent===!1?B(ji):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let ae=k.stencilWrite;a.setTest(ae),ae&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function Fe(k){k!==L0?(ee(i.CULL_FACE),k!==C&&(k===Od?i.cullFace(i.BACK):k===D0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),C=k}function ve(k){k!==U&&(F&&i.lineWidth(k),U=k)}function Ye(k,be,$){k?(ee(i.POLYGON_OFFSET_FILL),(I!==be||D!==$)&&(i.polygonOffset(be,$),I=be,D=$)):se(i.POLYGON_OFFSET_FILL)}function Ae(k){k?ee(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+H-1),z!==k&&(i.activeTexture(k),z=k)}function T(k,be,$){$===void 0&&(z===null?$=i.TEXTURE0+H-1:$=z);let ae=J[$];ae===void 0&&(ae={type:void 0,texture:void 0},J[$]=ae),(ae.type!==k||ae.texture!==be)&&(z!==$&&(i.activeTexture($),z=$),i.bindTexture(k,be||ue[k]),ae.type=k,ae.texture=be)}function X(){let k=J[z];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(k){Me.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Me.copy(k))}function Ue(k){q.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function ft(k,be){let $=c.get(be);$===void 0&&($=new WeakMap,c.set(be,$));let ae=$.get(k);ae===void 0&&(ae=i.getUniformBlockIndex(be,k.name),$.set(k,ae))}function ot(k,be){let ae=c.get(be).get(k);l.get(be)!==ae&&(i.uniformBlockBinding(be,ae,k.__bindingPointIndex),l.set(be,ae))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},z=null,J={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,M=null,w=null,x=null,A=null,R=null,_=new ce(0,0,0),E=0,b=!1,y=null,C=null,U=null,I=null,D=null,Me.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:se,bindFramebuffer:Le,drawBuffers:Ne,useProgram:it,setBlending:B,setMaterial:Ze,setFlipSided:Se,setCullFace:Fe,setLineWidth:ve,setPolygonOffset:Ye,setScissorTest:Ae,activeTexture:L,bindTexture:T,unbindTexture:X,compressedTexImage2D:K,compressedTexImage3D:ie,texImage2D:Re,texImage3D:Xe,updateUBOMapping:ft,uniformBlockBinding:ot,texStorage2D:st,texStorage3D:he,texSubImage2D:ne,texSubImage3D:Ie,compressedTexSubImage2D:xe,compressedTexSubImage3D:Pe,scissor:et,viewport:Ue,reset:Tt}}function zf(i,e,t,n){let r=g1(n);switch(t){case dp:return i*e;case pp:return i*e;case mp:return i*e*2;case Oh:return i*e/r.components*r.byteLength;case Hh:return i*e/r.components*r.byteLength;case gp:return i*e*2/r.components*r.byteLength;case kh:return i*e*2/r.components*r.byteLength;case fp:return i*e*3/r.components*r.byteLength;case pi:return i*e*4/r.components*r.byteLength;case Vh:return i*e*4/r.components*r.byteLength;case gl:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xl:case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wu:case Eu:return Math.max(i,16)*Math.max(e,8)/4;case Mu:case bu:return Math.max(i,8)*Math.max(e,8)/2;case _u:case Su:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ml:case ku:case Vu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vp:case Wu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gu:case Xu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g1(i){switch(i){case yr:case cp:return{byteLength:1,components:1};case sa:case up:case Jt:return{byteLength:2,components:1};case zh:case Bh:return{byteLength:2,components:4};case cs:case Fh:case Ji:return{byteLength:4,components:1};case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function v1(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return f?new OffscreenCanvas(L,T):aa("canvas")}function v(L,T,X){let K=1,ie=Ae(L);if((ie.width>X||ie.height>X)&&(K=X/Math.max(ie.width,ie.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ne=Math.floor(K*ie.width),Ie=Math.floor(K*ie.height);d===void 0&&(d=g(ne,Ie));let xe=T?g(ne,Ie):d;return xe.width=ne,xe.height=Ie,xe.getContext("2d").drawImage(L,0,0,ne,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ne+"x"+Ie+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(L,T,X,K,ie=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=T;if(T===i.RED&&(X===i.FLOAT&&(ne=i.R32F),X===i.HALF_FLOAT&&(ne=i.R16F),X===i.UNSIGNED_BYTE&&(ne=i.R8)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.R8UI),X===i.UNSIGNED_SHORT&&(ne=i.R16UI),X===i.UNSIGNED_INT&&(ne=i.R32UI),X===i.BYTE&&(ne=i.R8I),X===i.SHORT&&(ne=i.R16I),X===i.INT&&(ne=i.R32I)),T===i.RG&&(X===i.FLOAT&&(ne=i.RG32F),X===i.HALF_FLOAT&&(ne=i.RG16F),X===i.UNSIGNED_BYTE&&(ne=i.RG8)),T===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RG8UI),X===i.UNSIGNED_SHORT&&(ne=i.RG16UI),X===i.UNSIGNED_INT&&(ne=i.RG32UI),X===i.BYTE&&(ne=i.RG8I),X===i.SHORT&&(ne=i.RG16I),X===i.INT&&(ne=i.RG32I)),T===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),X===i.UNSIGNED_INT&&(ne=i.RGB32UI),X===i.BYTE&&(ne=i.RGB8I),X===i.SHORT&&(ne=i.RGB16I),X===i.INT&&(ne=i.RGB32I)),T===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),X===i.UNSIGNED_INT&&(ne=i.RGBA32UI),X===i.BYTE&&(ne=i.RGBA8I),X===i.SHORT&&(ne=i.RGBA16I),X===i.INT&&(ne=i.RGBA32I)),T===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),T===i.RGBA){let Ie=ie?Yl:St.getTransfer(K);X===i.FLOAT&&(ne=i.RGBA32F),X===i.HALF_FLOAT&&(ne=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ne=Ie===Pt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(L,T){let X;return L?T===null||T===cs||T===oo?X=i.DEPTH24_STENCIL8:T===Ji?X=i.DEPTH32F_STENCIL8:T===sa&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===cs||T===oo?X=i.DEPTH_COMPONENT24:T===Ji?X=i.DEPTH_COMPONENT32F:T===sa&&(X=i.DEPTH_COMPONENT16),X}function A(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==mi&&L.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){let T=L.target;T.removeEventListener("dispose",R),E(T),T.isVideoTexture&&u.delete(T)}function _(L){let T=L.target;T.removeEventListener("dispose",_),y(T)}function E(L){let T=n.get(L);if(T.__webglInit===void 0)return;let X=L.source,K=h.get(X);if(K){let ie=K[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(L),Object.keys(K).length===0&&h.delete(X)}n.remove(L)}function b(L){let T=n.get(L);i.deleteTexture(T.__webglTexture);let X=L.source,K=h.get(X);delete K[T.__cacheKey],o.memory.textures--}function y(L){let T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let ie=0;ie<T.__webglFramebuffer[K].length;ie++)i.deleteFramebuffer(T.__webglFramebuffer[K][ie]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let X=L.textures;for(let K=0,ie=X.length;K<ie;K++){let ne=n.get(X[K]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(L)}let C=0;function U(){C=0}function I(){let L=C;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),C+=1,L}function D(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function H(L,T){let X=n.get(L);if(L.isVideoTexture&&ve(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){let K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(X,L,T);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function F(L,T){let X=n.get(L);if(L.version>0&&X.__version!==L.version){q(X,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function V(L,T){let X=n.get(L);if(L.version>0&&X.__version!==L.version){q(X,L,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function N(L,T){let X=n.get(L);if(L.version>0&&X.__version!==L.version){te(X,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}let z={[ls]:i.REPEAT,[gr]:i.CLAMP_TO_EDGE,[yu]:i.MIRRORED_REPEAT},J={[mi]:i.NEAREST,[nm]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ac]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},re={[om]:i.NEVER,[dm]:i.ALWAYS,[am]:i.LESS,[wp]:i.LEQUAL,[lm]:i.EQUAL,[hm]:i.GEQUAL,[cm]:i.GREATER,[um]:i.NOTEQUAL};function fe(L,T){if(T.type===Ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===Ac||T.magFilter===za||T.magFilter===fi||T.minFilter===un||T.minFilter===Ac||T.minFilter===za||T.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,z[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,z[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,z[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,J[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mi||T.minFilter!==za&&T.minFilter!==fi||T.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Me(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R));let K=T.source,ie=h.get(K);ie===void 0&&(ie={},h.set(K,ie));let ne=D(T);if(ne!==L.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[ne].usedTimes++;let Ie=ie[L.__cacheKey];Ie!==void 0&&(ie[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(T)),L.__cacheKey=ne,L.__webglTexture=ie[ne].texture}return X}function q(L,T,X){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);let ie=Me(L,T),ne=T.source;t.bindTexture(K,L.__webglTexture,i.TEXTURE0+X);let Ie=n.get(ne);if(ne.version!==Ie.__version||ie===!0){t.activeTexture(i.TEXTURE0+X);let xe=St.getPrimaries(St.workingColorSpace),Pe=T.colorSpace===Nn?null:St.getPrimaries(T.colorSpace),st=T.colorSpace===Nn||xe===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let he=v(T.image,!1,r.maxTextureSize);he=Ye(T,he);let Re=s.convert(T.format,T.colorSpace),Xe=s.convert(T.type),et=w(T.internalFormat,Re,Xe,T.colorSpace,T.isVideoTexture);fe(K,T);let Ue,ft=T.mipmaps,ot=T.isVideoTexture!==!0,Tt=Ie.__version===void 0||ie===!0,k=ne.dataReady,be=A(T,he);if(T.isDepthTexture)et=x(T.format===ao,T.type),Tt&&(ot?t.texStorage2D(i.TEXTURE_2D,1,et,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,et,he.width,he.height,0,Re,Xe,null));else if(T.isDataTexture)if(ft.length>0){ot&&Tt&&t.texStorage2D(i.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let $=0,ae=ft.length;$<ae;$++)Ue=ft[$],ot?k&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Re,Xe,Ue.data):t.texImage2D(i.TEXTURE_2D,$,et,Ue.width,Ue.height,0,Re,Xe,Ue.data);T.generateMipmaps=!1}else ot?(Tt&&t.texStorage2D(i.TEXTURE_2D,be,et,he.width,he.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Re,Xe,he.data)):t.texImage2D(i.TEXTURE_2D,0,et,he.width,he.height,0,Re,Xe,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,et,ft[0].width,ft[0].height,he.depth);for(let $=0,ae=ft.length;$<ae;$++)if(Ue=ft[$],T.format!==pi)if(Re!==null)if(ot){if(k)if(T.layerUpdates.size>0){let ye=zf(Ue.width,Ue.height,T.format,T.type);for(let ge of T.layerUpdates){let rt=Ue.data.subarray(ge*ye/Ue.data.BYTES_PER_ELEMENT,(ge+1)*ye/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ge,Ue.width,Ue.height,1,Re,rt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ue.width,Ue.height,he.depth,Re,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,et,Ue.width,Ue.height,he.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ue.width,Ue.height,he.depth,Re,Xe,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,et,Ue.width,Ue.height,he.depth,0,Re,Xe,Ue.data)}else{ot&&Tt&&t.texStorage2D(i.TEXTURE_2D,be,et,ft[0].width,ft[0].height);for(let $=0,ae=ft.length;$<ae;$++)Ue=ft[$],T.format!==pi?Re!==null?ot?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Re,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,$,et,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?k&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ue.width,Ue.height,Re,Xe,Ue.data):t.texImage2D(i.TEXTURE_2D,$,et,Ue.width,Ue.height,0,Re,Xe,Ue.data)}else if(T.isDataArrayTexture)if(ot){if(Tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,et,he.width,he.height,he.depth),k)if(T.layerUpdates.size>0){let $=zf(he.width,he.height,T.format,T.type);for(let ae of T.layerUpdates){let ye=he.data.subarray(ae*$/he.data.BYTES_PER_ELEMENT,(ae+1)*$/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,Re,Xe,ye)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Re,Xe,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,et,he.width,he.height,he.depth,0,Re,Xe,he.data);else if(T.isData3DTexture)ot?(Tt&&t.texStorage3D(i.TEXTURE_3D,be,et,he.width,he.height,he.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Re,Xe,he.data)):t.texImage3D(i.TEXTURE_3D,0,et,he.width,he.height,he.depth,0,Re,Xe,he.data);else if(T.isFramebufferTexture){if(Tt)if(ot)t.texStorage2D(i.TEXTURE_2D,be,et,he.width,he.height);else{let $=he.width,ae=he.height;for(let ye=0;ye<be;ye++)t.texImage2D(i.TEXTURE_2D,ye,et,$,ae,0,Re,Xe,null),$>>=1,ae>>=1}}else if(ft.length>0){if(ot&&Tt){let $=Ae(ft[0]);t.texStorage2D(i.TEXTURE_2D,be,et,$.width,$.height)}for(let $=0,ae=ft.length;$<ae;$++)Ue=ft[$],ot?k&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Re,Xe,Ue):t.texImage2D(i.TEXTURE_2D,$,et,Re,Xe,Ue);T.generateMipmaps=!1}else if(ot){if(Tt){let $=Ae(he);t.texStorage2D(i.TEXTURE_2D,be,et,$.width,$.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Xe,he)}else t.texImage2D(i.TEXTURE_2D,0,et,Re,Xe,he);m(T)&&p(K),Ie.__version=ne.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function te(L,T,X){if(T.image.length!==6)return;let K=Me(L,T),ie=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);let ne=n.get(ie);if(ie.version!==ne.__version||K===!0){t.activeTexture(i.TEXTURE0+X);let Ie=St.getPrimaries(St.workingColorSpace),xe=T.colorSpace===Nn?null:St.getPrimaries(T.colorSpace),Pe=T.colorSpace===Nn||Ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let st=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,Re=[];for(let ae=0;ae<6;ae++)!st&&!he?Re[ae]=v(T.image[ae],!0,r.maxCubemapSize):Re[ae]=he?T.image[ae].image:T.image[ae],Re[ae]=Ye(T,Re[ae]);let Xe=Re[0],et=s.convert(T.format,T.colorSpace),Ue=s.convert(T.type),ft=w(T.internalFormat,et,Ue,T.colorSpace),ot=T.isVideoTexture!==!0,Tt=ne.__version===void 0||K===!0,k=ie.dataReady,be=A(T,Xe);fe(i.TEXTURE_CUBE_MAP,T);let $;if(st){ot&&Tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,ft,Xe.width,Xe.height);for(let ae=0;ae<6;ae++){$=Re[ae].mipmaps;for(let ye=0;ye<$.length;ye++){let ge=$[ye];T.format!==pi?et!==null?ot?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,ge.width,ge.height,et,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,ft,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,ge.width,ge.height,et,Ue,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,ft,ge.width,ge.height,0,et,Ue,ge.data)}}}else{if($=T.mipmaps,ot&&Tt){$.length>0&&be++;let ae=Ae(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,ft,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re[ae].width,Re[ae].height,et,Ue,Re[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ft,Re[ae].width,Re[ae].height,0,et,Ue,Re[ae].data);for(let ye=0;ye<$.length;ye++){let rt=$[ye].image[ae].image;ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,rt.width,rt.height,et,Ue,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,ft,rt.width,rt.height,0,et,Ue,rt.data)}}else{ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,et,Ue,Re[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ft,et,Ue,Re[ae]);for(let ye=0;ye<$.length;ye++){let ge=$[ye];ot?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,et,Ue,ge.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,ft,et,Ue,ge.image[ae])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),ne.__version=ie.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ue(L,T,X,K,ie,ne){let Ie=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),Pe=w(X.internalFormat,Ie,xe,X.colorSpace),st=n.get(T),he=n.get(X);if(he.__renderTarget=T,!st.__hasExternalTextures){let Re=Math.max(1,T.width>>ne),Xe=Math.max(1,T.height>>ne);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,ne,Pe,Re,Xe,T.depth,0,Ie,xe,null):t.texImage2D(ie,ne,Pe,Re,Xe,0,Ie,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ie,he.__webglTexture,0,Se(T)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ie,he.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(L,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){let K=T.depthTexture,ie=K&&K.isDepthTexture?K.type:null,ne=x(T.stencilBuffer,ie),Ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=Se(T);Fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ne,T.width,T.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ne,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ne,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,L)}else{let K=T.textures;for(let ie=0;ie<K.length;ie++){let ne=K[ie],Ie=s.convert(ne.format,ne.colorSpace),xe=s.convert(ne.type),Pe=w(ne.internalFormat,Ie,xe,ne.colorSpace),st=Se(T);X&&Fe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Pe,T.width,T.height):Fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Pe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);let ie=K.__webglTexture,ne=Se(T);if(T.depthTexture.format===eo)Fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(T.depthTexture.format===ao)Fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Le(L){let T=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let K=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){let ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",ie)};K.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=K}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");se(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),ee(T.__webglDepthbuffer[K],L,!1);else{let ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ee(T.__webglDepthbuffer,L,!1);else{let K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(L,T,X){let K=n.get(L);T!==void 0&&ue(K.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Le(L)}function it(L){let T=L.texture,X=n.get(L),K=n.get(T);L.addEventListener("dispose",_);let ie=L.textures,ne=L.isWebGLCubeRenderTarget===!0,Ie=ie.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),ne){X.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[xe]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)X.__webglFramebuffer[xe][Pe]=i.createFramebuffer()}else X.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let xe=0;xe<T.mipmaps.length;xe++)X.__webglFramebuffer[xe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let xe=0,Pe=ie.length;xe<Pe;xe++){let st=n.get(ie[xe]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Fe(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xe=0;xe<ie.length;xe++){let Pe=ie[xe];X.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[xe]);let st=s.convert(Pe.format,Pe.colorSpace),he=s.convert(Pe.type),Re=w(Pe.internalFormat,st,he,Pe.colorSpace,L.isXRRenderTarget===!0),Xe=Se(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Re,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,X.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),fe(i.TEXTURE_CUBE_MAP,T);for(let xe=0;xe<6;xe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)ue(X.__webglFramebuffer[xe][Pe],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Pe);else ue(X.__webglFramebuffer[xe],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,Pe=ie.length;xe<Pe;xe++){let st=ie[xe],he=n.get(st);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),fe(i.TEXTURE_2D,st),ue(X.__webglFramebuffer,L,st,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(st)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,K.__webglTexture),fe(xe,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)ue(X.__webglFramebuffer[Pe],L,T,i.COLOR_ATTACHMENT0,xe,Pe);else ue(X.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,xe,0);m(T)&&p(xe),t.unbindTexture()}L.depthBuffer&&Le(L)}function le(L){let T=L.textures;for(let X=0,K=T.length;X<K;X++){let ie=T[X];if(m(ie)){let ne=M(L),Ie=n.get(ie).__webglTexture;t.bindTexture(ne,Ie),p(ne),t.unbindTexture()}}}let je=[],B=[];function Ze(L){if(L.samples>0){if(Fe(L)===!1){let T=L.textures,X=L.width,K=L.height,ie=i.COLOR_BUFFER_BIT,ne=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(L),xe=T.length>1;if(xe)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Pe]);let st=n.get(T[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,ie,i.NEAREST),l===!0&&(je.length=0,B.length=0,je.push(i.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(je.push(ne),B.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Pe]);let st=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Se(L){return Math.min(r.maxSamples,L.samples)}function Fe(L){let T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ve(L){let T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ye(L,T){let X=L.colorSpace,K=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==bo&&X!==Nn&&(St.getTransfer(X)===Pt?(K!==pi||ie!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}function Ae(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=N,this.rebindTextures=Ne,this.setupRenderTarget=it,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Fe}function x1(i,e){function t(n,r=Nn){let s,o=St.getTransfer(r);if(n===yr)return i.UNSIGNED_BYTE;if(n===zh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cp)return i.BYTE;if(n===up)return i.SHORT;if(n===sa)return i.UNSIGNED_SHORT;if(n===Fh)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===Ji)return i.FLOAT;if(n===Jt)return i.HALF_FLOAT;if(n===dp)return i.ALPHA;if(n===fp)return i.RGB;if(n===pi)return i.RGBA;if(n===pp)return i.LUMINANCE;if(n===mp)return i.LUMINANCE_ALPHA;if(n===eo)return i.DEPTH_COMPONENT;if(n===ao)return i.DEPTH_STENCIL;if(n===Oh)return i.RED;if(n===Hh)return i.RED_INTEGER;if(n===gp)return i.RG;if(n===kh)return i.RG_INTEGER;if(n===Vh)return i.RGBA_INTEGER;if(n===gl||n===vl||n===xl||n===yl)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mu||n===wu||n===bu||n===Eu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_u||n===Su||n===Tu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_u||n===Su)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Lu||n===Du||n===Uu||n===Nu||n===Fu||n===zu||n===Bu||n===Ou||n===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Au)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ru)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Iu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Du)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===ku||n===Vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ml)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vp||n===Wu||n===Gu||n===Xu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ml)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function E1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,rs.copy(x),rs.x*=-1,rs.y*=-1,rs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(rs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _1(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let x=w.program;n.uniformBlockBinding(M,x)}function c(M,w){let x=r[M.id];x===void 0&&(g(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));let A=w.program;n.updateUBOMapping(M,A);let R=e.render.frame;s[M.id]!==R&&(h(M),s[M.id]=R)}function u(M){let w=d();M.__bindingPointIndex=w;let x=i.createBuffer(),A=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let w=r[M.id],x=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,_=x.length;R<_;R++){let E=Array.isArray(x[R])?x[R]:[x[R]];for(let b=0,y=E.length;b<y;b++){let C=E[b];if(f(C,R,b,A)===!0){let U=C.__offset,I=Array.isArray(C.value)?C.value:[C.value],D=0;for(let H=0;H<I.length;H++){let F=I[H],V=v(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,U+D,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,x,A){let R=M.value,_=w+"_"+x;if(A[_]===void 0)return typeof R=="number"||typeof R=="boolean"?A[_]=R:A[_]=R.clone(),!0;{let E=A[_];if(typeof R=="number"||typeof R=="boolean"){if(E!==R)return A[_]=R,!0}else if(E.equals(R)===!1)return E.copy(R),!0}return!1}function g(M){let w=M.uniforms,x=0,A=16;for(let _=0,E=w.length;_<E;_++){let b=Array.isArray(w[_])?w[_]:[w[_]];for(let y=0,C=b.length;y<C;y++){let U=b[y],I=Array.isArray(U.value)?U.value:[U.value];for(let D=0,H=I.length;D<H;D++){let F=I[D],V=v(F),N=x%A,z=N%V.boundary,J=N+z;x+=z,J!==0&&A-J<V.storage&&(x+=A-J),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=V.storage}}}let R=x%A;return R>0&&(x+=A-R),M.__size=x,M.__cache={},this}function v(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function m(M){let w=M.target;w.removeEventListener("dispose",m);let x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(let M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}function ol(i,e,t,n,r,s){Js.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Xo.x=s*Js.x-r*Js.y,Xo.y=r*Js.x+s*Js.y):Xo.copy(Js),i.copy(e),i.x+=Xo.x,i.y+=Xo.y,i.applyMatrix4(Ip)}function cl(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Ll.fromBufferAttribute(o,r),Dl.fromBufferAttribute(o,s),t.distanceSqToSegment(Ll,Dl,nu,Wf)>n)return;nu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nu);if(!(l<e.near||l>e.far))return{distance:l,point:Wf.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}function Yf(i,e,t,n,r,s,o){let a=lh.distanceSqToPoint(i);if(a<t){let l=new S;lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function qh(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}function Kf(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function T1(i,e){let t=1-i;return t*t*e}function A1(i,e){return 2*(1-i)*i*e}function R1(i,e){return i*i*e}function na(i,e,t,n){return T1(i,e)+A1(i,t)+R1(i,n)}function C1(i,e){let t=1-i;return t*t*t*e}function P1(i,e){let t=1-i;return 3*t*t*i*e}function I1(i,e){return 3*(1-i)*i*i*e}function L1(i,e){return i*i*i*e}function ia(i,e,t,n,r){return C1(i,e)+P1(i,t)+I1(i,n)+L1(i,r)}function Lp(i,e,t,n,r){let s,o;if(r===Z1(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Jf(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Jf(s,i[s],i[s+1],o);return o&&Zl(o,o.next)&&(ga(o),o=o.next),o}function fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zl(t,t.next)||Yt(t.prev,t,t.next)===0)){if(ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function pa(i,e,t,n,r,s,o){if(!i)return;!o&&s&&W1(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?N1(i,n,r,s):U1(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ga(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=F1(fs(i),e,t),pa(i,e,t,n,r,s,2)):o===2&&z1(i,e,t,n,r,s):pa(fs(i),e,t,n,r,s,1);break}}}function U1(i){let e=i.prev,t=i,n=i.next;if(Yt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&$s(r,a,s,l,o,c,g.x,g.y)&&Yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function N1(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Yt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,d=s.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,v=a>l?a>c?a:c:l>c?l:c,m=u>d?u>h?u:h:d>h?d:h,p=mh(f,g,e,t,n),M=mh(v,m,e,t,n),w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=M;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==o&&$s(a,u,l,d,c,h,w.x,w.y)&&Yt(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&$s(a,u,l,d,c,h,x.x,x.y)&&Yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==r&&w!==o&&$s(a,u,l,d,c,h,w.x,w.y)&&Yt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&$s(a,u,l,d,c,h,x.x,x.y)&&Yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function F1(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!Zl(r,s)&&Dp(r,n,n.next,s)&&ma(r,s)&&ma(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ga(n),ga(n.next),n=i=s),n=n.next}while(n!==i);return fs(n)}function z1(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&q1(o,a)){let l=Up(o,a);o=fs(o,o.next),l=fs(l,l.next),pa(o,e,t,n,r,s,0),pa(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function B1(i,e,t,n){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Lp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(X1(c));for(r.sort(O1),s=0;s<r.length;s++)t=H1(r[s],t);return t}function O1(i,e){return i.x-e.x}function H1(i,e){let t=k1(i,e);if(!t)return e;let n=Up(t,i);return fs(n,n.next),fs(t,t.next)}function k1(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&$s(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),ma(t,i)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&V1(r,t)))&&(r=t,u=d)),t=t.next;while(t!==a);return r}function V1(i,e){return Yt(i.prev,i,e.prev)<0&&Yt(e.next,i,i.next)<0}function W1(i,e,t,n){let r=i;do r.z===0&&(r.z=mh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,G1(r)}function G1(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function mh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function X1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $s(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function q1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Y1(i,e)&&(ma(i,e)&&ma(e,i)&&K1(i,e)&&(Yt(i.prev,i,e.prev)||Yt(i,e.prev,e))||Zl(i,e)&&Yt(i.prev,i,i.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zl(i,e){return i.x===e.x&&i.y===e.y}function Dp(i,e,t,n){let r=pl(Yt(i,e,t)),s=pl(Yt(i,e,n)),o=pl(Yt(t,n,i)),a=pl(Yt(t,n,e));return!!(r!==s&&o!==a||r===0&&fl(i,t,e)||s===0&&fl(i,n,e)||o===0&&fl(t,i,n)||a===0&&fl(t,e,n))}function fl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pl(i){return i>0?1:i<0?-1:0}function Y1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ma(i,e){return Yt(i.prev,i,i.next)<0?Yt(i,e,i.next)>=0&&Yt(i,i.prev,e)>=0:Yt(i,e,i.prev)<0||Yt(i,i.next,e)<0}function K1(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Up(i,e){let t=new gh(i.i,i.x,i.y),n=new gh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Jf(i,e,t,n){let r=new gh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z1(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}function jf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function J1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}function ml(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function j1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ip(){return performance.now()}function sp(i,e){return i.distance-e.distance}function Ch(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Ch(s[o],e,t,!0)}}var Ph,L0,Od,D0,op,U0,mr,$i,Kt,gt,ji,Fr,Ct,Hd,wl,N0,os,F0,z0,B0,O0,H0,k0,V0,W0,lu,cu,G0,X0,q0,Y0,K0,Z0,J0,j0,Q0,uu,hu,du,io,fu,pu,mu,gu,ap,$0,em,zr,Ih,Lh,Dh,Uh,tm,Ma,Nh,lp,ro,so,vu,xu,ql,ls,gr,yu,mi,nm,za,un,Ac,fi,yr,cp,up,sa,Fh,cs,Ji,Jt,zh,Bh,oo,hp,dp,fp,pi,pp,mp,eo,ao,Oh,Hh,gp,kh,Vh,gl,vl,xl,yl,Mu,wu,bu,Eu,_u,Su,Tu,Au,Ru,Cu,Pu,Iu,Lu,Du,Uu,Nu,Fu,zu,Bu,Ou,Hu,Ml,ku,Vu,vp,Wu,Gu,Xu,bl,qu,Rc,kd,Vd,Wd,xp,yp,Wh,im,rm,Mp,sm,Nn,qt,bo,Yl,Pt,Ds,Gd,om,am,lm,wp,cm,um,hm,dm,Yu,bp,Xd,vr,El,Br,Hn,qd,$o,oa,ht,oe,pt,Cc,Yd,St,Kd,Zd,Jd,jd,Qd,Us,Ku,Dm,_l,Um,Fn,Je,Zu,Zt,Sl,Ju,It,S,Ic,$d,bi,ur,Ni,Ba,Ns,Fs,zs,Cr,Pr,$r,Ho,Oa,Ha,es,Nm,ko,Dc,yn,hr,Uc,ka,Ir,Nc,Va,Fc,lo,Ke,Bs,Fi,Fm,zm,Lr,Wa,ui,ef,tf,Mn,la,Bm,nf,Os,dr,Ga,Vo,Om,Hm,rf,sf,of,af,km,Hs,zc,hn,zi,fr,Bc,pr,ks,Vs,lf,Oc,Hc,kc,Vc,Wc,Gc,Nr,_p,Dr,Xa,ce,kn,Vm,er,Jn,cn,qa,qe,Tl,Al,Ge,Wm,wi,qc,Ws,hi,Wo,Cn,Ve,cf,ts,Ya,uf,Ka,Za,Ja,Yc,ja,hf,Qa,de,Wn,ir,qm,Ym,me,Rl,Ur,df,ff,xn,Gs,Xs,us,uo,Or,Kc,Km,Zm,di,ns,el,hs,Lt,jm,Qm,$m,eg,tg,ng,ig,rg,sg,og,ag,lg,cg,ug,hg,dg,fg,pg,mg,gg,vg,xg,yg,Mg,wg,bg,Eg,_g,Sg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Fg,zg,Bg,Og,Hg,kg,Vg,Wg,Gg,Xg,qg,Yg,Kg,Zg,Jg,jg,Qg,$g,ev,tv,nv,iv,rv,sv,ov,av,lv,cv,uv,hv,dv,fv,pv,mv,gv,vv,xv,yv,Mv,wv,bv,Ev,_v,Sv,Tv,Av,Rv,Cv,Pv,Iv,Lv,Dv,Uv,Nv,Fv,zv,Bv,Ov,Hv,kv,Vv,Wv,Gv,Xv,qv,Yv,Kv,Zv,Jv,jv,Qv,$v,ex,tx,nx,ix,rx,sx,ox,ax,lx,cx,ux,hx,dx,fx,px,mx,gx,vx,xx,yx,Mx,wx,bx,Ex,_x,Sx,Tx,Ax,Rx,Cx,mt,_e,Zi,tl,is,Px,ho,Qs,pf,as,Zc,mf,Jc,jc,Qc,$c,ss,qs,gf,fo,Cl,Ap,Mf,Rp,Cp,Pp,wf,bf,Ef,_f,Sf,ju,Qu,$u,eu,no,Dy,Uy,Rf,il,Wy,Gy,qy,e1,th,nh,a1,ih,rh,h1,d1,p1,sh,Vn,y1,ta,M1,w1,oh,ah,rs,b1,Pl,Oi,ca,Kn,po,ua,Ys,Go,Ks,Zs,Js,Xo,Ip,rl,qo,sl,Bf,tu,Of,Il,ds,Dt,js,Hf,al,kf,S1,Yo,Ko,dn,mo,Ll,Dl,Vf,Zo,ll,nu,Wf,ha,Gf,Xf,go,da,qf,lh,ul,hl,$t,Hi,Ei,fa,ch,dl,iu,ru,su,vo,Ul,uh,Nl,hh,Fl,dh,zl,Zf,fh,Bl,tr,xo,nr,ph,yo,D1,ra,Ol,va,In,Hl,en,Mo,vh,xh,yh,ki,ps,Mh,wh,bh,kl,ms,Eh,$f,_h,Yh,xa,Sh,Vl,ya,_i,ou,ep,tp,Wl,np,Jo,au,Th,Gl,Ah,Si,ii,wo,Kh,Q1,Zh,$1,eM,tM,nM,iM,rM,sM,Rh,Xt,cw,rp,Xl,Ut=Bd(()=>{Ph="170",L0=0,Od=1,D0=2,op=1,U0=2,mr=3,$i=0,Kt=1,gt=2,ji=0,Fr=1,Ct=2,Hd=3,wl=4,N0=5,os=100,F0=101,z0=102,B0=103,O0=104,H0=200,k0=201,V0=202,W0=203,lu=204,cu=205,G0=206,X0=207,q0=208,Y0=209,K0=210,Z0=211,J0=212,j0=213,Q0=214,uu=0,hu=1,du=2,io=3,fu=4,pu=5,mu=6,gu=7,ap=0,$0=1,em=2,zr=0,Ih=1,Lh=2,Dh=3,Uh=4,tm=5,Ma=6,Nh=7,lp=300,ro=301,so=302,vu=303,xu=304,ql=306,ls=1e3,gr=1001,yu=1002,mi=1003,nm=1004,za=1005,un=1006,Ac=1007,fi=1008,yr=1009,cp=1010,up=1011,sa=1012,Fh=1013,cs=1014,Ji=1015,Jt=1016,zh=1017,Bh=1018,oo=1020,hp=35902,dp=1021,fp=1022,pi=1023,pp=1024,mp=1025,eo=1026,ao=1027,Oh=1028,Hh=1029,gp=1030,kh=1031,Vh=1033,gl=33776,vl=33777,xl=33778,yl=33779,Mu=35840,wu=35841,bu=35842,Eu=35843,_u=36196,Su=37492,Tu=37496,Au=37808,Ru=37809,Cu=37810,Pu=37811,Iu=37812,Lu=37813,Du=37814,Uu=37815,Nu=37816,Fu=37817,zu=37818,Bu=37819,Ou=37820,Hu=37821,Ml=36492,ku=36494,Vu=36495,vp=36283,Wu=36284,Gu=36285,Xu=36286,bl=2300,qu=2301,Rc=2302,kd=2400,Vd=2401,Wd=2402,xp=0,yp=1,Wh=2,im=3200,rm=3201,Mp=0,sm=1,Nn="",qt="srgb",bo="srgb-linear",Yl="linear",Pt="srgb",Ds=7680,Gd=519,om=512,am=513,lm=514,wp=515,cm=516,um=517,hm=518,dm=519,Yu=35044,bp=35048,Xd="300 es",vr=2e3,El=2001,Br=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=1234567,$o=Math.PI/180,oa=180/Math.PI;ht={DEG2RAD:$o,RAD2DEG:oa,generateUUID:Qi,clamp:Pn,euclideanModulo:Gh,mapLinear:fm,inverseLerp:pm,lerp:ea,damp:mm,pingpong:gm,smoothstep:vm,smootherstep:xm,randInt:ym,randFloat:Mm,randFloatSpread:wm,seededRandom:bm,degToRad:Em,radToDeg:_m,isPowerOfTwo:Sm,ceilPowerOfTwo:Tm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Rm,normalize:Ft,denormalize:Bi},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pt=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=r[0],m=r[3],p=r[6],M=r[1],w=r[4],x=r[7],A=r[2],R=r[5],_=r[8];return s[0]=o*v+a*M+l*A,s[3]=o*m+a*w+l*R,s[6]=o*p+a*x+l*_,s[1]=c*v+u*M+d*A,s[4]=c*m+u*w+d*R,s[7]=c*p+u*x+d*_,s[2]=h*v+f*M+g*A,s[5]=h*m+f*w+g*R,s[8]=h*p+f*x+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=t*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cc.makeScale(e,t)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new pt;Yd={};St={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Pt&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Pt&&(i.r=to(i.r),i.g=to(i.g),i.b=to(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?Yl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};Kd=[.64,.33,.3,.6,.15,.06],Zd=[.2126,.7152,.0722],Jd=[.3127,.329],jd=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[bo]:{primaries:Kd,whitePoint:Jd,transfer:Yl,toXYZ:jd,fromXYZ:Qd,luminanceCoefficients:Zd,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:Kd,whitePoint:Jd,transfer:Pt,toXYZ:jd,fromXYZ:Qd,luminanceCoefficients:Zd,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});Ku=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=aa("canvas")),Us.width=e.width,Us.height=e.height;let n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dm=0,_l=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pc(r[o].image)):s.push(Pc(r[o]))}else s=Pc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};Um=0,Fn=class i extends Br{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=gr,r=gr,s=un,o=fi,a=pi,l=yr,c=i.DEFAULT_ANISOTROPY,u=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Qi(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=lp;Fn.DEFAULT_ANISOTROPY=1;Je=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,x=(f+1)/2,A=(p+1)/2,R=(u+h)/4,_=(d+v)/4,E=(g+m)/4;return w>x&&w>A?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=R/n,s=_/n):x>A?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=R/r,s=E/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=_/s,r=E/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zu=class extends Br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Fn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new _l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zt=class extends Zu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Sl=class extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ju=class extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},It=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==g){let m=1-a,p=l*h+c*f+u*g+d*v,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let A=Math.sqrt(w),R=Math.atan2(A,p*M);m=Math.sin(m*R)/A,a=Math.sin(a*R)/A}let x=a*M;if(l=l*m+h*x,c=c*m+f*x,u=u*m+g*x,d=d*m+v*x,m===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ic=new S,$d=new It,bi=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ni):Ni.fromBufferAttribute(s,o),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Oa.subVectors(this.max,Ho),Ns.subVectors(e.a,Ho),Fs.subVectors(e.b,Ho),zs.subVectors(e.c,Ho),Cr.subVectors(Fs,Ns),Pr.subVectors(zs,Fs),$r.subVectors(Ns,zs);let t=[0,-Cr.z,Cr.y,0,-Pr.z,Pr.y,0,-$r.z,$r.y,Cr.z,0,-Cr.x,Pr.z,0,-Pr.x,$r.z,0,-$r.x,-Cr.y,Cr.x,0,-Pr.y,Pr.x,0,-$r.y,$r.x,0];return!Lc(t,Ns,Fs,zs,Oa)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,Ns,Fs,zs,Oa))?!1:(Ha.crossVectors(Cr,Pr),t=[Ha.x,Ha.y,Ha.z],Lc(t,Ns,Fs,zs,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ur=[new S,new S,new S,new S,new S,new S,new S,new S],Ni=new S,Ba=new bi,Ns=new S,Fs=new S,zs=new S,Cr=new S,Pr=new S,$r=new S,Ho=new S,Oa=new S,Ha=new S,es=new S;Nm=new bi,ko=new S,Dc=new S,yn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);let t=ko.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ko,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Dc)),this.expandByPoint(ko.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hr=new S,Uc=new S,ka=new S,Ir=new S,Nc=new S,Va=new S,Fc=new S,lo=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uc.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(Uc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=Ir.dot(this.direction),l=-Ir.dot(ka),c=Ir.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Uc).addScaledVector(ka,h),f}intersectSphere(e,t){hr.subVectors(e.center,this.origin);let n=hr.dot(this.direction),r=hr.dot(hr)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,r,s){Nc.subVectors(t,e),Va.subVectors(n,e),Fc.crossVectors(Nc,Va);let o=this.direction.dot(Fc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,e);let l=a*this.direction.dot(Va.crossVectors(Ir,Va));if(l<0)return null;let c=a*this.direction.dot(Nc.cross(Ir));if(c<0||l+c>o)return null;let u=-a*Ir.dot(Fc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,r,s,o,a,l,c,u,d,h,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,h,f,g,v,m)}set(e,t,n,r,s,o,a,l,c,u,d,h,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fm,e,zm)}lookAt(e,t,n){let r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Lr.crossVectors(n,ui),Lr.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Lr.crossVectors(n,ui)),Lr.normalize(),Wa.crossVectors(ui,Lr),r[0]=Lr.x,r[4]=Wa.x,r[8]=ui.x,r[1]=Lr.y,r[5]=Wa.y,r[9]=ui.y,r[2]=Lr.z,r[6]=Wa.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],w=n[7],x=n[11],A=n[15],R=r[0],_=r[4],E=r[8],b=r[12],y=r[1],C=r[5],U=r[9],I=r[13],D=r[2],H=r[6],F=r[10],V=r[14],N=r[3],z=r[7],J=r[11],re=r[15];return s[0]=o*R+a*y+l*D+c*N,s[4]=o*_+a*C+l*H+c*z,s[8]=o*E+a*U+l*F+c*J,s[12]=o*b+a*I+l*V+c*re,s[1]=u*R+d*y+h*D+f*N,s[5]=u*_+d*C+h*H+f*z,s[9]=u*E+d*U+h*F+f*J,s[13]=u*b+d*I+h*V+f*re,s[2]=g*R+v*y+m*D+p*N,s[6]=g*_+v*C+m*H+p*z,s[10]=g*E+v*U+m*F+p*J,s[14]=g*b+v*I+m*V+p*re,s[3]=M*R+w*y+x*D+A*N,s[7]=M*_+w*C+x*H+A*z,s[11]=M*E+w*U+x*F+A*J,s[15]=M*b+w*I+x*V+A*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*a*h+n*c*h+r*a*f-n*l*f)+v*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+m*(+t*c*d-t*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+p*(-r*a*u-t*l*d+t*a*h+r*o*d-n*o*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=d*m*c-v*h*c+v*l*f-a*m*f-d*l*p+a*h*p,w=g*h*c-u*m*c-g*l*f+o*m*f+u*l*p-o*h*p,x=u*v*c-g*d*c+g*a*f-o*v*f-u*a*p+o*d*p,A=g*d*l-u*v*l-g*a*h+o*v*h+u*a*m-o*d*m,R=t*M+n*w+r*x+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/R;return e[0]=M*_,e[1]=(v*h*s-d*m*s-v*r*f+n*m*f+d*r*p-n*h*p)*_,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*p+n*l*p)*_,e[3]=(d*l*s-a*h*s-d*r*c+n*h*c+a*r*f-n*l*f)*_,e[4]=w*_,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*_,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*_,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*f+t*l*f)*_,e[8]=x*_,e[9]=(g*d*s-u*v*s-g*n*f+t*v*f+u*n*p-t*d*p)*_,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*p+t*a*p)*_,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*f-t*a*f)*_,e[12]=A*_,e[13]=(u*v*r-g*d*r+g*n*h-t*v*h-u*n*m+t*d*m)*_,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*m-t*a*m)*_,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*h+t*a*h)*_,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,v=o*u,m=o*d,p=a*d,M=l*c,w=l*u,x=l*d,A=n.x,R=n.y,_=n.z;return r[0]=(1-(v+p))*A,r[1]=(f+x)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(f-x)*R,r[5]=(1-(h+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+w)*_,r[9]=(m-M)*_,r[10]=(1-(h+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Bs.set(r[0],r[1],r[2]).length(),o=Bs.set(r[4],r[5],r[6]).length(),a=Bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fi.copy(this);let c=1/s,u=1/o,d=1/a;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=u,Fi.elements[5]*=u,Fi.elements[6]*=u,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,t.setFromRotationMatrix(Fi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=vr){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r),f,g;if(a===vr)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===El)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=vr){let l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),h=(t+e)*c,f=(n+r)*u,g,v;if(a===vr)g=(o+s)*d,v=-2*d;else if(a===El)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new S,Fi=new Ke,Fm=new S(0,0,0),zm=new S(1,1,1),Lr=new S,Wa=new S,ui=new S,ef=new Ke,tf=new It,Mn=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tf.setFromEuler(this),this.setFromQuaternion(tf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";la=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bm=0,nf=new S,Os=new It,dr=new Ke,Ga=new S,Vo=new S,Om=new S,Hm=new It,rf=new S(1,0,0),sf=new S(0,1,0),of=new S(0,0,1),af={type:"added"},km={type:"removed"},Hs={type:"childadded",child:null},zc={type:"childremoved",child:null},hn=class i extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new Mn,n=new It,r=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new pt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(sf,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,t){return nf.copy(e).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(sf,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Vo,Ga,this.up):dr.lookAt(Ga,Vo,this.up),this.quaternion.setFromRotationMatrix(dr),r&&(dr.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(dr),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(km),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};hn.DEFAULT_UP=new S(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;zi=new S,fr=new S,Bc=new S,pr=new S,ks=new S,Vs=new S,lf=new S,Oc=new S,Hc=new S,kc=new S,Vc=new Je,Wc=new Je,Gc=new Je,Nr=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zi.subVectors(e,t),r.cross(zi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zi.subVectors(r,t),fr.subVectors(n,t),Bc.subVectors(e,t);let o=zi.dot(zi),a=zi.dot(fr),l=zi.dot(Bc),c=fr.dot(fr),u=fr.dot(Bc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pr.x),l.addScaledVector(o,pr.y),l.addScaledVector(a,pr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Vc.setScalar(0),Wc.setScalar(0),Gc.setScalar(0),Vc.fromBufferAttribute(e,t),Wc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vc,s.x),o.addScaledVector(Wc,s.y),o.addScaledVector(Gc,s.z),o}static isFrontFacing(e,t,n,r){return zi.subVectors(n,t),fr.subVectors(e,t),zi.cross(fr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),zi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;ks.subVectors(r,n),Vs.subVectors(s,n),Oc.subVectors(e,n);let l=ks.dot(Oc),c=Vs.dot(Oc);if(l<=0&&c<=0)return t.copy(n);Hc.subVectors(e,r);let u=ks.dot(Hc),d=Vs.dot(Hc);if(u>=0&&d<=u)return t.copy(r);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ks,o);kc.subVectors(e,s);let f=ks.dot(kc),g=Vs.dot(kc);if(g>=0&&f<=g)return t.copy(s);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Vs,a);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return lf.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(lf,a);let p=1/(m+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(ks,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Xa={h:0,s:0,l:0};ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=Gh(e,1),t=Pn(t,0,1),n=Pn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xc(o,s,e+1/3),this.g=Xc(o,s,e),this.b=Xc(o,s,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=_p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return St.fromWorkingColorSpace(kn.copy(this),e),Math.round(Pn(kn.r*255,0,255))*65536+Math.round(Pn(kn.g*255,0,255))*256+Math.round(Pn(kn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(kn.copy(this),t);let n=kn.r,r=kn.g,s=kn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=qt){St.fromWorkingColorSpace(kn.copy(this),e);let t=kn.r,n=kn.g,r=kn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Xa);let n=ea(Dr.h,Xa.h,t),r=ea(Dr.s,Xa.s,t),s=ea(Dr.l,Xa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new ce;ce.NAMES=_p;Vm=0,er=class extends Br{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Qi(),this.name="",this.blending=Fr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lu,this.blendDst=cu,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lu&&(n.blendSrc=this.blendSrc),this.blendDst!==cu&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jn=class extends er{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cn=new S,qa=new oe,qe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yu,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yu&&(e.usage=this.usage),e}},Tl=class extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Al=class extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ge=class extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wm=0,wi=new Ke,qc=new hn,Ws=new S,hi=new bi,Wo=new bi,Cn=new S,Ve=class i extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Al:Tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new pt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,n){return wi.makeTranslation(e,t,n),this.applyMatrix4(wi),this}scale(e,t,n){return wi.makeScale(e,t,n),this.applyMatrix4(wi),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Cn.addVectors(hi.min,Wo.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,Wo.max),hi.expandByPoint(Cn)):(hi.expandByPoint(Wo.min),hi.expandByPoint(Wo.max))}hi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Cn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Cn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Cn.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(e,c),Cn.add(Ws)),r=Math.max(r,n.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new S,l[E]=new S;let c=new S,u=new S,d=new S,h=new oe,f=new oe,g=new oe,v=new S,m=new S;function p(E,b,y){c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),h.fromBufferAttribute(s,E),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[E].add(v),a[b].add(v),a[y].add(v),l[E].add(m),l[b].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,b=M.length;E<b;++E){let y=M[E],C=y.start,U=y.count;for(let I=C,D=C+U;I<D;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let w=new S,x=new S,A=new S,R=new S;function _(E){A.fromBufferAttribute(r,E),R.copy(A);let b=a[E];w.copy(b),w.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(R,b);let C=x.dot(l[E])<0?-1:1;o.setXYZW(E,w.x,w.y,w.z,C)}for(let E=0,b=M.length;E<b;++E){let y=M[E],C=y.start,U=y.count;for(let I=C,D=C+U;I<D;I+=3)_(e.getX(I+0)),_(e.getX(I+1)),_(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new S,s=new S,o=new S,a=new S,l=new S,c=new S,u=new S,d=new S;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new qe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cf=new Ke,ts=new lo,Ya=new yn,uf=new S,Ka=new S,Za=new S,Ja=new S,Yc=new S,ja=new S,hf=new S,Qa=new S,de=class extends hn{constructor(e=new Ve,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(Yc.fromBufferAttribute(d,e),o?ja.addScaledVector(Yc,u):ja.addScaledVector(Yc.sub(t),u))}t.add(ja)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(Ya.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ya,uf)===null||ts.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(cf.copy(s).invert(),ts.copy(e.ray).applyMatrix4(cf),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=w;x<A;x+=3){let R=a.getX(x),_=a.getX(x+1),E=a.getX(x+2);r=$a(this,p,e,n,c,u,d,R,_,E),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);r=$a(this,o,e,n,c,u,d,M,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=w;x<A;x+=3){let R=x,_=x+1,E=x+2;r=$a(this,p,e,n,c,u,d,R,_,E),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,w=m+1,x=m+2;r=$a(this,o,e,n,c,u,d,M,w,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};Wn=class i extends Ve{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(d,2));function g(v,m,p,M,w,x,A,R,_,E,b){let y=x/_,C=A/E,U=x/2,I=A/2,D=R/2,H=_+1,F=E+1,V=0,N=0,z=new S;for(let J=0;J<F;J++){let re=J*C-I;for(let fe=0;fe<H;fe++){let Me=fe*y-U;z[v]=Me*M,z[m]=re*w,z[p]=D,c.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[p]=R>0?1:-1,u.push(z.x,z.y,z.z),d.push(fe/_),d.push(1-J/E),V+=1}}for(let J=0;J<E;J++)for(let re=0;re<_;re++){let fe=h+re+H*J,Me=h+re+H*(J+1),q=h+(re+1)+H*(J+1),te=h+(re+1)+H*J;l.push(fe,Me,te),l.push(Me,q,te),N+=6}a.addGroup(f,N,b),f+=N,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ir={clone:co,merge:Zn},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends er{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=Xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Rl=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ur=new S,df=new oe,ff=new oe,xn=class extends Rl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,df,ff),t.subVectors(ff,df)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Xs=1,us=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xn(Gs,Xs,e,t);r.layers=this.layers,this.add(r);let s=new xn(Gs,Xs,e,t);s.layers=this.layers,this.add(s);let o=new xn(Gs,Xs,e,t);o.layers=this.layers,this.add(o);let a=new xn(Gs,Xs,e,t);a.layers=this.layers,this.add(a);let l=new xn(Gs,Xs,e,t);l.layers=this.layers,this.add(l);let c=new xn(Gs,Xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===vr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},uo=class extends Fn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ro,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wn(5,5,5),s=new me({name:"CubemapFromEquirect",uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:ji});s.uniforms.tEquirect.value=t;let o=new de(r,s),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=un),new us(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Kc=new S,Km=new S,Zm=new pt,di=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Kc.subVectors(n,t).cross(Km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Kc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zm.getNormalMatrix(e),r=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new yn,el=new S,hs=class{constructor(e=new di,t=new di,n=new di,r=new di,s=new di,o=new di){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vr){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],M=r[13],w=r[14],x=r[15];if(n[0].setComponents(l-s,h-c,m-f,x-p).normalize(),n[1].setComponents(l+s,h+c,m+f,x+p).normalize(),n[2].setComponents(l+o,h+u,m+g,x+M).normalize(),n[3].setComponents(l-o,h-u,m-g,x-M).normalize(),n[4].setComponents(l-a,h-d,m-v,x-w).normalize(),t===vr)n[5].setComponents(l+a,h+d,m+v,x+w).normalize();else if(t===El)n[5].setComponents(a,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Lt=class i extends Ve{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let M=p*h-o;for(let w=0;w<c;w++){let x=w*d-s;g.push(x,-M,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let w=M+c*p,x=M+c*(p+1),A=M+1+c*(p+1),R=M+1+c*p;f.push(w,x,R),f.push(x,A,R)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,hg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mg=`#define PI 3.141592653589793
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
} // validated`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,Og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#endif`,Zg=`struct PhysicalMaterial {
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
}`,Jg=`
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,Mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nv=`float getShadowMask() {
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
}`,Fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zv=`#ifdef USE_SKINNING
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
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
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
#endif`,Hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jv=`uniform sampler2D t2D;
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`#include <common>
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
}`,ix=`#if DEPTH_PACKING == 3200
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
}`,rx=`#define DISTANCE
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
}`,sx=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,fx=`#define LAMBERT
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
}`,px=`#define MATCAP
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
}`,mx=`#define MATCAP
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
}`,gx=`#define NORMAL
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
}`,vx=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,Mx=`#define STANDARD
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
}`,wx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,_x=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Ax=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:jm,alphahash_pars_fragment:Qm,alphamap_fragment:$m,alphamap_pars_fragment:eg,alphatest_fragment:tg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:rg,batching_pars_vertex:sg,batching_vertex:og,begin_vertex:ag,beginnormal_vertex:lg,bsdfs:cg,iridescence_fragment:ug,bumpmap_pars_fragment:hg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:gg,color_pars_fragment:vg,color_pars_vertex:xg,color_vertex:yg,common:Mg,cube_uv_reflection_fragment:wg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Eg,displacementmap_vertex:_g,emissivemap_fragment:Sg,emissivemap_pars_fragment:Tg,colorspace_fragment:Ag,colorspace_pars_fragment:Rg,envmap_fragment:Cg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Ig,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Wg,envmap_vertex:Dg,fog_vertex:Ug,fog_pars_vertex:Ng,fog_fragment:Fg,fog_pars_fragment:zg,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:Og,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:kg,lights_pars_begin:Vg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Xg,lights_phong_fragment:qg,lights_phong_pars_fragment:Yg,lights_physical_fragment:Kg,lights_physical_pars_fragment:Zg,lights_fragment_begin:Jg,lights_fragment_maps:jg,lights_fragment_end:Qg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:ev,logdepthbuf_pars_vertex:tv,logdepthbuf_vertex:nv,map_fragment:iv,map_pars_fragment:rv,map_particle_fragment:sv,map_particle_pars_fragment:ov,metalnessmap_fragment:av,metalnessmap_pars_fragment:lv,morphinstance_vertex:cv,morphcolor_vertex:uv,morphnormal_vertex:hv,morphtarget_pars_vertex:dv,morphtarget_vertex:fv,normal_fragment_begin:pv,normal_fragment_maps:mv,normal_pars_fragment:gv,normal_pars_vertex:vv,normal_vertex:xv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Mv,clearcoat_normal_fragment_maps:wv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:Ev,opaque_fragment:_v,packing:Sv,premultiplied_alpha_fragment:Tv,project_vertex:Av,dithering_fragment:Rv,dithering_pars_fragment:Cv,roughnessmap_fragment:Pv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Nv,skinbase_vertex:Fv,skinning_pars_vertex:zv,skinning_vertex:Bv,skinnormal_vertex:Ov,specularmap_fragment:Hv,specularmap_pars_fragment:kv,tonemapping_fragment:Vv,tonemapping_pars_fragment:Wv,transmission_fragment:Gv,transmission_pars_fragment:Xv,uv_pars_fragment:qv,uv_pars_vertex:Yv,uv_vertex:Kv,worldpos_vertex:Zv,background_vert:Jv,background_frag:jv,backgroundCube_vert:Qv,backgroundCube_frag:$v,cube_vert:ex,cube_frag:tx,depth_vert:nx,depth_frag:ix,distanceRGBA_vert:rx,distanceRGBA_frag:sx,equirect_vert:ox,equirect_frag:ax,linedashed_vert:lx,linedashed_frag:cx,meshbasic_vert:ux,meshbasic_frag:hx,meshlambert_vert:dx,meshlambert_frag:fx,meshmatcap_vert:px,meshmatcap_frag:mx,meshnormal_vert:gx,meshnormal_frag:vx,meshphong_vert:xx,meshphong_frag:yx,meshphysical_vert:Mx,meshphysical_frag:wx,meshtoon_vert:bx,meshtoon_frag:Ex,points_vert:_x,points_frag:Sx,shadow_vert:Tx,shadow_frag:Ax,sprite_vert:Rx,sprite_frag:Cx},_e={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Zi={basic:{uniforms:Zn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Zn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ce(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Zn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Zn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Zn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ce(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Zn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Zn([_e.points,_e.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Zn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Zn([_e.common,_e.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Zn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Zn([_e.sprite,_e.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Zn([_e.common,_e.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Zn([_e.lights,_e.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Zi.physical={uniforms:Zn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};tl={r:0,b:0,g:0},is=new Mn,Px=new Ke;ho=class extends Rl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qs=4,pf=[.125,.215,.35,.446,.526,.582],as=20,Zc=new ho,mf=new ce,Jc=null,jc=0,Qc=0,$c=!1,ss=(1+Math.sqrt(5))/2,qs=1/ss,gf=[new S(-ss,qs,0),new S(ss,qs,0),new S(-qs,0,ss),new S(qs,0,ss),new S(0,ss,-qs),new S(0,ss,qs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,jc,Qc),this._renderer.xr.enabled=$c,e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Jt,format:pi,colorSpace:bo,depthBuffer:!1},r=vf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vf(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zx(s)),this._blurMaterial=Bx(s,e,t)}return r}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Zc)}_sceneToCubeUV(e,t,n,r){let a=new xn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(mf),u.toneMapping=zr,u.autoClear=!1;let f=new Jn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new de(new Wn,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(mf),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let w=this._cubeSize;nl(r,M*w,p>2?w:0,w,w),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ro||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;nl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gf[(r-s-1)%gf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new de(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*as-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):as;m>as&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let p=[],M=0;for(let _=0;_<as;++_){let E=_/v,b=Math.exp(-E*E/2);p.push(b),_===0?M+=b:_<m&&(M+=2*b)}for(let _=0;_<p.length;_++)p[_]=p[_]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;let x=this._sizeLods[r],A=3*x*(r>w-Qs?r-w+Qs:0),R=4*(this._cubeSize-x);nl(t,A,R,3*x,2*x),l.setRenderTarget(t),l.render(d,Zc)}};Cl=class extends Fn{constructor(e,t,n,r,s,o,a,l,c,u=eo){if(u!==eo&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===eo&&(n=cs),n===void 0&&u===ao&&(n=oo),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ap=new Fn,Mf=new Cl(1,1),Rp=new Sl,Cp=new Ju,Pp=new uo,wf=[],bf=[],Ef=new Float32Array(16),_f=new Float32Array(9),Sf=new Float32Array(4);ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hy(t.type)}},Qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Iy(t.type)}},$u=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},eu=/(\w+)(\])?(\[|\.)?/g;no=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ly(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};Dy=37297,Uy=0;Rf=new pt;il=new S;Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;Gy=new Map;qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;e1=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nh(e),t.set(e,n)),n}},nh=class{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}};a1=0;ih=class extends er{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rh=class extends er{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
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
}`;p1={[uu]:hu,[du]:mu,[fu]:gu,[io]:pu,[hu]:uu,[mu]:du,[gu]:fu,[pu]:io};sh=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vn=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},y1={type:"move"},ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Fn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new me({vertexShader:M1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Br{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,v=new oh,m=t.getContextAttributes(),p=null,M=null,w=[],x=[],A=new oe,R=null,_=new xn;_.viewport=new Je;let E=new xn;E.viewport=new Je;let b=[_,E],y=new sh,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=w[q];return te===void 0&&(te=new ta,w[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=w[q];return te===void 0&&(te=new ta,w[q]=te),te.getGripSpace()},this.getHand=function(q){let te=w[q];return te===void 0&&(te=new ta,w[q]=te),te.getHandSpace()};function I(q){let te=x.indexOf(q.inputSource);if(te===-1)return;let ue=w[te];ue!==void 0&&(ue.update(q.inputSource,q.frame,c||o),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",H);for(let q=0;q<w.length;q++){let te=x[q];te!==null&&(x[q]=null,w[q].disconnect(te))}C=null,U=null,v.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,M=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",D),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Zt(f.framebufferWidth,f.framebufferHeight,{format:pi,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ue=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ao:eo,ue=m.stencil?oo:cs);let se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Zt(h.textureWidth,h.textureHeight,{format:pi,type:yr,depthTexture:new Cl(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Me.setContext(r),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(q){for(let te=0;te<q.removed.length;te++){let ue=q.removed[te],ee=x.indexOf(ue);ee>=0&&(x[ee]=null,w[ee].disconnect(ue))}for(let te=0;te<q.added.length;te++){let ue=q.added[te],ee=x.indexOf(ue);if(ee===-1){for(let Le=0;Le<w.length;Le++)if(Le>=x.length){x.push(ue),ee=Le;break}else if(x[Le]===null){x[Le]=ue,ee=Le;break}if(ee===-1)break}let se=w[ee];se&&se.connect(ue)}}let F=new S,V=new S;function N(q,te,ue){F.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(ue.matrixWorld);let ee=F.distanceTo(V),se=te.projectionMatrix.elements,Le=ue.projectionMatrix.elements,Ne=se[14]/(se[10]-1),it=se[14]/(se[10]+1),le=(se[9]+1)/se[5],je=(se[9]-1)/se[5],B=(se[8]-1)/se[0],Ze=(Le[8]+1)/Le[0],Se=Ne*B,Fe=Ne*Ze,ve=ee/(-B+Ze),Ye=ve*-B;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ye),q.translateZ(ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),se[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ae=Ne+ve,L=it+ve,T=Se-Ye,X=Fe+(ee-Ye),K=le*it/L*Ae,ie=je*it/L*Ae;q.projectionMatrix.makePerspective(T,X,K,ie,Ae,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function z(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ue=q.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),y.near=E.near=_.near=te,y.far=E.far=_.far=ue,(C!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,U=y.far),_.layers.mask=q.layers.mask|2,E.layers.mask=q.layers.mask|4,y.layers.mask=_.layers.mask|E.layers.mask;let ee=q.parent,se=y.cameras;z(y,ee);for(let Le=0;Le<se.length;Le++)z(se[Le],ee);se.length===2?N(y,_,E):y.projectionMatrix.copy(_.projectionMatrix),J(q,y,ee)};function J(q,te,ue){ue===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let re=null;function fe(q,te){if(u=te.getViewerPose(c||o),g=te,u!==null){let ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ee=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let Le=0;Le<ue.length;Le++){let Ne=ue[Le],it=null;if(f!==null)it=f.getViewport(Ne);else{let je=d.getViewSubImage(h,Ne);it=je.viewport,Le===0&&(e.setRenderTargetTextures(M,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(M))}let le=b[Le];le===void 0&&(le=new xn,le.layers.enable(Le),le.viewport=new Je,b[Le]=le),le.matrix.fromArray(Ne.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ne.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(it.x,it.y,it.width,it.height),Le===0&&(y.matrix.copy(le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ee===!0&&y.cameras.push(le)}let se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){let Le=d.getDepthInformation(ue[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,r.renderState)}}for(let ue=0;ue<w.length;ue++){let ee=x[ue],se=w[ue];ee!==null&&se!==void 0&&se.update(ee,te,c||o)}re&&re(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Me=new Tp;Me.setAnimationLoop(fe),this.setAnimationLoop=function(q){re=q},this.dispose=function(){}}},rs=new Mn,b1=new Ke;Pl=class{constructor(e={}){let{canvas:t=Cm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=zr,this.toneMappingExposure=1;let x=this,A=!1,R=0,_=0,E=null,b=-1,y=null,C=new Je,U=new Je,I=null,D=new ce(0),H=0,F=t.width,V=t.height,N=1,z=null,J=null,re=new Je(0,0,F,V),fe=new Je(0,0,F,V),Me=!1,q=new hs,te=!1,ue=!1,ee=new Ke,se=new Ke,Le=new S,Ne=new Je,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function je(){return E===null?N:1}let B=n;function Ze(P,W){return t.getContext(P,W)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ph}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){let W="webgl2";if(B=Ze(W,P),B===null)throw Ze(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Se,Fe,ve,Ye,Ae,L,T,X,K,ie,ne,Ie,xe,Pe,st,he,Re,Xe,et,Ue,ft,ot,Tt,k;function be(){Se=new Hx(B),Se.init(),ot=new x1(B,Se),Fe=new Ux(B,Se,e,ot),ve=new m1(B,Se),Fe.reverseDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),Ye=new Wx(B),Ae=new n1,L=new v1(B,Se,ve,Ae,Fe,ot,Ye),T=new Fx(x),X=new Ox(x),K=new Jm(B),Tt=new Lx(B,K),ie=new kx(B,K,Ye,Tt),ne=new Xx(B,ie,K,Ye),et=new Gx(B,Fe,L),he=new Nx(Ae),Ie=new t1(x,T,X,Se,Fe,Tt,he),xe=new E1(x,Ae),Pe=new r1,st=new u1(Se),Xe=new Ix(x,T,X,ve,ne,f,l),Re=new f1(x,ne,Fe),k=new _1(B,Ye,Fe,ve),Ue=new Dx(B,Se,Ye),ft=new Vx(B,Se,Ye),Ye.programs=Ie.programs,x.capabilities=Fe,x.extensions=Se,x.properties=Ae,x.renderLists=Pe,x.shadowMap=Re,x.state=ve,x.info=Ye}be();let $=new ah(x,B);this.xr=$,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=Se.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Se.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(P){P!==void 0&&(N=P,this.setSize(F,V,!1))},this.getSize=function(P){return P.set(F,V)},this.setSize=function(P,W,Y=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,V=W,t.width=Math.floor(P*N),t.height=Math.floor(W*N),Y===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(F*N,V*N).floor()},this.setDrawingBufferSize=function(P,W,Y){F=P,V=W,N=Y,t.width=Math.floor(P*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(re)},this.setViewport=function(P,W,Y,Z){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,W,Y,Z),ve.viewport(C.copy(re).multiplyScalar(N).round())},this.getScissor=function(P){return P.copy(fe)},this.setScissor=function(P,W,Y,Z){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,W,Y,Z),ve.scissor(U.copy(fe).multiplyScalar(N).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(P){ve.setScissorTest(Me=P)},this.setOpaqueSort=function(P){z=P},this.setTransparentSort=function(P){J=P},this.getClearColor=function(P){return P.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(P=!0,W=!0,Y=!0){let Z=0;if(P){let O=!1;if(E!==null){let pe=E.texture.format;O=pe===Vh||pe===kh||pe===Hh}if(O){let pe=E.texture.type,we=pe===yr||pe===cs||pe===sa||pe===oo||pe===zh||pe===Bh,ze=Xe.getClearColor(),Be=Xe.getClearAlpha(),Qe=ze.r,We=ze.g,Ce=ze.b;we?(g[0]=Qe,g[1]=We,g[2]=Ce,g[3]=Be,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Qe,v[1]=We,v[2]=Ce,v[3]=Be,B.clearBufferiv(B.COLOR,0,v))}else Z|=B.COLOR_BUFFER_BIT}W&&(Z|=B.DEPTH_BUFFER_BIT),Y&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Pe.dispose(),st.dispose(),Ae.dispose(),T.dispose(),X.dispose(),ne.dispose(),Tt.dispose(),k.dispose(),Ie.dispose(),$.dispose(),$.removeEventListener("sessionstart",Xn),$.removeEventListener("sessionend",_r),ai.stop()};function ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let P=Ye.autoReset,W=Re.enabled,Y=Re.autoUpdate,Z=Re.needsUpdate,O=Re.type;be(),Ye.autoReset=P,Re.enabled=W,Re.autoUpdate=Y,Re.needsUpdate=Z,Re.type=O}function ge(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function rt(P){let W=P.target;W.removeEventListener("dispose",rt),xt(W)}function xt(P){$e(P),Ae.remove(P)}function $e(P){let W=Ae.get(P).programs;W!==void 0&&(W.forEach(function(Y){Ie.releaseProgram(Y)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Y,Z,O,pe){W===null&&(W=it);let we=O.isMesh&&O.matrixWorld.determinant()<0,ze=ws(P,W,Y,Z,O);ve.setMaterial(Z,we);let Be=Y.index,Qe=1;if(Z.wireframe===!0){if(Be=ie.getWireframeAttribute(Y),Be===void 0)return;Qe=2}let We=Y.drawRange,Ce=Y.attributes.position,bt=We.start*Qe,zt=(We.start+We.count)*Qe;pe!==null&&(bt=Math.max(bt,pe.start*Qe),zt=Math.min(zt,(pe.start+pe.count)*Qe)),Be!==null?(bt=Math.max(bt,0),zt=Math.min(zt,Be.count)):Ce!=null&&(bt=Math.max(bt,0),zt=Math.min(zt,Ce.count));let Nt=zt-bt;if(Nt<0||Nt===1/0)return;Tt.setup(O,Z,ze,Y,Be);let qn,at=Ue;if(Be!==null&&(qn=K.get(Be),at=ft,at.setIndex(qn)),O.isMesh)Z.wireframe===!0?(ve.setLineWidth(Z.wireframeLinewidth*je()),at.setMode(B.LINES)):at.setMode(B.TRIANGLES);else if(O.isLine){let He=Z.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*je()),O.isLineSegments?at.setMode(B.LINES):O.isLineLoop?at.setMode(B.LINE_LOOP):at.setMode(B.LINE_STRIP)}else O.isPoints?at.setMode(B.POINTS):O.isSprite&&at.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let He=O._multiDrawStarts,Ci=O._multiDrawCounts,Et=O._multiDrawCount,ei=Be?K.get(Be).bytesPerElement:1,Pi=Ae.get(Z).currentProgram.getUniforms();for(let zn=0;zn<Et;zn++)Pi.setValue(B,"_gl_DrawID",zn),at.render(He[zn]/ei,Ci[zn])}else if(O.isInstancedMesh)at.renderInstances(bt,Nt,O.count);else if(Y.isInstancedBufferGeometry){let He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ci=Math.min(Y.instanceCount,He);at.renderInstances(bt,Nt,Ci)}else at.render(bt,Nt)};function yt(P,W,Y){P.transparent===!0&&P.side===gt&&P.forceSinglePass===!1?(P.side=Kt,P.needsUpdate=!0,Sr(P,W,Y),P.side=$i,P.needsUpdate=!0,Sr(P,W,Y),P.side=gt):Sr(P,W,Y)}this.compile=function(P,W,Y=null){Y===null&&(Y=P),p=st.get(Y),p.init(W),w.push(p),Y.traverseVisible(function(O){O.isLight&&O.layers.test(W.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),P!==Y&&P.traverseVisible(function(O){O.isLight&&O.layers.test(W.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let Z=new Set;return P.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let pe=O.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){let ze=pe[we];yt(ze,Y,O),Z.add(ze)}else yt(pe,Y,O),Z.add(pe)}),w.pop(),p=null,Z},this.compileAsync=function(P,W,Y=null){let Z=this.compile(P,W,Y);return new Promise(O=>{function pe(){if(Z.forEach(function(we){Ae.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){O(P);return}setTimeout(pe,10)}Se.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let $n=null;function vi(P){$n&&$n(P)}function Xn(){ai.stop()}function _r(){ai.start()}let ai=new Tp;ai.setAnimationLoop(vi),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(P){$n=P,$.setAnimationLoop(P),P===null?ai.stop():ai.start()},$.addEventListener("sessionstart",Xn),$.addEventListener("sessionend",_r),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(W),W=$.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,W,E),p=st.get(P,w.length),p.init(W),w.push(p),se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(se),ue=this.localClippingEnabled,te=he.init(this.clippingPlanes,ue),m=Pe.get(P,M.length),m.init(),M.push(m),$.enabled===!0&&$.isPresenting===!0){let pe=x.xr.getDepthSensingMesh();pe!==null&&Io(pe,W,-1/0,x.sortObjects)}Io(P,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(z,J),le=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,le&&Xe.addToRenderList(m,P),this.info.render.frame++,te===!0&&he.beginShadows();let Y=p.state.shadowsArray;Re.render(Y,P,W),te===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,O=m.transmissive;if(p.setupLights(),W.isArrayCamera){let pe=W.cameras;if(O.length>0)for(let we=0,ze=pe.length;we<ze;we++){let Be=pe[we];ys(Z,O,P,Be)}le&&Xe.render(P);for(let we=0,ze=pe.length;we<ze;we++){let Be=pe[we];Ia(m,P,Be,Be.viewport)}}else O.length>0&&ys(Z,O,P,W),le&&Xe.render(P),Ia(m,P,W);E!==null&&(L.updateMultisampleRenderTarget(E),L.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(x,P,W),Tt.resetDefaultState(),b=-1,y=null,w.pop(),w.length>0?(p=w[w.length-1],te===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Io(P,W,Y,Z){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){Z&&Ne.setFromMatrixPosition(P.matrixWorld).applyMatrix4(se);let we=ne.update(P),ze=P.material;ze.visible&&m.push(P,we,ze,Y,Ne.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){let we=ne.update(P),ze=P.material;if(Z&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ne.copy(P.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ne.copy(we.boundingSphere.center)),Ne.applyMatrix4(P.matrixWorld).applyMatrix4(se)),Array.isArray(ze)){let Be=we.groups;for(let Qe=0,We=Be.length;Qe<We;Qe++){let Ce=Be[Qe],bt=ze[Ce.materialIndex];bt&&bt.visible&&m.push(P,we,bt,Y,Ne.z,Ce)}}else ze.visible&&m.push(P,we,ze,Y,Ne.z,null)}}let pe=P.children;for(let we=0,ze=pe.length;we<ze;we++)Io(pe[we],W,Y,Z)}function Ia(P,W,Y,Z){let O=P.opaque,pe=P.transmissive,we=P.transparent;p.setupLightsView(Y),te===!0&&he.setGlobalState(x.clippingPlanes,Y),Z&&ve.viewport(C.copy(Z)),O.length>0&&Ms(O,W,Y),pe.length>0&&Ms(pe,W,Y),we.length>0&&Ms(we,W,Y),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function ys(P,W,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Zt(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Jt:yr,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));let pe=p.state.transmissionRenderTarget[Z.id],we=Z.viewport||C;pe.setSize(we.z,we.w);let ze=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(D),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),le&&Xe.render(Y);let Be=x.toneMapping;x.toneMapping=zr;let Qe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),te===!0&&he.setGlobalState(x.clippingPlanes,Z),Ms(P,Y,Z),L.updateMultisampleRenderTarget(pe),L.updateRenderTargetMipmap(pe),Se.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ce=0,bt=W.length;Ce<bt;Ce++){let zt=W[Ce],Nt=zt.object,qn=zt.geometry,at=zt.material,He=zt.group;if(at.side===gt&&Nt.layers.test(Z.layers)){let Ci=at.side;at.side=Kt,at.needsUpdate=!0,Lo(Nt,Y,Z,qn,at,He),at.side=Ci,at.needsUpdate=!0,We=!0}}We===!0&&(L.updateMultisampleRenderTarget(pe),L.updateRenderTargetMipmap(pe))}x.setRenderTarget(ze),x.setClearColor(D,H),Qe!==void 0&&(Z.viewport=Qe),x.toneMapping=Be}function Ms(P,W,Y){let Z=W.isScene===!0?W.overrideMaterial:null;for(let O=0,pe=P.length;O<pe;O++){let we=P[O],ze=we.object,Be=we.geometry,Qe=Z===null?we.material:Z,We=we.group;ze.layers.test(Y.layers)&&Lo(ze,W,Y,Be,Qe,We)}}function Lo(P,W,Y,Z,O,pe){P.onBeforeRender(x,W,Y,Z,O,pe),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),O.onBeforeRender(x,W,Y,Z,P,pe),O.transparent===!0&&O.side===gt&&O.forceSinglePass===!1?(O.side=Kt,O.needsUpdate=!0,x.renderBufferDirect(Y,W,Z,O,P,pe),O.side=$i,O.needsUpdate=!0,x.renderBufferDirect(Y,W,Z,O,P,pe),O.side=gt):x.renderBufferDirect(Y,W,Z,O,P,pe),P.onAfterRender(x,W,Y,Z,O,pe)}function Sr(P,W,Y){W.isScene!==!0&&(W=it);let Z=Ae.get(P),O=p.state.lights,pe=p.state.shadowsArray,we=O.state.version,ze=Ie.getParameters(P,O.state,pe,W,Y),Be=Ie.getProgramCacheKey(ze),Qe=Z.programs;Z.environment=P.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(P.isMeshStandardMaterial?X:T).get(P.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,Qe===void 0&&(P.addEventListener("dispose",rt),Qe=new Map,Z.programs=Qe);let We=Qe.get(Be);if(We!==void 0){if(Z.currentProgram===We&&Z.lightsStateVersion===we)return Kr(P,ze),We}else ze.uniforms=Ie.getUniforms(P),P.onBeforeCompile(ze,x),We=Ie.acquireProgram(ze,Be),Qe.set(Be,We),Z.uniforms=ze.uniforms;let Ce=Z.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ce.clippingPlanes=he.uniform),Kr(P,ze),Z.needsLights=La(P),Z.lightsStateVersion=we,Z.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),Z.currentProgram=We,Z.uniformsList=null,We}function Do(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=no.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Kr(P,W){let Y=Ae.get(P);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function ws(P,W,Y,Z,O){W.isScene!==!0&&(W=it),L.resetTextureUnits();let pe=W.fog,we=Z.isMeshStandardMaterial?W.environment:null,ze=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:bo,Be=(Z.isMeshStandardMaterial?X:T).get(Z.envMap||we),Qe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,We=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ce=!!Y.morphAttributes.position,bt=!!Y.morphAttributes.normal,zt=!!Y.morphAttributes.color,Nt=zr;Z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Nt=x.toneMapping);let qn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,at=qn!==void 0?qn.length:0,He=Ae.get(Z),Ci=p.state.lights;if(te===!0&&(ue===!0||P!==y)){let Yn=P===y&&Z.id===b;he.setState(Z,P,Yn)}let Et=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Ci.state.version||He.outputColorSpace!==ze||O.isBatchedMesh&&He.batching===!1||!O.isBatchedMesh&&He.batching===!0||O.isBatchedMesh&&He.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&He.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&He.instancing===!1||!O.isInstancedMesh&&He.instancing===!0||O.isSkinnedMesh&&He.skinning===!1||!O.isSkinnedMesh&&He.skinning===!0||O.isInstancedMesh&&He.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&He.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&He.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&He.instancingMorph===!1&&O.morphTexture!==null||He.envMap!==Be||Z.fog===!0&&He.fog!==pe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==he.numPlanes||He.numIntersection!==he.numIntersection)||He.vertexAlphas!==Qe||He.vertexTangents!==We||He.morphTargets!==Ce||He.morphNormals!==bt||He.morphColors!==zt||He.toneMapping!==Nt||He.morphTargetsCount!==at)&&(Et=!0):(Et=!0,He.__version=Z.version);let ei=He.currentProgram;Et===!0&&(ei=Sr(Z,W,O));let Pi=!1,zn=!1,Tr=!1,Bt=ei.getUniforms(),li=He.uniforms;if(ve.useProgram(ei.program)&&(Pi=!0,zn=!0,Tr=!0),Z.id!==b&&(b=Z.id,zn=!0),Pi||y!==P){ve.buffers.depth.getReversed()?(ee.copy(P.projectionMatrix),Im(ee),Lm(ee),Bt.setValue(B,"projectionMatrix",ee)):Bt.setValue(B,"projectionMatrix",P.projectionMatrix),Bt.setValue(B,"viewMatrix",P.matrixWorldInverse);let lt=Bt.map.cameraPosition;lt!==void 0&&lt.setValue(B,Le.setFromMatrixPosition(P.matrixWorld)),Fe.logarithmicDepthBuffer&&Bt.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Bt.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,zn=!0,Tr=!0)}if(O.isSkinnedMesh){Bt.setOptional(B,O,"bindMatrix"),Bt.setOptional(B,O,"bindMatrixInverse");let Yn=O.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Bt.setValue(B,"boneTexture",Yn.boneTexture,L))}O.isBatchedMesh&&(Bt.setOptional(B,O,"batchingTexture"),Bt.setValue(B,"batchingTexture",O._matricesTexture,L),Bt.setOptional(B,O,"batchingIdTexture"),Bt.setValue(B,"batchingIdTexture",O._indirectTexture,L),Bt.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&Bt.setValue(B,"batchingColorTexture",O._colorsTexture,L));let Ar=Y.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0)&&et.update(O,Y,ei),(zn||He.receiveShadow!==O.receiveShadow)&&(He.receiveShadow=O.receiveShadow,Bt.setValue(B,"receiveShadow",O.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(li.envMap.value=Be,li.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(li.envMapIntensity.value=W.environmentIntensity),zn&&(Bt.setValue(B,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&dc(li,Tr),pe&&Z.fog===!0&&xe.refreshFogUniforms(li,pe),xe.refreshMaterialUniforms(li,Z,N,V,p.state.transmissionRenderTarget[P.id]),no.upload(B,Do(He),li,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(no.upload(B,Do(He),li,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Bt.setValue(B,"center",O.center),Bt.setValue(B,"modelViewMatrix",O.modelViewMatrix),Bt.setValue(B,"normalMatrix",O.normalMatrix),Bt.setValue(B,"modelMatrix",O.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Yn=Z.uniformsGroups;for(let lt=0,Bn=Yn.length;lt<Bn;lt++){let Uo=Yn[lt];k.update(Uo,ei),k.bind(Uo,ei)}}return ei}function dc(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function La(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,W,Y){Ae.get(P.texture).__webglTexture=W,Ae.get(P.depthTexture).__webglTexture=Y;let Z=Ae.get(P);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){let Y=Ae.get(P);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Y=0){E=P,R=W,_=Y;let Z=!0,O=null,pe=!1,we=!1;if(P){let Be=Ae.get(P);if(Be.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1;else if(Be.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Be.__hasExternalTextures)L.rebindTextures(P,Ae.get(P.texture).__webglTexture,Ae.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ce=P.depthTexture;if(Be.__boundDepthTexture!==Ce){if(Ce!==null&&Ae.has(Ce)&&(P.width!==Ce.image.width||P.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}let Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(we=!0);let We=Ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(We[W])?O=We[W][Y]:O=We[W],pe=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?O=Ae.get(P).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[Y]:O=We,C.copy(P.viewport),U.copy(P.scissor),I=P.scissorTest}else C.copy(re).multiplyScalar(N).floor(),U.copy(fe).multiplyScalar(N).floor(),I=Me;if(ve.bindFramebuffer(B.FRAMEBUFFER,O)&&Z&&ve.drawBuffers(P,O),ve.viewport(C),ve.scissor(U),ve.setScissorTest(I),pe){let Be=Ae.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,Y)}else if(we){let Be=Ae.get(P.texture),Qe=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,Y||0,Qe)}b=-1},this.readRenderTargetPixels=function(P,W,Y,Z,O,pe,we){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze){ve.bindFramebuffer(B.FRAMEBUFFER,ze);try{let Be=P.texture,Qe=Be.format,We=Be.type;if(!Fe.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-Z&&Y>=0&&Y<=P.height-O&&B.readPixels(W,Y,Z,O,ot.convert(Qe),ot.convert(We),pe)}finally{let Be=E!==null?Ae.get(E).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(P,W,Y,Z,O,pe,we){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(ze=ze[we]),ze){let Be=P.texture,Qe=Be.format,We=Be.type;if(!Fe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-Z&&Y>=0&&Y<=P.height-O){ve.bindFramebuffer(B.FRAMEBUFFER,ze);let Ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(W,Y,Z,O,ot.convert(Qe),ot.convert(We),0);let bt=E!==null?Ae.get(E).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,bt);let zt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Pm(B,zt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.deleteBuffer(Ce),B.deleteSync(zt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,Y=0){P.isTexture!==!0&&(jo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);let Z=Math.pow(2,-Y),O=Math.floor(P.image.width*Z),pe=Math.floor(P.image.height*Z),we=W!==null?W.x:0,ze=W!==null?W.y:0;L.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,we,ze,O,pe),ve.unbindTexture()},this.copyTextureToTexture=function(P,W,Y=null,Z=null,O=0){P.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1],W=arguments[2],O=arguments[3]||0,Y=null);let pe,we,ze,Be,Qe,We,Ce,bt,zt,Nt=P.isCompressedTexture?P.mipmaps[O]:P.image;Y!==null?(pe=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,ze=Y.isBox3?Y.max.z-Y.min.z:1,Be=Y.min.x,Qe=Y.min.y,We=Y.isBox3?Y.min.z:0):(pe=Nt.width,we=Nt.height,ze=Nt.depth||1,Be=0,Qe=0,We=0),Z!==null?(Ce=Z.x,bt=Z.y,zt=Z.z):(Ce=0,bt=0,zt=0);let qn=ot.convert(W.format),at=ot.convert(W.type),He;W.isData3DTexture?(L.setTexture3D(W,0),He=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(L.setTexture2DArray(W,0),He=B.TEXTURE_2D_ARRAY):(L.setTexture2D(W,0),He=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let Ci=B.getParameter(B.UNPACK_ROW_LENGTH),Et=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ei=B.getParameter(B.UNPACK_SKIP_PIXELS),Pi=B.getParameter(B.UNPACK_SKIP_ROWS),zn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,We);let Tr=P.isDataArrayTexture||P.isData3DTexture,Bt=W.isDataArrayTexture||W.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let li=Ae.get(P),Ar=Ae.get(W),Yn=Ae.get(li.__renderTarget),lt=Ae.get(Ar.__renderTarget);ve.bindFramebuffer(B.READ_FRAMEBUFFER,Yn.__webglFramebuffer),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Bn=0;Bn<ze;Bn++)Tr&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ae.get(P).__webglTexture,O,We+Bn),P.isDepthTexture?(Bt&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ae.get(W).__webglTexture,O,zt+Bn),B.blitFramebuffer(Be,Qe,pe,we,Ce,bt,pe,we,B.DEPTH_BUFFER_BIT,B.NEAREST)):Bt?B.copyTexSubImage3D(He,O,Ce,bt,zt+Bn,Be,Qe,pe,we):B.copyTexSubImage2D(He,O,Ce,bt,zt+Bn,Be,Qe,pe,we);ve.bindFramebuffer(B.READ_FRAMEBUFFER,null),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Bt?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(He,O,Ce,bt,zt,pe,we,ze,qn,at,Nt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(He,O,Ce,bt,zt,pe,we,ze,qn,Nt.data):B.texSubImage3D(He,O,Ce,bt,zt,pe,we,ze,qn,at,Nt):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,Ce,bt,pe,we,qn,at,Nt.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,Ce,bt,Nt.width,Nt.height,qn,Nt.data):B.texSubImage2D(B.TEXTURE_2D,O,Ce,bt,pe,we,qn,at,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ci),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ei),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,zn),O===0&&W.generateMipmaps&&B.generateMipmap(He),ve.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Y=null,Z=null,O=0){return P.isTexture!==!0&&(jo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,P=arguments[2],W=arguments[3],O=arguments[4]||0),jo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,W,Y,Z,O)},this.initRenderTarget=function(P){Ae.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),ve.unbindTexture()},this.resetState=function(){R=0,_=0,E=null,ve.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}},Oi=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ca=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yu,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kn=new S,po=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ua=class extends er{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Go=new S,Ks=new S,Zs=new S,Js=new oe,Xo=new oe,Ip=new Ke,rl=new S,qo=new S,sl=new S,Bf=new oe,tu=new oe,Of=new oe,Il=class extends hn{constructor(e=new ua){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new Ve;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ca(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new po(n,3,0,!1)),Ys.setAttribute("uv",new po(n,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Zs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;ol(rl.set(-.5,-.5,0),Zs,o,Ks,r,s),ol(qo.set(.5,-.5,0),Zs,o,Ks,r,s),ol(sl.set(.5,.5,0),Zs,o,Ks,r,s),Bf.set(0,0),tu.set(1,0),Of.set(1,1);let a=e.ray.intersectTriangle(rl,qo,sl,!1,Go);if(a===null&&(ol(qo.set(-.5,.5,0),Zs,o,Ks,r,s),tu.set(0,1),a=e.ray.intersectTriangle(rl,sl,qo,!1,Go),a===null))return;let l=e.ray.origin.distanceTo(Go);l<e.near||l>e.far||t.push({distance:l,point:Go.clone(),uv:Nr.getInterpolation(Go,rl,qo,sl,Bf,tu,Of,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};ds=class extends Fn{constructor(e=null,t=1,n=1,r,s,o,a,l,c=mi,u=mi,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dt=class extends qe{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new Ke,Hf=new Ke,al=[],kf=new bi,S1=new Ke,Yo=new de,Ko=new yn,dn=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dt(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,S1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),kf.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(kf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Ko.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Yo.geometry=this.geometry,Yo.material=this.material,Yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(n),e.ray.intersectsSphere(Ko)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,js),Hf.multiplyMatrices(n,js),Yo.matrixWorld=Hf,Yo.raycast(e,al);for(let o=0,a=al.length;o<a;o++){let l=al[o];l.instanceId=s,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ds(new Float32Array(r*this.count),r,this.count,Oh,Ji));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},mo=class extends er{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ll=new S,Dl=new S,Vf=new Ke,Zo=new lo,ll=new yn,nu=new S,Wf=new S,ha=class extends hn{constructor(e=new Ve,t=new mo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ll.fromBufferAttribute(t,r-1),Dl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ll.distanceTo(Dl);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;Vf.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(Vf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),M=u.getX(v+1),w=cl(this,e,Zo,l,p,M);w&&t.push(w)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=cl(this,e,Zo,l,v,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=cl(this,e,Zo,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=cl(this,e,Zo,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};Gf=new S,Xf=new S,go=class extends ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Gf.fromBufferAttribute(t,r),Xf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Gf.distanceTo(Xf);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends er{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qf=new Ke,lh=new lo,ul=new yn,hl=new S,$t=class extends hn{constructor(e=new Ve,t=new da){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;qf.copy(r).invert(),lh.copy(e.ray).applyMatrix4(qf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,v=f;g<v;g++){let m=c.getX(g);hl.fromBufferAttribute(d,m),Yf(hl,m,l,r,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,v=f;g<v;g++)hl.fromBufferAttribute(d,g),Yf(hl,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};Hi=class extends Fn{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],h=n[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new oe:new S);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,r=[],s=[],o=[],a=new S,l=new Ke;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new S)}s[0]=new S,o[0]=new S;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pn(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Pn(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fa=class extends Ei{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ch=class extends fa{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};dl=new S,iu=new qh,ru=new qh,su=new qh,vo=class extends Ei{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new S){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(dl.subVectors(r[0],r[1]).add(r[0]),c=dl);let d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=dl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),iu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,m),ru.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,m),su.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(iu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ru.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),su.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(iu.calc(l),ru.calc(l),su.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ul=class extends Ei{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ia(e,r.x,s.x,o.x,a.x),ia(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uh=class extends Ei{constructor(e=new S,t=new S,n=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ia(e,r.x,s.x,o.x,a.x),ia(e,r.y,s.y,o.y,a.y),ia(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nl=class extends Ei{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hh=class extends Ei{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fl=class extends Ei{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(na(e,r.x,s.x,o.x),na(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dh=class extends Ei{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(na(e,r.x,s.x,o.x),na(e,r.y,s.y,o.y),na(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Kf(a,l.x,c.x,u.x,d.x),Kf(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new oe().fromArray(r))}return this}},Zf=Object.freeze({__proto__:null,ArcCurve:ch,CatmullRomCurve3:vo,CubicBezierCurve:Ul,CubicBezierCurve3:uh,EllipseCurve:fa,LineCurve:Nl,LineCurve3:hh,QuadraticBezierCurve:Fl,QuadraticBezierCurve3:dh,SplineCurve:zl}),fh=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Zf[r.type]().fromJSON(r))}return this}},Bl=class extends fh{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nl(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Fl(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new Ul(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){let c=new fa(e,t,n,r,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},tr=class i extends Ve{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Pn(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],u=1/t,d=new S,h=new oe,f=new S,g=new S,v=new S,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){let w=n+M*u*r,x=Math.sin(w),A=Math.cos(w);for(let R=0;R<=e.length-1;R++){d.x=e[R].x*x,d.y=e[R].y,d.z=e[R].x*A,o.push(d.x,d.y,d.z),h.x=M/t,h.y=R/(e.length-1),a.push(h.x,h.y);let _=l[3*R+0]*x,E=l[3*R+1],b=l[3*R+0]*A;c.push(_,E,b)}}for(let M=0;M<t;M++)for(let w=0;w<e.length-1;w++){let x=w+M*e.length,A=x,R=x+e.length,_=x+e.length+1,E=x+1;s.push(A,R,E),s.push(_,E,R)}this.setIndex(s),this.setAttribute("position",new Ge(o,3)),this.setAttribute("uv",new Ge(a,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},xo=class i extends Ve{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new S,u=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nr=class i extends Ve{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],d=[],h=[],f=[],g=0,v=[],m=n/2,p=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(f,2));function M(){let x=new S,A=new S,R=0,_=(t-e)/n;for(let E=0;E<=s;E++){let b=[],y=E/s,C=y*(t-e)+e;for(let U=0;U<=r;U++){let I=U/r,D=I*l+a,H=Math.sin(D),F=Math.cos(D);A.x=C*H,A.y=-y*n+m,A.z=C*F,d.push(A.x,A.y,A.z),x.set(H,_,F).normalize(),h.push(x.x,x.y,x.z),f.push(I,1-y),b.push(g++)}v.push(b)}for(let E=0;E<r;E++)for(let b=0;b<s;b++){let y=v[b][E],C=v[b+1][E],U=v[b+1][E+1],I=v[b][E+1];(e>0||b!==0)&&(u.push(y,C,I),R+=3),(t>0||b!==s-1)&&(u.push(C,U,I),R+=3)}c.addGroup(p,R,0),p+=R}function w(x){let A=g,R=new oe,_=new S,E=0,b=x===!0?e:t,y=x===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,m*y,0),h.push(0,y,0),f.push(.5,.5),g++;let C=g;for(let U=0;U<=r;U++){let D=U/r*l+a,H=Math.cos(D),F=Math.sin(D);_.x=b*F,_.y=m*y,_.z=b*H,d.push(_.x,_.y,_.z),h.push(0,y,0),R.x=H*.5+.5,R.y=F*.5*y+.5,f.push(R.x,R.y),g++}for(let U=0;U<r;U++){let I=A+U,D=C+U;x===!0?u.push(D,D+1,I):u.push(D+1,D,I),E+=3}c.addGroup(p,E,x===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ph=class i extends Ve{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let w=new S,x=new S,A=new S;for(let R=0;R<t.length;R+=3)f(t[R+0],w),f(t[R+1],x),f(t[R+2],A),l(w,x,A,M)}function l(M,w,x,A){let R=A+1,_=[];for(let E=0;E<=R;E++){_[E]=[];let b=M.clone().lerp(x,E/R),y=w.clone().lerp(x,E/R),C=R-E;for(let U=0;U<=C;U++)U===0&&E===R?_[E][U]=b:_[E][U]=b.clone().lerp(y,U/C)}for(let E=0;E<R;E++)for(let b=0;b<2*(R-E)-1;b++){let y=Math.floor(b/2);b%2===0?(h(_[E][y+1]),h(_[E+1][y]),h(_[E][y])):(h(_[E][y+1]),h(_[E+1][y+1]),h(_[E+1][y]))}}function c(M){let w=new S;for(let x=0;x<s.length;x+=3)w.x=s[x+0],w.y=s[x+1],w.z=s[x+2],w.normalize().multiplyScalar(M),s[x+0]=w.x,s[x+1]=w.y,s[x+2]=w.z}function u(){let M=new S;for(let w=0;w<s.length;w+=3){M.x=s[w+0],M.y=s[w+1],M.z=s[w+2];let x=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;o.push(x,1-A)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){let w=o[M+0],x=o[M+2],A=o[M+4],R=Math.max(w,x,A),_=Math.min(w,x,A);R>.9&&_<.1&&(w<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function f(M,w){let x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){let M=new S,w=new S,x=new S,A=new S,R=new oe,_=new oe,E=new oe;for(let b=0,y=0;b<s.length;b+=9,y+=6){M.set(s[b+0],s[b+1],s[b+2]),w.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),R.set(o[y+0],o[y+1]),_.set(o[y+2],o[y+3]),E.set(o[y+4],o[y+5]),A.copy(M).add(w).add(x).divideScalar(3);let C=m(A);v(R,y+0,M,C),v(_,y+2,w,C),v(E,y+4,x,C)}}function v(M,w,x,A){A<0&&M.x===1&&(o[w]=M.x-1),x.x===0&&x.z===0&&(o[w]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},yo=class extends Bl{constructor(e){super(e),this.uuid=Qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Bl().fromJSON(r))}return this}},D1={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Lp(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,d,h,f;if(n&&(s=B1(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)d=i[g],h=i[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return pa(s,o,t,a,l,f,0),o}};ra=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];jf(e),Qf(n,e);let o=e.length;t.forEach(jf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Qf(n,t[l]);let a=D1.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};Ol=class i extends ph{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},va=class i extends Ve{constructor(e=new yo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(s,3)),this.setAttribute("uv",new Ge(o,2));function c(u){let d=r.length/3,h=u.extractPoints(t),f=h.shape,g=h.holes;ra.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];ra.isClockWise(M)===!0&&(g[m]=M.reverse())}let v=ra.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],w=M[0]+d,x=M[1]+d,A=M[2]+d;n.push(w,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return J1(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};In=class i extends Ve{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new S,h=new S,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],w=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){let R=A/t;d.x=-e*Math.cos(r+R*s)*Math.sin(o+w*a),d.y=e*Math.cos(o+w*a),d.z=e*Math.sin(r+R*s)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(R+x,1-w),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let w=u[p][M+1],x=u[p][M],A=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&f.push(w,x,R),(p!==n-1||l<Math.PI)&&f.push(x,A,R)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Hl=class extends me{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},en=class extends er{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};Mo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vh=class extends Mo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kd,endingEnd:kd}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vd:s=e,a=2*t-n;break;case Wd:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vd:o=e,l=2*n-t;break;case Wd:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,M=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+M*o[c+A]+w*o[l+A]+x*o[d+A];return s}},xh=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}},yh=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ki=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bl:t=this.InterpolantFactoryMethodDiscrete;break;case qu:t=this.InterpolantFactoryMethodLinear;break;case Rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bl;case this.InterpolantFactoryMethodLinear:return qu;case this.InterpolantFactoryMethodSmooth:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&j1(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Rc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=qu;ps=class extends ki{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=bl;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;Mh=class extends ki{};Mh.prototype.ValueTypeName="color";wh=class extends ki{};wh.prototype.ValueTypeName="number";bh=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)It.slerpFlat(s,0,o,c-a,o,c,l);return s}},kl=class extends ki{InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}};kl.prototype.ValueTypeName="quaternion";kl.prototype.InterpolantFactoryMethodSmooth=void 0;ms=class extends ki{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=bl;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;Eh=class extends ki{};Eh.prototype.ValueTypeName="vector";$f={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},_h=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Yh=new _h,xa=class{constructor(e){this.manager=e!==void 0?e:Yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";Sh=class extends xa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=$f.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=aa("img");function l(){u(),$f.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Vl=class extends xa{constructor(e){super(e)}load(e,t,n,r){let s=new Fn,o=new Sh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ya=class extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},_i=class extends ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ou=new Ke,ep=new S,tp=new S,Wl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},np=new Ke,Jo=new S,au=new S,Th=class extends Wl{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Jo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jo),au.copy(n.position),au.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(au),n.updateMatrixWorld(),r.makeTranslation(-Jo.x,-Jo.y,-Jo.z),np.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(np)}},Gl=class extends ya{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ah=class extends Wl{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Si=class extends ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ii=class extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ip(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ip();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Kh="\\[\\]\\.:\\/",Q1=new RegExp("["+Kh+"]","g"),Zh="[^"+Kh+"]",$1="[^"+Kh.replace("\\.","")+"]",eM=/((?:WC+[\/:])*)/.source.replace("WC",Zh),tM=/(WCOD+)?/.source.replace("WCOD",$1),nM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zh),iM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zh),rM=new RegExp("^"+eM+tM+nM+iM+"$"),sM=["material","materials","bones","map"],Rh=class{constructor(e,t,n){let r=n||Xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q1,"")}static parseTrackName(e){let t=rM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);sM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=Rh;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];cw=new Float32Array(1),rp=new Ke,Xl=class{constructor(e,t,n=0,r=1/0){this.ray=new lo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new la,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rp),this}intersectObject(e,t=!0,n=[]){return Ch(e,this,n,t),n.sort(sp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ch(e[r],this,n,t);return n.sort(sp),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph)});var hd={};I0(hd,{computeMikkTSpaceTangents:()=>SM,computeMorphedAttributes:()=>DM,deepCloneAttribute:()=>AM,deinterleaveAttribute:()=>lc,deinterleaveGeometry:()=>CM,estimateBytesUsed:()=>PM,interleaveAttributes:()=>RM,mergeAttributes:()=>ud,mergeGeometries:()=>TM,mergeGroups:()=>UM,mergeVertices:()=>IM,toCreasedNormals:()=>NM,toTrianglesDrawMode:()=>LM});function SM(i,e,t=!0){if(!e||!e.isReady)throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");if(!i.hasAttribute("position")||!i.hasAttribute("normal")||!i.hasAttribute("uv"))throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function n(o){if(o.normalized||o.isInterleavedBufferAttribute){let a=new Float32Array(o.count*o.itemSize);for(let l=0,c=0;l<o.count;l++)a[c++]=o.getX(l),a[c++]=o.getY(l),o.itemSize>2&&(a[c++]=o.getZ(l));return a}return o.array instanceof Float32Array?o.array:new Float32Array(o.array)}let r=i.index?i.toNonIndexed():i,s=e.generateTangents(n(r.attributes.position),n(r.attributes.normal),n(r.attributes.uv));if(t)for(let o=3;o<s.length;o+=4)s[o]*=-1;return r.setAttribute("tangent",new qe(s,4)),i!==r&&i.copy(r),i}function TM(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Ve,c=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(let u in s){let d=ud(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);let g=ud(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function ud(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}let o=new e(s),a=new qe(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<t;g++){let v=u.getComponent(h,g);a.setComponent(h+d,g,v)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}function AM(i){return i.isInstancedInterleavedBufferAttribute||i.isInterleavedBufferAttribute?lc(i):i.isInstancedBufferAttribute?new Dt().copy(i):new qe().copy(i)}function RM(i){let e,t=0,n=0;for(let c=0,u=i.length;c<u;++c){let d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=d.array.length,n+=d.itemSize}let r=new ca(new e(t),n),s=0,o=[],a=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,u=i.length;c<u;c++){let d=i[c],h=d.itemSize,f=d.count,g=new po(r,h,s,d.normalized);o.push(g),s+=h;for(let v=0;v<f;v++)for(let m=0;m<h;m++)g[l[m]](v,d[a[m]](v))}return o}function lc(i){let e=i.data.array.constructor,t=i.count,n=i.itemSize,r=i.normalized,s=new e(t*n),o;i.isInstancedInterleavedBufferAttribute?o=new Dt(s,n,r,i.meshPerAttribute):o=new qe(s,n,r);for(let a=0;a<t;a++)o.setX(a,i.getX(a)),n>=2&&o.setY(a,i.getY(a)),n>=3&&o.setZ(a,i.getZ(a)),n>=4&&o.setW(a,i.getW(a));return o}function CM(i){let e=i.attributes,t=i.morphTargets,n=new Map;for(let r in e){let s=e[r];s.isInterleavedBufferAttribute&&(n.has(s)||n.set(s,lc(s)),e[r]=n.get(s))}for(let r in t){let s=t[r];s.isInterleavedBufferAttribute&&(n.has(s)||n.set(s,lc(s)),t[r]=n.get(s))}}function PM(i){let e=0;for(let n in i.attributes){let r=i.getAttribute(n);e+=r.count*r.itemSize*r.array.BYTES_PER_ELEMENT}let t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function IM(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],d=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let M=0,w=a.length;M<w;M++){let x=a[M],A=i.attributes[x];l[x]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);let R=i.morphAttributes[x];R&&(c[x]||(c[x]=[]),R.forEach((_,E)=>{let b=new _.array.constructor(_.count*_.itemSize);c[x][E]=new _.constructor(b,_.itemSize,_.normalized)}))}let f=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=f*v;for(let M=0;M<s;M++){let w=n?n.getX(M):M,x="";for(let A=0,R=a.length;A<R;A++){let _=a[A],E=i.getAttribute(_),b=E.itemSize;for(let y=0;y<b;y++)x+=`${~~(E[d[y]](w)*v+m)},`}if(x in t)u.push(t[x]);else{for(let A=0,R=a.length;A<R;A++){let _=a[A],E=i.getAttribute(_),b=i.morphAttributes[_],y=E.itemSize,C=l[_],U=c[_];for(let I=0;I<y;I++){let D=d[I],H=h[I];if(C[H](o,E[D](w)),b)for(let F=0,V=b.length;F<V;F++)U[F][H](o,b[F][D](w))}}t[x]=o,u.push(o),o++}}let p=i.clone();for(let M in i.attributes){let w=l[M];if(p.setAttribute(M,new w.constructor(w.array.slice(0,o*w.itemSize),w.itemSize,w.normalized)),M in c)for(let x=0;x<c[M].length;x++){let A=c[M][x];p.morphAttributes[M][x]=new A.constructor(A.array.slice(0,o*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(u),p}function LM(i,e){if(e===xp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wh||e===yp){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===Wh)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function DM(i){let e=new S,t=new S,n=new S,r=new S,s=new S,o=new S,a=new S,l=new S,c=new S;function u(z,J,re,fe,Me,q,te,ue){e.fromBufferAttribute(J,Me),t.fromBufferAttribute(J,q),n.fromBufferAttribute(J,te);let ee=z.morphTargetInfluences;if(re&&ee){a.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let se=0,Le=re.length;se<Le;se++){let Ne=ee[se],it=re[se];Ne!==0&&(r.fromBufferAttribute(it,Me),s.fromBufferAttribute(it,q),o.fromBufferAttribute(it,te),fe?(a.addScaledVector(r,Ne),l.addScaledVector(s,Ne),c.addScaledVector(o,Ne)):(a.addScaledVector(r.sub(e),Ne),l.addScaledVector(s.sub(t),Ne),c.addScaledVector(o.sub(n),Ne)))}e.add(a),t.add(l),n.add(c)}z.isSkinnedMesh&&(z.applyBoneTransform(Me,e),z.applyBoneTransform(q,t),z.applyBoneTransform(te,n)),ue[Me*3+0]=e.x,ue[Me*3+1]=e.y,ue[Me*3+2]=e.z,ue[q*3+0]=t.x,ue[q*3+1]=t.y,ue[q*3+2]=t.z,ue[te*3+0]=n.x,ue[te*3+1]=n.y,ue[te*3+2]=n.z}let d=i.geometry,h=i.material,f,g,v,m=d.index,p=d.attributes.position,M=d.morphAttributes.position,w=d.morphTargetsRelative,x=d.attributes.normal,A=d.morphAttributes.position,R=d.groups,_=d.drawRange,E,b,y,C,U,I,D,H=new Float32Array(p.count*p.itemSize),F=new Float32Array(x.count*x.itemSize);if(m!==null)if(Array.isArray(h))for(E=0,y=R.length;E<y;E++)for(U=R[E],I=Math.max(U.start,_.start),D=Math.min(U.start+U.count,_.start+_.count),b=I,C=D;b<C;b+=3)f=m.getX(b),g=m.getX(b+1),v=m.getX(b+2),u(i,p,M,w,f,g,v,H),u(i,x,A,w,f,g,v,F);else for(I=Math.max(0,_.start),D=Math.min(m.count,_.start+_.count),E=I,y=D;E<y;E+=3)f=m.getX(E),g=m.getX(E+1),v=m.getX(E+2),u(i,p,M,w,f,g,v,H),u(i,x,A,w,f,g,v,F);else if(Array.isArray(h))for(E=0,y=R.length;E<y;E++)for(U=R[E],I=Math.max(U.start,_.start),D=Math.min(U.start+U.count,_.start+_.count),b=I,C=D;b<C;b+=3)f=b,g=b+1,v=b+2,u(i,p,M,w,f,g,v,H),u(i,x,A,w,f,g,v,F);else for(I=Math.max(0,_.start),D=Math.min(p.count,_.start+_.count),E=I,y=D;E<y;E+=3)f=E,g=E+1,v=E+2,u(i,p,M,w,f,g,v,H),u(i,x,A,w,f,g,v,F);let V=new Ge(H,3),N=new Ge(F,3);return{positionAttribute:p,normalAttribute:x,morphedPositionAttribute:V,morphedNormalAttribute:N}}function UM(i){if(i.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),i;let e=i.groups;if(e=e.sort((o,a)=>o.materialIndex!==a.materialIndex?o.materialIndex-a.materialIndex:o.start-a.start),i.getIndex()===null){let o=i.getAttribute("position"),a=[];for(let l=0;l<o.count;l+=3)a.push(l,l+1,l+2);i.setIndex(a)}let t=i.getIndex(),n=[];for(let o=0;o<e.length;o++){let a=e[o],l=a.start,c=l+a.count;for(let u=l;u<c;u++)n.push(t.getX(u))}i.dispose(),i.setIndex(n);let r=0;for(let o=0;o<e.length;o++){let a=e[o];a.start=r,r+=a.count}let s=e[0];i.groups=[s];for(let o=1;o<e.length;o++){let a=e[o];s.materialIndex===a.materialIndex?s.count+=a.count:(s=a,i.groups.push(s))}return i}function NM(i,e=Math.PI/3){let t=Math.cos(e),n=(1+1e-10)*100,r=[new S,new S,new S],s=new S,o=new S,a=new S,l=new S;function c(v){let m=~~(v.x*n),p=~~(v.y*n),M=~~(v.z*n);return`${m},${p},${M}`}let u=i.index?i.toNonIndexed():i,d=u.attributes.position,h={};for(let v=0,m=d.count/3;v<m;v++){let p=3*v,M=r[0].fromBufferAttribute(d,p+0),w=r[1].fromBufferAttribute(d,p+1),x=r[2].fromBufferAttribute(d,p+2);s.subVectors(x,w),o.subVectors(M,w);let A=new S().crossVectors(s,o).normalize();for(let R=0;R<3;R++){let _=r[R],E=c(_);E in h||(h[E]=[]),h[E].push(A)}}let f=new Float32Array(d.count*3),g=new qe(f,3,!1);for(let v=0,m=d.count/3;v<m;v++){let p=3*v,M=r[0].fromBufferAttribute(d,p+0),w=r[1].fromBufferAttribute(d,p+1),x=r[2].fromBufferAttribute(d,p+2);s.subVectors(x,w),o.subVectors(M,w),a.crossVectors(s,o).normalize();for(let A=0;A<3;A++){let R=r[A],_=c(R),E=h[_];l.set(0,0,0);for(let b=0,y=E.length;b<y;b++){let C=E[b];a.dot(C)>t&&l.add(C)}l.normalize(),g.setXYZ(p+A,l.x,l.y,l.z)}}return u.setAttribute("normal",g),u}var dd=Bd(()=>{Ut()});Ut();Ut();var Jl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Ut();Ut();var gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},oM=new ho(-1,1,1,-1,0,1),Jh=class extends Ve{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}},aM=new Jh,Hr=class{constructor(e){this._mesh=new de(aM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var kr=class extends gi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof me?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ir.clone(e.uniforms),this.material=new me({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Hr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var wa=class extends gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}},jl=class extends gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ql=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kr(Jl),this.copyPass.material.blending=ji,this.clock=new wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let r=0,s=this.passes.length;r<s;r++){let o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wa!==void 0&&(o instanceof wa?n=!0:o instanceof jl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Ut();var $l=class extends gi{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ce}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}};Ut();Ut();var Np={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _o=class i extends gi{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zt(s,o,{type:Jt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let h=new Zt(s,o,{type:Jt});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new Zt(s,o,{type:Jt});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Np;this.highPassUniforms=ir.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new oe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Jl;this.copyUniforms=ir.clone(u.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ct,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ce,this.oldClearAlpha=1,this.basic=new Jn,this.fsQuad=new Hr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new oe(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new me({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new me({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_o.BlurDirectionX=new oe(1,0);_o.BlurDirectionY=new oe(0,1);Ut();var Fp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ec=class extends gi{constructor(){super();let e=Fp;this.uniforms=ir.clone(e.uniforms),this.material=new Hl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Hr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ih?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};Ut();var Mr=class i extends de{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new xn;let n=this,r=t.color!==void 0?new ce(t.color):new ce(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new di,d=new S,h=new S,f=new S,g=new Ke,v=new S(0,0,-1),m=new Je,p=new S,M=new S,w=new Je,x=new Ke,A=this.camera,R=new Zt(s,o,{samples:c,type:Jt}),_=new me({name:l.name!==void 0?l.name:"unspecified",uniforms:ir.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});_.uniforms.tDiffuse.value=R.texture,_.uniforms.color.value=r,_.uniforms.textureMatrix.value=x,this.material=_,this.onBeforeRender=function(E,b,y){if(h.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(h,f),p.dot(d)>0)return;p.reflect(d).negate(),p.add(h),g.extractRotation(y.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(f),M.subVectors(h,v),M.reflect(d).negate(),M.add(h),A.position.copy(p),A.up.set(0,1,0),A.up.applyMatrix4(g),A.up.reflect(d),A.lookAt(M),A.far=y.far,A.updateMatrixWorld(),A.projectionMatrix.copy(y.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(A.projectionMatrix),x.multiply(A.matrixWorldInverse),x.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(A.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let C=A.projectionMatrix;w.x=(Math.sign(m.x)+C.elements[8])/C.elements[0],w.y=(Math.sign(m.y)+C.elements[9])/C.elements[5],w.z=-1,w.w=(1+C.elements[10])/C.elements[14],m.multiplyScalar(2/m.dot(w)),C.elements[2]=m.x,C.elements[6]=m.y,C.elements[10]=m.z+1-a,C.elements[14]=m.w,n.visible=!1;let U=E.getRenderTarget(),I=E.xr.enabled,D=E.shadowMap.autoUpdate;E.xr.enabled=!1,E.shadowMap.autoUpdate=!1,E.setRenderTarget(R),E.state.buffers.depth.setMask(!0),E.autoClear===!1&&E.clear(),E.render(b,A),E.xr.enabled=I,E.shadowMap.autoUpdate=D,E.setRenderTarget(U);let H=y.viewport;H!==void 0&&E.state.viewport(H),n.visible=!0},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}};Mr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};Ut();var ri=`
  uniform float uTime, uFogK; uniform vec3 uSun, uFogCol;
  vec3 applyFog(vec3 c, vec3 w){
    vec3 d = w - cameraPosition; float l = length(d);
    float f = 1.0 - exp(-max(l - 25.0, 0.0) * uFogK);
    float s = pow(max(dot(d / l, uSun), 0.0), 6.0);
    vec3 col = uFogCol * mix(vec3(1.0), vec3(1.35, 1.05, 0.75), s);
    return mix(c, col, f);
  }`,zp=`
  float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y); }`;function ba(i,e,t=1,n=1){let r=new Ve,s=[],o=[],a=4;for(let f=0;f<a;f++){let g=f/a;s.push(-.5,g,0,.5,g,0)}s.push(0,1,0);for(let f=0;f<a-1;f++){let g=f*2;o.push(g,g+1,g+3,g,g+3,g+2)}o.push((a-1)*2,(a-1)*2+1,a*2),r.setAttribute("position",new Ge(s,3)),r.setIndex(o);let l=new ii;l.index=r.index,l.attributes.position=r.attributes.position;let c=n*9301+49297,u=()=>(c=c*16807%2147483647)/2147483647,d=new Float32Array(i*4),h=new Float32Array(i*2);for(let f=0;f<i;f++)d[f*4]=u()*e,d[f*4+1]=u()*e,d[f*4+2]=u()*Math.PI*2,d[f*4+3]=u(),h[f*2]=u(),h[f*2+1]=u()*2-1;return l.setAttribute("aOff",new Dt(d,4)),l.setAttribute("aVar",new Dt(h,2)),l.instanceCount=i,l}function jh(i,e=!1){return new me({side:gt,uniforms:{uNear:{value:0},...i},defines:e?{FAR:""}:{},vertexShader:`
      ${zp}
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
      ${ri}
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
      }`})}Ut();function Bp(i,e,t){let n=new Ol(1,0),r=new ii;r.attributes.position=n.attributes.position,r.attributes.normal=n.attributes.normal;let s=[],o=[],a=77,l=()=>(a=a*16807%2147483647)/2147483647;for(let[u,d,h,f,g]of i){let v=Math.max(g,.6)*1.05,m=Math.round(e*Math.min(1.6,f*v/9));for(let p=0;p<m;p++){let M=Math.pow(l(),.85),w=(M<.22?Math.sqrt(M/.22):Math.pow((1-M)/.78,.85))*v;M<.04&&(w*=.5);let x=l()*Math.PI*2,A=w*(.55+.45*Math.sqrt(l())),R=.16+l()*.2;s.push(u+Math.cos(x)*A,d+.25+M*f,h+Math.sin(x)*A,R*(.7+.6*(1-M))),o.push(u,d,h,f)}}r.setAttribute("aC",new Dt(new Float32Array(s),4)),r.setAttribute("aT",new Dt(new Float32Array(o),4)),r.instanceCount=s.length/4;let c=new de(r,new me({uniforms:t,vertexShader:`
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
      ${ri}
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
      }`}));return c.frustumCulled=!1,c}Ut();var Qh=(i,e,t,n)=>Math.floor(i/n)+","+Math.floor(e/n)+","+Math.floor(t/n),$h=(i,e,t,n)=>{var s;let r=(s=i.userData).cells||(s.cells=[]);for(let o of t)o.userData.far=n>0?5/n:1e9,r.push(o);return e};function Op(i,e,{cell:t=48,fogK:n=0,minTris:r=24e3}={}){let s=i.geometry,o=s.index,a=s.attributes.position;if(!o||o.count/3<r)return i;let l=o.count/3,c=o.array,u=a.array,d=new Int32Array(l),h=new Map,f=[];for(let A=0;A<l;A++){let R=c[A*3]*3,_=c[A*3+1]*3,E=c[A*3+2]*3,b=Qh((u[R]+u[_]+u[E])/3,(u[R+1]+u[_+1]+u[E+1])/3,(u[R+2]+u[_+2]+u[E+2])/3,t),y=h.get(b);y===void 0&&(y=f.length,h.set(b,y),f.push(b)),d[A]=y}let g=f.length,v=new Uint32Array(g+1);for(let A=0;A<l;A++)v[d[A]+1]++;for(let A=0;A<g;A++)v[A+1]+=v[A];let m=v.slice(0,g),p=new Uint32Array(c.length);for(let A=0;A<l;A++){let R=m[d[A]]++*3;p[R]=c[A*3],p[R+1]=c[A*3+1],p[R+2]=c[A*3+2]}let M=new qe(p,1),w=new Vn,x=[];for(let A=0;A<g;A++){let R=v[A],_=v[A+1];if(_===R)continue;let E=new Ve;for(let C in s.attributes)E.setAttribute(C,s.attributes[C]);E.setIndex(M),E.setDrawRange(R*3,(_-R)*3);let b=new bi;for(let C=R*3;C<_*3;C++){let U=p[C]*3;b.expandByPoint(Hp.set(u[U],u[U+1],u[U+2]))}E.boundingBox=b,E.boundingSphere=b.getBoundingSphere(new yn);let y=new de(E,i.material);y.frustumCulled=!0,y.renderOrder=i.renderOrder,y.layers.mask=i.layers.mask,w.add(y),x.push(y)}return w.name=(i.name||"static")+"-cells",w.renderOrder=i.renderOrder,$h(e,w,x,n)}var Hp=new S;function So(i,e,{cell:t=40,fogK:n=0,minCount:r=160,far:s=0}={}){let o=i.count;if(o<r)return i;let a=i.instanceMatrix.array,l=i.instanceColor?i.instanceColor.array:null,c=new Map;for(let h=0;h<o;h++){let f=Qh(a[h*16+12],a[h*16+13],a[h*16+14],t);(c.get(f)||c.set(f,[]).get(f)).push(h)}let u=new Vn,d=[];for(let h of c.values()){let f=new dn(i.geometry,i.material,h.length);h.forEach((g,v)=>{f.instanceMatrix.array.set(a.subarray(g*16,g*16+16),v*16),l&&f.setColorAt(v,lM.fromArray(l,g*3))}),f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),f.frustumCulled=!0,f.renderOrder=i.renderOrder,f.layers.mask=i.layers.mask,u.add(f),d.push(f)}if(u.name=(i.name||"instances")+"-cells",$h(e,u,d,n),s)for(let h of d)h.userData.far=Math.min(h.userData.far,s);return u}var lM=new ce;function Vr(i,e,{at:t="aC",cell:n=40,pad:r=3,fogK:s=0,minCount:o=400}={}){let a=i.geometry,l=a.instanceCount;if(!a.isInstancedBufferGeometry||l<o)return i;let c=[];for(let m in a.attributes)a.attributes[m].isInstancedBufferAttribute&&c.push(m);let u=a.attributes[t],d=u.array,h=u.itemSize,f=new Map;for(let m=0;m<l;m++){let p=Qh(d[m*h],d[m*h+1],d[m*h+2],n);(f.get(p)||f.set(p,[]).get(p)).push(m)}let g=new Vn,v=[];for(let m of f.values()){let p=new ii;p.index=a.index;for(let x in a.attributes)c.includes(x)||p.setAttribute(x,a.attributes[x]);for(let x of c){let A=a.attributes[x],R=A.itemSize,_=new Float32Array(m.length*R);m.forEach((E,b)=>{for(let y=0;y<R;y++)_[b*R+y]=A.array[E*R+y]}),p.setAttribute(x,new Dt(_,R))}p.instanceCount=m.length;let M=new bi;for(let x of m)M.expandByPoint(Hp.set(d[x*h],d[x*h+1],d[x*h+2]));M.expandByScalar(r),p.boundingBox=M,p.boundingSphere=M.getBoundingSphere(new yn);let w=new de(p,i.material);w.frustumCulled=!0,w.renderOrder=i.renderOrder,w.layers.mask=i.layers.mask,g.add(w),v.push(w)}return g.name=(i.name||"instanced-geo")+"-cells",$h(e,g,v,s)}var tc=new yn;function ed(i,e){let t=i.userData.cells;if(t)for(let n of t){n.isInstancedMesh?(n.boundingSphere||n.computeBoundingSphere(),tc.copy(n.boundingSphere)):tc.copy(n.geometry.boundingSphere);let r=Math.max(0,e.distanceTo(tc.center)-tc.radius);n.visible=r<n.userData.far}}Ut();var Ea={y:9,z:150},Vi=7.3,nc=8.1,ic=5.5+2.9,kp=[{pos:[0,9.4,Ea.z+26],tgt:[0,5.2,Ea.z],w:1.5},{pos:[-12,7.6,Ea.z-4],tgt:[0,10,60],w:1.4},{pos:[0,7.5,128],tgt:[0,10,20],w:1.4},{pos:[0,1.75,82],tgt:[0,6.5,26],w:1.4},{pos:[-4.3,1.9,48],tgt:[0,7.5,24],w:1},{pos:[2,3.4,18],tgt:[0,14,-30],w:1.2},{pos:[0,5.8,2],tgt:[0,20,-16],w:1.2},{pos:[0,6.8,-9],tgt:[0,9,-40],w:1},{pos:[0,Vi,-20],tgt:[0,8.6,-50],w:1},{pos:[0,Vi,-27.5],tgt:[0,8.6,-60],w:1.1},{pos:[.6,Vi,-31.4],tgt:[-nc,ic,-32],w:1.5},{pos:[0,Vi,-34.6],tgt:[0,8.5,-70],w:.9},{pos:[-.6,Vi,-35.8],tgt:[nc,ic,-36.4],w:1.5},{pos:[0,Vi,-39],tgt:[0,8.5,-70],w:.9},{pos:[.6,Vi,-40.2],tgt:[-nc,ic,-40.8],w:1.5},{pos:[0,Vi,-43.4],tgt:[0,8.4,-70],w:.9},{pos:[-.6,Vi,-44.6],tgt:[nc,ic,-45.2],w:1.2},{pos:[-.2,Vi,-46.4],tgt:[0,8.2,-80],w:.8},{pos:[0,Vi,-49],tgt:[0,8,-80],w:1},{pos:[0,7.4,-53],tgt:[0,7.6,-90],w:0}],Gr=[0];kp.slice(0,-1).forEach(i=>Gr.push(Gr[Gr.length-1]+i.w));var td=Gr[Gr.length-1],Wr=i=>Gr[i]/td,gs=Gr[2]/td,rc=i=>(Gr[2]+i*12.2)/td,To=1,sc={pos:[0,9.1,-53.35],size:[4.5,7.2]};var Yw=new S(0,Ea.y,Ea.z),Vp=[{at:[0,gs*.55],kick:"Welcome to Nomadiic Horse Designs",line:"Turn our horse, then scroll to step inside."},{at:[gs*.55,rc(.2)],kick:"We are Nomadiic Horse Designs",line:"A very detailed design team from Bangalore, India."},{at:[rc(.2),rc(.36)],kick:"Our philosophy",line:"We build brands the way the Greeks built palaces: with proportion, patience and a little audacity."},{at:[rc(.36),Wr(9)],kick:"What we make",line:"Branding and websites for founders who want to be remembered."},{at:[Wr(9),Wr(11)],kick:"About us",line:"Selected as Top 1% Framer Designers."},{at:[Wr(11),Wr(13)],kick:"About us",line:"Selected as Framer Experts by Team Framer."},{at:[Wr(13),Wr(15)],kick:"About us",line:"Selected as a Shopify Partner."},{at:[Wr(15),1.01],kick:"About us",line:"20+ clients across India, the USA and Australia. Step through, and meet a few of them."}];function Xr(i=kp){let e=i.length,t=new vo(i.map(x=>new S(...x.pos)),!1,"centripetal",.5),n=new vo(i.map(x=>new S(...x.tgt)),!1,"centripetal"),r=i.slice(0,-1).map(x=>x.w||1),s=[0];r.forEach(x=>s.push(s[s.length-1]+x));let o=s[s.length-1],a=4e3,l=t.getLengths(a),c=i.map((x,A)=>l[Math.round(A/(e-1)*a)]),u=r.map((x,A)=>Math.max(c[A+1]-c[A],.001)),d=r.map((x,A)=>s[A]+x/2),h=r.map((x,A)=>u[A]/x),f=x=>{if(x<=d[0])return h[0];for(let A=0;A<h.length-1;A++)if(x<=d[A+1])return ht.lerp(h[A],h[A+1],(x-d[A])/(d[A+1]-d[A]));return h[h.length-1]},g=x=>{let A=0,R=120;for(let _=0;_<R;_++)A+=f(s[x]+(_+.5)/R*r[x]);return A/R*r[x]};for(let x=0;x<60;x++)h=h.map((A,R)=>Math.max(.05,A*Math.pow(u[R]/Math.max(g(R),1e-6),.7)));let v=6e3,m=new Float32Array(v+1);for(let x=1;x<=v;x++){let A=(x-1)/v*o,R=x/v*o;m[x]=m[x-1]+f((A+R)/2)*(R-A)}let p=l[a]/m[v],M=x=>{let A=0,R=a;for(;A<R;){let y=A+R>>1;l[y]<x?A=y+1:R=y}let _=Math.max(1,A),E=l[_-1],b=l[_];return(_-1+(b>E?(x-E)/(b-E):0))/a},w=x=>{let A=ht.clamp(x,0,1)*v,R=Math.floor(A),_=A-R;return M((R>=v?m[v]:m[R]+(m[R+1]-m[R])*_)*p)};return{sample(x,A,R){let _=w(x);return t.getPoint(_,A),n.getPoint(_,R),_*(e-1)}}}var nd=[{lines:["Selected as","Top 1% Framer Designers"],x:-7.66,z:-32},{lines:["Selected as","Framer Experts by Team Framer"],x:7.66,z:-36.4},{lines:["Selected as","Shopify Partner"],x:-7.66,z:-40.8},{lines:["20+ clients","India \xB7 USA \xB7 Australia"],x:7.66,z:-45.2}];Ut();var Wp="data:image/webp;base64,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",Gp="data:image/webp;base64,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";function Xp(){let i=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches,e=null,t="",n=!1,r=0,s=0,o=2.5,a=-99,l=0,c=0,u=[.5,.7],d=.8,h=()=>{e&&(document.hidden?e.pause():n||e.play().catch(()=>{}))};typeof document<"u"&&document.addEventListener("visibilitychange",h);let f=()=>{try{e||(e=new Audio(t+"score2.m4a"),e.loop=!0,e.volume=0,r=0),e.play().catch(v=>{console.warn("[score]",v),n=!0})}catch(v){console.warn("[score]",v),n=!0}},g={flash:0,flashPos:u,rain:1,started:!1,get strikeId(){return l},start(v,m){g.started=!0,t=m,n=!v,v&&f()},strike(v=.6+Math.random()*.4,m=null){a=s,c=v,l++,u[0]=m?m[0]:.2+Math.random()*.6,u[1]=m?m[1]:.62+Math.random()*.3},mix:1,setMix(v){g.mix=v},amb:"",setAmb(v){g.amb=v},setMuted(v){n=v,v||f()},get muted(){return n},get hasSound(){return!!e},update(v,m=!0){if(s+=v,e){let M=n?0:d*Math.min(1,r+=v*.4);e.volume+=(M-e.volume)*Math.min(1,v*3),n&&e.volume<.01&&!e.paused&&e.pause()}g.started&&m&&s>o&&(g.strike(),o=s+2.5+Math.random()*5.5);let p=s-a;return g.flash=p<0?0:(i?.3:1)*c*(p<.05?p/.05:Math.exp(-(p-.05)*14)+(p>.16&&p<.5?.75*Math.exp(-(p-.16)*9):0)+(p>.42?.35*Math.exp(-(p-.42)*6):0)),g.flash},destroy(){try{e&&e.pause(),document.removeEventListener("visibilitychange",h)}catch{}}};return g}var cM=`
.nst{position:absolute;inset:0;z-index:30;color:#e8edf6;font-family:Satoshi,system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0b0f1a}
.nst .sky{position:absolute;inset:-8%;background:#0b0f1a center/cover no-repeat;animation:nstDrift 40s ease-in-out infinite alternate;transition:opacity 1.1s ease .1s;will-change:transform,opacity}
@keyframes nstDrift{from{transform:scale(1)}to{transform:scale(1.09) translate(-1.5%,1%)}}
.nst .coin{position:relative;width:min(44vmin,340px);aspect-ratio:1;flex:none;transition:transform 1.1s cubic-bezier(.45,0,.15,1),opacity .7s ease .55s;will-change:transform,opacity}
.nst .coin img{position:absolute;inset:8.5%;width:83%;height:83%;display:block;-webkit-user-drag:none;user-select:none}
.nst .ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);transition:opacity .5s ease}
.nst .ring circle{fill:none;stroke-width:.55}
.nst .ring .t{stroke:rgba(232,237,246,.14)}
.nst .ring .p{stroke:#f2c778;stroke-linecap:round;transition:stroke-dashoffset .35s linear}
.nst .wm{position:relative;margin-top:30px;font-family:"Nomadiic Line",Satoshi,sans-serif;font-size:13px;letter-spacing:.5em;padding-left:.5em;white-space:nowrap}
.nst .go{position:relative;margin-top:26px;display:flex;flex-direction:column;align-items:center;gap:6px}
.nst .wm,.nst .go{opacity:0;transform:translateY(8px);transition:opacity .7s ease,transform .7s ease;pointer-events:none}
.nst.on .wm,.nst.on .go{opacity:1;transform:none}
.nst.on .go{pointer-events:auto}
.nst.in .wm,.nst.in .go{opacity:0;transition:opacity .25s ease;pointer-events:none}
.nst.in{background:transparent;pointer-events:none}
.nst.in .sky{opacity:0;animation-play-state:paused}
.nst.in .ring{opacity:0}
.nst button{all:unset;cursor:pointer;-webkit-tap-highlight-color:transparent}
.nst .enter{font-size:12px;letter-spacing:.42em;padding:15px 26px 15px 31px;border:1px solid rgba(232,237,246,.42);transition:border-color .3s,background .3s}
.nst .enter:hover{border-color:rgba(232,237,246,.95);background:rgba(232,237,246,.07)}
.nst .quiet{font-size:10.5px;letter-spacing:.26em;padding:12px 10px;color:rgba(232,237,246,.66);transition:color .3s}
.nst .quiet:hover{color:#fff}
.nst button:focus-visible{outline:2px solid #ffd9a8;outline-offset:4px}
.nst .err{position:absolute;bottom:12%;left:0;right:0;text-align:center;font-size:14px;line-height:1.6;padding:0 24px}
.nst .err button{display:block;margin:10px auto 0;font-size:12px;letter-spacing:.3em;padding:12px 22px;border:1px solid rgba(232,237,246,.42)}
@media (max-width:640px){.nst .wm{font-size:10px;letter-spacing:.38em;padding-left:.38em;margin-top:24px}.nst .coin{width:min(58vw,300px)}}
@media (max-height:480px){.nst .coin{width:38vh}.nst .wm{margin-top:12px}.nst .go{margin-top:10px;flex-direction:row;gap:14px}}
@media (prefers-reduced-motion:reduce){.nst .sky{animation:none}}
`;function qp(i,e,t,{onDone:n}={}){if(!document.getElementById("nst-css")){let m=document.createElement("style");m.id="nst-css",m.textContent=cM,document.head.appendChild(m)}let r=document.createElement("div");r.className="nst";let s=2*Math.PI*49;r.innerHTML=`<div class="sky" style="background-image:url(${Wp})"></div>
    <div class="coin"><img src="${Gp}" alt="Nomadiic Horse Designs" draggable="false"><svg class="ring" viewBox="0 0 100 100" aria-hidden="true"><circle class="t" cx="50" cy="50" r="49"/><circle class="p" cx="50" cy="50" r="49" stroke-dasharray="${s}" stroke-dashoffset="${s}"/></svg></div>
    <div class="wm">NOMADIIC HORSE DESIGNS</div>
    <div class="go"><button class="enter" type="button">ENTER</button><button class="quiet" type="button">WITHOUT SOUND</button></div>`,i.appendChild(r);let o=r.querySelector(".coin"),a=r.querySelector(".p"),l="load",c=0,u=0,d=null,h=!0,f=()=>a.setAttribute("stroke-dashoffset",String(s*(1-Math.max(c,u)))),g=setInterval(()=>{u<.88&&l==="load"&&(u=Math.min(.88,Math.max(u,c)+.004),f())},120),v=m=>{if(l==="ready"){if(l="dive",e.start(m,t),d){let p=o.getBoundingClientRect(),M=i.getBoundingClientRect(),w=2*d[2]*1.14/(p.width*.83);o.style.transform=`translate(${d[0]+M.left-(p.left+p.width/2)}px, ${d[1]+M.top-(p.top+p.height/2)}px) scale(${w})`}o.style.opacity="0",r.classList.add("in"),setTimeout(()=>{n&&n()},950),setTimeout(()=>{h=!1,r.remove()},1750)}};return r.querySelector(".enter").onclick=()=>v(!0),r.querySelector(".quiet").onclick=()=>v(!1),{get diving(){return l==="dive"},get showing(){return l!=="load"},setTarget(m,p,M){d=[m,p,M]},setProgress(m){c=Math.max(c,Math.min(1,m)),f()},ready(){l==="load"&&(l="ready",clearInterval(g),c=1,f(),setTimeout(()=>{h&&r.classList.add("on")},300))},fail(){if(!h||r.querySelector(".err"))return;clearInterval(g);let m=document.createElement("div");m.className="err",m.innerHTML='The connection dropped.<button type="button">TRY AGAIN</button>',m.querySelector("button").onclick=()=>location.reload(),r.appendChild(m)},destroy(){h=!1,clearInterval(g),r.remove()}}}var oc=`
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
  }`;function Yp(){let i=new Vn;i.frustumCulled=!1;let e=new Jn({color:new ce(9,10,14),transparent:!0,opacity:0,blending:Ct,depthWrite:!1,side:gt,fog:!1,toneMapped:!0}),t=null,n=S,r=new n(0,1,0),s=(a,l,c,u,d)=>{if(u===0){d.push(l.clone());return}let h=a.clone().lerp(l,.5);h.x+=(Math.random()-.5)*c,h.z+=(Math.random()-.5)*c,h.y+=(Math.random()-.5)*c*.3,s(a,h,c*.55,u-1,d),s(h,l,c*.55,u-1,d)},o=(a,l,c,u)=>{for(let d=0;d<a.length-1;d++){let h=a[d],f=a[d+1],g=l*(1-d/a.length*.4),v=l*(1-(d+1)/a.length*.4),m=h.clone().addScaledVector(c,-g),p=h.clone().addScaledVector(c,g),M=f.clone().addScaledVector(c,-v),w=f.clone().addScaledVector(c,v);for(let x of[m,p,w,m,w,M])u.push(x.x,x.y,x.z)}};return{group:i,strike(a,l=0){let c=new n;a.getWorldDirection(c),c.y=0,c.normalize();let u=c.clone().applyAxisAngle(r,(Math.random()-.5)*1.3),d=260+Math.random()*700,h=a.position.clone().addScaledVector(u,d);h.y=l;let f=h.clone();f.y=l+300+Math.random()*220,f.x+=(Math.random()-.5)*140,f.z+=(Math.random()-.5)*140;let g=new n().crossVectors(u,r).normalize(),v=1.2+d*.0042,m=[f.clone()];s(f,h,90,6,m);let p=[];o(m,v,g,p);for(let w=0;w<4;w++){let x=6+Math.floor(Math.random()*(m.length*.6)),A=m[x];if(!A)continue;let R=A.clone().add(new n((Math.random()-.5)*120,-(40+Math.random()*120),(Math.random()-.5)*120)),_=[A.clone()];s(A,R,40,4,_),o(_,v*.45,g,p)}t&&(i.remove(t),t.geometry.dispose());let M=new Ve;M.setAttribute("position",new Ge(p,3)),t=new de(M,e),t.frustumCulled=!1,t.renderOrder=9,i.add(t)},update(a){e.opacity=Math.min(1,a*1.5),i.visible=a>.01}}}Ut();var qr=new Ke,vs=new It,ac=new S,Ao=new S,id=new Mn;function _a({count:i=40,center:e=[0,60,0],radius:t=80,height:n=18,size:r=1,color:s=1447964,speed:o=1,glide:a=.5}={}){let l=[],c=[],u=(_,E,b,y,C,U,I,D)=>{l.push(..._,...E,...b,..._,...b,...y),c.push(C,U,I,C,I,D)};for(let _ of[-1,1])u([0,0,.18],[_*.45,0,.12],[_*.45,0,-.12],[0,0,-.14],0,.55*_,.55*_,0),u([_*.45,0,.12],[_*1,0,-.02],[_*.95,0,-.2],[_*.45,0,-.12],.55*_,1*_,1*_,.55*_);l.push(0,0,.42,.07,0,0,0,0,-.5,0,0,.42,0,0,-.5,-.07,0,0),c.push(0,0,0,0,0,0);let d=new Ve;d.setAttribute("position",new Ge(l,3)),d.setAttribute("aWing",new Ge(c,1));let h=new Float32Array(i),f=new Float32Array(i);for(let _=0;_<i;_++)h[_]=Math.random()*6.28,f[_]=7+Math.random()*4;d.setAttribute("aPhase",new Dt(h,1)),d.setAttribute("aBeat",new Dt(f,1));let g=new Dt(new Float32Array(i),1);g.setUsage(bp),d.setAttribute("aFlap",g);let v=new me({side:gt,uniforms:{uTime:{value:0},uCol:{value:new ce(s)},uFog:{value:new Je(.6,.65,.7,7e-4)}},vertexShader:`uniform float uTime; attribute float aWing, aPhase, aBeat, aFlap; varying float vD;
      void main(){ vec3 p = position; float w = abs(aWing);
        float a = sin(uTime * aBeat + aPhase) * aFlap;                        // a wing beat; aFlap = 0 when gliding
        p.y += (a * 0.9 + 0.12) * w * w * 1.1; p.x *= 1.0 - abs(a) * 0.12 * w;  // the wingtips travel furthest, the span folds a little on the beat
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 uCol; uniform vec4 uFog; varying float vD; void main(){ gl_FragColor = vec4(mix(uCol, uFog.rgb, 1.0 - exp(-vD * uFog.a)), 1.0); }"}),m=new dn(d,v,i);m.frustumCulled=!1;let p=Array.from({length:i},()=>({o:new S((Math.random()-.5)*30,(Math.random()-.5)*8,(Math.random()-.5)*30),ph:Math.random()*100,glideT:Math.random()*4,gl:!1,prev:new S})),M=new S(...e),w=new S,x=new S,A=new S(0,1,0),R=(_,E,b)=>{let y=_*.045*o;return b.set(M.x+Math.cos(y)*t+Math.sin(y*1.7)*t*.3,M.y+Math.sin(y*.9)*n,M.z+Math.sin(y)*t*.75+Math.cos(y*1.3)*t*.25),b.x+=E.o.x+Math.sin(_*.35+E.ph)*6,b.y+=E.o.y+Math.sin(_*.5+E.ph*1.3)*2.5,b.z+=E.o.z+Math.cos(_*.3+E.ph)*6,b};return{mesh:m,update(_,E,b,y){v.uniforms.uTime.value=_,b&&v.uniforms.uFog.value.set(b.r,b.g,b.b,y);for(let C=0;C<i;C++){let U=p[C];R(_,U,Ao),R(_+.25,U,w),x.subVectors(w,Ao),U.glideT-=E,U.glideT<0&&(U.gl=!U.gl,U.glideT=U.gl?1.5+Math.random()*3*a:1+Math.random()*2.5),g.array[C]+=((U.gl?.08:1)-g.array[C])*Math.min(1,E*3);let I=Math.atan2(x.x,x.z),D=-Math.atan2(x.y,Math.hypot(x.x,x.z))*.6,H=ht.clamp(-(x.x*U.prev.z-x.z*U.prev.x)*4,-.7,.7);U.prev.copy(x),vs.setFromEuler(id.set(D,I,H,"YXZ")),qr.compose(Ao,vs,ac.setScalar(r*(.85+C%5*.06))),m.setMatrixAt(C,qr)}m.instanceMatrix.needsUpdate=!0,g.needsUpdate=!0}}}function Kp({count:i=24,box:e=[-20,20,.4,3,-20,20],colors:t=[15905076,15265522,14178090,7317724]}={}){let n=[],r=[];for(let h of[-1,1])n.push(0,0,.05,h*.09,0,.09,h*.1,0,-.02,0,0,.05,h*.1,0,-.02,0,0,-.05,0,0,-.05,h*.1,0,-.02,h*.07,0,-.1),r.push(0,h,h,0,h,0,0,h,h);let s=new Ve;s.setAttribute("position",new Ge(n,3)),s.setAttribute("aWing",new Ge(r,1));let o=new Float32Array(i*3),a=new Float32Array(i),l=new ce;for(let h=0;h<i;h++)l.set(t[h%t.length]),o.set([l.r,l.g,l.b],h*3),a[h]=Math.random()*6.28;s.setAttribute("aCol",new Dt(o,3)),s.setAttribute("aPhase",new Dt(a,1));let c=new me({side:gt,uniforms:{uTime:{value:0}},vertexShader:`uniform float uTime; attribute float aWing, aPhase; attribute vec3 aCol; varying vec3 vC;
      void main(){ vec3 p = position; float a = (0.5 + 0.5 * sin(uTime * 22.0 + aPhase)) * 1.25; float s = sign(aWing);
        p = vec3(p.x * cos(a), abs(p.x) * sin(a), p.z); vC = aCol * (0.75 + 0.25 * abs(aWing));
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0); }`,fragmentShader:"varying vec3 vC; void main(){ gl_FragColor = vec4(vC, 1.0); }"}),u=new dn(s,c,i);u.frustumCulled=!1;let d=Array.from({length:i},()=>({p:new S(e[0]+Math.random()*(e[1]-e[0]),e[2]+Math.random()*(e[3]-e[2]),e[4]+Math.random()*(e[5]-e[4])),v:new S,ph:Math.random()*100}));return{mesh:u,update(h,f){c.uniforms.uTime.value=h;for(let g=0;g<i;g++){let v=d[g];v.v.x+=(Math.sin(h*1.3+v.ph)+Math.sin(h*3.1+v.ph*2))*f*1.2,v.v.z+=(Math.cos(h*1.1+v.ph)+Math.sin(h*2.7+v.ph))*f*1.2,v.v.y+=Math.sin(h*2.3+v.ph)*f*.9,v.v.multiplyScalar(.97),v.p.addScaledVector(v.v,f*1.6),(v.p.x<e[0]||v.p.x>e[1])&&(v.v.x*=-1),(v.p.z<e[4]||v.p.z>e[5])&&(v.v.z*=-1),v.p.y=ht.clamp(v.p.y,e[2],e[3]),Math.abs(v.p.x-(e[0]+e[1])/2)<3.2&&(v.v.x+=Math.sign(v.p.x-(e[0]+e[1])/2||1)*f*4),vs.setFromEuler(id.set(0,Math.atan2(v.v.x,v.v.z),0)),qr.compose(v.p,vs,ac.setScalar(.75)),u.setMatrixAt(g,qr)}u.instanceMatrix.needsUpdate=!0}}}function Zp({count:i=120,box:e=[-15,15,0,16,-15,15],colors:t=[7043626,9071140,11045167,5917212],follow:n=null}={}){let r=new Ve;r.setAttribute("position",new Ge([-.075,0,0,-.02,.026,0,.03,.022,0,.075,0,0,.03,-.022,0,-.02,-.026,0],3)),r.setIndex([0,2,1,0,3,2,0,4,3,0,5,4]);let s=new Float32Array(i*3),o=new ce;for(let f=0;f<i;f++)o.set(t[f%t.length]),s.set([o.r,o.g,o.b],f*3);r.setAttribute("aCol",new Dt(s,3));let a=new me({side:gt,uniforms:{uFog:{value:new Je(.6,.6,.6,.02)}},vertexShader:"attribute vec3 aCol; varying vec3 vC; varying float vD; void main(){ vC = aCol; float k = smoothstep(1.6, 3.2, -(modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).z); vec4 mv = modelViewMatrix * instanceMatrix * vec4(position * k, 1.0); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec4 uFog; varying vec3 vC; varying float vD; void main(){ gl_FragColor = vec4(mix(vC, uFog.rgb, 1.0 - exp(-vD * uFog.a)), 1.0); }"}),l=new dn(r,a,i);l.frustumCulled=!1;let c=Array.from({length:i},()=>({x:Math.random(),y:Math.random(),z:Math.random(),ph:Math.random()*100,sp:.5+Math.random()*.5,spin:(Math.random()-.5)*6})),u=e[1]-e[0],d=e[3]-e[2],h=e[5]-e[4];return{mesh:l,leaves:!0,update(f,g,v,m,p){m&&a.uniforms.uFog.value.set(m.r,m.g,m.b,p);let M=v?v.position.x:0,w=v?v.position.z:0;for(let x=0;x<i;x++){let A=c[x];A.y-=g*.045*A.sp,A.y<0&&(A.y+=1);let R=Math.sin(f*1.6*A.sp+A.ph),_=e[0]+((A.x*u+M-e[0])%u+u)%u+R*.5,E=e[4]+((A.z*h+w-e[4])%h+h)%h+Math.cos(f*1.2+A.ph)*.3;n&&(_+=M-(e[0]+e[1])/2,E+=w-(e[4]+e[5])/2),Ao.set(_,e[2]+A.y*d,E),vs.setFromEuler(id.set(R*1.1,f*A.spin+A.ph,Math.cos(f*2+A.ph)*.8)),qr.compose(Ao,vs,ac.setScalar(1)),l.setMatrixAt(x,qr)}l.instanceMatrix.needsUpdate=!0}}}function rd({count:i=18,box:e=[-60,60,.5,6,-60,60],color:t=[.8,.84,.86],opacity:n=.22,size:r=[26,6]}={}){let s=new Lt(1,1),o=new me({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uCol:{value:new ce(...t)},uA:{value:n}},vertexShader:`varying vec2 vUv; varying float vI; void main(){ vUv = uv; vI = float(gl_InstanceID);
      vec4 c = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0); vec3 r = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);   // always faces the camera sideways, stays upright
      vec3 sx = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), 1.0);
      vec3 w = c.xyz + r * position.x * sx.x + vec3(0.0, 1.0, 0.0) * position.y * sx.y; gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uCol; uniform float uA; varying vec2 vUv; varying float vI;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      void main(){ vec2 q = vUv * vec2(4.0, 1.4) + vec2(uTime * 0.03 + vI * 3.7, vI);
        float d = n(q) * 0.6 + n(q * 2.3) * 0.3 + n(q * 5.1) * 0.1;
        float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y);
        gl_FragColor = vec4(uCol, smoothstep(0.35, 0.8, d) * edge * uA); }`}),a=new dn(s,o,i);a.frustumCulled=!1,a.renderOrder=5;let l=Array.from({length:i},()=>({x:e[0]+Math.random()*(e[1]-e[0]),y:e[2]+Math.random()*(e[3]-e[2]),z:e[4]+Math.random()*(e[5]-e[4]),v:.3+Math.random()*.6,s:.7+Math.random()*.6}));return{mesh:a,update(c,u){o.uniforms.uTime.value=c;for(let d=0;d<i;d++){let h=l[d];h.x+=h.v*u,h.x>e[1]&&(h.x=e[0]),qr.compose(Ao.set(h.x,h.y,h.z),vs.identity(),ac.set(r[0]*h.s,r[1]*h.s,1)),a.setMatrixAt(d,qr)}a.instanceMatrix.needsUpdate=!0}}}Ut();var uM=`
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
  }`,hM=`
  ${ri}
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
  }`,Jp=async i=>{for(let e=0;;e++)try{let t=await fetch(i);if(t.ok)return t.json();throw 0}catch(t){if(e>2)throw t;await new Promise(n=>setTimeout(n,500))}};async function rr({base:i,unpack:e,loader:t,U:n,groundLm:r,groundK:s,rect:o,tier:a,onPart:l,scene:c=null,layout:u=null}){let[d,h]=await Promise.all([Jp(i+"plants/protos.json"),u?Promise.resolve(u):Jp(i+"garden.json")]),f=new Vn;f.name="garden";let g={};h.items.forEach((E,b)=>{a!=="high"&&E[0].startsWith("flower")&&b%2||a!=="high"&&(d[E[0]]?.size?.[1]??9)<1.2&&b%2||(g[E[0]]=g[E[0]]||[]).push(E)});let v={},m=E=>v[E]||(v[E]=new Promise(b=>t.load(i+"plants/"+E,y=>{y.colorSpace=qt,y.flipY=!0,y.anisotropy=4,b(y)},void 0,()=>b(null)))),p={value:0},M=new Ke,w=new It,x=new S,A=new S,R=new S(0,1,0),_=[];for(let[E,b]of Object.entries(g)){let y=d[E];if(!y)continue;let C=y.size[1],U=E.startsWith("flower")||E.startsWith("periwinkle")||E.startsWith("fern"),I=Math.min(a==="high"?520:320,a==="high"?70+C*90:26+C*44);for(let D of y.parts)_.push((async()=>{let H,F;try{[H,F]=await Promise.all([e(i+"plants/"+D.pack),D.tex?m(D.tex):null])}catch(z){console.warn("[garden] skipped",D.pack,z);return}let V=new me({side:gt,uniforms:{...n,tAlb:{value:F},uHasTex:{value:F?1:0},uTint:{value:new ce(.5,.45,.4)},uLeaf:{value:D.leaf?1:0},uSway:{value:D.leaf?C>2?.35:.12:0},uH:{value:Math.max(C,.2)},uFar:{value:I},uFade:p,tLm:{value:r},uK:{value:s},uRect:{value:o}},vertexShader:uM,fragmentShader:hM});if(y.kind==="solid"&&y.parts.length===1){H.computeBoundingBox();let z=H.boundingBox;z.min.y>.01&&H.translate(0,-z.min.y-(z.max.y-z.min.y)*.06,0)}let N=new dn(H,V,b.length);b.forEach((z,J)=>{let[,re,fe,Me,q,te]=z;M.compose(A.set(re,fe,Me),w.setFromAxisAngle(R,q),x.set(te,te,te)),N.setMatrixAt(J,M)}),N.instanceMatrix.needsUpdate=!0,N.frustumCulled=!1,N.layers.set(1),f.add(c?So(N,c,{cell:b.length<200?80:48,minCount:6,fogK:n.uFogK?n.uFogK.value:0,far:I+10}):N),l&&l()})())}return await Promise.all(_),{group:f,fade:p,layout:h}}Ut();function jp(i,e,t,n){let r=new Ve,s=new Float32Array(t*4);for(let l=0;l<t;l++){let c=Math.random();s[l*4]=c<.45?0:c<.9?1:2,s[l*4+1]=Math.random()*Math.PI*2,s[l*4+2]=Math.random(),s[l*4+3]=Math.random()}r.setAttribute("position",new qe(new Float32Array(t*3),3)),r.setAttribute("aD",new qe(s,4)),r.boundingSphere=new yn(new S(i,1.5,e),6);let o=new me({transparent:!0,depthWrite:!1,blending:Ct,uniforms:{...n,uC:{value:new S(i,0,e)},uPx:{value:1}},vertexShader:`
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
        float size = kind > 1.5 ? 0.16 : kind > 0.5 ? 0.02 : 0.026;   // fine droplets, not beads
        gl_PointSize = clamp(size * uPx / max(-mv.z, 0.5), 1.0, 22.0);
      }`,fragmentShader:`
      ${ri}
      varying float vA; varying vec3 vW;
      void main(){
        vec2 d = gl_PointCoord - 0.5; float r = dot(d, d);
        float a = (1.0 - smoothstep(0.0, 0.25, r)) * clamp(vA, 0.0, 1.0);
        a *= 0.7; vec3 c = vec3(0.85, 0.9, 0.95) * a * 0.9;
        gl_FragColor = vec4(c, a);
      }`}),a=new $t(r,o);return a.frustumCulled=!1,a}var Qp="data:font/woff2;base64,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";var dM=`
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
.nrt-ui .busy{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);padding:7px 13px;border-radius:999px;background:rgba(14,18,24,.5);color:rgba(255,255,255,.9);font-size:10.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;opacity:0;transition:opacity .5s;white-space:nowrap}
.nrt-ui .busy:before{content:"";display:inline-block;width:6px;height:6px;margin-right:8px;border-radius:50%;background:#ffb067;animation:nrtGlow 1.2s ease-in-out infinite}
.nrt-ui .prog{position:absolute;left:0;bottom:0;height:3px;width:0;background:linear-gradient(90deg,#f2822f,#ffb067);opacity:0;transition:opacity 1s}
.nrt-ui a:focus-visible,.nrt-ui button:focus-visible{outline:2px solid #ffd9a8;outline-offset:3px}
@media (prefers-reduced-motion:reduce){.nrt-ui *,.nrt-ui *:after{animation:none!important;transition-duration:.01s!important}}
.nrt-ui .hint:after{content:"";display:block;width:1px;height:18px;margin:10px auto 0;background:rgba(255,255,255,.8);animation:nrtDrop 1.8s ease-in-out infinite}
@keyframes nrtDrop{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
@media (max-width:640px){.nrt-ui .brand{left:16px;top:22px;font-size:11px;letter-spacing:.1em;max-width:calc(100% - 150px);white-space:nowrap}.nrt-ui .cta{right:16px;top:14px;padding:9px 15px;font-size:12px}
  .nrt-ui .line{font-size:19px;line-height:1.42}.nrt-ui .story{bottom:92px}.nrt-ui .kick{font-size:11.5px;letter-spacing:.24em}.nrt-ui .snd{left:14px;bottom:18px}}
`;function $p(i,e,{contactUrl:t="https://nomadiichorse.com/contact-us",onBook:n=null,sound:r=null}={}){if(!document.getElementById("nrt-css")){let f=document.createElement("style");f.id="nrt-css",f.textContent=`@font-face{font-family:"Nomadiic Line";src:url(${Qp}) format("woff2");font-display:block}`+dM,document.head.appendChild(f);let g=document.createElement("link");g.rel="stylesheet",g.href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap",document.head.appendChild(g)}let s=document.createElement("div");s.className="nrt-ui",s.innerHTML=`<div class="scrim"></div><div class="brand">NOMADIIC HORSE DESIGNS</div><a class="cta" href="${t}">Contact us</a><button class="snd" type="button" aria-label="Sound" aria-pressed="true"></button><div class="prog" aria-hidden="true"></div><div class="busy" role="status">Loading</div>
    <div class="story">${e.map((f,g)=>`<div class="ch" data-i="${g}"><div class="kick">${f.kick}</div><div class="line">${f.line}</div>${f.book?`<button class="book" data-book="${f.book}">Explore the book</button>`:""}${f.contact?`<div><a class="endcta" href="${t}">Contact us</a></div>`:""}</div>`).join("")}</div>
    <div class="hint">${matchMedia("(pointer: coarse)").matches?"Swipe up to enter":"Scroll to enter"}</div>`,s.querySelector(".story").setAttribute("role","region"),s.querySelector(".story").setAttribute("aria-label","Story"),s.querySelector(".story").setAttribute("aria-live","polite"),i.appendChild(s);let o=[...s.querySelectorAll(".ch")],a=f=>s.querySelector(f);s.querySelectorAll(".book").forEach(f=>f.addEventListener("click",g=>{g.stopPropagation(),n&&n(f.dataset.book)}));let l=a(".snd"),c=f=>f?'<svg viewBox="0 0 16 16"><path d="M2 8h1.5M5 5v6M8 3v10M11 6v4M14 7.3v1.4"/></svg>':'<svg viewBox="0 0 16 16"><path d="M2 8h12"/></svg>',u=()=>{let f=!(r&&r.muted);l.innerHTML=c(f),l.setAttribute("aria-pressed",String(f)),l.setAttribute("aria-label",f?"Mute sound":"Turn sound on")};u(),l.addEventListener("click",f=>{f.stopPropagation(),r&&(r.setMuted(!r.muted),u())});let d=-2,h=null;return{el:s,update(f,g){let v=window.visualViewport?window.visualViewport.height:innerHeight,m=Math.max(0,Math.round(i.getBoundingClientRect().bottom-v));m!==this._extra&&(this._extra=m,a(".story").style.transform=`translate(-50%, ${-m}px)`,a(".hint").style.transform=`translate(-50%, ${-m}px)`);let p=g>1.2;a(".brand").style.opacity=p?1:0,a(".cta").style.opacity=p?1:0,a(".scrim").style.opacity=p?1:0,a(".hint").style.opacity=p&&f<.004&&g>3?1:0,l.style.opacity=p&&r&&r.started?1:0,l.style.pointerEvents=l.style.opacity==="1"?"auto":"none",r&&r.muted!==h&&(h=r.muted,u()),a(".prog").style.opacity=p?1:0,a(".prog").style.width=Math.max(0,Math.min(1,f))*100+"%";let M=p?e.findIndex(w=>f>=w.at[0]&&f<w.at[1]):-1;M!==d&&(d=M,o.forEach((w,x)=>{w.classList.toggle("on",x===M),w.setAttribute("aria-hidden",String(x!==M))}))},setBusy(f){let g=a(".busy"),v=f?"1":"0";g.style.opacity!==v&&(g.style.opacity=v)},destroy(){s.remove()}}}function e0(i){let e=document.createElement("canvas");e.width=4096,e.height=160;let t=e.getContext("2d");return t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font='120px "Nomadiic Line", Satoshi, serif',"letterSpacing"in t&&(t.letterSpacing="38px"),t.fillText(i,e.width/2,e.height/2+6),e}function t0(i){let n=document.createElement("canvas");n.width=1024,n.height=372;let r=n.getContext("2d"),s=r.createLinearGradient(0,0,0,372);s.addColorStop(0,"#6b4a2b"),s.addColorStop(.5,"#4f341d"),s.addColorStop(1,"#3a2614"),r.fillStyle=s,r.fillRect(0,0,1024,372);for(let c=0;c<90;c++){let u=Math.random()*1024,d=Math.random()*372,h=20+Math.random()*90,f=r.createRadialGradient(u,d,0,u,d,h);f.addColorStop(0,Math.random()<.5?"rgba(70,90,60,0.10)":"rgba(30,18,8,0.14)"),f.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=f,r.fillRect(u-h,d-h,h*2,h*2)}let o=r.getImageData(0,0,1024,372);for(let c=0;c<o.data.length;c+=4){let u=(Math.random()-.5)*14;o.data[c]+=u,o.data[c+1]+=u,o.data[c+2]+=u}r.putImageData(o,0,0);let a=(c,u="#f6d58e",d="rgba(20,10,4,0.75)")=>{r.save(),r.translate(2,3),r.fillStyle=d,r.strokeStyle=d,c(),r.restore(),r.save(),r.translate(-1,-1.5),r.fillStyle="#fff3c9",r.strokeStyle="#fff3c9",c(),r.restore();let h=r.createLinearGradient(0,0,0,372);h.addColorStop(0,"#f2c66e"),h.addColorStop(1,"#b9832f"),r.fillStyle=h,r.strokeStyle=h,c()};a(()=>{r.lineWidth=7,r.strokeRect(26,26,972,320),r.lineWidth=2,r.strokeRect(42,42,940,288)}),r.textAlign="center",r.textBaseline="middle";let l=(c,u,d)=>{let h=d;do r.font=`${u} ${h}px Satoshi, system-ui, sans-serif`,h-=2;while(r.measureText(c).width>874&&h>30)};return i[0]==="Selected as"?(a(()=>{r.font="600 46px Satoshi, system-ui, sans-serif","letterSpacing"in r&&(r.letterSpacing="14px"),r.fillText("SELECTED AS",1024/2,118),"letterSpacing"in r&&(r.letterSpacing="0px")}),a(()=>{l(i[1],600,100),r.fillText(i[1],1024/2,230)})):(a(()=>{l(i[0],600,i.length>1?106:112),r.fillText(i[0],1024/2,i.length>1?140:190)}),i[1]&&a(()=>{l(i[1],500,70),"letterSpacing"in r&&(r.letterSpacing="4px"),r.fillText(i[1],1024/2,258),"letterSpacing"in r&&(r.letterSpacing="0px")})),n}Ut();Ut();var fM=`
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
  float relief(vec3 nd, vec3 n){ return clamp(1.0 + (dot(nd, uSunDir) - dot(n, uSunDir)) * 0.9, 0.45, 1.6); }`;function pM(i){return Object.entries(i||{}).map(([e,t])=>`
  uniform sampler2D tD_${e}, tN_${e};
  vec3 D_${e}(vec3 p, vec3 n){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    return texture2D(tD_${e}, p.zy * s).rgb * w.x + texture2D(tD_${e}, p.xz * s).rgb * w.y + texture2D(tD_${e}, p.xy * s).rgb * w.z; }
  vec3 N_${e}(vec3 p, vec3 n, float k){ vec3 w = triw(n); float s = ${(1/t.s).toFixed(5)};
    vec3 tx = texture2D(tN_${e}, p.zy * s).xyz * 2.0 - 1.0, ty = texture2D(tN_${e}, p.xz * s).xyz * 2.0 - 1.0, tz = texture2D(tN_${e}, p.xy * s).xyz * 2.0 - 1.0;
    tx.xy *= k; ty.xy *= k; tz.xy *= k;
    vec3 nx = vec3(tx.xy + n.zy, abs(tx.z) * n.x), ny = vec3(ty.xy + n.xz, abs(ty.z) * n.y), nz = vec3(tz.xy + n.xy, abs(tz.z) * n.z);
    return normalize(nx.zyx * w.x + ny.xzy * w.y + nz.xyz * w.z); }`).join(`
`)}function mM(i,e=1,t=0,n=[.5,.5,.55],r=.03){let s=new de(new In(3500,64,32),new me({side:Kt,depthWrite:!1,uniforms:{tSky:{value:i},uExp:{value:e},uRot:{value:t},uHaze:{value:new ce(...n)},uCut:{value:r},uStorm:{value:0},uFlash:{value:0},uT:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform sampler2D tSky; uniform float uExp, uRot, uCut, uStorm, uFlash, uT; uniform vec3 uHaze; varying vec3 vD; ${oc}
      void main(){ vec3 d = normalize(vD); float k = smoothstep(uCut, uCut + 0.12, d.y);
        vec3 c = uHaze;
        if (k > 0.0) { float lon = atan(d.z, d.x) + uRot, lat = asin(clamp(d.y, -1.0, 1.0));      // only the photograph's sky is ever sampled: no stretched rows
          c = mix(uHaze, pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * uExp, k); }
        if (uStorm > 0.001) { vec3 ph = c * mix(vec3(1.0), vec3(0.42, 0.47, 0.58), uStorm);           // the skyline (mountains) stays, darkened under the deck
          c = mix(ph, stormSky(d, uT, uFlash), uStorm * smoothstep(0.035, 0.16, d.y)); }
        gl_FragColor = vec4(c, 1.0); }`}));return s.renderOrder=-1,s.frustumCulled=!1,s}var gM=`
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
    gl_Position = projectionMatrix * viewMatrix * w; }`;function i0(i,e){let t=new Ke().makeTranslation(...i.origin);return t.multiply(new Ke().makeRotationY(i.yaw-e.yaw)),t.multiply(new Ke().makeTranslation(-e.origin[0],-e.origin[1],-e.origin[2])),t}async function sd(i,e,t){let n=t.renderTarget,r=i.getRenderTarget();try{i.setRenderTarget(n,0);let s=i.compileAsync(e,t.children[0]||t);i.setRenderTarget(r),await s}catch{i.setRenderTarget(r)}t.update(i,e)}var n0=(i,e)=>{globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(i,Math.round(performance.now()-e)+"ms")};async function Ti(i,{base:e,unpack:t,loader:n,renderer:r,tier:s,grainTex:o}){let a=e+i.dir+"/",l=y=>new Promise((C,U)=>n.load(a+y,I=>{I.colorSpace=Nn,I.anisotropy=4,I.generateMipmaps=/_lm\./.test(y)?!1:I.generateMipmaps,/_lm\./.test(y)&&(I.minFilter=un),C(I)},void 0,U)),c=await fetch(a+"scene.json").then(y=>y.json()),u=new Oi;u.background=new ce(...i.background||[.1,.1,.1]);let d={uTime:{value:0},uFogCol:{value:new ce(...i.fog?.col||[.5,.5,.5])},uFogK:{value:i.fog?.k??0}},h=new Or(s==="high"?256:128,{generateMipmaps:!0,minFilter:fi,type:Jt}),f=[],g={},v={};await Promise.all(Object.entries(i.textures||{}).map(async([y,C])=>{let U=(H,F)=>new Promise((V,N)=>n.load(e+"tex/"+H,z=>{z.wrapS=z.wrapT=ls,z.anisotropy=8,z.colorSpace=F?qt:Nn,V(z)},void 0,N)),[I,D]=await Promise.all([U(C.id+"_diff.webp",!0),U(C.id+"_nor.webp",!1)]);v["tD_"+y]={value:I},v["tN_"+y]={value:D}}));let m=pM(i.textures),p={value:new S(...i.sun||[.4,.8,.3]).normalize()},M={value:new ce(...i.sunCol||[1,.82,.58])},w={value:i.scatter??.5};for(let y of i.parts){let C=typeof y=="string"?y:y.name,U=typeof y=="object"&&y.planar,[I,D]=await Promise.all([t(a+C+".pack"),l(C+"_lm.webp")]),H=performance.now();I.computeVertexNormals(),n0(i.dir+" normals "+C,H);let F=new me({uniforms:{...d,tLm:{value:D},tGrain:{value:o},tEnv:{value:h.texture},uHasEnv:{value:0},uK:{value:c.lm[C]},uRect:{value:new Je(...c.rect||[0,1,0,1])},uSunDir:p,uSunCol:M,uScatter:w,...v,...i.uniforms||{}},defines:U?{PLANAR:""}:{},side:U?gt:$i,vertexShader:gM,fragmentShader:`${fM}
${m}
${i.glsl||""}
void main(){
          vec3 n = vN; n = dot(n, n) > 1e-6 ? normalize(n) : vec3(0.0, 1.0, 0.0);
          vec3 L = lmDecode(texture2D(tLm, vUv).rgb, uK);
          vec3 V = normalize(cameraPosition - vW), R = reflect(-V, n);
          float fres = pow(clamp(1.0 - max(dot(n, V), 0.0), 0.0, 1.0), 5.0);
          float k = vKind + 0.5; vec3 c = vec3(0.5) * L;
          ${i.palette}
          gl_FragColor = vec4(clamp(fog(c), vec3(0.0), vec3(16.0)), 1.0); }`}),V=new de(I,F);V.frustumCulled=!1,u.add(Op(V,u,{fogK:i.fog?.k||0})),f.push(F),U&&(g.groundLm=D)}if(i.sky){let y=await new Promise((C,U)=>n.load(e+"tex/"+i.sky.file,I=>{I.colorSpace=Nn,I.generateMipmaps=!1,I.minFilter=un,C(I)},void 0,U));g.sky=mM(y,i.sky.exposure??1,i.sky.rot??0,i.sky.haze||i.fog?.col||[.5,.5,.55],i.sky.cut??.03),u.add(g.sky)}let x={scene:u,U:d,info:c,renderer:r,tier:s,loader:n,dir:a,unpack:t,texL:l,envTex:h.texture,base:e,groundLm:g.groundLm,texU:v,sunDir:p,sky:g.sky},A=performance.now(),R=i.extras?await i.extras(x):null;if(n0(i.dir+" extras (incl. awaits)",A),i.envAt){let y=new us(.3,4e3,h);y.position.set(...i.envAt),u.add(y);let C=new Or(2),U=[];u.traverse(I=>{for(let D of[].concat(I.material||[]))D.uniforms&&D.uniforms.tEnv&&D.uniforms.tEnv.value===h.texture&&(U.push(()=>{D.uniforms.tEnv.value=h.texture}),D.uniforms.tEnv.value=C.texture),D.envMap===h.texture&&(U.push(()=>{D.envMap=h.texture,D.needsUpdate=!0}),D.envMap=null,D.needsUpdate=!0)});try{await sd(r,u,y)}finally{U.forEach(I=>I()),C.dispose()}f.forEach(I=>I.uniforms.uHasEnv.value=1)}let _=Xr(i.way),E=new S,b=new S;return{key:i.dir,scene:u,sky:g.sky,chapters:i.chapters,exposure:i.exposure??1,sun:p.value.clone(),entry:i.entry,exit:i.exit,exitPortal:i.exitPortal,pose(y,C){_.sample(y,E,b),C.position.copy(E),C.lookAt(b)},closeUp(y){return(i.closeUps||[]).some(([C,U,I,D])=>(y.x-C)**2+(y.y-U)**2+(y.z-I)**2<D*D)},update(y,C,U,I){d.uTime.value=y,R?.update?.(y,C,U,I)},setPx(y){R?.setPx?.(y)},dispose(){u.traverse(y=>{y.geometry?.dispose?.();let C=y.material;C&&(Array.isArray(C)?C:[C]).forEach(U=>{U.uniforms?.tLm?.value?.dispose?.(),U.dispose()})}),h.dispose(),R?.dispose?.()}}}var vM="M\u012B\u1E6Dhr\u0101k\u012B",Ai={w:44,h:22,z:-46,y:11},Sa=-7,Ta=-16,tn=(i,e,t)=>[i,e,t],xM=[{pos:tn(0,1.9,42),tgt:tn(0,2.1,5),w:1},{pos:tn(0,7,34),tgt:tn(-4,6,-16),w:1.2},{pos:tn(-16,6.5,8),tgt:tn(Sa,6,Ta),w:1.2},{pos:tn(-12.5,5,1.5),tgt:tn(Sa+1,4.6,Ta+3),w:1.1},{pos:tn(-7.2,3.9,-5.4),tgt:tn(Sa+2.6,2.05,Ta+3.9),w:1.3},{pos:tn(-1.8,3.9,-4.2),tgt:tn(Sa+4.5,2.2,Ta+5),w:1.3},{pos:tn(4,9,6),tgt:tn(0,11,Ai.z),w:1.3},{pos:tn(0,11,-14),tgt:tn(0,11.5,Ai.z),w:1.4},{pos:tn(0,11,-26),tgt:tn(0,11,Ai.z),w:1},{pos:tn(12,4.5,-31),tgt:tn(27,3.6,-36),w:1},{pos:tn(25.6,1.9,-36),tgt:tn(60,2.1,-36),w:0}],ad=[{at:[.06,.42],kick:"Our own brand \xB7 "+vM,line:"Pure Arabica from Shimoga, treated like engineering. Brand identity, packaging and a Shopify store."},{at:[.42,.86],kick:"We do not brew. We execute.",line:"Every bean measured, every mark specified, and a warm face against the cold data.",book:"mithraki"}],r0=`
  attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
  void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * w; }`,od=`
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
    // small end faces that got no light in the bake must not show as dark squares and steps in the bright plaster
    if (k < 1.0)       c = vec3(0.95, 0.90, 0.83) * mix(vec3(1.0), grain * 1.08, 0.35) * max(L, vec3(0.62, 0.58, 0.52));                       // lime plaster
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
  }`;async function s0({base:i,unpack:e,loader:t,renderer:n,tier:r,grainTex:s}){let o=i+"mithraki/",a=ee=>new Promise((se,Le)=>t.load(o+ee,Ne=>{Ne.colorSpace=Nn,Ne.anisotropy=8,se(Ne)},void 0,Le)),[l,c,u,d,h,f,g]=await Promise.all([fetch(o+"scene.json").then(ee=>ee.json()),e(o+"room.pack"),a("room_lm.webp"),e(o+"relief.pack"),a("relief_lm.webp"),e(o+"machine.pack"),a("machine_lm.webp")]);c.computeVertexNormals();let v=new Oi;v.background=new ce(.85,.82,.78);let m={uTime:{value:0},uWake:{value:0},uHandOn:{value:0},uHand:{value:new S(0,11,Ai.z+3)}},p=new Or(r==="high"?256:128,{generateMipmaps:!0,minFilter:fi,type:Jt}),M=new me({uniforms:{...m,tLm:{value:u},tGrain:{value:s},tEnv:{value:p.texture},uK:{value:l.lm}},vertexShader:r0,fragmentShader:od}),w=new de(c,M);w.frustumCulled=!1,v.add(w),f.computeVertexNormals();let x=new me({uniforms:{...m,tLm:{value:g},tGrain:{value:s},tEnv:{value:p.texture},uK:{value:l.lmMachine}},vertexShader:r0,fragmentShader:od}),A=new de(f,x);A.frustumCulled=!1,v.add(A),d.computeVertexNormals();let R=l.relief.rect,_=new me({uniforms:{...m,tLm:{value:h},tGrain:{value:s},uK:{value:l.relief.k},uRect:{value:new Je(R[0],R[1],R[2],R[3])}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tLm, tGrain; uniform float uK, uWake, uHandOn; uniform vec3 uHand; uniform vec4 uRect; varying vec3 vW, vN;
      vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
      void main(){
        // the true face of the surface, not the averaged vertex normals: on these long thin triangles those fan out into shards
        vec3 n = normalize(cross(dFdx(vW), dFdy(vW))); if (n.z < 0.0) n = -n;
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (vW.y - uRect.z) / (uRect.w - uRect.z));
        vec3 L = lmDecode(texture2D(tLm, uv).rgb, uK);
        vec3 alb = vec3(0.93, 0.89, 0.83) * mix(1.0, texture2D(tGrain, vW.xy / 3.0).r * 1.08, 0.3);
        vec3 d = uHand - vW; float dist = length(d); vec3 l = d / max(dist, 1e-3);
        float hand = max(dot(n, l), 0.0) * exp(-dist * dist / 16.0) * uHandOn;          // a warm light held close to the plaster
        vec3 c = alb * (L * (0.85 + 0.15 * uWake) + vec3(1.0, 0.6, 0.32) * hand * 2.4 * (0.4 + 0.6 * uWake));
        gl_FragColor = vec4(clamp(c, vec3(0.0), vec3(16.0)), 1.0); }`}),E=new de(d,_);E.frustumCulled=!1,v.add(E);let b=new uo;M.uniforms.tEnv.value=null;let y=new us(.5,300,p);y.position.set(-2,4,-2),v.add(y);let C=M.clone();C.uniforms={...M.uniforms,tEnv:{value:null}},C.fragmentShader=od.replace("vec3 env(vec3 R, float lod){ return textureLod(tEnv, R, lod).rgb; }","vec3 env(vec3 R, float lod){ return vec3(0.18, 0.16, 0.15); }");let U=C.clone();U.uniforms={...C.uniforms,tLm:{value:g},uK:{value:l.lmMachine}},w.material=C,A.material=U,await sd(n,v,y),w.material=M,A.material=x,M.uniforms.tEnv.value=p.texture,C.dispose(),U.dispose();{let ee=r==="high",se=new Mr(new Lt(54,92),{textureWidth:ee?1024:512,textureHeight:ee?1024:512,clipBias:.003,shader:{name:"mithrakiFloor",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:"uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW; void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tDiffuse; varying vec4 vUv4; varying vec3 vW; void main(){ vec3 V = normalize(cameraPosition - vW); float f = pow(1.0 - clamp(V.y, 0.0, 1.0), 3.0);
          vec3 r = texture2DProj(tDiffuse, vUv4).rgb; gl_FragColor = vec4(r, clamp(0.16 + 0.6 * f, 0.0, 0.72)); }`}});se.rotation.x=-Math.PI/2,se.position.set(0,.012,-4),se.material.transparent=!0,se.material.depthWrite=!1,se.renderOrder=1,v.add(se)}let I=r==="high"?700:300,D=new Ve,H=new Float32Array(I*4);for(let ee=0;ee<I;ee++)H[ee*4]=ee%2?1:-1,H[ee*4+1]=Math.random(),H[ee*4+2]=Math.random()*6.28,H[ee*4+3]=Math.random();D.setAttribute("position",new qe(new Float32Array(I*3),3)),D.setAttribute("aD",new qe(H,4));let F=new $t(D,new me({transparent:!0,depthWrite:!1,uniforms:{uTime:m.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; attribute vec4 aD; varying float vA;
      void main(){ float life = fract(uTime * 0.12 + aD.y); float gx = ${Sa.toFixed(1)} + aD.x * 2.6;
        vec3 p = vec3(gx + sin(life * 6.0 + aD.z) * 0.5 * life, 2.4 + life * 6.5, ${(Ta+3.85).toFixed(2)} + cos(life * 5.0 + aD.z) * 0.4 * life);
        vA = 0.045 * sin(life * 3.14159) * (0.5 + aD.w * 0.5);
        vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((0.35 + life * 1.6) * uPx / max(-mv.z, 0.5), 1.0, 90.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.93, 0.9) * a, a); }",blending:Ct}));F.frustumCulled=!1,v.add(F);let V=new oe(-9,-9),N=new Xl,z=new di(new S(0,0,1),-Ai.z-.3),J=-10,re=new S,fe=ee=>{let se=n.domElement.getBoundingClientRect();V.set((ee.clientX-se.left)/se.width*2-1,-((ee.clientY-se.top)/se.height)*2+1),J=performance.now()/1e3};n.domElement.addEventListener("pointermove",fe,{passive:!0});let Me=Xr(xM),q=new S,te=new S,ue=new S(0,11,Ai.z+3);return{sun:new S(...l.sun||[-.42,.87,-.25]).normalize(),scene:v,chapters:ad,exposure:.98,entry:{origin:[0,0,42],yaw:0},exit:{origin:[26,0,-36],yaw:-Math.PI/2},exitPortal:{pos:[25.97,3.6,-36],size:[4.5,7.2],yaw:-Math.PI/2},pose(ee,se){Me.sample(ee,q,te),se.position.copy(q),se.lookAt(te)},update(ee,se,Le,Ne){m.uTime.value=ee,m.uWake.value+=(ht.smoothstep(Le,.45,.85)-m.uWake.value)*(1-Math.exp(-se*2));let it=performance.now()/1e3,le=!1;it-J<2.5&&(N.setFromCamera(V,Ne),N.ray.intersectPlane(z,re)&&Math.abs(re.x)<Ai.w/2&&Math.abs(re.y-Ai.y)<Ai.h/2&&(ue.set(re.x,re.y,Ai.z+3.2),le=!0)),le||ue.set(Math.sin(ee*.21)*9+Math.sin(ee*.53)*3,Ai.y+Math.sin(ee*.33)*5,Ai.z+3.2),m.uHand.value.lerp(ue,1-Math.exp(-se*4)),m.uHandOn.value+=((Le>.35?1:0)-m.uHandOn.value)*(1-Math.exp(-se*1.5))},setPx(ee){F.material.uniforms.uPx.value=ee},destroy(){n.domElement.removeEventListener("pointermove",fe),p.dispose()},dispose(){n.domElement.removeEventListener("pointermove",fe),p.dispose(),v.traverse(ee=>{ee.geometry?.dispose?.();for(let se of[].concat(ee.material||[]))se.dispose()})}}}Ut();var Ln=(i,e,t)=>[i,e,t],yM=[{pos:Ln(0,1.9,48.4),tgt:Ln(0,2.1,10),w:.8},{pos:Ln(0,2.6,40),tgt:Ln(0,4,18),w:1.2},{pos:Ln(-.6,2.4,31),tgt:Ln(0,4.5,6),w:1.2},{pos:Ln(.6,2.7,23),tgt:Ln(3.6,1.4,11),w:1.4},{pos:Ln(-.6,2.7,9),tgt:Ln(-3.6,1.4,-3),w:1.4},{pos:Ln(0,2.8,-6),tgt:Ln(0,3,-40),w:1},{pos:Ln(0,2.6,-34),tgt:Ln(0,2.4,-70),w:1},{pos:Ln(0,2.1,-50),tgt:Ln(0,2.1,-80),w:1},{pos:Ln(0,1.9,-57.6),tgt:Ln(0,2.1,-95),w:0}],ld=[{at:[.04,.5],kick:"Client \xB7 Revise Tax",line:"Full branding and website for Revise Tax."},{at:[.5,1.01],kick:"The result",line:"One of the best-looking tax websites in India, where money feels calm, clear and trusted.",book:"revisetax"}],MM=`
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
`;function o0(i){return Ti({dir:"revisetax",parts:["room"],way:yM,chapters:ld,palette:MM,textures:{trav:{id:"palace_marble",s:3.2},marb:{id:"marble_tiles",s:4},plas:{id:"white_plaster_rough_01",s:2}},sun:[-.2,.93,.3],sunCol:[1,.85,.62],scatter:.35,background:[.6,.66,.74],fog:{col:[.78,.74,.66],k:.004},exposure:1,envAt:[0,3,10],entry:{origin:[0,0,48],yaw:0},exit:{origin:[0,0,-58],yaw:0},exitPortal:{pos:[0,3.6,-58.03],size:[4.5,7.2],yaw:0},extras:async({scene:e,info:t,tier:n,U:r,envTex:s})=>{let o=new me({transparent:!0,depthWrite:!1,blending:Ct,side:gt,uniforms:{uTime:r.uTime},vertexShader:"varying vec3 vL; void main(){ vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec3 vL; uniform float uTime;
          void main(){ float h = clamp(vL.y / 9.5 + 0.5, 0.0, 1.0); float edge = 1.0 - smoothstep(0.25, 0.5, max(abs(vL.x) / 3.0, abs(vL.z) / 3.0));
            float a = edge * (0.25 + 0.75 * h) * 0.055 * (0.9 + 0.1 * sin(uTime * 0.7 + vL.y)); gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`});for(let I of t.sky){let D=new Wn(3,9.5,3,1,1,1),H=D.attributes.position;for(let V=0;V<H.count;V++){let N=H.getY(V);H.setX(V,H.getX(V)-N*.19),H.setZ(V,H.getZ(V)+N*.38)}let F=new de(D,o);F.position.set(1,4.75,I-1.8),F.renderOrder=5,e.add(F)}let a=n==="high"?160:70,l=new nr(.032,.032,.006,16),c=new en({color:new ce("#e6ac40"),metalness:1,roughness:.22,envMapIntensity:1.4});c.envMap=s;let u=new dn(l,c,a);u.frustumCulled=!1,e.add(u);let d=[],h=(()=>{let I=7;return()=>(I=I*16807%2147483647)/2147483647})(),f=()=>(h()+h()+h()-1.5)*.8,g=(I,D)=>.9+.36*Math.pow(Math.max(0,1-(I/.8)**2-(D/.48)**2),.65),v=new In(1,28,12,0,Math.PI*2,0,Math.PI/2);t.chests.forEach(([I,D,H],F)=>{let V=F<2?2600:1100,N=Math.cos(H),z=Math.sin(H);for(let re=0;re<V;re++){let fe=(h()*2-1)*.8,Me=(h()*2-1)*.48,q=g(fe,Me);if(q<.905&&h()<.7)continue;let te=Math.floor(h()*3),ue=q-te*.011+h()*.004,ee=(g(fe+.02,Me)-g(fe-.02,Me))/.04,se=(g(fe,Me+.02)-g(fe,Me-.02))/.04;d.push([I+fe*N+Me*z,ue,D-fe*z+Me*N,Math.atan(se)+f()*.5,h()*6.28,-Math.atan(ee)+f()*.5])}let J=new de(v,c);J.scale.set(.79,.34,.47),J.position.set(I,.9,D),J.rotation.y=H,e.add(J);for(let re=0;re<(F<2?420:160);re++){let fe=h()*6.283,Me=.95+Math.pow(h(),2.2)*1.8;d.push([I+Math.cos(fe)*Me*1.1,.004+h()*.006,D+Math.sin(fe)*Me*.75,f()*.08,h()*6.28,f()*.08])}});let m=new nr(.032,.032,.006,12),p=new dn(m,c,d.length);p.frustumCulled=!1;{let I=new Ke,D=new It,H=new Mn,F=new S,V=new S(1,1,1);d.forEach((N,z)=>{H.set(N[3],N[4],N[5],"YXZ"),D.setFromEuler(H),I.compose(F.set(N[0],N[1],N[2]),D,V),p.setMatrixAt(z,I)})}e.add(p),e.add(new _i(16773597,3811864,1.2));let M=new Si(16769720,2.5);M.position.set(-3,10,6),e.add(M);let w=Array.from({length:a},(I,D)=>{let H=t.chests[D%t.chests.length];return{x:H[0]+(Math.random()-.5)*.9,z:H[1]+(Math.random()-.5)*.6,ph:Math.random(),sp:.6+Math.random()*.5,r:Math.random()*6}}),x=new Ke,A=new It,R=new Mn,_=new S,E=new S(1,1,1),b=n==="high"?1400:500,y=new Ve,C=new Float32Array(b*3);for(let I=0;I<b;I++){let D=t.sky[I%t.sky.length];C[I*3]=(Math.random()-.5)*4+1,C[I*3+1]=Math.random()*9,C[I*3+2]=D-1.8+(Math.random()-.5)*4}y.setAttribute("position",new qe(C,3));let U=new $t(y,new me({transparent:!0,depthWrite:!1,blending:Ct,uniforms:{uTime:r.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uTime * 0.08, 9.0); p.x += sin(uTime * 0.3 + p.z) * 0.2;
          vA = 0.35 * smoothstep(0.0, 1.0, p.y) * (1.0 - smoothstep(7.5, 9.0, p.y)); vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.02 * uPx / -mv.z, 1.0, 6.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * a, a); }"}));return U.frustumCulled=!1,e.add(U),{update(I){for(let D=0;D<a;D++){let H=w[D],F=(I*H.sp*.25+H.ph)%1,V=9.6-F*F*8.7;R.set(I*3+H.r,I*2+H.r,0),A.setFromEuler(R),_.set(H.x,Math.max(V,1.15),H.z),x.compose(_,A,E),u.setMatrixAt(D,x)}u.instanceMatrix.needsUpdate=!0},setPx(I){U.material.uniforms.uPx.value=I}}}},i)}Ut();Ut();var wM=`
  float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }`;function Ro(i){let e={uTime:i.U.uTime,uFogCol:i.U.uFogCol,uFogK:i.U.uFogK,uCenter:{value:new oe},uTile:{value:i.tile||60},uFade:{value:new oe(...i.fade||[24,32])},uH:{value:i.height||.5},uWide:{value:i.wide||1.2},uPxAng:{value:.0015},tLm:{value:i.lm},uK:{value:i.K},uRect:{value:new Je(...i.rect)},uSun:{value:(i.sun||new S(.5,.6,.4)).clone().normalize()},uTip:{value:new ce(...i.tip||[.22,.3,.07])},uDry:{value:new ce(...i.dry||[.42,.38,.16])},uRoot:{value:new ce(...i.root||[.035,.05,.015])},uWind:{value:i.wind??1}},t=new me({side:gt,uniforms:e,vertexShader:`${wM}
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
      }`}),n=new de(ba(i.count||12e4,e.uTile.value,1,i.seed||3),t);n.frustumCulled=!1;let r=new S;return{mesh:n,update(s){s.getWorldDirection(r),e.uCenter.value.set(s.position.x+r.x*e.uTile.value*.38,s.position.z+r.z*e.uTile.value*.38)},setPx(s){e.uPxAng.value=s}}}var Dn=i=>3.2*Math.sin(i*.045)+1.6*Math.sin(i*.11+1.3),nn=(i,e,t)=>[i,e,t],jn=-58,si=Dn(jn)+3.3;function bM(i,e){let t=Math.abs(i-Dn(e)),n=Math.pow(Math.min(1,Math.max(0,(t-2.6)/6)),1.5),r=1.4*Math.sin(i*.09+.5)*Math.cos(e*.07)+.9*Math.sin((i-e)*.13)+.5*Math.sin(i*.31+e*.23);return r=r*n+.06*Math.sin(e*.5),r*=Math.min(1,Math.abs(e-52)/8)*Math.min(1,Math.abs(e+100)/8),r+.02*t*n*3}var Wi=bM(si,jn)+.44,EM=[{pos:nn(0,1.9,52.4),tgt:nn(Dn(30),2.2,30),w:.8},{pos:nn(Dn(40),2.3,40),tgt:nn(Dn(18),2.6,18),w:1},{pos:nn(Dn(22),2.4,22),tgt:nn(Dn(0),2.8,0),w:1},{pos:nn(Dn(2),2.5,2),tgt:nn(Dn(-24),2.6,-24),w:1},{pos:nn(Dn(-22)+1.2,2.2,-22),tgt:nn(Dn(-34)-3.2,1.6,-34),w:1.4},{pos:nn(Dn(-34)+1,1.9,-34),tgt:nn(Dn(-38)-3,1.9,-38),w:1.6},{pos:nn(Dn(-50)-.4,2.3,-50),tgt:nn(si,Wi,jn),w:1.2},{pos:nn(si-.9,Wi+.42,jn+.8),tgt:nn(si-.05,Wi+.06,jn),w:1.6},{pos:nn(Dn(-68),2.3,-68),tgt:nn(Dn(-86),2.6,-86),w:1},{pos:nn(Dn(-78)*.6,2.2,-80),tgt:nn(0,3.4,-100),w:1},{pos:nn(0,1.9,-99.6),tgt:nn(0,2.1,-140),w:0}],cd=[{at:[.04,.42],kick:"Client \xB7 Bisi Kaapi",line:"Branding and website for Bisi Kaapi: filter coffee rooted in the hills of Karnataka."},{at:[.42,1.01],kick:"From the forest to the cup",line:"Coffee grows in forests like this one. We designed a brand that tastes like a Bangalore morning.",book:"bisikaapi"}],_M=`
  const float HX = ${si.toFixed(3)}, HZ = ${jn.toFixed(1)};
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
`;function a0(i){return Ti({dir:"bisikaapi",parts:["room",{name:"ground",planar:!0}],way:EM,chapters:cd,palette:_M,textures:{leaf:{id:"forest_leaves_02",s:2.4},lat:{id:"red_laterite_soil_stones",s:3.2},mud:{id:"brown_mud_leaves_01",s:2.2},bark:{id:"bark_brown_02",s:1.4},wall:{id:"mossy_stone_wall",s:3},mrock:{id:"mossy_rock",s:2},flag:{id:"rock_pitted_mossy",s:1.1}},sun:[.45,.5,-.6],sunCol:[1,.84,.58],scatter:1.1,envAt:[si,Wi+.5,jn],closeUps:[[si,Wi,jn,2.6]],sky:{file:"rainforest_trail_sky.webp",exposure:.9,cut:.45},background:[.6,.72,.8],fog:{col:[.5,.6,.55],k:.0048},exposure:1.05,entry:{origin:[0,0,52],yaw:0},exit:{origin:[0,0,-100],yaw:0},exitPortal:{pos:[0,3.6,-100.03],size:[4.5,7.2],yaw:0,arch:!0},extras:async e=>{let{scene:t,info:n,tier:r,U:s,loader:o,base:a,unpack:l,groundLm:c,dir:u}=e,d=new S(.45,.5,-.6).normalize(),h={uTime:s.uTime,uSun:{value:d},uFogCol:s.uFogCol,uFogK:s.uFogK},f=new Je(...n.rect),g=await rr({base:a,unpack:l,loader:o,U:h,groundLm:c,groundK:n.lm.ground,rect:f,tier:r,scene:t,layout:{items:n.items.filter(F=>!F[0].startsWith("rock_moss_set"))}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let v=await new Promise(F=>o.load(u+"leaves.webp",V=>{V.colorSpace=qt,V.anisotropy=4,F(V)})),m=(F,V,N,z)=>{let J=new Ve,re=[],fe=[],Me=[],q=[],te=z,ue=()=>(te=te*16807%2147483647)/2147483647;for(let ee=0;ee<F;ee++){let se=new S(ue()-.5,ue()-.5,ue()-.5).multiplyScalar(1.7),Le=new S(ue()-.5,ue()*.6,ue()-.5).normalize(),Ne=new S().crossVectors(Le,new S(ue()-.5,ue()-.5,ue()-.5)).normalize(),it=.75+ue()*.5,le=Math.floor(ue()*16),je=le%4/4,B=1-(Math.floor(le/4)+1)/4,Ze=re.length/3;for(let[Se,Fe]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let ve=se.clone().addScaledVector(Ne,Se*N*it).addScaledVector(Le,Fe*V*it);re.push(ve.x,ve.y,ve.z),fe.push(je+(Se+1)/8,B+(Fe+1)/8),q.push(se.length()/1.2)}Me.push(Ze,Ze+1,Ze+2,Ze,Ze+2,Ze+3)}return J.setAttribute("position",new Ge(re,3)),J.setAttribute("uv",new Ge(fe,2)),J.setAttribute("aOut",new Ge(q,1)),J.setIndex(Me),J},p=r==="high",M=(F,V)=>{let N=new ii;N.index=F.index;for(let z of["position","uv","aOut"])N.attributes[z]=F.attributes[z];return N.setAttribute("aC",new Dt(new Float32Array(V.flatMap(z=>[z[0],z[1],z[2],z[3]])),4)),N.setAttribute("aT",new Dt(new Float32Array(V.flatMap((z,J)=>[z[4],J*.6180339%1])),2)),N.instanceCount=V.length,N},w=n.clusters.filter((F,V)=>F[4]!==1&&(p||V%2===0)),x=n.clusters.filter((F,V)=>F[4]===1&&(p||V%3!==0)),A=M(m(p?80:46,.3,.3,9),w),R=M(m(p?70:44,.24,.24,21),x),_=new de(R,new me({side:gt,uniforms:{...h,tLeaf:{value:v},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:f}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
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
            gl_FragColor = vec4(c, 1.0); }`}));_.frustumCulled=!1,t.add(Vr(_,t,{cell:36,pad:4,fogK:h.uFogK?h.uFogK.value:0}));let E=new de(A,_.material);E.frustumCulled=!1,t.add(Vr(E,t,{cell:36,pad:4,fogK:h.uFogK?h.uFogK.value:0}));let b=n.cherries.filter((F,V)=>r==="high"||V%2===0),y=new dn(new In(.045,6,4),new en({roughness:.25,metalness:0}),b.length),C=new Ke,U=new ce;b.forEach((F,V)=>{C.makeTranslation(F[0],F[1],F[2]),y.setMatrixAt(V,C),y.setColorAt(V,F[3]?U.setRGB(.55,.03,.03):U.setRGB(.25,.42,.08))}),y.frustumCulled=!1,t.add(So(y,t,{cell:30,minCount:120,fogK:h.uFogK?h.uFogK.value:0})),t.add(new _i(13624063,2761750,1.1));let I=new Si(16769200,2.2);I.position.copy(d).multiplyScalar(50),t.add(I);let D=new me({transparent:!0,depthWrite:!1,blending:Ct,side:gt,uniforms:{uTime:s.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.3, vUv.x) * (1.0 - smoothstep(0.7, 1.0, vUv.x)) * smoothstep(0.0, 0.5, vUv.y) * 0.09 * (0.85 + 0.15 * sin(uTime * 0.4 + vUv.x * 9.0));
          gl_FragColor = vec4(vec3(1.0, 0.92, 0.75) * a, a); }`});for(let F=0;F<18;F++){let V=40-F*8+(Math.random()-.5)*4,N=Dn(V)+(Math.random()-.5)*14,z=new de(new Lt(2.5+Math.random()*3,26),D);z.position.set(N,11,V),z.rotation.set(-.5,Math.random()*.6-.3,.42)}{let F=(ee,se=64)=>new tr(ee.map(([Le,Ne])=>new oe(Le,Ne)),se),V=ee=>e.texU[ee].value,N=F([[0,0],[.62,0],[.7,.08],[.72,.22],[.66,.36],[.5,.43],[.2,.445],[0,.445]],40),z=N.attributes.position;for(let ee=0;ee<z.count;ee++){let se=z.getX(ee),Le=z.getZ(ee),Ne=Math.atan2(Le,se),it=1+.06*Math.sin(Ne*5+1)+.04*Math.sin(Ne*11);z.setX(ee,se*it),z.setZ(ee,Le*it*.85)}N.computeVertexNormals();let J=new de(N,new en({map:V("tD_mrock"),normalMap:V("tN_mrock"),roughness:.92,color:14211276}));J.position.set(si,Wi-.445,jn),t.add(J);let re=new en({color:13803600,metalness:1,roughness:.24,envMap:e.envTex,envMapIntensity:1.3}),fe=new de(F([[0,0],[.085,0],[.1,.012],[.112,.045],[.128,.062],[.125,.066],[.106,.05],[.094,.016],[0,.012]]),re),Me=F([[0,0],[.04,0],[.044,.008],[.05,.11],[.056,.124],[.053,.126],[.046,.112],[.038,.012],[0,.01]]),q=new de(Me,re),te=new de(Me,re);fe.position.set(si-.05,Wi,jn),q.position.set(si-.05,Wi+.018,jn),te.position.set(si+.2,Wi,jn+.08);let ue=new de(new xo(.047,40),new me({uniforms:{uTime:s.uTime},vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vP; uniform float uTime; float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5); }
            void main(){ float r = length(vP) / 0.047; float foam = smoothstep(0.55, 0.95, r) * (0.7 + 0.3 * h(floor(vP * 900.0)));
              vec3 c = mix(vec3(0.16, 0.08, 0.035), vec3(0.62, 0.45, 0.28), foam * 0.9 + 0.12 * h(floor(vP * 500.0 + uTime)));   // filter coffee, frothed by pouring
              gl_FragColor = vec4(c * 0.9, 1.0); }`}));ue.rotation.x=-Math.PI/2,ue.position.set(si+.2,Wi+.105,jn+.08),t.add(fe,q,te,ue),n.hero=[si+.2,Wi+.12,jn+.08]}if(n.hero){let V=new Ve,N=new Float32Array(90*4);for(let J=0;J<90;J++)N[J*4]=Math.random(),N[J*4+1]=Math.random()*6.28,N[J*4+2]=Math.random(),N[J*4+3]=Math.random();V.setAttribute("position",new qe(N.slice(0,90*3),3)),V.setAttribute("aS",new qe(N,4));let z=new $t(V,new me({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime,uO:{value:new S(...n.hero)}},vertexShader:`uniform float uTime; uniform vec3 uO; attribute vec4 aS; varying float vA;
            void main(){ float t = fract(aS.x + uTime * (0.16 + aS.z * 0.08)); float h = t * 0.5;
              vec3 p = uO + vec3(cos(aS.y + h * 9.0) * (0.012 + h * 0.09), h, sin(aS.y + h * 9.0) * (0.012 + h * 0.09)) + vec3(sin(uTime * 0.9 + h * 10.0) * 0.06 * h, 0.0, 0.0);
              vA = sin(t * 3.14159) * 0.03 * smoothstep(0.0, 0.15, t); vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = clamp((14.0 + 46.0 * t) / -mv.z, 1.0, 60.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.95, 0.96, 0.94), a); }"}));z.frustumCulled=!1,z.renderOrder=7,t.add(z)}let H=Ro({U:s,lm:c,K:n.lm.ground,rect:n.rect,sun:d,tile:56,count:p?14e4:6e4,fade:[20,27],height:.42,wide:1.25,tip:[.16,.24,.06],dry:[.3,.3,.12],root:[.03,.04,.012],seed:7,heightGLSL:`float groundY(vec2 p){ float x = p.x, z = p.y; float px = 3.2 * sin(z * 0.045) + 1.6 * sin(z * 0.11 + 1.3); float d = abs(x - px);
          float fl = pow(clamp((d - 2.6) / 6.0, 0.0, 1.0), 1.5);
          float h = 1.4 * sin(x * 0.09 + 0.5) * cos(z * 0.07) + 0.9 * sin((x - z) * 0.13) + 0.5 * sin(x * 0.31 + z * 0.23);
          h = h * fl + 0.06 * sin(z * 0.5); h *= min(1.0, abs(z - 52.0) / 8.0) * min(1.0, abs(z + 100.0) / 8.0); return h + 0.02 * d * fl * 3.0; }`,maskGLSL:`float grassMask(vec2 p){ float px = 3.2 * sin(p.y * 0.045) + 1.6 * sin(p.y * 0.11 + 1.3);
          return smoothstep(2.2, 3.2, abs(p.x - px)) * smoothstep(2.4, 3.4, distance(p, vec2(${si.toFixed(2)}, ${jn.toFixed(1)}))) * smoothstep(0.25, 0.6, gn(p * 0.21)); }`});return t.add(H.mesh),{update(F,V,N,z){H.update(z)},setPx(F){H.setPx(1/F)}}}},i)}Ut();var Un=(i,e,t)=>[i,e,t],FM=[{pos:Un(0,1.9,12.4),tgt:Un(0,1,-40),w:.45},{pos:Un(0,5.5,-6.5),tgt:Un(0,-24,-95),w:1},{pos:Un(-44,14,-28),tgt:Un(0,0,-105),w:1},{pos:Un(-66,34,-80),tgt:Un(0,30,-108),w:1.1},{pos:Un(-44,74,-132),tgt:Un(0,30,-112),w:1.1},{pos:Un(10,86,-142),tgt:Un(0,20,-118),w:1},{pos:Un(12,24,-172),tgt:Un(0,10,-130),w:1.1},{pos:Un(6,-8,-180),tgt:Un(0,-14,-200),w:1},{pos:Un(2,-32,-184),tgt:Un(0,-56,-190),w:0}],fd=[{at:[.04,.45],kick:"Client \xB7 Glavida",line:"Branding and website for Glavida, a real estate company that builds homes worth waiting for."},{at:[.45,.94],kick:"From line to landmark",line:"Every great building starts as a line on paper. We gave Glavida a brand people want to move into.",book:"glavida"}],zM="uniform float uBuild, uSea;",BM=`
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
`;function l0(i){return Ti({dir:"glavida",parts:["room"],way:FM,chapters:fd,palette:BM,glsl:zM,textures:{stone:{id:"large_sandstone_blocks",s:3},conc:{id:"concrete_tile_facade",s:3.2},rock:{id:"rock_face_03",s:2.8},asph:{id:"asphalt_02",s:4},lawn:{id:"forest_ground_04",s:3}},sun:[-.7,.25,-.35],sunCol:[1,.6,.4],scatter:.9,sky:{file:"kiara_9_dusk_sky.webp",exposure:1,rot:3.734,cut:0,haze:[.22,.3,.44]},uniforms:{uBuild:{value:-24},uSea:{value:-26}},background:[.16,.26,.42],fog:{col:[.22,.3,.44],k:.0026},exposure:.95,envAt:[0,30,-20],entry:{origin:[0,0,12],yaw:0},exit:{origin:[2,-26,-184],yaw:0},extras:async e=>{let{scene:t,info:n,tier:r,U:s,loader:o,base:a,unpack:l,renderer:c}=e,u=e.sky,d=new Mr(new Lt(8e3,5e3),{textureWidth:1024,textureHeight:512,color:5928336,shader:{name:"harbour",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:s.uTime},vertexShader:"uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW; void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime; varying vec4 vUv4; varying vec3 vW;
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
              gl_FragColor = vec4(c, 1.0); }`}});d.rotation.x=-Math.PI/2,d.position.set(0,n.sea,-305),t.add(d);let h=new ds(new Uint8Array([200,200,200,255]),1,1);h.needsUpdate=!0;let f={uTime:s.uTime,uSun:{value:new S(-.7,.3,.25).normalize()},uFogCol:s.uFogCol,uFogK:s.uFogK},g=await rr({base:a,unpack:l,loader:o,U:f,groundLm:h,groundK:.5,rect:new Je(-1,1,-1,1),tier:r,scene:t,layout:{items:n.items}}).catch(()=>null);g&&(t.add(g.group),g.fade.value=1);let v=new en({color:13214247,metalness:.3,roughness:.6});t.add(new _i(9414872,1710626,.9));let m=new Si(16756864,1);m.position.set(-70,35,25),t.add(m);let p=(b,y,C)=>{let U=[],I=(V,N,z)=>{let J=new S().subVectors(N,V),re=new nr(z,z,J.length(),4,1,!0);re.applyQuaternion(new It().setFromUnitVectors(new S(0,1,0),J.clone().normalize())),re.translate((V.x+N.x)/2,(V.y+N.y)/2,(V.z+N.z)/2),U.push(re)},D=(V,N,z)=>C==="y"?new S(N*y/2,V,z*y/2):new S(V,N*y/2,z*y/2),H=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[V,N]of H)I(D(0,V,N),D(b,V,N),.09);let F=y*1.1;for(let V=0;V<b-.01;V+=F)for(let N=0;N<4;N++){let[z,J]=H[N],[re,fe]=H[(N+1)%4],Me=Math.min(b,V+F);I(D(V,z,J),D(V,re,fe),.05),I(D(V,z,J),D(Me,re,fe),.045)}return M(U)},{mergeGeometries:M}=await Promise.resolve().then(()=>(dd(),hd)),w=[];for(let b of[1,2,5]){let y=n.towers[b],C=y[5]+2,U=y[0]+y[2]/2+3,I=y[1],D=C+16-n.gy,H=new de(p(D,1.6,"y"),v);H.position.set(U,n.gy,I),t.add(H);let F=new Vn;F.position.set(U,C+16,I),t.add(F);let V=new de(p(50,1.1,"x"),v);V.position.x=-12,F.add(V);let N=new de(new Wn(2.2,2,2),new en({color:14210248,roughness:.5}));N.position.set(1.8,-1.6,0),F.add(N);let z=new de(new Wn(3.6,2.4,2),new en({color:7170660,roughness:.9}));z.position.set(-9.5,-1.4,0),F.add(z);let J=new de(new nr(.03,.03,20,4),new Jn({color:1710618}));J.position.set(26,-10,0),F.add(J);let re=new de(new Wn(.5,.7,.3),new en({color:13214247}));re.position.set(26,-20.3,0),F.add(re);let fe=new de(new In(.25,8,6),new Jn({color:new ce(6,.4,.2)}));fe.position.set(38,.8,0),F.add(fe),w.push({jib:F,ph:b,beacon:fe})}let x=[];t.traverse(b=>{b.isMesh&&b.material.uniforms&&b.material.uniforms.uBuild&&x.push(b.material)});let A=n.sea,R=s.uFogCol.value.clone(),_=s.uFogK.value,E=t.background.clone();return{update(b,y,C,U){let I=ht.lerp(-26,92,ht.smoothstep(C,.05,.6));x.forEach(H=>H.uniforms.uBuild.value=I),w.forEach(H=>{H.jib.rotation.y=Math.sin(b*.07+H.ph)*1.4,H.beacon.visible=Math.sin(b*3+H.ph)>.2});let D=U.position.y<A;s.uFogCol.value.copy(D?new ce(.02,.12,.2):R),s.uFogK.value=D?.12:_,t.background.copy(D?new ce(.02,.12,.2):E),u.visible=!D,d.visible=!D}}}},i)}Ut();var pn=(i,e,t)=>[i,e,t],OM=[{pos:pn(0,46,50),tgt:pn(-2,22,44),w:.6},{pos:pn(0,39,46),tgt:pn(0,20,6),w:1},{pos:pn(2,18,28),tgt:pn(0,2,-10),w:1},{pos:pn(-1,5,6),tgt:pn(0,2,-30),w:1},{pos:pn(1.5,3.2,-30),tgt:pn(4,1.5,-78),w:1},{pos:pn(0,4,-62),tgt:pn(0,3,-100),w:1},{pos:pn(2,6.5,-88),tgt:pn(0,22,-120),w:1},{pos:pn(0,24,-108),tgt:pn(0,52,-136),w:1},{pos:pn(0,43.5,-122),tgt:pn(0,70,-150),w:1},{pos:pn(0,51.2,-126),tgt:pn(0,110,-150),w:0}],pd=[{at:[.04,.5],kick:"Client \xB7 Innovius",line:"Branding and website for Innovius, a technology company."},{at:[.5,1.01],kick:"Invisible, until it lights up",line:"Like the cables under every ocean, great technology works quietly. We gave it a voice and a face.",book:"innovius"}],HM=`
  // caustics: sunlight focused by the waves above into bright, sharp, slowly crawling webs, split slightly into colour
  float caus1(vec2 p, float t){ vec2 q = p; float c = 0.0;
    for (int i = 0; i < 4; i++) { float s = float(i) + 1.0;
      q = p * (0.6 + s * 0.35) + vec2(sin(t * 0.55 + q.y * 1.6 + s), cos(t * 0.47 + q.x * 1.3 - s)) * (0.9 / s);
      c += 1.0 / (1.0 + 24.0 * abs(sin(q.x) * sin(q.y))); }
    return pow(c / 4.0, 1.7) * 2.6; }
  vec3 caustic3(vec2 p, float t){ return vec3(caus1(p + 0.012, t), caus1(p, t), caus1(p - 0.012, t)); }`,kM=`
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
`;function c0(i){return Ti({dir:"innovious",parts:["room",{name:"ground",planar:!0}],way:OM,chapters:pd,palette:kM,glsl:HM,textures:{sand:{id:"sand_02",s:2.5},grav:{id:"coral_gravel",s:2},rock:{id:"rock_wall_08",s:3.5}},sun:[.1,.95,.2],sunCol:[.5,.8,.85],scatter:.7,background:[.03,.2,.28],fog:{col:[.03,.2,.28],k:.012},exposure:1.2,entry:{origin:[0,52,50],yaw:0},exit:{origin:[0,52,-126],yaw:0},extras:async e=>{let{scene:t,info:n,tier:r,U:s}=e,o=new ce(.1,.42,.5),a=new ce(.02,.16,.25),l=r==="high"?420:180,c=16,u=new Lt(1.15,1,2,c*2);u.translate(0,.5,0);let d=new ii;d.index=u.index,d.attributes.position=u.attributes.position,d.attributes.uv=u.attributes.uv;let h=new Float32Array(l*4);for(let z=0;z<l;z++){let J=Math.random()<.5?-1:1;h[z*4]=J*(6+Math.random()*40),h[z*4+1]=60-Math.random()*200,h[z*4+2]=8+Math.random()*18,h[z*4+3]=Math.random()*6.28}d.setAttribute("aK",new Dt(h,4)),d.instanceCount=l;let f=new de(d,new me({side:gt,uniforms:{uTime:s.uTime,uFogCol:s.uFogCol,uFogK:s.uFogK},vertexShader:`uniform float uTime; attribute vec4 aK; varying float vY; varying vec3 vW; varying vec2 vUv;
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
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}));f.frustumCulled=!1,t.add(f);let g=new me({transparent:!0,depthWrite:!1,blending:Ct,side:gt,uniforms:{uTime:s.uTime},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime; void main(){ float a = smoothstep(0.0, 0.4, vUv.x) * (1.0 - smoothstep(0.6, 1.0, vUv.x)) * smoothstep(0.0, 0.9, vUv.y) * 0.085 * (0.55 + 0.45 * sin(uTime * 0.5 + vUv.x * 7.0));
          gl_FragColor = vec4(vec3(0.6, 0.9, 1.0) * a, a); }`});for(let z=0;z<26;z++){let J=new de(new Lt(3+Math.random()*6,60),g);J.position.set((Math.random()-.5)*60,26,50-z*7.5),J.rotation.set(.12,Math.random()*Math.PI,.08),J.renderOrder=6,t.add(J)}let v=new de(new Lt(420,420,1,1),new me({side:gt,depthWrite:!1,uniforms:{uTime:s.uTime,uFogCol:s.uFogCol},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; uniform vec3 uFogCol; varying vec3 vW;
          float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
          float hgt(vec2 p, float t){ return n2(p * 0.35 + vec2(t * 0.11, t * 0.05)) * 1.0 + n2(p * 0.95 - vec2(t * 0.17, -t * 0.09)) * 0.45 + n2(p * 2.4 + vec2(t * 0.3, t * 0.21)) * 0.18 + n2(p * 6.1 - t * 0.45) * 0.06; }
          void main(){ vec3 V = normalize(vW - cameraPosition); float t = uTime;
            // a real water skin: many small waves (fine detail stays sharp however close you rise), seen through Snell's window
            float e = 0.08, h0 = hgt(vW.xz, t); vec2 g = vec2(hgt(vW.xz + vec2(e, 0.0), t) - h0, hgt(vW.xz + vec2(0.0, e), t) - h0) / e;
            vec3 nrm = normalize(vec3(-g.x * 0.35, -1.0, -g.y * 0.35));
            vec3 T = refract(V, nrm, 1.33); float cosI = dot(V, nrm), kW = 1.0 - 1.33 * 1.33 * (1.0 - cosI * cosI);
            // the window's edge is soft, and close under the surface it opens into light: never hard flat blobs
            float win = mix(smoothstep(-0.3, 0.3, kW), 1.0, smoothstep(16.0, 3.0, length(vW - cameraPosition)) * 0.9);
            vec3 D = kW > 0.0 ? normalize(T) : reflect(V, nrm);
            vec3 sunD = normalize(vec3(0.12, 0.96, -0.25)); float sd = max(dot(D, sunD), 0.0);
            vec3 sky = mix(vec3(0.3, 0.6, 0.72), vec3(0.62, 0.84, 0.94), smoothstep(0.3, 1.0, D.y));
            vec3 below = vec3(0.025, 0.15, 0.19);
            float edge = 1.0 - smoothstep(0.0, 0.18, abs(dot(V, nrm)) - 0.66);
            vec3 c = mix(below, sky, win) + vec3(0.55, 0.85, 0.9) * edge * 0.12 * win + vec3(1.0, 0.96, 0.85) * (pow(sd, 220.0) * 9.0 + pow(sd, 18.0) * 0.5) * win;
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * 0.011)), 1.0); }`}));v.rotation.x=Math.PI/2,v.position.set(0,52,-100),v.renderOrder=2,t.add(v);let m=r==="high"?2500:900,p=new Ve,M=new Float32Array(m*3);for(let z=0;z<m;z++)M[z*3]=(Math.random()-.5)*80,M[z*3+1]=Math.random()*50,M[z*3+2]=60-Math.random()*200;p.setAttribute("position",new qe(M,3));let w=new $t(p,new me({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y - uTime * 0.25, 50.0); p.x += sin(uTime * 0.2 + p.z) * 0.6;
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(5.0, 60.0, -mv.z)) * 0.5; gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.06 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.0, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.8, 0.9, 0.95) * a, a); }"}));w.frustumCulled=!1,t.add(w);let x=r==="high"?260:120,A=new tr([[0,-.21],[.03,-.18],[.06,-.08],[.065,.02],[.05,.12],[.02,.18],[.012,.2]].map(([z,J])=>new oe(z,J)),10);A.scale(1,1,.55),A.rotateX(-Math.PI/2);let R=new Ve;R.setAttribute("position",new Ge([0,0,-.19,0,.07,-.29,0,-.07,-.29],3));let{mergeGeometries:_}=await Promise.resolve().then(()=>(dd(),hd)),E=A.toNonIndexed();E.deleteAttribute("uv"),E.deleteAttribute("normal");let b=_([E,R]);b.deleteAttribute("normal"),b.computeVertexNormals();let y=new en({color:12176598,metalness:.25,roughness:.4,emissive:1915464,side:gt});y.onBeforeCompile=z=>{z.uniforms.uTime=s.uTime,z.vertexShader=`uniform float uTime;
`+z.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x += sin(uTime * 14.0 + float(gl_InstanceID) * 1.7 + position.z * 18.0) * 0.025 * (1.0 - smoothstep(-0.3, 0.05, position.z));`),z.fragmentShader=z.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb *= mix(vec3(0.35, 0.45, 0.55), vec3(1.0), smoothstep(-0.03, 0.04, -vNormal.y));`)};let C=new dn(b,y,x);C.frustumCulled=!1,t.add(C),t.add(new _i(10475775,661536,1.4));let U=Array.from({length:x},()=>({r:4+Math.random()*5,h:(Math.random()-.5)*3,ph:Math.random()*6.28,sp:.25+Math.random()*.15})),I=new Ke,D=new It,H=new S,F=new S(1,1,1),V=new S(0,1,0),N=Ro({U:s,lm:e.groundLm,K:n.lm.ground,rect:n.rect,sun:new S(.1,.95,.2),tile:50,count:r==="high"?11e4:45e3,fade:[18,25],height:.75,wide:1.6,tip:[.2,.38,.12],dry:[.36,.42,.16],root:[.03,.07,.04],wind:.9,seed:21,heightGLSL:"float groundY(vec2 p){ float x = p.x, z = p.y; return 1.6 * sin(x * 0.05 + 0.4) * cos(z * 0.04) + 0.9 * sin((x + z) * 0.09) + 0.35 * sin(x * 0.23 - z * 0.17) - 0.0002 * x * x; }",maskGLSL:"float grassMask(vec2 p){ return smoothstep(0.42, 0.62, gn(p * 0.09) * 0.7 + gn(p * 0.5) * 0.3); }"});return t.add(N.mesh),{update(z,J,re,fe){N.update(fe);let Me=ht.clamp((fe.position.y-5)/40,0,1);s.uFogCol.value.copy(a).lerp(o,Me),t.background.copy(s.uFogCol.value);let q=3,te=-40+Math.sin(z*.05)*20;U.forEach((ue,ee)=>{let se=z*ue.sp+ue.ph;H.set(q+Math.cos(se)*ue.r,7+ue.h+Math.sin(se*2)*.6,te+Math.sin(se)*ue.r),D.setFromAxisAngle(V,-se),I.compose(H,D,F),C.setMatrixAt(ee,I)}),C.instanceMatrix.needsUpdate=!0},setPx(z){w.material.uniforms.uPx.value=z,N.setPx(1/z)}}}},i)}Ut();var Aa=-18,Yr=i=>2+1.6*Math.sin(i*.06);function h0(i,e){let t=(e-Aa)/26,n=-2.2+2.2/(1+Math.exp(-t*3))+Math.max(0,e-Aa)*.035,r=1.2*Math.max(0,Math.tanh((e-6)/10))*(.6+.4*Math.sin(i*.12+1))+.5*Math.sin(i*.21+e*.13)*Math.max(0,Math.tanh((e-2)/8)),s=Math.min(1,Math.abs(i-Yr(e))/5);return n+r*(.35+.65*s)+.04*Math.sin(i*1.3)*Math.sin(e*.9)}var xs=i=>Math.max(h0(Yr(i),i),.15)+.42+1.62,jt=37,En=Yr(jt)+.2,wr=h0(En,jt)+.13,Gn=(i,e,t)=>[i,e,t],VM=[{pos:Gn(0,-.8,-66),tgt:Gn(0,14,-44),w:.7},{pos:Gn(0,.7,-54),tgt:Gn(1,2.4,-8),w:1},{pos:Gn(1.4,1.5,-32),tgt:Gn(Yr(0),2.6,8),w:1.1},{pos:Gn(Yr(-8),xs(-8),-8),tgt:Gn(Yr(10),xs(10)-.3,10),w:1},{pos:Gn(Yr(12)-.4,xs(12),12),tgt:Gn(Yr(28),xs(28)-.6,28),w:1.1},{pos:Gn(En-.55,wr+.3,jt-.95),tgt:Gn(En,wr+.06,jt),w:1.4},{pos:Gn(En+3,xs(jt)+2,jt+2.5),tgt:Gn(En-30,26,jt+110),w:1.1},{pos:Gn(En+2,xs(jt)+16,jt+10),tgt:Gn(En-30,20,jt+240),w:0}],md=[{at:[.04,.5],kick:"Client \xB7 House of Moh",line:"Branding and website for House of Moh: daily creams for women and men."},{at:[.5,1.01],kick:"Soft by nature",line:"Gentle as a twilight shore and made for every day. We designed a brand you want on your skin.",book:"houseofmoh"}],u0=`
  float hmH(float x, float z){ float t = (z - ${Aa.toFixed(1)}) / 26.0;
    float base = -2.2 + 2.2 / (1.0 + exp(-t * 3.0)) + max(0.0, z - ${Aa.toFixed(1)}) * 0.035;
    float wx = 2.0 + 1.6 * sin(z * 0.06);
    float dune = 1.2 * max(0.0, tanh((z - 6.0) / 10.0)) * (0.6 + 0.4 * sin(x * 0.12 + 1.0)) + 0.5 * sin(x * 0.21 + z * 0.13) * max(0.0, tanh((z - 2.0) / 8.0));
    return base + dune * (0.35 + 0.65 * min(1.0, abs(x - wx) / 5.0)); }`,WM=`
  if (distance(vW.xz, vec2(${En.toFixed(3)}, ${jt.toFixed(1)})) < 1.45 && k > 1.5 && k < 7.0) discard;   // the baked plinth and jar: drawn live, at true scale
  if (k < 1.0) {                                     // sand: fine and dry above, dark and glassy where the waves have been, rippled below
    float wet = 1.0 - smoothstep(0.05, 0.55, vW.y);
    vec3 nd = N_sand(vW, n, 1.2); vec3 dry = D_sand(vW, n), dmp = D_wet(vW, n) * 0.8;
    vec3 a = mix(dry, dmp, wet); nd = normalize(mix(nd, N_wet(vW, n, 1.0), wet));
    float jd = distance(vW.xz, vec2(${En.toFixed(3)}, ${jt.toFixed(1)}));                            // the old plinth's baked shadow lifted
    vec3 Ls = mix(max(L, vec3(0.42, 0.4, 0.46)) * (0.7 + 0.3 * smoothstep(0.4, 0.75, jd)), L, smoothstep(1.6, 2.6, jd));
    c = a * Ls * 1.2 * relief(nd, n);
    c += env(reflect(-V, nd), 1.0) * wet * (0.04 + 0.5 * fres) * 0.5;                // the wet sand mirrors the sky
  }
  else if (k < 3.0) {                               // sandstone headlands and the plinth (the old stand-in's baked shadow lifted; a soft contact shadow kept)
    float jd = distance(vW.xz, vec2(${En.toFixed(3)}, ${jt.toFixed(1)}));
    vec3 Lp = mix(max(L, vec3(0.5, 0.46, 0.5)) * (0.55 + 0.45 * smoothstep(0.09, 0.2, jd)), L, smoothstep(0.75, 1.1, jd));
    vec3 nd = N_rock(vW, n, 1.3); c = D_rock(vW, n) * Lp * 1.25 * relief(nd, n); }
  else if (k < 4.0) { vec3 nd = N_plank(vW, n, 1.2); c = D_plank(vW, n) * L * 1.2 * relief(nd, n); }     // sun-silvered boardwalk planks
  else if (k < 5.0) c = D_rock(vW * 2.0, n) * vec3(0.8, 0.8, 0.78) * L;                                    // frangipani bark, smooth and grey
  else if (k < 6.0) { c = vec3(0.93, 0.88, 0.8) * max(L, vec3(0.62, 0.6, 0.66)) + env(R, 0.5) * (0.05 + 0.5 * fres) * 0.6; }   // the cream jar, glazed
  else if (k < 7.0) { c = vec3(0.85, 0.62, 0.3) * (L * 0.25 + 0.2) + vec3(0.85, 0.62, 0.3) * env(R, 0.8) * 1.2; }               // gold lid
  else c = vec3(0.04) * L + vec3(0.1) * fres;                                                                 // lantern iron
`;function d0(i){return Ti({dir:"houseofmoh",parts:["room",{name:"ground",planar:!0}],way:VM,chapters:md,palette:WM,textures:{sand:{id:"coast_sand_01",s:2.4},wet:{id:"damp_beach_sand",s:2},plank:{id:"weathered_planks",s:1.8},rock:{id:"coast_sand_rocks_02",s:4}},sun:[.2,.15,-1],sunCol:[1,.62,.42],scatter:1.1,closeUps:[[En,wr,jt,2.6]],sky:{file:"kiara_9_dusk_sky.webp",exposure:1.05,rot:2.429,cut:0},envAt:[En,wr+.4,jt],background:[.2,.25,.4],fog:{col:[.42,.42,.55],k:.0035},exposure:1.05,entry:{origin:[0,0,-66],yaw:Math.PI},exit:{origin:[En+2,xs(jt)+16,jt+10],yaw:0},extras:async e=>{let{scene:t,info:n,tier:r,U:s,loader:o,base:a,unpack:l,groundLm:c}=e,u=r==="high",d=new S(-.3,.42,.86).normalize(),h=new S(.2,.05,-1).normalize(),f=`uniform sampler2D tSky; uniform float uSkyRot;
        vec3 skyCol(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
          return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)); }`,g=e.sky,v=new de(new Lt(4e3,4e3,u?400:240,u?400:240),new me({transparent:!0,depthWrite:!1,side:gt,uniforms:{uTime:s.uTime,uFogCol:s.uFogCol,uFogK:s.uFogK,tSky:g.material.uniforms.tSky,uSkyRot:g.material.uniforms.uRot},vertexShader:`uniform float uTime; varying vec3 vW; varying float vCrest;
          void main(){ vec3 p = (modelMatrix * vec4(position, 1.0)).xyz;
            float w1 = sin(p.z * 0.35 + uTime * 1.1 + sin(p.x * 0.05) * 1.5), w2 = sin(p.x * 0.21 - p.z * 0.17 + uTime * 0.7), w3 = sin(p.z * 0.9 + p.x * 0.3 + uTime * 1.9);
            float shoal = smoothstep(-40.0, -8.0, p.z);                            // the swell grows as it shoals
            p.y += (w1 * 0.16 + w2 * 0.08 + w3 * 0.03) * (0.6 + shoal * 0.8); vCrest = w1 * 0.5 + 0.5; vW = p;
            gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uTime; uniform vec3 uFogCol; uniform float uFogK; varying vec3 vW; varying float vCrest; ${u0} ${f}
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
            gl_FragColor = vec4(c, a); }`}));v.rotation.x=-Math.PI/2,v.position.set(0,0,-120),v.renderOrder=4,v.frustumCulled=!1,t.add(v);let m=d.clone(),p={uTime:s.uTime,uSun:{value:m},uFogCol:s.uFogCol,uFogK:s.uFogK},M=new Je(...n.rect),w=n.items.filter(le=>!(le[0].startsWith("coast_rocks")&&le[3]<Aa+1)),x=await rr({base:a,unpack:l,loader:o,U:p,groundLm:c,groundK:n.lm.ground,rect:M,tier:r,scene:t,layout:{items:w}}).catch(()=>null);x&&(t.add(x.group),x.fade.value=1);let A=await new Promise(le=>o.load(a+"bisikaapi/leaves.webp",je=>{je.colorSpace=qt,je.anisotropy=4,le(je)})),R=(le,je,B)=>{let Ze=new Ve,Se=[],Fe=[],ve=[],Ye=[],Ae=B,L=()=>(Ae=Ae*16807%2147483647)/2147483647;for(let T=0;T<le;T++){let X=new S(L()-.5,L()-.5,L()-.5).multiplyScalar(1.6),K=new S(L()-.5,.2+L()*.7,L()-.5).normalize(),ie=new S().crossVectors(K,new S(L()-.5,L()-.5,L()-.5)).normalize(),ne=.75+L()*.5,Ie=Math.floor(L()*16),xe=Ie%4/4,Pe=1-(Math.floor(Ie/4)+1)/4,st=Se.length/3;for(let[he,Re]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let Xe=X.clone().addScaledVector(ie,he*je*ne).addScaledVector(K,Re*je*ne);Se.push(Xe.x,Xe.y,Xe.z),Fe.push(xe+(he+1)/8,Pe+(Re+1)/8),Ye.push(X.length()/1.1)}ve.push(st,st+1,st+2,st,st+2,st+3)}return Ze.setAttribute("position",new Ge(Se,3)),Ze.setAttribute("uv",new Ge(Fe,2)),Ze.setAttribute("aOut",new Ge(Ye,1)),Ze.setIndex(ve),Ze},_=(le,je)=>{let B=new ii;B.index=le.index;for(let Ze of["position","uv","aOut"])B.attributes[Ze]=le.attributes[Ze];return B.setAttribute("aC",new Dt(new Float32Array(je.flatMap(Ze=>[Ze[0],Ze[1],Ze[2],Ze[3]])),4)),B.setAttribute("aT",new Dt(new Float32Array(je.flatMap((Ze,Se)=>[Ze[4],Se*.6180339%1])),2)),B.instanceCount=je.length,B},E=new me({side:gt,uniforms:{...p,tLeaf:{value:A},tLm:{value:c},uK:{value:n.lm.ground},uRect:{value:M}},vertexShader:`uniform float uTime; uniform vec4 uRect; uniform sampler2D tLm; uniform float uK; attribute vec4 aC; attribute vec2 aT; attribute float aOut;
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
            float d = length(vW - cameraPosition); c = mix(c, uFogCol, 1.0 - exp(-d * uFogK)); gl_FragColor = vec4(c, 1.0); }`}),b=new de(_(R(u?70:42,.2,5),n.clusters.filter(le=>le[4]===0).map(le=>[le[0],le[1]+.15,le[2],le[3]*1.7,0])),E);b.frustumCulled=!1,t.add(Vr(b,t,{cell:36,pad:4,fogK:p.uFogK?p.uFogK.value:0}));let y=new de(_(R(u?64:40,.11,13),n.clusters.filter(le=>le[4]===1)),E);y.frustumCulled=!1,t.add(Vr(y,t,{cell:36,pad:3,fogK:p.uFogK?p.uFogK.value:0}));let C=(le,je)=>{let B=[],Ze=[],Se=[];B.push(0,0,0),Ze.push(0,0,0);for(let ve=0;ve<5;ve++)for(let Ye=1;Ye<=4;Ye++)for(let Ae=-1;Ae<=1;Ae++){let L=ve*1.2566+Ae*.42*Math.sin(Ye/4*Math.PI*.9+.3)+Ye/4*.35,T=le*(Ye/4);B.push(Math.cos(L)*T,je*(Ye/4)**2*le,Math.sin(L)*T),Ze.push(Ye/4,0,0)}for(let ve=0;ve<5;ve++){let Ye=1+ve*12;Se.push(0,Ye+1,Ye),Se.push(0,Ye+2,Ye+1);for(let Ae=0;Ae<3;Ae++)for(let L=0;L<2;L++){let T=Ye+Ae*3+L,X=T+3;Se.push(T,X,T+1,T+1,X,X+1)}}let Fe=new Ve;return Fe.setAttribute("position",new Ge(B,3)),Fe.setAttribute("aR",new Ge(Ze.filter((ve,Ye)=>Ye%3===0),1)),Fe.setIndex(Se),Fe.computeVertexNormals(),Fe},U=(le,je)=>new me({side:gt,uniforms:{uTime:s.uTime,uFogCol:s.uFogCol,uFogK:s.uFogK,uIn:{value:new ce(...le)},uOut:{value:new ce(...je)},uMoon:{value:d}},vertexShader:`uniform float uTime; attribute float aR; varying float vR; varying vec3 vN, vW; void main(){ vR = aR; vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vec3 o = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;               // each flower nods in the sea breeze, the petals flutter a little
          w.xyz += vec3(sin(uTime * 1.7 + o.x * 0.8 + o.z * 0.6), 0.0, cos(uTime * 1.4 + o.z * 0.7)) * 0.03 + vec3(0.0, sin(uTime * 6.0 + o.x * 9.0 + aR * 5.0) * 0.006 * aR, 0.0); vW = w.xyz; vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uIn, uOut, uFogCol, uMoon; uniform float uFogK; varying float vR; varying vec3 vN, vW;
          void main(){ vec3 n = normalize(vN); vec3 alb = mix(uIn, uOut, smoothstep(0.15, 0.6, vR));
            vec3 c = alb * (0.45 + 0.55 * abs(dot(n, uMoon))) * vec3(0.75, 0.75, 0.9) + alb * 0.12;
            float d = length(vW - cameraPosition); gl_FragColor = vec4(mix(c, uFogCol, 1.0 - exp(-d * uFogK)), 1.0); }`}),I=new Ke,D=new It,H=new Mn,F=new S,V=new S;for(let[le,je,B,Ze,Se]of[[0,.075,.5,[1,.82,.25],[.98,.95,.88]],[1,.11,.7,[.35,.02,.05],[.85,.08,.1]]]){let Fe=n.flowers.filter(Ye=>Ye[3]===le),ve=new dn(C(je,B),U(Ze,Se),Fe.length);ve.frustumCulled=!1,Fe.forEach((Ye,Ae)=>{H.set((Math.random()-.5)*1.6,Math.random()*6.28,(Math.random()-.5)*1.6),D.setFromEuler(H),I.compose(V.set(Ye[0],Ye[1],Ye[2]),D,F.setScalar(.8+Math.random()*.4)),ve.setMatrixAt(Ae,I)}),t.add(So(ve,t,{cell:30,minCount:120,fogK:p.uFogK?p.uFogK.value:0}))}let N=(()=>{let le=document.createElement("canvas");le.width=le.height=128;let je=le.getContext("2d"),B=je.createRadialGradient(64,64,0,64,64,64);return B.addColorStop(0,"rgba(255,210,150,1)"),B.addColorStop(.2,"rgba(255,170,90,0.5)"),B.addColorStop(1,"rgba(255,120,40,0)"),je.fillStyle=B,je.fillRect(0,0,128,128),new Hi(le)})(),z=[];for(let[le,je,B]of n.lanterns){let Ze=new de(new Wn(.22,.34,.22),new Jn({color:new ce(3.2,1.9,.9)}));Ze.position.set(le,je,B),t.add(Ze);let Se=new Il(new ua({map:N,color:16777215,transparent:!0,depthWrite:!1,blending:Ct,opacity:.8}));Se.position.set(le,je,B),Se.scale.setScalar(1.6),Se.renderOrder=6,t.add(Se),z.push({halo:Se,glass:Ze,ph:Math.random()*6.28})}let J=u?600:260,re=new Ve,fe=new Float32Array(J*3);for(let le=0;le<J;le++)fe[le*3]=(Math.random()-.5)*50,fe[le*3+1]=Math.random()*6,fe[le*3+2]=Math.random()*60-10;re.setAttribute("position",new qe(fe,3));let Me=new $t(re,new me({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime,uPx:{value:600}},vertexShader:`uniform float uTime, uPx; varying float vA, vT; void main(){ vec3 p = position; float t = uTime * 0.25 + p.x * 0.1;
          p.x = mod(p.x + uTime * 0.6 + 25.0, 50.0) - 25.0; p.y = 0.4 + mod(p.y - uTime * 0.12, 6.0) + sin(t * 3.0) * 0.2; p.z += sin(t * 2.0 + p.y) * 0.6; vT = fract(position.z * 7.31);
          vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 1.0 - smoothstep(18.0, 40.0, -mv.z); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.07 * uPx / -mv.z, 1.5, 9.0); }`,fragmentShader:`varying float vA, vT; void main(){ vec2 d = gl_PointCoord - 0.5; d.x *= 1.8; float a = (1.0 - smoothstep(0.15, 0.25, dot(d, d))) * vA * 0.85;
          gl_FragColor = vec4(mix(vec3(0.98, 0.93, 0.85), vec3(0.95, 0.55, 0.6), step(0.7, vT)), a); }`}));Me.frustumCulled=!1,Me.renderOrder=7,t.add(Me),t.add(new _i(10465496,2760728,.8));{let le=(K,ie=72)=>new tr(K.map(([ne,Ie])=>new oe(ne,Ie)),ie),je=new en({color:15920354,roughness:.16,metalness:0,envMap:e.envTex,envMapIntensity:.9}),B=new en({color:14267498,roughness:.32,metalness:1,envMap:e.envTex,envMapIntensity:1.2}),Ze=new de(le([[0,0],[.085,0],[.093,.004],[.098,.02],[.1,.075],[.096,.086],[.088,.09],[.088,.096],[0,.096]]),je),Se=new de(le([[0,.094],[.094,.094],[.1,.098],[.102,.122],[.098,.13],[.06,.133],[0,.133]]),B);for(let K of[Ze,Se])K.position.set(En,wr+.001,jt),t.add(K);let Fe=new Wn(.62,.16,.44,8,2,6),ve=Fe.attributes.position;for(let K=0;K<ve.count;K++){let ie=ve.getX(K),ne=ve.getY(K),Ie=ve.getZ(K),xe=1+.03*Math.sin(ie*23+Ie*17);ve.setX(K,ie*xe),ve.setZ(K,Ie*xe),ne>0&&ve.setY(K,ne+.006*Math.sin(ie*40)*Math.cos(Ie*37))}Fe.computeVertexNormals();let Ye=e.texU.tD_sand.value.clone(),Ae=e.texU.tN_sand.value.clone();for(let K of[Ye,Ae])K.repeat.set(.7,.5),K.needsUpdate=!0;let L=new de(Fe,new en({map:Ye,normalMap:Ae,normalScale:new oe(1.6,1.6),roughness:.92,color:15786700}));L.position.set(En,wr-.08,jt),L.rotation.y=.2,t.add(L);let T=new Si(16757898,1.4);T.position.set(En+4,wr+3,jt-12),T.target.position.set(En,wr,jt),t.add(T,T.target);let X=new Gl(16754784,2.2,6,2);X.position.set(En-1.3,wr+.6,jt-1.6),t.add(X)}let q=Ro({U:s,lm:c,K:n.lm.ground,rect:n.rect,sun:new S(.2,.15,-1),tile:60,count:u?12e4:5e4,fade:[22,30],height:.85,wide:1.1,tip:[.42,.42,.2],dry:[.6,.52,.32],root:[.1,.1,.05],wind:1.5,seed:11,heightGLSL:`${u0} float groundY(vec2 p){ return hmH(p.x, p.y); }`,maskGLSL:`float grassMask(vec2 p){ float wx = 2.0 + 1.6 * sin(p.y * 0.06);
          return smoothstep(0.45, 0.9, hmH(p.x, p.y)) * smoothstep(1.9, 2.8, abs(p.x - wx)) * smoothstep(2.2, 3.2, distance(p, vec2(${En.toFixed(2)}, ${jt.toFixed(1)})))
            * smoothstep(0.3, 0.62, gn(p * 0.16) * 0.7 + gn(p * 0.9) * 0.3); }`});t.add(q.mesh);let te=s.uFogCol.value.clone(),ue=s.uFogK.value,ee=t.background.clone(),se=u?600:300,Le=new Ve,Ne=new Float32Array(se*3);for(let le=0;le<Ne.length;le++)Ne[le]=Math.random();Le.setAttribute("position",new qe(Ne,3));let it=new $t(Le,new me({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime,uCam:{value:new S},uPx:{value:700}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA; void main(){ vec3 B = vec3(16.0, 12.0, 16.0); vec3 q = position; float sp = 0.6 + 1.2 * fract(q.x * 37.1);
          vec3 p = vec3(q.x * B.x, mod(q.y * B.y + uTime * sp, B.y), q.z * B.z); p.x += sin(uTime * 1.3 + q.z * 40.0) * 0.15; vec3 w = uCam + p - B * 0.5; vec4 mv = viewMatrix * vec4(w, 1.0);
          gl_Position = projectionMatrix * mv; gl_PointSize = (0.4 + 1.6 * fract(q.z * 91.7)) * uPx * 0.05 / max(-mv.z, 0.1); vA = smoothstep(0.5, 3.0, -mv.z) * (1.0 - smoothstep(10.0, 16.0, -mv.z)); }`,fragmentShader:"varying float vA; void main(){ float r = length(gl_PointCoord - 0.5); float ring = smoothstep(0.5, 0.4, r) - smoothstep(0.4, 0.2, r) * 0.6; gl_FragColor = vec4(vec3(0.8, 0.95, 1.0), ring * vA * 0.7); }"}));return it.frustumCulled=!1,it.visible=!1,t.add(it),{update(le,je,B,Ze){let Se=Ze.position.y<.05*Math.sin(le);s.uFogCol.value.copy(Se?new ce(.05,.27,.33):te),s.uFogK.value=Se?.06:ue,t.background.copy(Se?new ce(.05,.27,.33):ee),g.visible=!Se,it.visible=Se,Se&&it.material.uniforms.uCam.value.copy(Ze.position),q.update(Ze);for(let Fe of z){let ve=.85+.1*Math.sin(le*9+Fe.ph)*Math.sin(le*5.3+Fe.ph*2);Fe.halo.material.opacity=.55*ve,Fe.halo.scale.setScalar(1.5+.15*ve)}},setPx(le){Me.material.uniforms.uPx.value=le,it.material.uniforms.uPx.value=le,q.setPx(1/le)}}}},i)}Ut();var or=i=>Math.sin(i*.02)*10,gd=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},_n=-130;function cc(i,e){let t=(1-gd(-140,70,e))*78,n=Math.abs(i-or(e)),r=-Math.pow(n*.18,1.7)*3,s=Math.sin(i*.11+e*.07)*1.6+Math.sin(i*.31-e*.23)*.6+Math.abs(Math.sin(i*.05+e*.03))*4,o=Math.min(1,n/4),a=1-gd(6,16,Math.hypot(i-or(_n),e-_n)),l=(1-gd(-140,70,_n))*78+2;return(t+r+s*(.35+.65*o))*(1-a)+l*a}var br=(i,e=0,t=1.75)=>[or(i)+e,cc(or(i)+e,i)+t,i],Qn=or(_n),sr=cc(Qn,_n),GM=[{pos:[or(84),cc(or(84),84)+22,86],tgt:br(40,0,0),w:.8},{pos:[or(72)+4,cc(or(72)+4,72)+8,74],tgt:br(30,0,2),w:1.1},{pos:br(46,1.2),tgt:br(20,0,2.6),w:1},{pos:br(4,-1),tgt:br(-24,0,3.4),w:1},{pos:br(-46,1),tgt:br(-80,0,4),w:1},{pos:br(-92,-.8),tgt:[Qn,sr+2.4,_n],w:1.1},{pos:[Qn+3.5,sr+2.4,_n+13],tgt:[Qn-.4,sr+1.6,_n],w:1.3},{pos:[Qn+7,sr+3.2,_n+9],tgt:[Qn-30,sr+140,_n-170],w:0}],vd=[{at:[.04,1.01],kick:"Our platform \xB7 Cosmos",line:"Cosmos: our real estate platform, designed in-house from the first sketch."}],Ob=new S(-.4,.5,-1).normalize(),XM=`uniform sampler2D tSky; uniform float uSkyRot;
  vec3 nightSky(vec3 d){ float lon = atan(d.z, d.x) + uSkyRot, lat = asin(clamp(d.y, -1.0, 1.0));
    return pow(texture2D(tSky, vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927)).rgb, vec3(2.2)) * 1.2; }`,qM=`
  
  if (k < 2.0 && abs(vW.x - ${Qn.toFixed(2)}) < 8.9 && abs(vW.z - ${_n.toFixed(1)}) < 6.4 && vW.y > ${(sr+.1).toFixed(2)}) discard;   // no drift inside the pavilion
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
`;function f0(i){return Ti({dir:"cosmos",parts:["room",{name:"ground",planar:!0}],way:GM,chapters:vd,palette:qM,textures:{snow:{id:"snow_02",s:3},rock:{id:"rock_face_03",s:4},conc:{id:"brushed_concrete",s:2},oak:{id:"oak_wood_planks",s:1.6}},sun:[-.4,.5,-1],sunCol:[.55,.65,.95],scatter:.35,sky:{file:"rogland_moonlit_night_sky.webp",exposure:1,rot:2.573,cut:.4,haze:[.16,.22,.36]},background:[.03,.05,.1],fog:{col:[.16,.22,.36],k:.0026},exposure:1.25,entry:{origin:[or(84),0,86],yaw:0},exit:{origin:[Qn+7,sr+3.2,_n+9],yaw:0},extras:async e=>{let{scene:t,info:n,tier:r,U:s,base:o,unpack:a,loader:l}=e,c=r==="high",u=e.sky,d={tSky:u.material.uniforms.tSky,uSkyRot:u.material.uniforms.uRot},h=await rr({base:o,unpack:a,loader:l,U:{uTime:s.uTime,uSun:{value:new S(-.4,.5,-1).normalize()},uFogCol:s.uFogCol,uFogK:s.uFogK},groundLm:e.groundLm,groundK:n.lm.ground,rect:new Je(...n.rect),tier:r,scene:t,layout:{items:(n.items||[]).filter(E=>!(Math.abs(E[1]-Qn)<11&&Math.abs(E[3]-_n)<8.5)).map(E=>E[0]==="rock_07"?["rock_09",E[1],E[2]-.15,E[3],E[4],E[5]*2.2]:E)}}).catch(()=>null);h&&(t.add(h.group),h.fade.value=1);{let y=new Ve,C=[],U=[],I=(N,z)=>{let J=Math.sin(N*127.1+z*311.7)*43758.5453;return J-Math.floor(J)},D=(N,z)=>{let J=Math.floor(N),re=Math.floor(z),fe=N-J,Me=z-re,q=fe*fe*(3-2*fe),te=Me*Me*(3-2*Me);return(I(J,re)*(1-q)+I(J+1,re)*q)*(1-te)+(I(J,re+1)*(1-q)+I(J+1,re+1)*q)*te},H=(N,z)=>{let J=0,re=1,fe=1,Me=1;for(let q=0;q<6;q++){let te=1-Math.abs(D(N*fe,z*fe)*2-1);te=te*te*Me,J+=te*re,Me=Math.min(1,te*1.8),re*=.5,fe*=2.03}return J};for(let N=0;N<220;N++)for(let z=0;z<=360;z++){let J=N/219,re=650+J*1300,fe=z/360*Math.PI*2,Me=Math.cos(fe)*re,q=-40+Math.sin(fe)*re,te=Math.pow(D(Math.cos(fe)*2.2+5,Math.sin(fe)*2.2+5),1.4),ue=H(Me/520,q/520)*230*(.45+.9*te)*Math.sin(Math.min(1,J*1.6)*Math.PI*.5)*(1-.35*J)-20;C.push(Me,ue,q)}for(let N=0;N<219;N++)for(let z=0;z<360;z++){let J=N*361+z,re=J+360+1;U.push(J,re,J+1,J+1,re,re+1)}y.setAttribute("position",new Ge(C,3)),y.setIndex(U),y.computeVertexNormals();let F=N=>e.texU[N].value,V=new de(y,new me({uniforms:{tS:{value:F("tD_snow")},tR:{value:F("tD_rock")},uFogCol:s.uFogCol,uMoon:{value:new S(-.4,.5,-1).normalize()}},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tS, tR; uniform vec3 uFogCol, uMoon; varying vec3 vW, vN;
            vec3 tri(sampler2D t, vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0)); return texture2D(t, p.zy * s).rgb * w.x + texture2D(t, p.xz * s).rgb * w.y + texture2D(t, p.xy * s).rgb * w.z; }
            void main(){ vec3 Nf = normalize(cross(dFdx(vW), dFdy(vW))); if (Nf.y < 0.0) Nf = -Nf; vec3 n = normalize(mix(normalize(vN), Nf, 0.6));
              vec3 rock = tri(tR, vW, n, 1.0 / 40.0) * vec3(0.55, 0.6, 0.72), snowT = tri(tS, vW, n, 1.0 / 25.0);
              float slope = 1.0 - n.y, hold = 1.0 - smoothstep(0.38, 0.62, slope + (dot(rock, vec3(0.333)) - 0.35) * 0.4);   // snow lies where it can
              vec3 alb = mix(rock * 0.5, snowT * vec3(0.92, 0.96, 1.05), hold);
              float moon = max(dot(n, uMoon), 0.0), sky = 0.5 + 0.5 * n.y;
              vec3 c = alb * (vec3(0.55, 0.62, 0.85) * moon * 0.9 + vec3(0.08, 0.1, 0.16) * sky);
              float d = length(vW - cameraPosition); c = mix(c, uFogCol * 1.25, 1.0 - exp(-d * 0.0008));            // night haze: each range fainter than the one before
              gl_FragColor = vec4(c, 1.0); }`}));V.renderOrder=1,V.frustumCulled=!1,t.add(V)}let f=new de(new Lt(3e3,3e3,1,1),new me({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float uTime; varying vec3 vW;
          float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); float a = fract(sin(dot(i, vec2(127.1, 311.7))) * 43758.5), b = fract(sin(dot(i + vec2(1, 0), vec2(127.1, 311.7))) * 43758.5),
            c = fract(sin(dot(i + vec2(0, 1), vec2(127.1, 311.7))) * 43758.5), d = fract(sin(dot(i + vec2(1, 1), vec2(127.1, 311.7))) * 43758.5); return mix(mix(a, b, f.x), mix(c, d, f.x), f.y); }
          float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * n2(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
          void main(){ vec2 p = vW.xz * 0.006 + vec2(uTime * 0.004, uTime * 0.002); float f = fbm(p), g = fbm(p * 2.5 + 3.0);
            vec3 c = mix(vec3(0.12, 0.16, 0.27), vec3(0.62, 0.68, 0.82), smoothstep(0.35, 0.8, f) * (0.7 + 0.3 * g));
            float d = length(vW.xz - cameraPosition.xz); float a = smoothstep(0.25, 0.55, f) * (1.0 - smoothstep(1200.0, 1500.0, d));
            gl_FragColor = vec4(c, a * 0.95); }`}));f.rotation.x=-Math.PI/2,f.position.y=-4,f.renderOrder=3,f.frustumCulled=!1,t.add(f);let g=c?6e3:2500,v=new Ve,m=new Float32Array(g*3);for(let E=0;E<g;E++)m[E*3]=Math.random()*60,m[E*3+1]=Math.random()*30,m[E*3+2]=Math.random()*60;v.setAttribute("position",new qe(m,3));let p=new $t(v,new me({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime,uCam:{value:new S},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
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
          gl_FragColor = vec4(vec3(0.9, 0.94, 1.0) * (1.0 + vGlint * 1.5), a); }`}));p.frustumCulled=!1,p.renderOrder=8,t.add(p);let M=c?3500:1400,w=new Ve,x=new Float32Array(M*3);for(let E=0;E<M;E++)x[E*3]=Math.random()*40,x[E*3+1]=Math.random(),x[E*3+2]=Math.random()*40;w.setAttribute("position",new qe(x,3));let A=new $t(w,new me({transparent:!0,depthWrite:!1,uniforms:{uTime:s.uTime,uCam:{value:new S},uPx:{value:600}},vertexShader:`uniform float uTime, uPx; uniform vec3 uCam; varying float vA;
          void main(){ vec3 p = position; float sp = 4.0 + fract(p.z * 3.7) * 3.0; p.x += uTime * sp; p.z += sin(uTime * 1.3 + p.x * 0.4) * 0.6;
            p.xz = mod(p.xz - uCam.xz + 20.0, 40.0) + uCam.xz - 20.0; p.y = uCam.y - 1.7 + p.y * p.y * 1.1 + sin(uTime * 2.0 + p.x) * 0.06;
            vec4 mv = viewMatrix * vec4(p, 1.0); vA = (1.0 - smoothstep(6.0, 18.0, -mv.z)) * 0.5 * (0.5 + 0.5 * sin(p.x * 0.3 + uTime));
            gl_Position = projectionMatrix * mv; gl_PointSize = clamp(0.05 * uPx / -mv.z, 1.0, 5.0); }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord - 0.5; float a = (1.0 - smoothstep(0.05, 0.25, dot(d, d))) * vA; gl_FragColor = vec4(vec3(0.9, 0.94, 1.0), a); }"}));A.frustumCulled=!1,A.renderOrder=8,t.add(A);let R=new de(new In(14,24,12),new me({transparent:!0,depthWrite:!1,blending:Ct,side:Kt,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW; void main(){ vec3 V = normalize(vW - cameraPosition); vec3 toC = uC - cameraPosition; float t = dot(toC, V); float d = length(toC - V * t);
          float a = exp(-d * d / 30.0) * 0.12; gl_FragColor = vec4(vec3(1.0, 0.7, 0.42) * a, a); }`,uniforms:{uC:{value:new S(Qn,sr+2.5,_n)}}}));R.position.set(Qn,sr+2.5,_n),R.renderOrder=9,t.add(R);let _=new me({transparent:!0,depthWrite:!1,side:gt,uniforms:d,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; ${XM} void main(){ vec3 V = normalize(cameraPosition - vW); vec3 n = normalize(vN); if (dot(n, V) < 0.0) n = -n;
          float fr = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0); vec3 R = reflect(-V, n);
          vec3 c = nightSky(normalize(R)) * 1.4 * fr + vec3(1.0, 0.7, 0.45) * 0.03; gl_FragColor = vec4(c, 0.1 + 0.75 * fr); }`});for(let[E,b,y,C]of[[Qn,_n+5.1,15.2,0],[Qn,_n-5.1,15.2,0],[Qn-7.6,_n,10.2,Math.PI/2],[Qn+7.6,_n,10.2,Math.PI/2]]){let U=new de(new Lt(y,4),_);U.position.set(E,sr+2.6,b),U.rotation.y=C,U.renderOrder=10,t.add(U)}return{update(E,b,y,C){p.material.uniforms.uCam.value.copy(C.position),A.material.uniforms.uCam.value.copy(C.position)},setPx(E){p.material.uniforms.uPx.value=E,A.material.uniforms.uPx.value=E}}}},i)}Ut();var oi=(i,e,t)=>[i,e,t],YM=[{pos:oi(0,-10,60),tgt:oi(0,40,-60),w:1},{pos:oi(0,2,-20),tgt:oi(0,4,-90),w:1.1},{pos:oi(-8,6,-170),tgt:oi(0,30,-360),w:1.2},{pos:oi(4,2,-370),tgt:oi(0,0,-440),w:1.2},{pos:oi(0,3,-485),tgt:oi(0,4,-560),w:1},{pos:oi(0,6,-520),tgt:oi(0,4,-580),w:1.1},{pos:oi(0,170,-400),tgt:oi(0,150,-900),w:0}],xd=[{at:[0,.36],kick:"Client \xB7 Perseid Pictures",line:"Branding and website for Perseid Pictures: a studio that keeps its camera pointed at the stars."},{at:[.36,.74],kick:"And many more",line:"20+ clients across India, the USA and Australia. A small team, close to every brand we build."},{at:[.74,1.01],kick:"Nomadiic Horse Designs \xB7 Bangalore",line:"Branding and websites, built with obsessive detail. Let's build yours.",contact:!0}];async function p0({tier:i}){let e=i==="high",t=new Oi;t.background=new ce(0,0,.004);let n={uTime:{value:0}},r=new de(new In(4e3,64,32),new me({side:Kt,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`varying vec3 vD;
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
        gl_FragColor = vec4(c, 1.0); }`}));r.renderOrder=-2,r.frustumCulled=!1,t.add(r);let s=5200,o=new S(0,-s-140,-380),a=new de(new In(s,160,80),new me({vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 uC; varying vec3 vW, vN;
      float hh(vec3 p){ return fract(sin(dot(p, vec3(12.9, 78.2, 37.7))) * 43758.5); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hh(i), hh(i + vec3(1, 0, 0)), f.x), mix(hh(i + vec3(0, 1, 0)), hh(i + vec3(1, 1, 0)), f.x), f.y), mix(mix(hh(i + vec3(0, 0, 1)), hh(i + vec3(1, 0, 1)), f.x), mix(hh(i + vec3(0, 1, 1)), hh(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
      void main(){ vec3 n = normalize(vN), V = normalize(cameraPosition - vW); vec3 q = (vW - uC) / 5200.0;
        float land = smoothstep(0.5, 0.56, n3(q * 6.0) * 0.6 + n3(q * 14.0) * 0.4);
        float metro = smoothstep(0.5, 0.72, n3(q * 40.0)) * land;
        float city = metro * (pow(n3(q * 1500.0), 7.0) * 2.2 + pow(n3(q * 420.0), 4.0) * 0.45);
        vec3 c = mix(vec3(0.004, 0.008, 0.02), vec3(0.012, 0.012, 0.01), land) + vec3(1.0, 0.72, 0.38) * city;
        float rim = pow(1.0 - max(dot(n, V), 0.0), 3.0); c += vec3(0.1, 0.25, 0.6) * rim * 0.6;
        gl_FragColor = vec4(c, 1.0); }`,uniforms:{uC:{value:o}}}));a.position.copy(o),t.add(a);let l=new de(new In(s*1.018,160,80),new me({transparent:!0,depthWrite:!1,blending:Ct,side:Kt,vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`varying vec3 vW, vN; void main(){ vec3 V = normalize(cameraPosition - vW); float f = pow(max(dot(vN, V), 0.0), 6.0);
      float side = smoothstep(-0.6, 0.9, normalize(vW).x * 0.0 + V.x * -0.6 + 0.4);
      vec3 c = mix(vec3(0.15, 0.4, 1.0), vec3(1.0, 0.55, 0.25), smoothstep(0.6, 1.0, f) * side) * f * 1.6; gl_FragColor = vec4(c, f); }`}));l.position.copy(o),l.renderOrder=2,t.add(l);let c=e?40:22,u=new Ve,d=new Float32Array(c*6),h=new Float32Array(c*6);u.setAttribute("position",new qe(d,3)),u.setAttribute("color",new qe(h,3));let f=new go(u,new mo({vertexColors:!0,transparent:!0,blending:Ct,depthWrite:!1}));f.frustumCulled=!1,t.add(f);let g=new S(30,260,-520),v=Array.from({length:c},()=>({t0:Math.random()*6,dur:.6+Math.random()*.9,dir:new S,start:new S})),m=(y,C)=>{y.t0=C+Math.random()*3.5,y.dur=.5+Math.random()*.9,y.dir.set(Math.random()-.5,Math.random()-.75,Math.random()-.3).normalize(),y.start.copy(g).addScaledVector(new S(Math.random()-.5,Math.random()-.5,Math.random()-.5),160).addScaledVector(y.dir,40)};v.forEach(y=>m(y,0));let p=Array.from({length:16},(y,C)=>{let U=C/16*Math.PI*2;return new S(Math.cos(U+Math.sin(C)*.4)*(22+C%3*6),Math.sin(U*2)*12+C%4*3,-440+Math.sin(C*1.7)*18)}),M=(()=>{let y=document.createElement("canvas");y.width=y.height=64;let C=y.getContext("2d"),U=C.createRadialGradient(32,32,0,32,32,32);return U.addColorStop(0,"rgba(255,255,255,1)"),U.addColorStop(.2,"rgba(255,228,190,0.85)"),U.addColorStop(1,"rgba(255,170,90,0)"),C.fillStyle=U,C.fillRect(0,0,64,64),new Hi(y)})(),w=new $t(new Ve().setFromPoints(p),new da({size:4.5,map:M,transparent:!0,blending:Ct,depthWrite:!1,color:16769208}));t.add(w);let x=[0,3,6,9,12,15,2,5,8,11,14,1,4,7,10,13,0],A=new Ve().setFromPoints(x.map(y=>p[y])),R=new ha(A,new mo({color:15975034,transparent:!0,opacity:.55,blending:Ct}));t.add(R);let _=Xr(YM),E=new S,b=new S;return{key:"perseid",scene:t,chapters:xd,exposure:1,entry:{origin:[0,0,60],yaw:0},exit:{origin:[0,4,-528],yaw:0},pose(y,C){_.sample(y,E,b),C.position.copy(E),C.lookAt(b)},update(y,C,U){n.uTime.value=y,v.forEach((D,H)=>{let F=(y-D.t0)/D.dur;F>1&&(m(D,y),F=-1);let V=F>=0?Math.sin(Math.PI*F):0,N=D.start.clone().addScaledVector(D.dir,Math.max(F,0)*120),z=N.clone().addScaledVector(D.dir,-18-20*Math.max(F,0));d.set([N.x,N.y,N.z,z.x,z.y,z.z],H*6),h.set([V,V*.95,V*.85,0,0,0],H*6)}),u.attributes.position.needsUpdate=!0,u.attributes.color.needsUpdate=!0;let I=ht.smoothstep(U,.42,.66);A.setDrawRange(0,Math.max(2,Math.floor(I*x.length))),R.material.opacity=.55*I},setPx(){},dispose(){t.traverse(y=>{y.geometry?.dispose?.();for(let C of[].concat(y.material||[]))C.dispose()})}}}Ut();var KM=`
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
`;function m0(i,{count:e,width:t=20,font:n="500 150px Satoshi, sans-serif",lineGap:r=1.05,letterSpacing:s=0}={}){let o=document.createElement("canvas"),a=o.getContext("2d");a.font=n;let l=i.map(p=>a.measureText(p)),c=parseFloat(/(\d+)px/.exec(n)[1]),u=Math.ceil(Math.max(...l.map(p=>p.width))+c*.4+s*30),d=Math.ceil(c*r*i.length+c*.4);o.width=u,o.height=d,a.font=n,a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",s&&(a.letterSpacing=s+"px"),i.forEach((p,M)=>a.fillText(p,u/2,c*.2+c*r*(M+.5)));let h=a.getImageData(0,0,u,d).data,f=[];for(let p=0;p<d;p+=1)for(let M=0;M<u;M+=1)h[(p*u+M)*4+3]>128&&f.push(M,p);let g=t/u,v=new Float32Array(e*3),m=f.length/2;for(let p=0;p<e;p++){let M=Math.floor(Math.random()*m)*2;v[p*3]=(f[M]+Math.random()-u/2)*g,v[p*3+1]=(d/2-f[M+1]-Math.random())*g,v[p*3+2]=(Math.random()-.5)*g*6}return v}var uc=class extends $t{constructor({count:e=2e4,size:t=9,colorA:n="#ffd2a1",colorB:r="#f59a4b",colorC:s="#ffffff",spread:o=14,additive:a=!0}={}){let l=new Ve,c=new Float32Array(e*4);for(let h=0;h<c.length;h++)c[h]=Math.random();let u=new Float32Array(e*3);l.setAttribute("position",new qe(u.slice(),3)),l.setAttribute("aA",new qe(u.slice(),3)),l.setAttribute("aB",new qe(u.slice(),3)),l.setAttribute("aSeed",new qe(c,4)),l.boundingSphere=new yn(new S,1e5);let d=new me({transparent:!0,depthWrite:!1,blending:a?Ct:Fr,uniforms:{uTime:{value:0},uMorph:{value:0},uAssemble:{value:0},uDance:{value:1},uSpread:{value:o},uSize:{value:t},uPR:{value:Math.min(devicePixelRatio,2)},uOpacity:{value:1},uWind:{value:new S(0,0,0)},cA:{value:new ce(n)},cB:{value:new ce(r)},cC:{value:new ce(s)}},vertexShader:`${KM}
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
        }`});super(l,d),this.count=e,this.frustumCulled=!1,this.slot=0}setShape(e,t="A"){let n=this.geometry.getAttribute(t==="A"?"aA":"aB");n.array.set(e.subarray(0,n.array.length)),n.needsUpdate=!0}morphTo(e){let t=this.slot===0?"B":"A";return this.setShape(e,t),this.slot=this.slot===0?1:0,this.slot}get u(){return this.material.uniforms}};var kt=[{key:"mithraki",share:9,build:s0,chapters:ad},{key:"revisetax",share:5,build:o0,chapters:ld,hud:{lines:["Revise Tax"],at:[.02,.3]}},{key:"bisikaapi",share:8,build:a0,chapters:cd,hud:{lines:["Bisi Kaapi"],at:[.4,.8]}},{key:"glavida",share:6,build:l0,chapters:fd,hud:{lines:["Glavida"],at:[.02,.3]}},{key:"innovious",share:5,build:c0,chapters:pd,hud:{lines:["Innovius"],at:[.12,.5]}},{key:"houseofmoh",share:5,build:d0,chapters:md,hud:{lines:["House of Moh"],at:[.08,.5]}},{key:"cosmos",share:5,build:f0,chapters:vd,hud:{lines:["Cosmos"],at:[.08,.45]},veil:[.8,.84,.92]},{key:"perseid",share:7,build:p0,chapters:xd,veil:[.015,.04,.09],hud:[{lines:["Perseid Pictures"],at:[.02,.34]},{lines:["20+ clients"],at:[.42,.72]},{lines:["Let's build yours"],at:[.78,1.5]}]}],x0=20,y0=x0+kt.reduce((i,e)=>i+e.share,0),ar=x0/y0,Sn=[];{let i=ar;for(let e of kt){let t=i+e.share/y0;Sn.push([i,t]),i=t}}var ZM={origin:[0,5.5,-53],yaw:0},yd=new URL(".",import.meta.url).href,Md=new URL(import.meta.url).searchParams.get("v"),hc=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches||typeof innerWidth<"u"&&Math.min(innerWidth,innerHeight)<600,JM=/(_lm|_sky|_diff|_nor|leaves|leaves_nor|mtn_c|mtn_c_s|marble|meadow)\.webp(\?|$)/,jM=i=>hc&&typeof i=="string"&&JM.test(i)&&!/\.m\.webp/.test(i)?i.replace(/\.webp(\?|$)/,".m.webp$1"):i,Ca=i=>{let e=jM(i);return Md&&typeof e=="string"&&e.startsWith(yd)&&!/[?&]v=/.test(e)?e+(e.includes("?")?"&":"?")+"v="+Md:e},g0="nrt-"+(Md||"dev"),Er=null,QM=(async()=>{try{if(!globalThis.caches)return null;for(let i of await caches.keys())i.startsWith("nrt-")&&i!==g0&&await caches.delete(i);Er=await caches.open(g0)}catch{Er=null}return Er})(),M0=i=>{try{return new URL(i,location.href).href}catch{return i}};if(!globalThis.__nrtFetch){let i=globalThis.fetch.bind(globalThis);globalThis.__nrtFetch=!0,globalThis.__nrtF0=i,globalThis.fetch=async(e,t)=>{let n=typeof e=="string"?Ca(e):e;if(typeof n=="string"&&Er&&!(t&&t.cache==="no-store"))try{let r=await Er.match(M0(n));if(r)return r}catch{}return i(n,t)},Yh.setURLModifier(Ca)}async function Pa(i,e=3){for(let t=0;;t++)try{let n=await fetch(i);if(!n.ok)throw new Error(n.status+" "+i);return n}catch(n){if(t>=e-1)throw n;await new Promise(r=>setTimeout(r,400*(t+1)))}}async function Co(i){let e=await Pa(i),t=await new Response(e.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),n=new DataView(t),r=n.getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,r))),o=4+r,{nv:a,ni:l,min:c,max:u}=s,d=new Uint16Array(t.slice(o,o+a*6));o+=a*6;let h=new Float32Array(a*3);for(let v=0;v<a*3;v++){let m=v%3;h[v]=c[m]+d[v]/65535*(u[m]-c[m])}let f=new Uint32Array(t.slice(o,o+l*4));o+=l*4;let g=new Ve;g.setAttribute("position",new qe(h,3)),g.setIndex(new qe(f,1));for(let[v,m,p]of s.extra)if(m==="unorm16"){let M=new Uint16Array(t.slice(o,o+a*p*2));o+=a*p*2,g.setAttribute(v,new qe(M,p,!0))}else if(m==="f32"){let M=new Float32Array(t.slice(o,o+a*p*4));o+=a*p*4,g.setAttribute(v,new qe(M,p))}else{let M=new Uint8Array(t.slice(o,o+a*p));o+=a*p,o+=(4-o%4)%4,g.setAttribute(v,new qe(new Float32Array(M),p))}return g}function Ri(i,e,{srgb:t=!1,repeat:n=!1,flip:r=!0}={}){return new Promise((s,o)=>i.load(e,a=>{a.colorSpace=t?qt:Nn,a.flipY=r,a.anisotropy=8,n&&(a.wrapS=a.wrapT=ls);let l=/_lm|mtn_c|sky\./.test(e);a.generateMipmaps=!l,a.minFilter=l?un:fi,s(a)},void 0,o))}async function v0(i){let e=await(await Pa(i)).blob(),t=URL.createObjectURL(e),n=new Image;try{await new Promise((r,s)=>{n.onload=r,n.onerror=s,n.src=t})}finally{URL.revokeObjectURL(t)}return n}var Po=i=>new Promise(e=>setTimeout(e,i)),Ra=`
  vec3 lmDecode(vec3 c, float K){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)) * K; }
  vec3 srgb2lin(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }`;async function vE(i,e={}){{let G=!1;try{let j=document.createElement("canvas");G=!!(j.getContext("webgl2")||j.getContext("webgl"))}catch{}if(!G){let j=document.createElement("div");j.setAttribute("role","main"),j.style.cssText="position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:24px;background:#0c1220;color:#e9ecf3;font:400 18px/1.5 Satoshi,system-ui,sans-serif";let Q=e.contactUrl||"https://nomadiichorse.com/contact-us";return j.innerHTML=`<div style="max-width:520px"><div style="font-size:12px;letter-spacing:.32em;color:#ffc48f;margin-bottom:14px">NOMADIIC HORSE DESIGNS \xB7 BANGALORE</div><h1 style="font:500 30px/1.25 Satoshi,system-ui,sans-serif;margin:0 0 14px">We build brands the way the Greeks built palaces.</h1><p style="margin:0 0 24px;opacity:.8">Our site is a 3D walk-through, and this browser can\u2019t show it. Open it in a current Chrome, Safari or Edge with graphics acceleration on, or write to us directly.</p><a href="${Q}" style="display:inline-block;padding:13px 26px;border-radius:999px;background:#f2822f;color:#fff;font-weight:600;text-decoration:none">Contact us</a></div>`,i.appendChild(j),{destroy(){j.remove()}}}}let t=e.base||yd+"assets/",n=e.intro==="storm",r={uNight:{value:0},uFront:{value:1e4},uGlowK:{value:0},uStorm:{value:0}},s=0,o=0,a=n?Yp():null,l=n?Xp():null,c=n,u=n?1e9:0,d=n?qp(i,l,t,{onDone:()=>{c=!1,u=gc.elapsedTime-.3,We=Math.max(We,.016)}}):null,h=e.onProgress||(()=>{}),f=0,g=!1,v=!n,m=()=>{d&&(d.setProgress(Math.min(.97,f)),g&&v&&d.ready())},p=(G,j)=>{h(G,j),G<1&&(f=G),m()},M=async()=>{if(navigator.connection&&navigator.connection.saveData)return;let G=globalThis.__nrtF0||fetch;try{await QM;let j=await(await G(Ca(t+"manifest.json"),{cache:"no-store"})).json(),Q=["","plants","mithraki","revisetax","bisikaapi","glavida","innovious","houseofmoh","cosmos","tex","book"],Te=tt=>tt.includes("/")?tt.split("/")[0]:"",Ee=new Set(j.files.map(tt=>tt[0]).filter(tt=>tt.endsWith(".m.webp"))),Oe=j.files.filter(([tt])=>(hc?!Ee.has(tt.replace(/\.webp$/,".m.webp"))||tt.endsWith(".m.webp"):!tt.endsWith(".m.webp"))&&Q.includes(Te(tt))&&tt!=="score2.m4a"&&!(hc&&Te(tt)==="book")).sort((tt,_t)=>Q.indexOf(Te(tt[0]))-Q.indexOf(Te(_t[0]))),ct=async()=>{for(;Oe.length&&vc;){let tt=M0(Ca(t+Oe.shift()[0]));for(let _t=0;_t<3;_t++){try{if(Er&&await Er.match(tt))break;let mn=await G(tt);if(mn.ok){if(Er)try{await Er.put(tt,mn)}catch{}else await mn.arrayBuffer();break}}catch{}await Po(800*(_t+1))}}};await Promise.all(Array.from({length:hc?2:4},ct))}catch(j){console.warn("[nomadiic-rt] stream",j)}},w=matchMedia("(pointer: coarse)").matches||Math.min(innerWidth,innerHeight)<600,x=(()=>{try{return+sessionStorage.getItem("nrtLost")||0}catch{return 0}})(),A=e.tier||(w||Date.now()-x<6e5?"low":"high"),R=A==="high"?{pr:1.5,grassNear:22e4,grassFar:6e4,clumps:900,msaa:2,spray:2400}:{pr:1.25,grassNear:52e3,grassFar:16e3,clumps:300,msaa:0,spray:600},_=new Pl({antialias:!1,powerPreference:"high-performance",alpha:!1});_.setPixelRatio(Math.min(devicePixelRatio,R.pr)),_.toneMapping=Ma,_.toneMappingExposure=e.exposure??.95,_.outputColorSpace=qt,i.appendChild(_.domElement),Object.assign(_.domElement.style,{width:"100%",height:"100%",display:"block",touchAction:"none"});let E=new Oi;_.domElement.addEventListener("webglcontextlost",G=>{if(G.preventDefault(),console.warn("[nomadiic-rt] context lost"),!(Date.now()-x<6e4)){try{sessionStorage.setItem("nrtLost",String(Date.now()))}catch{}setTimeout(()=>{_.getContext().isContextLost()&&location.reload()},1500)}},!1),_.domElement.addEventListener("webglcontextrestored",()=>location.reload(),!1);let b=[...Vp.map(G=>({...G,at:[G.at[0]/To*ar,Math.min(G.at[1]/To,1)*ar]})),...kt.flatMap((G,j)=>G.chapters.map(Q=>({...Q,at:[Sn[j][0]+Q.at[0]*(Sn[j][1]-Sn[j][0]),Sn[j][0]+Math.min(Q.at[1],j<kt.length-1?.9:1)*(Sn[j][1]-Sn[j][0])]})))],y=!1,C=async G=>{if(!y){y=!0;try{let j=await import(Ca(yd+"book.js"));j.setBookBase(t+"book/"),j.openBook(i,G,{onClose:()=>{y=!1}})}catch(j){console.error("[nomadiic-rt] book",j),y=!1}}},U=$p(i,b,{contactUrl:e.contactUrl,onBook:C,sound:l}),I=new xn(42,1,1,6e3),D=new class extends Vl{load(G,j,Q,Te){let Ee=new Fn,Oe=this.manager.resolveURL(G);return Pa(Oe).then(ct=>ct.blob()).then(async ct=>{if(navigator.userAgentData&&globalThis.createImageBitmap)Ee.image=await createImageBitmap(ct,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}),Ee.flipY=!1;else{let tt=new Image,_t=URL.createObjectURL(ct);await new Promise((mn,ti)=>{tt.onload=mn,tt.onerror=ti,tt.src=_t}),URL.revokeObjectURL(_t),Ee.image=tt}Ee.needsUpdate=!0,j&&j(Ee)}).catch(ct=>{Te?Te(ct):console.warn("[nomadiic-rt] texture",ct)}),Ee}loadOld(G,j,Q,Te){return super.load(G,Ee=>{let Oe=Ee.image,ct=()=>j&&j(Ee);navigator.userAgentData&&globalThis.createImageBitmap&&Oe?createImageBitmap(Oe,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"}).then(tt=>{Ee.image=tt,Ee.flipY=!1,Ee.needsUpdate=!0,ct()}).catch(ct):(Oe&&Oe.decode?Oe.decode().catch(()=>{}):Promise.resolve()).then(ct)},Q,Te)}},H=0,F=14,V=()=>p(++H/F),N=G=>G.then(j=>(V(),j)),[z,J,re,fe,Me,q]=await Promise.all([N(Pa(t+"scene.json").then(G=>G.json())),N(Ri(D,t+"sky.jpg",{srgb:!1})),N(Ri(D,t+"ground_lm_s.webp")),N(Ri(D,t+"meadow.webp",{srgb:!0,repeat:!0})),N(v0(t+"grass_mask.png")),N(Co(t+"emblem.pack"))]).catch(G=>{throw d&&d.fail(),G});{let G=document.createElement("canvas");G.width=64,G.height=32;let j=G.getContext("2d");j.drawImage(J.image,0,0,64,32);let Q=j.getImageData(0,14,64,2).data,Te=0,Ee=0,Oe=0;for(let _t=0;_t<Q.length;_t+=4)Te+=Q[_t],Ee+=Q[_t+1],Oe+=Q[_t+2];let ct=Q.length/4,tt=_t=>(_t/=255*ct,_t<=.04045?_t/12.92:Math.pow((_t+.055)/1.055,2.4));e.fog=[tt(Te),tt(Ee),tt(Oe)]}let te=z.frames,ue=te.length,ee=new S(...z.sun).normalize();I.fov=z.fov,I.updateProjectionMatrix();let se={uTime:{value:0},uSun:{value:ee},uFogCol:{value:new ce(...e.fog)},uFogK:{value:34e-5},uCam:{value:I.position}},Le=new de(new In(5e3,48,24),new me({side:Kt,depthWrite:!1,fog:!1,uniforms:{tSky:{value:J},uNight:{value:0},uFlash:{value:0},uT:{value:0},uFP:{value:new oe(.5,.7)}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`${Ra} uniform sampler2D tSky; uniform float uNight, uFlash, uT; varying vec3 vDir;
      ${oc}
      void main(){ vec3 d = normalize(vDir); vec3 b = vec3(d.x, -d.z, d.y);
        float lon = atan(b.x, b.y), lat = asin(clamp(b.z, -1.0, 1.0));
        vec2 uv = vec2(0.5 + lon / 6.2831853, 0.5 + lat / 3.1415927);
        vec3 sk = srgb2lin(texture2D(tSky, uv).rgb);
        if (uNight > 0.001) sk = mix(sk, stormSky(d, uT, uFlash), uNight);
        gl_FragColor = vec4(sk, 1.0); }`}));Le.renderOrder=-1,Le.frustumCulled=!1,E.add(Le);let Ne=_a({count:34,center:[0,58,40],radius:130,height:16,size:.6,color:1711136});E.add(Ne.mesh);let it=rd({count:16,box:[-160,160,.6,5,-10,170],color:[.62,.68,.78],opacity:.16,size:[34,7]});E.add(it.mesh);let le=null;if(n){let G=A==="high"?14e3:6e3,j=new Float32Array(G*6),Q=new Float32Array(G*2);for(let Oe=0;Oe<G;Oe++){let ct=Math.random(),tt=Math.random(),_t=Math.random(),mn=Math.random();j.set([ct,tt,_t,ct,tt,_t],Oe*6),Q[Oe*2]=Q[Oe*2+1]=mn}let Te=new Ve;Te.setAttribute("position",new qe(j,3));let Ee=new Float32Array(G*2);for(let Oe=0;Oe<G;Oe++)Ee[Oe*2]=0,Ee[Oe*2+1]=1;Te.setAttribute("aEnd",new qe(Ee,1)),Te.setAttribute("aSeed",new qe(Q,1)),le=new go(Te,new me({transparent:!0,depthWrite:!1,blending:Ct,uniforms:{uTime:se.uTime,uCam:se.uCam,uA:{value:1},uFl:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; attribute float aEnd, aSeed; varying float vA;
        void main(){ vec3 B = vec3(46.0, 30.0, 46.0); vec3 p = position * B;
          float sp = 22.0 + aSeed * 8.0; p.y = mod(p.y - uTime * sp - uCam.y, B.y);
          p.x = mod(p.x - uCam.x + uTime * 4.0, B.x); p.z = mod(p.z - uCam.z, B.z);
          vec3 w = uCam + p - B * vec3(0.5, 0.35, 0.5);
          w += vec3(0.04, -1.0, 0.01) * aEnd * (0.16 + aSeed * 0.22);
          vec4 mv = viewMatrix * vec4(w, 1.0); vA = (1.0 - smoothstep(3.0, 16.0, -mv.z)) * smoothstep(0.8, 2.5, -mv.z) * (0.35 + 0.65 * fract(aSeed * 13.7)) * (1.0 - aEnd * 0.7);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform float uA, uFl; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.62, 0.7, 0.86) * (0.09 + uFl * 0.5), vA * uA * 0.4); }"})),le.frustumCulled=!1,le.renderOrder=8,E.add(le)}let je=new fo(_),B=new Oi;B.add(Le.clone()),B.add(new de(new xo(4e3,32).rotateX(-Math.PI/2),new Jn({color:new ce(.035,.045,.018)})));let Ze=je.fromScene(B,0,.1,6e3).texture;E.environment=Ze;let Se=z.ground,Fe=new me({uniforms:{...se,tLm:{value:re},tAlb:{value:fe},uK:{value:z.lm.ground},uRect:{value:new Je(Se.x0,Se.x1,Se.z0,Se.z1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Ra} ${ri} uniform sampler2D tLm, tAlb; uniform float uK; uniform vec4 uRect; varying vec3 vW;
      void main(){
        vec3 alb = texture2D(tAlb, vW.xz / 9.0).rgb * 0.6 + texture2D(tAlb, vW.xz / 53.0 + 0.37).rgb * 0.4;
        vec2 uv = vec2((vW.x - uRect.x) / (uRect.y - uRect.x), (uRect.w - vW.z) / (uRect.w - uRect.z));
        vec3 open = lmDecode(vec3(0.83), uK);
        vec3 L = lmDecode(texture2D(tLm, clamp(uv, 0.002, 0.998)).rgb, uK);
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        float edge = inside * smoothstep(0.0, 0.08, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
        vec3 c = alb * mix(open, L, edge);
        gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),ve=new de(new Lt(9e3,9e3,1,1).rotateX(-Math.PI/2),Fe);ve.position.y=-.01,E.add(ve),q.computeVertexNormals();let Ye=new en({color:new ce("#e9a94a"),metalness:1,roughness:.16,envMapIntensity:1.1}),Ae=new de(q,Ye);Ae.matrixAutoUpdate=!1,E.add(Ae),n&&(Ye.emissive=new ce(.32,.2,.06));let L={p:new S,q:new It,s:new S};new Ke().fromArray(te[0].emb).decompose(L.p,L.q,L.s);let T=new hn;T.position.copy(L.p),T.lookAt(te[0].cam[0],L.p.y,te[0].cam[2]);let X=T.quaternion.clone().invert().multiply(L.q),K={a:0,v:.25,drag:!1,x:0},ie=new S,ne=new S,Ie=new Si(new ce(1,.72,.48),6);Ie.position.copy(ee).multiplyScalar(100),E.add(Ie,Ie.target);let xe=document.createElement("canvas");xe.width=Me.width,xe.height=Me.height,xe.getContext("2d").drawImage(Me,0,0);let Pe=new Hi(xe);Pe.flipY=!1,Pe.colorSpace=Nn;let st=z.mask,he={...se,tLm:{value:re},uK:{value:z.lm.ground},uRect:{value:new Je(Se.x0,Se.x1,Se.z0,Se.z1)},uPxAng:{value:6e-4},tMask:{value:Pe},uMask:{value:new Je(st.x0,st.x1,st.z0,st.z1)},uCenter:{value:new oe}},Re=new de(ba(R.grassNear,84,1,1),jh({...he,uTile:{value:84},uWide:{value:w?1.6:1.15},uFade:{value:new oe(30,42)}})),Xe=new de(ba(R.grassFar,300,1,2),jh({...he,uTile:{value:300},uWide:{value:3.4},uFade:{value:new oe(130,150)},uNear:{value:44}},!0));Re.frustumCulled=Xe.frustumCulled=!1,Re.layers.set(1),Xe.layers.set(1),I.layers.enable(1),E.add(Re,Xe);let et=[Re,Xe],Ue=null,ft=null,ot={value:0},Tt=null,k=null,be=null,$=null,ae=null,ye=null,ge=null,rt=null,xt=new xn,$e=kt.map(()=>null),yt=kt.map(()=>!1),$n=G=>new me({uniforms:{tP:{value:G},uRes:{value:new oe(1,1)},uReady:{value:0},uCol:{value:new ce(.9,.86,.8)},uFog:{value:new Je(.5,.5,.5,0)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tP; uniform vec2 uRes; uniform float uReady; uniform vec3 uCol; uniform vec4 uFog; varying vec2 vUv;
      void main(){ vec3 glow = uCol * mix(1.35, 0.75, vUv.y) * (0.85 + 0.25 * (1.0 - abs(vUv.x - 0.5) * 2.0));   // soft daylight beyond the door, never a white panel
        vec3 c = uReady > 0.5 ? texture2D(tP, gl_FragCoord.xy / uRes).rgb : glow; gl_FragColor = vec4(mix(c, uFog.rgb, uFog.a), 1.0); }`}),vi=G=>G.traverse(j=>{j.geometry?.dispose?.();for(let Q of[].concat(j.material||[])){for(let Te of Object.values(Q))Te&&Te.isTexture&&!Te.isRenderTargetTexture&&Te.dispose();for(let Te of Object.values(Q.uniforms||{}))Te&&Te.value&&Te.value.isTexture&&!Te.value.isRenderTargetTexture&&Te.value.dispose()}}),Xn=-1,_r=!1,ai=kt.map(()=>null),Io=G=>G==="bisikaapi"?[Kp({count:36,box:[-12,12,.6,2.6,-70,30]}),Zp({count:140,box:[-12,12,0,14,-12,12],follow:!0}),rd({count:22,box:[-60,60,.4,4.5,-100,50],color:[.78,.82,.8],opacity:.2})]:G==="glavida"?[_a({count:28,center:[10,30,-150],radius:90,height:14,size:.55,color:2764083})]:G==="houseofmoh"?[_a({count:14,center:[0,18,-60],radius:55,height:8,size:.75,color:13225684,glide:2.5,speed:.7})]:G==="cosmos"?[_a({count:2,center:[0,95,-40],radius:140,height:12,size:1.9,color:3814964,glide:4,speed:.5})]:[],Ia=G=>{let j=$e[G];j&&($e[G]=null,yt[G]=!1,vi(j.scene),j.scene.traverse(Q=>{Q.isReflector&&Q.dispose()}),j.dispose?.(),ai[G]=null)},ys=()=>Promise.race([new Promise(G=>requestAnimationFrame(()=>G())),Po(120)]),Ms=async G=>{let j=performance.now();try{_.setRenderTarget(ge);let Te=_.compileAsync(G.scene,I);_.setRenderTarget(null),await Te}catch{_.setRenderTarget(null)}globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(G.key,"compileAsync",Math.round(performance.now()-j)+"ms");let Q=new Set;G.scene.traverse(Te=>{for(let Ee of[].concat(Te.material||[])){for(let Oe of Object.values(Ee))Oe&&Oe.isTexture&&!Oe.isRenderTargetTexture&&Q.add(Oe);for(let Oe of Object.values(Ee.uniforms||{}))Oe&&Oe.value&&Oe.value.isTexture&&!Oe.value.isRenderTargetTexture&&Q.add(Oe.value)}});for(let Te of Q)j=performance.now(),_.initTexture(Te),globalThis.__nrtProf&&(globalThis.__nrtLog||(globalThis.__nrtLog=[])).push(G.key,"tex",Te.image&&Te.image.width,Math.round(performance.now()-j)+"ms"),await ys()},Lo=async G=>{let j=new Set;G.traverse(Q=>{for(let Te of[].concat(Q.material||[])){for(let Ee of Object.values(Te))Ee&&Ee.isTexture&&!Ee.isRenderTargetTexture&&j.add(Ee);for(let Ee of Object.values(Te.uniforms||{}))Ee&&Ee.value&&Ee.value.isTexture&&!Ee.value.isRenderTargetTexture&&j.add(Ee.value)}});for(let Q of j)_.initTexture(Q),await ys()},Sr={a:"#f6c47a",b:"#e0913a",c:"#fff0d2"},Do=(G,j)=>{let Q=new uc({count:A==="high"?3e4:18e3,size:34,colorA:Sr.a,colorB:Sr.b,colorC:Sr.c,spread:16,additive:!1});Q.setShape(m0(G,{count:Q.count,width:20,font:"600 150px Satoshi, sans-serif",lineGap:.95}),"A"),Q.material.depthTest=!1,Q.renderOrder=20,Q.visible=!1;let Te=new de(new Lt(1,1),new me({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec2 vUv; void main(){ float r = length((vUv - 0.5) * vec2(1.0, 2.2)); gl_FragColor = vec4(0.03, 0.035, 0.05, uA * 0.72 * (1.0 - smoothstep(0.05, 0.5, r))); }"}));return Te.renderOrder=19,Te.scale.set(30,11,1),Te.position.z=-.5,Q.add(Te),Q.userData.halo=Te,j.add(Q),Q},Kr=new S,ws=new S,dc=(G,j,Q,Te)=>{let[Ee,Oe]=j,ct=ht.smoothstep(Q,Ee,Ee+.05)*(1-ht.smoothstep(Q,Oe-.05,Oe));if(G.visible=ct>.001,!G.visible){G.u.uAssemble.value=0;return}let tt=18,_t=Math.tan(ht.degToRad(I.fov/2)),mn=ht.clamp((1.1-I.aspect)/.6,0,1);Kr.set(0,0,-1).applyQuaternion(I.quaternion),ws.set(0,1,0).applyQuaternion(I.quaternion),G.position.copy(I.position).addScaledVector(Kr,tt).addScaledVector(ws,tt*_t*ht.lerp(.26,.2,mn)),G.quaternion.copy(I.quaternion),G.scale.setScalar(2*tt*_t*I.aspect*ht.lerp(.5,.84,mn)/20),G.u.uTime.value=Te,G.u.uAssemble.value=ct,G.u.uOpacity.value=ht.smoothstep(ct,.2,.7),G.u.uDance.value=.35+(1-ct)*2.2,G.userData.halo.material.uniforms.uA.value=ct},La=G=>{G<0||G>=kt.length||$e[G]||yt[G]||yt.some(Boolean)||(yt[G]=!0,kt[G].build({base:t,unpack:Co,loader:D,renderer:_,tier:A,grainTex:$}).then(async j=>{if(await Ms(j),!yt[G]){j.dispose?.();return}if(j.huds=[].concat(kt[G].hud||[]).map(Q=>({H:Do(Q.lines,j.scene),at:Q.at})),yt[G]=!1,$e[G]=j,G===0&&(ae=j),j.exitPortal){let Q=new Lt(...j.exitPortal.size);if(j.exitPortal.arch){let[Ee,Oe]=j.exitPortal.size,ct=Ee/2,tt=new yo;tt.moveTo(-ct,-Oe/2),tt.lineTo(ct,-Oe/2),tt.lineTo(ct,Oe/2-ct),tt.absarc(0,Oe/2-ct,ct,0,Math.PI,!1),tt.lineTo(-ct,-Oe/2),Q=new va(tt,32);let _t=Q.attributes.position,mn=Q.attributes.uv;for(let ti=0;ti<_t.count;ti++)mn.setXY(ti,_t.getX(ti)/Ee+.5,_t.getY(ti)/Oe+.5)}let Te=new de(Q,$n(ge.texture));Te.position.set(...j.exitPortal.pos),Te.rotation.y=j.exitPortal.yaw,Te.visible=!1,j.scene.add(Te),j.portalQuad=Te}Bn(),e.debug&&(window.__worlds=$e)}).catch(j=>{console.error("[nomadiic-rt] world",kt[G].key,j),yt[G]=!1}))},P=!1,W=G=>{for(let j of P?[G-1,G+1]:[G+1,G-1])if(j>=0&&j<kt.length&&!$e[j]){La(j);return}},Y=(async()=>{let[G,j,Q,Te]=await Promise.all([N(Co(t+"arch.pack")),N(Ri(D,t+"arch_lm_s.webp").catch(()=>Ri(D,t+"arch_lm.webp"))),N(Ri(D,t+"marble.webp",{srgb:!0,repeat:!0})),N(Co(t+"water.pack"))]);$=Q;let Ee=G.toNonIndexed();Ee.computeVertexNormals();let Oe=[];for(let De of[-30,-36,-42,-48])for(let Rt of[-6.9,6.9])Oe.push(new S(Rt,11.6,De));let ct=(De,Rt,dt)=>new me({uniforms:{...se,...r,tLm:{value:De},tMarble:{value:Q},uK:{value:Rt},uLamps:{value:Oe}},defines:dt?{HALL:""}:{},vertexShader:`attribute float kind; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
        void main(){ vUv = uv; vKind = kind; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normal; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${Ra} ${ri} uniform sampler2D tLm, tMarble; uniform float uK, uNight, uFront, uGlowK, uStorm; uniform vec3 uLamps[8]; varying vec2 vUv; varying vec3 vW, vN; varying float vKind;
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
          gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}),tt=ct(j,z.lm.arch,!1),_t=tt.uniforms;Ue=new de(Ee,tt),E.add(Ue),Promise.all([Co(t+"hall.pack"),Ri(D,t+"hall_lm.webp")]).then(([De,Rt])=>{let dt=De.toNonIndexed();dt.computeVertexNormals(),E.add(new de(dt,ct(Rt,z.lm.hall*.125,!0)))}).catch(De=>console.error("[nomadiic-rt] hall",De)),Te.computeBoundingBox();let mn=Te.boundingBox,ti=mn.getSize(new S),Zr=mn.getCenter(new S),bs=new Mr(new Lt(ti.x,ti.z),{textureWidth:Math.round(innerWidth*Math.min(devicePixelRatio,R.pr)*.5),textureHeight:Math.round(innerHeight*Math.min(devicePixelRatio,R.pr)*.5),shader:{name:"Pool",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},...se},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv4; varying vec3 vW;
          void main(){ vUv4 = textureMatrix * vec4(position, 1.0); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`${ri} uniform sampler2D tDiffuse; varying vec4 vUv4; varying vec3 vW;
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
            gl_FragColor = vec4(applyFog(c, vW), 1.0); }`}});bs.rotation.x=-Math.PI/2,bs.position.set(Zr.x,mn.max.y+.02,Zr.z),bs.camera.layers.set(0),E.add(bs);let ke=Vr(Bp(z.trees,R.clumps,se),E,{cell:40,pad:3,minCount:400});E.add(ke),et.push(ke);try{await Promise.race([document.fonts.load('120px "Nomadiic Line"'),Po(1500)])}catch{}let ut=new Hi(e0("NOMADIIC HORSE DESIGNS"));ut.anisotropy=8,new de(new Lt(19.5,.76),new me({transparent:!0,depthWrite:!1,blending:wl,premultipliedAlpha:!0,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{tT:{value:ut}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tT; varying vec2 vUv;
        void main(){ float a = texture2D(tT, vUv).r; float up = texture2D(tT, vUv + vec2(0.0, 0.012)).r;
          float shade = mix(1.0, 0.42, a) + clamp(up - a, 0.0, 1.0) * 0.0 + clamp(a - up, 0.0, 1.0) * 0.55;   // dark groove, lit lower lip
          gl_FragColor = vec4(vec3(shade), 1.0); }`})).position.set(0,17.98,-20.9);{let De={base:19.95,apex:23.45,half:11.05},Rt=document.createElement("canvas");Rt.width=2048,Rt.height=330;let dt=Rt.getContext("2d");dt.fillStyle="#000",dt.fillRect(0,0,2048,330),dt.filter="blur(3px)";let On=!1,zo=(wt,vt,on,an,ni)=>{dt.save(),dt.translate(wt,vt),dt.rotate(on),dt.beginPath(),dt.ellipse(0,0,an,ni,0,0,Math.PI*2),dt.fill(),dt.restore()};for(let wt of On?[-1,1]:[]){dt.strokeStyle="#9a9a9a",dt.lineWidth=9,dt.beginPath();for(let vt=0;vt<=1.0001;vt+=.02){let on=1024+wt*(190+vt*760),an=120+vt*150-Math.sin(vt*Math.PI)*50;vt===0?dt.moveTo(on,an):dt.lineTo(on,an)}dt.stroke(),dt.fillStyle="#e6e6e6";for(let vt=.03;vt<.98;vt+=.032){let on=1024+wt*(190+vt*760),an=120+vt*150-Math.sin(vt*Math.PI)*50,Tn=(34-vt*16)*1.5;zo(on-wt*Tn*.3,an-Tn*.55,wt*-.55,Tn,Tn*.42),zo(on-wt*Tn*.3,an+Tn*.55,wt*.55,Tn,Tn*.42)}for(let vt=0;vt<5;vt++)dt.beginPath(),dt.arc(1024+wt*(260+vt*150),150+vt*28-Math.sin(vt/5*Math.PI)*40,11,0,Math.PI*2),dt.fillStyle="#ffffff",dt.fill()}dt.filter="none";let _s=new Hi(Rt);_s.anisotropy=8;let Xi=new yo;Xi.moveTo(-De.half,0),Xi.lineTo(De.half,0),Xi.lineTo(0,De.apex-De.base),Xi.closePath();let Mc=new va(Xi),wc=Mc.attributes.position,A0=Mc.attributes.uv;for(let wt=0;wt<wc.count;wt++)A0.setXY(wt,(wc.getX(wt)+De.half)/(2*De.half),wc.getY(wt)/(De.apex-De.base));let aw=wt=>new me({uniforms:{tM:{value:Q},tR:{value:_s}},vertexShader:"varying vec3 vW, vN; varying vec2 vUv; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tM, tR; varying vec3 vW, vN; varying vec2 vUv;
          void main(){ vec3 n = normalize(vN); ${wt}
            vec3 m = texture2D(tM, vW.xy * 0.08 + vW.z * 0.03).rgb * vec3(1.0, 0.98, 0.95);
            float sun = max(dot(n, normalize(vec3(-0.35, 0.75, 0.55))), 0.0);
            gl_FragColor = vec4(m * (0.62 + 0.5 * sun) * vec3(0.99, 0.985, 0.975) + 0.05, 1.0); }`}),Ss=q,bc=L.s.clone().multiplyScalar(.27),R0=new S,Ec=De.base+1.62;Ss.boundingSphere||Ss.computeBoundingSphere();let Na=Ss.boundingSphere.radius*bc.x*.93,Ht=192,yi=48,_c={};try{let wt=j.image,vt=wt.width,on=wt.height,an=document.createElement("canvas");an.width=vt,an.height=on;let ni=an.getContext("2d",{willReadFrequently:!0});ni.drawImage(wt,0,0);let Tn=ni.getImageData(0,0,vt,on).data,Vt=Ee.attributes.position.array,qi=Ee.attributes.uv.array,jr=Ee.attributes.normal.array;for(let[Sc,Ts]of[[-20.68,1],[-59.32,-1]]){let As=[];for(let nt=0,Wt=Vt.length/9;nt<Wt;nt++){let Mt=nt*9,ln=(Vt[Mt]+Vt[Mt+3]+Vt[Mt+6])/3,Rn=(Vt[Mt+1]+Vt[Mt+4]+Vt[Mt+7])/3,sn=(Vt[Mt+2]+Vt[Mt+5]+Vt[Mt+8])/3;Math.abs(ln)>De.half+.6||Rn<De.base-.4||Rn>De.apex+.4||Math.abs(sn-Sc)>1.6||(jr[Mt+2]+jr[Mt+5]+jr[Mt+8])/3*Ts<.5||As.push(nt)}let An=new Float32Array(Ht*yi*3),cr=new Uint8Array(Ht*yi);for(let nt=0;nt<yi;nt++)for(let Wt=0;Wt<Ht;Wt++){let Mt=-De.half+(Wt+.5)/Ht*2*De.half,ln=Ts*Mt,Rn=De.base+(nt+.5)/yi*(De.apex-De.base),sn=-1e9,Mi=0,Li=0;for(let vn of As){let Gt=vn*9,Di=Vt[Gt],Ui=Vt[Gt+1],Qr=Vt[Gt+3],Cs=Vt[Gt+4],Ps=Vt[Gt+6],Is=Vt[Gt+7],Tc=(Cs-Is)*(Di-Ps)+(Ps-Qr)*(Ui-Is);if(Math.abs(Tc)<1e-9)continue;let Bo=((Cs-Is)*(ln-Ps)+(Ps-Qr)*(Rn-Is))/Tc,Oo=((Is-Ui)*(ln-Ps)+(Di-Ps)*(Rn-Is))/Tc,Fa=1-Bo-Oo;if(Bo<-1e-4||Oo<-1e-4||Fa<-1e-4)continue;let zd=(Bo*Vt[Gt+2]+Oo*Vt[Gt+5]+Fa*Vt[Gt+8])*Ts;if(zd>sn){sn=zd;let Ls=vn*6;Mi=Bo*qi[Ls]+Oo*qi[Ls+2]+Fa*qi[Ls+4],Li=Bo*qi[Ls+1]+Oo*qi[Ls+3]+Fa*qi[Ls+5]}}if(sn>-1e8){let vn=Math.min(vt-1,Math.max(0,Mi*vt|0)),Gt=Math.min(on-1,Math.max(0,(1-Li)*on|0)),Di=(Gt*vt+vn)*4,Ui=(nt*Ht+Wt)*3;An[Ui]=Tn[Di],An[Ui+1]=Tn[Di+1],An[Ui+2]=Tn[Di+2],cr[nt*Ht+Wt]=1}}for(let nt=0;nt<40;nt++){let Wt=0;for(let Mt=0;Mt<yi;Mt++)for(let ln=0;ln<Ht;ln++){let Rn=Mt*Ht+ln;if(cr[Rn])continue;let sn=0,Mi=0,Li=0,vn=0;for(let[Gt,Di]of[[1,0],[-1,0],[0,1],[0,-1]]){let Ui=ln+Gt,Qr=Mt+Di;if(Ui<0||Qr<0||Ui>=Ht||Qr>=yi||cr[Qr*Ht+Ui]!==1)continue;let Cs=(Qr*Ht+Ui)*3;Mi+=An[Cs],Li+=An[Cs+1],vn+=An[Cs+2],sn++}if(sn){let Gt=Rn*3;An[Gt]=Mi/sn,An[Gt+1]=Li/sn,An[Gt+2]=vn/sn,cr[Rn]=2}else Wt++}for(let Mt=0;Mt<cr.length;Mt++)cr[Mt]===2&&(cr[Mt]=1);if(!Wt)break}let Rs=new Float32Array(An.length);for(let nt=0;nt<4;nt++){for(let Wt=0;Wt<yi;Wt++)for(let Mt=0;Mt<Ht;Mt++)for(let ln=0;ln<3;ln++){let Rn=0,sn=0;for(let Mi=-2;Mi<=2;Mi++)for(let Li=-14;Li<=14;Li++){let vn=Math.min(Ht-1,Math.max(0,Mt+Li)),Gt=Math.min(yi-1,Math.max(0,Wt+Mi));Rn+=An[(Gt*Ht+vn)*3+ln],sn++}Rs[(Wt*Ht+Mt)*3+ln]=Rn/sn}An.set(Rs)}for(let nt=0;nt<yi;nt++)for(let Wt=0;Wt<3;Wt++){let Mt=0,ln=0,Rn=0,sn=0;for(let vn=0;vn<Ht;vn++){let Gt=vn/(Ht-1)-.5,Di=An[(nt*Ht+vn)*3+Wt];Mt+=Gt,ln+=Di,Rn+=Gt*Gt,sn+=Gt*Di}let Mi=(Ht*sn-Mt*ln)/Math.max(1e-6,Ht*Rn-Mt*Mt),Li=(ln-Mi*Mt)/Ht;for(let vn=0;vn<Ht;vn++)An[(nt*Ht+vn)*3+Wt]=Li+Mi*(vn/(Ht-1)-.5)}let Yi=new Uint8Array(Ht*yi*4);for(let nt=0;nt<Ht*yi;nt++)Yi[nt*4]=An[nt*3],Yi[nt*4+1]=An[nt*3+1],Yi[nt*4+2]=An[nt*3+2],Yi[nt*4+3]=255;let Ki=new ds(Yi,Ht,yi,pi);Ki.magFilter=Ki.minFilter=un,Ki.wrapS=Ki.wrapT=gr,Ki.needsUpdate=!0,_c[Ts]=Ki}}catch(wt){console.warn("[nomadiic-rt] pediment light",wt)}let C0=wt=>{let vt=new It().setFromAxisAngle(new S(0,1,0),wt).multiply(X),on=new Ke().compose(new S,vt,bc),an=Ss.attributes.position,ni=Ss.index,Tn=new S(0,0,wt?-1:1),Vt=new S,qi=new S,jr=new S,Sc=new S,Ts=new S,As=new S,An=new S,cr=ni?ni.count/3:an.count/3,Rs=[];for(let nt=0;nt<cr;nt++){let Wt=ni?ni.getX(nt*3):nt*3,Mt=ni?ni.getX(nt*3+1):nt*3+1,ln=ni?ni.getX(nt*3+2):nt*3+2;Vt.fromBufferAttribute(an,Wt).applyMatrix4(on),qi.fromBufferAttribute(an,Mt).applyMatrix4(on),jr.fromBufferAttribute(an,ln).applyMatrix4(on);let Rn=Sc.subVectors(qi,Vt).cross(Ts.subVectors(jr,Vt)),sn=Rn.length();sn<1e-12||Rs.push([Rn.clone().divideScalar(sn),sn,(Vt.dot(Tn)+qi.dot(Tn)+jr.dot(Tn))/3])}let Yi=1e9,Ki=-1e9;for(let nt of Rs)Yi=Math.min(Yi,nt[2]),Ki=Math.max(Ki,nt[2]);for(let nt of Rs)if(nt[2]>Yi+(Ki-Yi)*.5){let Wt=nt[0].dot(Tn)<0?nt[0].clone().negate():nt[0];As.addScaledVector(Wt,nt[1])}return As.lengthSq()>0?As.normalize():Tn},Fd=(wt,vt)=>new me({uniforms:{...se,...r,tM:{value:Q},tP:{value:_c[wt]||null},uK:{value:z.lm.arch},uDir:{value:wt},uHas:{value:_c[wt]?1:0},uMf:{value:vt?C0(wt>0?0:Math.PI):new S(0,0,wt)},uMc:{value:new S(0,Ec,wt>0?-20.68+.3:-59.32-.3)}},defines:vt?{MED:""}:{},vertexShader:"varying vec3 vW, vN; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Ra} ${ri} uniform sampler2D tM, tP; uniform float uK, uDir, uHas, uNight, uStorm; uniform vec3 uMf, uMc; varying vec3 vW, vN;
          vec3 tri(vec3 p, vec3 n, float s){ vec3 w = pow(abs(n), vec3(4.0)); w /= dot(w, vec3(1.0));
            return texture2D(tM, p.zy / s).rgb * w.x + texture2D(tM, p.xz / s).rgb * w.y + texture2D(tM, p.xy / s).rgb * w.z; }
          void main(){ vec3 n = normalize(vN); vec3 nf = vec3(0.0, 0.0, uDir);
            vec2 pu = clamp(vec2((uDir * vW.x + ${De.half.toFixed(3)}) / ${(2*De.half).toFixed(3)}, (vW.y - ${De.base.toFixed(3)}) / ${(De.apex-De.base).toFixed(3)}), 0.003, 0.997);
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
              shade = 1.0 - 0.2 * smoothstep(${(Na*.9).toFixed(3)}, ${(Na*.99).toFixed(3)}, r) * (1.0 - smoothstep(${(Na*1).toFixed(3)}, ${(Na*1.12).toFixed(3)}, r));
            #endif
            gl_FragColor = vec4(applyFog(alb * L * shade, vW), 1.0); }`});for(let[wt,vt]of[[-20.68,0],[-59.32,Math.PI]]){let on=new de(Mc,Fd(vt?-1:1,!1));on.position.set(0,De.base,wt),on.rotation.y=vt,E.add(on);let an=new de(Ss,Fd(vt?-1:1,!0));an.matrixAutoUpdate=!1,an.matrix.compose(R0.set(0,Ec,wt+(vt?-.3:.3)),new It().setFromAxisAngle(new S(0,1,0),vt).multiply(X),bc),E.add(an)}}try{await Promise.race([document.fonts.load("600 100px Satoshi"),Po(1500)])}catch{}for(let De of nd){let Rt=new Hi(t0(De.lines));Rt.anisotropy=8,Rt.colorSpace=qt;let dt=new Wn(4,1.46,.09),On=new de(dt,new me({uniforms:{...se,tT:{value:Rt},uLz:{value:De.z}},vertexShader:"varying vec2 vUv; varying vec3 vW, vN; varying float vFront; void main(){ vUv = uv; vFront = step(0.5, normal.z); vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D tT; uniform float uTime, uLz; varying vec2 vUv; varying vec3 vW, vN; varying float vFront;
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
            gl_FragColor = vec4(c * 1.15, 1.0); }`}));On.position.set(De.x+(De.x<0?.05:-.05),8.4,De.z),On.rotation.y=De.x<0?Math.PI/2:-Math.PI/2,E.add(On)}let Ot=new tr([[0,0],[.38,.02],[.5,.18],[.54,.34],[.5,.36],[0,.3]].map(([De,Rt])=>new oe(De,Rt)),28),gn=new en({color:new ce("#8a5a2b"),metalness:.55,roughness:.4,emissive:new ce("#3a2410")}),Qt=new Lt(.7,1.2);Qt.translate(0,.55,0);let ci=new me({transparent:!0,depthWrite:!1,blending:Ct,uniforms:{uTime:se.uTime},vertexShader:"varying vec2 vUv; uniform float uTime; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0); mv.xy += position.xy * vec2(1.0, 1.0 + 0.08 * sin(uTime * 9.0)); gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec2 vUv; uniform float uTime;
        float n(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(n(i), n(i + vec2(1, 0)), f.x), mix(n(i + vec2(0, 1)), n(i + vec2(1, 1)), f.x), f.y); }
        void main(){ vec2 p = vUv - vec2(0.5, 0.08); float t = uTime * 2.6;
          float w = 0.32 * (1.0 - vUv.y) + 0.02; float d = abs(p.x + (vn(vec2(vUv.y * 4.0 - t, 1.0)) - 0.5) * 0.18 * vUv.y) / w;
          float body = (1.0 - smoothstep(0.55, 1.0, d)) * smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y + (vn(vec2(vUv.x * 3.0, vUv.y * 5.0 - t)) - 0.5) * 0.25));
          vec3 col = mix(vec3(1.0, 0.85, 0.5), vec3(1.0, 0.35, 0.08), smoothstep(0.1, 0.8, vUv.y));
          gl_FragColor = vec4(col * body * 9.0, body); }`});for(let De of nd){let Rt=Math.sign(De.x),dt=new S(De.x-Rt*.56,0,De.z),On=10.25,zo=new de(Ot,gn);zo.position.set(dt.x,On-.55,dt.z),E.add(zo);let _s=new de(new nr(.05,.05,.58,8),gn);_s.rotation.z=Math.PI/2,_s.position.set(dt.x+Rt*.28,On-.5,dt.z),E.add(_s);let Xi=new de(Qt,ci);Xi.position.set(dt.x,On-.22,dt.z),Xi.renderOrder=8,Xi.frustumCulled=!1,E.add(Xi)}let xi=jp(0,45.1,R.spray,se);E.add(xi),be=xi,Bn();let lr=()=>rr({base:t,unpack:Co,loader:D,U:se,groundLm:Fe.uniforms.tLm.value,groundK:z.lm.ground,rect:Fe.uniforms.uRect.value,tier:A,scene:E,onPart:()=>{}}).then(async De=>{try{let Rt=new Zt(1,1,{type:Jt});_.setRenderTarget(Rt);let dt=_.compileAsync(De.group,I,E);_.setRenderTarget(null),await dt,Rt.dispose()}catch{_.setRenderTarget(null)}await Lo(De.group),E.add(De.group),et.push(De.group),Tt=De.fade,k=De,V()}).catch(De=>console.error("[nomadiic-rt] garden",De)).finally(()=>{ge=new Zt(2,2,{type:Jt,minFilter:un,magFilter:un}),rt=new Zt(2,2,{type:Jt,minFilter:un,magFilter:un}),ye=new de(new Lt(sc.size[0],sc.size[1]),$n(ge.texture)),ye.position.set(...sc.pos),ye.visible=!1,E.add(ye),La(0)});n||lr();let[rn,Gi,Jr,Da]=await Promise.all([Pa(t+"terrain.json").then(De=>De.json()),N(v0(t+"terrain.png")),N(Ri(D,t+"mtn_c_s.webp")),Ri(D,t+"tex/rock_face_03_diff.webp",{srgb:!0,repeat:!0}).catch(()=>null)]),Rr=document.createElement("canvas");Rr.width=Gi.width,Rr.height=Gi.height;let Ua=Rr.getContext("2d");Ua.drawImage(Gi,0,0);let Es=Ua.getImageData(0,0,Rr.width,Rr.height).data,Ud=Rr.width,xc=A==="high"?1:2,Fo=Math.floor((Ud-1)/xc)+1,yc=new Lt(rn.ext*2,rn.ext*2,Fo-1,Fo-1).rotateX(-Math.PI/2),Nd=yc.attributes.position;for(let De=0;De<Fo;De++)for(let Rt=0;Rt<Fo;Rt++){let dt=(De*xc*Ud+Rt*xc)*4,On=(Es[dt]*256+Es[dt+1])/65535;Nd.setY(De*Fo+Rt,rn.lo+On*(rn.hi-rn.lo))}Nd.needsUpdate=!0,yc.computeBoundingSphere();let T0=Promise.all([Ri(D,t+"arch_lm.webp"),Ri(D,t+"ground_lm.webp"),Ri(D,t+"mtn_c.webp")]).then(([De,Rt,dt])=>{_t.tLm.value=De,Fe.uniforms.tLm.value=Rt,he.tLm.value=Rt,ft.material.uniforms.tC.value=dt,V(),E.traverse(On=>{On.isInstancedMesh&&On.material.uniforms&&On.material.uniforms.tLm&&(On.material.uniforms.tLm.value=Rt)})}).catch(()=>{});if(ft=new de(yc,new me({transparent:!0,depthWrite:!0,uniforms:{...se,...r,tC:{value:Jr},tR:{value:Da},uK:{value:z.lm.mtn},uA:ot,uLo:{value:rn.lo},uHi:{value:rn.hi}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`${Ra} ${ri} uniform sampler2D tC, tR; uniform float uK, uA, uLo, uHi, uStorm; varying vec3 vW;
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
          gl_FragColor = vec4(f, uA); }`})),ft.renderOrder=0,E.add(ft),et.push(ft),n){await Promise.race([T0,Po(3500)]);try{let De=new Zt(1,1,{type:Jt});_.setRenderTarget(De);let Rt=_.compileAsync(E,I);_.setRenderTarget(null),await Promise.race([Rt,Po(4e3)]),De.dispose()}catch{_.setRenderTarget(null)}await Lo(E),v=!0,m(),lr().finally(M)}})();Y.catch(G=>{console.error("[nomadiic-rt] stage 2",G),d&&d.fail()});let Z=new Zt(2,2,{type:Jt,samples:R.msaa}),O=new Ql(_,Z),pe=new $l(E,I);O.addPass(pe),O.addPass(new kr({uniforms:{tDiffuse:{value:null},uPx:{value:new oe(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      bool bad(vec3 c){ return any(isnan(c)) || any(isinf(c)); }
      void main(){ vec3 c = texture2D(tDiffuse, vUv).rgb;
        if (bad(c)) { vec2 px = 1.0 / vec2(textureSize(tDiffuse, 0)); vec3 s = vec3(0.0); float n = 0.0;
          for (int i = -1; i <= 1; i++) for (int j = -1; j <= 1; j++) { vec3 t = texture2D(tDiffuse, vUv + vec2(i, j) * px).rgb; if (!bad(t)) { s += t; n += 1.0; } }
          c = n > 0.0 ? s / n : vec3(0.0); }
        gl_FragColor = vec4(min(max(c, vec3(0.0)), vec3(12.0)), 1.0); }`}));let we=new kr({uniforms:{tDiffuse:{value:null},uSun:{value:new oe(.5,.8)},uOn:{value:0},uThresh:{value:.7},uTint:{value:new ce(1,.9,.72)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uOn, uThresh; uniform vec3 uTint; varying vec2 vUv;
      void main(){ vec3 base = texture2D(tDiffuse, vUv).rgb;
        if (uOn < 0.001) { gl_FragColor = vec4(base, 1.0); return; }
        vec2 d = (vUv - uSun) * (0.92 / 40.0); vec2 p = vUv; vec3 acc = vec3(0.0); float w = 1.0;
        for (int i = 0; i < 40; i++) { p -= d; vec3 s = texture2D(tDiffuse, p).rgb; float l = dot(s, vec3(0.3333));
          acc += s * clamp((l - uThresh) / max(l, 1e-3), 0.0, 1.0) * w; w *= 0.955; }
        vec3 add = acc * (uOn / 40.0) * uTint; add = add / (1.0 + dot(add, vec3(0.3333)));    // rays brighten, never white out the frame
        gl_FragColor = vec4(base + add * 0.9, 1.0); }`});O.addPass(we),A!=="high"&&(we.enabled=!1);let ze=new _o(new oe(2,2),.22,.6,1.6),Be=ze.materialHighPassFilter;Be.fragmentShader=Be.fragmentShader.replace("vec4 texel = texture2D( tDiffuse, vUv );","vec4 texel = texture2D( tDiffuse, vUv ); if (texel.r != texel.r || texel.g != texel.g || texel.b != texel.b) texel = vec4(0.0); texel.rgb = min(texel.rgb, vec3(4.0));"),Be.needsUpdate=!0,O.addPass(ze),O.addPass(new ec);let Qe=new kr({uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new oe(1,1)},uVeil:{value:0},uVeilCol:{value:new ce(.96,.93,.88)},uSat:{value:1.22},uCon:{value:.38},uWarm:{value:0},uNight:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime, uVeil, uSat, uCon, uWarm, uNight, uFlash; uniform vec2 uRes; uniform vec3 uVeilCol; varying vec2 vUv;
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
        gl_FragColor = vec4(c, 1.0); }`});O.addPass(Qe);let We=0,Ce=0,bt=0,zt=0,Nt=0,qn=0,at=_.domElement,He=()=>{let G=Xn<0?-1:Xn-1;for(let j=Math.max(0,Xn);j<kt.length&&$e[j];j++)G=j;return G<0?$e[0]?Sn[0][1]:ar*.9:G+1<kt.length&&!$e[G+1]?Sn[G][0]+(Sn[G][1]-Sn[G][0])*.8:Sn[G][1]},Ci=()=>{let G=Xn<0?-1:Xn-1;for(let j=Math.max(0,Xn);j<kt.length&&$e[j];j++)G=j;return G<0?!$e[0]:G+1<kt.length&&!$e[G+1]},Et=()=>{let G=Math.max(0,Xn);for(;G>0&&$e[G-1];)G--;return G===0?0:Sn[G][0]},ei=G=>{G.preventDefault(),!y&&(We=ht.clamp(We+G.deltaY*32e-5*ar,Et(),He()))},Pi=null,zn=G=>{Pi=G.touches[0].clientY},Tr=G=>{if(Pi==null||y)return;let j=G.touches[0].clientY;We=ht.clamp(We+(Pi-j)*.0011*ar,Et(),He()),Pi=j,G.preventDefault()},Bt=G=>{let j=at.getBoundingClientRect();if(bt=((G.clientX-j.left)/j.width-.5)*2,zt=((G.clientY-j.top)/j.height-.5)*2,K.drag){let Q=G.clientX-K.x;K.x=G.clientX,K.a+=Q*.012,K.v=ht.clamp(Q*.012/Math.max(Td,1/120),-12,12)}},li=G=>{Ce/ar*To<gs*.9&&(K.drag=!0,K.x=G.clientX,at.style.cursor="grabbing")},Ar=()=>{K.drag=!1,at.style.cursor=Ce/ar*To<gs*.9?"grab":""};at.addEventListener("pointerdown",li),addEventListener("pointerup",Ar);let Yn=G=>{c||((G.key==="ArrowDown"||G.key==="PageDown"||G.key===" ")&&(We=Math.min(He(),We+.03)),(G.key==="ArrowUp"||G.key==="PageUp")&&(We=Math.max(Et(),We-.03)))};at.addEventListener("wheel",ei,{passive:!1}),at.addEventListener("touchstart",zn,{passive:!0}),at.addEventListener("touchmove",Tr,{passive:!1}),at.addEventListener("pointermove",Bt),addEventListener("keydown",Yn);let lt={pr:Math.min(devicePixelRatio,R.pr),acc:0,n:0,hold:0},Bn=()=>{let G=i.clientWidth||innerWidth,j=i.clientHeight||innerHeight,Q=Math.min(devicePixelRatio,R.pr,lt.pr);_.setPixelRatio(Q),O.setPixelRatio(Q),_.setSize(G,j,!1),O.setSize(G,j),I.aspect=G/j,I.fov=ht.lerp(z.fov,66,ht.clamp((1.2-I.aspect)/.7,0,1)),I.updateProjectionMatrix(),Qe.uniforms.uRes.value.set(G*_.getPixelRatio(),j*_.getPixelRatio()),he.uPxAng.value=2*Math.tan(ht.degToRad(I.fov)/2)/(j*_.getPixelRatio());let Te=j*_.getPixelRatio()*.5/Math.tan(ht.degToRad(I.fov)/2);if(be&&(be.material.uniforms.uPx.value=Te),ge){let Ee=_.getPixelRatio();ge.setSize(Math.round(G*Ee),Math.round(j*Ee));for(let Oe of[ye,...$e.map(ct=>ct&&ct.portalQuad)])Oe&&Oe.material.uniforms.uRes.value.set(G*Ee,j*Ee)}$e.forEach(Ee=>Ee&&Ee.setPx(Te))},Uo=new ResizeObserver(Bn);Uo.observe(i),Bn();let wd=()=>{Bn(),matchMedia(`(resolution: ${devicePixelRatio}dppx)`).addEventListener("change",wd,{once:!0})};wd();let $M=new It,ew=new It,bd=new It,w0=new Mn,tw=new Ke,nw=new Ke,iw=new S,rw=new S,sw=new S,ow=new S,fc=new S,b0=Xr(),Ed=new S,_d=new S,Sd=new It,E0=new S(0,1,0),pc=new S,Td=1/60;function _0(G,j,Q){let Te=ht.clamp(G,0,1)*To;b0.sample(Te,Ed,_d),I.position.copy(Ed),I.lookAt(_d);let Ee=Math.abs(We-Ce)<.002&&!K.drag?1:0;return Nt+=(bt*Ee-Nt)*.02,bd.setFromEuler(w0.set(0,-Nt*.025,0,"YXZ")),I.quaternion.multiply(bd),c&&(K.a=0,K.v=0),K.drag||(K.a+=K.v*Q,K.v+=(.22-K.v)*(1-Math.exp(-Q*.9))),T.lookAt(I.position.x,L.p.y,I.position.z),Sd.copy(T.quaternion).multiply(new It().setFromAxisAngle(E0,K.a)).multiply(X),pc.copy(L.p),pc.y+=Math.sin(j*.9)*.12,Ae.matrix.compose(pc,Sd,L.s),Ae.visible=I.position.z>40,Te}let Ad=new Ke,Rd=new hs,Cd=new yn,Pd=new ce(.95,.9,.82),Ii=new S,Id=new S,Ld={palace:{rays:.35,thresh:.85,sat:1.18,con:.36,warm:.3},mithraki:{rays:.3,thresh:.9,sat:1.12,con:.34,warm:.2},revisetax:{rays:.55,thresh:.8,sat:1.12,con:.36,warm:.4},bisikaapi:{rays:.9,thresh:.62,sat:1.18,con:.4,warm:.25},glavida:{rays:.3,thresh:.75,sat:1.15,con:.38,warm:.1},innovious:{rays:.4,thresh:.8,sat:1.15,con:.34,warm:-.3},houseofmoh:{rays:.45,thresh:.7,sat:1.1,con:.34,warm:.15},cosmos:{rays:.15,thresh:.85,sat:1.05,con:.36,warm:-.8},perseid:{rays:0,thresh:1,sat:1.1,con:.3,warm:-.5}},mc=null;document.fonts.load("600 150px Satoshi").catch(()=>{}).finally(()=>{mc=Do(["Nomadiic Horse Designs"],E)});let S0=(G,j)=>{let Q=mc,Te=ht.smoothstep(j,.5,2.6)*(1-ht.smoothstep(G,gs*.75,gs*1.15));if(Q.visible=Te>.001,!Q.visible)return;let Ee=18,Oe=Math.tan(ht.degToRad(I.fov/2)),ct=ht.clamp((1.1-I.aspect)/.6,0,1);Kr.set(0,0,-1).applyQuaternion(I.quaternion),ws.set(0,1,0).applyQuaternion(I.quaternion),Q.position.copy(I.position).addScaledVector(Kr,Ee).addScaledVector(ws,Ee*Oe*ht.lerp(.62,.5,ct)),Q.quaternion.copy(I.quaternion),Q.scale.setScalar(2*Ee*Oe*I.aspect*ht.lerp(.62,.9,ct)/20),Q.u.uTime.value=j,Q.u.uAssemble.value=Te,Q.u.uOpacity.value=ht.smoothstep(Te,.2,.7),Q.u.uDance.value=.3+(1-Te)*2.2,Q.userData.halo.material.uniforms.uA.value=Te*.6},gc=new wo,Dd=0,vc=!0;function No(){if(!vc)return;Dd=requestAnimationFrame(No);let G=Math.min(gc.getDelta(),.05),j=gc.elapsedTime;Ce+=(We-Ce)*(1-Math.exp(-G*3.2)),Td=G;let Q=-1;for(let ke=0;ke<kt.length;ke++)Ce>=Sn[ke][0]&&$e[ke]&&(Q=ke);if(Q!==Xn){Xn=Q;for(let ke=0;ke<kt.length;ke++)(ke<Q-(A==="high"?2:1)||ke>Q+1)&&Ia(ke);Q>=1&&!_r?(vi(E),_r=!0):Q===0&&_r?(_r=!1,(async()=>{let ke=new Set;E.traverse(ut=>{for(let At of[].concat(ut.material||[])){for(let Ot of Object.values(At))Ot&&Ot.isTexture&&!Ot.isRenderTargetTexture&&ke.add(Ot);for(let Ot of Object.values(At.uniforms||{}))Ot&&Ot.value&&Ot.value.isTexture&&!Ot.value.isRenderTargetTexture&&ke.add(Ot.value)}});for(let ut of ke){if(Xn!==0)return;_.initTexture(ut),await ys()}})()):Q<0&&(_r=!1)}We<Ce-4e-4?P=!0:We>Ce+4e-4&&(P=!1),ge&&W(Q);{let ke=Q<0&&I.position.z<-27;for(let ut of et)ut.visible=!ke}let Te,Ee,Oe;if(Q>=0){let ke=$e[Q],ut=(Ce-Sn[Q][0])/(Sn[Q][1]-Sn[Q][0]);ke.pose(ut,I),ke.update(j,G,ut,I),$e.forEach(At=>{if(At&&At!==ke)for(let Ot of At.huds||[])Ot.H.visible=!1});for(let At of ke.huds||[])dc(At.H,At.at,ut,j);pe.scene=ke.scene,_.toneMappingExposure=ke.exposure,Ae.visible=!1,Te=ke.exit,Ee=ke.portalQuad,Oe=$e[Q+1],E.visible&&ye&&(ye.visible=!1)}else{let ke=_0(Ce/ar,j,G);pe.scene=E,mc&&S0(ke,j-u),_.toneMappingExposure=e.exposure??.95,Te=ZM,Ee=ye,Oe=$e[0]}$e.forEach(ke=>{ke&&ke.portalQuad&&ke.portalQuad!==Ee&&(ke.portalQuad.visible=!1)}),Q>=0&&ye&&(ye.visible=!1),ed(pe.scene,I.position);let ct=Te.origin,tt=Math.hypot(I.position.x-ct[0],I.position.z-ct[2]),_t=Q>=0?$e[Q].entry.origin:null,mn=_t?Math.hypot(I.position.x-_t[0],I.position.z-_t[2]):99,ti=tt<1.6||mn<1||Q<0&&I.position.z<-44||Q>=0&&$e[Q].closeUp?.(I.position);if(I.near<.5!==ti&&(I.near=ti?.08:1,I.updateProjectionMatrix()),Ee){Ee.updateMatrixWorld(),I.updateMatrixWorld(),Ad.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Rd.setFromProjectionMatrix(Ad),Ee.geometry.boundingSphere||Ee.geometry.computeBoundingSphere(),Cd.copy(Ee.geometry.boundingSphere).applyMatrix4(Ee.matrixWorld),Ee.visible=Rd.intersectsSphere(Cd)&&(Q>=0||I.position.z<-22);let ke=Ee.material.uniforms,ut=!!Oe;{let At=Q>=0&&$e[Q].scene.background?$e[Q].scene.background:se.uFogCol.value;ke.uFog.value.set(At.r,At.g,At.b,ht.smoothstep(tt,22,120)*.88)}if(ke.uReady.value=ut?1:0,ut||ke.uCol.value.copy(Q>=0&&$e[Q].scene.background?$e[Q].scene.background:Pd).lerp(Pd,.5),Ee.visible&&ut){let At=ge;ke.tP.value=At.texture;let Ot=i0(Oe.entry,Te);xt.copy(I),xt.matrixAutoUpdate=!1,xt.matrixWorld.multiplyMatrices(Ot,I.matrixWorld),xt.matrixWorldInverse.copy(xt.matrixWorld).invert(),xt.near=.08,xt.updateProjectionMatrix(),xt.matrixWorld.decompose(xt.position,xt.quaternion,xt.scale),Oe.update(j,G,0,xt),ed(Oe.scene,xt.position);let gn=1,Qt=1,ci=-1,xi=-1,lr=Ee.geometry.attributes.position;for(let Es=0;Es<lr.count;Es++){if(Ii.fromBufferAttribute(lr,Es).applyMatrix4(Ee.matrixWorld).project(I),Ii.z>1){gn=-1,Qt=-1,ci=1,xi=1;break}gn=Math.min(gn,Ii.x),ci=Math.max(ci,Ii.x),Qt=Math.min(Qt,Ii.y),xi=Math.max(xi,Ii.y)}let rn=At.width,Gi=At.height,Jr=Math.max(0,Math.floor((gn*.5+.5)*rn)-2),Da=Math.max(0,Math.floor((Qt*.5+.5)*Gi)-2),Rr=Math.min(rn,Math.ceil((ci*.5+.5)*rn)+2)-Jr,Ua=Math.min(Gi,Math.ceil((xi*.5+.5)*Gi)+2)-Da;At.scissor.set(Jr,Da,Math.max(1,Rr),Math.max(1,Ua)),At.scissorTest=!0,_.setRenderTarget(At),_.render(Oe.scene,xt),At.scissorTest=!1,_.setRenderTarget(null)}}let Zr=0;for(let ke=0;ke<kt.length;ke++)if(kt[ke].veil){let ut=1-ht.smoothstep(Math.abs(Ce-Sn[ke][0]),4e-4,.0075);ut>Zr&&(Zr=ut,Qe.uniforms.uVeilCol.value.setRGB(...kt[ke].veil))}Qe.uniforms.uVeil.value=Zr;{let ke=Q>=0?kt[Q].key:"palace",ut=Ld[ke]||Ld.palace,At=Q>=0?$e[Q].sun:ee,Ot=Q<0&&I.position.z<-24;if(At&&ut.rays>0&&!Ot){Ii.copy(I.position).addScaledVector(At,1e3).project(I),I.getWorldDirection(Id);let Qt=ht.smoothstep(Id.dot(At),.05,.45),ci=1-ht.smoothstep(Math.hypot(Ii.x,Ii.y),1,1.8);we.uniforms.uSun.value.set(Ii.x*.5+.5,Ii.y*.5+.5),we.uniforms.uOn.value=ut.rays*Qt*ci*(1-Zr),we.uniforms.uThresh.value=ut.thresh}else we.uniforms.uOn.value=0;let gn=Qe.uniforms;gn.uSat.value+=(ut.sat-gn.uSat.value)*.05,gn.uCon.value+=(ut.con-gn.uCon.value)*.05,gn.uWarm.value+=(ut.warm-gn.uWarm.value)*.05}let bs=Ce;if(U.update(bs,j),U.setBusy&&U.setBusy(!c&&(Ci()&&We>=He()-.004||Xn>0&&!$e[Xn-1]&&We<=Et()+.004)),j>6&&Tt&&Tt.value>=1&&(lt.acc+=G,lt.n++,lt.acc>1.2)){let ke=lt.n/lt.acc;lt.acc=0,lt.n=0,lt.hold=Math.max(0,lt.hold-1);let ut=Math.min(devicePixelRatio,R.pr),At=typeof document<"u"&&document.hidden;if(lt.low=!At&&ke<40?(lt.low||0)+1:0,lt.fast=ke>57?(lt.fast||0)+1:0,lt.low>=4&&lt.hold===0&&(lt.q||0)<4){if(lt.q=(lt.q||0)+1,lt.hold=4,lt.low=0,lt.q===1)for(let[Ot,gn]of[[Re.geometry,.55],[Xe.geometry,.6]]){let Qt=Ot.index?Ot.index.count:Ot.attributes.position.count;Ot.setDrawRange(0,Math.floor(Qt*gn/3)*3)}else lt.q===2?we.enabled=!1:(lt.pr=Math.max(1,lt.pr-.25),Bn());e.debug&&console.log("[nomadiic-rt] quality step",lt.q,"pr",lt.pr)}else lt.fast>=5&&lt.hold===0&&lt.pr<ut&&(lt.pr=Math.min(ut,lt.pr+.25),lt.hold=6,lt.fast=0,lt.q=Math.max(2,(lt.q||0)-1),Bn())}if(Tt&&Tt.value<1&&(Tt.value=Math.min(1,Tt.value+G*.7)),se.uTime.value=j,Qe.uniforms.uTime.value=j%10,Q<0)Ne.update(j,G,se.uFogCol.value,9e-4),it.update(j,G),it.mesh.visible=s>.05;else{if(!ai[Q]&&$e[Q]){ai[Q]=Io(kt[Q].key);for(let ut of ai[Q])$e[Q].scene.add(ut.mesh)}let ke=$e[Q].scene.background||se.uFogCol.value;for(let ut of ai[Q]||[])ut.leaves?ut.update(j,G,I,ke,.03):ut.update(j,G,ke,.0012)}if(n){let ke=I.position.z,ut=Q>=0?kt[Q].key:"palace",At=I.position.y,Ot=0,gn=0,Qt=1;Q<0?(Ot=ht.smoothstep(ke,-30,-16),Qt=ht.smoothstep(ke,-26,-18)):ut==="glavida"?(Ot=1,gn=-23,Qt=At>-24?1:0):ut==="houseofmoh"&&(Ot=1,Qt=At>.3?1:0),s+=(Ot-s)*Math.min(1,G*3),$e.forEach((rn,Gi)=>{if(rn&&rn.sky&&(kt[Gi].key==="glavida"||kt[Gi].key==="houseofmoh")){let Jr=rn.sky.material.uniforms;Jr.uStorm.value=1,Jr.uT.value=j}});let ci=c?0:l.update(G,s>.3&&Qt>.5);l.strikeId!==o&&(o=l.strikeId,!c&&s>.3&&Qt>.5&&a.strike(I,gn));let xi=pe.scene;le.parent!==xi&&xi.add(le),a.group.parent!==xi&&xi.add(a.group),a.update(ci*s*Qt),Qe.uniforms.uNight.value=Q<0?0:s*(ut==="houseofmoh"?.55:1),Le.material.uniforms.uNight.value=Q<0?s:0,Le.material.uniforms.uFlash.value=ci,Le.material.uniforms.uT.value=j;let lr=Q>=0?$e[Q].sky:null;lr&&lr.material.uniforms.uStorm.value>0&&(lr.material.uniforms.uFlash.value=ci),r.uStorm.value=Q<0?s:0,le.visible=s*Qt>.01,le.material.uniforms.uA.value=s*Qt,le.material.uniforms.uFl.value=ci;{let rn=s*Qt;!c&&Math.abs(rn-l.mix)>.04&&l.setMix(rn)}{let rn=ut==="bisikaapi"?"forest":ut==="houseofmoh"&&Qt>.5?"sea":"";!c&&rn!==l.amb&&l.setAmb(rn)}}if(I.getWorldDirection(fc),he.uCenter.value.set(I.position.x+fc.x*34,I.position.z+fc.z*34),ft&&ot.value<1&&(ot.value=Math.min(1,ot.value+G*.8)),n&&c){q.boundingSphere||q.computeBoundingSphere();let ke=q.boundingSphere;ie.copy(ke.center).applyMatrix4(Ae.matrix),ne.set(0,1,0).applyQuaternion(I.quaternion).multiplyScalar(ke.radius*L.s.x*.86).add(ie),ie.project(I),ne.project(I);let ut=i.clientWidth||innerWidth,At=i.clientHeight||innerHeight;d.setTarget((ie.x*.5+.5)*ut,(.5-ie.y*.5)*At,Math.hypot((ne.x-ie.x)*.5*ut,(ne.y-ie.y)*.5*At))}!c||d.diving?O.render(G):d.showing&&(No.warmN||0)<3&&(No.warmN=(No.warmN||0)+1,O.render(G))}return No(),p(1,"ready"),g=!0,m(),e.debug&&Object.assign(window,{__portal:()=>[ge&&[ge.width,ge.height,ge.texture.minFilter,ge.texture.magFilter],rt&&[rt.width,rt.height]],__weather:l,__ranges:Sn,__intro:d,__P0:ar,__scene:E,__composer:O,__renderer:_,__camera:I,__bloom:ze}),{get progress(){return Ce},set progress(G){We=G},ready:Y,destroy(){vc=!1,cancelAnimationFrame(Dd),Uo.disconnect(),at.removeEventListener("wheel",ei),at.removeEventListener("touchstart",zn),at.removeEventListener("touchmove",Tr),at.removeEventListener("pointermove",Bt),removeEventListener("keydown",Yn),at.removeEventListener("pointerdown",li),removeEventListener("pointerup",Ar),U.destroy(),E.traverse(G=>{G.geometry?.dispose?.();let j=G.material;j&&(Array.isArray(j)?j:[j]).forEach(Q=>Q.dispose())}),O.dispose?.(),_.dispose(),at.remove(),d&&d.destroy(),l&&l.destroy()}}}export{vE as mount};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
