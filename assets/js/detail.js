import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm'

export async function detailPokemon(id) {
    console.log(id);
    try {
        // Send GET request to Pokémon API
        const pokeDetail = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokemon = new Pokemon()
        pokemon.number = pokeDetail.id
        pokemon.name = pokeDetail.name

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types


        const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
        const [ability] = abilities

        pokemon.height = pokeDetail.height
        pokemon.weight = pokeDetail.weight

        // Carregue os detalhes do Pokémon na página
        loadPokemonDetails(pokemon);

    } catch (error) {
        console.error(`Erro ao obter detalhes do Pokémon: ${error.message}`);}

 }
 function loadPokemonDetails(pokemon) {
    const pokemonDetail = document.getElementById('pokemonDetail')

    // Crie o HTML para exibir os detalhes do Pokémon
	const newHtml= `
        <div class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}
            </span>
            <div class="detail">
                <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                        alt="${pokemon.name}" >
            </div>
        </div>
        `
    pokemonDetail.innerHTML += newHtml
}