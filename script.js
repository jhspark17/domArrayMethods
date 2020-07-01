const buttons = document.getElementById('buttons');
const info = document.getElementById('info');
const total = document.getElementById('total');

for (let i = 0; i < 3; i++) addUser();
let people = [];

function applyAction(action) {
  if (action === "add") addUser();
  if (action === "calc") calculateWealth();
  if (action === "sort") sortPeople();
  if (action === "show") onlyMills();
}

function onlyMills() {
  people = people.filter((p) => p.wealth >= 1000000)
  updateDom()
}

function sortPeople() {
  updateDom(people.sort((a, b) => b.wealth - a.wealth));
}

async function addUser() {
  total.innerHTML = "";
  const res = await fetch("https://randomuser.me/api")
  const data = await res.json();
  const first = data.results[0].name.first
  const last = data.results[0].name.last
  const user = {name: `${first} ${last}`, wealth: Math.floor(Math.random() * 10000000)}
  people.push(user);
  updateDom();
}

function calculateWealth(){
  let currTotal = 0;
  people.forEach((person) => {
    console.log(person.wealth)
    currTotal += person.wealth;
  })
  let curr = document.createElement('div');
  curr.classList.add('curr-total')
  curr.innerHTML = `<strong>Total</strong> $ ${currTotal}`;
  total.appendChild(curr);
}

function updateDom(){
  const person = document.createElement('div');
  info.innerHTML = "";
  people.forEach((p) => {
    const person = document.createElement('div');
    person.classList.add("person");
    person.innerHTML = `<strong>${p.name}</strong> $ ${p.wealth}`
    info.appendChild(person);
  })
}


buttons.addEventListener('click', e => {
  applyAction(e.target.id)
})

total.addEventListener('click', calculateWealth)

