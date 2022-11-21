'use strict';
console.log('header.js');

// paspaudus dropdown pirma karta
// 1. atsiranda menu
// 1.1 togle ul klase i visible
// 2. burgeris pavirsta i (x)
// 2.1 pasalinu "fa-bars" klase
// 2.2 pridedu "fa-times-circle" klase

// paspaudus dropdown antra karta
// 1. menu pasislepia
// 1.1 togle ul klase i invisible arba hidden
// 2. (x) pavirsta i burgeri
// 2.1 pridedu "fa-bars" klase
// 2.1 pasalinu "fa-times-circle" klase

// bonus animacija atsirandant ir dingstant paciam menu

addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');

  const headerNavDropDownEl = document.getElementById('headerNavDropDown');
  console.log('headerNavDropDownEl ===', headerNavDropDownEl);
});
