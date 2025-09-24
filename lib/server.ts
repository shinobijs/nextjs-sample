"use server";

import { getRequests } from ".";

const getDummies = () => {
    global.__dummies.counter += 1;
    return global.__dummies.counter;
};

export const getGlobals = async () => {
    const requests = getRequests();
    const dummies = getDummies(global.__dummies);
    console.log("Requests:", requests);
    console.log("Dummies:", dummies);
    return { requests, dummies };
};
