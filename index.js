let listaArtistas = [
	{ nome: "Maria Rita", estiloMusical: "MPB", diasDisponiveis: ["sábado", "domingo"] },
	{
		nome: "Emicida",
		estiloMusical: "Rap",
		diasDisponiveis: ["sexta-feira", "sábado"]
	},
	{
		nome: "Liniker",
		estiloMusical: "Soul",
		diasDisponiveis: ["quinta-feira", "domingo"]
	},
	{
		nome: "Duda Beat",
		estiloMusical: "Pop",
		diasDisponiveis: ["quarta-feira", "sexta-feira"]
	}
];

const cadastrarArtista = (nome, estiloMusical, diasDisponiveis) => {
	const novoArtista = {
		nome,
		estiloMusical,
		diasDisponiveis
	};
	// console.log(novoArtista);
	if (novoArtista.artista == "" || novoArtista.diasDisponiveis == "" || novoArtista.diasDisponiveis == "") {
		alert("Todos os Campos Precisam estar preenchidos");
	} else {
		listaArtistas.push(novoArtista);
		// console.log(`Cadastro do artista ${novoArtista} feito com sucesso!`);
	}
};

const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.onclick = (evento) => {
	evento.preventDefault();
	let inputArtista = document.querySelector("#nomeArtista");
	let inputEstiloMusical = document.querySelector("#estilo-musical");

	cadastrarArtista(
		inputArtista.value,
		inputEstiloMusical.value,
		[...document.querySelectorAll("#dias-disponiveis :checked")].map((option) => option.value)
	);

	exibirArtistas();
};

function exibirArtistas() {
	let todosArtistas = "";

	for (let index = 0; index < listaArtistas.length; index++) {
		todosArtistas += `<article class="card">
					<h2>${listaArtistas[index].nome}</h2>
					<p>Estilo Musical: ${listaArtistas[index].estiloMusical}</p>
					<p>Dias Disponiveis: ${listaArtistas[index].diasDisponiveis}</p>        
				</article>`;
		let painelArtistas = document.querySelector(".painel-artistas");

		painelArtistas.innerHTML = todosArtistas;
	}
}

exibirArtistas();

const btnBuscar = document.querySelector("#btnBuscar");

const buscarDias = (termoBuscado) => {
	console.log(termoBuscado);
	let artistasDisponiveis = [];

	for (let i = 0; i < listaArtistas.length; i++) {
		const ar = listaArtistas[i].diasDisponiveis.filter((value) => {
			return value == termoBuscado;
		});
		if (ar != "") {
			artistasDisponiveis.push(listaArtistas[i].nome);
		}
	}
	let painelBusca = document.querySelector(".painel-busca");
	painelBusca.innerHTML = `<h2>Artistas Disponiveis</h2>
					<h3>${artistasDisponiveis}</h3>`;
};

btnBuscar.onclick = (evento) => {
	evento.preventDefault();
	let diaDisponivel = document.querySelector("#dias-disponivel");

	buscarDias(diaDisponivel.value);
};
