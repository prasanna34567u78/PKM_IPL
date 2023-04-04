const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e02aa7529mshb2939f2090341c7p1f8815jsnf60e26c0d34e',
		'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
	}
};

fetch('https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=live', options)
	.then(response => response.json())
	.then(response => { 
    const matches =response.typeMatches[1].seriesAdWrapper[0].seriesMatches.matches;

const contanier = document.querySelector('.grid');
console.log(contanier);
matches.forEach(match => {
    
const mat =match.matchInfo;
const matSc =match.matchScore;
const run1 =matSc.team1Score.inngs1
const run2 =matSc.team2Score.inngs1
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

if(mat.state === "In Progress"){


const content =` <div class="card">
<div class="head">
	<p>${headTitle}</p>
	<p><b>${mat.state}</b></p>
</div>
	<div class="teams">
		<div class="team1">
			<img class="team_logo" src="${image1}">
			<p>${team1Name}</p>
            ${run1.runs}/${run1.wickets} (${run1.overs}) 
		</div>
		<div class="team1">
			<img class="team_logo" src="${image2}">
			<p>${team2Name}</p>
            ${run2.runs}/${run2.wickets} (${run2.overs})  
		</div>
	</div>
	<div class="time">
		<p>${mat.status}</p>
	</div>
</div>`;

contanier.innerHTML +=content;
setTimeout(()=>{
    window.location.reload();
    // console.log("prasanna");
},10000)

}else{
    contanier.innerHTML = `<h1> Currently no live matches are there <h1>`;
}
   });

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

const grid = document.querySelector('.grid');
grid.addEventListener('click',()=>{
    location.href = "live.html"
})

