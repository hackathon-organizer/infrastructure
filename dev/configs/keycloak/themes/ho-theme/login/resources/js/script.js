
window.onload = init;

function init(){

url = new URL(window.location.href);

if (url.searchParams.has('registrationRedirect')) {
	document.querySelector("a").click();
} else {
	document.querySelector(".card-pf").style.display = "block";
}
   
}

