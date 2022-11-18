'use strict';
console.log('main.js');

const headerEl = document.getElementById('header');

async function loadHeader() {
  try {
    const resp = await fetch('components/header.html');
    const html = await resp.text();
    headerEl.innerHTML = html;
  } catch (error) {
    console.warn(error);
  }
}
loadHeader();
