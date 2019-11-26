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
   page.pid = '5892db6a3530e56e73bcd2b0'
   page.path = '/umfrage'
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
