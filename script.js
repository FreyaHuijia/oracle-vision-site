const cover=document.querySelector('.trailer-cover');
cover.addEventListener('click',()=>{cover.outerHTML='<iframe src="https://www.youtube-nocookie.com/embed/VQlZD7dZ1kw?autoplay=1&rel=0" title="Oracle Vision official trailer" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>'});
document.querySelector('.watch').addEventListener('click',()=>cover.click(),{once:true});
const track=document.querySelector('.gallery-track');let slide=0;const total=track.children.length;
function show(n){slide=(n+total)%total;track.style.transform=`translateX(-${slide*100}%)`}
document.querySelector('.prev').addEventListener('click',()=>show(slide-1));document.querySelector('.next').addEventListener('click',()=>show(slide+1));setInterval(()=>show(slide+1),5000);

const modules=document.querySelectorAll('.trailer,.about,.play,.gallery,.team,footer');
document.documentElement.classList.add('reveal-ready');
modules.forEach(module=>module.classList.add('reveal'));
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});
  modules.forEach(module=>observer.observe(module));
}else modules.forEach(module=>module.classList.add('is-visible'));

const nav=document.querySelector('.site-nav');const menuToggle=document.querySelector('.menu-toggle');
function closeMenu(){nav.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false')}
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('menu-open');menuToggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
let lastScrollY=scrollY;
addEventListener('scroll',()=>{
  const currentScrollY=scrollY;
  nav.classList.toggle('nav-hidden',currentScrollY>lastScrollY&&currentScrollY>76&&!nav.classList.contains('menu-open'));
  lastScrollY=currentScrollY;
},{passive:true});
