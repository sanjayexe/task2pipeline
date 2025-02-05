let data = [
  {
    id: 1,
    name: "sanjay",
    email: "sanjay.jay18v@gmail.com",
  },
  {
    id: 2,
    name: "sanjay vs",
    email: "sanjayvs.18v@gmail.com",
  },
  {
    id: 3,
    name: "renish",
    email: "renish@gmail.com",
  },
];
form = document.querySelector(".form");
table = document.querySelector(".tb-data");
add_btn = document.querySelector(".addbtn");
create_form = document.querySelector(".create-form");
update_form = document.querySelector(".update-form");
update_btn = document.getElementById("update_btn");
edit_btn = document.getElementById("edit_btn");
delete_btn = document.getElementById("delete_btn");
//to prevent auto reload after an event in the form
form.addEventListener("click", (e) => {
  e.preventDefault();
});

update_btn.addEventListener("click", () => {
  add_btn.classList.remove("d-none");
});

const display = () => {
  create_form.classList.remove("d-none");
  document.querySelector(".name").focus();
  add_btn.classList.add("d-none");
};
const readall = () => {
  const object = localStorage.getItem("object");
  if (object) {
    data = JSON.parse(object); // Load data from localStorage
  } else {
    localStorage.setItem("object", JSON.stringify(data)); // Initialize  if empty
  }

  var elements = "";
  data.map((record) => {
    elements += `
    <tr class="tb-data">
    <td>${record.name}</td>
    <td>${record.email}</td>
    <td> <button class="update" id="edit_btn" onclick="edit(${record.id})">Edit</button>
    <button class="del" id="delete_btn"  onclick="del(${record.id})">Delete</button>
    <td/>
    </tr>
    `;
  });
  table.innerHTML = elements;
};

const create = () => {
  let Id = data.length;
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;

  if (!name) {
    alert("Name is required!");
    return;
  }

  if (!email) {
    alert("Email is required!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }
  var newObj = { id: Id + 1, name: name, email: email };
  data.push(newObj);
  localStorage.setItem("object", JSON.stringify(data));
  readall();
  create_form.classList.add("d-none");
  add_btn.classList.remove("d-none");
};

const del = (id) => {
  data = data.filter((rec) => rec.id !== id);
  localStorage.setItem("object", JSON.stringify(data));
  readall();
};

const edit = (id) => {
  var obj = data.find((rec) => rec.id === id);
  document.querySelector(".uname").value = obj.name;
  document.querySelector(".uemail").value = obj.email;
  document.querySelector(".id").value = obj.id;
  // var tb_data = document.querySelector(".tb-data");
  // td = document.createElement("td");
  // tb_data.appendChild(td);
  update_form.classList.remove("d-none");
  add_btn.classList.add("d-none");
};

const update = () => {
  var id = parseInt(document.querySelector(".id").value);
  var name = document.querySelector(".uname").value;
  var email = document.querySelector(".uemail").value;

  if (!name) {
    alert("Name is required!");
    return;
  }

  if (!email) {
    alert("Email is required!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }
  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, name, email };
  localStorage.setItem("object", JSON.stringify(data));
  update_form.classList.add("d-none");
  readall();
};
