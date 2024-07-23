let team1 = [];
let team2 = [];

// Add Pokémon to Team 1
document.getElementById('addPokemon1').addEventListener('click', () => {
    const pokemonName = document.getElementById('pokemon1').value.toLowerCase();
    fetchPokemon(pokemonName, 1);
});

// Add Pokémon to Team 2
document.getElementById('addPokemon2').addEventListener('click', () => {
    const pokemonName = document.getElementById('pokemon2').value.toLowerCase();
    fetchPokemon(pokemonName, 2);
});

// Fetch Pokémon data and add to the specified team
function fetchPokemon(name, team) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            const pokemonCard = `
                <div class="card">
                    <h5>${data.name}</h5>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <p>HP: ${data.stats[0].base_stat}</p>
                </div>
            `;

            if (team === 1) {
                document.getElementById('team1').innerHTML += pokemonCard;
                team1.push(data);
            } else {
                document.getElementById('team2').innerHTML += pokemonCard;
                team2.push(data);
            }
        })
        .catch(error => {
            alert('Error fetching Pokémon. Please try again.');
        });
}

// Start Battle
document.getElementById('startBattle').addEventListener('click', () => {
    if (team1.length === 0 || team2.length === 0) {
        alert('Both teams must have at least one Pokémon.');
        return;
    }
    simulateBattle();
});

// Simulate Battle
function simulateBattle() {
    let log = [];
    let team1HP = team1.reduce((acc, p) => acc + p.stats[0].base_stat, 0);
    let team2HP = team2.reduce((acc, p) => acc + p.stats[0].base_stat, 0);

    while (team1HP > 0 && team2HP > 0) {
        // Randomly select Pokémon and attack
        const attacker1 = team1[Math.floor(Math.random() * team1.length)];
        const attacker2 = team2[Math.floor(Math.random() * team2.length)];
        const damage1 = Math.floor(Math.random() * 10) + 1;
        const damage2 = Math.floor(Math.random() * 10) + 1;

        log.push(`${attacker1.name} attacks ${attacker2.name} for ${damage1} damage.`);
        log.push(`${attacker2.name} attacks ${attacker1.name} for ${damage2} damage.`);

        team2HP -= damage1;
        team1HP -= damage2;
    }

    log.push(team1HP > 0 ? 'Team 1 wins!' : 'Team 2 wins!');

    document.getElementById('battleLog').innerHTML = log.map(entry => `<p>${entry}</p>`).join('');
}
