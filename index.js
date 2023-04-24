
var sectionInner_fir = document.querySelector('.section-inner01');
var sectionInner_sec = document.querySelector('.section-inner02');
var pp = document.querySelector('.pp');

window.addEventListener('scroll', function(){
    var scrollY = window.scrollY;
    var pos = sectionInner_fir.getBoundingClientRect();
    var cx = scrollY * -0.5 - pos.top;
    console.log(cx);

    sectionInner_fir.style.transform = 'translate3d(' + cx * 0.05 + '%, 0, 0)'
    pp.style.transform = 'translate3d(' + cx * 0.5 + 'px, 0, 0)';

    if(scrollY >= sectionInner_sec.offsetTop - window.pageYOffset){
        sectionInner_sec.style.transform = 'translate3d(' + -cx * 0.05 + '%, 0, 0)';
    }else{
        sectionInner_sec.style.transform = 'translate3d(0, 0, 0)';
    }
});
