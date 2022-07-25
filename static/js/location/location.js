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
            axios.delete("/location/delete", { data: { _id: elem._id } }).then(response => {
              window.location.href = "/location"
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
      document.getElementById('updatelocation').classList.toggle("dn");
      document.getElementById('updatename').value = element.name
      document.getElementById('updatebuilding').value = element.building
      document.getElementById('updatefloor').value = element.floor
  
      document.getElementById('updatelocationbtn').addEventListener('click', (event) => {
        const options = {
          url: '/location/update',
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            _id: element._id,
            updateData: {
                name: document.getElementById('updatename').value,
                building: document.getElementById('updatebuilding').value,
                floor: document.getElementById('updatefloor').value,
                createdAt: new Date(element.createdAt),
                updatedAt: new Date()
            }
          }
        };
        
        axios(options)
          .then(response => {
            if(response.status === 200){
              window.location.href = "/location"
            }
          }).catch(function (error) {
            console.log(error);
          })
      })
  
    }
  
    allUsers();
  
    document.getElementById("newlocation").addEventListener("click", (event) => {
      document.querySelector("#createlocation").classList.toggle("dn");
    });
  
    document
      .getElementById("createlocationbtn")
      .addEventListener("click", (event) => {
        let name = document.querySelector("#name").value;
        let building = document.querySelector("#building").value;
        let floor = document.querySelector("#floor").value;
        axios
          .post("/location/create", {
            name,
            building,
            floor
          })
          .then(function (response) {
            console.log(response);
            if (response.status === 200) {
              window.location.href = "/location";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  });
  