function play(playerChoice) {
    // Generate random number for computer choice between 0 and 2
    // 0 = Paper - 1 = Rock - 2 = Scissors
    var computerChoice = Math.floor(Math.random() * 3)
    // console.log(computerChoiceNum)

    // If winner = 0, player wins. If winner = 1, computer wins. If winner = 2, Tie.
    var winner
    //If tie
    if (playerChoice === computerChoice) {
        winner = 2
        //else ifs for all player winning outcomes
        //if player = paper and computer = rock / player wins
    } else if (playerChoice === 0 && computerChoice === 1) {
        winner = 0
        //if player = rock and computer = scissors / player wins
    } else if (playerChoice === 1 && computerChoice === 2) {
        winner = 0
        //if player = scissors and computer = paper / player wins
    } else if (playerChoice === 2 && computerChoice === 0) {
        winner = 0
        //else the computer must have won / winner = 1
    } else {
        winner = 1
    }
    console.log("Player Choice: " + playerChoice)
    console.log("Computer Choice: " + computerChoice)
    console.log("Winner: " + winner)

    document.getElementById('image-left').innerHTML = `
        <img src="assets/img/${playerChoice}.jpeg" alt="${playerChoice}" width="300px" height="300px">
    `
    document.getElementById('image-right').innerHTML = `
       <img src="assets/img/${computerChoice}.jpeg" alt="${computerChoice}" width="300px" height="300px">
`
    if (winner === 2) {
        document.getElementById('winner-box').innerHTML = `
            <h2 class="panel-title">Tie game!? BORING!</h2>
        `
    } else if (winner === 0) {
        document.getElementById('winner-box').innerHTML = `
            <h2 class="panel-title">Player Wins!</h2>
        `
    } else {
        document.getElementById('winner-box').innerHTML = `
            <h2 class="panel-title">Computer Wins!</h2>
        `
    }

}