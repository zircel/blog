import './style.css'

const body1 = document.querySelector('#blog-intro')
const body2 = document.querySelector('#umfrage')
const page = document.createElement('zircel-page')

if (body1 != null) {
   // Configuration
   page.pid = '5891d72c07d37b8c12266e8a'
   page.path = '/blog-intro'
   page.scrolling = 'document'
   page.mode = process.env.NODE_ENV || 'development'

   page.init().catch(err => console.error(err))
   body1.appendChild(page)
}
if (body2 != null) {
   // Configuration
   page.pid = '5891d72c07d37b8c12266e8a'
   page.path = '/blog-umfrage'
   page.scrolling = 'document'
   page.mode = process.env.NODE_ENV || 'development'

   page.init().catch(err => console.error(err))
   body2.appendChild(page)
}

// handling mobile navigation
const menuburger = document.querySelector('#blog-header .menu-burger')
const menuclose = document.querySelector('#blog-menu .menu-close')
const homebtn = document.querySelector('#blog-start')
const menu = document.querySelector('#blog-menu')

menuburger.addEventListener('click', function() {
   menu.classList.add('show')
   menuburger.classList.add('hide')
})

menuclose.addEventListener('click', function() {
   menu.classList.remove('show')
   menuburger.classList.remove('hide')
})

homebtn.addEventListener('click', () => {
   console.log('wieso ghet hier nichts')
   location.href = '/'
})

// footer

const newsletter = document.createElement('zircel-page')
const featured = document.createElement('zircel-page')

newsletter.pid = '5891d72c07d37b8c12266e8a'
newsletter.path = '/blog-footer-newsletter'
newsletter.mode = process.env.NODE_ENV || 'development'

featured.pid = '5891d72c07d37b8c12266e8a'
featured.path = '/blog-footer-featured'
featured.mode = process.env.NODE_ENV || 'development'

newsletter.init()
featured.init()

document.querySelector('footer #newsletter').appendChild(newsletter)
document.querySelector('footer #featured').appendChild(featured)
