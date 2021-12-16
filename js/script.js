/* *****************************************************
             JS da Responsividade movel do nav
*******************************************************/
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

/* ****************************************************
              JS do carrousel card Banner
*******************************************************/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3500); // Mudar a imagem a cada 2 segundos
}
/* ****************************************************
             Script de Redirecionamento
*******************************************************/
function redirecionar() {
  alert(
    "Para prosseguir-mos com suas compras, você deverar fazer o cadastro ou login em nossa plataforma!"
  );
  window.location = "cadastro.html";
}
function mensagem() {
  alert("Mensagem enviada com Sucesso!");
  window.location = "./index.html";
}
