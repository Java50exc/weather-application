import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-form.js";
import { Table } from "./ui/table.js";
const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);

const dataForm = new DataForm("form-section", Object.keys(weatherConfig.cities),
    weatherConfig.maxDays);
const table = new Table("table-section", "Temperature Values",
    [{ columnName: "Date", fieldName: "date" },
    { columnName: "Hour", fieldName: "hour" },
    { columnName: "Temperature", fieldName: "temperature" }])
dataForm.addHandler(async (data) => {
    const {city, startDate, endDate, hourFrom, hourTo} = data;
    const temperatures = await dataProcessor.getTemperatureData(city,
        startDate, endDate, hourFrom, hourTo);
        table.clear();
        temperatures.forEach(t => table.addRow(t));

})
