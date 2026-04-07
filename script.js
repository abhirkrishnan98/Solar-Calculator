function calculateSolar() {
  let bill = document.getElementById("bill").value;

  if (!bill || bill <= 0) {
    alert("Please enter a valid bill amount");
    return;
  }

  // Basic assumptions
  let costPerUnit = 8; // ₹ per kWh
  let units = bill / costPerUnit;

  let systemSize = units / 120; // 1 kW ≈ 120 units/month
  let installationCost = systemSize * 60000;
  let savings = bill * 0.9;

  document.getElementById("result").innerHTML = `
    ⚡ System Size: ${systemSize.toFixed(2)} kW <br>
    💰 Estimated Cost: ₹${installationCost.toFixed(0)} <br>
    📉 Monthly Savings: ₹${savings.toFixed(0)}
  `;
}