const data = data_json;

const boton = document.querySelector('input');
boton.addEventListener('click', click);

setData(data_json.movies[0]);
// canales();

function click(dato) {
	console.log('>>>>>>', data_json);
	console.log('>>>>>>', dato);
}

function setData(movie) {
	document
		.querySelector('.canalimg')
		.style.setProperty(
			'background-image', // logo del canal seleccionado
			`url('img/channel/${movie.channel.number}.png')`
		);
	document
		.querySelector('.banner')
		.style.setProperty('background-image', `url('img/poster/${movie.id}.jpg')`);
	document.querySelector('.detalle').innerHTML = movie.description;
	document.querySelector('.nombre').innerHTML = movie.channel.name;
	document.querySelector('.numero').innerHTML = movie.channel.number;
	document.querySelector(
		'.publico'
	).innerHTML = `<h2>${movie.title}</h2><div>${movie.category} | ${movie.clasification} | ${movie.duration} min </div>`;
}

function canales() {
	data_json.movies.forEach((movie) => {
		document.querySelector('.canales').insertAdjacentHTML(
			'beforeend',
			`
                <div class="canal" id=${movie.id} >
                     <div class="contenedorcanalinfo" id=${movie.id}>
                        <div class="canalimg" style="background-image: url('img/channel/${movie.channel.number}.png')"></div>
                        <div class="nombre" >${movie.channel.name}</div>
                        <div class="numero" >${movie.channel.number}</div>
                     </div>
                  </div>`
		);
		document
			.getElementById(`${movie.id}`)
			.addEventListener('click', function (event) {
				var id;
				if (event.target.id) {
					id = event.target.id;
				} else {
					id = event.target.parentElement.id;
				}
				let m = data_json.movies.filter((movie) => movie.id === id);
				if (m.length === 1) {
					setData(m[0]);
				}
			});
	});
}

function canalesDos() {
	data.movies.forEach((movie) => {
		document.querySelector('.canales').insertAdjacentHTML(
			'beforeend',
			`
                <div class="canal" id=${movie.id} >
                     <div class="contenedorcanalinfo" id=${movie.id}>
                        <div class="canalimg" style="background-image: url('img/channel/${movie.channel.number}.png')"></div>
                        <div class="nombre" >${movie.channel.name}</div>
                        <div class="numero" >${movie.channel.number}</div>
                     </div>
                  </div>`
		);
		document
			.getElementById(`${movie.id}`)
			.addEventListener('click', function (event) {
				setData(movie);
			});
	});
}
canalesDos();