//selecting all required elements
const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");
console.log("hii")

window.onload=()=>{
    allBox.forEach(element => {
        element.setAttribute("onclick","checkbox(this)")
    });
}

selectBtnX.onclick=()=>{
    selectBox.classList.add("hide")
    playBoard.classList.add("show")
}
selectBtnO.onclick=()=>{
    selectBox.classList.add("hide")
    playBoard.classList.add("show")
    players.setAttribute("class", "players active player");
}
PlayersignX="X"
PlayersignO="O"
Sign="X"
runBot=true
function checkbox(element){
    if(players.classList.contains("player")){
        element.innerHTML=`<li>${PlayersignO}</li>`
        element.setAttribute("id",`${PlayersignO}`)
        players.classList.remove("active"); 
    }else{
        element.innerHTML=`<li>${PlayersignX}</li>`
        element.setAttribute("id",`${PlayersignX}`)
        players.classList.add("active")
    }
    checkwinner()
    element.style.pointerEvents = "none"; 
    playBoard.style.pointerEvents = "none"; 
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed(); //generating random number so bot will randomly delay to select unselected box
    setTimeout(()=>{
        bot(runBot); //calling bot function
    }, randomTimeDelay); //passing random delay value
   
}

function bot(){
    let array = []; //creating empty array...we'll store unclicked boxes index
    console.log(array)
    if(runBot){ //if runBot is true
        playerSign = "O"; //change the playerSign to O so if player has chosen X then bot will O
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){ //if the box/span has no children means <i> tag
                array.push(i); //inserting unclicked boxes number/index inside array
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)]; //getting random index from array so bot will select random unselected box
        if(array.length > 0){ //if array length is greater than 0
            if(players.classList.contains("player")){ 
                playerSign = "X"; //if player has chosen O then bot will X
                allBox[randomBox].innerHTML = `<li>${PlayersignX}</li>`; //adding cross icon tag inside bot selected element
                allBox[randomBox].setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
                players.classList.add("active"); ///add active class in players
            }else{
                allBox[randomBox].innerHTML = `<li>${PlayersignO}</li>`; //adding circle icon tag inside bot selected element
                allBox[randomBox].setAttribute("id", playerSign); //set id attribute in span/box with player choosen sign
                players.classList.remove("active"); //remove active class in players
            }
            checkwinner(); //calling selectWinner function
        }
        allBox[randomBox].style.pointerEvents = "none"; //once bot select any box then user can't click on that box
        playBoard.style.pointerEvents = "auto"; //add pointerEvents auto in playboard so user can again click on box
        playerSign = "X"; //if player has chosen X then bot will be O right then we change the playerSign again to X so user will X because above we have changed the playerSign to O for bot
    }
}


function getIdVal(value){
    let a=document.querySelector(".box"+value).id
    return a;
}
function check(val1,val2,val3,ele){
    if(getIdVal(val1)==ele && getIdVal(val2)==ele && getIdVal(val3)==ele){
        return true
    }
}
function checkwinner(){
    if(check(1,2,3,Sign) ||  check(4,5,6, Sign) || check(7,8,9, Sign) || check(1,4,7, Sign) || check(2,5,8, Sign) || check(3,6,9, Sign) || check(1,5,9, Sign) || check(3,5,7, Sign)){
        runBot=false
        setTimeout(()=>{ //after match won by someone then hide the playboard and show the result box after 700ms
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700); //1s = 1000ms
        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`; //displaying winning text with passing playerSign (X or O)
    }
    else{ //if all boxes/element have id value and still no one win then draw the match
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false; //passing the false boolen value to runBot so bot won't run again
            bot(runBot); //calling bot function
            setTimeout(()=>{ //after match drawn then hide the playboard and show the result box after 700ms
                resultBox.classList.add("show");
                playBoard.classList.remove("show");
            }, 700); //1s = 1000ms
            wonText.textContent = "Match has been drawn!"; //displaying draw match text
        }
    }
}

replayBtn.onclick = ()=>{
    window.location.reload(); //reload the current page on replay button click
}