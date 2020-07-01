const buttons = document.getElementById('buttons')

function applyAction(action) {
  if (action === "add") addUser();
}

async function addUser() {
  let res = await fetch("https://randomuser.me/api")
  let data = await res.json();
  console.log(data)
}




buttons.addEventListener('click', e => {
  applyAction(e.target.id)
})




//https://randomuser.me/api