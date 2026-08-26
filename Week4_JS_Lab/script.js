// Task 1: Dynamic Header Update

function updateTitle() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();

    document.getElementById("heading").innerText =
        `Current Time: ${timeString}`;
}

updateTitle();

setInterval(updateTitle, 1000);


// Task 2: Dark/Light Mode with Local Storage

let themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light"
    );

});


// Apply saved theme when page loads

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

}


// Task 3: Dynamic To-Do List

document.getElementById("addTask").addEventListener("click", function() {

    let taskText = document.getElementById("taskInput").value;

    if (taskText.trim() === "") {
        return;
    }

    let newTask = document.createElement("li");

    newTask.innerHTML = `${taskText}
        <button class="removeTask">Remove</button>`;

    document.getElementById("taskList").appendChild(newTask);

    document.getElementById("taskInput").value = "";

});


// Remove Task

document.getElementById("taskList").addEventListener("click", function(event) {

    if (event.target.classList.contains("removeTask")) {

        event.target.parentElement.remove();

    }

});


// Task 4: Keyboard Event

document.addEventListener("keydown", function(event) {

    if (event.key.toLowerCase() === "b") {

        document.body.style.backgroundColor = "blue";

    }

});


// Task 5: Form Validation with Modal Popup

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;

    let modal = document.getElementById("modal");

    let modalMessage = document.getElementById("modalMessage");


    if (!email.includes("@")) {

        modalMessage.innerText = "Invalid email format!";

    } else {

        modalMessage.innerText =
            "Form Submitted Successfully!";

    }

    modal.style.display = "block";

});


// Close Modal

document.getElementById("closeModal").addEventListener("click", function() {

    document.getElementById("modal").style.display = "none";

});