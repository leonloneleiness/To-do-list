const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Thêm task mới
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Dấu X
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Cho phép click vào task để check hoặc xóa
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Lưu dữ liệu vào localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Hiển thị lại dữ liệu khi mở web
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Tự động hiển thị lại danh sách khi tải trang
showTask();

// Nhấn Enter để thêm task
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
