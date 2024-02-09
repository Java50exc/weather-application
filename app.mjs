import { Deferred } from "./Deferred.mjs";

const d = new Deferred()
d.then(function (res) { console.log("1 ", res); return "a"; });
d.then(function (res) { console.log("2 ", res); return "b"; });
d.then(function (res) { console.log("3 ", res); return "c"; });
d.resolve('hello');  





