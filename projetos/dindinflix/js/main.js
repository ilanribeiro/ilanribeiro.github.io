$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:6
      }
  }
})

const playButton = () => {
    window.open('https://topflix.tv/filmes/assistir-online-a-procura-da-felicidade/');
};

const infoButton = () => {
    window.open('https://www.themoviedb.org/movie/1402-the-pursuit-of-happyness');
}
