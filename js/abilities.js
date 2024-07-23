fetch('https://pokeapi.co/api/v2/ability?limit=100')
    .then(response => response.json())
    .then(data => {
        const pokemonAbilities = document.getElementById('pokemonAbilities');
        pokemonAbilities.innerHTML = data.results.map(ability => `
            <div class="ability-card">
                <h2>${ability.name}</h2>
                <a href="ability-details.html?ability=${ability.name}" class="btn btn-primary">Learn more about ${ability.name}</a>
            </div>
        `).join('');
    })
    .catch(error => {
        document.getElementById('pokemonAbilities').innerHTML = '<p>Error fetching Pokémon abilities. Please try again.</p>';
    });
