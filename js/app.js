document.addEventListener('DOMContentLoaded', function () {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countriesContainer = document.querySelector('.countries');
            // Cambiar a las últimas 20 banderas
            const last20Countries = data.slice(-20);
            last20Countries.forEach(country => {
                const countryElement = document.createElement('div');
                countryElement.className = 'country';
                countryElement.innerHTML = `
                    <img src="${country.flags.svg}" alt="Flag of ${country.translations.spa.common}" width="100">
                    <h3>${country.translations.spa.common}</h3>
                    <p>Capital: ${country.capital}</p>
                    <p>Continente: ${country.continents[0]}</p> <!-- Agregar el continente -->
                    <a href="https://www.google.com/maps/@${country.latlng[0]},${country.latlng[1]},6z" target="_blank">Ver en Google Maps</a>
                `;
                countriesContainer.appendChild(countryElement);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el envío tradicional del formulario

    // Por simplicidad, solo mostraremos un mensaje y los datos en consola
    const mensaje = document.getElementById('mensaje__formulario');
    mensaje.style.display = 'block';
        
    console.log('Nombres y apellidos:', event.target.fullName.value);
    console.log('Correo electrónico:', event.target.email.value);
    console.log('Tipo de Identificación:', event.target.idType.value);
    console.log('Teléfono:', event.target.phone.value);
    console.log('Autorización:', event.target.authorization.checked ? 'Sí' : 'No');
});