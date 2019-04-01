function form() {
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
}

module.exports = form;