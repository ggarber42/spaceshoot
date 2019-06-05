// TweenMax.to("#ship1", 2, {x:600});

// var tl = new TimelineMax({
//     paused:true
//   });
    // tl.fromTo(typewriter, 8, {
    //   width: "0",
    // }, {
    //   width: "20.18em", /* same as CSS .line-1 width */
    //   ease:  SteppedEase.config(37)
    // }, 0);
    // // text cursor animation
    // tl.fromTo(typewriter, 0.5, {
    //   "border-right-color": "rgba(255,255,255,0.75)"
    // }, {
    //   "border-right-color": "rgba(255,255,255,0)",
    //   repeat: -1,
    //   ease:  SteppedEase.config(37)
    // }, 0);t p
//   // letter animation

//   tl.play();

const overlay = document.querySelector('.overlay');
const nave = document.querySelector('#nave');
const typewriter = document.querySelector('p');
const texts = document.querySelectorAll('.text');
const playText = document.querySelectorAll('h3');

var tl = new TimelineLite();
tl.to(nave,3,{top: 300, scale:3.85});
tl.to(nave,0.5,{display: 'none'});
tl.to(overlay, 0.1, {display:"none"});
tl.staggerFrom(texts, 0.5, {opacity: 0, y:30},1);
tl.staggerTo(texts, 0.5, {display: 'none', y:0});
tl.from(playText, 2,{opacity: 0, y:-40})


