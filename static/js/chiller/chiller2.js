$(document).ready(function () {
    $(".ui.sidebar")
      .sidebar({
        context: $(".bottom.segment"),
      })
      .sidebar("attach events", ".menu .item");
  
    const usebody = document.querySelector("#chillerbody");
  
    const allUsers = async () => {
      try {
        const { data } = await axios.get("/chiller/element_all");
        data.forEach((elem) => {
          let tr = document.createElement("tr");
          tr.id = elem._id;
          let td1 = document.createElement("td");
          td1.textContent = elem.enteringWaterTemp;
          let td2 = document.createElement("td");
          td2.textContent = elem.leavingWaterTemp;
          let td3 = document.createElement("td");
          td3.textContent = elem.enteringGasTemp;
          let td4 = document.createElement("td");
          td4.textContent = elem.leavingGasTemp;
          let td5 = document.createElement("td");
          td5.textContent = elem.firstCircuitPressure;
          let td6 = document.createElement("td");
          td6.textContent = elem.controlPoint;
          let td7 = document.createElement("td");
          td7.textContent = elem.demandLimit;
          let td8 = document.createElement("td");
          td8.textContent = elem.chillerState;
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
  