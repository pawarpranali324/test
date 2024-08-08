document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const courseName = document.getElementById('courseName').value;
    addCourse(courseName);
    document.getElementById('courseForm').reset();
});

function addCourse(name) {
    const courseList = document.getElementById('courseList');

    const row = document.createElement('tr');

    const courseNameCell = document.createElement('td');
    courseNameCell.textContent = name;
    row.appendChild(courseNameCell);

    const actionsCell = document.createElement('td');
    actionsCell.className = 'actions';
    
    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editCourse(row, courseNameCell);
    };
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteCourse(row);
    };
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);

    courseList.appendChild(row);
}

function editCourse(row, courseNameCell) {
    const newName = prompt('Enter new course name:', courseNameCell.textContent);
    if (newName) {
        courseNameCell.textContent = newName;
    }
}

function deleteCourse(row) {
    if (confirm('Are you sure you want to delete this course?')) {
        row.remove();
    }
}
