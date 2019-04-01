window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';
    let tabs = require('./parts/tabs.js'),
        calc = require('./parts/calc.js'),
        form = require('./parts/form.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        promise = require('./parts/promise.js'),
        timer = require('./parts/timer.js');

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
    promise();

});