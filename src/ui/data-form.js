const FORM_ID = "data-form-id";
const DATE_FROM_ID = "date-from-id";
const DATE_TO_ID = "date-to-id"
const CITIES_ID = "city-id";
const TIME_FROM_ID = "time-from-id";
const TIME_TO_ID = "time-to-id";

export class DataForm {
    #formElement;
    #dateFromElement;
    #dateToElement;
    #timeFromElement;
    #timeToElement;
    #maxDays

    constructor(parentId, cities, maxDays) {
        this.#maxDays = maxDays;
        const parentElement = document.getElementById(parentId);
        this.#fillForm(parentElement);
        this.#formElement = document.getElementById(FORM_ID);
        this.#dateToElement = document.getElementById(DATE_TO_ID);
        this.#dateFromElement = document.getElementById(DATE_FROM_ID);
        this.#timeFromElement = document.getElementById(TIME_FROM_ID);
        this.#timeToElement = document.getElementById(TIME_TO_ID);
        this.#setMinMaxDates(maxDays);
        this.#setCities(cities);
        this.#setTime();

    }
    #fillForm(parentElement) {
        parentElement.innerHTML = `<form id="${FORM_ID}">
            <input name="startDate" type="date" id="${DATE_FROM_ID}" required>
            <input name="endDate" type="date" id="${DATE_TO_ID}" required>
            <select name="city" id="${CITIES_ID}" required></select>
            <select name="timeFrom" id="${TIME_FROM_ID}" required></select>
            <select name="timeTo" id="${TIME_TO_ID}" required></select>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>`
    }

    #setMinMaxDates(maxDays) {
        const current = new Date();
        const maxDayOfMonth = current.getDate() + maxDays;
        const maxDate = new Date();
        maxDate.setDate(maxDayOfMonth);
        const minDateStr = current.toISOString().split("T")[0];
        const maxDateStr = maxDate.toISOString().split("T")[0];
        this.#dateFromElement.min = minDateStr;
        this.#dateToElement.min = minDateStr;
        this.#dateFromElement.max = maxDateStr;
        this.#dateToElement.max = maxDateStr;

        this.#dateFromElement.addEventListener('change', () => {
            this.#dateToElement.min = this.#dateFromElement.value;
        });

        this.#dateToElement.addEventListener('change', () => {
            this.#dateFromElement.max = this.#dateToElement.value;
        })
    }

    #setCities(cities) {
        document.getElementById(CITIES_ID).innerHTML = 
        "<option selected disabled>Select city</option>" +
        cities.map(elem => `<option value="${elem}">${elem.split("_").join(" ")}</option>`).join("");
    }

    #setTime() {
        this.#timeFromElement.innerHTML = "<option selected hidden disabled>Select time from</option>";
        this.#timeToElement.innerHTML = "<option selected hidden disabled>Select time to</option>";

        let options = '';
        for (let i = 0; i < 24; i++) {
            const time = i < 10 ? "0"  + i : i;
            options += `<option value="${time}:00">${time}:00</option>`;
        }

        

        this.#timeFromElement.innerHTML += options;
        this.#timeToElement.innerHTML += options;
    }

    addSubmitHandler(handlerFn) {
        this.#formElement.addEventListener("submit", async (event) => {
            event.preventDefault();
            const obj = Array.from(this.#formElement.querySelectorAll("[name]"))
            .reduce((acc, cur) => {
                acc[cur.name] = cur.value;
                return acc;
            }, {});

            try {
                this.#validateInput(obj);
                handlerFn(obj);
            } catch (e) {
                alert(e);
            }
        });
    }

    addResetHandler(handlerFn) {
        this.#formElement.addEventListener("reset", () => {
            handlerFn();
            this.#setMinMaxDates(this.#maxDays);
        });

    }

    #validateInput(obj) {
        if (obj.startDate > obj.endDate) {
            throw new Error('start date should be before end date');
        }
        if (obj.startDate == obj.endDate && obj.timeFrom > obj.timeTo) {
            throw new Error('start time should be before end time'); 
        }      
    }




}