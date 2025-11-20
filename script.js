const container = document.querySelector('#container');

function createGrid(squaresPerSide) {
    // 1. Limpiamos el contenedor por si había algo antes
    container.innerHTML = '';

    // 2. Calculamos el ancho y alto de cada cuadradito en %
    // Si son 16 cuadros, cada uno ocupa (100 / 16)%
    const squareSize = 100 / squaresPerSide;

    // 3. Bucle para crear los divs (16 * 16 = 256 veces)
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        
        square.classList.add('grid-square');
        
        // Asignamos el tamaño dinámicamente
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        // Añadimos el cuadrado al contenedor
        container.appendChild(square);
    }
}

// Llamamos a la función con 16 para empezar
createGrid(16);
