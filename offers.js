// Спочатку, коли весь DOM (структура сторінки) завантажується, 
//виконується функція, передана до document.addEventListener('DOMContentLoaded', function()
document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо поле введення для пошуку
    var searchInput = document.querySelector('.search-bar input[type="text"]');
    
    // Отримуємо всі картки
    var cards = document.querySelectorAll('.card');
    //console.log(typeof(cards));
    // Отримуємо список вибору фільтра
    var filterSelect = document.querySelector('.filter-select select');

    // Функція для фільтрації карток за вибраним варіантом
    function filterCards() {
        var selectedOption = filterSelect.value.toLowerCase();
        //для відображення того що зміни ще не були внесені
        var resultsFound = false;

        // Показуємо або ховаємо картки відповідно до вибраного варіанту
        cards.forEach(function(card) {
            var cardTitle = card.querySelector('h3').textContent.trim().toLowerCase();
            //.trim(): Цей метод видаляє пробіли з початку і кінця рядка. 
            //.toLowerCase(): Цей метод переводить всі символи у рядку до нижнього регістру. 
            if (selectedOption === '' || cardTitle === selectedOption) {
                card.style.display = 'block';
                resultsFound = true;
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Функція для пошуку тексту в картках
    function searchCards() {
        var searchText = searchInput.value.trim().toLowerCase();
        var resultsFound = false;

        // Показуємо або ховаємо картки відповідно до введеного тексту
        cards.forEach(function(card) {
            var cardTitle = card.querySelector('h3').textContent.trim().toLowerCase();
            if (searchText === '' || cardTitle.includes(searchText)) {
                card.style.display = 'block';
                resultsFound = true;
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Додаємо обробник подій для кнопки пошуку
    var searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', function() {
        searchCards();
    });

    // Додаємо обробник подій для списку вибору фільтра
    //change  вбудована подія
    filterSelect.addEventListener('change', function() {
        filterCards();
    });

    // Викликаємо функцію фільтрації на початку
    filterCards();
});