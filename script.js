document.getElementById("click").addEventListener("click", function () {
    const birthDay = parseInt(document.getElementById("birthDay").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value);
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const currentDay = parseInt(document.getElementById("currentDay").value);
    const currentMonth = parseInt(document.getElementById("currentMonth").value);
    const currentYear = parseInt(document.getElementById("currentYear").value);

    const age_days = birthDay - currentDay;
    const age_months = birthMonth - currentMonth;
    const age_years = birthYear - currentYear;

    document.write(`عمرك هو ${age_days} يوم ${age_months} شهر ${age_years} سنة`);
}
);