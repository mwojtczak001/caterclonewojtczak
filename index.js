import benefitsArr from "./benefits.js"

const bookADemoBtn = document.querySelector('.book-a-demo-btn')
const searchBarEl = document.querySelector('.search-bar')
const magnifyingGlassEl = document.querySelector('.fa-magnifying-glass')
const supportChat = document.querySelector('.customer-support-chat')
const welcomeModule = document.querySelector('.welcome-module')
const closeModuleButton = document.querySelector('.close-module')
const currentYearEl = document.querySelector('.current-year')
const caterLogo = document.querySelector('.cater-logo')
const statusColorImage = document.querySelector('.status-color-image')
const siteStatusDescription = document.querySelector('.site-status-description')
const leftBenefitsContainer = document.querySelector('.left-benefits-container')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navHeaderContainer = document.querySelector('.nav-header-container')

let benefitsHtml = ''

// welcome module and associated functions/listeners 

setTimeout(displayWelcomeMessage, 3000)

function displayWelcomeMessage() {
  welcomeModule.style.display = 'block'
}

function closeModule() {
  welcomeModule.style.display = 'none'
}

closeModuleButton.addEventListener('click', closeModule)

// Conditional for site display in footer 

let siteOperational = true;

if (siteOperational) {
  statusColorImage.style.background = 'green'
  siteStatusDescription.textContent = 'All Systems Operational'
} else {
  statusColorImage.style.background = 'red'
  siteStatusDescription.textContent = 'System is currently offline'
}

// Rendering benefits information from benefits array 

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

leftBenefitsContainer.innerHTML = benefitsHtml

bookADemoBtn.addEventListener('click', () => {
  location.href = 'bookdemo.html'
})

caterLogo.addEventListener('click', () => {
  location.href = 'index.html'
})

document.querySelectorAll('.header-menu-item').forEach((menu) => {
  menu.addEventListener('mouseover', () => {
    menu.classList.add('hover-effect')
  })

  menu.addEventListener('mouseout', () => {
    menu.classList.remove('hover-effect')
  })
})

const currentYear = new Date().getFullYear()

currentYearEl.textContent = currentYear

magnifyingGlassEl.addEventListener('mouseover', () => {
  searchBarEl.style.display = 'inline-block'
})

supportChat.addEventListener('click', () => alert('Chat support'))

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.style.display = 'none'
  navHeaderContainer.style.display = 'block'
})




