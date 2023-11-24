const searchBtn = document.querySelector('.search-btn');
const searchClose = document.querySelector('.search__close');
const searchForm = document.querySelector('.search');

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        searchForm.classList.add('active');
        document.body.classList.add('_lock');
        menu.classList.remove('_active');
        burger.classList.remove('_active');
    })
}

if (searchClose) {
    searchClose.addEventListener("click", function () {
        searchForm.classList.remove('active');
        document.body.classList.remove('_lock');
    })
}