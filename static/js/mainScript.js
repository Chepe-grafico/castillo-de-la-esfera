////////////////////////////// Bling.js ///////////////////////////////////////////////////////////////

window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
}

NodeList.prototype.__proto__ = Array.prototype;

NodeList.prototype.on = function (name, fn) {
    this.forEach(function (elem, i) {
        elem.on(name, fn);
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

import { todo } from './other.js';

window.on('load', function () {
    todo.otro();
    let dogo = new todo();
    dogo.test();

    let loader = $('#hidder');
    console.log(window.innerHeight);

    loader.className += ' animated fadeOut';

    loader.on('animationend', function () {
        
        loader.parentNode.removeChild(loader);

        let gate = $('.gateImg');
        let father = $('.gate');
        gate.className += ' animated slideOutUp';

        $('.pilarIzquierdo').className += ' animated slideOutLeft';

        let ultimoGate = $('.pilarDerecho')
        ultimoGate.className += ' animated slideOutRight';

        ultimoGate.on('animationend', function () {
            ultimoGate.parentNode.parentNode.removeChild(father);
        });
    });

    let topSlider = new Siema({
        selector: '.siema',
        duration: 200,
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
    });

    //setInterval(javier => { topSlider.next(1); },2000);
});