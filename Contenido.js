function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(seccion => {
    seccion.classList.add('oculto');
  });

  const activa = document.getElementById(id);
  activa.classList.remove('oculto');
}
