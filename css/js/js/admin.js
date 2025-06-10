document.getElementById("addTestForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("testTitle").value;
    const question = document.getElementById("questionText").value;

    alert("Test Added:\nTitle: " + title + "\nQuestion: " + question);
});
