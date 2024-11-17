let usersData = []; 

// Функція для відображення користувачів
function displayUsers(users) {
    const usersContainer = document.getElementById('usersContainer');
    usersContainer.innerHTML = '';

    // Вивід користувача
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
        <img src="${user.picture?.large || ''}?${new Date().getTime()}" alt="User Picture" />
        <p><strong>Телефон:</strong> ${user.cell || ''}</p>
        <p><strong>Місто:</strong> ${user.location?.city || ''}</p>
        <p><strong>Країна:</strong> ${user.location?.country || ''}</p>
        <p><strong>Поштовий індекс:</strong> ${user.location?.postcode || ''}</p>
        `;

        usersContainer.appendChild(userCard);
    });
}

// Функція для завантаження даних у JSON-файл
function downloadUsersData() {
    const dataStr = JSON.stringify(usersData, null, 2);  
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Дані Користувачів.json';  
    a.click();

    URL.revokeObjectURL(url);  
}

// Додати обробник до кнопки
document.getElementById('downloadBtn').addEventListener('click', downloadUsersData);

// Завантажити початкових користувачів
function loadUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка при завантаженні даних');
            }
            return response.json();
        })
        .then(data => {
            usersData = data.results;  
            displayUsers(usersData);  
        })
        .catch(error => {
            console.error('Сталася помилка:', error);
        });
}

loadUsers();
