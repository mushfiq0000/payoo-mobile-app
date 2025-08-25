const validPin = 1234

// function to get input values---------|

function getInputValueNumber(id) {
    const inputFild = document.getElementById(id).value
    const inputFildValueNumber = parseInt(inputFild)

    return inputFildValueNumber
}

function getInputValue(id) {
    const inputFild = document.getElementById(id).value

    return getInputValue
}

// Add Money Feature------------|

document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()

    const bank = getInputValue('bank')

    const acountNumber = document.getElementById('acount-number').value


    const amount = getInputValueNumber('add-amount')
    

    const pin = getInputValueNumber('add-pin')

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    if (acountNumber.length < 11) {
        alert('Please Provide Valid Number')
        return;
    }
    if (acountNumber.length >= 12) {
        alert('Please Provide Valid Number')
        return;
    }
    if (pin != validPin) {
        alert('please provide valid pin number')
        return;
    }

    const totalNewvAilableBalance = amount + availableBalance

    document.getElementById('available-balance')
    .innerText = totalNewvAilableBalance
})



// Cash Out Feature
 

document.getElementById('Withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()

    const agentNumber = getInputValueNumber('agent-number')

    const amount = getInputValueNumber('withdraw-amount')

    const pin = getInputValueNumber('pin-num')

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    if (agentNumber.length < 11) {
        alert('Please Provide Valid Number')
        return;
    }
    if (agentNumber.length >= 12) {
        alert('Please Provide Valid Number')
        return;
    }
    if (pin != validPin) {
        alert('please provide valid pin number')
        return;
    }

    const totalNewvAilableBalance = availableBalance - amount
 
    document.getElementById('available-balance')
    .innerText = totalNewvAilableBalance
    
})




// toggling feature--------------|

document.getElementById('add-button').addEventListener('click', function () {
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})

document.getElementById('cash-out-button').addEventListener('click', function () {
    document.getElementById('cash-out-parent').style.display ='block'
    document.getElementById('add-money-parent').style.display = 'none'
})