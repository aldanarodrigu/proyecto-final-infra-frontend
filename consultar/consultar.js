document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('userTableBody');

    fetch('http://localhost:8090/api/usuarios/')  
        .then(response => response.json())
        .then(data => {
        
            const usuarios = data.usuarios || data;  

            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${usuario.nombre}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.telefono}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
});
