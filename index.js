import benefitsArr from "./benefits.js"

const bookADemoBtn = document.querySelector('.book-a-demo-btn')
const searchBarEl = document.querySelector('.search-bar')
const magnifyingGlassEl = document.querySelector('.fa-magnifying-glass')
const supportChat = document.querySelector('.customer-support-chat')
const welcomeModule = document.querySelector('.welcome-module')
const closeModuleButton = document.querySelector('.close-module')
const currentYearEl = document.querySelector('.current-year')
const caterLogo = document.querySelector('.cater-logo')

const leftBenefitsContainer = document.querySelector('.left-benefits-container')
let benefitsHtml = ''

benefitsArr.forEach((benefit) => {
  benefitsHtml += `
    <div class="benefit-container">
      <img class="benefit-icon" src="${benefit.benefitImg}">
      <div>
        <h2>${benefit.benefitTitle}</h2>
        <h4>${benefit.benefitDescription}</h4>
      </div>
    </div>
  `
})

bookADemoBtn.addEventListener('click', () => {
  location.href = 'bookdemo.html'
})

caterLogo.addEventListener('click', () => {
  location.href = 'index.html'
})

leftBenefitsContainer.innerHTML = benefitsHtml

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
