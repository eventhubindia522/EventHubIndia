
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const eventCards = document.querySelectorAll(".event-card");
const noResults = document.getElementById("noResults");


function filterEvents() {

    const searchValue = searchInput.value.toLowerCase().trim();
    const categoryValue = categoryFilter.value;

    let visibleEvents = 0;

    eventCards.forEach(card => {

        const cardText = card.innerText.toLowerCase();
        const cardCategory = card.dataset.category;

        const matchesSearch =
            cardText.includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            cardCategory === categoryValue;

        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleEvents++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleEvents === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


searchInput.addEventListener("input", filterEvents);

categoryFilter.addEventListener("change", filterEvents);
```
