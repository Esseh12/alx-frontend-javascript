import getResponseFromAPI from "./0-promise.js";

const respnse = getResponseFromAPI();
console.log(respnse instanceof Promise);