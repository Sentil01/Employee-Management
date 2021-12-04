const employeeName = document.querySelector(".name");
console.log(employeeName);
const emppreview = document.querySelector(".emppreview");
const empname = document.querySelector(".empname");
const empview = document.querySelector(".empview");
const viewEmployee = document.querySelector(".viewemployee");
const adminhome = document.querySelector(".adminhome");
const employeeContainer = document.querySelector(".employeedetails");
const savebtn = document.querySelector(".savebtn");
const addEmployee = document.querySelector(".addemployee");
const logout = document.querySelector(".logout");
adminhome.addEventListener("click", function (e) {
  window.location.replace("/admin");
});
viewEmployee.addEventListener("click", function (e) {
  window.location.replace("/viewemployee");
});
addEmployee.addEventListener("click", function (e) {
  window.location.replace("/adminadd");
  // employeeContainer.classList.remove("hidden");
});

logout.addEventListener("click", function (e) {
  window.location.replace("/home");
});
// emppreview.addEventListener("click", function (e) {
//   console.log(e.target);
//   if (e.target.closest(".empname")) {
//     console.log(document.getElementsByTagName("li"));
//   }
//   console.log(emppreview);
// });
