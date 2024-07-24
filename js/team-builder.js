let team = [];

function addPokemonToTeam(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            if (team.length < 6) {
                team.push(data);
                displayTeam();
            } else {
                alert('Your team is full! You can only have 6 Pokémon in your team.');
            }
        })
        .catch(error => {
            alert('Error adding Pokémon to team. Please try again.');
        });
}

function displayTeam() {
    const teamBuilder = document.getElementById('teamBuilder');
    teamBuilder.innerHTML = team.map(pokemon => `
        <div class="pokemon-card">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <button onclick="removePokemonFromTeam('${pokemon.name}')" class="btn btn-danger">Remove</button>
        </div>
    `).join('');
}

function removePokemonFromTeam(pokemonName) {
    team = team.filter(pokemon => pokemon.name !== pokemonName);
    displayTeam();
}

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Pokémon to Team';
    addButton.className = 'btn btn-primary';
    addButton.onclick = () => {
        const pokemonName = prompt('Enter Pokémon Name:');
        if (pokemonName) {
            addPokemonToTeam(pokemonName.toLowerCase());
        }
    };
    document.body.appendChild(addButton);
});
class Trainer {
    constructor(name, appearance) {
        this.name = name;
        this.appearance = appearance;
        this.teams = [];
    }

    createTeam(pokemonArray) {
        this.teams.push(pokemonArray);
    }

    customizeAppearance(newAppearance) {
        this.appearance = newAppearance;
    }
}

let currentTrainer = new Trainer('Ash', 'default');
