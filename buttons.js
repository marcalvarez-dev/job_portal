const jobs = document.querySelector(".jobs-results");

jobs?.addEventListener("click", () => {
    const element = event.target

    if (element.classList.contains("button-apply")) {
        element.classList.add("is-applied"),
            element.textContent = "¡Aplicado!",
            element.disabled = true
    }
})