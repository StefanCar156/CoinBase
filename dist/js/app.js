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