document.getElementById('getWeather').onclick = function() {
    const city = document.getElementById('city').value;
    const apiKey = 'da20d3538f442db7052da75f9418bdf2'; // Remplacez par votre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                document.getElementById('weatherResult').innerHTML = `
                    <p><strong>${city}</strong></p>
                    <p>Température : ${temp}°C</p>
                    <p>Conditions : ${description}</p>
                `;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>Ville non trouvée. Essayez à nouveau.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Erreur lors de la récupération des données. Essayez plus tard.</p>`;
        });
};
