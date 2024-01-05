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
  });

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const usersPhotos = document.querySelector(".users-card__list");

        users.forEach((user, index) => {
          const userCard = document.createElement("li");
          const userPhoto = document.createElement("img");
          const userName = document.createElement("span");

          const userPhotoIndex = photos.find((photo) => photo.id === user.id);
          userPhoto.src = userPhotoIndex.url;

          userName.textContent = user.name;

          userCard.classList.add("users-card__item");
          userPhoto.classList.add("users-card__photo");
          userName.classList.add("users-card__name");

          userCard.appendChild(userPhoto);
          userCard.appendChild(userName);
          usersPhotos.appendChild(userCard);
        });
      });
  });


document.addEventListener("click", function (event) {
  if (event.target.closest(".users-card__item")) {
    const userId = event.target.closest(".users-card__item").dataset.userId;
    window.location.href = `user-details.html?userId=${userId}`;
  }
});

  fetch('https://jsonplaceholder.typicode.com/users/${userId}')
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const userInfo = document.createElement('div');
      userInfo.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        <p><strong>Website:</strong> ${user.website}</p>
        <hr>
      `;
      document.querySelector('.user-info').appendChild(userInfo);
    });
  });

function showUserDetails(userId) {
  window.location.href = `user-details.html?userId=${userId}`;
}

showUserDetails(userId)



