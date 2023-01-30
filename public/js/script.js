//  card 3D
const card = document.querySelectorAll(".card");

card.forEach( el => {
    el.addEventListener("mousemove", e => {

        let rect = el.getBoundingClientRect();

        let x = e.clientX - rect.x ;
        let y = e.clientY - rect.y ;

        let midCardWidth = rect.width / 2;
        let midCardHeight = rect.height / 2;

        let angleY = -(x - midCardWidth) / 8; 
        let angleX = (y -midCardHeight) / 8;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        
        
    });

    el.addEventListener("mouseleave", () => {
        el.children[0].style.transform = "rotateX(0) rotateY(0)";
    })
})


//  togg hardskills sofskills

  const toggs = [
    document.getElementById("togg1"),
    document.getElementById("togg2"),
    document.getElementById("togg3"),
    document.getElementById("togg4"),
    document.getElementById("toggSoft1"),
    document.getElementById("toggSoft2")
  ];
  
  const ds = [
    document.getElementById("d1"),
    document.getElementById("d2"),
    document.getElementById("d3"),
    document.getElementById("d4"),
    document.getElementById("s1"),
    document.getElementById("s2")
        ];
  
  if (window.matchMedia("(max-width: 576px)").matches) {
  
  }else{
    addEventListener("resize", (event) => {
      ds.forEach(d => d.style.display = "none");
    });
  }
  
  const toggleDisplay = (togg, d) => {
      if(getComputedStyle(d).display != "none"){
          d.style.display = "none";
      } else {
          if (window.matchMedia("(max-width: 920px)").matches) {
              d.style.display = "contents";
          } else {
              ds.forEach((item, index) => {
                  if (index !== ds.indexOf(d)) {
                      item.style.display = "none";
                  } else {
                      d.style.display = "flex";
                  }
              });
          }
      }
  }
  
  toggs.forEach((togg, index) => {
    if (window.matchMedia("(max-width: 919.5px)").matches) {
      togg.addEventListener("click", () => toggleDisplay(togg, ds[index]));
    }else{
      togg.addEventListener("mouseenter", () => toggleDisplay(togg, ds[index]));
    }
  });
  

// modal function

let btn = document.querySelectorAll(".modal-button");
let modals = document.querySelectorAll('.modal');
let spans = document.getElementsByClassName("close");


for (let i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

for (let i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


// menu burger

document.querySelector( '.burger' ).addEventListener( 'click', function ( e ) {
  let x = document.getElementById("myLinks");
  e.preventDefault;
  this.className = this.className === 'burger' ? 'burger on' : 'burger';

  if ( this.className === 'burger on'){
    x.style.display = "block" ;
    if (x.style.display === "none") {
      console.log(this.className);
      x.style.display = "block";
    }
    } else {
      x.style.display = "none";
    }
});

window.addEventListener('resize', () =>{
  if (window.matchMedia("(min-width: 920px)").matches) {
    let x = document.getElementById("myLinks");
    x.style.display = "flex";
  }else if(window.matchMedia("(max-width: 920px)").matches){

    let x = document.getElementById("myLinks");
    let e = document.querySelector(".burger");

    if ( e.className === 'burger on'){
      x.style.display = "block" ;
    }
    if ( e.className === 'burger'){
      x.style.display = "none" ;
    }  
  
  }
});


const switchTheme = document.querySelector('#theme');
let toggleTheme = 0;

switchTheme.addEventListener('click', () =>{
  let titleOne = document.querySelector('.titleOne');
  if(toggleTheme === 0) {
    titleOne.style.setProperty('animation', ' flashing 2s infinite alternate')
    document.documentElement.style.setProperty('--background',        'rgb(0, 189, 149)');
    document.documentElement.style.setProperty('--backgroundBody',    'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--backgroundHeader',  'rgb(0, 189, 149)');
    document.documentElement.style.setProperty('--backgroundSection', 'rgba(31,39,47,0.4)');
    document.documentElement.style.setProperty('--backgroundTitle',   'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--title',             'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--ecriture',          'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--span',              'rgb(0, 189, 149)');
    document.documentElement.style.setProperty('--hexagone',          'rgb(0, 189, 149)');
    document.documentElement.style.setProperty('--colorHR1',          'rgb(0, 189, 149)');
    document.documentElement.style.setProperty('--colorHR2',          'rgb(255,255,255)');

    toggleTheme++;
    
  }else{
    titleOne.style.setProperty('animation', 'none')
    document.documentElement.style.setProperty('--background',        'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--backgroundBody',    'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--backgroundHeader',  'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--backgroundSection', 'rgb(245,245,245)');
    document.documentElement.style.setProperty('--backgroundTitle',   'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--title',             'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--ecriture',          'rgb(0, 0, 0)');
    document.documentElement.style.setProperty('--span',              'rgb(0, 189, 149)');
    document.documentElement.style.setProperty('--hexagone',          '#E6E6FA');
    document.documentElement.style.setProperty('--colorHR1',          'rgb(0, 189, 149)');
    document.documentElement.style.setProperty('--colorHR2',          'rgb(0, 189, 149)');


    toggleTheme--;

  }

});


console.log(titleOne.style);