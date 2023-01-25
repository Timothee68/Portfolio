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

const togg1 = document.getElementById("togg1");
const togg2 = document.getElementById("togg2");
const togg3 = document.getElementById("togg3");
const togg4 = document.getElementById("togg4");

const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d3 = document.getElementById("d3");
const d4 = document.getElementById("d4");

const toggSoft1 =document.getElementById("toggSoft1");
const toggSoft2 =document.getElementById("toggSoft2");

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");

if (window.matchMedia("(max-width: 576px)").matches) {

}else{
  addEventListener("resize", (event) => {
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "none";
    d4.style.display = "none";
    s1.style.display = "none";
    s2.style.display = "none";
  });
  
}

togg1.addEventListener("click", () => {

  if(getComputedStyle(d1).display != "none"){

    d1.style.display = "none";

  } else { 

    if (window.matchMedia("(max-width: 920px)").matches) {
       
        d1.style.display = "contents";

      } else {
        d1.style.display = "flex";
        d2.style.display = "none";
      
      }
  }
})

togg2.addEventListener("click", () => {

    if(getComputedStyle(d2).display != "none"){

      d2.style.display = "none";

    } else {

        if (window.matchMedia("(max-width: 920px)").matches) {

          d2.style.display = "contents";

        } else {
            d2.style.display = "flex";
            d1.style.display = "none";
         
        }
    }
  })

  togg3.addEventListener("click", () => {

    if(getComputedStyle(d3).display != "none"){

      d3.style.display = "none";
    } else {
        if (window.matchMedia("(max-width: 920px)").matches) {

          d3.style.display = "contents";

        } else {
            d3.style.display = "flex";
            d4.style.display = "none";
        }
    }
  })

  togg4.addEventListener("click", () => {
    if(getComputedStyle(d4).display != "none"){
      d4.style.display = "none";
    } else {
        if (window.matchMedia("(max-width: 920px)").matches) {

          d4.style.display = "contents";
        } else {
            d4.style.display = "flex";
            d3.style.display = "none";
        }
    }
  })

  toggSoft1.addEventListener("click", () => {
    if(getComputedStyle(s1).display != "none"){
      s1.style.display = "none";
    } else {
        if (window.matchMedia("(max-width: 920px)").matches) {
          
        s1.style.display = "contents";

        } else {

        s1.style.display = "flex";
        s2.style.display = "none";
        }
    }
  })

  toggSoft2.addEventListener("click", () => {
    if(getComputedStyle(s2).display != "none"){

      s2.style.display = "none";

    } else {

        if (window.matchMedia("(max-width: 920px)").matches) {

          s2.style.display = "contents";

        } else {

          s2.style.display = "flex";
          s1.style.display = "none";
        }
    }
  })



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
