// Sample Exoplanet Data (replace with API calls if desired)
const exoplanets = [
    { name: "Proxima Centauri b", distance: "4.24", discoveryYear: 2016 },
    { name: "Kepler-452b", distance: "1400", discoveryYear: 2015 },
    { name: "TRAPPIST-1e", distance: "39.6", discoveryYear: 2017 },
    { name: "HD 209458 b", distance: "153", discoveryYear: 1999 },
  ];
  
  // Function to Load Planets
  function loadPlanets() {
    const container = document.getElementById('planet-container');
  
    exoplanets.forEach((planet) => {
      const card = document.createElement('div');
      card.classList.add('planet-card');
      card.innerHTML = `
        <h3>${planet.name}</h3>
        <p><strong>Distance:</strong> ${planet.distance} light-years</p>
        <p><strong>Discovery Year:</strong> ${planet.discoveryYear}</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Initialize the Page
  document.addEventListener('DOMContentLoaded', loadPlanets);
  