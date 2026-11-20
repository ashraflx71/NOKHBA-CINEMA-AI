const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.star-card');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const value=button.dataset.filter;
  cards.forEach(card=>{card.hidden=value!=='all'&&!card.dataset.kind.split(' ').includes(value);});
}));
const lightbox=document.getElementById('lightbox');
const lightboxImage=lightbox.querySelector('img');
const lightboxName=lightbox.querySelector('strong');
const lightboxCaption=lightbox.querySelector('.lightbox-caption span');
document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>{
  lightboxImage.src=button.dataset.full;
  lightboxImage.alt=button.dataset.name;
  lightboxName.textContent=button.dataset.name;
  lightboxCaption.textContent=button.dataset.caption;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
}));
function closeViewer(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src='';}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeViewer);
lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeViewer();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeViewer();});
