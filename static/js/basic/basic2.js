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
          usebody.appendChild(tr);
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    allUsers();
  });
  