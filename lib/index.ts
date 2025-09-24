/* Request global gets reset. */
let requests = global.requests;
if (!requests) {
    console.log("Global requests reset:", global.requests);
    requests = global.requests = { counter: 0 };
    console.log("Requests after reset:", requests.counter);
} else console.log("Global request valid.");

export function getRequests() {
    requests.counter += 1;
    return requests.counter;
}

/* Dummies global is not reset. */
let dummies = global.__dummies;
if (!dummies) {
    console.log("Global dummies reset:", global.__dummies);
    dummies = global.__dummies = { counter: 0 };
    console.log("Dummies after reset:", dummies.counter);
} else console.log("Global dummies valid.");
