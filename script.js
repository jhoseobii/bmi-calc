function calculateBMI() {
 const name = document.getElementById('name').value;
 const gender = document.getElementById('gender').value;
 const weight = parseFloat(document.getElementById('weight').value);
 const height = parseFloat(document.getElementById('height').value);

 if (!name || !weight || !height) {
     alert('Please enter your name, valid weight, and height');
     return;
 }

 const heightInMeters = height / 100;
 const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

 generateBmiTable(bmi);

 document.getElementById('bmi').textContent = bmi;

 let healthStatus;
 if (bmi < 18.5) {
     healthStatus = 'underweight';
 } else if (bmi < 24.9) {
     healthStatus = 'normal weight';
 } else if (bmi < 29.9) {
     healthStatus = 'overweight';
 } else {
     healthStatus = 'obese';
 }

 const greeting = `Hello ${name}, your BMI is ${bmi} and you are ${healthStatus}.`;
 document.getElementById('greeting').textContent = greeting;
}

function generateBmiTable(userBmi) {
 const bmiTableDiv = document.getElementById('bmiTable');
 bmiTableDiv.innerHTML = `
     <h3>BMI Ranges</h3>
     <table>
         <tr>
             <th>BMI Range</th>
             <th>Category</th>
         </tr>
         <tr class="${userBmi < 18.5 ? 'highlight' : ''}">
             <td>Less than 18.5</td>
             <td>Underweight</td>
         </tr>
         <tr class="${userBmi >= 18.5 && userBmi < 24.9 ? 'highlight' : ''}">
             <td>18.5 - 24.9</td>
             <td>Normal weight</td>
         </tr>
         <tr class="${userBmi >= 25 && userBmi < 29.9 ? 'highlight' : ''}">
             <td>25 - 29.9</td>
             <td>Overweight</td>
         </tr>
         <tr class="${userBmi >= 30 ? 'highlight' : ''}">
             <td>30 and above</td>
             <td>Obese</td>
         </tr>
     </table>
 `;
}
