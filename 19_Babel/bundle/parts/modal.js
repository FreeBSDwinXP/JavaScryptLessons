"use strict";

function modal() {
  var more = document.querySelector('.more'),
      tabModal = document.querySelector('.info'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  function upModal() {
    overlay.style.display = 'block';
    overlay.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  }

  more.addEventListener('click', upModal);
  tabModal.addEventListener('click', function (window) {
    var target = window.target;

    if (target && target.classList.contains('description-btn')) {
      upModal();
    }
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    overlay.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
}

module.exports = modal;