import './style.css'
import a from './nodes/a'
import h2 from './nodes/h2'

const body = document.querySelector('#blog-intro')
const page = document.createElement('zircel-page')

// Configuration
page.pid = '5891d72c07d37b8c12266e8a'
page.path = '/blog-intro'
page.scrolling = 'document'
page.mode = 'development'

page.init().catch(err => console.error(err))
body.appendChild(page)

// highlighing the chapter in the main navigation
// const chapterName = window.location.pathname.split('/')[2]
// const navigationItems = Array.from(document.querySelectorAll('#blog-menu a'))
// navigationItems.forEach(n => {
//    if (n.href.includes(chapterName)) {
//       n.classList.add('active')
//    }
// })

// // Building the content navigation
// const navigation = document.querySelector('#blog .chapter-navigation')
// const titles = Array.from(
//    document.querySelectorAll('#blog .content h2, #blog .content h3')
// )

// if (titles.length > 0) {
//    navigation.appendChild(h2('Contents'))
// }

// titles.forEach(t => {
//    // replace all whitespaces with hypens for the url / html id
//    const id = t.textContent
//       .toLowerCase()
//       .split(' ')
//       .join('-')
//    navigation.appendChild(
//       a(`#${id}`, t.textContent, `${t.nodeName.toLowerCase()}-chapter`)
//    )
//    t.id = id
// })

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
