async function fetchData() {
	const reqAllData = await fetch(
		"https://pokeapi.co/api/v2/pokemon?limit=36", 
		{
			method: "GET"
		}
	);
	const allData = await reqAllData.json();

	let no = 1;
	pokemons = allData.results;
	for (i=0; i < pokemons.length;i++){
		const reqDataPokemon = await fetch(pokemons[i].url, {
			method: "GET"
		});

		const dataPokemon = await reqDataPokemon.json();

		let namePokemon = pokemons[i].name;
		let urlImage = dataPokemon.sprites.front_default;
		let typePokemon = dataPokemon.types[0].type.name;

		div = document.getElementById("pokemons");

		switch (typePokemon) {
			case "grass":
				bgColor = "#8DD694";
				borderColor = "#5DAD65";
				break;
			case "water":
				bgColor = "#8DC6E6";
				borderColor = "#6F9ECA";
				break;
			case "fire":
				bgColor = "#E69D8D";
				borderColor = "#C67D6D";
				break;
			case "bug":
				bgColor = "#BDDD7A";
				borderColor = "#A2C170";
				break;
			case "normal":
				bgColor = "#B1B1B1";
				borderColor = "#959595";
				break;
			case "flying":
				bgColor = "#C9ADEC";
				borderColor = "#A485CC";
				break;
			case "rock":
				bgColor = "#B99D72";
				borderColor = "#957D59";
				break;
			case "ground":
				bgColor = "#EFBE85";
				borderColor = "#D0A068";
				break;
			case "psychic":
				bgColor = "#D053BC";
				borderColor = "#A44094";
				break;
			case "ghost":
				bgColor = "#835E94";
				borderColor = "#6B4C79";
				break;
			case "dark":
				bgColor = "#C9ADEC";
				borderColor = "#A485CC";
				break;
			case "steel":
				bgColor = "#598FA3";
				borderColor = "#517C8B";
				break;
			case "poison":
				bgColor = "#A55DB1";
				borderColor = "#8A4A95";
				break;
			case "electric":
				bgColor = "#E7C859";
				borderColor = "#D0B34A";
				break;
			case "fairy":
				bgColor = "#EEA1E2";
				borderColor = "#C77FBC";
				break;
			case "fighting":
				bgColor = "#E07F60";
				borderColor = "#B1664F";
				break;
			case "dragon":
				bgColor = "#8859D5";
				borderColor = "#724CAE";
				break;
			case "ice":
				bgColor = "#71D8DE";
				borderColor = "#65C1C6";
				break;
		
			default:
				bgColor = "";
				borderColor = "";
				break;
		};

		blockPokemon = `
		<div style="border: 5px solid ${borderColor}; background-color: ${bgColor};" class="block">
			<h2>${no++}: ${namePokemon}</h2>
			<img src="${urlImage}" alt="">
			<h2>Type: ${typePokemon}</h2>
		</div>`;

		div.innerHTML += blockPokemon;
	};
}