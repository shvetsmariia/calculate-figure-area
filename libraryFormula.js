function calculateSquareArea (squareSide) {
    const result = squareSide * squareSide; 
    if (squareSide == 0 || squareSide < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}

function calculateRectangleArea (rectangleWidth, rectangleLength) {
    const result = rectangleWidth * rectangleLength; 
    if (rectangleWidth == 0 || rectangleWidth < 0) {
        return("Enter a valid number!"); 
    }
    if (rectangleLength == 0 || rectangleLength < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}

function calculateParallelogramArea (parallelogramSide, parallelogramHeight) {
    const result = parallelogramSide * parallelogramHeight; 
    if (parallelogramSide == 0 || parallelogramSide < 0) {
        return("Enter a valid number!"); 
    }
    if (parallelogramHeight == 0 || parallelogramHeight < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}

function calculateRhombusArea (rhombusSide, rhombusHeight) {
    const result = rhombusSide * rhombusHeight; 
    if (rhombusSide == 0 || rhombusSide < 0) {
        return("Enter a valid number!"); 
    }
    if (rhombusHeight == 0 || rhombusHeight < 0) {
        return("Enter a valid number!"); 
    }
    else {
        return result; 
    }
}