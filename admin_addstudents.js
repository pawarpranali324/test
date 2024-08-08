let rollNumber = 13; // Starting roll number for new entries

function saveRow(button) {
    const row = button.closest('tr');
    const inputs = row.querySelectorAll('input, select');

    inputs.forEach(input => {
        input.disabled = true;
    });

    button.textContent = 'Edit';
    button.onclick = () => editRow(button);
}

function editRow(button) {
    const row = button.closest('tr');
    const inputs = row.querySelectorAll('input, select');

    inputs.forEach(input => {
        input.disabled = false;
    });

    button.textContent = 'Save';
    button.onclick = () => saveRow(button);
}

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
    updateRollNumbers();
}

function updateRollNumbers() {
    const rows = document.querySelectorAll('#students-table tbody tr');
    rollNumber = 1;
    rows.forEach(row => {
        row.querySelector('td input').value = rollNumber++;
    });
}

function addRow() {
    const table = document.getElementById('students-table').querySelector('tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="text" value="${rollNumber++}" disabled></td>
        <td><input type="text" value=""></td>
        <td><input type="text" value=""></td>
        <td>
            <select>
                <option value="">-</option>
                <option value="DAC">DAC</option>
                <option value="DMC">DMC</option>
            </select>
        </td>
        <td>
            <button onclick="saveRow(this)">Save</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    table.appendChild(newRow);
}
