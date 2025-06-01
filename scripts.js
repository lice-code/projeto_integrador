//formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita envio padrão

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
});




setTimeout(() => {
  const msg = document.getElementById("welcomeMsg");
  msg.style.opacity = 1;
  setTimeout(() => msg.style.opacity = 0, 5000);
}, 1000);




// Filtro de categorias
const botoesFiltro = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".card");

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const categoria = botao.getAttribute("data-categoria");

    cards.forEach(card => {
      if (categoria === "todos" || card.classList.contains(categoria)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Animação ao rolar
const cardsAnimados = document.querySelectorAll(".card");

const mostrarAoRolar = () => {
  cardsAnimados.forEach(card => {
    const topoCard = card.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (topoCard < alturaTela - 100) {
      card.classList.add("mostrar");
    }
  });
};

window.addEventListener("scroll", mostrarAoRolar);
mostrarAoRolar(); // para os visíveis no início

