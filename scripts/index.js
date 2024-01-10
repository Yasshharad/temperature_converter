function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let result = '';

    if (isNaN(temperatureInput)) {
        result = 'Please enter a valid number.';
    } else {
        const temperature = parseFloat(temperatureInput);

        if (unitSelect === 'celsius') {
            const fahrenheit = (temperature * 9 / 5) + 32;
            const kelvin = temperature + 273.15;
            result = `Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>Kelvin: ${kelvin.toFixed(2)}K`;
        } else if (unitSelect === 'fahrenheit') {
            const celsius = (temperature - 32) * 5 / 9;
            const kelvin = (temperature - 32) * 5 / 9 + 273.15;
            result = `Celsius: ${celsius.toFixed(2)}°C<br>Kelvin: ${kelvin.toFixed(2)}K`;
        } else if (unitSelect === 'kelvin') {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
            result = `Celsius: ${celsius.toFixed(2)}°C<br>Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
        }
    }

    document.getElementById('result').innerHTML = result;
}
