console.log("Скрипт завантажено.");

let n = 2;
const targetElementIndex = (n % 10) + 1; // Вирахування індексу: 3-й елемент

// Отримання всіх елементів на сторінці
const allElements = document.querySelectorAll('body *');
const targetElement = allElements[targetElementIndex]; // Елемент за порядком
const nextElement = allElements[targetElementIndex + 1]; // Наступний елемент (4-й)

// Задаємо початкові стилі для 3-го та 4-го елементів
const targetElementColorBlueWhite = { background: 'blue', color: 'white' };
const targetElementColorGreenYellow = { background: 'green', color: 'yellow' }; // Жовто-зелений
const nextElementColorGreenYellow = { background: 'green', color: 'yellow' };
const nextElementColorBlueWhite = { background: 'blue', color: 'white' };

// Лічильник кліків для 3-го елемента
let clickCountTarget = 0;

// Додаємо обробники подій для 3-го елемента
if (targetElement) {
    targetElement.addEventListener('click', function () {
        clickCountTarget++; // Збільшуємо лічильник кліків

        if (clickCountTarget === 1) {
            // Перший клік: біло-синій
            targetElement.style.backgroundColor = targetElementColorBlueWhite.background;
            targetElement.style.color = targetElementColorBlueWhite.color;
        } else if (clickCountTarget === 2) {
            // Другий клік: жовто-зелений
            targetElement.style.backgroundColor = targetElementColorGreenYellow.background;
            targetElement.style.color = targetElementColorGreenYellow.color;
            clickCountTarget = 0; // Скидаємо лічильник для наступного циклу
        }

        console.log("Клік на 3-му елементі");
    });
}

// Додаємо обробники подій для 4-го елемента
if (nextElement) {
    nextElement.addEventListener('click', function () {
        // Перевіряємо, чи вже застосовані кольори зелений-жовтий
        if (nextElement.style.backgroundColor === nextElementColorGreenYellow.background) {
            // Якщо це зелений-жовтий, змінюємо на синьо-білий
            nextElement.style.backgroundColor = nextElementColorBlueWhite.background;
            nextElement.style.color = nextElementColorBlueWhite.color;
        } else {
            // В іншому випадку, змінюємо на зелений-жовтий
            nextElement.style.backgroundColor = nextElementColorGreenYellow.background;
            nextElement.style.color = nextElementColorGreenYellow.color;
        }
        console.log("Клік на 4-му елементі");
    });
}

// Завдання 2: Робота з зображенням
const img = document.getElementById('kharkiv-img');

document.getElementById('add-img').addEventListener('click', function () {
    img.style.display = 'block';
});

document.getElementById('increase-img').addEventListener('click', function () {
    img.width += 50;
});

document.getElementById('decrease-img').addEventListener('click', function () {
    if (img.width > 50) {
        img.width -= 50;
    }
});

document.getElementById('remove-img').addEventListener('click', function () {
    img.style.display = 'none';
});
