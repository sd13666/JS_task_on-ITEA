// Код для переходу на сторінку "User Details"
function goToUserDetails(userId) {
  window.location.href = `/user-details.html?id=${userId}`;
}

// Код для взяття і відображення інформації про окремого юзера з API
async function fetchUserDetails(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    const userDetailsDiv = document.getElementById("userDetails");
    
    const userDetails = `
      <h2>Name: ${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Website: ${user.website}</p>
      <p>Company: ${user.company.name}</p>
      <p>Address: ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
    `;

    userDetailsDiv.innerHTML = userDetails;
  } catch (error) {
    console.log("Error fetching user details:", error);
  }
}

// Витягнення ID користувача з URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Виклик функції fetchUserDetails при завантаженні сторінки
if (userId) {
  fetchUserDetails(userId);
}