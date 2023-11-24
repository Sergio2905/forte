export function count() {
    const cartItems = document.querySelectorAll(".item-cart");

    if (cartItems.length > 0) {
        for (let index = 0; index < cartItems.length; index++) {
            const cartItem = cartItems[index];

            const plusBtn = cartItem.querySelector(".plus");
            const minusBtn = cartItem.querySelector(".minus");

            plusBtn.addEventListener('click', () => {
                const value = cartItem.querySelector("input");
                const newValue = Number(value.value) + 1;
                value.value = newValue;
            });

            minusBtn.addEventListener('click', () => {
                const value = cartItem.querySelector("input");
                const newValue = Number(value.value) - 1;
                if (newValue != 0) {
                    value.value = newValue;
                }
            });
        }
    }
}