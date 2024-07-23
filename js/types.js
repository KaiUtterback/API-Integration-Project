fetch('https://pokeapi.co/api/v2/type')
    .then(response => response.json())
    .then(data => {
        const pokemonTypes = document.getElementById('pokemonTypes');
        pokemonTypes.innerHTML = data.results.map(type => `
            <div class="type-card">
                <h2>${type.name}</h2>
                <a href="type-details.html?type=${type.name}" class="btn btn-primary">Explore ${type.name} Pokémon</a>
            </div>
        `).join('');
    })
    .catch(error => {
        document.getElementById('pokemonTypes').innerHTML = '<p>Error fetching Pokémon types. Please try again.</p>';
    });
