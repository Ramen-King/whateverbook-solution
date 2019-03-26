window.onload = init;

function init() {
    document.querySelector('#display-all')
        .addEventListener('click', displayAll);
    document.querySelector('#search')
        .addEventListener('click', search);
}

function displayAll(event) {
    event.preventDefault();

    emptyList();

    for(let i = 0; i < headInstructors.length; i++) {
        display(headInstructors[i]);
    }
    
}

function search(event) {
    event.preventDefault();

    const userInput = document.querySelector('#search-input').value;

    for(let i = 0; i < headInstructors.length; i++) {
        const instructor = headInstructors[i];
        if (userInput.toLowerCase() === instructor.lastName.toLowerCase()) {
            emptyList();
            display(instructor);
        }
    }
}

function display(instructor) {
    const instructorsUl = document.querySelector('#instructor-list');

    const instructorLi = document.createElement('li');
    const instructorData = document.createElement('ul');
    instructorLi.appendChild(instructorData);

    const name = document.createElement('li');
    name.innerText = `Name: ${instructor.firstName} ${instructor.lastName}`;
    instructorData.appendChild(name);

    const term = document.createElement('li');
    term.innerText = `Term: ${instructor.term}`;
    instructorData.appendChild(term);

    const usesLinux = document.createElement('li');
    usesLinux.innerText = `Uses Linux: ${instructor.usesLinux ? 'Yes' : 'No'}`;
    instructorData.appendChild(usesLinux);

    instructorsUl.appendChild(instructorLi);
}

function emptyList() {
    const instructorList = document.querySelector('#instructor-list');

    while(instructorList.hasChildNodes()) {
        instructorList.firstChild.remove();
    }
}