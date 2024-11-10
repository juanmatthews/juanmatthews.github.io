function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}

function mostrarSeccionExclusiva() {
    const seccion = document.getElementById('seccion-exclusiva');
    if (seccion.classList.contains('hidden')) {
        seccion.classList.remove('hidden');
    } else {
        seccion.classList.add('hidden');
    }
}


