function calculateSquareArea () {
    const a = document.getElementById("dlinaStoroniKvadrata").value;
    const result = a * a; 
    document.getElementById('ploschadKvadrata').innerHTML = result; 
}

function calculateRectangleArea () {
    const a = document.getElementById("pervayaStoronaPriamougolnika").value;
    const b = document.getElementById("drugayaStoronaPriamougolnika").value;
    const result = a * b; 
    document.getElementById('ploschadPriamougolnika').innerHTML = result; 
}

function calculateParallelogramArea () {
    const a = document.getElementById("dlinaStoronyParalelograma").value;
    const h = document.getElementById("dlinaVisotyParalelograma").value;
    const result = a * h; 
    document.getElementById('ploschadParalelograma').innerHTML = result; 
}

function calculateRhombusArea () {
    const a = document.getElementById("dlinaStoronyRomba").value;
    const h = document.getElementById("dlinaVisotyRomba").value;
    const result = a * h; 
    document.getElementById('ploschadRomba').innerHTML = result; 
}