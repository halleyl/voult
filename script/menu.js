var hamburger = document.querySelector('.hamburger')
var menu = document.querySelector('ul')

hamburger.addEventListener('click',function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    menu.classList.add('shown')
    hamburger.setAttribute('src','images/menu-x.svg')
  } else if (menu.classList.contains('shown')) {
    menu.classList.remove('shown')
    menu.classList.add('hidden')
    hamburger.setAttribute('src','images/menu.svg')
  }
})