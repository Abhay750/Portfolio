var typed = new Typed('.text_for', {
    strings: ["Service"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
var typeds = new Typed('.text_for_more', {
    strings: ["Service"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let view2 =document.querySelector('.service_info2') 
let view1 =document.querySelector('.service_info1')
view2.style.display = 'none';

function showView(num){
    if (num == 1){
        view1.style.display = 'block';
        view2.style.display = 'none';
    }else if(num === 2) {
        view2.style.display = 'block';
        view1.style.display = 'none';
    }

}