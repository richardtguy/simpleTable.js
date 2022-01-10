# simpleTable.js
Create simple HTML tables from JSON data.

## Example usage
```javascript
data = [
  {"name": "Alice", "fruit": "apple"},
  {"name": "Bob", "car": "Audi", "fruit": "banana"},
  {"name": "Charlie", "fruit": "pear", "car": "Ford"}
];
const el = document.getElementById("myTable");
const options = {
  "headers": ["name", "car"],
  "classList": ["table", "table-striped"]
};
createSimpleTable(el, data, options);
```

## Data structure
Data must be structured as an array of objects, whereby keys map to columns and values are displayed as text.  It is not necessary for all columns to have data in all rows.

## Options
The `options` object is optional.

By default, column headings will be extracted automatically from the data provided.  To include only selected columns, or to specify the order in which they are displayed, use the `headers` option, providing column headings as an array.

To format the table, specify classes to be added to the `<table>` tag by providing an array to the `classList` option.
