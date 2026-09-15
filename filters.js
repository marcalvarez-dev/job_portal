
const filterLocation = document.querySelector("#filter-location");

filterLocation.addEventListener("change", function () {
    const articles = document.querySelectorAll(".job-article")

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

const filterMod = document.querySelector("#filter-technology")

filterMod.addEventListener("change", function () {
    const selected = filterMod.value

    const articles = document.querySelectorAll(".job-article")


    articles.forEach(article => {
        const tech = article.dataset.tech

        if (selected === "" || selected === tech) {
            article.classList.remove("invisible")
        } else {
            article.classList.add("invisible")
        }
    })


})