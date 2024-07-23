let team1 = [];
let team2 = [];

function addPokemonToBattleTeam(team, pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            if (team.length < 3) {
                team.push(data);
                displayBattleTeams();
            } else {
                alert('A battle team can only have 3 Pokémon.');
            }
        })
        .catch(error => {
            alert('Error adding Pokémon to battle team. Please try again.');
        });
}

function displayBattleTeams() {
    const battleSimulator = document.getElementById('battleSimulator');
    battleSimulator.innerHTML = `
        <div>
            <h2>Team 1</h2>
            ${team1.map(pokemon => `<div>${pokemon.name}</div>`).join('')}
        </div>
        <div>
            <h2>Team 2</h2>
            ${team2.map(pokemon => `<div>${pokemon.name}</div>`).join('')}
        </div>
        <button onclick="startBattle()" class="btn btn-primary">Start Battle</button>
    `;
}

function startBattle() {
    // Simple battle logic: Randomly select a winner
    const winner = Math.random() < 0.5 ? 'Team 1' : 'Team 2';
    alert(`${winner} wins the battle!`);
}

document.addEventListener('DOMContentLoaded', () => {
    const addButton1 = document.createElement('button');
    addButton1.textContent = 'Add Pokémon to Team 1';
    addButton1.className = 'btn btn-primary';
    addButton1.onclick = () => {
        const pokemonName = prompt('Enter Pokémon Name:');
        if (pokemonName) {
            addPokemonToBattleTeam(team1, pokemonName.toLowerCase());
        }
    };
    document.body.appendChild(addButton1);

    const addButton2 = document.createElement('button');
    addButton2.textContent = 'Add Pokémon to Team 2';
    addButton2.className = 'btn btn-primary';
    addButton2.onclick = () => {
        const pokemonName = prompt('Enter Pokémon Name:');
        if (pokemonName) {
            addPokemonToBattleTeam(team2, pokemonName.toLowerCase());
        }
    };
    document.body.appendChild(addButton2);
});
