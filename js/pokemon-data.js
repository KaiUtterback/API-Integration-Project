const pokemonData = {
    charizard: {
        name: "charizard",
        types: ["fire", "flying"],
        baseStats: {
            hp: 78,
            attack: 84,
            defense: 78,
            specialAttack: 109,
            specialDefense: 85,
            speed: 100
        },
        moves: ["ember", "rock throw", "flamethrower", "gust"]
    },
    pikachu: {
        name: "pikachu",
        types: ["electric"],
        baseStats: {
            hp: 35,
            attack: 55,
            defense: 40,
            specialAttack: 50,
            specialDefense: 50,
            speed: 90
        },
        moves: ["thunder shock", "quick attack"]
    },
    bulbasaur: {
        name: "bulbasaur",
        types: ["grass", "poison"],
        baseStats: {
            hp: 45,
            attack: 49,
            defense: 49,
            specialAttack: 65,
            specialDefense: 65,
            speed: 45
        },
        moves: ["tackle", "vine whip", "razor leaf", "solar beam"]
    },
    squirtle: {
        name: "squirtle",
        types: ["water"],
        baseStats: {
            hp: 44,
            attack: 48,
            defense: 65,
            specialAttack: 50,
            specialDefense: 64,
            speed: 43
        },
        moves: ["tackle", "water gun", "bite", "hydro pump"]
    },
    jigglypuff: {
        name: "jigglypuff",
        types: ["normal", "fairy"],
        baseStats: {
            hp: 115,
            attack: 45,
            defense: 20,
            specialAttack: 45,
            specialDefense: 25,
            speed: 20
        },
        moves: ["sing", "double slap", "body slam", "hyper voice"]
    },
    onix: {
        name: "onix",
        types: ["rock", "ground"],
        baseStats: {
            hp: 35,
            attack: 45,
            defense: 160,
            specialAttack: 30,
            specialDefense: 45,
            speed: 70
        },
        moves: ["rock throw", "earthquake", "iron tail", "rock slide"]
    },
    mewtwo: {
        name: "mewtwo",
        types: ["psychic"],
        baseStats: {
            hp: 106,
            attack: 110,
            defense: 90,
            specialAttack: 154,
            specialDefense: 90,
            speed: 130
        },
        moves: ["psychic", "shadow ball", "thunderbolt", "ice beam"]
    },
    gengar: {
        name: "gengar",
        types: ["ghost", "poison"],
        baseStats: {
            hp: 60,
            attack: 65,
            defense: 60,
            specialAttack: 130,
            specialDefense: 75,
            speed: 110
        },
        moves: ["shadow ball", "sludge bomb", "dark pulse", "dream eater"]
    },
    snorlax: {
        name: "snorlax",
        types: ["normal"],
        baseStats: {
            hp: 160,
            attack: 110,
            defense: 65,
            specialAttack: 65,
            specialDefense: 110,
            speed: 30
        },
        moves: ["body slam", "hyper beam", "earthquake", "rest"]
    }
};

const moveData = [
    {
        name: "ember",
        power: 40,
        accuracy: 100,
        type: "fire",
        pp: 25,
        effect: null
    },
    {
        name: "rock throw",
        power: 50,
        accuracy: 90,
        type: "rock",
        pp: 15,
        effect: null
    },
    {
        name: "flamethrower",
        power: 90,
        accuracy: 100,
        type: "fire",
        pp: 15,
        effect: "burn"
    },
    {
        name: "gust",
        power: 40,
        accuracy: 100,
        type: "flying",
        pp: 35,
        effect: null
    },
    {
        name: "thunder shock",
        power: 40,
        accuracy: 100,
        type: "electric",
        pp: 30,
        effect: "paralyze"
    },
    {
        name: "quick attack",
        power: 40,
        accuracy: 100,
        type: "normal",
        pp: 30,
        effect: null
    },
    {
        name: "tackle",
        power: 40,
        accuracy: 100,
        type: "normal",
        pp: 35,
        effect: null
    },
    {
        name: "vine whip",
        power: 45,
        accuracy: 100,
        type: "grass",
        pp: 25,
        effect: null
    },
    {
        name: "razor leaf",
        power: 55,
        accuracy: 95,
        type: "grass",
        pp: 25,
        effect: "high_crit"
    },
    {
        name: "solar beam",
        power: 120,
        accuracy: 100,
        type: "grass",
        pp: 10,
        effect: "charge"
    },
    {
        name: "water gun",
        power: 40,
        accuracy: 100,
        type: "water",
        pp: 25,
        effect: null
    },
    {
        name: "bite",
        power: 60,
        accuracy: 100,
        type: "dark",
        pp: 25,
        effect: "flinch"
    },
    {
        name: "hydro pump",
        power: 110,
        accuracy: 80,
        type: "water",
        pp: 5,
        effect: null
    },
    {
        name: "sing",
        power: 0,
        accuracy: 55,
        type: "normal",
        pp: 15,
        effect: "sleep"
    },
    {
        name: "double slap",
        power: 15,
        accuracy: 85,
        type: "normal",
        pp: 10,
        effect: "multi_hit"
    },
    {
        name: "body slam",
        power: 85,
        accuracy: 100,
        type: "normal",
        pp: 15,
        effect: "paralyze"
    },
    {
        name: "hyper voice",
        power: 90,
        accuracy: 100,
        type: "normal",
        pp: 10,
        effect: null
    },
    {
        name: "earthquake",
        power: 100,
        accuracy: 100,
        type: "ground",
        pp: 10,
        effect: null
    },
    {
        name: "iron tail",
        power: 100,
        accuracy: 75,
        type: "steel",
        pp: 15,
        effect: "lower_def"
    },
    {
        name: "rock slide",
        power: 75,
        accuracy: 90,
        type: "rock",
        pp: 10,
        effect: "flinch"
    },
    {
        name: "psychic",
        power: 90,
        accuracy: 100,
        type: "psychic",
        pp: 10,
        effect: "lower_sp_def"
    },
    {
        name: "shadow ball",
        power: 80,
        accuracy: 100,
        type: "ghost",
        pp: 15,
        effect: "lower_sp_def"
    },
    {
        name: "thunderbolt",
        power: 90,
        accuracy: 100,
        type: "electric",
        pp: 15,
        effect: "paralyze"
    },
    {
        name: "ice beam",
        power: 90,
        accuracy: 100,
        type: "ice",
        pp: 10,
        effect: "freeze"
    },
    {
        name: "sludge bomb",
        power: 90,
        accuracy: 100,
        type: "poison",
        pp: 10,
        effect: "poison"
    },
    {
        name: "dark pulse",
        power: 80,
        accuracy: 100,
        type: "dark",
        pp: 15,
        effect: "flinch"
    },
    {
        name: "dream eater",
        power: 100,
        accuracy: 100,
        type: "psychic",
        pp: 15,
        effect: "drain"
    },
    {
        name: "hyper beam",
        power: 150,
        accuracy: 90,
        type: "normal",
        pp: 5,
        effect: "recharge"
    },
    {
        name: "rest",
        power: 0,
        accuracy: 0,
        type: "psychic",
        pp: 10,
        effect: "heal"
    }
];
