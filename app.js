function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    editor.addEventListener("focus", () => {
        if (editor.textContent.trim() === "Start typing here...") {
            editor.textContent = "";
        }
    });

    editor.addEventListener("blur", () => {
        if (editor.textContent.trim() === "") {
            editor.textContent = "Start typing here...";
        }
    });
});
