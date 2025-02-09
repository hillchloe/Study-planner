document.addEventListener("DOMContentLoaded", function () {
    let scheduleButton = document.getElementById("schedule-btn");
    let output = document.getElementById("study-plan");

    scheduleButton.addEventListener("click", function () {
        let examDate = new Date(document.getElementById("exam-date").value);
        let today = new Date();
        let daysLeft = Math.ceil((examDate - today) / (1000 * 60 * 60 * 24));

        if (daysLeft > 0) {
            output.innerHTML = `📅 You have <b>${daysLeft} days</b> left. Time to study! 📚`;
        } else {
            output.innerHTML = "⚠️ Exam date is invalid or already passed!";
        }
    });
});
