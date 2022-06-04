const n=4;
var score = 0;

document.getElementById("Start").addEventListener("click",function() {
    alert("Game Starts!!!");
    game(); 
});

function game() {
	document.getElementById("score").innerHTML = score;

    const A = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

	arr = shuffleArray(A);
    let object = document.getElementById(arr[0]);
    animate(object);

	clicked = [];
	
	p = 0;
	cp = -1;

	for (let i = 0; i < (n*n); i++)
	{
		cell(i).addEventListener("click", cellClick);
	}
}

function cell(i)
{
	return document.getElementById(i);
}

function cellClick()
{
	if (cmp(arr,this.id)) {
		let Id = this.id;
		clicked[++cp] = Id;
	}

	else {
		alert("Game Over!!! You lost... Refresh the page to PLAYAGAIN..  :(");
		let x = document.getElementById("result");
		x.style.color = "red";
		x.innerHTML = "Wrong Box selected. Game over!!! (T T)";
		
	}
	
	rounds();
}

function rounds() {
	if (cp == p)
	{
		document.getElementById("score").innerHTML = ++score;
		
		if (p == ((n*n)-1))
		{
			alert("Congrats!!! You have Won. Refresh to play afresh :)");
			let R = document.getElementById("result");
			R.style.color = "green";
			R.innerHTML = "Congrats ! You have won ! :D";
		}
		
		else
		{
			currentRound(0, arr, ++p);
			clicked = [];
			cp = -1;
		}
	}

}

function cmp(array, id)
{
	for (let i = 0; i <= p; i++)
		if ((array[i]) == id)
			return true;
	return false;
}

function currentRound(i, arr, p)
{
	if (i > p) return;
	animate(cell(arr[i]));
	setTimeout(function() { currentRound(i+1, arr, p); }, 1000);
}

function animate(pmter)
{
	pmter.setAttribute("class", "animationClass");
	setTimeout(function() {
		pmter.removeAttribute("class");
	}, 1000);
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--)
	{
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}