const countries = [
    "México", "Bolivia", "Australia", "Rusia", "Argentina", 
    "Perú", "Corea", "España", "Japón", "EEUU", 
    "Colombia", "Francia", "Reino Unido", "China", "Brasil", 
    "Italia", "Alemania", "Sudáfrica"
];

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("country-select");
    const enterBtn = document.getElementById("enter-btn");
    const dashboard = document.getElementById("dashboard");
    const userCountrySpan = document.getElementById("user-country");

    // Llenar el select con los countryballs
    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    });

    enterBtn.addEventListener("click", function () {
        const selectedCountry = select.value;
        userCountrySpan.textContent = selectedCountry;
        document.getElementById("selection-container").style.display = "none";
        dashboard.style.display = "block";
    });
});
