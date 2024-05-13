const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count = 0;

increase.onclick = function(){
	count++;
	myH1.textContent = count;
}
decrease.onclick = function(){
	count--;
	myH1.textContent = count;
}
reset.onclick = function(){
	count = 0;
	myH1.textContent = count;
}