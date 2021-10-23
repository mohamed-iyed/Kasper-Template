[...document.querySelectorAll('a')].forEach(elem => {
    elem.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo(0, document.querySelector(this.hash).offsetTop);
    });
});
let sections = [...document.querySelectorAll('section')];

window.addEventListener('scroll', function() {
    sections.forEach(elem => {
        if(this.scrollY >= elem.offsetTop - document.querySelector('#header .cont').offsetHeight){

            [...document.querySelectorAll('#header a')].forEach(elem => {
                elem.classList.remove('active');
            });

            document.querySelector("a[href='#" + elem.id + "']").classList.add('active');
        }
    })
});
let stt = document.querySelector('footer .stt');

window.document.addEventListener('scroll', function() {
    if(window.scrollY >= 750){
        if(!stt.classList.contains('show')){
            stt.classList.add('show');
        }
    }else {
        if(stt.classList.contains('show')) stt.classList.remove('show');
    }
});

stt.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

