const ceohome = document.querySelector(".ceohome");
const viewemployee = document.querySelector(".viewemployee");
const logout = document.querySelector(".logout");
ceohome.addEventListener("click", function (e) {
  window.location.replace("/ceo");
});
viewemployee.addEventListener("click", function (e) {
  window.location.replace("/ceoview");
});

logout.addEventListener("click", function (e) {
  window.location.replace("/home");
});
const searchinput = document.querySelector(".searchinput");
const searchbtn = document.querySelector(".searchbtn");

const editbtn = document.querySelector(".editbtn");
searchbtn.addEventListener("click", function (e) {
  console.log(searchinput.value);
  const name = searchinput.value;
  window.location.replace(`/ceo/${name}`);
  const employeedetails = document.querySelector(".employeedetails");
  // employeedetails.classList.remove("hidden");
});
