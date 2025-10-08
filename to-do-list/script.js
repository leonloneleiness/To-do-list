const inputBox = document.getElementById("input-box"); //input
const listContainer = document.getElementById("list-container"); //thêm task

function addTask() { //hàm thêm task
    if(inputBox.value === '') {
        alert("You must write something!");
    } 
    else { //tạo thẻ li
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); //tạo thẻ span
        span.innerHTML = "\u00d7"; //thêm dấu x
        li.appendChild(span); //thêm thẻ span vào thẻ li
    }
    inputBox.value = ""; //xóa nội dung trong input sau khi thêm task
    saveData(); //lưu dữ liệu vào local storage
}

listContainer.addEventListener("click", function(e) { //xóa task
    if(e.target.tagName === "LI") { //nếu thẻ li được click thì thêm class checked
        e.target.classList.toggle("checked");
        saveData(); //lưu dữ liệu vào local storage
    }
    else if(e.target.tagName === "SPAN") { //nếu thẻ span được click thì xóa thẻ li
        e.target.parentElement.remove();
        saveData(); //lưu dữ liệu vào local storage
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //lưu dữ liệu vào local storage
}  //lưu dữ liệu vào local storage

function showTask(){ //hiển thị dữ liệu từ local storage
    listContainer.innerHTML = localStorage.getItem("data"); //lấy dữ liệu từ local storage
}