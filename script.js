// карусель

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-btn');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.toggle('active', i === index);
    });
}

function changeSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Автоматичне перемикання слайдів
setInterval(autoSlide, 5000); // Перемикання кожні 3 секунди





// Функція для відкриття/закриття бургер-меню
function toggleMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const burgerIcon = document.getElementById("burger-icon");
    const closeIcon = document.getElementById("close-icon");

    // Перемикаємо класи для показу меню
    if (burgerMenu.classList.contains("show-menu")) {
        burgerMenu.classList.remove("show-menu"); // Ховаємо меню
        burgerIcon.style.display = "block";      // Показуємо бургер
        closeIcon.style.display = "none";        // Ховаємо хрестик
    } else {
        burgerMenu.classList.add("show-menu");   // Показуємо меню
        burgerIcon.style.display = "none";       // Ховаємо бургер
        closeIcon.style.display = "block";       // Показуємо хрестик
    }
}

// Ініціалізація випадаючого підменю
document.addEventListener("DOMContentLoaded", () => {
    // Логіка для підменю "Каталог"
    const menuItemsWithSubmenu = document.querySelectorAll(".menu-item-with-submenu");

    menuItemsWithSubmenu.forEach(item => {
        const arrow = item.querySelector(".submenu-arrow");

        // Логіка для відкриття/закриття підменю
        arrow.addEventListener("click", (e) => {
            e.stopPropagation(); // Зупиняємо спливання події
            e.preventDefault();  // Запобігаємо переходу по посиланню
            item.classList.toggle("open"); // Перемикаємо клас
        });
    });

    // Закриття меню при кліці на "X" (хрестик)
    const closeIcon = document.getElementById("close-icon");
    closeIcon.addEventListener("click", () => {
        const burgerMenu = document.getElementById("burger-menu");
        burgerMenu.classList.remove("show-menu"); // Ховаємо меню
        document.getElementById("burger-icon").style.display = "block"; // Показуємо бургер
        document.getElementById("close-icon").style.display = "none";   // Ховаємо хрестик
    });

    // Закриття меню при кліці на будь-яке посилання
    const menuLinks = document.querySelectorAll('#burger-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const burgerMenu = document.getElementById("burger-menu");
            burgerMenu.classList.remove("show-menu"); // Ховаємо меню
            document.getElementById("burger-icon").style.display = "block"; // Показуємо бургер
            document.getElementById("close-icon").style.display = "none";   // Ховаємо хрестик
        });
    });
});







// імпути спосіб доставки
function toggleDeliveryFields(method) {
    // Сховати або показати поля для Нової Пошти
    document.getElementById('nova-poshta-fields').style.display = method === 'nova-poshta' ? 'block' : 'none';
    
    // Сховати або показати поля для Укрпошти
    document.getElementById('ukrposhta-fields').style.display = method === 'ukrposhta' ? 'block' : 'none';
}


document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
    radio.addEventListener("change", function () {
        // Ховаємо всі деталі оплати
        document.getElementById("account-details").style.display = "none";

        // Показуємо лише вибраний спосіб
        if (this.value === "account") {
            document.getElementById("account-details").style.display = "block";
        }
    });
});





document.querySelectorAll('.product-details-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.product-card');
        const productDetails = productCard.querySelector('.product-details');
        
        // Якщо деталі видимі, приховуємо, інакше показуємо
        if (productDetails.style.display === 'block') {
            productDetails.style.display = 'none';
        } else {
            productDetails.style.display = 'block';
        }
    });
});



// загрузка лого
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.getElementById("intro").style.opacity = "0";
      document.getElementById("intro").style.visibility = "hidden";
    }, 4000);
});
  



// Приклад функції для відкриття модального вікна
function openModal(product) {
    // Отримуємо значення калорій та терміну придатності з атрибутів
    var caloriesValue = product.getAttribute('data-calories-value');
    var expiryValue = product.getAttribute('data-expiry');
    
    // Встановлюємо значення калорій та терміну придатності в модальне вікно
    document.getElementById('modal-calories-value').textContent = caloriesValue;
    document.getElementById('modal-expiry').textContent = expiryValue;
    
    // Відкриваємо модальне вікно
    document.getElementById('product-modal').style.display = 'block';
}

// Приклад того, як ви відкриваєте модальне вікно, при натисканні на кнопку "Детальніше"
document.querySelectorAll('.product-details-btn').forEach(button => {
    button.addEventListener('click', function() {
        openModal(this);
    });
});



// Модальне вікно "Про нас" і оплата
document.addEventListener("DOMContentLoaded", () => {
    // Модальне вікно "Про нас"
    const aboutModal = document.querySelector(".about-modal");
    const openAboutButtons = document.querySelectorAll(".open-about-modal"); // Використовуємо querySelectorAll для всіх лінків з таким класом
    const closeAboutButton = document.querySelector(".about-close");

    // Відкриття модального вікна при кліку на будь-який лінк з класом .open-about-modal
    openAboutButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Забороняємо перехід за посиланням
            aboutModal.style.display = "flex"; // Відкриваємо модальне вікно
        });
    });

    // Закриття модального вікна "Про нас"
    closeAboutButton.addEventListener("click", () => {
        aboutModal.style.display = "none"; // Закриваємо модальне вікно
    });

    // Закриття модального вікна "Про нас", якщо клікнути поза межами
    window.addEventListener("click", (event) => {
        if (event.target === aboutModal) {
            aboutModal.style.display = "none"; // Закриваємо при кліку поза межами
        }
    });

    // Модальне вікно "Оплата та доставка"
    const paymentModal = document.querySelector(".payment-modal");
    const openPaymentButtons = document.querySelectorAll(".open-payment-modal"); // Використовуємо querySelectorAll для всіх лінків з таким класом
    const closePaymentButton = document.querySelector(".payment-close");

    // Відкриття модального вікна "Оплата та доставка"
    openPaymentButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Забороняємо перехід за посиланням
            paymentModal.style.display = "flex"; // Відкриваємо модальне вікно
        });
    });

    // Закриття модального вікна "Оплата та доставка"
    closePaymentButton.addEventListener("click", () => {
        paymentModal.style.display = "none"; // Закриваємо модальне вікно
    });

    // Закриття модального вікна "Оплата та доставка", якщо клікнути поза межами
    window.addEventListener("click", (event) => {
        if (event.target === paymentModal) {
            paymentModal.style.display = "none"; // Закриваємо при кліку поза межами
        }
    });
});




