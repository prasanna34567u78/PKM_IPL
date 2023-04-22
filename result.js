const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e02aa7529mshb2939f2090341c7p1f8815jsnf60e26c0d34e',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', options)
	.then(response => response.json())
	.then(response => {
		const matches = response.typeMatches[1].seriesMatches[0].seriesAdWrapper.matches;
		// console.log(matches);
		const contanier = document.querySelector('.grid');
		// console.log(contanier);
		matches.forEach(match => {

			const mat = match.matchInfo;
			const math = match.matchInfo.matchId;

			const first = mat.matchFormat;
			const second = mat.matchDesc;
			const matSc = match.matchScore;
			const run1 = matSc.team1Score.inngs1
			const run2 = matSc.team2Score.inngs1
			var headTitle = first + " " + second;
			const date = parseInt(mat.startDate);
			const team1 = mat.team1;
			const team2 = mat.team2;
			const team1_name = team1.teamSName;
			const team2_name = team2.teamSName;
			const team1Name = team1.teamName;
			const team2Name = team2.teamName;
			const image1 = setImage(team1Name);
			const image2 = setImage(team2Name);


			const content = ` <div class="card">
<div class="head">
	<p>${headTitle}</p>
	<p><b>${mat.state}</b></p>
</div>
	<div class="teams">
		<div class="team1">
			<img class="team_logo" src="${image1}">
			<p>${team1_name}</p>
           <p> ${run1.runs}/${run1.wickets} (${run1.overs}) </p> 

		</div>
		<div class="team1">
			<img class="team_logo" src="${image2}">
			<p>${team2_name}</p>
          <p>  ${run2.runs}/${run2.wickets} (${run2.overs}) </p>
		</div>
	</div>
	<div class="time">
		<p><b>${mat.status}<b></p>
	</div>
</div>`;

			contanier.innerHTML += content;


		});

	}).catch(err => console.error(err));


function setImage(name) {

	if (name === "Punjab Kings") {
		return "pbks.png";
	} else if (name === "Lucknow Super Giants") {
		return "lsg.png";
	} else if (name === "Delhi Capitals") {
		return "dc.png";
	} else if (name === "Rajasthan Royals") {
		return "rr.png";
	} else if (name === "Sunrisers Hyderabad") {
		return "srh.png";
	} else if (name === "Kolkata Knight Riders") {
		return "kkr.png";
	} else if (name === "Royal Challengers Bangalore") {
		return "rcb.png";
	} else if (name === "Mumbai Indians") {
		return "mi.png";
	} else if (name === "Chennai Super Kings") {
		return "csk.png";
	} else if (name === "Gujarat Titans") {
		return "gt.png";
	}



}


function mode() {
	var ts = document.getElementById("toogleSun");
	ts.classList.toggle("toogleMoon");
	document.body.classList.toggle("bdy");
}