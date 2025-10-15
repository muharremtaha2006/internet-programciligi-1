// script.js

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const images = document.querySelectorAll('.card-img-top');

  // Resimlere hover efekti ekle
  images.forEach(image => {
    image.style.transition = 'transform 0.3s ease';
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });

  // Modal oluştur
  const modal = document.createElement('div');
  Object.assign(modal.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    zIndex: '9999',
    cursor: 'pointer',
    visibility: 'hidden',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  });

  const modalContent = document.createElement('div');
  Object.assign(modalContent.style, {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflowY: 'auto',
    textAlign: 'center',
    cursor: 'default',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });

  const modalImg = document.createElement('img');
  Object.assign(modalImg.style, {
    maxWidth: '100%',
    maxHeight: '60vh',
    objectFit: 'contain',
    borderRadius: '10px',
  });

  const modalTitle = document.createElement('h2');
  modalTitle.style.marginTop = '15px';

  const modalDesc = document.createElement('p');
  modalDesc.style.marginTop = '10px';

  modalContent.appendChild(modalImg);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalDesc);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Modal açma fonksiyonu
  function openModal(imgSrc, title, desc) {
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;

    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
  }

  cards.forEach(card => {
    const img = card.querySelector('.card-img-top');
    const title = card.querySelector('.card-title').innerText;
    const desc = card.querySelector('.card-text').innerText;
    const btn = card.querySelector('.btn-outline-primary');

    img.style.cursor = 'pointer';
    btn.style.cursor = 'pointer';

    img.addEventListener('click', () => {
      openModal(img.src, title, desc);
    });

    btn.addEventListener('click', () => {
      openModal(img.src, title, desc);
    });
  });

  // Modal tıklanınca kapat
  modal.addEventListener('click', () => {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.visibility = 'hidden';
      document.body.style.overflow = '';
    }, 300);
  });

  // Modal içeriğine tıklanırsa kapanmasın
  modalContent.addEventListener('click', e => {
    e.stopPropagation();
  });
});
