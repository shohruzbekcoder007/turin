$(document).ready(function () {
    $(".ui.sidebar")
      .sidebar({
        context: $(".bottom.segment"),
      })
      .sidebar("attach events", ".menu .item");
  
    const usebody = document.querySelector("#conterbody");
  
    const allUsers = async () => {
      try {
        const { data } = await axios.get("/counter/element_all");
        data.forEach((elem) => {
          let tr = document.createElement("tr");
          tr.id = elem._id;
          let td1 = document.createElement("td");
          td1.textContent = elem.i1;
          let td2 = document.createElement("td");
          td2.textContent = elem.i2;
          let td3 = document.createElement("td");
          td3.textContent = elem.i3;
          let td4 = document.createElement("td");
          td4.textContent = elem.n_v1;
          let td5 = document.createElement("td");
          td5.textContent = elem.n_v2;
          let td6 = document.createElement("td");
          td6.textContent = elem.n_v3;
          let td7 = document.createElement("td");
          td7.textContent = elem.v1_v2;
          let td8 = document.createElement("td");
          td8.textContent = elem.v1_v3;
          let td8_1 = document.createElement("td");
          td8.textContent = elem.v2_v3;
          let td8_2 = document.createElement("td");
          td8.textContent = elem.cos;
          let td8_3 = document.createElement("td");
          td8.textContent = elem.counterName;
          let td9 = document.createElement("td");
          td9.textContent = elem.createdAt;
          let td10 = document.createElement("td");
          td10.textContent = elem.updatedAt;
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);
          tr.appendChild(td7);
          tr.appendChild(td8);
          tr.appendChild(td8_1);
          tr.appendChild(td8_2);
          tr.appendChild(td8_3);
          tr.appendChild(td9);
          tr.appendChild(td10);
  
          usebody.appendChild(tr);
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    allUsers();
  });