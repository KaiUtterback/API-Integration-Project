// Get the Pokémon ID from the URL parameters
const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => response.json())
    .then(data => {
        const pokemonDetails = document.getElementById('pokemonDetails');
        pokemonDetails.innerHTML = `
            <div class="detail-card">
                <h2>${data.name} (#${data.id})</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            </div>
            <div class="detail-card">
                <h3>Abilities</h3>
                <ul>${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}</ul>
            </div>
            <div class="detail-card">
                <h3>Types</h3>
                <ul>${data.types.map(type => `<li>${type.type.name}</li>`).join('')}</ul>
            </div>
            <div class="detail-card">
                <h3>Stats</h3>
                <ul>${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}</ul>
            </div>
        `;
    })
    .catch(error => {
        document.getElementById('pokemonDetails').innerHTML = '<p>Error fetching Pokémon details. Please try again.</p>';
    });
