$(document).ready(function () {
  $(".ui.sidebar")
    .sidebar({
      context: $(".bottom.segment"),
    })
    .sidebar("attach events", ".menu .item");

  const usebody = document.querySelector("#usebody");

  const allUsers = async () => {
    try {
      const { data } = await axios.get("/user/element_all");
      data.forEach((elem) => {
        let tr = document.createElement("tr");
        tr.id = elem._id;
        let td1 = document.createElement("td");
        td1.textContent = elem.firstName;
        let td2 = document.createElement("td");
        td2.textContent = elem.lastName;
        let td4 = document.createElement("td");
        td4.textContent = elem.email;
        let td5 = document.createElement("td");
        td5.textContent = elem.phone;
        let td6 = document.createElement("td");
        td6.textContent = elem.role;
        let td7 = document.createElement("td");
        td7.textContent = elem.createdAt;
        let td8 = document.createElement("td");
        td8.textContent = elem.updatedAt;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);

        let button1 = document.createElement("button");
        button1.classList.add("button");
        button1.classList.add("btn");
        button1.classList.add("btn-primary");
        button1.textContent = "Edit";
        button1.id = "edit";
        let td9 = document.createElement("td");
        td9.appendChild(button1);
        tr.appendChild(td9);
        button1.addEventListener("click", async (event) => {
          updateUser(elem)
        });

        let button2 = document.createElement("button");
        button2.classList.add("button");
        button2.classList.add("btn");
        button2.classList.add("btn-danger");
        button2.textContent = "Delit";
        button2.id = "delete";
        let td10 = document.createElement("td");
        td10.appendChild(button2);
        tr.appendChild(td10);

        button2.addEventListener("click",async (event) => {
          axios.delete("/user/delete", { data: { _id: elem._id } }).then(response => {
            window.location.href = "/user"
          }).catch(function (error) {
            console.log(error);
          })
        });

        usebody.appendChild(tr);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (element) => {
    document.getElementById('updateuser').classList.toggle("dn");
    document.getElementById('updatefirstName').value = element.firstName
    document.getElementById('updatelastName').value = element.lastName
    document.getElementById('updateemail').value = element.email
    document.getElementById('updatephone').value = element.phone
    document.getElementById('updaterole').value = element.role

    document.getElementById('updateuserbtn').addEventListener('click', (event) => {
      const options = {
        url: '/user/update',
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          _id: element._id,
          updateData: {
            firstName: document.getElementById('updatefirstName').value,
            lastName: document.getElementById('updatelastName').value,
            email: document.getElementById('updateemail').value,
            phone: document.getElementById('updatephone').value,
            role: document.getElementById('updaterole').value,
            createdAt: new Date(element.createdAt),
            updatedAt: new Date()
          }
        }
      };
      
      axios(options)
        .then(response => {
          if(response.status === 200){
            window.location.href = "/user"
          }
        }).catch(function (error) {
          console.log(error);
        })
    })

  }

  allUsers();

  document.getElementById("newuser").addEventListener("click", (event) => {
    document.querySelector("#createuser").classList.toggle("dn");
  });

  document
    .getElementById("createuserbtn")
    .addEventListener("click", (event) => {
      let firstName = document.querySelector("#firstName").value;
      let lastName = document.querySelector("#lastName").value;
      let email = document.querySelector("#email").value;
      let phone = document.querySelector("#phone").value;
      let password = document.querySelector("#password").value;
      let role = document.querySelector("#role").value;
      axios
        .post("/user/create", {
          firstName,
          lastName,
          email,
          phone,
          password,
          role,
        })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            window.location.href = "/user";
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
});
