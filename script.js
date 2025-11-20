const container = document.querySelector('#container');
const btn = document.querySelector('#resize-btn');

// --- FUNCIÓN PRINCIPAL: Crear la cuadrícula ---
function createGrid(squaresPerSide) {
    // 1. Limpiamos el contenedor (borramos la cuadrícula anterior si existe)
    container.innerHTML = '';

    // 2. Calculamos el tamaño de cada cuadrado en porcentaje
    // Ejemplo: si son 16 cuadros, 100% / 16 = 6.25% cada uno
    const squareSize = 100 / squaresPerSide;

    // 3. Bucle para crear todos los divs necesarios
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        // Aplicamos el tamaño calculado
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        // --- EFECTO HOVER (Punto 3) ---
        // Usamos 'mouseover' para pintar cuando el ratón pasa por encima
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; 
            
            // EXTRA CREDIT (Opcional): Si quieres colores aleatorios, 
            // borra la línea de arriba y descomenta estas:
            /*
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            */
        });

        // Añadimos el cuadrado al contenedor
        container.appendChild(square);
    }
}

// --- BOTÓN RESET (Punto 4) ---
btn.addEventListener('click', () => {
    // Pedimos al usuario el nuevo tamaño
    let newSize = prompt("¿Cuántos cuadros por lado quieres? (Máximo 100)");

    // Convertimos a número entero
    newSize = parseInt(newSize);

    // Validamos que sea un número válido y dentro del límite
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize); // Creamos la nueva rejilla
    } else if (newSize > 100) {
        alert("¡Demasiados cuadros! El máximo es 100.");
    } else {
        alert("Por favor, introduce un número válido.");
    }
});

// Iniciamos el juego con una cuadrícula de 16x16 por defecto
createGrid(16);
