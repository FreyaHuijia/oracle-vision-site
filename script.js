const cover=document.querySelector('.trailer-cover');
cover.addEventListener('click',()=>{cover.outerHTML='<iframe src="https://www.youtube-nocookie.com/embed/VQlZD7dZ1kw?autoplay=1&rel=0" title="Oracle Vision official trailer" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>'});
const track=document.querySelector('.gallery-track');let slide=0;const total=track.children.length;
function show(n){slide=(n+total)%total;track.style.transform=`translateX(-${slide*100}%)`}
document.querySelector('.prev').addEventListener('click',()=>show(slide-1));document.querySelector('.next').addEventListener('click',()=>show(slide+1));setInterval(()=>show(slide+1),5000);
