document.getElementById('expenseForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (!amount) {
        alert("Please enter an amount.");
        return;
    }

    const data = { type, amount, category, description };

    try {
        const response = await fetch("YOUR_GOOGLE_SCRIPT_WEB_APP_URL", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        document.getElementById('status').textContent = "Added successfully!";
        document.getElementById('expenseForm').reset();
    } catch (error) {
        document.getElementById('status').textContent = "Failed to add!";
    }
});