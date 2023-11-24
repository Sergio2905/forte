export function checkbox() {
    const checkbox = document.querySelectorAll('.checkbox');

    if (checkbox.length > 0) {
        for (let index = 0; index < checkbox.length; index++) {
            const check = checkbox[index];
            const input = check.querySelector('input');
            if (input.checked) {
                check.classList.add('active');
            }

            check.addEventListener('click', function () {
                if (check.classList.contains('active')) {
                    check.classList.remove('active');
                    input.checked = false;
                } else {
                    check.classList.toggle('active');
                    input.checked = true;
                }
            })
        }
    }
}

export function select() {

    const selectBoxes = document.querySelectorAll('.select-box');

    if (selectBoxes.length > 0) {
        for (let index = 0; index < selectBoxes.length; index++) {
            const selectBox = selectBoxes[index];
            const selected = selectBox.querySelector('.selected');
            const optionsContainer = selectBox.querySelector('.options-container');
            const optionsList = selectBox.querySelectorAll('.option');

            selected.addEventListener('click', () => {
                if (!optionsContainer.classList.contains('_active')) {
                    selectBoxes.forEach((el) => {
                        el.querySelector('.options-container').classList.remove('_active')
                    });
                }
                optionsContainer.classList.toggle('_active');
                if (optionsContainer.classList.contains('_active')) {
                    selected.classList.add('_active');
                } else {
                    selected.classList.remove('_active');
                }
            });

            optionsList.forEach(o => {
                o.addEventListener('click', () => {
                    selected.querySelector('span').innerHTML = o.querySelector('label').innerHTML;
                    o.querySelector('input').checked = true;
                    optionsContainer.classList.remove('_active');
                    selected.classList.remove('_active');
                });
            });

        }
    }
}

export function radio() {
    const radios = document.querySelectorAll('.radio-options');

    if (radios.length > 0) {
        for (let index = 0; index < radios.length; index++) {
            const radio = radios[index];
            const radioBtns = radio.querySelectorAll('.radio-options__item');
            const radioItems = radio.querySelectorAll('.radio-options__item input');

            if (radioBtns.length > 0) {
                for (let index = 0; index < radioBtns.length; index++) {
                    const radio = radioBtns[index];
                    const input = radio.querySelector('input');
                    if (input.checked) {
                        radio.classList.add('_active');
                    }
                    radio.addEventListener('click', function () {
                        if (!radio.classList.contains('_active')) {
                            radioBtns.forEach((radio) => {
                                radio.classList.remove('_active');
                            });
                            radioItems.forEach((item) => {
                                item.checked = false;
                            });
                            radio.classList.add('_active');
                            input.checked = true;
                        }
                    })
                }
            }
        }
    }
}