function validateForm() {
    const name = document.getElementById("name");
    const idcard = document.getElementById("idcard");
    const bdate = document.getElementById("bdate");
    const address = document.getElementById("address");
    const email = document.getElementById("email");
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    const nameRegex = /^[А-Яа-яЄєЇїІіҐґA-Za-z]{2,}\s[А-Яа-яЄєЇїІіҐґA-Za-z]\.[А-Яа-яЄєЇїІіҐґA-Za-z]\.$/;
    const idcardRegex = /^[А-Яа-яЄєЇїІіҐґ]{2}\s№\d{6}$/;
    const bdateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressRegex = /^м\.\s[А-Яа-яЄєЇїІіҐґ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    // Функція для перевірки та виділення помилки
    function validateField(field, regex, errorMessage) {
        if (!regex.test(field.value)) {
            field.style.border = "2px solid red";
            errorMessages.innerHTML += `<p>${errorMessage}</p>`;
            isValid = false;
        } else {
            field.style.border = "2px solid green";
        }
    }

    validateField(name, nameRegex, "Неправильний формат ПІБ. Приклад: ТТТТТТ Т.Т.");
    validateField(idcard, idcardRegex, "Неправильний формат ID-card. Приклад: ТТ №ЧЧЧЧЧЧ");
    validateField(bdate, bdateRegex, "Неправильний формат дати народження. Приклад: ЧЧ.ЧЧ.ЧЧЧЧ");
    validateField(address, addressRegex, "Неправильний формат адреси. Приклад: м. ЧЧЧЧЧЧ");
    validateField(email, emailRegex, "Неправильний формат електронної пошти. Приклад: тттттт@ттттт.com");

    if (isValid) {
        document.getElementById("outputName").textContent = name.value;
        document.getElementById("outputIdcard").textContent = idcard.value;
        document.getElementById("outputBdate").textContent = bdate.value;
        document.getElementById("outputAddress").textContent = address.value;
        document.getElementById("outputEmail").textContent = email.value;

        const outputWindow = window.open("", "Output Window", "width=400,height=300");
        outputWindow.document.write("<h1>Введені дані</h1>");
        outputWindow.document.write("<p><strong>ПІБ:</strong> " + name.value + "</p>");
        outputWindow.document.write("<p><strong>ID-card:</strong> " + idcard.value + "</p>");
        outputWindow.document.write("<p><strong>Дата народж.:</strong> " + bdate.value + "</p>");
        outputWindow.document.write("<p><strong>Адреса:</strong> " + address.value + "</p>");
        outputWindow.document.write("<p><strong>e-mail:</strong> " + email.value + "</p>");
        outputWindow.document.close();
    }
}

const variant = 2; // Номер вашого варіанта
const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');
let cells = [];

// Функція генерації випадкового кольору
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Створення таблиці
let number = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = number;
        cell.dataset.number = number;
        cell.dataset.column = j; // Номер стовпця

        // Подія наведення (mouseover)
        cell.addEventListener('mouseover', function () {
            if (parseInt(cell.dataset.number) === variant) {
                cell.style.backgroundColor = getRandomColor();
            }
        });

        // Подія кліку (click)
        cell.addEventListener('click', function () {
            if (parseInt(cell.dataset.number) === variant) {
                cell.style.backgroundColor = colorPicker.value;
            }
        });

        // Подія подвійного кліку (dblclick)
        cell.addEventListener('dblclick', function () {
            if (parseInt(cell.dataset.number) === variant) {
                const column = cell.dataset.column; // Отримати номер стовпця
                cells.forEach(c => {
                    if (c.dataset.column === column) {
                        c.style.backgroundColor = colorPicker.value;
                    }
                });
            }
        });

        row.appendChild(cell);
        cells.push(cell);
        number++;
    }
    table.appendChild(row);
}
