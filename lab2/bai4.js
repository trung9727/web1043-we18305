// Khai báo mảng ban đầu
let days = ["Tue", "Thu", "Sat", "Nine"];

// Thêm các phần tử mới vào mảng
days.splice(0, 0, "Mon", "We", "Fri", "Sun");

// Xóa phần tử "Nine" khỏi mảng
let index = days.indexOf("Nine");
if (index !== -1) {
  days.splice(index, 1);
}

// Sắp xếp lại thứ tự của mảng
let weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
days.sort((a, b) => weekdays.indexOf(a) - weekdays.indexOf(b));

console.log(days); // ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"]