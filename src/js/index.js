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
})