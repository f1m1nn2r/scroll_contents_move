
window.addEventListener('scroll', function(){
    // 섹션01 - 1. 배경 이미지 움직임 - transform scale 일 때
    var section01 = document.querySelector('.section01-inner');
    var section01_test = window.pageYOffset / document.querySelector('.section01 h1').offsetTop + 1;
    section01.style.transform = `scale(${section01_test})`;

    // 섹션02 - 2. 배경 이미지 움직임 - backgroundSize 일 때
    var section02 = document.querySelector('.section02-inner');
    var section02_test = window.pageYOffset/20;
    section02.style.backgroundSize = 100 + section02_test + '%';

    // 섹션03 - 3. 이미지 확대
    var section03 = document.querySelector('.section03');
    var section03_inner = document.querySelector('.section03-inner');
    if(window.scrollY >= section03_inner.getBoundingClientRect().top){
        section03_inner.classList.add('section03_test');
    }else{
        section03_inner.classList.remove('section03_test');
    }
    var section03_img = document.querySelectorAll('.section03_test .img-box img');  
    for(var i=0; i<section03_img.length; i++){
        section03_img[i].style.transform = `scale(${window.pageYOffset / section03.offsetTop})`
    }

});





