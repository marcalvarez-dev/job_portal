const jobs = document.querySelector(".jobs-results");

jobs?.addEventListener("click", () => {
    const element = event.target

    if (element.classList.contains("button-apply")) {
        element.classList.add("is-applied"),
            element.textContent = "¡Aplicado!",
            element.disabled = true
    }
})



const filterLocation = document.querySelector("#filter-location");

filterLocation.addEventListener("change", function () {
    let articles = document.querySelectorAll("article")

    if (filterLocation.value == "barcelona") {
        articles.forEach(function (elemento) {
            if (!elemento.textContent.includes("Barcelona")) {
                elemento.classList.add("invisible")
            } else {
                elemento.classList.remove("invisible")

            }
        }
        )
    } else if (filterLocation.value == "madrid") {
        articles.forEach(function (elemento) {
            if (!elemento.textContent.includes("Madrid")) {
                elemento.classList.add("invisible")
            } else {
                elemento.classList.remove("invisible")
            }
        })
    } else if (filterLocation.value == "remote") {
        articles.forEach(function (elemento) {
            if (!elemento.textContent.includes("Remoto")) {
                elemento.classList.add("invisible")
            } else {
                elemento.classList.remove("invisible")
            }
        })
    } else {
        articles.forEach(function (elemento) {
            elemento.classList.remove("invisible")
        })
    }
})


