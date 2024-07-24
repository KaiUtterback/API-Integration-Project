class Battle {
    constructor(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
        this.currentTurn = 1;
        this.battleType = 'ai';
        this.playerTurn = true;
    }

    switchPokemon(team, newPokemonIndex) {
        team.activePokemon = newPokemonIndex;
    }

    aiChooseMove(pokemon) {
        let moves = pokemon.moves;
        return moves[Math.floor(Math.random() * moves.length)];
    }

    takeTurn() {
        if (this.currentTurn === 1) {
            // Player's turn logic
            this.currentTurn = 2;
        } else {
            // AI's turn logic
            let move = this.aiChooseMove(this.team2.activePokemon);
            this.useMove(this.team2.activePokemon, this.team1.activePokemon, move);
            this.currentTurn = 1;
        }
    }

    useMove(attacker, defender, move) {
        if (Math.random() * 100 <= move.accuracy) {
            let damage = this.calculateDamage(attacker, defender, move);
            defender.currentHP -= damage;
            move.applyEffect(defender);
        }
    }

    calculateDamage(attacker, defender, move) {
        let effectiveness = calculateTypeEffectiveness(move.type, defender.types);
        let baseDamage = ((2 * attacker.level / 5 + 2) * attacker.stats.attack * move.power / defender.stats.defense) / 50 + 2;
        return baseDamage * effectiveness;
    }
}

class Move {
    constructor(name, power, accuracy, type, pp, effect) {
        this.name = name;
        this.power = power;
        this.accuracy = accuracy;
        this.type = type;
        this.pp = pp;
        this.effect = effect;
    }

    applyEffect(target) {
        if (this.effect === 'paralyze') {
            target.status = 'paralyzed';
        }
    }
}
