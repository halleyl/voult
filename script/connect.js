var eName = 'code'
var eDomain = 'xerrio'

var fsEmail = 'https://formspree.io/' + this.eName + '@' + this.eDomain + '.com'

document.querySelector('form').setAttribute('action', fsEmail)