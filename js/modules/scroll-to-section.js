const menuLinks = document.querySelectorAll('.menu__link[data-target], .footer__link[data-target]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", goToTarget);
    });

    function goToTarget(e) {
        const menuLink = e.target;
        if (menuLink.dataset.target && document.querySelector(menuLink.dataset.target)) {
            const targetBlock = document.querySelector(menuLink.dataset.target);
            const targetBlockValue = targetBlock.getBoundingClientRect().top + scrollY - document.querySelector(".header").offsetHeight;

            if (burger.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burger.classList.remove('_active');
                menu.classList.remove('_active');

                if (sections.length > 0) {
                    for (let index = 0; index < sections.length; index++) {
                        const section = sections[index];
                        section.classList.remove('blur')
                    }
                }
            }

            window.scrollTo({
                top: targetBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}