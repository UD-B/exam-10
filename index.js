function rollDice() {
    const min = 1
    const max = 6
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const body = document.body

let player1CurrentScore = 0
let player2CurrentScore = 0
let player1TotalScore = 0
let player2TotalScore = 0

let currentPlayer = "p1"

body.addEventListener('click', (e) => {
    inTheTurn = true
    const target = e.target
    while (inTheTurn) {

        if (currentPlayer === 'p1') {

            if (target.classList == 'roll') {
        document.querySelector('.name1').textContent = "Player 1"
        document.querySelector('.name2').textContent = "Player 2"
                const dice1 = rollDice()
                const dice2 = rollDice()

                document.querySelector('.dice1').textContent = dice1
                document.querySelector('.dice2').textContent = dice2

                if (dice1 === dice2) {

                    currentPlayer = 'p2'
                    document.querySelector('.current-score1').textContent = 0
                    player1CurrentScore = 0
                    inTheTurn = false
                    break

                } else {

                    player1CurrentScore += dice1 + dice2
                    document.querySelector('.current-score1').textContent = player1CurrentScore

                    inTheTurn = false
                    break
                }
            } else if (target.classList == 'hold') {

        document.querySelector('.name1').textContent = "Player 1"
        document.querySelector('.name2').textContent = "Player 2"
                document.querySelector('.current-score1').textContent = 0
                player1TotalScore += player1CurrentScore
                document.querySelector('.score1').textContent = player1TotalScore
                player1CurrentScore = 0
                currentPlayer = 'p2'
                inTheTurn = false

            } else if (target.classList == 'new') {
        document.querySelector('.name1').textContent = "Player 1"
        document.querySelector('.name2').textContent = "Player 2"
                document.querySelector('.dice1').textContent = 0
                document.querySelector('.dice2').textContent = 0
                document.querySelector('.current-score1').textContent = 0
                document.querySelector('.current-score2').textContent = 0
                document.querySelector('.score1').textContent = 0
                document.querySelector('.score2').textContent = 0
                player1CurrentScore = 0
                player2CurrentScore = 0
                player1TotalScore = 0
                player2TotalScore = 0
                inTheTurn = false
                break

            }

            inTheTurn = false

        } else if (currentPlayer === 'p2') {

            if (target.classList == 'roll') {
        document.querySelector('.name1').textContent = "Player 1"
        document.querySelector('.name2').textContent = "Player 2"
                const dice1 = rollDice()
                const dice2 = rollDice()

                document.querySelector('.dice1').textContent = dice1
                document.querySelector('.dice2').textContent = dice2

                if (dice1 === dice2) {

                    currentPlayer = 'p1'
                    document.querySelector('.current-score2').textContent = 0
                    player2CurrentScore = 0
                    inTheTurn = false
                    break

                } else {

                    player2CurrentScore += dice1 + dice2
                    document.querySelector('.current-score2').textContent = player2CurrentScore

                    inTheTurn = false
                    break
                }
            } else if (target.classList == 'hold') {

        document.querySelector('.name1').textContent = "Player 1"
        document.querySelector('.name2').textContent = "Player 2"
                document.querySelector('.current-score2').textContent = 0
                player2TotalScore += player2CurrentScore
                document.querySelector('.score2').textContent = player2TotalScore
                player2CurrentScore = 0
                currentPlayer = 'p1'
                inTheTurn = false

            } else if (target.classList == 'new') {
        document.querySelector('.name1').textContent = "Player 1"
        document.querySelector('.name2').textContent = "Player 2"
                document.querySelector('.dice1').textContent = 0
                document.querySelector('.dice2').textContent = 0
                document.querySelector('.current-score1').textContent = 0
                document.querySelector('.current-score2').textContent = 0
                document.querySelector('.score1').textContent = 0
                document.querySelector('.score2').textContent = 0
                player1CurrentScore = 0
                player2CurrentScore = 0
                player1TotalScore = 0
                player2TotalScore = 0
                inTheTurn = false
                break

            }

            inTheTurn = false

        }

        if (player1TotalScore >= 40) {
        
            document.querySelector('.name1').textContent = "Player 1 is the winner"
        
            document.querySelector('.dice2').textContent = 0
            document.querySelector('.dice1').textContent = 0
            document.querySelector('.dice2').textContent = 0
            document.querySelector('.current-score1').textContent = 0
            document.querySelector('.current-score2').textContent = 0
            document.querySelector('.score1').textContent = 0
            document.querySelector('.score2').textContent = 0
            player1CurrentScore = 0
            player2CurrentScore = 0
            player1TotalScore = 0
            player2TotalScore = 0
        
        } else if (player2TotalScore >= 40) {
        
            document.querySelector('.name2').textContent = "Player 2 is the winner"
        
            document.querySelector('.dice2').textContent = 0
            document.querySelector('.dice1').textContent = 0
            document.querySelector('.dice2').textContent = 0
            document.querySelector('.current-score1').textContent = 0
            document.querySelector('.current-score2').textContent = 0
            document.querySelector('.score1').textContent = 0
            document.querySelector('.score2').textContent = 0
            player1CurrentScore = 0
            player2CurrentScore = 0
            player1TotalScore = 0
            player2TotalScore = 0
        }
        inTheTurn = false
        break
    }
})