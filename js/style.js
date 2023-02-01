// В данном случае используется интерфейс библиотеки typed.js для анимации набора текста

let typed = new Typed('#typed', { 
    stringsElement: '#typed-strings', 
    typeSpeed: 50, 
    startDelay: 500, 
    backSpeed: 50,
    loop: true 
});

$(".element").typed({
    typeSpeed: 0, 
    backSpeed: 0, 
    startDelay: 0, 
    backDelay: 500, 
    loop: false, 
    loopCount: false, 
    showCursor: true, 
    attr: null, 
    callback: function(){ } 
});