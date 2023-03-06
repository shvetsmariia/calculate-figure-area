function calculateSquareArea (a) {
    const result = a * a; 
    if (a == 0 || a < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}

function calculateRectangleArea (a, b) {
    const result = a * b; 
    if (a == 0 || a < 0) {
        return("Enter a valid number!"); 
    }
    if (b == 0 || b < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}

function calculateParallelogramArea (a, h) {
    const result = a * h; 
    if (a == 0 || a < 0) {
        return("Enter a valid number!"); 
    }
    if (h == 0 || h < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}

function calculateRhombusArea (a, h) {
    const result = a * h; 
    if (a == 0 || a < 0) {
        return("Enter a valid number!"); 
    }
    if (h == 0 || h < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}