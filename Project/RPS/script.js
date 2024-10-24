//Score Card

const compScore = document.getElementById("comp_score");
const userScore = document.getElementById("UserScore");

 

//Play Area

const playArea = document.getElementById("PlayArea");

//ResultBoard

const resultPage = document.getElementById("ResultPage");
const userResult = document.querySelector(".UserResult");
const pcResult = document.querySelector(".PC_Rresult");
let result1 = document.getElementById("Result_1");
let result2 = document.getElementById("Result_2");
let picked = document.querySelectorAll(".picked");

//Button

const rulesBtn = document.querySelectorAll(".rules_btn");
const nextBtn = document.getElementById("next-btn");
const playAgainbtn = document.querySelector("#play-again");
const replay = document.querySelector("#replay");
const closeModal = document.getElementById("close");

//-Rules Modal

const rulesModal = document.getElementById("rules-modal");

//Won Game

const GameWon = document.querySelector(".game_won");

// | SCORE |

let score = {
  user: 0,
  computer: 0,

};

// LOCAL STORAGE -- GET SCORE

if (localStorage.getItem("score")) {

  score = JSON.parse(localStorage.getItem("score"));

}

userScore.innerHTML = score.user;
compScore.innerHTML = score.computer;

// RESULT

const result = {
  WIN: "YOU WIN",
  LOST: "YOU LOST",
  TIEUP: "TIE UP",

};

// | EVENT LISTENERS |

rulesBtn.forEach((element) => {
  element.addEventListener("click", () => {
    rulesModal.style.display = "block";

  });

}); 

closeModal.addEventListener("click", () => {
  rulesModal.style.display = "none";

});
 

nextBtn.addEventListener("click", () => {
 playArea.style.display = "none";
  resultPage.style.display = "none";
  GameWon.style.display = "flex";

});

playAgainbtn.addEventListener("click", playAgain);
replay.addEventListener("click", playAgain);

// | FUNCTIONS |

function playAgain() {
  playArea.style.display = "grid";
  resultPage.style.display = "none";
  GameWon.style.display = "none";
  nextBtn.style.display = "none";
}

// computer Picks

const computer = ["rock", "paper", "scissor"];

function compPicked() {
  let picked = Math.floor(Math.random() * computer.length);
  return computer[picked];
}

function setImg(picked) {
  let img = `<img src="imgs/${picked}.png" alt=${picked} width="60px"/>`;
  return img;
}
function setStyles() {

  resultPage.style.marginTop = "3rem";
  picked.forEach((element) => {
    element.style.top = "300px";
  });

  for (let index = 0; index < 3; index++) {

    userResult.classList.remove("rock-click");
    userResult.classList.remove("paper-click");
    userResult.classList.remove("scissor-click");
    pcResult.classList.remove("rock-click");
    pcResult.classList.remove("paper-click");
    pcResult.classList.remove("scissor-click");
    playAgainbtn.style.display = "block";
    result2.style.display = "block";
    replay.style.display = "none";
  nextBtn.style.display = "none";
  }

}

// | GAME START |

const startGame = (userPicked) => {

  let pcPicked = compPicked();
  setStyles();
  let res;
  if (userPicked === pcPicked) {
    res = result.TIEUP;
    removeFocus();
    playAgainbtn.style.display = "none";
    replay.style.display = "block";
    result2.style.display = "none";
    picked.forEach((element) => {
      element.style.top = "256px";
    });
    resultPage.style.marginTop = "90px";
  }

  else if (
    (userPicked === "rock" && pcPicked === "scissors") ||
    (userPicked === "paper" && pcPicked === "rock") ||
    (userPicked === "scissors" && pcPicked === "paper")

  ) {
    res = result.WIN;
    nextBtn.style.display = "block";

    focusOnUserWinner();
    // UPDATE score when USER wins
   score.user++;
  }

  else {
    res = result.LOST;

    focusOnPCWinner();
    // UPDATE SCORE when USER lost
    score.computer++;
  }
  playArea.style.display = "none";
  resultPage.style.display = "flex";
  // RESULT BOARD
  userResult.classList.add(`${userPicked}-div`);
  pcResult.classList.add(`${pcPicked}-div`);
  userResult.innerHTML = setImg(userPicked);
  pcResult.innerHTML = setImg(pcPicked);
  result1.innerHTML = res;
  // SCORE BOARD
  userScore.innerHTML = score.user;
  compScore.innerHTML = score.computer;
  // SAVING SCORE IN LOCAL STRORAGE
  localStorage.setItem("score", JSON.stringify(score));

};

// | GAME END |

 

// Winner Focus Boxes

let winUserBox1 = document.querySelector(".box-user1");
let winUserBox2 = document.querySelector(".box-user2");
let winUserBox3 = document.querySelector(".box-user3");
let winPcBox1 = document.querySelector(".box-pc1");
let winPcBox2 = document.querySelector(".box-pc2");
let winPcBox3 = document.querySelector(".box-pc3");

let focusOnUserWinner = () => {

  winPcBox1.classList.remove("winner-1");
  winPcBox2.classList.remove("winner-2");
  winPcBox3.classList.remove("winner-3");
  winUserBox1.classList.add("winner-1");
  winUserBox2.classList.add("winner-2");
  winUserBox3.classList.add("winner-3");

};

let focusOnPCWinner = () => {

  winUserBox1.classList.remove("winner-1");
  winUserBox2.classList.remove("winner-2");
  winUserBox3.classList.remove("winner-3");
  winPcBox1.classList.add("winner-1");
  winPcBox2.classList.add("winner-2");
  winPcBox3.classList.add("winner-3");

};

let removeFocus = () => {

  winUserBox1.classList.remove("winner-1");
  winUserBox2.classList.remove("winner-2");
  winUserBox3.classList.remove("winner-3");
  winPcBox1.classList.remove("winner-1");
  winPcBox2.classList.remove("winner-2");
  winPcBox3.classList.remove("winner-3");

};

 