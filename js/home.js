const validPin = 1234

// Add Money Feature------------|

document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()

    const bank = document.getElementById('bank').value

    const acountNumber = document.getElementById('acount-number').value

    const amount = parseInt(document.getElementById('add-amount').value)
    
    const pin =parseInt(document.getElementById('add-pin').value)

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

    const agentNumber = document.getElementById('agent-number').value

    const amount = parseInt(document.getElementById('withdraw-amount').value)

    const pin =parseInt(document.getElementById('pin-num').value)

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