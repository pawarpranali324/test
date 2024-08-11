document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const courseName = document.getElementById('courseName').value;
    addCourse(courseName);
    document.getElementById('courseForm').reset();
});

document.getElementById('showSubjectsBtn').addEventListener('click', function() {
    const course = document.getElementById('courseSelect').value;
    document.getElementById('subjectList').innerHTML = ''; // Clear existing subjects
    const subjects = getSubjectsForCourse(course); // Get subjects for the selected course
    subjects.forEach(subject => addSubject(subject));
});

document.getElementById('addSubjectBtn').addEventListener('click', function() {
    const subjectName = document.getElementById('subjectName').value;
    if (subjectName) {
        addSubject(subjectName);
        document.getElementById('subjectName').value = '';
    }
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
    editButton.innerHTML = '&#9998;';
    editButton.onclick = function() {
        editCourse(row, courseNameCell);
    };
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '&#128465;';
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

function getSubjectsForCourse(course) {
    // This function should return the subjects for the selected course
    // For demonstration, we return some static data
    const subjects = {
        DAC: ['Subject 1', 'Subject 2'],
        DMC: ['Subject A', 'Subject B'],
        DESD: ['C', 'IoT'],
        DBDA: ['Data Science', 'Big Data'],
        DITISS: ['Cyber Security', 'Network Security']
    };
    return subjects[course] || [];
}

function addSubject(name) {
    const subjectList = document.getElementById('subjectList');

    const row = document.createElement('tr');

    const subjectNameCell = document.createElement('td');
    subjectNameCell.textContent = name;
    row.appendChild(subjectNameCell);

    const actionsCell = document.createElement('td');
    actionsCell.className = 'actions';
    
    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.innerHTML = '&#9998;';
    editButton.onclick = function() {
        editSubject(row, subjectNameCell);
    };
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '&#128465;';
    deleteButton.onclick = function() {
        deleteSubject(row);
    };
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);

    subjectList.appendChild(row);
}

function editSubject(row, subjectNameCell) {
    const newName = prompt('Enter new subject name:', subjectNameCell.textContent);
    if (newName) {
        subjectNameCell.textContent = newName;
    }
}

function deleteSubject(row) {
    if (confirm('Are you sure you want to delete this subject?')) {
        row.remove();
    }
}
