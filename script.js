const btn = document.createElement('button');
btn.setAttribute('type','button');
btn.setAttribute('class','btn btn-primary');
const isi = document.createTextNode('ganti');
btn.appendChild(isi);
const tmbl = document.getElementById('tmbl');
tmbl.after(btn);
const all = document.getElementsByClassName
('container');
const ali = document.getElementsByClassName
('jumbotron');
const boo = document.getElementById('portfolio');
const jdlGanti = document.createElement('h4');
const isiJdl   = document.createTextNode('ganti background');
jdlGanti.appendChild(isiJdl);
tmbl.after(jdlGanti);
const gantikntk = document.querySelectorAll('section#contact div ul li');







//function deklarasi

    
btn.addEventListener('click', function() {
	document.body.classList.toggle('dark');

	
}
)
btn.addEventListener('click', function() {
	boo.classList.toggle('dark');
	

	})

btn.addEventListener('click', function() {
	 for (let i = 0; i < all.length; i++) {
	 	all[i].classList.toggle('dark');
	 }
		
	
}
)
btn.addEventListener('click', function() {
	 for (let i = 0; i < ali.length; i++) {
	 	ali[i].classList.toggle('dark');
	 }
		
	
}
)
btn.addEventListener('click', function() {
	 for (let i = 0; i < gantikntk.length; i++) {
	 	gantikntk[i].classList.toggle('tulisan');
	 }
	 	
	
}
)











