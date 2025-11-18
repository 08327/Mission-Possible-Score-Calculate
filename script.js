// Mission Possible - 25
// Xuanzhi Zhu
// june 12, 2024
//
// If you have any questions, please contact me via email.
// student email: sean08327@gmail.com
//
//***Quality not assurance. Use at your own risk.***


let points = 0;
let operationTime = 0;

//6b
function testTime(time) {
    if (time <= 30) {
        points += 50;
    }
}

//6c,d,e,f
function ASL(number, isProperFormat, isAccurateDescribed, isLabledAndRoman) {
    if (number == 2) {
        points += 25;
    }
    if (isProperFormat == true) {
        points += 25;
    }
    if (isAccurateDescribed == true) {
        points += 25;
    }
    if (isLabledAndRoman == true) {
        points += 25;
    }
}

//6g
function firstTimeAction(numberActions) {
    points += 50 * numberActions;
}

//6h
function startAction(isItComplete) {
    if (isItComplete == true) {
        points += 100;
    }
}

//6i
function accurateItem(numberItems) {
    points += 10 * numberItems;
}

//6j
function allRightItems(numberOfContainers) {
    points += 50 * numberOfContainers;
}

//6k
function ringTheBell(isItRing) {
    if (isItRing == true) {
        points += 100;
    }
}

//6l
function finalTime(time) {
    if (time <= 120) {
        if (time <= 60) {
            points += time * 2;
        } else {
            points += 60 * 2;
        }
    }
}

//6m
function sandTimer(time) {
    points += time * 1;
}

//6n
//
// check with teacher, all three side smaller than 80 
//
//
function dimension(length, width, height) {
    if (length <= 80 && width <= 80 && height <= 80) {
        points += Math.min((80 - length), 30) + Math.min((80 - width), 30) + Math.min((80 - height), 30);
    }
}

//6o
function adjustment(notAdjusted) {
    if (notAdjusted == true) {
        points += 75;
    }
}

//start take points
//
//
// check with teacher, 0 point for 126 or -120?
//
//7a
function deductFinalTime(time) {
    if (time > 60) {
        points -= Math.min((time - 60) * 2, 120);
    }
}

//
//
// check with teacher, the dimension part minus 25 or 75? same for adjustNumber
//
//7b
function deductDimensionAndWallsAndAdjustment(length, width, height, isWallTransparent, adjustedNumber) {
    if (length > 80) {
        points -= 25;
    }
    if (width > 80) {
        points -= 25;
    }
    if (height > 80) {
        points -= 25;
    }

    if (isWallTransparent == false) {
        points -= 25;
    }

    if (adjustedNumber <= 3) {
        points -= 25 * adjustedNumber;
    } else {
        operationTime = 120
    }
}

//7c
function wrongPlaceItem(numberWrongPlaceItems) {
    points -= 10 * numberWrongPlaceItems;
}

//7d
function liquidOutPlace(isLiquidOutPlace) {
    if (isLiquidOutPlace == true) {
        points -= 50;
    }
}












function calculateFinalPoints() {
    points = 0;
   var operationTimeInput = document.getElementById("operationTime").value;
   var lengthInput = document.getElementById("length").value;
    var widthInput = document.getElementById("width").value;
    var heightInput = document.getElementById("height").value;
    var isWallTransparentInput = document.getElementById("isWallTransparent").checked;
    var numberOfSheetsInput = document.getElementById("numberOfSheets").value;
    var isStartActionsCompleteInput = document.getElementById("isStartActionsComplete").checked;
    var numberOfActionsInput = document.getElementById("numberOfActions").value;
    var numberOfItemsInput = document.getElementById("numberOfItems").value;
    var numberOfItemsWrongInput = document.getElementById("numberOfItemsWrong").value;
    var numberOf10Input = document.getElementById("numberOf10").value;
    var numberOfAdjustmentsInput = document.getElementById("numberOfAdjustments").value;
    var isLiquidOutOfPlaceInput = document.getElementById("isLiquidOutOfPlace").checked;
    var bellRingedInput = document.getElementById("bellRinged").checked;
    var isProperFormatInput = document.getElementById("properFormat").checked;
    var isAccurateDescribedInput = document.getElementById("accurateDescribed").checked;
    var isLabledAndRomanInput = document.getElementById("labledAndRoman").checked;
    var sandTimerInput = document.getElementById("sandTimer").value;
    operationTime = parseInt(operationTimeInput);
    var setupTimeInput = document.getElementById("setupTime").value;

    var lenght =parseFloat(lengthInput).toFixed(1);
    var width =parseFloat( widthInput).toFixed(1);
    var height =parseFloat( heightInput).toFixed(1);

    var detailScore = "";
    //6b
    testTime(parseInt(setupTimeInput));
    detailScore += "Setup Time: " + setupTimeInput + " min, score :" + points + "<br>";

    //6c,d,e,f
    ASL(parseInt(numberOfSheetsInput), isProperFormatInput, isAccurateDescribedInput, isLabledAndRomanInput);
    detailScore += "ASL sheet, score :" + points + "<br>";  
    //6g
    firstTimeAction(parseInt(numberOfActionsInput));
    detailScore += "First time action: " + numberOfActionsInput + " actions, score :" + points + "<br>";
    //6h
    startAction(isStartActionsCompleteInput);
    detailScore += "Start action complete: " + isStartActionsCompleteInput + ", score :" + points + "<br>";
    //6i
    accurateItem(parseInt(numberOfItemsInput));
    detailScore += "Accurate items: " + numberOfItemsInput + " items, score :" + points + "<br>";
    //6j
    allRightItems(parseInt(numberOf10Input));
    detailScore += "All right items: " + numberOf10Input + " containers, score :" + points + "<br>";
    //6k
    ringTheBell(bellRingedInput);
    detailScore += "Ring the bell: " + bellRingedInput + ", score :" + points + "<br>";
    //6m
    sandTimer(parseInt(sandTimerInput));
    detailScore += "Sand timer: " + sandTimerInput + " sec, score :" + points + "<br>";
    //6n
    dimension(lenght, width, height);
    detailScore += "Dimension: " + lenght + "cm x " + width + "cm x " + height + "cm, score :" + points + "<br>";

    //6o
    adjustment(parseInt(numberOfAdjustmentsInput)==0);
    detailScore += "Adjustment: " + numberOfAdjustmentsInput + " adjustments, score :" + points + "<br>";

    
    //7b
    deductDimensionAndWallsAndAdjustment(lenght, width, height, isWallTransparentInput, parseInt(numberOfAdjustmentsInput));
    detailScore += "Dimension, Walls and Adjustment deductions, score :" + points + "<br>";
    //6l
    finalTime(operationTime);
    detailScore += "Final Time: " + operationTime + " min, score :" + points + "<br>";
    //7a
    deductFinalTime(operationTime);
    detailScore += "Final Time deductions, score :" + points + "<br>";
        
    //7c
    wrongPlaceItem(parseInt(numberOfItemsWrongInput));
    detailScore += "Wrong place items: " + numberOfItemsWrongInput + " items, score :" + points + "<br>";
    //7b
    liquidOutPlace(isLiquidOutOfPlaceInput);
    detailScore += "Liquid out of place: " + isLiquidOutOfPlaceInput + ", score :" + points + "<br>";
    
    
    document.getElementById("finalPoints").innerText = points;
    document.getElementById("detailScore").innerHTML = detailScore;
}