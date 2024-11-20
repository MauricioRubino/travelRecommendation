// JSON simulado con datos de recomendaciones
const travelData = {
    countries: [
      {
        name: "Australia",
        cities: [
          { name: "Sydney", description: "Iconic landmarks" },
          { name: "Melbourne", description: "Cultural hub", },
        ],
      },
      {
        name: "Japan",
        cities: [
          { name: "Tokyo", description: "Modern and traditional", },
          { name: "Kyoto", description: "Historic temples" },
        ],
      },
    ],
    temples: [
      { name: "Angkor Wat", description: "Largest religious monument" },
      { name: "Taj Mahal", description: "Symbol of love" },
    ],
    beaches: [
      { name: "Bora Bora", description: "Turquoise waters" },
      { name: "Copacabana Beach", description: "Famous beach" },
    ],
  };
  
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
    } else {
      recommendationsDiv.innerHTML = "<p>No results found.</p>";
    }
  }
  
  // Función para resetear la búsqueda
  function resetSearch() {
    document.getElementById("search").value = ""; // Limpiar el campo de búsqueda
    document.getElementById("recommendations").innerHTML = ""; // Limpiar los resultados
  }
  