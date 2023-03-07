function showResultInDomKvadrat() {
    const squareSide = document.getElementById("dlinaStoroniKvadrata").value;
    const number = calculateSquareArea(squareSide); 
    document.getElementById('ploschadKvadrata').innerHTML = number; 
    return number; 
}

function showResultInDomPriamougolnika() {
    const rectangleWidth = document.getElementById("pervayaStoronaPriamougolnika").value;
    const rectangleLength = document.getElementById("drugayaStoronaPriamougolnika").value;
    const number = calculateRectangleArea(rectangleWidth, rectangleLength); 
    document.getElementById('ploschadPriamougolnika').innerHTML = number; 
    return number; 
}

function showResultInDomParalelograma() {
    const parallelogramSide = document.getElementById("dlinaStoronyParalelograma").value;
    const parallelogramHeight = document.getElementById("dlinaVisotyParalelograma").value;
    const number = calculateParallelogramArea(parallelogramSide, parallelogramHeight); 
    document.getElementById('ploschadParalelograma').innerHTML = number; 
    return number; 
}

function showResultInDomRomba() {
    const rhombusSide = document.getElementById("dlinaStoronyRomba").value;
    const rhombusHeight = document.getElementById("dlinaVisotyRomba").value;
    const number = calculateRhombusArea(rhombusSide, rhombusHeight); 
    document.getElementById('ploschadRomba').innerHTML = number; 
    return number; 
}