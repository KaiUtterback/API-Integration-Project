document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
        const darkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', darkModeEnabled);
    };

    // Check dark mode preference
    const darkModePreference = localStorage.getItem('dark-mode') === 'true';
    if (darkModePreference) {
        document.body.classList.add('dark-mode');
    }

    window.toggleDarkMode = toggleDarkMode;

    // Load Featured Pokémon
    const featuredPokemon = [
        'charizard',
        'pikachu',
        'bulbasaur'
    ];

    const carouselInner = document.getElementById('featured-pokemon');
    featuredPokemon.forEach((pokemon, index) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => response.json())
            .then(data => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }

                const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                const pokemonImage = data.sprites.other['official-artwork'].front_default;
                const pokemonDescription = `${pokemonName} is a ${data.types.map(type => type.type.name).join('/')} type Pokémon.`;

                carouselItem.innerHTML = `
                    <img src="${pokemonImage}" class="d-block w-100" alt="${pokemonName}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${pokemonName}</h5>
                        <p>${pokemonDescription}</p>
                    </div>
                `;

                carouselInner.appendChild(carouselItem);
            })
            .catch(error => console.error('Error loading featured Pokémon:', error));
    });
});
