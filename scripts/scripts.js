/* JS FOR NAV BAR */ 
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mainlinks');
    const navLinks = document.querySelectorAll('.mainlinks li');

    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('mainlinks-active'); 

        //Animate Links 
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        //Burger animation 
        burger.classList.toggle('toggle');

    });

    
}

navSlide();

let images = [
    "images/brooks_painting_house2.jpg",
    "images/brooks_painting_house3.jpg",
    "images/brooks_painting_house4.jpg"
  ];
  let slide = document.getElementById("slider");
  const slider = () => {
    let i = 0;
    setInterval(function () {
      i = i < images.length - 1 ? ++i : 0;
      slide.src = images[i];
    }, 2000);
  };
  slide.addEventListener("load", slider());