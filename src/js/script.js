$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var TL = new TimelineMax({ paused: true });
    var galleryTimeLine = new TimelineMax({ paused: true });
    var libraryTimeLine = new TimelineMax({ paused: true });
  
    /*header vars*/
    var header = $('.header');
    var navigation = $('.header-navigation');
    var mainContainer = $('.main-container');
    var textInner = $(mainContainer).find('.text-wrapper .text-inner');
    var imgContainer = $(mainContainer).find('.img-container');

  
    /*gallery vars*/
  
    var gallery = $('.gallery');
    var galleryRevealer = $(gallery).find('.revealer');
    var galleryImageRevealer = $(gallery).find('.img-revealer');
  
  
    var animationSpeed = 0.75;
    var animationTimingIn = Expo.easeIn;
    var animationTimingOut = Expo.easeOut;
  
    TL.fromTo(
      header,
      animationSpeed,
      { y: 1500, opacity: 0, ease: animationTimingIn },
      { y: 0, opacity: 1, ease: animationTimingOut }
    )
      .fromTo(
        navigation,
        animationSpeed,
        { y: '-100%', opacity: 0, ease: animationTimingIn },
        { y: '0%', opacity: 1, ease: animationTimingOut },
        '-=0.25'
      )
      .staggerFromTo(
        textInner,
        animationSpeed,
        { y: '120%', ease: animationTimingIn },
        { y: '0%', ease: animationTimingOut },
        0.15
      )
      .fromTo(
        imgContainer,
        animationSpeed,
        { y: -50, opacity: 0, ease: animationTimingIn },
        { y: 0, opacity: 1, ease: animationTimingOut },
        '-=1'
      );
  
    TL.play();
    /************************************************* */
  
    galleryTimeLine
      .fromTo(
        gallery,
        animationSpeed,
        { x: '-100%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut }
      )
      .fromTo(
        galleryRevealer,
        animationSpeed * 0.75,
        { x: '0%', ease: animationTimingIn },
        { x: '100%', ease: animationTimingOut }
      )
      .fromTo(
        galleryImageRevealer,
        animationSpeed,
        { x: '-100%', ease: animationTimingIn },
        { x: '100%', ease: animationTimingOut },
        '-=.58'
      );
  
    /*gallery scene*/
    new ScrollMagic.Scene({
      triggerElement: '.gallery',
      triggerHook: 0.85
    })
      .setTween(galleryTimeLine)
      .setPin(true)
      .reverse(true)
      // .addIndicators()
      .addTo(controller);
  
    /******************************** */

    new ScrollMagic.Scene({
      triggerElement: '.library',
      triggerHook: 0.6
    })
      .setTween(libraryTimeLine)
      // .addIndicators()
      .setPin(true)
      .reverse(false)
      .addTo(controller);
  });
   
let tl = new TimelineMax();

tl.to('.rightWrapper', 0.7, {
    height:'100vh',
    ease: Circ.ease
})
.from('.title_', 1, {
    opacity:0,
    marginRight: '-30%',
    ease: Circ.easeOut
})
.from('.intro_p', 0.7, {
    opacity:0,
    marginBottom: '-30%',
    ease: Circ.easeOut
})
.from('.rightWrapper .box1', 1, {
    opacity:0,
    left: '30%',
    ease: Power3.ease
})
.from('.rightWrapper .box2', 1, {
    opacity:0,
    left: '-30%',
    ease: Power3.easeOut
})
.fromTo('#demo_btn', {x:0, y:0}, {x:0, y:70, duration:3});









