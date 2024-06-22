const whatWeDoBtnEl = document.querySelector('.what-we-do-btn')
const bookADemoBtn = document.querySelector('.book-a-demo-btn')
const searchBarEl = document.querySelector('.search-bar')
const magnifyingGlassEl = document.querySelector('.fa-magnifying-glass')
const supportChat = document.querySelector('.customer-support-chat')
const welcomeModule = document.querySelector('.welcome-module')
const closeModuleButton = document.querySelector('.close-module')
const currentYearEl = document.querySelector('.current-year')

document.querySelectorAll('.header-menu-item').forEach((menu) => {
  menu.addEventListener('mouseover', () => {
    menu.classList.add('hover-effect')
  })

  menu.addEventListener('mouseout', () => {
    menu.classList.remove('hover-effect')
  })
})

const currentYear = new Date().getFullYear()

magnifyingGlassEl.addEventListener('mouseover', () => {
  searchBarEl.style.display = 'inline-block'
})

supportChat.addEventListener('click', () => alert('Chat support'))

setTimeout(displayWelcomeMessage, 3000)

function displayWelcomeMessage() {
  welcomeModule.style.display = 'block'
}

function closeModule() {
  welcomeModule.style.display = 'none'
}

closeModuleButton.addEventListener('click', closeModule)

currentYearEl.textContent = currentYear