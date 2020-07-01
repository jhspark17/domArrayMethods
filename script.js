const buttons = document.getElementById('buttons')
const info = document.getElementById('info');

for (let i = 0; i < 3; i++) addUser();

function applyAction(action) {
  if (action === "add") addUser();
}

async function addUser() {
  const res = await fetch("https://randomuser.me/api")
  const data = await res.json();
  const first = data.results[0].name.first
  const last = data.results[0].name.last
  const user = {name: `${first} ${last}`, wealth: `$${(Math.random() * 100000000).toFixed(2)}`}
  addData(user);
}

function addData(user) {
  const person = document.createElement('div');
  person.innerHTML = `<strong>${user.name}</strong> ${user.wealth}`
  info.appendChild(person);
}




buttons.addEventListener('click', e => {
  applyAction(e.target.id)
})




//https://randomuser.me/api