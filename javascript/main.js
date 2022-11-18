"use strict";
console.log("main.js");

// kreipiames i html div elementus
const headerEl = document.getElementById("header");
const projectManagment = document.getElementById("project-management");
const workTogether = document.getElementById("work-togethert");

// daugkartine funkcija
async function loadHeader(fromWhere, toWhere) {
  try {
    const resp = await fetch(fromWhere);
    const html = await resp.text();
    toWhere.innerHTML = html;
  } catch (error) {
    console.warn(error);
  }
}

// Header
loadHeader("components/header.html", headerEl);

// ProjectManagment
loadHeader("components/projectManagment.html", projectManagment);

// Work together
loadHeader("components/workTogether.html", workTogether);
