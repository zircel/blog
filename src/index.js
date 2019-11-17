import './style.css'

const body = document.querySelector('#blog-intro')
const page = document.createElement('zircel-page')

// Configuration
page.pid = '5891d72c07d37b8c12266e8a'
page.path = '/blog-intro'
page.scrolling = 'document'
page.mode = process.env.NODE_ENV || 'development'

page.init().catch(err => console.error(err))
body.appendChild(page)

// handling mobile navigation
const menuburger = document.querySelector('#blog-header .menu-burger')
const menuclose = document.querySelector('#blog-menu .menu-close')
const menu = document.querySelector('#blog-menu')

menuburger.addEventListener('click', function() {
   menu.classList.add('show')
   menuburger.classList.add('hide')
})

menuclose.addEventListener('click', function() {
   menu.classList.remove('show')
   menuburger.classList.remove('hide')
})
