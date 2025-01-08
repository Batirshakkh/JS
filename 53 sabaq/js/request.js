const API = 'https://randomuser.me/api/?results=9';

const overlay = document.getElementById('overlay');

// Loaderni ko'rsatish va yashirish funksiyasi
const loaderToggle = (toggle) => {
    if (toggle) {
        overlay.classList.remove('hidden');
    } else {
        overlay.classList.add('hidden');
    }
};

// API ma'lumotlarni olish funksiyasi
const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState < 4) {
                loaderToggle(true);
            } else if (request.readyState === 4) {
                loaderToggle(false);
                if (request.status === 200) {
                    try {
                        const data = JSON.parse(request.responseText);
                        resolve(data.results); // Foydalanuvchi ma'lumotlarini qaytaradi
                    } catch (error) {
                        reject('JSON parse error');
                    }
                } else {
                    reject(`Error: ${request.status}`);
                }
            }
        });

        request.open('GET', resource);
        request.send();
    });
};


// Ma'lumotlarni interfeysga chiqarish funksiyasi
const updateUI = (data) => {
    const userContainer = document.getElementById('user');
    userContainer.innerHTML = ''; // Oldingi ma'lumotlarni tozalash

    data.forEach((user) => {
        const userCard = document.createElement('div');
        userCard.innerHTML = `
            <img src="${user.picture.medium}" alt="${user.name.first}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
        `;
        userContainer.appendChild(userCard);
    });
};

// Ma'lumotlarni yuklash funksiyasi
const reload = () => {
    getData(API)
        .then((data) => {
            updateUI(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

// DOM yuklanganidan keyin avtomatik yuklash
document.addEventListener('DOMContentLoaded', () => {
    reload();
});
