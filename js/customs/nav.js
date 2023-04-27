var togger = document.querySelector(".btn-togger");

var search = document.querySelector(".btn-search");
var showMenu = document.querySelector(".nav-mobile__menu");
var showSearch = document.querySelector(".search-form-container");
togger.onclick = function () {
  showMenu.classList.toggle("show");
};
search.onclick = function () {
  showSearch.classList.toggle("show");
};
