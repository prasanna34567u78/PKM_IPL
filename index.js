const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e02aa7529mshb2939f2090341c7p1f8815jsnf60e26c0d34e',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', options)
	.then(response => response.json())
	.then(response =>  { 

let k=-1;
for(let i=0;i<response.typeMatches.length;i++){
  if(response.typeMatches[i].matchType === "League"){
	k=i;
  }
}
console.log(response);

const matches =response.typeMatches[k].seriesMatches[0].seriesAdWrapper.matches;
 
const contanier = document.querySelector('.grid');

matches.forEach(match => {
    
const math =match.matchInfo.MatchId;
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
const team1_name = team1.teamSName;
const team2_name = team2.teamSName;
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


if(mat.state === "In Progress" || mat.state === "Innings Break"){
	const hid =  document.getElementById('hidden');
hid.style.display = "none";
const content =` <div class="card">
<div class="head">
	<p>${headTitle}</p>
	<p><b>${mat.state}</b></p>
</div>
	<div class="teams">
		<div class="team1">
			<img class="team_logo" src="${image1}">
			<p>${team1_name}</p>
           <p> ${run1.runs}/${wickets1} (${run1.overs}) </p>
		</div>
		<div class="team1">
			<img class="team_logo" src="${image2}">
			<p>${team2_name}</p>
			<p>${scorce}/${wickets2} (${overs}) </p>
		</div>
	</div>
	<div class="time">
		<p>${mat.status}</p>
	</div>
</div>`;

contanier.innerHTML +=content;
setTimeout(()=>{
    window.location.reload();
   
},60000)

}else{
	const hid =  document.getElementById('hidden');
hid.style.display = "none";
    contanier.innerHTML = `<h1>Ings Break <h1>`;
}

   });

   const grid = document.querySelector('.grid');
grid.addEventListener('click',()=>{
    location.href = "live.html"
})

}).catch(err => console.error(err));

    
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
