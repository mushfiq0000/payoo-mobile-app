const validPin = 1234;

// function to get input values---------|

function getInputValueNumber(id) {
  const inputFild = document.getElementById(id).value;
  const inputFildValueNumber = parseInt(inputFild);

  return inputFildValueNumber;
}

function getInputValue(id) {
  const inputFild = document.getElementById(id).value;

  return getInputValue;
}

// function to get innerText-----------|

function getInnerText(id) {
  const element = document.getElementById("available-balance");
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function to toggle
function handleToggle(id) {
  const froms = document.getElementsByClassName("from");

  for (const from of froms) {
    from.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle buttons
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName("from-btn");

  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
    btn.classList.add("border-gray-300")
  }

  document.getElementById(id).classList.remove("border-gray-300");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");
}

// Add Money Feature------------|

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");

    const acountNumber = document.getElementById("acount-number").value;

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    console.log(pin);

    const availableBalance = getInnerText("available-balance");

    if (acountNumber.length < 11) {
      alert("Please Provide Valid Number");
      return;
    }
    if (acountNumber.length >= 12) {
      alert("Please Provide Valid Number");
      return;
    }
    if (pin != validPin) {
      alert("please provide valid pin number");
      return;
    }

    const totalNewvAilableBalance = amount + availableBalance;

    setInnerText(totalNewvAilableBalance);
  });

// Cash Out Feature

document.getElementById("Withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValueNumber("agent-number");

  const amount = getInputValueNumber("withdraw-amount");

  const pin = getInputValueNumber("pin-num");

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (agentNumber.length < 11) {
    alert("Please Provide Valid Number");
    return;
  }
  if (agentNumber.length >= 12) {
    alert("Please Provide Valid Number");
    return;
  }
  if (pin != validPin) {
    alert("please provide valid pin number");
    return;
  }

  const totalNewvAilableBalance = availableBalance - amount;

  setInnerText(totalNewvAilableBalance);
});

// toggling feature--------------|

// add money
document.getElementById("add-button").addEventListener("click", function () {

  handleToggle("add-money-parent");

  handleButtonToggle("add-button")
  
});

// cash out
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {

    handleToggle("cash-out-parent");

    handleButtonToggle("cash-out-button")
});
  

// Transfer Money

document
  .getElementById("transfer-money")
  .addEventListener("click", function () {

    handleToggle("transfer-money-parent");

    handleButtonToggle("transfer-money")
});


// Get Bonus

document.getElementById("get-bonus").addEventListener("click", function () {

  handleToggle("get-bonus-parent");

  handleButtonToggle("get-bonus")
});


// Pay Bill

document.getElementById("pay-bill").addEventListener("click", function () {

  handleToggle("pay-bill-parent");

  handleButtonToggle("pay-bill")
});

// Transactions

document.getElementById("transactions").addEventListener("click", function () {

  handleToggle("transactions-parent");

  handleButtonToggle("transactions");
});
