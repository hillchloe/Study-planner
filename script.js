document.addEventListener("DOMContentLoaded", function () {
    // Create input field and button dynamically
    let container = document.createElement("div");
    container.innerHTML = `
        <h2>📅 Study Planner</h2>
        <label for="exam-date">Select Your Exam Date:</label>
        <input type="date" id="exam-date">
        <button id="schedule-btn">Generate Study Plan</button>
        <p id="study-plan"></p>
    `;

    // Add elements to the body
    document.body.appendChild(container);

    // Select elements after adding them
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
