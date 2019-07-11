let humanScoreBoard = document.getElementById('hScore');
let aiScoreBoard = document.getElementById('aiScore');
let statusBoard = document.getElementById('status');
let area = document.getElementById('area');
let humanScore = 0, aiScore = 0;

let humanWeapon;
let aiWeapon;

window.addEventListener("load", (e)=>{
	if (localStorage.humanScore == undefined && localStorage.aiScore == undefined) {
		document.getElementById("playGround").classList.add( "hide");
		console.log("no data");
		humanScoreBoard.innerHTML = 0;
		aiScoreBoard.innerHTML = 0;
	} else {
		document.getElementById("intro").classList.add ("hide");
		console.log("data available");
		humanScoreBoard.innerHTML = humanScore = localStorage.humanScore;
		aiScoreBoard.innerHTML = aiScore = localStorage.aiScore;
	}
});

function weep(){
	localStorage.clear();
	location = "index.html";
}

// page display section
function swapPage(helm, selm){
	let helt = document.getElementById(helm);
	let selt = document.getElementById(selm);
	helt.classList.toggle("hide");
	selt.classList.toggle("hide");
}

// document.getElementById("intro").style.display = "none"


// ****

// game section

function updateScroes(){
	humanScoreBoard.innerHTML = humanScore;
	aiScoreBoard.innerHTML = aiScore;
}

function gameStatus(v){
	if ("rs") {
		return "Rock beat scissors";
	} else if ("pr") {
		return "Paper beat rock";
	} else if ("sp") {
		return "Scissors beat paper";
	} else {
		return "";
	}
}

function compute(h, ai){
	let choiceValues = h + ai; 

	console.log(choiceValues);
	if (humanScore < aiScore) {
		area.style.transition = ".7s";
		area.style.backgroundColor = "#ff040433";
	} else {
		area.style.backgroundColor = "transparent";
		area.style.transition = ".7s";
	}

	if(choiceValues == "rs" || choiceValues == "pr" ||choiceValues == "sp"){
		// updateScroes();
		humanScore++;
		statusBoard.innerHTML = "You win. "+ gameStatus(choiceValues);
		statusBoard.style.color = "#0f3";
	}else if (choiceValues == "sr" || choiceValues == "rp" ||choiceValues == "ps") {
		aiScore++;
		// updateScroes();
		statusBoard.innerHTML = "You lose. "+ gameStatus(choiceValues);
		statusBoard.style.color = "red";
	} else if(choiceValues == "rr" || choiceValues == "pp" ||choiceValues == "ss") {
		// updateScroes();
		statusBoard.innerHTML = "It's a draw. "+ gameStatus(choiceValues);
		statusBoard.style.color = "white";
	}
}

function humanChoice(e){
	humanWeapon = e;
}

function pickOption(e){
	aiChoice();
	humanChoice(e);
}

function aiChoice(){
	aiOption = Math.floor((Math.random()*3)+1)

	if (aiOption == 1) {
		aiWeapon = "r";
	} else if(aiOption == 2){
		aiWeapon = "p";
	}else if (aiOption == 3) {
		aiWeapon = "s";
	}
	console.log(`ai - ${aiWeapon}`);
}

function win(){
	updateScroes();
}

function draw(){
	updateScroes();
}

function lose(){
	updateScroes();
}

function game(){


	if (humanScore >= 10 && aiScore <= 10) {
		statusBoard.innerHTML = "<h1>You win.</h1>";
		humanScore = aiScore = 0;
		// weep();

	} else if(aiScore >= 10 && humanScore <= 10) {
		statusBoard.innerHTML = "<h1>You lose. Game over</h1>";
		humanScore = aiScore = 0;
		// weep();
	}else{
		compute(humanWeapon, aiWeapon);
		updateScroes();
		console.log(`human: ${humanScore} | ai ${aiScore}`);
		localStorage.humanScore = humanScore;
		localStorage.aiScore = aiScore;
	}
	
}

