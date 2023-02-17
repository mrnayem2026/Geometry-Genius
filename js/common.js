
// First card Function start
function getDate(firstN,b,h){
    let cardName = document.getElementById(firstN).innerText;
    let base = parseFloat(document.getElementById(b).value);
    let height = parseFloat(document.getElementById(h).value);
    let area = 0.5  * base * height;
    if(isNaN(area) || area < 0 ){
        alert("Please give valid number..")
    } else {
        displayData(cardName, area)
    }
   
}
// First card Function End





// common function to display data 
let count = 0;
function displayData(cardName, area) {
    count += 1;
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${count}</td>
      <td>${cardName}</td>
      <td>${ area}cm<sup>2</sup></td>
      <td>
      <button class="btn btn-sm ">Covert to m <sup>2</sup></button>
      </td> 
    `;
    container.appendChild(tr);
  }
  