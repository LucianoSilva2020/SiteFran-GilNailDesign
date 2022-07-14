function myFunction() {
  var x = document.getElementById("Topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const item = document.querySelectorAll("[data-anime");

const animeScrol = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  item.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animate');
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScrol();

window.addEventListener("scroll", () => {
  animeScrol();
})