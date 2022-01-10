function createSimpleTable(element, data, options) {
  // build table
  let t = document.createElement("table");
  let th = t.createTHead();
  let tb = t.createTBody();
  let headers = options.headers ? options.headers : Array.from(new Set(data.reduce((prev, current)  => prev.concat(Object.keys(current)), [])));
  let headerRow = th.insertRow(0)
  headers.forEach(function(header) {
    let c = headerRow.insertCell(-1);
    c.textContent = header;
  });
  data.forEach(function(row) {
    let tr = tb.insertRow(0);
    headers.forEach(header => tr.insertCell(-1));
    for (const d in row) {
      let c = tr.cells[headers.indexOf(d)];
      if (c !== undefined) c.textContent = row[d];
    };
  });

  // add classes
  options.classList.forEach(cls => t.classList.add(cls));

  // append table to the DOM
  element.appendChild(t);
}