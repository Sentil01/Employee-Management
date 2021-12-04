const navContainer = document.querySelector(".navbar");
const adminForm = document.querySelector(".adminlogin");
const ceoForm = document.querySelector(".ceologin");
const body = document.querySelector("body");
const adminBtn = document.querySelector(".admin--loginbtn");
const ceoBtn = document.querySelector(".ceo--loginbtn");
const aForm = document.querySelector(".adminform");
const cForm = document.querySelector(".ceoform");
const cUser = document.querySelector(".ceoUser");
const aUser = document.querySelector(".adminUser");
const aPass = document.querySelector(".adminPass");
const cPass = document.querySelector(".ceoPass");
const logout = document.querySelector(".logout");
console.log(logout);

//Login Details
const state = {
  adminloginDetails: {
    userName: "admin",
    password: "admin1234",
  },
  ceologinDetails: {
    userName: "ceo",
    password: "ceo1234",
  },
};
//home
console.log(navContainer);
const gotoHome = function () {
  navContainer.addEventListener("click", function (e) {
    const target = e.target.closest(".nav");

    if (target.classList.contains("nav--home")) {
      body.style.backgroundImage =
        "url('../img/pexels-josh-sorenson-1714205.jpg')";
      adminForm.classList.add("hidden");
      ceoForm.classList.add("hidden");
    }
  });
};
//Admin Login
const adminloginPage = function () {
  navContainer.addEventListener("click", function (e) {
    const target = e.target.closest(".nav");

    if (target.classList.contains("nav--admin")) {
      // body.style.backgroundImage = "none";
      console.log("admin");
      ceoForm.classList.add("hidden");
      adminForm.classList.toggle("hidden");
      // body.style.backgroundColor = "black";
    }
  });
};
//Ceo Login
const ceologinPage = function () {
  navContainer.addEventListener("click", function (e) {
    const target = e.target.closest(".nav");

    if (target.classList.contains("nav--ceo")) {
      // body.style.backgroundImage = "none";
      console.log("ceo");
      adminForm.classList.add("hidden");
      ceoForm.classList.toggle("hidden");
    }
  });
};
const ceoLogin = function (user, pass) {
  const ceouser = cUser.value;
  console.log(ceouser);
  const ceopass = cPass.value;
  console.log(ceopass);
  const ceo = state.ceologinDetails;
  console.log(ceo);
  if (ceouser === ceo.userName && ceopass === ceo.password) {
    console.log("hi ceo");
    window.location.replace("/ceo");
  } else {
    alert("Wrong Login details......");
  }
};
const adminLogin = function () {
  const adminuser = aUser.value;
  console.log(adminuser);
  const adminpass = aPass.value;
  console.log(adminpass);
  const admin = state.adminloginDetails;
  //admin login
  if (adminuser === admin.userName && adminpass === admin.password) {
    console.log("hi admin");
    //Show employee Database
    window.location.replace("/admin");
  } else {
    alert("Wrong Login details......");
  }
};

const init = function () {
  gotoHome();
  adminloginPage();
  ceologinPage();
  cForm.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.closest(".ceo--loginbtn");
    console.log(target);
    if (target === ceoBtn) {
      ceoLogin();
    }
  });
  aForm.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target.closest(".admin--loginbtn");
    console.log(target);
    if (target === adminBtn) {
      adminLogin();
    }
  });
};
init();
