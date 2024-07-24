document.addEventListener('DOMContentLoaded', async () => {
    const featuredPokemonContainer = document.getElementById('featured-pokemon-container');
    const popularTypesContainer = document.getElementById('popular-types-container');

    try {
        const featuredPokemon = await getFeaturedPokemon();
        if (featuredPokemonContainer) {
            featuredPokemonContainer.innerHTML = `
                <div class="carousel-item active">
                    <img src="${featuredPokemon.sprites.other['official-artwork'].front_default}" alt="${featuredPokemon.name}" />
                    <div class="carousel-caption">
                        <h3>${featuredPokemon.name}</h3>
                        <p>${featuredPokemon.types.map(type => type.type.name).join(', ')}</p>
                    </div>
                </div>
            `;
        }
    } catch (error) {
        console.error('Failed to load featured Pokémon:', error);
    }

    try {
        const popularTypes = await getPopularTypes();
        if (popularTypesContainer) {
            popularTypesContainer.innerHTML = popularTypes.map(type => `
                <div class="type-card">
                    <h3>${type.name}</h3>
                    <p>${type.pokemon.length} Pokémon</p>
                    <button onclick="loadTypePokemon('${type.name}')">View Pokémon</button>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Failed to load popular types:', error);
    }
});

async function loadTypePokemon(type) {
    const pokemonListContainer = document.getElementById('pokemon-list-container');
    try {
        const pokemonList = await getPokemonByType(type);
        pokemonListContainer.innerHTML = pokemonList.map(pokemon => `
            <div class="pokemon-card">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
                <h4>${pokemon.name}</h4>
            </div>
        `).join('');
    } catch (error) {
        console.error(`Failed to load Pokémon of type ${type}:`, error);
    }
}

async function getFeaturedPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard');
    return response.json();
}

async function getPopularTypes() {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    const types = await response.json();
    return types.results;
}

async function getPokemonByType(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const typeData = await response.json();
    return typeData.pokemon.map(p => p.pokemon);
}
