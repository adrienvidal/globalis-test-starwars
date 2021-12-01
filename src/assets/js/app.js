class App {
  constructor() {
    this.nav = document.querySelector('.nav');
    this.navMenu = document.querySelector('.nav__menu');
    this.scrolled = 0;
  }

  // init app
  init () {
    this.initNav()

    window.addEventListener(
      'scroll',
      this.parallaxAnimation);
  }

  initNav() {    
    this.navMenu.addEventListener('click', ()=>{
      this.nav.classList.toggle('nav__active');
    })
  }
  
  parallaxAnimation() {
    const parallaxElems = document.querySelectorAll(".parallax");
    this.scrolled = window.pageYOffset;
    parallaxElems.forEach((elem)=>{
      const thisElem = elem;
      const elemPosition = elem.offsetTop;
      const coords = ((this.scrolled - elemPosition) * 0.4) + 'px'
      thisElem.style.transform = 'translateY(' + coords + ')';
    })
  }
}

const app = new App();
document.addEventListener('DOMContentLoaded', () => {
  app.init()
})
