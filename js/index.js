var Quotation=new Array() 


Quotation[0] = "Food for thought, life's a buffet.";
Quotation[1] = "Be well to each other, and party on dudes!";
Quotation[2] = "Rinse and repeat.";
Quotation[3] = "Sneeze outloud lest thee fart";
Quotation[4] = "Randomness is defined as...";
Quotation[5] = "Delete not, lest you, too, be deleted.";
Quotation[6] = "Live long and prosper.";
Quotation[7] = "If you break a wishbone, do you hurt the dog?";
Quotation[8] = "When life gives you lemons, make a whiskey sour.";
Quotation[9] = "Change is not change until it is changed. Then and only then will it become change(d).";
Quotation[10] = "Never give up, never surrender.";
Quotation[11] = "This is giving me pathogenic occular dissonance.";
Quotation[12] = "You gotta risk it to get the biscuit.";
Quotation[13] = "Wild Stallions for president!";

function showQuotation(){
var Q = Quotation.length;
var whichQuotation=Math.floor(Math.random()*(Q-1));

document.getElementById("showMe").innerHTML = (Quotation[whichQuotation]);

}
function displayDate(){

	var monthNames = [
	  "January", "February", "March",
	  "April", "May", "June", "July",
	  "August", "September", "October",
	  "November", "December"
	];

	var date = new Date();
	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	console.log(day, monthNames[monthIndex], year);
	document.getElementById("farOut").innerHTML = (monthNames[monthIndex] + ' ' + day + ', ' + year);
}