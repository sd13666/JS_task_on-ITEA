const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  // And if we need scrollbar
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
      const postTitle = document.createElement("h4");
      const postText = document.createElement("p");
      const postReadMoreLink = document.createElement("a");

      slide.classList.add("swiper-slide");
      postTitle.classList.add("post-title");
      postText.classList.add("post-text");
      postReadMoreLink.classList.add("post-link");

      postTitle.innerHTML = post.title;
      postText.innerHTML = post.body;
      postReadMoreLink.innerHTML = "Read more";
      
      slide.append(postTitle, postText, postReadMoreLink);
      swiperWrapper.appendChild(slide);
    });
  });
