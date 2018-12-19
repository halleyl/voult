var hamburger = document.querySelector('.hamburger')
var menu = document.querySelector('ul')
var content = document.querySelector('main')
var footer = document.querySelector('footer')

hamburger.addEventListener('click',function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    menu.classList.add('shown')
    hamburger.setAttribute('src','images/menu-x.svg')
    
    // Fade out the content on menu slide-in
    content.classList.add('fade')
    footer.classList.add('fade')
    setTimeout(function(){ 
      content.classList.add('blur')
      footer.classList.add('blur')
    }, 500);
    
    
    
  } else if (menu.classList.contains('shown')) {
    menu.classList.remove('shown')
    menu.classList.add('hidden')
    hamburger.setAttribute('src','images/menu.svg')
    
    // Un-fade the content
    content.classList.remove('fade')
    footer.classList.remove('fade')
    content.classList.remove('blur')
    footer.classList.remove('blur')
  }
})
