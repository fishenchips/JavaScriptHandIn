// När en trycker på "ADD";


// event - addEventListener()

document.querySelector(".add-btn").addEventListener("click", calculateBudget)
let incomeArray = [];
let costArray = [];

function calculateBudget(e) {
    e.preventDefault();
    const description = document.querySelector("#description").value //input despription
    const value = document.querySelector("#value").value // input value

    //console.log("button works");

// om en väljer income - ska hamna i income div ----  DONE
    const selectorOption = document.querySelector("select")   // Drop down selector
// console.log(selectorOption.value) // works - shows the specifik selector value in console

// if my constant for select.value is the same as value="Income":
    if(selectorOption.value=="Income"){
        //console.log("it works for income") // it works
        //definera diven vart de ska hamna
        const incomeSection = document.querySelector(".income-list")

            // fyller de i en negative income, alert (inte adderas i listan)
            //income = negative)
        if(value<=0){
                alert("Please enter a positive value for income.")
        }

        else if(!description || !value) {
            alert("Please fill in the whole form.")
        }

        else {
        // måste ha += annars kommer den ersätta när man lägger till ytterligare!!!
            incomeSection.innerHTML += `<p> ${description}    ${value} SEK </p>`
            incomeArray.push(value); // Adding the values to income array
            
            //loopa igenom och addera värderna
            var sumIncome = 0
            for (var i=0; i<incomeArray.length; i++) {
                sumIncome += Number(incomeArray[i])
            }
            //console.log(sumIncome) --- funkar
        }
    }

    //addCost = document.querySelector(".option-cost").textContent
    //console.log(addCost)

    // else if ( välj cost - hamnar i cost div )

    // else = alert - please choose cost or income

    else if(selectorOption.value =="Cost"){
        const costSection = document.querySelector(".cost-list")

        if(value<=0){
            alert("Please enter a positive value for cost.")
        }

        else if(!description || !value) {
            alert("Please fill in the whole form.")
        }

        else {
            costSection.innerHTML += `<p> ${description}    ${value} SEK </p>`
            costArray.push(value); //    // Adding new values to cost array.

            var sumCost = 0;
            for (var i=0; i<costArray.length; i++){
                sumCost += Number(costArray[i])
                //Console log utanför funkade!
            }
        }
    }

    else {
        alert("Please select income or cost.")
    }

    //checking if values are added to each array - Working!
    //console.log(incomeArray, costArray)
    
    //Creating a profit variable
    var profit = 0;
    profit= sumIncome-sumCost;


   console.log(profit)



    //adding innerHTML to .profit div
    const profitSection = document.querySelector(".profit")

    profitSection.innerHTML = `<h1 class="profit-header"> Profit </h1>
    <p>${profit}</p>
    `



}



// för add addera- let kostnadsLista = [tom array]
// let inkomstlista = [tom array]

        // LÄGG DEM UTANFÖR FUNKTIONENNNNN - annars varje gång vi trycker på knappen kommer arrayen att ersättas
// pusha kostander i kostnadslista


        // inkomstlista.push(value)

// console logga båda lsitorna och addera nya värden.

// samma för inkost
//Loopa igenom listorna och lagra total inkomst och kostnad

// om vi loopar har vi bara gått igenom, vi måste summera båda looperna.
        // skapa en var för vardera summor = 0.0
    // sen lägg var i loopen += kostnadsLista[i]
// console logga båda summorna utanför looperna
// plussar iho som string - även fast man har input = number

// inkomstSumma += Number(inkomstSumma[i]) måste ha Number 

// PROVA parseFloat ISTÄLLET!!!!! DÅ SKA DET FUNKGA FÖR DECIMALTAL

// vinst = inkomst - kostnad
// vinst ska lägga in i egen div - resultDiv