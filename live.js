const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e02aa7529mshb2939f2090341c7p1f8815jsnf60e26c0d34e',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options)
	.then(response => response.json())
	.then(response => {
		let k=0;
for(let i=0;i<response.typeMatches.length;i++){
  if(response.typeMatches[i].matchType === "League"){
	k=i;
  }
}
const match =response.typeMatches[k].seriesMatches[0].seriesAdWrapper.matches[0];
let mathId =match.matchInfo.matchId;
console.log(mathId);
const mat =match.matchInfo;
const matSc =match.matchScore;
const run1 =matSc.team1Score.inngs1
let run2 =0;
// let run2.wickets =0;
if(run1.overs === 19.6 || run1.wickets === 10){
	run2 =matSc.team2Score.inngs1 
	// console.log("prasanna");
}
const first = mat.matchFormat;
const second = mat.matchDesc;
var headTitle =first + " " +second;
const date = parseInt(mat.startDate);
const team1 = mat.team1;
const team2 = mat.team2;
const team1Name= team1.teamName;
const team2Name= team2.teamName;
const image1= setImage(team1Name);
const image2= setImage(team2Name);
let wickets1 =run1.wickets;
let wickets2 =run2.wickets;
if(wickets1 === undefined){
	wickets1 =0
}
if(wickets2 === undefined){
	wickets2 =0
}
let scorce =  run2.runs;
let overs = run2.overs
if( scorce=== undefined ){

	scorce = 0
}
if( overs=== undefined ){

	overs = 0
}



let url = 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/'+ `${mathId}` +'/overs';
console.log(url);
		fetch(url, options)
	.then(response => response.json())
	.then(response =>  { 
    const matches =response;
	const batsmanNonStriker = matches.batsmanNonStriker;
	const batsmanStriker = matches.batsmanStriker;
	const bowlerNonStriker = matches.bowlerNonStriker;
	const bowlerStriker = matches.bowlerStriker;
	
    const team1= matches.matchHeader.team1.name;
    const team2= matches.matchHeader.team2.name;
    const desc= matches.matchHeader.matchDescription;
    const status= matches.matchHeader.status;
	


	console.log(matches);

const contanier = document.querySelector('.grid');
// console.log(contanier);

           


const content =`<header class="teamname">
<p>
	${team1} <span>Vs</span> ${team2}, ${desc}  - Live
	Cricket Score, Commentary
</p>
</header>
<div class="livescore">
<div class="batting_score">
	<img src="${setImage(team2)}" class="team_logo"><h2>${team1Name}  ${run1.runs}/${wickets1} (${run1.overs})  </h2>
</div>
<p>${status}</p>
</div>
<div class="livescore">
<div class="batting_score">
	<img src="${setImage(team1)}" class="team_logo"><h2>${team2Name}  ${scorce}/${wickets2} (${overs})  </h2>
</div>
<p>${mat.status}</p>
</div>
<div class="batsman">
<div class="head">
	<p>Batsman</p>
	<ul>
		<li>R</li>
		<li>B</li>
		<li>4s</li>
		<li>6s</li>
		<li>SR</li>
	</ul>
</div>
<div class="batter">
<p>${batsmanStriker.batName} *</p>
<ul>
	<li>${batsmanStriker.batRuns}</li>
	<li>${batsmanStriker.batBalls}</li>
	<li>${batsmanStriker.batFours}</li>
	<li>${batsmanStriker.batSixes}</li>
	<li>${batsmanStriker.batStrikeRate}</li>
	</ul>
</div>
<div class="batter">
	<p>${batsmanNonStriker.batName}</p>
	<ul>
		<li>${batsmanNonStriker.batRuns}</li>
		<li>${batsmanNonStriker.batBalls}</li>
		<li>${batsmanNonStriker.batFours}</li>
		<li>${batsmanNonStriker.batSixes}</li>
		<li>${batsmanNonStriker.batStrikeRate}</li>
	</ul>
</div>
</div>
<div class="bowler">
<div class="head">
	<p>Bowler</p>
	<ul>
		<li>O</li>
		<li>M</li>
		<li>R</li>
		<li>W</li>
		<li>ECO</li>
	</ul>
</div>
<div class="thrower">
	<p> ${bowlerStriker.bowlName}*</p>
	<ul>
		<li>${bowlerStriker.bowlOvs}</li>
		<li>${bowlerStriker.bowlMaidens}</li>
		<li>${bowlerStriker.bowlRuns}</li>
		<li>${bowlerStriker.bowlWkts}</li>
		<li>${bowlerStriker.bowlEcon}</li>
	</ul>
</div>
<div class="thrower">
<p> ${bowlerNonStriker.bowlName}</p>
<ul>
	<li>${bowlerNonStriker.bowlOvs}</li>
	<li>${bowlerNonStriker.bowlMaidens}</li>
	<li>${bowlerNonStriker.bowlRuns}</li>
	<li>${bowlerNonStriker.bowlWkts}</li>
	<li>${bowlerNonStriker.bowlEcon}</li>
	</ul>
</div>
</div>`;

contanier.innerHTML +=content;
setTimeout(()=>{
    window.location.reload();
   
},60000)

}


).catch(err => console.error(err))
}
)
	.catch(err => console.error(err));




    
function setImage(name) {
	
	if(name === "Punjab Kings"){
     return "pbks.png";
	}else if(name === "Lucknow Super Giants"){
		return "lsg.png";
	}else if(name === "Delhi Capitals"){
		return "dc.png";
	}else if(name === "Rajasthan Royals"){
		return "rr.png";
	}else if(name === "Sunrisers Hyderabad"){
		return "srh.png";
	}else if(name === "Kolkata Knight Riders"){
		return "kkr.png";
	}else if(name === "Royal Challengers Bangalore"){
		return "rcb.png";
	}else if(name === "Mumbai Indians"){
		return "mi.png";
	}else if(name === "Chennai Super Kings"){
		return "csk.png";
	}else if(name === "Gujarat Titans"){
		return "gt.png";
	}



}













//Rohan's Code
function mode() {
	var ts = document.getElementById("toogleSun");
	ts.classList.toggle("toogleMoon");
	document.body.classList.toggle("bdy");
}