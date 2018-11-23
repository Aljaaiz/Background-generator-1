let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let h3 = document.getElementsByTagName('h3')[0];
let body = document.getElementById('gradient');
let hexcode = document.getElementById('hexcode');

function gradientGene() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
	h3.textContent = body.style.background + ';';
	hexcode.textContent = `Hexcode Value : ${color1.value} , ${color2.value}`;
}
color1.addEventListener('input', gradientGene);
color2.addEventListener('input', gradientGene);
