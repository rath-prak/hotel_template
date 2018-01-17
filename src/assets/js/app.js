import $ from 'jquery';
import { TweenMax, Power2, TimelineLite } from "gsap";
import whatInput from 'what-input';


window.$ = $;


$(document).ready(function(){

  $('button').on('click', function() {
    $(this).toggleClass('is-active');
  });

  let $menuToggle = $('.menu-toggle');
  let $overlayMenuWrapper = $('.overlay-menu-wrapper');

  const tl = new TimelineMax({ delay:3, paused:true, reversed:true });

  tl.to($overlayMenuWrapper, 1, { y: '0', ease: Power2.easeOut });

  $menuToggle.on('click', () => {
    setTimeout(function(){
        tl.reversed() ? tl.restart() : tl.reverse();
      }, 200);
  })



});

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();
