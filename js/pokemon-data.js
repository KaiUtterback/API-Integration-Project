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
    },
    machamp: {
        name: "machamp",
        types: ["fighting"],
        baseStats: {
            hp: 90,
            attack: 130,
            defense: 80,
            specialAttack: 65,
            specialDefense: 85,
            speed: 55
        },
        moves: ["karate chop", "cross chop", "dynamic punch", "submission"]
    },
    alakazam: {
        name: "alakazam",
        types: ["psychic"],
        baseStats: {
            hp: 55,
            attack: 50,
            defense: 45,
            specialAttack: 135,
            specialDefense: 95,
            speed: 120
        },
        moves: ["psybeam", "psychic", "shadow ball", "focus blast"]
    },
    arcanine: {
        name: "arcanine",
        types: ["fire"],
        baseStats: {
            hp: 90,
            attack: 110,
            defense: 80,
            specialAttack: 100,
            specialDefense: 80,
            speed: 95
        },
        moves: ["flamethrower", "bite", "extreme speed", "fire blast"]
    },
    gyarados: {
        name: "gyarados",
        types: ["water", "flying"],
        baseStats: {
            hp: 95,
            attack: 125,
            defense: 79,
            specialAttack: 60,
            specialDefense: 100,
            speed: 81
        },
        moves: ["waterfall", "bite", "ice fang", "hydro pump"]
    },
    dragonite: {
        name: "dragonite",
        types: ["dragon", "flying"],
        baseStats: {
            hp: 91,
            attack: 134,
            defense: 95,
            specialAttack: 100,
            specialDefense: 100,
            speed: 80
        },
        moves: ["dragon claw", "fly", "hyper beam", "outrage"]
    },
    blastoise: {
        name: "blastoise",
        types: ["water"],
        baseStats: {
            hp: 79,
            attack: 83,
            defense: 100,
            specialAttack: 85,
            specialDefense: 105,
            speed: 78
        },
        moves: ["hydro pump", "bite", "ice beam", "surf"]
    },
    venusaur: {
        name: "venusaur",
        types: ["grass", "poison"],
        baseStats: {
            hp: 80,
            attack: 82,
            defense: 83,
            specialAttack: 100,
            specialDefense: 100,
            speed: 80
        },
        moves: ["vine whip", "razor leaf", "earthquake", "solar beam"]
    },
    jolteon: {
        name: "jolteon",
        types: ["electric"],
        baseStats: {
            hp: 65,
            attack: 65,
            defense: 60,
            specialAttack: 110,
            specialDefense: 95,
            speed: 130
        },
        moves: ["thunderbolt", "quick attack", "pin missile", "thunder wave"]
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
    },
    {
        name: "karate chop",
        power: 50,
        accuracy: 100,
        type: "fighting",
        pp: 25,
        effect: "high_crit"
    },
    {
        name: "cross chop",
        power: 100,
        accuracy: 80,
        type: "fighting",
        pp: 5,
        effect: "high_crit"
    },
    {
        name: "dynamic punch",
        power: 100,
        accuracy: 50,
        type: "fighting",
        pp: 5,
        effect: "confuse"
    },
    {
        name: "submission",
        power: 80,
        accuracy: 80,
        type: "fighting",
        pp: 20,
        effect: "recoil"
    },
    {
        name: "psybeam",
        power: 65,
        accuracy: 100,
        type: "psychic",
        pp: 20,
        effect: "confuse"
    },
    {
        name: "focus blast",
        power: 120,
        accuracy: 70,
        type: "fighting",
        pp: 5,
        effect: "lower_sp_def"
    },
    {
        name: "extreme speed",
        power: 80,
        accuracy: 100,
        type: "normal",
        pp: 5,
        effect: "priority"
    },
    {
        name: "fire blast",
        power: 110,
        accuracy: 85,
        type: "fire",
        pp: 5,
        effect: "burn"
    },
    {
        name: "waterfall",
        power: 80,
        accuracy: 100,
        type: "water",
        pp: 15,
        effect: "flinch"
    },
    {
        name: "ice fang",
        power: 65,
        accuracy: 95,
        type: "ice",
        pp: 15,
        effect: "freeze_flinch"
    },
    {
        name: "dragon claw",
        power: 80,
        accuracy: 100,
        type: "dragon",
        pp: 15,
        effect: null
    },
    {
        name: "fly",
        power: 90,
        accuracy: 95,
        type: "flying",
        pp: 15,
        effect: "charge"
    },
    {
        name: "outrage",
        power: 120,
        accuracy: 100,
        type: "dragon",
        pp: 10,
        effect: "confuse_self"
    },
    {
        name: "surf",
        power: 90,
        accuracy: 100,
        type: "water",
        pp: 15,
        effect: null
    },
    {
        name: "pin missile",
        power: 25,
        accuracy: 95,
        type: "bug",
        pp: 20,
        effect: "multi_hit"
    },
    {
        name: "thunder wave",
        power: 0,
        accuracy: 90,
        type: "electric",
        pp: 20,
        effect: "paralyze"
    }
];
