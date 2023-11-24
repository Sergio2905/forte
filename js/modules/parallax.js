window.onload = function () {
    const parallax = document.querySelector('.parallax');

    if (parallax) {

        const parallaxObj = document.querySelector('.parallax__object');
        const value = 10;
        const speed = 0.05;

        let positionX = 0;
        let positionY = 0;
        let coordXproc = 0;
        let coordYproc = 0;

        function setMouseParallaxStyle() {

            const distX = coordXproc - positionX;
            const distY = coordYproc - positionY;
            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);
            let tranlateX = -positionX / value;
            let tranlateY = -positionY / value;

            parallaxObj.style.cssText = `transform: translate(${tranlateX}%,${tranlateY}%);`;

            requestAnimationFrame(setMouseParallaxStyle);

        }

        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function (e) {

            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;
            const coordX = e.layerX - parallaxWidth / 2
            const coordY = e.layerY - parallaxHeight / 2
            coordXproc = coordX / parallaxWidth * 100;
            coordYproc = coordY / parallaxHeight * 100;

        });
    }
}