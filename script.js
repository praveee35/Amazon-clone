//slider js

let imgs = document.querySelectorAll('.header-slider ul img');
let prev_btn = document.querySelector('.control_prev');
let next_btn = document.querySelector('.control_next');

let n = 0;

function  changeSlide(){
    for (let  i = 0;  i < imgs.length;  i++) {
      imgs[i].style.display = 'none';
       
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click',(e)=> {
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(e)=> {
    if(n <  imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})
/// script for scrol under the boxes

const scrollContainer = document.querySelectorAll('.products');  
    for(const item of scrollContainer){
        item.addEventListener('wheel' , (evt)=>{
            evt.preventDefault();
            item.scrollLeft += evt.deltaX;
        })
    }

// signup js

document.querySelector("signIn-Container").addEventListener("submit",function(event){
    event.preventDefault();

    let username = document.querySelector("input-labl").ariaValueMax;
    let email = document.querySelector("mobile").value;
    let password = document.querySelector("password").value;3
   


    let message = document.querySelector("meesage");
    message.innerHTML = "Hey Dude Welcome To amazon"
})