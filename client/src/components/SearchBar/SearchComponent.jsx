import React, { useEffect } from 'react';
import $ from 'jquery';
import { TweenMax, TimelineMax, Power2, Power3, Circ } from 'gsap';

const SearchComponent = () => {
  useEffect(() => {
    var searchContainer = $('.search'),
      input = $('.search #searchInput'),
      label = $('.search label'),
      border = $('.search .border'),
      /* svg = $('.search svg'), */
      lens = $('.search .lens'),
      handle = $('.search .handle'),
      arrowBody = $('.search .arrowBody'),
      arrowPoint = $('.search .arrowPoint'),
      tl;

    TweenMax.set(lens, { transformOrigin: "center center", attr: { r: 7, cx: 22, cy: 22 } });

    tl = new TimelineMax({ paused: true, repeat: 0, repeatDelay: 2 });
    tl
      .set([arrowBody, arrowPoint], { display: "none" })
      .to(handle, .1, { attr: { x2: 39, y2: 39 }, ease: Power2.easeInOut })
      .to(handle, .175, { drawSVG: "0 0", ease: Power2.easeInOut })
      .to(lens, .2, { attr: { r: 2 }, strokeWidth: 3, ease: Power2.easeOut })
      .to(lens, .2, { attr: { r: 23, cx: 25, cy: 25 }, strokeWidth: 4, ease: Power2.easeInOut })

      .set(border, { display: "block" })
      .set(lens, { display: "none" })
      .to([searchContainer, border], .25, { width: 100, ease: Circ.easeIn })
      .set(arrowBody, { display: "block", drawSVG: "0 0" })
      .set(arrowPoint, { display: "block", drawSVG: "50% 50%" })
      .to([searchContainer, border], .35, { width: 200, ease: Power2.easeOut })
      .to(arrowBody, .3, { drawSVG: "0 100%", ease: Power2.easeInOut }, "-=.3")
      .to(arrowPoint, .5, { drawSVG: "0 100%", ease: Power3.easeOut })
      .to(label, .5, { autoAlpha: 1 }, "-=.3");

    searchContainer.on("mouseover", function (e) {
      tl.timeScale(1);
      tl.play();
    });
    searchContainer.on("mouseout", function (e) {
      tl.timeScale(1.5);
      tl.reverse();
    });
    input.on("focus", function (e) {
      TweenMax.set(label, { display: "none" });
    });
    input.on("blur", function (e) {
      TweenMax.set(label, { display: "block" });
    });
  }, []);

  return (
    <div className="search">
      <input type="text" id="searchInput" value="" />
      <label htmlFor="searchInput">Search</label>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <circle fill="none" cx="25" cy="25" r="25" />
        <circle className="lens" fill="none" stroke="#FFF" strokeWidth="4" strokeMiterlimit="10" cx="25" cy="25" r="23" />
        <line className="handle" fill="none" stroke="#231F20" strokeWidth="4" strokeMiterlimit="10" x1="27.962" y1="27.722" x2="35" y2="34.76" />
        <line className="arrowBody" fill="none" stroke="#4F5C4F" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="25" y1="25" x2="7" y2="25" />
        <polyline className="arrowPoint" fill="none" stroke="#4F5C4F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="19.861,19.873 25,25.012 19.831,30.181" />
      </svg>
      <div className="border"></div>
    </div>
  );
}

export default SearchComponent;
