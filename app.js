const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.star-card');
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  const value=button.dataset.filter;
  cards.forEach(card=>{card.hidden=value!=='all'&&!card.dataset.kind.split(' ').includes(value);});
}));

document.querySelectorAll('.photo-button img').forEach(image=>{
  image.addEventListener('error',()=>{
    image.hidden=true;
    const message=document.createElement('span');
    message.className='image-error';
    message.textContent='تعذر تحميل الصورة — تحقق من الاتصال أو افتح مصدرها';
    image.parentElement.appendChild(message);
  },{once:true});
});

const lightbox=document.getElementById('lightbox');
const lightboxImage=lightbox.querySelector('img');
const lightboxName=lightbox.querySelector('strong');
const lightboxCaption=lightbox.querySelector('.lightbox-caption > span');
const lightboxCredit=lightbox.querySelector('.lightbox-credit');
const lightboxLicense=lightbox.querySelector('.lightbox-license');
const lightboxSource=lightbox.querySelector('.lightbox-source');

document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>{
  lightboxImage.hidden=false;
  lightboxImage.src=button.dataset.full;
  lightboxImage.alt=button.dataset.name;
  lightboxName.textContent=button.dataset.name;
  lightboxCaption.textContent=button.dataset.caption;
  lightboxCredit.textContent=button.dataset.credit ? 'الإسناد: '+button.dataset.credit : '';
  lightboxLicense.textContent=button.dataset.license || '';
  if(button.dataset.source){lightboxSource.href=button.dataset.source;lightboxSource.hidden=false;}
  else{lightboxSource.hidden=true;}
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
}));
lightboxImage.addEventListener('error',()=>{
  lightboxImage.hidden=true;
  lightboxCaption.textContent='تعذر تحميل الصورة. يمكنك مراجعة صفحة المصدر إن كانت متاحة.';
});
function closeViewer(){
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src='';
  lightboxImage.hidden=false;
}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeViewer);
lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeViewer();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeViewer();});
