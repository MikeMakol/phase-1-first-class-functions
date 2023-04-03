
function receivesAFunction(callback) {
    return callback(callback);
}
receivesAFunction(spy);

function returnsANamedFunction() {
    return receivesAFunction();
}
returnsANamedFunction();

const returnsAnAnonymousFunction = function () {
    console.log("Code runs!");
}
returnsAnAnonymousFunction();





