// Optional: Autoscroll carousel on load
window.addEventListener('load', () => {
  const carousel = document.getElementById('movieCarousel');
  let scrollAmount = 0;

  setInterval(() => {
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += 220;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 3000);
});
