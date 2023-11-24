export function isWebp() {
    function testWebp(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}

export function menuBurger() {
    const iconMenu = document.querySelector('.header__menu-icon');
    const menuBody = document.querySelector('.menu__body');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('lock');
            iconMenu.classList.toggle('active');
            menuBody.classList.toggle('active');
        })
    }
}

export function moveElement() {
    const elementsToMove = document.querySelectorAll('[data-move]');

    if (elementsToMove.length > 0) {
        for (let index = 0; index < elementsToMove.length; index++) {
            const element = elementsToMove[index];
            const elementName = element.dataset.move.split(', ')[0];
            const screenWidth = element.dataset.move.split(', ')[1];
            const firstPosition = document.querySelector(`[data-desk*=${elementName}]`);
            const lastPosition = document.querySelector(`[data-mob*=${elementName}]`);

            function move() {
                let position;
                if (window.innerWidth <= screenWidth) {
                    if (lastPosition.dataset.mob.split(', ')[1]) {
                        position = lastPosition.dataset.mob.split(', ')[1];
                    } else {
                        position = 'append';
                    }
                    moveObj(element, lastPosition, position);
                } else {
                    if (firstPosition.dataset.desk.split(', ')[1]) {
                        position = firstPosition.dataset.desk.split(', ')[1];
                    } else {
                        position = 'append';
                    }
                    moveObj(element, firstPosition, position);
                }
            }

            function moveObj($elem, $target, $position = 'append') {
                if ($position == 'after') {
                    $target.after($elem);
                } else if ($position == 'before') {
                    $target.before($elem);
                } else if ($position == 'append') {
                    $target.append($elem);
                } else if ($position == 'prepend') {
                    $target.prepend($elem);
                }
            }

            move();

            window.addEventListener('resize', function () {
                move();
            });
        }
    }
}

export function lazyLoading() {
    const lazyBlocks = document.querySelectorAll('.lazy');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                showImages(target);
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: "1000px"
    });

    lazyBlocks.forEach(lazyBlock => {
        imageObserver.observe(lazyBlock);
    });

    function showImages(target) {
        const images = target.querySelectorAll('img[data-src], source[data-srcset]');

        if (images.length) {
            images.forEach((image) => {
                if (image.dataset.src) {
                    image.setAttribute('src', image.dataset.src);
                    image.removeAttribute('data-src');
                }
                if (image.dataset.srcset) {
                    image.setAttribute('srcset', image.dataset.srcset);
                    image.removeAttribute('data-srcset');
                }
            });
        }
    }
}