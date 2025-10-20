const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia('(max-width: 575px)')

media.addEventListener('change', (e) => updateNavBar(e))

function updateNavBar(e) {
    const isMobile = e.matches
    console.log(isMobile)
    if (isMobile) {
        navbar.setAttribute('inert', '')
    }
    else {
        navbar.removeAttribute('inert')
    }
}

function openSidebar() {
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
}

function closeSidebar() {
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.removeAttribute('inert')
}

const navLinks = document.querySelectorAll('#nav a')
navLinks.addEventListener('click', () => {
    closeSidebar()
})

updateNavBar(media)
