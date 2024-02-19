let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
let mobileMenu = document.querySelector('.mobile-menu');
let flag = false

//* Logic For Show And Hide Mobile Menu
mobileMenuBtn.addEventListener('click',()=>{
    if(!flag){
        mobileMenu.style.display = 'block'
        flag =true;
    }else{
        mobileMenu.style.display = 'none'
        flag =false;
    }
});



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:2.2,
        loop:true,
        center:true,
        autoWidth:true,
        nav:true,
        // slideBy:1,
        autoplay:true,
        mergeFit:true,
    });
  });

