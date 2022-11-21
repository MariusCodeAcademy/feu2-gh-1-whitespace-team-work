'use strict';
console.log('main.js');

// kreipiames i html div elementus
const headerEl = document.getElementById('header');
const projectManagment = document.getElementById('project-management');
const workTogether = document.getElementById('work-togethert');
const heroEl = document.getElementById('hero');
const ourClientsEl = document.getElementById('our-clients');
const ourSponsorsEl = document.getElementById('our-sponsors');
const yourDataEl = document.getElementById('your-data');
const footerGridEl = document.getElementById('footer-grid');
const footerBottomEl = document.getElementById('footer-bottom');
const footerTopEl = document.getElementById('footer-top');
const appSectionEl = document.getElementById('app-section');

// daugkartine funkcija
async function loadComponent(fromWhere, toWhere) {
  try {
    const resp = await fetch(fromWhere);
    const html = await resp.text();
    toWhere.innerHTML = html;
  } catch (error) {
    console.warn(error);
  }
}

// Header
loadComponent('components/header.html', headerEl);

// hero
loadComponent('components/hero.html', heroEl);

// ProjectManagment
loadComponent('components/projectManagment.html', projectManagment);

// Work together
loadComponent('components/workTogether.html', workTogether);

// Work together
loadComponent('components/our-clients.html', ourClientsEl);

// Our Sponsors
loadComponent('components/our_sponsors.html', ourSponsorsEl);

// Your data
loadComponent('components/your-data.html', yourDataEl);

// Footer Top
loadComponent('components/footerTop.html', footerTopEl);

// Footer Grid
loadComponent('components/footerGrid.html', footerGridEl);

// Footer Bottom
loadComponent('components/footerBottom.html', footerBottomEl);

// App section
loadComponent('components/appSection.html', appSectionEl);
