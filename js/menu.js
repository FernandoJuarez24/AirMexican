const enlaces = document.querySelectorAll('ul li a');
const boton = document.querySelector('.btnMenu');
const menu = document.querySelector('.menuLista');
let onMenu = true;

enlaces.forEach((link) => {

	var links = link.innerText;
	link.dataset.text = links;

	link.addEventListener('mouseover', () =>{
		menu.style.background = "none";
	});

	link.addEventListener('mouseout', () =>{
		menu.style.background = "rgba(255, 255, 255, 0.6)";
	});

});


boton.addEventListener('click', () => {

	document.querySelector('.btnMenu i').classList.toggle('fa-times');

	if(onMenu){
		menu.style.left = "0";
		menu.style.transition = '300ms'

		onMenu= false;
	}else{
		onMenu = false;

		menu.style.left = "-100%";
		menu.style.transition = '300ms'

		onMenu = true;
	}
});