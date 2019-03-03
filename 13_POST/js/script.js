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
    let deadline = '2019-03-02';

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
        loading: "Load",
        success: "Thanks!",
        failure: "Ooops. Something wrong"
    };

    let form = document.querySelector('.main-form'),
        formContact = document.querySelector('#form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        
        statusMessage.classList.add('status');
    
    function formSend (event) {
        event.preventDefault();
        this.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //request.setRequestHeader ('Content-Type', 'appication/x-www-form-urlencoded');
        request.setRequestHeader ('Content-Type', 'appication/json; charset=utf-8');

        let formData = new FormData(this);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);
        
        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

            for (let i=0; i < input.length; i++) {
                input[i].value = '';
            }
    }

    form.addEventListener('submit', formSend);
    formContact.addEventListener('submit', formSend);
});