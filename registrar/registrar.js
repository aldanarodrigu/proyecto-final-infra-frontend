const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nombre: form.nombre.value,
    email: form.email.value,
    telefono: form.telefono.value
  };

  try {
    const res = await fetch('http://localhost:8000/api/usuarios/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      mensaje.textContent = "✅ Usuario registrado con éxito!";
      mensaje.style.color = "green";
      form.reset();
    } else {
      mensaje.textContent = "❌ Error al registrar usuario.";
      mensaje.style.color = "red";
    }
  } catch (err) {
    mensaje.textContent = "⚠️ Error de conexión con el servidor.";
    mensaje.style.color = "red";
  }
});
