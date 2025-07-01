// Alterna a exibição do formulário de chat
function toggleChat() {
  const form = document.getElementById('chatForm');
  if (!form) return;

  if (form.classList.contains('show')) {
    form.classList.remove('show');
    setTimeout(() => form.style.display = 'none', 300); // espera animação
  } else {
    form.style.display = 'flex';
    requestAnimationFrame(() => form.classList.add('show')); // anima suavemente
  }
}

// Fecha o chat ao clicar no "X"
function closeWelcome() {
  const form = document.getElementById('chatForm');
  if (!form) return;
  
  form.classList.remove('show');
  setTimeout(() => {
    form.style.display = 'none';
  }, 300); // espera animação
}

// Abre o WhatsApp com mensagem pré-definida
function sendToWhatsApp() {
  const phone = "5511992147487"; // Substitua pelo seu número com DDI + DDD
  const message = `Olá! Gostaria de falar com a Ramancini Arquitetura.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
