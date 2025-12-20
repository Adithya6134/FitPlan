// Select the form and the result display area
const form = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get values from input fields
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Basic Validation
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter valid numbers!";
        resultDiv.style.color = "red";
        return;
    }

    // Calculate BMI (Weight / (Height in meters)^2)
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine category
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    // Display Result
    resultDiv.innerHTML = `Your BMI is <span>${bmi}</span> (${category})`;
    resultDiv.style.color = "#2c3e50";
});