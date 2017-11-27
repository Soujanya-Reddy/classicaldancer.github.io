var myHeading = document.querySelector('h1');
myHeading.textContent = 'A Kuchipudi Dancer!';

var imageChange = document.querySelector("#photo");
imageChange.onclick = function() {
	var mySrc = imageChange.getAttribute('src');
	if(mySrc === "images/kuchipudidancer.jpg") {
		imageChange.setAttribute('src', 'images/kuchipudidancer1.jpg');
	} else {
		imageChange.setAttribute('src', 'images/kuchipudidancer.jpg');
	}
}

var myButton = document.querySelector('button');


function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome ' +myName;
}

/*if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome ' +storedName;
} */

myButton.onclick = function() {
	setUserName();
}