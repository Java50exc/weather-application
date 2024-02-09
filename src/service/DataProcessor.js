import { weatherConfig } from "../config/weather-config.js";

export class DataProcessor {
    #url;
    #cities;

    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }

    async getData(latitude, longitude) {
        const responseFromServer =
            await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
        return responseFromServer.json();
    }

    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        const responseFromServer = await fetch(this.#getUrl(city, startDate, endDate, hourFrom, hourTo));
        const obj = await responseFromServer.json();

        return obj.hourly.time.map((elem, ind) => {
            const dateTime = elem.split('T');
            return {
                date: dateTime[0],
                hour: dateTime[1],
                temperature: obj.hourly['temperature_2m'][ind]
            };
        });
    }

    #isDateValid(startDate, endDate, hourFrom, hourTo) {
        const dateNow = new Date();
        const dateMax = new Date().setDate(dateNow.getDate() + weatherConfig.maxDays);
        const dateStart = new Date(`${startDate}T${hourFrom}`);
        const dateEnd = new Date(`${endDate}T${hourTo}`);
        return dateStart >= dateNow && dateEnd <= dateMax;
    }

    #getUrl(city, startDate, endDate, hourFrom, hourTo) {

        if (!this.#isDateValid(startDate, endDate, hourFrom, hourTo) || !this.#cities[city]) {
            throw 'invalid input data';
        }
        return `${this.#url}&latitude=${this.#cities[city].latitude}&longitude=${this.#cities[city].longitude}&start_hour=${startDate}T${hourFrom}:00&end_hour=${endDate}T${hourTo}:00`
    }
}