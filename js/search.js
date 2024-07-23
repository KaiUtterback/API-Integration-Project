let allPokemonNames = [];

// Fetch all Pokémon names for auto-complete
fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(response => response.json())
    .then(data => {
        allPokemonNames = data.results.map(pokemon => pokemon.name);
    })
    .catch(error => {
        console.error('Error fetching Pokémon names:', error);
    });

document.getElementById('pokemonName').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    if (input.length > 0) {
        const filteredNames = allPokemonNames.filter(name => name.startsWith(input));
        filteredNames.forEach(name => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = name;
            suggestionItem.className = 'list-group-item list-group-item-action';
            suggestionItem.addEventListener('click', function() {
                document.getElementById('pokemonName').value = name;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(suggestionItem);
        });
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            const pokemonResult = document.getElementById('pokemonResult');
            pokemonResult.innerHTML = `
                <h2>${data.name} (#${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight}</p>
                <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            document.getElementById('pokemonResult').innerHTML = '<p>Pokémon not found. Please try again.</p>';
        });
});
