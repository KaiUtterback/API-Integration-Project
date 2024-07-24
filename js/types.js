// Fetch all Pokémon types and display them as buttons
fetch('https://pokeapi.co/api/v2/type')
    .then(response => response.json())
    .then(data => {
        const pokemonTypes = document.getElementById('pokemonTypes');
        pokemonTypes.innerHTML = data.results.map(type => `
            <button class="btn btn-primary m-2 type-button" data-type-url="${type.url}">${type.name}</button>
        `).join('');

        // Add event listeners to the buttons
        const typeButtons = document.querySelectorAll('.type-button');
        typeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const typeUrl = button.getAttribute('data-type-url');
                fetchPokemonByType(typeUrl);
            });
        });
    })
    .catch(error => {
        document.getElementById('pokemonTypes').innerHTML = '<p>Error fetching Pokémon types. Please try again.</p>';
    });

// Fetch and display Pokémon of a specific type
function fetchPokemonByType(typeUrl) {
    fetch(typeUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonList = document.getElementById('pokemonList');
            const sortedPokemon = data.pokemon.map(p => p.pokemon).sort((a, b) => a.name.localeCompare(b.name));

            // Display alphabet navigation
            const alphabetNav = document.getElementById('alphabetNav');
            const alphabet = [...new Set(sortedPokemon.map(p => p.name.charAt(0).toUpperCase()))];
            alphabetNav.innerHTML = alphabet.map(letter => `
                <a href="#${letter}" class="btn btn-secondary m-1">${letter}</a>
            `).join('');

            // Display Pokémon list with images and links
            pokemonList.innerHTML = sortedPokemon.map(p => `
                <div class="grid-item card">
                    <a id="${p.name.charAt(0).toUpperCase()}"></a>
                    <h3>${p.name}</h3>
                    <a href="details.html?id=${getPokemonIdFromUrl(p.url)}">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(p.url)}.png" alt="${p.name}">
                    </a>
                </div>
            `).join('');
        })
        .catch(error => {
            document.getElementById('pokemonList').innerHTML = '<p>Error fetching Pokémon. Please try again.</p>';
        });
}

// Get Pokémon ID from URL
function getPokemonIdFromUrl(url) {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
}
document.addEventListener('DOMContentLoaded', () => {
    async function loadTypePokemon(type) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            const data = await response.json();
            // Process and display the Pokémon data
            console.log(data.pokemon);
        } catch (error) {
            console.error('Error fetching type data:', error);
        }
    }

    document.querySelectorAll('.type-button').forEach(button => {
        button.addEventListener('click', () => {
            const type = button.getAttribute('data-type');
            loadTypePokemon(type);
        });
    });
});
