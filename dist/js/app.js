const articles = document.querySelectorAll('.index__blog__articles .article')


articles.forEach((article) => {
    article.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("article")) {
            articles.forEach((art) => {
                art.classList.remove("article--active")
            })
            e.target.classList.add("article--active")
        }
    })
})

// Nav
const navBtn = document.querySelector(".nav__btn")
const navLinks = document.querySelector(".nav__links")
const navCta = document.querySelector(".nav__cta")

navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--active")
    navCta.classList.toggle("nav__cta--active")

    // Hide articles if nav is open
    navLinks.classList.contains("nav__links--active") ? document.querySelector(".index__blog__articles").style.zIndex = "-1" : document.querySelector(".index__blog__articles").style.zIndex = "1"
})

// Add shadow
const header = document.querySelector("header")
window.onscroll = () => {
    if (window.scrollY > 600 && window.innerWidth <= 1024) {
        header.style.boxShadow = "2px 2px 10px 2px rgba(0, 0, 0, 0.1)"
    } else {
        header.style.boxShadow = "none"
    }
}

// Index Page
const heroContainer = document.querySelector(".hero")
const heroText = document.querySelector(".hero__text")
const heroImg = document.querySelector(".hero__img")
const experienceContainer = document.querySelector(".experience")
const experienceText = document.querySelector(".experience__text")
const experienceImg = document.querySelector(".experience__img")

const handleResponsive = () => {
    if (window.innerWidth < 1024) {
        heroContainer.insertBefore(heroImg, heroText)
        experienceContainer ? experienceContainer.insertBefore(experienceImg, experienceText) : null
    } else {
        heroContainer.insertBefore(heroText, heroImg)
        experienceContainer ? experienceContainer.insertBefore(experienceText, experienceImg) : null
    }
}

window.onresize = handleResponsive
window.onload = handleResponsive

// Swiper
let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  });

