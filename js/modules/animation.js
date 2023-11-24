export function scrollAnimation() {
    const animItems = document.querySelectorAll('.animate');

    const animObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('active');
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.3
    });

    animItems.forEach(animItem => {
        animObserver.observe(animItem);
    });
}

//export function scrollAnimation() {
//    const animItems = document.querySelectorAll('._animated');

//    if (animItems.length > 0) {
//        window.addEventListener("scroll", animOnScroll);
//        function animOnScroll(params) {
//            for (let index = 0; index < animItems.length; index++) {
//                const animItem = animItems[index];
//                const animItemHeight = animItem.offsetHeight;
//                const animItemOffset = offset(animItem).top;
//                const animStart = 2;

//                let animItemPoint = window.innerHeight - animItemHeight / animStart;
//                if (animItemHeight > window.innerHeight) {
//                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                }

//                if (scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
//                    animItem.classList.add('_active');
//                    animItem.classList.add('_stop');
//                } else {
//                    if (!animItem.classList.contains('_stop')) {
//                        animItem.classList.remove('_active');
//                    }
//                }
//            }
//        }
//        function offset(el) {
//            const rect = el.getBoundingClientRect();
//            const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
//            const scrollTop = window.scrollY || document.documentElement.scrollTop;
//            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//        }

//        setTimeout(() => {
//            animOnScroll();
//        }, 300)
//    }
//}

export function typeText(time) {

    const typeTextItems = document.querySelectorAll('._type-text');

    if (typeTextItems.length > 0) {
        for (let index = 0; index < typeTextItems.length; index++) {

            const typeTextItem = typeTextItems[index];
            const typeText = typeTextItem.innerHTML
            let count = 0;
            let out = '';

            function typing() {
                let timeout = setTimeout(() => {
                    out += typeText[count];
                    typeTextItem.innerHTML = out;
                    count++;

                    if (count >= typeText.length) {
                        clearTimeout(timeout);
                        return true;
                    }
                    typing();
                }, time);
            }
            typing();
        }
    }
}

export function counter() {

    // counter initialisation 
    function counterInit(countersItems) {
        let counters = countersItems ? countersItems : document.querySelectorAll('[data-counter]');
        if (counters) {
            counters.forEach(counter => {
                animateCounter(counter);
            });
        }
    }

    // animation function
    function animateCounter(counter) {
        let startTimeStamp = null;
        const duration = parseInt(counter.dataset.counter) ? parseInt(counter.dataset.counter) : 1000;
        const startValue = parseInt(counter.innerHTML);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimeStamp) {
                startTimeStamp = timestamp;
            }
            const progress = Math.min((timestamp - startTimeStamp) / duration, 1);
            counter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }
    // Start on window load
    //counterInit();

    let options = {
        threshold: 0.3
    };
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const counterItems = targetElement.querySelectorAll('[data-counter]');
                if (counterItems.length) {
                    counterInit(counterItems)
                }
                // Turn off watchening after working out
                observer.unobserve(targetElement);
            }
        });
    }, options);

    let sections = document.querySelectorAll('.counters');
    if (sections.length) {
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

export function headerChange(scroll) {
    const header = document.querySelector('.header');

    if (scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}