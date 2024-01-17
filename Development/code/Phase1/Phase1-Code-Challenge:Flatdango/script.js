document.addEventListener("DOMContentLoaded", function () {
    // Fetch movie data from the JSON file
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            // Populate the movie menu
            const filmsContainer = document.getElementById("films");
            data.films.forEach(film => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<div class="film-details">
                                          <img src="${film.poster}" alt="${film.title}" />
                                          <div class="info">
                                              <h3>${film.title}</h3>
                                              <p><span class="label">ID:</span> <span>${film.id}</span></p>
                                              <p><span class="label">Runtime:</span> <span>${film.runtime}</span> minutes</p>
                                              <p><span class="label">Capacity:</span> <span>${film.capacity}</span></p>
                                              <p><span class="label">Showtime:</span> <span>${film.showtime}</span></p>
                                              <p><span class="label">Tickets Sold:</span> <span>${film.tickets_sold}</span>/<span>${film.capacity}</span></p>
                                              <p><span class="label">Description:</span> <span>${film.description}</span></p>
                                          </div>
                                      </div>`;
                filmsContainer.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));

    // Function to handle buying a ticket (you can customize this according to your needs)
    window.buyTicket = function () {
        alert("Ticket purchased successfully!");
    };
});
