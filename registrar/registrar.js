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

    // Si funciona no tengo nidea como.
const res = await fetch(
  'https://9dxdq23wx6.execute-api.us-east-1.amazonaws.com/prod/api/usuarios/crear',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
);
    if (!res.ok) {
      throw new Error("Error al registrar usuario");
    }

    const result = await res.json();
    mensaje.textContent = "Mati:" + (result.mensaje || "Usuario registrado con éxito!");
    mensaje.style.color = "green";
    form.reset();

  } catch (err) {
    mensaje.textContent = "Mati:" + err.message;
    mensaje.style.color = "red";
  }
});

