export class Deferred {
    #fns;

    constructor() {
        this.#fns = [];
    }

    then(fn) {
        this.#fns.push(fn);
    }

    resolve(arg) {
        this.#fns.forEach(f => arg = f(arg), arg);
    }

}