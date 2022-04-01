const scrollToTop = document.querySelector(".scroll-button");

// Event when the button is clicked:
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Event when the button is visible or not:
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTop.style.visibility = `visible`;
  } else {
    scrollToTop.style.visibility = `hidden`;
  }
});
