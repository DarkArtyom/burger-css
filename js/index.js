(() => {
  const headerBurger = document.querySelector(".header-burger");
  const headerMenu = document.querySelector(".header-menu");

  headerBurger.addEventListener("click", onHeaderBurgerClick);

  function onHeaderBurgerClick(event) {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
  }
})();
