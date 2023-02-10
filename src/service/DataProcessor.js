export class DataProcessor {
    #url
    constructor(url) {
        this.#url = url;
    }
    async getData(latitude, longitude) {
           const responseFromServer =
            await fetch(`${this.#url}&latitude=${latitude}&longitude=${longitude}`);
            return responseFromServer.json();

            
    }
    getTemperatureData(city, startDate, endDate, hourFrom, hourTo) {
        //TODO
    }
}