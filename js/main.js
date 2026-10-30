const $=s=>document.querySelector(s);
let extra=[];try{extra=JSON.parse(localStorage.getItem("mvx")||"[]")}catch(e){}
const all=()=>[...WORKS,...extra];
let cat="Todos",more=false;
function mock(w,h){const g=w.url?w.url.replace(/^https?:\/\//,"").replace(/\/$/,""):"em breve";return `<div class="mk" style="--h:${h}"><div class="bar"><i></i><i></i><i></i><em>${g}</em></div><div class="bd"><b></b><s></s><s></s><div class="bl"><u></u><u></u><u></u></div></div></div><span class="ini">${w.title.slice(0,2).toUpperCase()}</span>`}
function render(){
  const a=all(),cats=["Todos",...new Set(a.map(w=>w.cat))];
  $("#fl").innerHTML=cats.map(c=>`<button class="${c===cat?"on":""}">${c}</button>`).join("");
  $("#fl").querySelectorAll("button").forEach(b=>b.onclick=()=>{cat=b.textContent;render()});
  const fl=a.filter(w=>cat==="Todos"||w.cat===cat),lim=more?fl.length:6;
  $("#more").style.display=fl.length>6?"":"none";$("#more").textContent=more?"Ver menos":"Ver mais ("+(fl.length-6)+")";
  $("#wk").innerHTML=fl.slice(0,lim).map(w=>{const k=a.indexOf(w),h=(k*47+260)%360,bg=w.img?`background-image:url('${w.img}')`:`background-image:linear-gradient(135deg,hsl(${h} 70% 28%),hsl(${(h+50)%360} 80% 12%))`;
    return `<div class="card rv" tabindex="0" role="button" data-i="${k}"><div class="cov" style="${bg}">${w.img?"":mock(w,h)}</div><div class="t"><small>${w.cat}</small><h3>${w.title}</h3><p>${w.desc||""}</p><p class="mo">Ver detalhes →</p></div></div>`}).join("");
  $("#cnt").textContent=a.length;$("#ctr").textContent=String(a.length).padStart(2,"0");
  document.querySelectorAll(".card").forEach(c=>{c.onclick=()=>openP(+c.dataset.i);c.onkeydown=e=>{if(e.key==="Enter")openP(+c.dataset.i)}});
  tilt();observe();
}
function tilt(){if(!matchMedia("(hover:hover)").matches)return;document.querySelectorAll(".card").forEach(c=>{
  c.onpointermove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg) scale(1.02)`};
  c.onpointerleave=()=>c.style.transform=""})}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
function observe(){document.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el))}
$("#mq").innerHTML=Array(8).fill("<span>MV NEXUS</span><span>TECNOLOGIA</span><span>CÓDIGO</span><span>POSSIBILIDADES</span>").join("");
$("#wa").href="https://wa.me/"+PROFILE.whatsapp;$("#gh").href=PROFILE.github;$("#em").href="mailto:"+PROFILE.email;
$("#yr").textContent=new Date().getFullYear();
function initGL(){try{
if(matchMedia("(prefers-reduced-motion:reduce)").matches||!window.THREE)return false;
const mob=matchMedia("(pointer:coarse)").matches||innerWidth<760,N=mob?128:512,F=THREE.FloatType,cv=document.createElement("canvas");
$("#bgv").appendChild(cv);const R=new THREE.WebGLRenderer({canvas:cv,antialias:false});
if(!R.capabilities.isWebGL2||!R.extensions.has("EXT_color_buffer_float")){cv.remove();return false}
R.setPixelRatio(Math.min(devicePixelRatio,mob?1.5:2));R.setClearColor(0x05030d,1);
const cam=new THREE.PerspectiveCamera(30,1,.1,100),base=new THREE.Vector3(0,0,6),tg=base.clone(),grp=new THREE.Group(),sc=new THREE.Scene();cam.position.copy(base);sc.add(grp);
const c2=document.createElement("canvas");c2.width=640;c2.height=400;const x=c2.getContext("2d");
x.fillStyle="#fff";x.textAlign="center";x.textBaseline="middle";x.font="900 300px system-ui,Arial,sans-serif";x.fillText("MV",320,150);x.font="700 60px system-ui,Arial,sans-serif";x.fillText("N  E  X  U  S",320,340);
const d=x.getImageData(0,0,640,400).data,pp=[];for(let i=3;i<d.length;i+=4)if(d[i]>128){const k=(i-3)/4;pp.push(k%640,(k/640)|0)}
const n=N*N,tar=new Float32Array(n*4),ini=new Float32Array(n*4),rn=new Float32Array(n),ref=new Float32Array(n*2),r=Math.random;
for(let i=0;i<n;i++){let X,Y;
if(r()<.14){const a=r()*6.283,q=r()<.5?1:1.03,ex=Math.cos(a)*1.05*q,ey=Math.sin(a)*.3*q,ca=.98,sa=-.2;X=ex*ca-ey*sa;Y=ex*sa+ey*ca+.1}
else{const j=((r()*pp.length/2)|0)*2;X=(pp[j]-320)/320*.95;Y=-(pp[j+1]-200)/320*.95}
tar.set([X,Y,(r()-.5)*.12,1],i*4);ini.set([(r()-.5)*3,(r()-.5)*3,(r()-.5)*3,1],i*4);rn[i]=r();ref[i*2]=(i%N+.5)/N;ref[i*2+1]=((i/N|0)+.5)/N}
const tx=a=>{const t=new THREE.DataTexture(a,N,N,THREE.RGBAFormat,F);t.needsUpdate=true;return t},tTar=tx(tar),tIni=tx(ini);
const mk=s=>new THREE.WebGLRenderTarget(s,s,{type:F,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:false});
const P=[mk(N),mk(N)],FS=mob?128:256,Fl=[mk(FS),mk(FS)];let pi=0,fi=0,first=true;
const vs="varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,1.);}",oc=new THREE.OrthographicCamera(-1,1,1,-1,0,1),qs=new THREE.Scene(),quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2));qs.add(quad);
const simM=new THREE.ShaderMaterial({vertexShader:vs,uniforms:{tPos:{value:null},tTar:{value:tTar},tFlow:{value:null},time:{value:0},HZ:{value:1},uK:{value:1},uM:{value:new THREE.Matrix4()}},fragmentShader:`uniform sampler2D tPos,tTar,tFlow;uniform float time,HZ,uK;uniform mat4 uM;varying vec2 vUv;
void main(){vec3 p=texture2D(tPos,vUv).xyz,t=texture2D(tTar,vUv).xyz;
vec3 c=vec3(sin(p.y*3.+time*.5)+cos(p.z*2.7),sin(p.z*3.1+time*.4)+cos(p.x*2.3),sin(p.x*2.9+time*.6)+cos(p.y*2.1));
p+=c*.0006*HZ;p+=(t-p)*.025*HZ;
vec4 q=uM*vec4(p,1.);vec2 uv=q.xy/q.w*.5+.5;vec2 f=texture2D(tFlow,uv).xy;
p.xy+=f*.05*uK*HZ;gl_FragColor=vec4(p,1.);}`});
const splM=new THREE.ShaderMaterial({vertexShader:vs,uniforms:{tPrev:{value:null},uP:{value:new THREE.Vector2()},uV:{value:new THREE.Vector2()},uA:{value:1}},fragmentShader:`uniform sampler2D tPrev;uniform vec2 uP,uV;uniform float uA;varying vec2 vUv;
void main(){vec2 d=vUv-uP;d.x*=uA;float g=exp(-dot(d,d)/.012);vec2 v=texture2D(tPrev,vUv).xy*.95+uV*g;gl_FragColor=vec4(v,0.,1.);}`});
const pass=(m,t)=>{quad.material=m;R.setRenderTarget(t);R.render(qs,oc)};
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(new Float32Array(n*3),3));g.setAttribute("ref",new THREE.BufferAttribute(ref,2));g.setAttribute("rnd",new THREE.BufferAttribute(rn,1));
const ptM=new THREE.ShaderMaterial({blending:THREE.AdditiveBlending,transparent:true,depthWrite:false,uniforms:{tPos:{value:null},time:{value:0},uS:{value:(mob?3:1.7)*R.getPixelRatio()},uA:{value:mob?.6:.22}},
vertexShader:`uniform sampler2D tPos;uniform float uS;attribute vec2 ref;attribute float rnd;varying float vR;
void main(){vec3 p=texture2D(tPos,ref).xyz;vec4 mv=modelViewMatrix*vec4(p,1.);vR=rnd;gl_Position=projectionMatrix*mv;gl_PointSize=uS*(.6+rnd*.8)*(6./-mv.z);}`,
fragmentShader:`uniform float time,uA;varying float vR;
void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=smoothstep(.5,0.,d);vec3 c=mix(vec3(.5,.35,1.),vec3(.9,.82,1.),pow(vR,3.));float sp=.65+.35*sin(time*3.+vR*40.);gl_FragColor=vec4(c,a*sp*uA);}`});
const pts=new THREE.Points(g,ptM);pts.frustumCulled=false;grp.add(pts);
const rs=()=>{const w=innerWidth,h=innerHeight;R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();const s=Math.min(3.2*cam.aspect*.78/1.9,3.2*.46/1.19);grp.scale.setScalar(s);grp.position.y=.55;simM.uniforms.uK.value=1/s;splM.uniforms.uA.value=cam.aspect};
rs();addEventListener("resize",rs);
let mx=innerWidth/2,my=innerHeight/2,ox=mx,oy=my,last=performance.now(),time=0;
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY},{passive:true});addEventListener("touchmove",e=>{const t=e.touches[0];mx=t.clientX;my=t.clientY},{passive:true});
const cl=v=>Math.max(-1,Math.min(1,v));
(function L(){requestAnimationFrame(L);if(document.hidden||scrollY>innerHeight*1.6)return;
const now=performance.now(),dt=Math.min(.05,(now-last)/1000);last=now;time+=dt;
tg.set(-(mx/innerWidth*2-1)*.6,(my/innerHeight*2-1)*.6,6);cam.position.lerp(tg,.05);cam.lookAt(0,0,0);grp.rotation.y=Math.sin(time*.3)*.12;cam.updateMatrixWorld();grp.updateMatrixWorld();
const su=splM.uniforms;su.tPrev.value=Fl[fi].texture;su.uP.value.set(mx/innerWidth,1-my/innerHeight);su.uV.value.set(cl((mx-ox)*.02),cl(-(my-oy)*.02));ox=mx;oy=my;fi^=1;pass(splM,Fl[fi]);
const u=simM.uniforms;u.tPos.value=first?tIni:P[pi].texture;first=false;u.tFlow.value=Fl[fi].texture;u.time.value=time;u.HZ.value=dt*60;u.uM.value.multiplyMatrices(cam.projectionMatrix,cam.matrixWorldInverse).multiply(grp.matrixWorld);pi^=1;pass(simM,P[pi]);
ptM.uniforms.tPos.value=P[pi].texture;ptM.uniforms.time.value=time;R.setRenderTarget(null);R.render(sc,cam)})();
return true}catch(e){const c=document.querySelector("#bgv canvas");if(c)c.remove();return false}}
window.GLOK=initGL();
(function(){const bgv=$("#bgv");if(!window.GLOK)bgv.style.backgroundImage="url("+POSTER+")";let src=VIDEO;if(!src&&VIDEO_B64){try{const bin=atob(VIDEO_B64),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);src=URL.createObjectURL(new Blob([u],{type:"video/mp4"}))}catch(e){}}if(!src)return;window.VSRC=src;const v=document.createElement("video");v.src=src;v.muted=v.defaultMuted=true;v.playsInline=true;v.setAttribute("playsinline","");v.setAttribute("muted","");v.autoplay=true;if(!window.GLOK)bgv.appendChild(v);v.play().catch(()=>{})})();
/* mouse/touch reveal */
const hero=$("#hero");
hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",e.clientX-r.left+"px");hero.style.setProperty("--my",e.clientY-r.top+"px")});
/* scroll effects */
const mq=$("#mq"),bg=$("#bgv");
function sc(){const d=mq.parentNode.getBoundingClientRect();mq.style.transform=`translateX(${(d.top-innerHeight)*.5}px)`;bg.style.opacity=Math.max(.2,1-scrollY/(innerHeight*.85))}
addEventListener("scroll",sc,{passive:true});sc();
/* counter */
document.querySelectorAll("[data-n]").forEach(el=>{const n=+el.dataset.n;new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){let i=0;const t=setInterval(()=>{el.textContent=++i;if(i>=n)clearInterval(t)},40);o.disconnect()}}).observe(el)});
/* admin */
function adm(){$("#adm").classList.toggle("on",location.hash==="#admin")}
addEventListener("hashchange",adm);adm();
$("#ad").onclick=()=>{const t=$("#a1").value.trim();if(!t)return;extra.push({title:t,cat:$("#a2").value||"Projeto",desc:$("#a3").value,url:$("#a4").value,img:$("#a5").value});try{localStorage.setItem("mvx",JSON.stringify(extra))}catch(e){}["#a1","#a2","#a3","#a4","#a5"].forEach(s=>$(s).value="");render()};
$("#cp").onclick=()=>{const j=JSON.stringify(extra,null,1);navigator.clipboard&&navigator.clipboard.writeText(j).catch(()=>{});$("#cp").textContent="Copiado"};
$("#rs").onclick=()=>{extra=[];try{localStorage.removeItem("mvx")}catch(e){}render()};
$("#more").onclick=()=>{more=!more;render();if(!more)$("#trabalhos").scrollIntoView()};
render();observe();

const slug=t=>t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const md=$("#md");
function openP(i,keep){const w=all()[i];if(!w)return;const d=DET[w.title]||{},h=(i*47+260)%360;
 const L=(t,r)=>r&&r.length?`<h4>${t}</h4><ul>${r.map(x=>`<li>${x}</li>`).join("")}</ul>`:"";
 const bg=w.img?`background-image:url('${w.img}')`:`background-image:linear-gradient(135deg,hsl(${h} 70% 28%),hsl(${(h+50)%360} 80% 12%))`;
 const media=d.video&&window.VSRC?`<video src="${VSRC}" controls playsinline muted loop autoplay></video>`:`<div class="cov" style="${bg}">${w.img?"":mock(w,h)}</div>`;
 const gh=w.url&&/github\.com/.test(w.url),live=w.url&&!gh;
 $("#mb").innerHTML=`<div class="mm">${media}</div><div class="ey" style="margin-top:14px">${w.cat}${d.s?" · "+d.s:""}</div><h3>${w.title}</h3><p>${w.desc||""}</p>${d.p?`<h4>Problema que resolve</h4><p>${d.p}</p>`:""}${L("Funcionalidades",d.f)}${d.t?`<h4>Tecnologias</h4><div class="chips">${d.t.map(x=>`<span>${x}</span>`).join("")}</div>`:""}<div class="cta" style="justify-content:flex-start;margin-top:22px">${live?`<a class="btn" href="${w.url}" target="_blank" rel="noopener">Ver projeto ao vivo ↗</a>`:""}${gh?`<a class="btn" href="${w.url}" target="_blank" rel="noopener">Ver código no GitHub ↗</a>`:""}</div>`;
 if(!md.open)md.showModal();md.scrollTop=0;if(!keep)history.replaceState(null,"","#projeto-"+slug(w.title));}
md.addEventListener("close",()=>{if(location.hash.startsWith("#projeto-"))history.replaceState(null,"","#trabalhos")});
$("#mx").onclick=()=>md.close();md.addEventListener("click",e=>{if(e.target===md)md.close()});
function hp(){const m=location.hash.match(/^#projeto-(.+)$/);if(!m)return;const i=all().findIndex(w=>slug(w.title)===m[1]);if(i>=0)openP(i,1)}
addEventListener("hashchange",hp);hp();
