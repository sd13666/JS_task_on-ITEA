// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => {
//     const swiperWrapper = document.querySelector(".swiper-wrapper");

//     posts.slice(0, 10).forEach((post) => {
//       const slide = document.createElement("div");
//       const postTitle = document.createElement("h3");
//       const postText = document.createElement("p");

//       slide.classList.add("swiper-slide");
//       postTitle.classList.add("post-title");
//       postText.classList.add("post-text");

//       postTitle.innerHTML = post.title;
//       postText.innerHTML = post.body;

//       slide.append(postTitle, postText);
//       swiperWrapper.appendChild(slide);
//     });
//   });
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

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
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
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

fetchPosts();


fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users)
        const usersPhotos = document.querySelector(".users-card__list");

        users.forEach((user, index) => {
          const userCard = document.createElement("li");
          const userPhoto = document.createElement("img");
          const userName = document.createElement("span");
          const link = document.createElement("a");

          link.href = `/user-details.html?id=${user.id}`;
          link.innerText = "link";
          userCard.append(link);

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

