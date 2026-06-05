const API_URL = "http://localhost:8080/api";
// MENU MOBILE
function toggleMenu() {
document.getElementById("menu").classList.toggle("active");
}

async function enviarFormulario(event) {
event.preventDefault();


const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
};

try {
    const response = await fetch("http://localhost:8080/api/contato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    const resultado = await response.json();

    if (response.ok) {
        alert(resultado.mensagem);

        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
    } else {
        alert(resultado.erro);
    }

} catch (error) {
    console.error(error);
    alert("Erro ao conectar com a API.");
}


}

// MOSTRAR SERVIÇOS
function mostrarServicos() {
const services = document.getElementById("services");
const plans = document.getElementById("plans");

services.classList.add("show");
plans.classList.remove("show");
}

// MOSTRAR PLANOS
function mostrarPlanos() {
const services = document.getElementById("services");
const plans = document.getElementById("plans");

plans.classList.add("show");
services.classList.remove("show");
}

// BOTÕES
function startNow() {
alert("🔥 Você iniciou sua jornada na academia!");
}

function joinNow() {
alert("✅ Login realizado com sucesso!");
}

function cardClick(tipo) {
alert("Você clicou em: " + tipo);
}

function planSelect(plano) {
alert("Plano escolhido: " + plano);
}

// CARROSSEL
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}

function changeSlide(direction) {
currentSlide += direction;

if (currentSlide >= slides.length) currentSlide = 0;
if (currentSlide < 0) currentSlide = slides.length - 1;

showSlide(currentSlide);
}

// Auto slide
setInterval(() => {
changeSlide(1);
}, 4000);

showSlide(currentSlide);

function enviarFormulario(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso! ✅");
}