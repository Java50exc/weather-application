import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-form.js";
import { Table} from "./ui/data-table.js";

const SCHEMA = [
    {columnName:"Date", fieldName: "date"},
    {columnName: "Hour", fieldName: "hour"},
    {columnName: "Temperature", fieldName: "temperature"}
];

const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
const dataForm = new DataForm("form-section", Object.keys(weatherConfig.cities), weatherConfig.maxDays);
const dataTable = new Table("table-section", "Forecast", SCHEMA);


async function showTemp({city, startDate, endDate, timeFrom, timeTo}) {
    try {
        let data = await dataProcessor.getTemperatureData(city, startDate, endDate, timeFrom, timeTo);
        clearTable();
        dataTable.addRows(data);
    } catch(e) {
        console.log(e);
    }
    

}

function clearTable() {
    dataTable.clear();
}

dataForm.addSubmitHandler(showTemp);
dataForm.addResetHandler(clearTable);