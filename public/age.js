var div = document.querySelector("#main");
var yearToday = new Date().getFullYear();

div.addEventListener("click",function(e){
	var each = e.target.parentNode;
	var bDay = Number.parseInt(each.children[1].textContent);
	var tag = document.createElement("p"); 
	tag.innerHTML = "The age in years "+(yearToday-bDay)+". The age in months "+((yearToday-bDay)*12)+". The age in days "+((yearToday-bDay)*365.25);
	each.appendChild(tag);
});