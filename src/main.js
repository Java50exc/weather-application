import { DataProcessor } from "./service/DataProcessor.js";
import { weatherConfig } from "./config/weather-config.js";

const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
async function displayTemperatures() {
    const data = await dataProcessor.getTemperatureData("Tel_Aviv", "2024-02-09", "2024-02-10", "22", "00");
    console.log(data);
}
displayTemperatures();
