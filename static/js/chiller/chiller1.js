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
  
          let button1 = document.createElement("button");
          button1.classList.add("button");
          button1.classList.add("btn");
          button1.classList.add("btn-primary");
          button1.textContent = "Edit";
          button1.id = "edit";
          let td11 = document.createElement("td");
          td11.appendChild(button1);
          tr.appendChild(td11);
          button1.addEventListener("click", async (event) => {
            updateUser(elem)
          });
  
          usebody.appendChild(tr);
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    const updateUser = async (element) => {
      document.getElementById('updatechiller').classList.toggle("dn");

    //   enteringWaterTemp leavingWaterTemp enteringGasTemp leavingGasTemp firstCircuitPressure controlPoint demandLimit chillerState
      document.getElementById('updateenteringWaterTemp').value = element.enteringWaterTemp
      document.getElementById('updateleavingWaterTemp').value = element.leavingWaterTemp
      document.getElementById('updateenteringGasTemp').value = element.enteringGasTemp
      document.getElementById('updateleavingGasTemp').value = element.leavingGasTemp
      document.getElementById('updatefirstCircuitPressure').value = element.firstCircuitPressure
      document.getElementById('updatecontrolPoint').value = element.controlPoint
      document.getElementById('updatedemandLimit').value = element.demandLimit
      document.getElementById('updatechillerState').value = element.chillerState
  
      document.getElementById('updatechillerbtn').addEventListener('click', (event) => {
        const options = {
          url: '/chiller/update',
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            _id: element._id,
            updateData: {
                enteringWaterTemp: document.getElementById('updateenteringWaterTemp').value,
                leavingWaterTemp: document.getElementById('updateleavingWaterTemp').value,
                enteringGasTemp: document.getElementById('updateenteringGasTemp').value,
                leavingGasTemp: document.getElementById('updateleavingGasTemp').value,
                firstCircuitPressure: document.getElementById('updatefirstCircuitPressure').value,
                controlPoint: document.getElementById('updatecontrolPoint').value,
                demandLimit: document.getElementById('updatedemandLimit').value,
                chillerState: document.getElementById('updatechillerState').value,
                createdAt: new Date(element.createdAt),
                updatedAt: new Date()
            }
          }
        };
        
        axios(options)
          .then(response => {
            if(response.status === 200){
              window.location.href = "/chiller"
            }
          }).catch(function (error) {
            console.log(error);
          })
      })
  
    }
  
    allUsers();
  
    document.getElementById("newchiller").addEventListener("click", (event) => {
      document.querySelector("#createchiller").classList.toggle("dn");
    });
  
    document
      .getElementById("createchillerbtn")
      .addEventListener("click", (event) => {
        let enteringWaterTemp = document.querySelector("#enteringWaterTemp").value;
        let leavingWaterTemp = document.querySelector("#leavingWaterTemp").value;
        let enteringGasTemp = document.querySelector("#enteringGasTemp").value;
        let leavingGasTemp = document.querySelector("#leavingGasTemp").value;
        let firstCircuitPressure = document.querySelector("#firstCircuitPressure").value;
        let controlPoint = document.querySelector("#controlPoint").value;
        let demandLimit = document.querySelector("#demandLimit").value;
        let chillerState = document.querySelector("#chillerState").value;
        axios
          .post("/chiller/create", {
            enteringWaterTemp,
            leavingWaterTemp,
            enteringGasTemp,
            leavingGasTemp,
            firstCircuitPressure,
            controlPoint,
            demandLimit,
            chillerState
          })
          .then(function (response) {
            if (response.status === 200) {
              window.location.href = "/chiller";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  });
  