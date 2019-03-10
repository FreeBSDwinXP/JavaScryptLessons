window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // TIMER
    let deadline = '2019-05-26';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = new Date(t).getSeconds(),
            minutes = new Date(t).getMinutes(),
            hours = Math.floor(t/(1000*60*60));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
                if (t.hours.toString().length == 1) {
                    hours.textContent = ('0' + t.hours);
                } else {
                    hours.textContent = t.hours;
                }

                if (t.minutes.toString().length == 1) {
                    minutes.textContent = ('0' + t.minutes);
                } else {
                    minutes.textContent = t.minutes;
                }

                if (t.seconds.toString().length == 1) {
                    seconds.textContent = ('0' + t.seconds);
                } else {
                    seconds.textContent = t.seconds;
                }

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
        }
    }

    setClock('timer', deadline);

    // Modal Window

    let more = document.querySelector('.more'),
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
        let target = window.target;
        if (target && target.classList.contains('description-btn')) {
            upModal(); 
        }
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        overlay.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Form

    let message = {
        loading: "Идет загрузка",
        success: "Спасибо! Отправлено",
        failure: "Ooops. Something wrong"
    };

    let form = document.querySelector('.main-form'),
        formContact = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
    statusMessage.classList.add('status');
    
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData(data) {
                return new Promise (function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');
                    request.addEventListener ('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status === 200) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        });
                    request.send(data);
                });
            } // END postData

            function clearInput() {
                for (let i=0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)
        });
    }
   
    sendForm(form);
    sendForm(formContact);

    // Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides (slideIndex);
    
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
            /*for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }*/
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
        
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

});