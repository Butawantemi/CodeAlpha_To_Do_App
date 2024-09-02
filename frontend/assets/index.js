document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-todo-btn').addEventListener('click', () => {
        showSection('todo-form-section');
    });

    document.getElementById('create-todo-btn').addEventListener('click', async () => {
        const title = document.getElementById('todo-title').value;
        const description = document.getElementById('todo-description').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        // Validation check
        if (!title) {
            alert('Title is required!');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, description, startDate, endDate })
            });
            
            if (response.ok) {
                const todo = await response.json();
                displayTodoDetails(todo);
                showSection('todo-details-section');
            } else {
                alert('Failed to create to-do. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please check the console for more details.');
        }
    });

    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => section.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');
    }

    function displayTodoDetails(todo) {
        document.getElementById('todo-title-display').textContent = todo.title;
        document.getElementById('todo-description-display').textContent = todo.description;
        document.getElementById('start-date-display').textContent = new Date(todo.startDate).toLocaleDateString();
        document.getElementById('end-date-display').textContent = new Date(todo.endDate).toLocaleDateString();
    }
});
