//Mongoose
const mongoose = require("mongoose");
const { connect } = require("http2");
mongoose
  .connect("mongodb://localhost:27017/emp")
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((e) => {
    console.log("Connection /error");
  });
const empSchema = new mongoose.Schema({
  employeename: String,
  age: Number,
  dob: String,
  gender: String,
  qualification: String,
  email: String,
  phno: Number,
  ecode: String,
  etype: String,
  estatus: String,
  join: String,
  description: String,
  skills: String,
  designation: String,
});
const Employee = mongoose.model("Emp", empSchema);

//Express
const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const static_path = path.join(__dirname, "/public");
console.log(static_path);
app.use(express.static(static_path));
app.set("view engine", "ejs");

// const db = getDB("mongodb://localhost:27017/emp");

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/main.html"));
});
app.get("/admin", async (req, res) => {
  // res.sendFile(path.join(__dirname, "/public/admin.html"));
  const arr = await Employee.find().where("employeename");
  console.log(arr);
  let array = [];
  arr.forEach((a) => {
    array.push(a.employeename);
  });
  console.log(array);
  res.render("admin", { array });
});
app.get("/ceo", async (req, res) => {
  const arr = await Employee.find().where("employeename");
  console.log(arr);
  let array = [];
  arr.forEach((a) => {
    array.push(a.employeename);
  });
  console.log(array);
  res.render("ceo", { array });
});
app.get("/viewemployee", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/viewemployee.html"));
});
app.get("/ceoview", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/ceo.html"));
});
app.get("/adminadd", (req, res) => {
  res.render("adminadd");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  const { employeename } = req.body;
  const { age } = req.body;
  const { dob } = req.body;
  const { gender } = req.body;
  const { qualification } = req.body;
  const { email } = req.body;
  const { phno } = req.body;
  const { ecode } = req.body;
  const { etype } = req.body;
  const { estatus } = req.body;
  const { join } = req.body;
  const { description } = req.body;
  const { skills } = req.body;
  const { designation } = req.body;

  // let employee = employeeName;
  // console.log(employee);
  // console.log(employeeName);
  const employee = new Employee({
    employeename: employeename,
    age: age,
    dob: dob,
    gender: gender,
    qualification: qualification,
    email: email,
    phno: phno,
    ecode: ecode,
    etype: etype,
    estatus: estatus,
    join: join,
    description: description,
    skills: skills,
    designation: designation,
  });
  employee.save();
  console.log(employee);
  // res.sendFile(path.join(__dirname, "/public/admin.html"));
  res.redirect("/admin");
});
app.get("/admin/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const emp = await Employee.find();
  console.log(emp);
  let e;
  try {
    e = await Employee.findOne({ employeename: name });
    console.log(e);
  } catch (err) {
    console.log(`Error`);
    console.error(err);
  }
  if (e === null) {
    res.render("error");
  } else {
    res.render("viewemployee", { e });
  }
});
app.get("/ceo/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  const emp = await Employee.find();
  console.log(emp);
  const e = await Employee.findOne({ employeename: name });
  console.log(e);
  if (e === null) {
    res.render("ceoerr");
  } else {
    res.render("ceoview", { e });
  }
});

app.post("/admin/edit", async (req, res) => {
  const { employeename } = req.body;
  console.log(`Edited ${employeename}`);
  const { age } = req.body;
  const { dob } = req.body;
  const { gender } = req.body;
  const { qualification } = req.body;
  const { email } = req.body;
  const { phno } = req.body;
  const { ecode } = req.body;
  const { etype } = req.body;
  const { estatus } = req.body;
  const { join } = req.body;
  const { description } = req.body;
  const { skills } = req.body;
  const { designation } = req.body;
  const crntemp = employeename.trim();
  console.log(`Crnt: ${crntemp}`);
  const crnt = await Employee.findOne({ employeename: crntemp });
  console.log(crnt);
  await Employee.updateOne(
    {
      employeename: crntemp,
    },
    {
      $set: {
        age: age,
        dob: dob,
        gender: gender,
        qualification: qualification,
        email: email,
        phno: phno,
        ecode: ecode,
        etype: etype,
        estatus: estatus,
        join: join,
        description: description,
        skills: skills,
        designation: designation,
      },
    }
  );
  const newEmp = await Employee.findOne({ employeename: crntemp });
  console.log(newEmp);
  res.redirect("/admin");
});
app.get("/admin/delete/:name", async (req, res) => {
  const { name } = req.params;
  console.log(name);
  await Employee.deleteOne({ employeename: name });
  // await Employee.save();
  console.log(Employee.find());
  res.redirect("/admin");
});
app.listen(3000, (req, res) => {
  console.log("Listening To the'port 3000");
  console.log("http://localhost:3000/home");
});
