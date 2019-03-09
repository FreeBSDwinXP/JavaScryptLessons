let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function getData() {
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            request.addEventListener('readystatechange', function() {
                if (request.status == 200) {
                    let data = JSON.parse(request.response);
                    resolve(data);
                } else {
                    reject();
                    
                }
            });
        });
    }

    getData()
        .then((data) => inputUsd.value = inputRub.value / data.usd)
        .catch(() => inputUsd.value = "Что-то пошло не так!");
});