import { weatherConfig } from "../config/weather-config.js";

export class DataProcessor {
    #url;
    #cities;

    constructor(url, cities) {
        this.#url = url;
        this.#cities = cities;
    }

    async #getData(url) {
        const responseFromServer = await fetch(url);
        return responseFromServer.json();
    }

    async getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        const url = this.#getUrl(city, startDate, endDate, hourFrom, hourTo);
        const response = await this.#getData(url);
        return this.#processData(response);
    }

    #processData(response) {
        return response.hourly.time.map((elem, ind) => {
            const dateTime = elem.split('T');
            return {
                date: dateTime[0],
                hour: dateTime[1],
                temperature: response.hourly.temperature_2m[ind]
            };
        });
    }

    #getUrl(city, startDate, endDate, hourFrom, hourTo) {
        return `${this.#url}&latitude=${this.#cities[city].latitude}&longitude=${this.#cities[city].longitude}&start_hour=${startDate}T${hourFrom}&end_hour=${endDate}T${hourTo}`
    }
}