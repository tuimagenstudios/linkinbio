/* ============================================
   TUIMAGEN STUDIO · script.js
   Funciones interactivas de la tarjeta
   ============================================ */

/**
 * copyEmail()
 * Copia el email al portapapeles y muestra toast de confirmación.
 * @param {HTMLElement} btn - El botón de email que fue clickeado
 */
function copyEmail(btn) {
  const email = btn.getAttribute('data-email');
  if (!email) return;

  // API moderna del portapapeles
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(() => {
      showCopiedFeedback(btn, email);
    }).catch(() => {
      // Fallback si el usuario deniega permisos
      fallbackCopy(email, btn);
    });
  } else {
    // Fallback para contextos no seguros (http)
    fallbackCopy(email, btn);
  }
}

/**
 * fallbackCopy()
 * Método legacy de copia usando textarea temporal.
 */
function fallbackCopy(text, btn) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopiedFeedback(btn, text);
  } catch (err) {
    console.warn('No se pudo copiar:', err);
    // Si todo falla, abrimos el cliente de correo
    window.location.href = `mailto:${text}`;
  }
  document.body.removeChild(textarea);
}

/**
 * showCopiedFeedback()
 * Muestra el toast y cambia temporalmente el estado del botón.
 */
function showCopiedFeedback(btn, email) {
  // Cambiar texto del hint
  const hint = btn.querySelector('.btn-copy-hint');
  const label = btn.querySelector('.btn-label');

  if (hint) hint.textContent = '¡copiado!';
  if (label) {
    const originalLabel = label.textContent;
    label.textContent = email;
    setTimeout(() => { label.textContent = originalLabel; }, 2500);
  }

  // Clase de estado "copiado"
  btn.classList.add('copied');

  // Toast flotante
  showToast('✓ Email copiado al portapapeles');

  // Resetear después de 2.5s
  setTimeout(() => {
    btn.classList.remove('copied');
    if (hint) hint.textContent = 'click para copiar';
  }, 2500);
}

/**
 * showToast()
 * Muestra el mensaje toast por 2.5 segundos.
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

/* ── Ripple effect en todos los botones ── */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // No crear ripple en el botón de email (tiene lógica propia)
    if (this.tagName === 'BUTTON') return;

    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.5s ease-out forwards;
      pointer-events: none;
    `;

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

/* ── Inyectar keyframe de ripple ── */
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to { transform: scale(2.5); opacity: 0; }
  }
`;
document.head.appendChild(style);
