fetch('https://pokeapi.co/api/v2/generation')
    .then(response => response.json())
    .then(data => {
        const pokemonGenerations = document.getElementById('pokemonGenerations');
        pokemonGenerations.innerHTML = data.results.map(generation => `
            <div class="generation-card">
                <h2>${generation.name}</h2>
                <a href="generation-details.html?generation=${generation.name}" class="btn btn-primary">Explore ${generation.name} Pokémon</a>
            </div>
        `).join('');
    })
    .catch(error => {
        document.getElementById('pokemonGenerations').innerHTML = '<p>Error fetching Pokémon generations. Please try again.</p>';
    });
