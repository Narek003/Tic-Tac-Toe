let table = document.querySelector("table")
let gameArr = []
let player
let xWins = 0
let oWins = 0
let xH = document.getElementById("xH")
let oH = document.getElementById("oH")
let interval

function createPlayZone(){
    clearInterval(interval)
    player = "X"
    for(let i = 0; i < 3; i++){
        let row = document.createElement("tr")
        gameArr.push([])
        for(let j = 0; j < 3; j++){
            let col = document.createElement("td")
            col.id = `id${i}${j}`
            row.append(col)
            gameArr[i].push(col.id)
        }
        table.append(row)
    }
}
function turn(){
    table.addEventListener("click", (td) => {
        if(td.target.innerHTML == ""){
            td.target.innerHTML = `${player}`
            soundClick()
            if(player == "X"){
                player = "O"
                td.target.style.color = "#22df13"
            }else{
                player = "X"
            }
        }
        checkWinner()
    })
}
createPlayZone()
turn()

function checkWinner(){
    let i = 1
    let j = 1
    
    if((document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i][j - 1]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i][j + 1]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML != "") ||
    (document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i - 1][j]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i + 1][j]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML != "") ||
    (document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i - 1][j - 1]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i + 1][j + 1]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML != "") ||
    (document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i - 1][j + 1]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML == document.getElementById(gameArr[i + 1][j - 1]).innerHTML && document.getElementById(gameArr[i][j]).innerHTML != "")){
        winSound()
        if(document.getElementById(gameArr[i][j]).innerHTML == "X"){
            xWins++
            xH.innerText = `X: ${xWins}`
        }else{
            oWins++
            oH.innerText = `O: ${oWins}`
        }
        interval = setInterval(()=>{
            table.innerHTML = ""
            createPlayZone()
        },3000)
    }else 
    if((document.getElementById(gameArr[i - 1][j - 1]).innerHTML == document.getElementById(gameArr[i - 1][j]).innerHTML && document.getElementById(gameArr[i - 1][j - 1]).innerHTML == document.getElementById(gameArr[i - 1][j + 1]).innerHTML &&document.getElementById(gameArr[i - 1][j - 1]).innerHTML != "") ||
    (document.getElementById(gameArr[i - 1][j - 1]).innerHTML == document.getElementById(gameArr[i][j - 1]).innerHTML && document.getElementById(gameArr[i - 1][j - 1]).innerHTML == document.getElementById(gameArr[i + 1][j - 1]).innerHTML && document.getElementById(gameArr[i - 1][j - 1]).innerHTML != "")){
        winSound()
        if(document.getElementById(gameArr[i - 1][j - 1]).innerHTML == "X") {
            xWins++
            xH.innerText = `X: ${xWins}`
        }else{
            oWins++
            oH.innerText = `O: ${oWins}`
        }
        interval = setInterval(()=>{
                table.innerHTML = ""
                createPlayZone()
        },3000)
    }else
    if((document.getElementById(gameArr[i + 1][j + 1]).innerHTML == document.getElementById(gameArr[i + 1][j]).innerHTML && document.getElementById(gameArr[i + 1][j + 1]).innerHTML == document.getElementById(gameArr[i + 1][j - 1]).innerHTML && document.getElementById(gameArr[i + 1][j + 1]).innerHTML != "") ||
    (document.getElementById(gameArr[i + 1][j + 1]).innerHTML == document.getElementById(gameArr[i][j + 1]).innerHTML && document.getElementById(gameArr[i + 1][j + 1]).innerHTML == document.getElementById(gameArr[i - 1][j + 1]).innerHTML &&document.getElementById(gameArr[i + 1][j + 1]).innerHTML != "")){
        winSound()
        if(document.getElementById(gameArr[i + 1][j + 1]).innerHTML == "X") {
            xWins++
            xH.innerText = `X: ${xWins}`
        }else{
            oWins++
            oH.innerText = `O: ${oWins}`
        }
        interval = setInterval(()=>{
            table.innerHTML = ""
            createPlayZone()
        },3000)
    }else
    if(document.getElementById(gameArr[i - 1][j - 1]).innerHTML != "" && 
    document.getElementById(gameArr[i - 1][j]).innerHTML != "" && 
    document.getElementById(gameArr[i - 1][j + 1]).innerHTML != "" && 
    document.getElementById(gameArr[i][j - 1]).innerHTML != "" && 
    document.getElementById(gameArr[i][j]).innerHTML != "" && 
    document.getElementById(gameArr[i][j + 1]).innerHTML != "" && 
    document.getElementById(gameArr[i + 1][j - 1]).innerHTML != "" && 
    document.getElementById(gameArr[i + 1][j]).innerHTML != "" && 
    document.getElementById(gameArr[i + 1][j + 1]).innerHTML != "") {
        loseSound()
        interval = setInterval(()=>{
            table.innerHTML = ""
            createPlayZone()
        },3000)
    }
}


function soundClick() {
    let audio = new Audio(); 
    audio.src = "audio/clickSound.wav"
    audio.autoplay = true
}
function winSound() {
    let audio = new Audio()
    audio.src = "audio/winSound.mp3"
    audio.autoplay = true
}
function loseSound() {
    let audio = new Audio()
    audio.src = "audio/loseSound.wav"
    audio.autoplay = true
}