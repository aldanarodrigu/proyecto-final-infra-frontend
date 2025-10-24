const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value
  };

  try {
    const res = await fetch('http://localhost:8090/api/usuarios/crear/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error("Error al registrar usuario");
    }

    const result = await res.json();
    mensaje.textContent = "✅ " + (result.mensaje || "Usuario registrado con éxito!");
    mensaje.style.color = "green";
    form.reset();

  } catch (err) {
    mensaje.textContent = "⚠️ " + err.message;
    mensaje.style.color = "red";
  }
});

