function rollDice () {
    const numOfDice = document.getElementById(`inputBox`).value;   
    const diceResult = document.getElementById(`diceResult`);
    const diceImages = document.getElementById(`diceImages`);

    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice${value}.png" width="100px">`);

    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');
}