// фільтр
document.addEventListener("DOMContentLoaded", () => {
    const selected = document.querySelector(".select-selected");
    const itemsContainer = document.querySelector(".select-items");
    const items = itemsContainer.querySelectorAll("div");

    // Відкривання/закривання випадаючого меню
    selected.addEventListener("click", () => {
        itemsContainer.classList.toggle("select-hide");
    });

    // Обробка кліків на пункти меню
    items.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.dataset.value; // Отримуємо значення ID
            const targetElement = document.getElementById(targetId); // Знаходимо елемент за ID

            if (targetElement) {
                // Плавна прокрутка до обраного розділу
                targetElement.scrollIntoView({
                    behavior: "smooth", 
                    block: "start"
                });

                console.log(`Прокручено до елемента: ${targetId}`);
            } else {
                console.error(`Елемент з id="${targetId}" не знайдено!`);
            }

            // Оновлюємо текст вибраного елемента та закриваємо меню
            selected.textContent = item.textContent;
            itemsContainer.classList.add("select-hide");
        });
    });

    // Закриття меню при кліку поза ним
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".custom-select")) {
            itemsContainer.classList.add("select-hide");
        }
    });
});


 // Функція оновлення загальної ціни
 
// Отримуємо потрібні елементи
const priceElement = document.querySelector(".price"); // Елемент з ціною за одиницю
const quantityInput = document.getElementById("quantity"); // Поле для кількості
const totalPriceElement = document.getElementById("total-price"); // Елемент для загальної ціни
const decreaseBtn = document.getElementById("decrease"); // Кнопка зменшення
const increaseBtn = document.getElementById("increase"); // Кнопка збільшення

// Функція для отримання ціни за одиницю з HTML
function getPricePerUnit() {
    if (!priceElement) {
        console.error("Елемент з ціною не знайдено!");
        return 0; // Повертаємо 0, якщо елемент не знайдено
    }
    const priceText = priceElement.textContent.trim(); // Наприклад, "200 грн/шт"
    const price = parseFloat(priceText.replace(/[^\d.]/g, "")); // Витягуємо число (200)

    if (isNaN(price)) {
        console.error("Не вдалося отримати коректну ціну!");
        return 0; // Повертаємо 0, якщо ціну не вдалося розпізнати
    }

    return price;
}

// Функція оновлення загальної ціни
function updatePrice() {
    const pricePerUnit = getPricePerUnit(); // Отримуємо ціну за одиницю
    const quantity = parseInt(quantityInput.value) || 1; // Кількість товару (мінімум 1)
    const totalPrice = pricePerUnit * quantity; // Загальна ціна
    totalPriceElement.textContent = `Ціна: ${totalPrice.toFixed(2)} грн`; // Оновлюємо текст (2 знаки після коми)
}

// Обробники для кнопок
decreaseBtn?.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityInput.value) || 1;
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1; // Зменшуємо кількість
        updatePrice();
    }
});

increaseBtn?.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityInput.value) || 1;
    quantityInput.value = currentQuantity + 1; // Збільшуємо кількість
    updatePrice();
});

// Оновлення ціни при зміні значення в полі кількості
quantityInput?.addEventListener("input", updatePrice);

// Початкове значення ціни
if (priceElement) {
    const initialPrice = getPricePerUnit(); // Отримуємо початкову ціну
    if (initialPrice === 0) {
        priceElement.textContent = "50 грн/шт"; // Встановлюємо стандартну ціну, якщо вона не задана
    }
}

// Початкове оновлення ціни
updatePrice();



// Слухач для кнопки "Додати в кошик"
document.getElementById("add-to-cart").addEventListener("click", function () {
    const mainImage = document.getElementById("main-image").src; // URL зображення
    const productCode = document.querySelector(".product-code").textContent.trim(); // Артикул
    const quantity = document.getElementById("quantity").value; // Кількість
    const totalPrice = document.getElementById("total-price").textContent.replace("Ціна: ", "").trim(); // Ціна

    // Формуємо URL з параметрами
    const cartUrl = `basket2.html?image=${encodeURIComponent(mainImage)}&article=${encodeURIComponent(productCode)}&quantity=${encodeURIComponent(quantity)}&price=${encodeURIComponent(totalPrice)}`;

    // Перенаправляємо на сторінку кошика
    window.location.href = basket2Url;
});






document.querySelector('.cart-icon a').addEventListener('click', function(event) {
    window.location.href = '/basket2.html'; // Це забезпечить перехід на потрібну сторінку
});

// Функція оновлення кількості товарів у кошику
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + parseInt(item.quantity), 0);
    document.getElementById("cart-count").textContent = totalItems;
}

// Виклик функції при завантаженні сторінки
updateCartCount();


