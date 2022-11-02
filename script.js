var i = 0;
var k = 0;
var txt = "Hello, ";

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
  else {
    if (k == 0) {
      document.getElementById("intro").innerHTML = txt + '<br>';
      k++;
    }
    i = 0;
    txt = 'I\'m Joseph';
  }
}

addEventListener('load', (event) => { });

onload = (event) => {
  typeWriter();
  setTimeout(typeWriter, 2000);
};




$("#particle-button").click(function(){
  
particlesJS.load('particle-div','particle-cfg.json');
});


//link handler to avoid nesting anchor elements
function openInNewTab(url) {
  window.open(url, '_blank').focus();
}


//click handler for toggle sidebar
var toggled = false;

var closeNav = document.getElementById("closeNav");
var openNav = document.getElementById("openNav");
var hideCollection = document.getElementsByClassName("hideme");
var sideBar = document.getElementById("navBar");
var smallBool = false;
closeNav.addEventListener('click', toggleHandler);
openNav.addEventListener('click', toggleHandler);



//start toggled true???
function toggleHandler() {
  for (var j=0; j < hideCollection.length; j++) {
    if (toggled) { //small to large: size <575
      grow(j);
    }
    else { //large to small
      shrink(j);
    }
  }
  toggled = !toggled;
}


//large to small
function shrink(i) {
  hideCollection[i].classList.remove("d-sm-inline");
  sideBar.classList.remove("col-md-3", "col-xl-2");

  closeNav.style.display = "none";
  openNav.style.display = "inline";

  if (smallBool) { //small window size
    hideCollection[i].classList.add("d-none");
  }
}


function grow(i) {
  hideCollection[i].classList.add("d-sm-inline");
  sideBar.classList.add("col-md-3", "col-xl-2");

  openNav.style.display = "none";
  closeNav.style.display = "inline";

  if (smallBool) { //small window size
    hideCollection[i].classList.remove("d-none");
  }
}





function sidebarQuery(size) {
  if (size.matches) { // If media query matches
    //<=576
    smallBool = size.matches;

    for (var i = 0; i < hideCollection.length; i++) {
      shrink(i);
    }
    toggled = true;
  }
}


var screenSize = window.matchMedia("(max-width: 575px)") //sm=576px
sidebarQuery(screenSize) // Call listener function at run time


window.onresize = function () { //when size changed
  sidebarQuery(screenSize);
}


//PARTICLES JSON BELOW
particlesJS('particle-div',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 40
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);