const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.y').forEach(e=>e.textContent=new Date().getFullYear());
/* matrix background */
(()=>{const c=document.getElementById('bg');if(!c)return;const x=c.getContext('2d');let w,h,cols,drops;
const G='01JPKX<>{}[]#$%&*+=/\\';
function size(){w=c.width=innerWidth;h=c.height=innerHeight;cols=Math.floor(w/18);drops=Array.from({length:cols},()=>Math.random()*h/18)}
size();addEventListener('resize',size);
function draw(){x.fillStyle='rgba(15,21,30,.12)';x.fillRect(0,0,w,h);x.font='14px monospace';
drops.forEach((d,i)=>{x.fillStyle=Math.random()>.97?'#ffd27a':'rgba(255,176,32,.55)';x.fillText(G[Math.random()*G.length|0],i*18,d*18);
if(d*18>h&&Math.random()>.975)drops[i]=0;drops[i]+=.5})}
if(RM){draw()}else setInterval(draw,50)})();
/* mouse glow */
addEventListener('pointermove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')});
/* typewriter terminal */
(()=>{const el=document.getElementById('type');if(!el)return;
const L=['<span class="p">&gt;</span> jpk-console-x --init','Loading modules...','<span class="ok">[ok]</span> core','<span class="ok">[ok]</span> interface','<span class="p">&gt;</span> check installer','<span class="ok">InstaIler.exe  ready to download</span>'];
if(RM){el.innerHTML=L.join('\n');return}
let li=0,out='';(function next(){if(li>=L.length){el.innerHTML=out+'<span class="cursor"></span>';return setTimeout(()=>{li=0;out='';next()},4000)}
const t=L[li].replace(/<[^>]+>/g,''),full=L[li];let i=0;
const step=()=>{i++;const partial=i>=t.length?full:t.slice(0,i);el.innerHTML=out+(i>=t.length?full:partial)+'<span class="cursor"></span>';
if(i<t.length)setTimeout(step,28);else{out+=full+'\n';li++;setTimeout(next,260)}};step()})()})();
/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach((e,i)=>{e.style.transitionDelay=(i%3)*.12+'s';io.observe(e)});
/* 3D tilt */
if(!RM)document.querySelectorAll('.card').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
c.style.transform=`perspective(700px) rotateY(${px*10}deg) rotateX(${-py*10}deg) translateY(-4px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
/* download button: animated prep, then real download */
const btn=document.getElementById('dl-btn');
if(btn){const bar=document.getElementById('prog'),st=document.getElementById('status'),toast=document.getElementById('toast');let busy=false;
btn.addEventListener('click',e=>{if(busy||RM)return;e.preventDefault();busy=true;const url=btn.href,old=btn.textContent;
const msgs=['Connecting...','Verifying file...','Preparing download...'];let p=0;
const t=setInterval(()=>{p+=2+Math.random()*3;if(p>100)p=100;bar.style.width=p+'%';btn.textContent=Math.floor(p)+'%';st.textContent=msgs[Math.min(2,Math.floor(p/34))];
if(p>=100){clearInterval(t);st.textContent='Ready. Download starting...';const a=document.createElement('a');a.href=url;a.rel='noopener';document.body.appendChild(a);a.click();a.remove();
toast.textContent='Download started: InstaIler.exe';toast.classList.add('show');setTimeout(()=>{toast.classList.remove('show');btn.textContent=old;bar.style.width='0';st.textContent='';busy=false},3500)}},45)})}
