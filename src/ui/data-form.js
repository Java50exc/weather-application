const FORM_ID = "data-form-id";
const DATE_FROM_ID = "date-from-id";
const DATE_TO_ID = "date-to-id";
const CITIES_ID = "cities-id";
const HOUR_FROM_ID = "hour-from-id";
const HOUR_TO_ID = "hour-to-id";
export class DataForm {
    #formElement;
    #dateFromElement;
    #dateToElement;
    #hourFromElement;
    #hourToElement;
    #citiesElement
    constructor(parentId, cities, maxDays) {
        const parentElement = document.getElementById(parentId);
        this.#fillForm(parentElement);
        this.#setElementReferences();
        this.#setMinMaxDates(maxDays);
        setHoursOptions(this.#hourFromElement);
        setHoursOptions(this.#hourToElement);
        setOptions(this.#citiesElement, cities);
    }
    #fillForm(parentElement) {
        parentElement.innerHTML = `<form id="${FORM_ID}" class="form-class">
           <div class="one-input">
            <select id="${CITIES_ID}" required >
                <option value hidden selected disabled>
                        --Select City--
                </option>
            </select>
            </div>
        <div class="two-inputs">
            <div class="date-label">
                <label>Enter Start Date for Forecast</label>
                <input type="date" id="${DATE_FROM_ID}" required>
            </div>
            <div class="date-label">
                <label>Enter End Date for Forecast</label>
                <input type="date" id="${DATE_TO_ID}"  required>
            </div>
        </div>
        <div class="two-inputs">
          <select id="${HOUR_FROM_ID}" required >
            <option value hidden selected disabled>
                --Select Hour From--
            </option>
          </select>
          <select id="${HOUR_TO_ID}" required >
            <option value hidden selected disabled>
                --Select Hour To--
            </option>
          </select>
        </div>  
            
        <div class="buttons-group">
            <button type="submit">Display Temperature Values</button>
            <button type="reset">Reset</button>
        </div>    
            
        </form>`
    }
    #setElementReferences() {
        this.#formElement = document.getElementById(FORM_ID);
        this.#dateToElement = document.getElementById(DATE_TO_ID);
        this.#dateFromElement = document.getElementById(DATE_FROM_ID);
        this.#citiesElement = document.getElementById(CITIES_ID);
        this.#hourFromElement = document.getElementById(HOUR_FROM_ID);
        this.#hourToElement = document.getElementById(HOUR_TO_ID);
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

    }
    addHandler(handlerFn) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            this.#onSubmit(handlerFn);
        })
    }
    async #onSubmit(handlerFn) {
        const message = this.#checkForm();
        if (message) {
            alert(message);
        } else {
            try {
                await handlerFn(this.#getData())
            }catch (e) {
                alert("Wrong configuration data, most likely incorrect forecast period");
            }
        }
    }
    #checkForm() {
        let message = '';
        if (this.#dateFromElement.value > this.#dateToElement.value) {
            message = `start date ${this.#dateFromElement.value} cannot be greater than end date ${this.#dateToElement.value}; `
        }
        if (+this.#hourFromElement.value > +this.#hourToElement.value) {
            message += `hour from ${this.#hourFromElement.value} cannot be greater than hour to ${this.#hourToElement.value}`
        }
        return message;
    }
    #getData() {
        const data = {};
        data.city = this.#citiesElement.value;
        data.startDate = this.#dateFromElement.value;
        data.endDate = this.#dateToElement.value;
        data.hourFrom = +this.#hourFromElement.value;
        data.hourTo = +this.#hourToElement.value;
        return data;
    }

}
function setOptions(element, options) {
    element.innerHTML += options.map(o => `<option value="${o}">${o}</option>`).join('');
}
function setHoursOptions(element) {
    const hours = [];
    for (let hour = 0; hour < 24; hour++) {
        hours.push(hour);
    }
    setOptions(element, hours)
}
