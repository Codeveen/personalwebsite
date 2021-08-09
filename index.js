window.addEventListener('scroll', reveal)

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i=0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
    reveals[i].classList.add('active');
  }
  else{
    reveals[i].classList.remove('active');
  }
}
}

window.addEventListener('scroll', revealLeft)

function revealLeft(){
  var revealsLeft = document.querySelectorAll(".reveal-left");

  for(var i=0; i < revealsLeft.length; i++){

    var windowheight = window.innerHeight;
    var revealleft = revealsLeft[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealleft < windowheight - revealpoint){
    revealsLeft[i].classList.add('active-left');
  }
  else{
    revealsLeft[i].classList.remove('active-left');
  }
}
}

window.addEventListener('scroll', revealRight)

function revealRight(){
  var revealsRight = document.querySelectorAll(".reveal-right");

  for(var i=0; i < revealsRight.length; i++){

    var windowheight = window.innerHeight;
    var revealright = revealsRight[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealright < windowheight - revealpoint){
    revealsRight[i].classList.add('active-right');
  }
  else{
    revealsRight[i].classList.remove('active-right');
  }
}
}

window.addEventListener('scroll', revealUp)

function revealUp(){
  var revealsUp = document.querySelectorAll(".reveal-Up");

  for(var i=0; i < revealsUp.length; i++){

    var windowheight = window.innerHeight;
    var revealUp = revealsUp[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealUp < windowheight - revealpoint){
    revealsUp[i].classList.add('active-Up');
  }
  else{
    revealsUp[i].classList.remove('active-Up');
  }
}
}
