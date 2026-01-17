// Local Storage Keys
const KEYS = {books:'books', students:'students', issues:'issues', logs:'logs'};


const read = key => JSON.parse(localStorage.getItem(key) || '[]');
const write = (key, val) => localStorage.setItem(key, JSON.stringify(val));


// Navigation
document.querySelectorAll('nav button[data-view]').forEach(btn => btn.onclick = () => {
document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
btn.classList.add('active');


document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
document.getElementById(btn.dataset.view).classList.add('active');


refresh();
});


// Add Book
formAddBook.onsubmit = e => {
e.preventDefault();
const books = read(KEYS.books);
books.push({
id:Date.now(),
title:book_title.value,
author:book_author.value,
pub:book_pub.value,
branch:book_branch.value,
qty:+book_qty.value,
price:+book_price.value
});
write(KEYS.books, books);
refresh();
alert("Book Added!");
e.target.reset();
};


// Add Student
formAddStudent.onsubmit = e => {
e.preventDefault();
const students = read(KEYS.students);
students.push({
id:Date.now(), name:stu_name.value, matric:stu_matric.value, dept:stu_dept.value
});
write(KEYS.students, students);
refresh();
alert("Student Added!");
e.target.reset();
};


// Populate lists
function refresh() {
document.getElementById("countBooks").textContent = read(KEYS.books).length;
document.getElementById("countStudents").textContent = read(KEYS.students).length;
document.getElementById("countIssues").textContent = read(KEYS.issues).length;
}


refresh();