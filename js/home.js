document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()
    console.log('add momey')

    const bank = document.getElementById('bank').value
    const acountNumber = document.getElementById('acount-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = document.getElementById('add-pin').value
    
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const totalNewvAilableBalance = amount + availableBalance

    document.getElementById('available-balance')
    .innerText = totalNewvAilableBalance    
})