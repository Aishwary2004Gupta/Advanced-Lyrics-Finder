document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
            users.forEach(user => {
                const row = usersTable.insertRow();
                row.insertCell(0).textContent = user.username;
                row.insertCell(1).textContent = user.email;
                const deleteCell = row.insertCell(2);
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteUser(user.id, row));
                deleteCell.appendChild(deleteButton);
            });
        });
});

function deleteUser(userId, row) {
    fetch(`/api/users/${userId}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                row.remove();
            } else {
                alert('Failed to delete user');
            }
        });
}