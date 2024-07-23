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
