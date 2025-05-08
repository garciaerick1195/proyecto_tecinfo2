// Hacer que las imágenes sean interactivas: aumentar el borde azul rey al hacer hover
const imagenes = document.querySelectorAll('.imagen img');

imagenes.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.borderColor = '#00008B'; // Azul rey
    });

    img.addEventListener('mouseout', () => {
        img.style.borderColor = 'transparent'; // Quitar el borde cuando no está en hover
    });
});
