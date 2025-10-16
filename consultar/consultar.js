document.addEventListener('DOMContentLoaded', () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tbody = document.getElementById('userTableBody');

    usuarios.forEach(usuario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.edad}</td>
        `;
        tbody.appendChild(row);
    });
});
