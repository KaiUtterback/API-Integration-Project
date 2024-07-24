class Pokemon {
    constructor(name, baseStats, ivs = {}, evs = {}, level = 50) {
        this.name = name;
        this.baseStats = baseStats;
        this.ivs = ivs;
        this.evs = evs;
        this.level = level;
        this.currentHP = this.calculateStat('hp');
        this.stats = this.calculateAllStats();
        this.moves = [];
    }

    calculateStat(stat) {
        return Math.floor(((2 * this.baseStats[stat] + (this.ivs[stat] || 0) + (this.evs[stat] || 0) / 4) * this.level) / 100) + this.level + 10;
    }

    calculateAllStats() {
        let stats = {};
        for (let stat in this.baseStats) {
            stats[stat] = this.calculateStat(stat);
        }
        return stats;
    }

    assignMove(move) {
        if (this.moves.length < 4) {
            this.moves.push(move);
        } else {
            console.log(`${this.name} already has 4 moves.`);
        }
    }
}
