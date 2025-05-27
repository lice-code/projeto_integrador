document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const parentLink = btn.closest('a');
    
    // Verifica se está dentro de um <a> com href válido
    if (!parentLink || !parentLink.getAttribute('href') || parentLink.getAttribute('href') === '#') {
      e.preventDefault(); // Evita comportamento inesperado
      alert('Mais informações em breve!');
    }
  });
});




//termos e privacidade

function topo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}