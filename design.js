const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListner("click", navToggle);

function navToggle() {
	navToggler.classList.toggle("active");
	const nav = document.querySelector(".nav");
	nav.classList.toggle("open");
	if(nav.classList.contains("open")){
		nav.style.maxheight = nav.scrollHeight + "px";

	}else{
		nav.removeAttribute("style");
	}
}