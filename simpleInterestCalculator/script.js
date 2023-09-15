function compute() {
  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;

  let interest = (principal * rate * years) / 100;

  let amount = Number(principal) + Number(interest);

  let result = document.getElementById("result");

  //Write the logic to convert the ‘No. of Years’ into the actual year in the future.
  let year = new Date().getFullYear() + Number(years);

  if (principal <= 0) {
    alert("Please enter a positive amount");
    document.getElementById("principal").focus();
  } else {
    let str = `If you deposit <mark>${principal}</mark>, <br> at an interest of <mark> ${rate}% </mark>. <br> You will recieve
               an amount of <mark> ${amount} </mark>,<br> in the year <mark> ${year} </mark>.`;
    result.innerHTML = str;
  }
}

function updateRate() {
  let rate = document.getElementById("rate").value; //Accessing the html element by its id and Getting the value of the object

  //Updating the rate
  document.getElementById("rateVal").innerText = rate;
}
