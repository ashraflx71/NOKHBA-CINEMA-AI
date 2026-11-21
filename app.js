(() => {
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.star-card');

  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    const value = button.dataset.filter;
    cards.forEach(card => {
      const kinds = (card.dataset.kind || '').split(/\s+/);
      card.hidden = value !== 'all' && !kinds.includes(value);
    });
  }));

  document.querySelectorAll('.photo-button img').forEach(image => {
    image.addEventListener('error', () => {
      image.hidden = true;
      const message = document.createElement('span');
      message.className = 'image-error';
      message.textContent = 'تعذر تحميل الصورة — تحقق من الاتصال أو افتح صفحة المصدر';
      image.parentElement.appendChild(message);
    }, { once: true });
  });

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImage = lightbox.querySelector('img');
  const lightboxName = lightbox.querySelector('strong');
  const lightboxDescription = lightbox.querySelector('.lightbox-description');
  const lightboxCredit = lightbox.querySelector('.lightbox-credit');
  const lightboxLicense = lightbox.querySelector('.lightbox-license');
  const lightboxSource = lightbox.querySelector('.lightbox-source');
  let lastFocusedElement = null;

  document.querySelectorAll('.photo-button').forEach(button => button.addEventListener('click', () => {
    lastFocusedElement = button;
    lightboxImage.hidden = false;
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.dataset.name || 'صورة من معرض نخبة سينما';
    lightboxName.textContent = button.dataset.name || '';
    lightboxDescription.textContent = button.dataset.caption || '';
    lightboxCredit.textContent = button.dataset.credit ? 'الإسناد: ' + button.dataset.credit : '';
    lightboxLicense.textContent = button.dataset.license || '';
    if (button.dataset.source) {
      lightboxSource.href = button.dataset.source;
      lightboxSource.hidden = false;
    } else {
      lightboxSource.hidden = true;
      lightboxSource.removeAttribute('href');
    }
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.querySelector('.lightbox-close').focus();
  }));

  lightboxImage.addEventListener('error', () => {
    lightboxImage.hidden = true;
    lightboxDescription.textContent = 'تعذر تحميل الصورة بالحجم الكامل. يمكنك مراجعة صفحة المصدر إن كانت متاحة.';
  });

  function closeViewer() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.hidden = false;
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  lightbox.querySelector('.lightbox-close').addEventListener('click', closeViewer);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeViewer();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) closeViewer();
  });
})();