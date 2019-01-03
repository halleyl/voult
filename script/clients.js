// Get page URL and find integer at the end
var clientUrl = window.location.href
var clientNum = parseInt(clientUrl.split("=").slice(-1))

// Grab the current active slide
var activeSlide = document.querySelector('.active')
var clientSlide = document.querySelector('#client' + clientNum)
var slideLoc = document.getElementById('clients')

// If the Url contains the client number, 
// select that slide by marking it active
if(clientNum != NaN && clientSlide != null) {
  activeSlide.classList.remove('active')
  clientSlide.classList.add('active')
  // scroll down to the slideshow
  slideLoc.scrollIntoView()
}