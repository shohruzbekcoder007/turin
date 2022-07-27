$(document).ready(function () {
    $(".ui.sidebar")
      .sidebar({
        context: $(".bottom.segment"),
      })
      .sidebar("attach events", ".menu .item");
  
    const usebody = document.querySelector("#locationbody");
  
    const allUsers = async () => {
      try {
        const { data } = await axios.get("/location/element_all");
        data.forEach((elem) => {
          let tr = document.createElement("tr");
          tr.id = elem._id;
          let td1 = document.createElement("td");
          td1.textContent = elem.name;
          let td2 = document.createElement("td");
          td2.textContent = elem.building;
          let td4 = document.createElement("td");
          td4.textContent = elem.floor;
          let td5 = document.createElement("td");
          td5.textContent = elem.createdAt;
          let td6 = document.createElement("td");
          td6.textContent = elem.updatedAt;
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);
          usebody.appendChild(tr);
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    allUsers();
  });
  