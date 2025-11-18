// Mission Possible - 25
// Xuanzhi Zhu
// june 12, 2024
//
// If you have any questions, please contact me via email.
// student email: sean08327@gmail.com
//
//***Quality not assurance. Use at your own risk.***
//
/*
Description: Project header and author contact. The disclaimer warns
users that this implementation is a simple utility and may not
fully conform to official scoring rules; review before use.
*/


let points = 0;
let operationTime = 0;

//6b
// Setup time scoring: awards a flat bonus when setup <= 30 minutes.
// Mutates global `points` by adding the award when condition met.
function testTime(time) {
    time = Number(time) || 0;
    if (time <= 30) {
        points += 50;
    }
}

//6c,d,e,f
// ASL scoring: awards points for sheet count and three boolean checks.
// Each satisfied condition adds points to the global `points` total.
function ASL(number, isProperFormat, isAccurateDescribed, isLabledAndRoman) {
    number = Number(number) || 0;
    isProperFormat = Boolean(isProperFormat);
    isAccurateDescribed = Boolean(isAccurateDescribed);
    isLabledAndRoman = Boolean(isLabledAndRoman);
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
// First-run action scoring: multiplies actions by a fixed award.
// Updates the global `points` by 50 per reported action.
function firstTimeAction(numberActions) {
    numberActions = Number(numberActions) || 0;
    points += 50 * numberActions;
}

//6h
// Start-action completion bonus: grants a one-time bonus when true.
// Coerces the input to boolean then updates the global `points`.
function startAction(isItComplete) {
    isItComplete = Boolean(isItComplete);
    if (isItComplete == true) {
        points += 100;
    }
}

//6i
// Accurate item scoring: awards a fixed number of points per item.
// Converts input to number and updates the global `points` total.
function accurateItem(numberItems) {
    numberItems = Number(numberItems) || 0;
    points += 10 * numberItems;
}

//6j
// Container scoring: awards points per correctly filled container.
// Input coerced to number; result adds to the global `points`.
function allRightItems(numberOfContainers) {
    numberOfContainers = Number(numberOfContainers) || 0;
    points += 50 * numberOfContainers;
}

//6k
// Bell bonus: awards points if the bell was rung during the run.
// Input is cast to boolean and the global `points` updated accordingly.
function ringTheBell(isItRing) {
    isItRing = Boolean(isItRing);
    if (isItRing == true) {
        points += 100;
    }
}

//6l
// Final time scoring: gives time-based bonus up to configured caps.
// Ensures input is numeric before applying the time-point rules.
function finalTime(time) {
    time = Number(time) || 0;
    if (time <= 120) {
        if (time <= 60) {
            points += time * 2;
        } else {
            points += 60 * 2;
        }
    }
}

//6m
// Sand timer scoring: awards one point per unit of sand timer input.
// The unit (seconds/minutes) should be confirmed; input coerced numeric.
function sandTimer(time) {
    time = Number(time) || 0;
    if (time > 10) {
        time = 10;
    }
    points += time * 1;
}

//6n
// Dimension bonus: awards points when all sides are within limits.
// Coerces sides to numbers and sums per-side bonuses capped at 30.
function dimension(length, width, height) {
    length = Number(length) || 0;
    width = Number(width) || 0;
    height = Number(height) || 0;
    if (length <= 80 && width <= 80 && height <= 80) {
        points += Math.min((80 - length), 30) + Math.min((80 - width), 30) + Math.min((80 - height), 30);
    }
}

//6o
// Adjustment award: gives points when no adjustments were required.
// Interprets the input as a boolean and updates the global `points`.
function adjustment(notAdjusted) {
    notAdjusted = Boolean(notAdjusted);
    if (notAdjusted == true) {
        points += 75;
    }
}

//start take off points
//
//
//7a
// Final time deduction: subtracts points for overtime beyond 60 units.
// Input coerced to number; deduction is capped at 120 points.
function deductFinalTime(time) {
    time = Number(time) || 0;
    if (time > 60) {
        points -= Math.min((time - 60) * 2, 120);
    }
}

//
//
// check with teacher, the dimension part minus 25 or 75? same for adjustNumber
//
//7b
// Deductions for out-of-bounds dimensions, opaque walls, and adjustments.
// Coerces inputs and applies per-item penalties; sets `operationTime` when adjustments > 3.
function deductDimensionAndWallsAndAdjustment(length, width, height, isWallTransparent, adjustedNumber) {
    length = Number(length) || 0;
    width = Number(width) || 0;
    height = Number(height) || 0;
    isWallTransparent = Boolean(isWallTransparent);
    adjustedNumber = Number(adjustedNumber) || 0;
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
// Wrong-place penalty: subtracts a fixed amount per misplaced item.
// Converts the count to a number before applying the deduction.
function wrongPlaceItem(numberWrongPlaceItems) {
    numberWrongPlaceItems = Number(numberWrongPlaceItems) || 0;
    points -= 10 * numberWrongPlaceItems;
}

//7d
// Liquid-out-of-place penalty: applies a single penalty when true.
// Interprets the input as boolean and subtracts from the global `points`.
function liquidOutPlace(isLiquidOutPlace) {
    isLiquidOutPlace = Boolean(isLiquidOutPlace);
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

    // Normalize and coerce numeric inputs for arithmetic (use toFixed only for display)
    var lengthNum = parseFloat(lengthInput) || 0;
    var widthNum = parseFloat(widthInput) || 0;
    var heightNum = parseFloat(heightInput) || 0;
    var numberOfSheets = parseInt(numberOfSheetsInput, 10) || 0;
    var numberOfActions = parseInt(numberOfActionsInput, 10) || 0;
    var numberOfItems = parseInt(numberOfItemsInput, 10) || 0;
    var numberOfItemsWrong = parseInt(numberOfItemsWrongInput, 10) || 0;
    var numberOf10 = parseInt(numberOf10Input, 10) || 0;
    var numberOfAdjustments = parseInt(numberOfAdjustmentsInput, 10) || 0;
    var sandTimerVal = parseInt(sandTimerInput, 10) || 0;
    var setupTime = parseInt(setupTimeInput, 10) || 0;

    var detailScore = "";
    //6b
    testTime(setupTime);
    detailScore += "Setup Time: " + setupTime + " min, score :" + points + "<br>";

    //6c,d,e,f
    ASL(numberOfSheets, isProperFormatInput, isAccurateDescribedInput, isLabledAndRomanInput);
    detailScore += "ASL sheet, score :" + points + "<br>";
    //6g
    firstTimeAction(numberOfActions);
    detailScore += "First time action: " + numberOfActions + " actions, score :" + points + "<br>";
    //6h
    startAction(isStartActionsCompleteInput);
    detailScore += "Start action complete: " + isStartActionsCompleteInput + ", score :" + points + "<br>";
    //6i
    accurateItem(numberOfItems);
    detailScore += "Accurate items: " + numberOfItems + " items, score :" + points + "<br>";
    //6j
    allRightItems(numberOf10);
    detailScore += "All right items: " + numberOf10 + " containers, score :" + points + "<br>";
    //6k
    ringTheBell(bellRingedInput);
    detailScore += "Ring the bell: " + bellRingedInput + ", score :" + points + "<br>";
    //6m
    sandTimer(sandTimerVal);
    detailScore += "Sand timer: " + sandTimerVal + " sec, score :" + points + "<br>";
    //6n
    dimension(lengthNum, widthNum, heightNum);
    detailScore += "Dimension: " + lengthNum.toFixed(1) + "cm x " + widthNum.toFixed(1) + "cm x " + heightNum.toFixed(1) + "cm, score :" + points + "<br>";

    //6o
    adjustment(numberOfAdjustments === 0);
    detailScore += "Adjustment: " + numberOfAdjustments + " adjustments, score :" + points + "<br>";


    //7b
    deductDimensionAndWallsAndAdjustment(lengthNum, widthNum, heightNum, isWallTransparentInput, numberOfAdjustments);
    detailScore += "Dimension, Walls and Adjustment deductions, score :" + points + "<br>";
    //6l
    finalTime(operationTime);
    detailScore += "Final Time: " + operationTime + " min, score :" + points + "<br>";
    //7a
    deductFinalTime(operationTime);
    detailScore += "Final Time deductions, score :" + points + "<br>";

    //7c
    wrongPlaceItem(numberOfItemsWrong);
    detailScore += "Wrong place items: " + numberOfItemsWrong + " items, score :" + points + "<br>";
    //7b
    liquidOutPlace(isLiquidOutOfPlaceInput);
    detailScore += "Liquid out of place: " + isLiquidOutOfPlaceInput + ", score :" + points + "<br>";


    document.getElementById("finalPoints").innerText = points;
    document.getElementById("detailScore").innerHTML = detailScore;
}