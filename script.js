const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
  for(let i=0;i<reveals.length;i++){
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const visiblePoint = 100;

    if(elementTop < windowHeight - visiblePoint){
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
