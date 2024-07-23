const typeChart = {
    normal: { strengths: [], weaknesses: ['rock', 'ghost', 'steel'] },
    fire: { strengths: ['grass', 'ice', 'bug', 'steel'], weaknesses: ['fire', 'water', 'rock', 'dragon'] },
    water: { strengths: ['fire', 'ground', 'rock'], weaknesses: ['water', 'grass', 'dragon'] },
    // ... (complete the chart for all types)
};

function calculateTypeEffectiveness(moveType, targetType) {
    if (typeChart[moveType].strengths.includes(targetType)) {
        return 2; // super effective
    } else if (typeChart[moveType].weaknesses.includes(targetType)) {
        return 0.5; // not very effective
    }
    return 1; // normal effectiveness
}
const typeChart = {
    normal: { strengths: [], weaknesses: ['rock', 'ghost', 'steel'] },
    fire: { strengths: ['grass', 'ice', 'bug', 'steel'], weaknesses: ['fire', 'water', 'rock', 'dragon'] },
    water: { strengths: ['fire', 'ground', 'rock'], weaknesses: ['water', 'grass', 'dragon'] },
    electric: { strengths: ['water', 'flying'], weaknesses: ['electric', 'ground', 'grass', 'dragon'] },
    grass: { strengths: ['water', 'ground', 'rock'], weaknesses: ['fire', 'grass', 'poison', 'flying', 'bug', 'dragon', 'steel'] },
    ice: { strengths: ['grass', 'ground', 'flying', 'dragon'], weaknesses: ['fire', 'water', 'ice', 'steel'] },
    fighting: { strengths: ['normal', 'ice', 'rock', 'dark', 'steel'], weaknesses: ['poison', 'flying', 'psychic', 'bug', 'ghost', 'fairy'] },
    poison: { strengths: ['grass', 'fairy'], weaknesses: ['poison', 'ground', 'rock', 'ghost'] },
    ground: { strengths: ['fire', 'electric', 'poison', 'rock', 'steel'], weaknesses: ['grass', 'bug'] },
    flying: { strengths: ['grass', 'fighting', 'bug'], weaknesses: ['electric', 'rock', 'steel'] },
    psychic: { strengths: ['fighting', 'poison'], weaknesses: ['psychic', 'steel'] },
    bug: { strengths: ['grass', 'psychic', 'dark'], weaknesses: ['fire', 'fighting', 'poison', 'flying', 'ghost', 'steel', 'fairy'] },
    rock: { strengths: ['fire', 'ice', 'flying', 'bug'], weaknesses: ['fighting', 'ground', 'steel'] },
    ghost: { strengths: ['psychic', 'ghost'], weaknesses: ['dark'] },
    dragon: { strengths: ['dragon'], weaknesses: ['steel', 'fairy'] },
    dark: { strengths: ['psychic', 'ghost'], weaknesses: ['fighting', 'dark', 'fairy'] },
    steel: { strengths: ['ice', 'rock', 'fairy'], weaknesses: ['fire', 'water', 'electric', 'steel'] },
    fairy: { strengths: ['fighting', 'dragon', 'dark'], weaknesses: ['fire', 'poison', 'steel'] }
};

function calculateTypeEffectiveness(moveType, targetType) {
    if (typeChart[moveType].strengths.includes(targetType)) {
        return 2; // super effective
    } else if (typeChart[moveType].weaknesses.includes(targetType)) {
        return 0.5; // not very effective
    }
    return 1; // normal effectiveness
}
