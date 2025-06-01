// formulário
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  if (form) {
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
  }

  // Mensagem de boas-vindas com fade (se existir)
  const msg = document.getElementById("welcomeMsg");
  if (msg) {
    setTimeout(() => {
      msg.style.opacity = 1;
      setTimeout(() => msg.style.opacity = 0, 5000);
    }, 1000);
  }

  // Filtro de categorias (se existirem os elementos)
  const botoesFiltro = document.querySelectorAll(".filtro-btn");
  const cards = document.querySelectorAll(".card");

  if (botoesFiltro.length > 0 && cards.length > 0) {
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
    const mostrarAoRolar = () => {
      cards.forEach(card => {
        const topoCard = card.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (topoCard < alturaTela - 100) {
          card.classList.add("mostrar");
        }
      });
    };

    window.addEventListener("scroll", mostrarAoRolar);
    mostrarAoRolar(); // para os visíveis no início
  }
});

