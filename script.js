data = [
  {"name": "Alice", "fruit": "apple"},
  {"name": "Bob", "car": "Audi", "fruit": "banana"},
  {"name": "Charlie", "fruit": "pear", "car": "Ford"}
];

(function() {
  const el = document.getElementById("myTable");
  createSimpleTable(el, data, {
    "headers": ["name", "car"],
    "classList": ["table", "table-striped"]
  });
})();
