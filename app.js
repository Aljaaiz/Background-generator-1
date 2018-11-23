let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let h3 = document.getElementsByTagName('h3')[0];
let body = document.getElementById('gradient');

function gradientGene() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
	h3.textContent = body.style.background + ';';
}
color1.addEventListener('input', gradientGene);
color2.addEventListener('input', gradientGene);
