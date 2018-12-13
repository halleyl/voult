var hamburger = document.querySelector('.hamburger')
var menu = document.querySelector('ul:first-of-type')

hamburger.addEventListener('click',function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    menu.classList.add('shown')
  } else if (menu.classList.contains('shown')) {
    menu.classList.remove('shown')
    menu.classList.add('hidden')
  }
})