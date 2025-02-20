function generate() {
  let str = "<table border='1'>";
  let data = Number(document.getElementById("data").value);
  console.log(typeof(data));
  
  for (let index = 1; index <= 10; index++) {
    str +=
      "<tr><td>" +
      data +
      "</td><td>" +
      "*" +
      "</td><td>" +
      index +
      "</td><td>" +
      "=" +
      "</td><td>" +
      data * index +
      "</td></tr>";
  }
  str += "</table>";
  console.log(str);

  document.getElementById("result").innerHTML = str;
}
