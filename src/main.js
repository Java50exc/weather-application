import { DataProcessor } from "./service/DataProcessor.js";
const url = "https://api.open-meteo.com/v1/gfs?hourly=temperature_2m&timezone=IST";
const dataProcessor = new DataProcessor(url);
async function displayTemperatures() {
    const data = await dataProcessor.getData(29.5577, 34.9519);
    console.log(data.hourly.temperature_2m)
}
displayTemperatures();
