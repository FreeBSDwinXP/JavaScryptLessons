window.addEventListener("DOMContentLoaded", function() {
    'use strict';

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i< tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click", function(e) {
        let target = e.target;
        if (target && target.classList.contains("info-header-tab")){
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    // Timer
    let deadLine = "2019-02-13 21:36:34";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime)- Date.parse(new Date()),
            seconds = new Date(t).getSeconds(),
            minutes = new Date(t).getMinutes(),
            hours = Math.floor((t/(1000*60*60)));
        
        if (isNaN(seconds)){
            return {
                'total' : 0,
                'seconds' : 0,
                'minutes' : 0,
                'hours' : 0
                };
        }    
        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function zeroAdd(value) {
            if ((String(value).length) < 2) {
                return ("0" + value);
            } else {
                return value;
            }
        }
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = zeroAdd(t.hours);
            minutes.textContent = zeroAdd(t.minutes);
            seconds.textContent = zeroAdd(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }

    }
    setClock('timer', deadLine);
    
    //Modal
    let more = document.querySelector('.more'),
        tabMore = document.querySelector('.info'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

  
    function popup() {
        overlay.style.display = 'block';
        overlay.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    
    more.addEventListener('click', popup);

    tabMore.addEventListener('click', function (e) {
        let target = e.target;
        if (target && target.classList.contains('description-btn')) {
            popup(); 
        }
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        overlay.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        formBottom = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    request.send(data);
                });    
            }  // End postData
            
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
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
    sendForm(formBottom);
            
});