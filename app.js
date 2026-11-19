document.querySelectorAll('.service').forEach(button=>button.addEventListener('click',()=>{
 if(button.dataset.service==='video'){window.location.href='video.html';return;}
 const names={image:'إنشاء الصور',film:'إنتاج الأفلام الطويلة'};
 const notice=document.getElementById('notice');
 notice.textContent=names[button.dataset.service]+' — هذه الخدمة لم تُفعّل بعد. سنعلن عن تشغيلها بعد ربط محرك التوليد واختباره وحساب تكلفته.';
 notice.scrollIntoView({behavior:'smooth',block:'center'});
}));