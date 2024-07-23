function updateHealthBar(pokemon, teamId, pokemonIndex) {
    const healthBar = document.getElementById(`health-bar-${teamId}-${pokemonIndex}`);
    const hpStat = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const currentHp = Math.max(pokemon.currentHp, 0); // Ensure HP doesn't go below 0
    const healthPercentage = (currentHp / hpStat) * 100;
    healthBar.style.width = `${healthPercentage}%`;
}

function displayHealthBars(team, teamId) {
    team.forEach((entry, index) => {
        const healthBarContainer = document.createElement('div');
        healthBarContainer.className = 'health-bar';
        const healthBarFill = document.createElement('div');
        healthBarFill.className = 'health-bar-fill';
        healthBarFill.id = `health-bar-${teamId}-${index}`;
        healthBarContainer.appendChild(healthBarFill);
        document.getElementById(`${teamId}List`).appendChild(healthBarContainer);
        updateHealthBar(entry.pokemon, teamId, index);
    });
}
function calculateDamage(move, attacker, defender) {
    const movePower = move.power || 50;
    const attackStat = attacker.stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defenseStat = defender.stats.find(stat => stat.stat.name === 'defense').base_stat;
    const baseDamage = ((2 * attacker.level / 5 + 2) * movePower * attackStat / defenseStat / 50) + 2;
    
    // Type effectiveness
    const effectiveness = calculateTypeEffectiveness(move.type, defender.type);
    
    // Critical hit
    const isCritical = Math.random() < 0.1; // 10% chance
    const criticalMultiplier = isCritical ? 1.5 : 1;
    
    // Accuracy check
    const hitChance = Math.random() * 100;
    if (hitChance > move.accuracy) {
        return 0; // Missed attack
    }
    
    // Status effects (simplified)
    if (defender.status === 'paralyzed' && Math.random() < 0.25) {
        return 0; // Paralyzed and cannot move
    }
    
    return baseDamage * effectiveness * criticalMultiplier;
}
function updateHealthBar(pokemon, teamId, pokemonIndex) {
    const healthBar = document.getElementById(`health-bar-${teamId}-${pokemonIndex}`);
    const hpStat = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat;
    const currentHp = Math.max(pokemon.currentHp, 0); // Ensure HP doesn't go below 0
    const healthPercentage = (currentHp / hpStat) * 100;
    healthBar.style.width = `${healthPercentage}%`;
}

function displayHealthBars(team, teamId) {
    team.forEach((entry, index) => {
        const healthBarContainer = document.createElement('div');
        healthBarContainer.className = 'health-bar';
        const healthBarFill = document.createElement('div');
        healthBarFill.className = 'health-bar-fill';
        healthBarFill.id = `health-bar-${teamId}-${index}`;
        healthBarContainer.appendChild(healthBarFill);
        document.getElementById(`${teamId}List`).appendChild(healthBarContainer);
        updateHealthBar(entry.pokemon, teamId, index);
    });
}
const difficultyLevels = {
    easy: 0.1,
    medium: 0.5,
    hard: 0.9
};

let selectedDifficulty = 'medium'; // Default difficulty level

document.getElementById('selectDifficulty').addEventListener('change', (event) => {
    selectedDifficulty = event.target.value;
});

function aiChooseMove(pokemon) {
    const availableMoves = pokemon.moves.filter(move => move.pp > 0);
    if (availableMoves.length === 0) return null;

    const randomFactor = Math.random();
    const sortedMoves = availableMoves.sort((a, b) => {
        if (randomFactor < difficultyLevels[selectedDifficulty]) {
            return b.power - a.power; // Choose the strongest move
        } else {
            return Math.random() - 0.5; // Choose a random move
        }
    });

    return sortedMoves[0];
}

function aiTurn() {
    const currentAI = team2[0]; // Simplified to always use the first Pokémon in team2
    const move = aiChooseMove(currentAI.pokemon);
    if (move) {
        useMove('team2', 0, move.name); // Simplified for one Pokémon in team2
    }
}
const battleLog = [];

function logAction(action) {
    battleLog.push(action);
    document.getElementById('battleLog').innerHTML += `<p>${action}</p>`;
}

function startTurn() {
    const currentPlayer = currentTurn % 2 === 1 ? 'team1' : 'team2';
    logAction(`Turn ${currentTurn}: ${currentPlayer}'s turn.`);
    if (currentPlayer === 'team2') {
        aiTurn();
    } else {
        displayMoves('team1');
    }
}

function useMove(teamId, pokemonIndex, moveName) {
    // ... (existing useMove code)

    logAction(`${teamId === 'team1' ? 'Team 1' : 'Team 2'}'s ${team[pokemonIndex].pokemon.name} used ${moveName} on ${opponentPokemon.pokemon.name} for ${damage} damage!`);

    // ... (existing useMove code)
}

document.getElementById('replayBattle').addEventListener('click', () => {
    const log = document.getElementById('battleLog');
    log.innerHTML = '';
    battleLog.forEach(action => {
        log.innerHTML += `<p>${action}</p>`;
    });
});
function calculateTypeEffectiveness(moveType, defenderTypes) {
    let effectiveness = 1;
    defenderTypes.forEach(type => {
        effectiveness *= typeChart[moveType].strengths.includes(type) ? 2 : (typeChart[moveType].weaknesses.includes(type) ? 0.5 : 1);
    });
    return effectiveness;
}