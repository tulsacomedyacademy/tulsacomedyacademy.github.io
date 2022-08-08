const dropDown = document.getElementById('dropdown-container');
const navTrig = document.getElementById('nav-trigger');

let toggle = true;

function showMenu() {
  navTrig.style.transform = toggle ? 'rotate(0deg)' : 'rotate(180deg)'
  dropDown.style.display = toggle ? 'none' : 'block'
  toggle = !toggle;
}
