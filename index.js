const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    posts.slice(0, 10).forEach((post) => {
      const slide = document.createElement("div");
      const postTitle = document.createElement("h3");
      const postText = document.createElement("p");

      slide.classList.add("swiper-slide");
      postTitle.classList.add("post-title");
      postText.classList.add("post-text");

      postTitle.innerHTML = post.title;
      postText.innerHTML = post.body;

      slide.append(postTitle, postText);
      swiperWrapper.appendChild(slide);
    });
  })
  .catch(error => {
    console.error('Помилка під час виконання запиту:', error);
  });

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((photos) => {
//     const usersPhotos = document.querySelector(".users-card__list");

//     photos.slice(0, 10).forEach((photo, index) => {
//       const userCard = document.createElement("li");
//       const userPhoto = document.createElement("img");
//       userPhoto.src = photo.url;

//       userCard.classList.add('users-card__item');
//       userPhoto.classList.add('users-card__photo');

//       const userId = photo.albumId;
//       fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then((response) => response.json())
//         .then((user) => {
//           const userName = document.createElement("span");
//           userName.textContent = user.name;
//           userName.classList.add('users-card__name');
//           userCard.appendChild(userName);
//         });

//       userCard.appendChild(userPhoto);
//       usersPhotos.appendChild(userCard);
//     });
//   })
//   .catch(error => {
//     console.error('Помилка під час виконання запиту:', error);
//   });

fetch("https://jsonplaceholder.typicode.com/photos")
.then((response) => response.json())
.then((photos) => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {

    const usersPhotos = document.querySelector(".users-card__list");

    users.forEach((user, index) => { // Додано параметр "index" для ідентифікації кожного користувача в масиві
      const userCard = document.createElement("li");
      const userPhoto = document.createElement("img");
      const userName = document.createElement("span"); // Додано створення елемента для імені користувача

      userPhoto.src = `https://jsonplaceholder.typicode.com/photos/${index+1}`; // Використовуємо "index" для унікального URL фото
      userName.textContent = user.name; // Додано встановлення тексту для імені користувача

      userCard.classList.add('users-card__item');
      userPhoto.classList.add('users-card__photo');
      userName.classList.add('users-card__name'); // Додаємо клас для стилізації імені користувача

      userCard.appendChild(userPhoto);
      userCard.appendChild(userName); // Додаємо ім'я після фото
      usersPhotos.appendChild(userCard);
    });
  });
});



// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(response => response.json())
//   .then(photos => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users => {
//         const usersPhotos = document.querySelector(".users-card__list");

//         photos.slice(0, 10).forEach(photo => {
//           const userCard = document.createElement("li");
//           const userPhoto = document.createElement("img");
//           const userId = photo.albumId;

//           const user = users.find(user => user.id === userId); // Знаходимо користувача, якому належить це зображення

//           userPhoto.src = photo.thumbnailUrl; // Встановлюємо URL мініатюри фото
//           userCard.classList.add('users-card__item');
//           userPhoto.classList.add('users-card__photo');

//           const userName = document.createElement("span");
//           userName.textContent = user.name;
//           userName.classList.add('users-card__name');

//           userCard.appendChild(userPhoto);
//           userCard.appendChild(userName);
//           usersPhotos.appendChild(userCard);
//         });
//       });
//   });



// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(response => response.json())
//   .then(photos => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users => {
//         const usersPhotos = document.querySelector(".users-card__list");

//         photos.slice(0, 10).forEach(photo => {
//           const userCard = document.createElement("li");
//           const userPhoto = document.createElement("img");
//           const userId = photo.userId;

//           const user = users.find(user => user.id === userId); // Знаходимо користувача, якому належить це зображення

//           userPhoto.src = photo.url; // Встановлюємо URL зображення
//           userCard.classList.add('users-card__item');
//           userPhoto.classList.add('users-card__photo');

//           const userName = document.createElement("span"); // Виправлено створення елемента для імені користувача
//           userName.textContent = user.name; // Встановлюємо текст для імені користувача

//           userName.classList.add('users-card__name');

//           userCard.appendChild(userPhoto);
//           userCard.appendChild(userName);
//           usersPhotos.appendChild(userCard);
//         });
//       });
//   });
