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
      document.getElementById('updateconter').classList.toggle("dn");
        //- i1 i2 i3 n_v1 n_v2 n_v3 v1_v2 v1_v3 v2_v3 cos counterName
      document.getElementById('updatei1').value = element.i1
      document.getElementById('updatei2').value = element.i2
      document.getElementById('updatei3').value = element.i3
      document.getElementById('updaten_v1').value = element.n_v1
      document.getElementById('updaten_v2').value = element.n_v2
      document.getElementById('updaten_v3').value = element.n_v3
      document.getElementById('updatev1_v2').value = element.v1_v2
      document.getElementById('updatev1_v3').value = element.v1_v3
      document.getElementById('updatev2_v3').value = element.v2_v3
      document.getElementById('updatecos').value = element.cos
      document.getElementById('updatecounterName').value = element.counterName
  
      document.getElementById('updateconterbtn').addEventListener('click', (event) => {
        const options = {
          url: '/counter/update',
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            _id: element._id,
            updateData: {
                i1: document.getElementById('updatei1').value,
                i2: document.getElementById('updatei2').value,
                i3: document.getElementById('updatei3').value,
                n_v1: document.getElementById('updaten_v1').value,
                n_v2: document.getElementById('updaten_v2').value,
                n_v3: document.getElementById('updaten_v3').value,
                v1_v2: document.getElementById('updatev1_v2').value,
                v1_v3: document.getElementById('updatev1_v3').value,
                v2_v3: document.getElementById('updatev2_v3').value,
                cos: document.getElementById('updatecos').value,
                counterName: document.getElementById('updatecounterName').value,
                createdAt: new Date(element.createdAt),
                updatedAt: new Date()
            }
          }
        };
        
        axios(options)
          .then(response => {
            if(response.status === 200){
              window.location.href = "/counter"
            }
          }).catch(function (error) {
            console.log(error);
          })
      })
  
    }
  
    allUsers();
  
    document.getElementById("newconter").addEventListener("click", (event) => {
      document.querySelector("#createconter").classList.toggle("dn");
    });
  
    document
      .getElementById("createconterbtn")
      .addEventListener("click", (event) => {
        let i1= document.querySelector("#i1").value
        let i2= document.querySelector("#i2").value
        let i3= document.querySelector("#i3").value
        let n_v1= document.querySelector("#n_v1").value
        let n_v2= document.querySelector("#n_v2").value
        let n_v3= document.querySelector("#n_v3").value
        let v1_v2= document.querySelector("#v1_v2").value
        let v1_v3= document.querySelector("#v1_v3").value
        let v2_v3= document.querySelector("#v2_v3").value
        let cos= document.querySelector("#cos").value
        let counterName = document.querySelector("#counterName").value
        axios
          .post("/counter/create", {
            i1,
            i2,
            i3,
            n_v1,
            n_v2,
            n_v3,
            v1_v2,
            v1_v3,
            v2_v3,
            cos,
            counterName
          })
          .then(function (response) {
            if (response.status === 200) {
              window.location.href = "/counter";
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  });