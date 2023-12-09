function winnerDestination() {
    let winDecision = ["You won a tript to", "What a pity, you did not win. Try again!", "You won a tript to", "What a pity, you did not win. Try again!", "What a pity, you did not win. Try again!", "What a pity, you did not win. Try again!", "What a pity, you did not win. Try again!","You won a tript to" ];
    let winPosition = Math.floor(Math.random()*winDecision.length);
    let winOutput = winDecision[winPosition];

    let winDestination = ["London", "Paris", "Madrid", "Los Angeles", "New York", "San Francisco" ];
    let destPosition = Math.floor(Math.random()*winDestination.length);
    let destOutput = winDestination[destPosition];

    // add if statement to check if what a pity is crossed
    let result = document.getElementById("output");

    if (winOutput != "You won a tript to"){
        result.innerHTML = winOutput;
    }
    else {
        result.innerHTML = winOutput+" "+destOutput;
    }
}


