const searchinput = document.querySelector(".searchinput");
const seacrhbtn = document.querySelector(".searchbtn");

const editbtn = document.querySelector(".editbtn");
seacrhbtn.addEventListener("click", function (e) {
  console.log(searchinput.value);
  const name = searchinput.value;
  window.location.replace(`/admin/${name}`);
  const employeedetails = document.querySelector(".employeedetails");
  // employeedetails.classList.remove("hidden");
});
