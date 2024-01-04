// fetch(`https://jsonplaceholder.typicode.com/users/1`)
//   .then((response) => response.json())
//   .then((user) => {
//     document.getElementById("user-name").textContent = user.name;
//     document.getElementById("user-email").textContent = user.email;
//     document.getElementById("user-phone").textContent = user.phone;
//     // Додайте інші поля для відображення повної інформації про користувача
//     document.getElementById("user-address").textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
//     document.getElementById("user-website").textContent = user.website;
//   });


fetch('https://jsonplaceholder.typicode.com/users')
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
      document.body.appendChild(userInfo);
    });
  });