document.addEventListener("DOMContentLoaded", function() {
    const scrollRight = document.getElementById("scrollRight");
    const productListContainer = document.querySelector(".section__box");
    scrollRight.addEventListener("click", function() {
      productListContainer.scrollBy({
        top: 0, 
        left: 200, 
        behavior: 'smooth'
      });   
    });
  });
window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar')
  navbar.classList.toggle('sticky',window.scrollY>10)
})