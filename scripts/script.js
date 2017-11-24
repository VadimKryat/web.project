var selectedColor = "#DCEDC8";
var trTags = document.getElementsByTagName("tr");
for (i = 0; i < trTags.length; i++) {
	var tr = trTags[i];
	tr.onmouseover = mouseOver;
	tr.onmouseout = mouseOut;
}

//Function for change color when mouse over
function mouseOver() {
	this.style.backgroundColor = selectedColor;
}

//Function for change color when mouse out
function mouseOut() {
	this.style.backgroundColor = "";
}

//Hide pers-inf
function toggle() {
	var block = document.getElementById("pers");
	if (block.style.display != "block") {
		block.style.display = "block";
	} else {
		block.style.display = "none";
	}
}

//hendler key event
function handler(event) {
	if (!event) {
		event = window.event;
	}
	var k = event.keyCode;

	var obj;

	if (event.ctrlKey && k == 66) {
		obj = document.getElementById("blog");
	}
	// ctrl + c
	if (event.altKey && k == 67) {
		location.href = "#inp-topic";
	}
	// ctrl + v
	if (event.altKey && k == 86) {
		location.href = "#inp-msg";
	}
	// ctrl + x
	if (event.altKey && k == 88) {
		location.href = "#inp-email";
	}

	if (obj) {
		location.href = obj.href;
	}
}

var opacity = 0;
var time = window.setInterval("start()", 10);
function start() {
	opacity += 0.01;
	document.getElementById("body").style.opacity = opacity;
	if (opacity === 1) {
		clearInterval(time);
	}
}

//init hotkeys
function init() {
	document.onkeydown = handler;
	start();
	setInterval(next, 5000);
}

//validate function
function validate() {
	var emailText = document.forms["inputForm"]["email"].value;
	var topicText = document.forms["inputForm"]["topic"].value;
	var messageText = document.forms["inputForm"]["message"].value;

	if (emailText == "" || topicText == "" || messageText == "") {
		alert("Заполните все поля для ввода.");
		return false;
	}

	var reg = /^([a-zA-Z\d\.]+)(@[a-zA-Z]+\.[a-zA-Z]{2,3})$/;
	if (!reg.test(emailText)) {
		alert("Email введен не верно.");
		return false;
	}

	return true;
}

function showImg(src) {
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img");
	modal.style.display = "block";
	modalImg.src = src;
}

function closes() {
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0]; 
	modal.style.display = "none";
}

// carousel function

//width of img
var width = 340;
//count of img in carousel
var count = 2;

var carousel = document.getElementById("carousel");
var list = carousel.querySelector("ul");
var listElems = carousel.querySelectorAll("li");

var position = 0;
function prev() {
	position = Math.min(position + width * count, 0)
	list.style.marginLeft = position + "px";
}

function next() {
	position = Math.max(position - width * count, -width * (listElems.length - count));
	list.style.marginLeft = position + "px";
}

carousel.querySelector(".prev").onclick = prev;

carousel.querySelector(".next").onclick = next;