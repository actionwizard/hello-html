function temperature() {
  //To convert celcius to farenheit
  //(CEL * 9/5) + 32
  let c = document.getElementById("c").value;
  let f = (c * 9) / 5 + 32;
  document.getElementById("f").value = f;
}

function weight() {
  //To convert KGs to Pounds
  // KG * 2.2
  let kg = document.getElementById("kg").value;
  let lbs = kg * 2.2;
  document.getElementById("lbs").value = lbs;
}

function distance() {
  //To convert KMs to Miles
  // KM * 0.62137
  var km = document.getElementById("km").value;
  var m = km * 0.62137;
  document.getElementById("m").value = m;
}
