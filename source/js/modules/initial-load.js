export default () => {
  window.addEventListener(`load`, () => {
    document.body.classList.add(`page-loaded`);

    const headerNav = document.querySelector(`.page-header__nav`);
    const socialToggler = document.querySelector(`.social-block__toggler`);
    const activeMenuLink = document.querySelector(`.js-menu-link.active`);
    socialToggler.classList.add(`social-block__toggler--hidden`);
    activeMenuLink.classList.add(`active--hidden`);

    const removeHiddenClass = () => {
      setTimeout(() => {
        activeMenuLink.classList.remove(`active--hidden`);
      }, 250);

      setTimeout(() => {
        socialToggler.classList.remove(`social-block__toggler--hidden`);
        socialToggler.classList.add(`social-block__toggler--animated`);
      }, 350);

      headerNav.removeEventListener(`transitionend`, removeHiddenClass);
    };

    headerNav.addEventListener(`transitionend`, removeHiddenClass);
  });
};
