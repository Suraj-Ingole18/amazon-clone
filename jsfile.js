const select = document.querySelector(".search-select");

function resizeSelect() {
    select.style.width = (select.options[select.selectedIndex].text.length + 4) + "ch";
}

resizeSelect(); // Initial size

select.addEventListener("change", resizeSelect);


//language Model
function changeLanguage(lang) {

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;

        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

}

const radios = document.querySelectorAll('input[name="lang"]');

radios.forEach(radio => {
    radio.addEventListener("change", function () {
        changeLanguage(this.value);
        popup.classList.remove("show");
    });
});

// Set the initial language when the page loads
changeLanguage(language.value);