// Replace with your backend API endpoints
const realTimeDataUrl = "https://your-backend-api.com/current-data";
const predictionUrl = "https://your-backend-api.com/predict-data";

// Function to fetch and display real-time data
async function fetchRealTimeData() {
  try {
    const response = await fetch(realTimeDataUrl);
    const data = await response.json();
    document.getElementById("temperature").textContent = data.temperature;
    document.getElementById("humidity").textContent = data.humidity;
  } catch (error) {
    console.error("Error fetching real-time data:", error);
    document.getElementById("temperature").textContent = "Error";
    document.getElementById("humidity").textContent = "Error";
  }
}

// Function to fetch and display predicted data
async function fetchPredictedData(date) {
  try {
    const response = await fetch(`${predictionUrl}?date=${date}`);
    const data = await response.json();
    document.getElementById("predicted-temperature").textContent = data.predictedTemperature;
    document.getElementById("predicted-humidity").textContent = data.predictedHumidity;
  } catch (error) {
    console.error("Error fetching predicted data:", error);
    document.getElementById("predicted-temperature").textContent = "Error";
    document.getElementById("predicted-humidity").textContent = "Error";
  }
}

// Fetch real-time data when the page loads
window.onload = fetchRealTimeData;

// Refresh real-time data when the button is clicked
document.getElementById("refresh-btn").addEventListener("click", fetchRealTimeData);

// Handle prediction when the predict button is clicked
document.getElementById("predict-btn").addEventListener("click", () => {
  const dateInput = document.getElementById("date-input").value;
  if (dateInput) {
    fetchPredictedData(dateInput);
  } else {
    alert("Please select a date.");
  }
});