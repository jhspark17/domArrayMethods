const buttons = document.getElementById('buttons');
const info = document.getElementById('info');
const total = document.getElementById('totalWealth');

for (let i = 0; i < 3; i++) addUser();
const people = [];

function applyAction(action) {
  if (action === "add") addUser();
  if (action === "calc") calculateWealth();
}

async function addUser() {
  const res = await fetch("https://randomuser.me/api")
  const data = await res.json();
  const first = data.results[0].name.first
  const last = data.results[0].name.last
  const user = {name: `${first} ${last}`, wealth: `$ ${(Math.random() * 100000000).toFixed(2)}`}
  people.push(user);
  addData(user);
}

function addData(user) {
  const person = document.createElement('div');
  person.classList.add("person");
  person.innerHTML = `<strong>${user.name}</strong> ${user.wealth}`
  info.appendChild(person);
}

function calculateWealth(){
  let total = 0;
  people.forEach((person) => {
    total += parseInt(person.wealth.slice(1));
  })
  
}


buttons.addEventListener('click', e => {
  applyAction(e.target.id)
})

total.addEventListener('click', calculateWealth)

