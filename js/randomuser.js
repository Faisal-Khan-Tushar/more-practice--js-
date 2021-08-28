const loadUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
loadUsers()
const displayUsers = users => {
  console.log(users)
  const row = document.getElementById('row');
  for (const user of users) {
    const div = document.createElement('div');
    div.innerHTML = `

      <div class=" col user  w-50 mx-auto bg-warning px-3  py-3 border border-3 rounded fs-2">
         <img class=" rounded" src="https://randomuser.me/api/portraits/med/women/77.jpg" alt="">
          <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
         <p class="text-center">Location</p>
         <p>${user.location.city}</p>
         <p>${user.location.country}</p>
         <p>${user.location.coordinates.latitude}</p>
         <p>${user.location.coordinates.longitude}</p>
         <p>${user.location.postcode}</p>
         <p>${user.location.state}</p>
         <p>${user.location.timezone.offset}</p>
         <p>${user.location.timezone.description}</p>
        
      </div>
      `;
    row.appendChild(div);
  }

}