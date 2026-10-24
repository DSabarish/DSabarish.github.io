// Scroll reveal
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Active nav link
const sections=document.querySelectorAll('section[id], header[id]');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{ if(window.scrollY>=s.offsetTop-80) cur=s.id; });
  navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
});