function showResultInDomKvadrat() {
    const a = document.getElementById("dlinaStoroniKvadrata").value;
    const number = calculateSquareArea(a); 
    document.getElementById('ploschadKvadrata').innerHTML = number; 
    return number; 
}

function showResultInDomPriamougolnika() {
    const a = document.getElementById("pervayaStoronaPriamougolnika").value;
    const b = document.getElementById("drugayaStoronaPriamougolnika").value;
    const number = calculateRectangleArea(a, b); 
    document.getElementById('ploschadPriamougolnika').innerHTML = number; 
    return number; 
}

function showResultInDomParalelograma() {
    const a = document.getElementById("dlinaStoronyParalelograma").value;
    const h = document.getElementById("dlinaVisotyParalelograma").value;
    const number = calculateParallelogramArea(a, h); 
    document.getElementById('ploschadParalelograma').innerHTML = number; 
    return number; 
}

function showResultInDomRomba() {
    const a = document.getElementById("dlinaStoronyRomba").value;
    const h = document.getElementById("dlinaVisotyRomba").value;
    const number = calculateRhombusArea(a, h); 
    document.getElementById('ploschadRomba').innerHTML = number; 
    return number; 
}