// JSON simulado con datos de recomendaciones
const travelData = {
    "countries": [
      {
        "id": 1,
        "name": "Australia",
        "cities": [
          {
            "name": "Sydney, Australia",
            "imageUrl": "img/Sydney_Australia.jpg",
            "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
          },
          {
            "name": "melbourneaustralia.jpg",
            "imageUrl": "",
            "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
          }
        ]
      },
      {
        "id": 2,
        "name": "Japan",
        "cities": [
          {
            "name": "Tokyo, Japan",
            "imageUrl": "tokyiojapan.jpg",
            "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
          },
          {
            "name": "Kyoto, Japan",
            "imageUrl": "kyotojapan.jpg",
            "description": "Known for its historic temples, gardens, and traditional tea houses."
          }
        ]
      },
      {
        "id": 3,
        "name": "Brazil",
        "cities": [
          {
            "name": "rio.jpg",
            "imageUrl": "enter_your_image_for_rio.jpg",
            "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
          },
          {
            "name": "São Paulo, Brazil",
            "imageUrl": "paulo.jpg",
            "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
          }
        ]
      }
    ],
    "temples": [
      {
        "id": 1,
        "name": "Angkor Wat, Cambodia",
        "imageUrl": "cambodia.jpg",
        "description": "A UNESCO World Heritage site and the largest religious monument in the world."
      },
      {
        "id": 2,
        "name": "Taj Mahal, India",
        "imageUrl": "india.jpg",
        "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
      }
    ],
    "beaches": [
      {
        "id": 1,
        "name": "Bora Bora, French Polynesia",
        "imageUrl": "polynesia.jpg",
        "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
      },
      {
        "id": 2,
        "name": "Copacabana Beach, Brazil",
        "imageUrl": "copacabana.jpg",
        "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
      }
    ]
}

// Función para manejar la búsqueda
function search() {
    const searchInput = document.getElementById("search").value.toLowerCase(); // Obtener el valor de búsqueda en minúsculas
    const recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = ""; // Limpiar resultados anteriores

    // Array para almacenar resultados de búsqueda
    const results = [];

    // Buscar coincidencias en playas
    travelData.beaches.forEach((beach) => {
        if (beach.name.toLowerCase().includes(searchInput)) {
            results.push(beach);
        }
    });

    // Buscar coincidencias en templos
    travelData.temples.forEach((temple) => {
        if (temple.name.toLowerCase().includes(searchInput)) {
            results.push(temple);
        }
    });

    // Buscar coincidencias en países y ciudades
    travelData.countries.forEach((country) => {
        if (country.name.toLowerCase().includes(searchInput)) {
            results.push(country);
        }
        country.cities.forEach((city) => {
            if (city.name.toLowerCase().includes(searchInput)) {
                results.push(city);
            }
        });
    });

    // Mostrar resultados en el DOM
    if (results.length > 0) {
        results.forEach((item) => {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result-item");

            const title = document.createElement("h3");
            title.textContent = item.name;

            const description = document.createElement("p");
            description.textContent = item.description;

            const image = document.createElement("img");
            image.src = item.imageUrl;
            image.alt = item.name;

            resultDiv.appendChild(title);
            resultDiv.appendChild(description);
            resultDiv.appendChild(image);
            recommendationsDiv.appendChild(resultDiv);
        });

        // Desplazar la página hasta el contenedor de recomendaciones
        recommendationsDiv.scrollIntoView({
            behavior: 'smooth',  // Hacer el desplazamiento suave
            block: 'start'       // Asegurarse de que el contenedor quede en la parte superior visible
        });
    } else {
        recommendationsDiv.innerHTML = "<p>No results found.</p>";
    }
}

// Función para resetear la búsqueda
function resetSearch() {
    document.getElementById("search").value = ""; // Limpiar el campo de búsqueda
    document.getElementById("recommendations").innerHTML = ""; // Limpiar los resultados
}
