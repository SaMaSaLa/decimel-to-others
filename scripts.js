const numberEl = document.getElementById("number");
const btnEl = document.getElementById("button");
const tableDiv = document.getElementById("table");

btnEl.addEventListener("click", function () {
  const decimalNumber = parseInt(numberEl.value, 10);
  const binaryNumber = decimalNumber.toString(2);
  const hexNumber = decimalNumber.toString(6);
  const octalNumber = decimalNumber.toString(8);
  const hexaDecimalNumber = decimalNumber.toString(16);

  console.log(binaryNumber, hexNumber, octalNumber, hexaDecimalNumber);

  tableDiv.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("table");
  tableDiv.appendChild(table);

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const tro = document.createElement("tr");
  thead.appendChild(tro);

  const tho = document.createElement("th");
  tho.textContent = "Binary: ";
  tro.appendChild(tho);

  const thtw = document.createElement("th");
  thtw.textContent = "Hex: ";
  tro.appendChild(thtw);

  const thth = document.createElement("th");
  thth.textContent = "Octal: ";
  tro.appendChild(thth);

  const thfo = document.createElement("th");
  thfo.textContent = "Hexa Decimal: ";
  tro.appendChild(thfo);

  const trt = document.createElement("tr");
  tbody.appendChild(trt);

  const tdo = document.createElement("td");
  tdo.textContent = binaryNumber;
  trt.appendChild(tdo);

  const tdtw = document.createElement("td");
  tdtw.textContent = hexNumber;
  trt.appendChild(tdtw);

  const tdth = document.createElement("td");
  tdth.textContent = octalNumber;
  trt.appendChild(tdth);

  const tdfo = document.createElement("td");
  tdfo.textContent = hexaDecimalNumber;
  trt.appendChild(tdfo);
});
