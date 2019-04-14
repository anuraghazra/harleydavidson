/**
 * @name HarleyDavidson
 * @author <https://anuraghazra.github.io>
 * @email <hazru.anurag@gmail.com> 
 */

function id(id) {
  return document.getElementById(id);
}


window.onload = function () {
  document.querySelector('.overlay').style.display = 'none';
  TweenMax.to(window, scrollTime, {
    scrollTo: { y: 0, autoKill: true },
    duration: 0
  });
  // nav
  TweenMax.staggerFrom('.nav > *', 0.8, { y: -80, ease: Strong.easeOut }, 0.3)
  TweenMax.staggerFrom(".nav__list li", 0.9, { y: -50, opacity: 0, delay: 0.5, ease: Strong.easeOut }, 0.3);


  // bike
  TweenLite.from('.bike', 1, { css: { scale: .05, opacity: 0 }, ease: Power4.easeInOut, delay: 1 })

  // hell text
  TweenLite.from('.hell-text', 1, { y: 100, opacity: 0, ease: Power4.easeInOut, delay: 1 })

  // subtle-text
  TweenMax.staggerFrom('.subtle-text > span', 3, { top: 100, opacity: 0, ease: Power4.easeInOut, delay: 1 }, 0.2)

  // svg
  TweenLite.from('#svg-path', 0.5, { x: -600, opacity: 0, ease: Power3.easeInOut })

  // bg
  TweenLite.from('.bg--center', 1, { scale: 2, opacity: 0, ease: Power2.easeInOut })
  TweenLite.from('.bg--right', 3, { x: 200, opacity: 0, ease: Power2.easeInOut })
  TweenLite.from('.bg--left', 3, { x: -200, opacity: 0, ease: Power2.easeInOut })


  // header text
  TweenMax.staggerFrom('.main__text span', 1, { left: 120, opacity: 0, delay: 1.0, ease: Power1.easeInOut }, 0.1);

  // dots
  TweenMax.staggerFrom('.dots *', 0.4, { x: -10, scale: 0.0, opacity: 0, delay: 1.0, ease: Back.easeInOut }, 0.1);

  // torque
  TweenMax.staggerFrom('.torque-text *', 0.4, { x: 20, opacity: 0, delay: 1.0, ease: Back.easeInOut }, 0.1);

  // footer
  TweenMax.staggerFrom('.footer *', 0.4, { y: 20, opacity: 0, delay: 1.0, ease: Back.easeInOut }, 0.1);


  // EVENTs
  let DOMSearch = id('search');
  TweenLite.set(DOMSearch, { width: 150 })
  DOMSearch.onfocus = function () {
    TweenLite.to(DOMSearch, 0.5, { width: 200, ease: Power3.easeInOut })
  }
  DOMSearch.onblur = function () {
    TweenLite.to(DOMSearch, 0.5, { width: 150, ease: Power3.easeInOut })
  }


  TimelineMax.defaultEase = Back.easeInOut;

  var bikeslide = TweenMax.to('.bike', 0.5, { x: -200 });
  var subttext = TweenMax.to('.subtle-text', 0.5, { x: -200 });
  var maintext = TweenMax.to('.main__text', 0.5, { x: -1100 });
  var info = TweenMax.staggerTo(".info *", 0.5, { x: 80, opacity: 1 }, 0.1);
  var tl = new TimelineMax();
  tl.add(bikeslide)
  tl.add(subttext)
  tl.add(maintext)
  tl.add(info)
  tl.addPause(3)


  var fadeBike = TweenMax.fromTo('.fat-bob', 0.3, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, ease: Power2.easeInOut })
  var fadeBikeText = TweenMax.to('.fatbob-text', 0.5, { x: 80, opacity: 1 });
  var tl2 = new TimelineMax();
  tl2.add(fadeBike)
  tl2.add(fadeBikeText)

  var fadeOutBike = TweenMax.to('.fat-bob', 0.3, { opacity: 0 })
  var fadeOutBikeText = TweenMax.to('.fatbob-text', 0.3, { x: -800, opacity: 0 })
  var fadeBike2 = TweenMax.fromTo('.scout', 0.3, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, ease: Power2.easeInOut })
  var fadeBikeText2 = TweenMax.to('.scout-text', 0.5, { x: 80, opacity: 1 });
  var tl3 = new TimelineMax();
  tl3.add(fadeOutBike)
  tl3.add(fadeOutBikeText)
  tl3.add(fadeBike2)
  tl3.add(fadeBikeText2)

  var fadeOutBike1 = TweenMax.to('.scout', 0.3, { opacity: 0 })
  var fadeOutBikeText1 = TweenMax.to('.scout-text', 0.3, { x: -800, opacity: 0 })
  var fadeBike3 = TweenMax.fromTo('.streetbob', 0.3, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, ease: Power2.easeInOut })
  var fadeBikeText3 = TweenMax.to('.streetbob-text', 0.5, { x: 80, opacity: 1 });
  var tl4 = new TimelineMax();
  tl4.add(fadeOutBike1)
  tl4.add(fadeOutBikeText1)
  tl4.add(fadeBike3)
  tl4.add(fadeBikeText3)

  // var fadeOutBike2 = TweenMax.to('.streetbob', 0.3, { opacity: 0 })
  // var fadeOutBikeText2 = TweenMax.to('.streetbob-text', 0.3, { opacity: 0 })
  // var fadeAbout = TweenMax.from('.about h1', 0.3, { opacity: 0, scale: 0.1 })
  // var tl5 = new TimelineMax();
  // tl5.add(fadeOutBike2)
  // tl5.add(fadeOutBikeText2)
  // tl5.add(fadeAbout)

  var controller = new ScrollMagic.Controller();

  // part 1
  const content_scene1 = new ScrollMagic.Scene({
    triggerElement: ".wrapper-1",
    triggerHook: 0,
    offset: 0,
    duration: "150%"
  })
  content_scene1
    .setPin('.wrapper-1')
    .setTween(tl)
    .addTo(controller);


  // part 2
  const content_scene2 = new ScrollMagic.Scene({
    triggerElement: ".wrapper-2",
    triggerHook: 0,
  })
  content_scene2
    .setPin('.wrapper-2')
    .setTween(tl2)
    .addTo(controller)


  // part 3
  const content_scene3 = new ScrollMagic.Scene({
    triggerElement: ".wrapper-3",
    triggerHook: 0,
  })
  content_scene3
    .setPin('.wrapper-3')
    .setTween(tl3)
    .addTo(controller)

  // part 4
  const content_scene4 = new ScrollMagic.Scene({
    triggerElement: ".wrapper-4",
    triggerHook: 0,
  })
  content_scene4
    .setPin('.wrapper-4')
    .setTween(tl4)
    .addTo(controller)

  // part 5
  // const content_scene5 = new ScrollMagic.Scene({
  //   triggerElement: ".wrapper-5",
  //   triggerHook: 0,
  // })
  // content_scene5.setPin('.wrapper-5')
  //   .setTween(tl5)
  //   .addTo(controller)







  var scrollTime = 0.5;
  var scrollDistance = 100;
  window.addEventListener('mousewheel', function (e) {
    // e.preventDefault();
    var delta = e.wheelDelta / 30;
    var scrollTop = window.scrollY;
    var finalScroll = scrollTop - parseInt(delta * scrollDistance);
    TweenMax.to(window, scrollTime, {
      scrollTo: { y: finalScroll, autoKill: true },
      ease: Power1.easeInOut
    });
  })


  // let scroll = 0;
  // window.addEventListener('mousewheel', function (e) {
  //   if (e.deltaY > 0) {
  //     scroll += 1;
  //   } else {
  //     scroll -= 1;
  //   }
  //   scroll *= 0.5
  //   var st = scroll;
  //   var ht = txt.getBoundingClientRect().height
  //   windowScroll = st / ht;
  //   tl.progress(windowScroll);
  // })
}