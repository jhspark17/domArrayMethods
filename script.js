const buttons = document.getElementById('buttons');
const info = document.getElementById('info');
const total = document.getElementById('total');

for (let i = 0; i < 3; i++) addUser();
let people = [];

function applyAction(action) {
  if (action === "add") addUser();
  if (action === "show") onlyMills();
  if (action === "sort") sortPeople();
  if (action === "doub") doubleMoney();
  if (action === "calc") calculateWealth();
}

async function addUser() {
  total.innerHTML = "";
  const res = await fetch("https://randomuser.me/api")
  const data = await res.json();
  const last = data.results[0].name.last
  const first = data.results[0].name.first
  const user = {name: `${first} ${last}`, wealth: Math.floor(Math.random() * 10000000)}
  people.push(user);
  updateDom();
}

function doubleMoney(){
  people.forEach(p => p.wealth *= 2)
  updateDom();
}

function onlyMills() {
  people = people.filter((p) => p.wealth >= 1000000)
  updateDom()
}

function sortPeople() {
  updateDom(people.sort((a, b) => b.wealth - a.wealth));
}


function calculateWealth(){
  let currTotal = 0;
  let wealth = people.reduce((acc, p) => (acc += p.wealth), 0);
  let curr = document.createElement('div');
  curr.classList.add('curr-total')
  curr.innerHTML = `<strong>Total</strong> $ ${wealth}`;
  total.appendChild(curr);
}

function updateDom(){
  const person = document.createElement('div');
  info.innerHTML = "";
  total.innerHTML = "";
  people.forEach((p) => {
    const person = document.createElement('div');
    person.classList.add("person");
    person.innerHTML = `<strong>${p.name}</strong> $ ${p.wealth}`
    info.appendChild(person);
  })
}


buttons.addEventListener('click', e => applyAction(e.target.id))
// total.addEventListener('click', calculateWealth)
