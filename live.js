const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e02aa7529mshb2939f2090341c7p1f8815jsnf60e26c0d34e',
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/66204/overs', options)
	.then(response => response.json())
	.then(response => {
		const matches = response;
		console.log(matches);

		const contanier = document.querySelector('.grid');
		// console.log(contanier);



		const content = `<header class="teamname">
<p>
	Punjab Kings <span>Vs</span> Kolkata Knight Riders, 2nd Match - Live
	Cricket Score, Commentary
</p>
</header>
<div class="livescore">
<div class="batting_score">
	<img src="pbks.png" class="team_logo"><h2>PBKs 91/1 (9) <span>CRR:10.03</span></h2>
</div>
<p>Kolkata Knight Riders opt to bowl</p>
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
	<p>Shikhar Dhawan *</p>
	<ul>
		<li>16</li>
		<li>13</li>
		<li>3</li>
		<li>0</li>
		<li>121.07</li>
	</ul>
</div>
<div class="batter">
	<p>Bhanuka Rajapaksa *</p>
	<ul>
		<li>44</li>
		<li>24</li>
		<li>5</li>
		<li>2</li>
		<li>183.33</li>
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
	<p>Shardul Thakur *</p>
	<ul>
		<li>2</li>
		<li>0</li>
		<li>20</li>
		<li>1</li>
		<li>10.00</li>
	</ul>
</div>
<div class="thrower">
	<p>Umesh Yadav *</p>
	<ul>
		<li>2</li>
		<li>0</li>
		<li>35</li>
		<li>0</li>
		<li>17.50</li>
	</ul>
</div>
</div>`;

		contanier.innerHTML += content;

	}


	).catch(err => console.error(err));


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














//Rohan's Code
function mode() {
	var ts = document.getElementById("toogleSun");
	ts.classList.toggle("toogleMoon");
	document.body.classList.toggle("bdy");
}