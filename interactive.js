const menuButton = document.getElementById('menubtn');
const navSection = document.getElementById('navBtn');

menuButton.addEventListener('click', () => {
  navSection.classList.toggle('show');
});

document.addEventListener('keydown', (e) =>{
  if(e.key.toLowerCase() === "m"){
    navSection.classList.toggle('show'); 
  }
});