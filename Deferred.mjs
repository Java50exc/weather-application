// export class Deferred {
//     #fns = [];

//     then(fn) {
//         this.#fns.push(fn);
//     }

//     resolve(arg) {
//         this.#fns.forEach(f => arg = f(arg));
//     }
// }

export class Deferred {
    #resolveArg;

    #promise = new Promise((fn) => {
        let intID = setInterval(() => {
            if (this.#resolveArg) {
                clearInterval(intID);
                fn(this.#resolveArg);
            }
        }, 100);
    });

    then(fn) {
        this.#promise = this.#promise.then(fn);
    }

    resolve(arg) {
        console.log(this.#promise.flag)
        this.#resolveArg = arg;
    }
}