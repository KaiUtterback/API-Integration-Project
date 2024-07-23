fetch('https://pokeapi.co/api/v2/move?limit=100')
    .then(response => response.json())
    .then(data => {
        const pokemonMoves = document.getElementById('pokemonMoves');
        pokemonMoves.innerHTML = data.results.map(move => `
            <div class="move-card">
                <h2>${move.name}</h2>
                <a href="move-details.html?move=${move.name}" class="btn btn-primary">Learn more about ${move.name}</a>
            </div>
        `).join('');
    })
    .catch(error => {
        document.getElementById('pokemonMoves').innerHTML = '<p>Error fetching Pokémon moves. Please try again.</p>';
    });
