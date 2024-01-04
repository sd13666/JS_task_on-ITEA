fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {console.log(users)
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