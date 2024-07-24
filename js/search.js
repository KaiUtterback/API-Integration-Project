document.addEventListener('DOMContentLoaded', () => {
    loadSuggestions();
});

function loadSuggestions() {
    const searchInput = document.getElementById('search-input');
    const suggestionsContainer = document.getElementById('suggestions');

    searchInput.addEventListener('input', async () => {
        const query = searchInput.value.toLowerCase();
        if (query.length === 0) {
            suggestionsContainer.innerHTML = '';
            return;
        }

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await response.json();
        const pokemonNames = data.results.map(pokemon => pokemon.name);

        const filteredSuggestions = pokemonNames.filter(name => name.startsWith(query));
        suggestionsContainer.innerHTML = '';

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion;
                suggestionItem.onclick = () => {
                    searchInput.value = suggestion;
                    suggestionsContainer.innerHTML = '';
                };
                suggestionsContainer.appendChild(suggestionItem);
            });
        }
    });
}

function searchPokemon() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (query.length > 0) {
        window.location.href = `pokemon-details.html?name=${query}`;
    }
}
