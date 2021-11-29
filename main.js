//GITHUB            https://github.com/fishenchips/JavaScriptHandIn.git
//EventListeners
document.querySelector(".add-btn").addEventListener("click", calculateBudget);
document.querySelector(".profit-btn").addEventListener("click", calcProfit);
//skapar variablarna utanför i funktionen
let sumIncome = 0;
let sumCost = 0;
let profit = 0;
//Selectors
const selectorOption = document.querySelector("select"); // Drop down selector
const description = document.querySelector("#description"); //input despription
const value = document.querySelector("#value"); // input value
const incomeSection = document.querySelector(".income-list"); //income Div
const costSection = document.querySelector(".cost-list"); // cost Div
//deklarerar dessa utanför funktionen annars kommer innehållet ersättas varje gång vi trycker på knappen.
let incomeArray = [];
let costArray = [];
//Creating function to calculate income or cost
function calculateBudget(e) {
  e.preventDefault();
  //console.log("button works");
  // console.log(selectorOption.value) // works - shows the specifik selector value in console
  // if my constant for select.value is the same as value="Income":
  if (selectorOption.value == "Income") {
    //console.log("it works for income") // it works
    //income = negative)
    if (value.value <= 0) {
      alert("Please enter a positive value for income.");
    } else if (!description.value || !value.value) {
      //form isnt filled out correctly
      alert("Please fill in the whole form.");
    } else {
      // måste ha += annars kommer den ersätta när man lägger till ytterligare!!!
      incomeSection.innerHTML += `
            <p class="income-${description.value}"> ${description.value}:  ${value.value} SEK </p>
            `;
      incomeArray.push(value.value); // Adding the values to income array
    }
  }
  // else if ( välj cost - hamnar i cost div )
  else if (selectorOption.value == "Cost") {
    if (value.value <= 0) {
      alert("Please enter a positive value for cost.");
    } else if (!description.value || !value) {
      alert("Please fill in the whole form.");
    } else {
      costSection.innerHTML += `
            <p class="cost-${description.value}"> ${description.value}:    ${value.value} SEK </p>
            `;
      costArray.push(value.value); // Adding new values to cost array.
    }
  }
  // else = alert - please choose cost or income
  else {
    alert("Please select income or cost from the drop down list.");
  }
  //after pressing button, clear input values
  description.value = "";
  value.value = "";
  // after pressing button, selector is back to "Choose"
  selectorOption.value = "Choose type";
}
//Creating function to calculate profit
function calcProfit(e) {
  e.preventDefault();
  //nollställer värderna av summorna varje gång man trycker på knappen!!
  var sumIncome = 0;
  var sumCost = 0;
  console.log("buttons working");
  //loopa igenom och addera värderna
  for (var i = 0; i < incomeArray.length; i++) {
    sumIncome += parseFloat(incomeArray[i]);
  }
  //console.log(sumIncome) --- funkar
  for (var i = 0; i < costArray.length; i++) {
    sumCost += parseFloat(costArray[i]);
  }
  console.log("cost", sumCost);
  console.log("income", sumIncome);
  //Above works so make an equation out of it
  profit = sumIncome - sumCost;
  console.log("profit", profit);
  //adding innerHTML to .profit div
  document.querySelector(".profit").innerHTML = `
    <h1 class="profit-header">Profit</h1>
    <p class="profit-value"> ${profit} SEK</p>
    <div class="total-income-cost">
    <p class="total-income"> Total income: ${sumIncome} SEK </p>
    <p class="total-cost"> Total cost: ${sumCost} SEK </p>
    </div>
    `;
    // adding style (background) to the div only once button is pressed
  document.querySelector(".profit").style.backgroundColor =
    "rgb(248, 239, 220)";
  // DOM manipulation of <p> tag in profit div.
  if (profit > 0) {
    document.querySelector(".profit-value").style.color = "green";
  } else if (profit < 0) {
    document.querySelector(".profit-value").style.color = "red";
  } else {
    document.querySelector(".profit-value").innerHTML = `
        <p> ${"&plusmn;"} 0 SEK </p>
        `;
  }
}