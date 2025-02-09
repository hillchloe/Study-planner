// AI-Based Task Suggestions
async function getAIPrediction(task) {
    const suggestions = {
        "study": "Revise notes for 30 minutes",
        "exercise": "Do a 15-minute warm-up workout",
        "meeting": "Prepare agenda before meeting"
    };

    return suggestions[task.toLowerCase()] || "No suggestions available";
}
