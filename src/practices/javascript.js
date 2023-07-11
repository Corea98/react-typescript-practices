function printValue(text, value) {
    console.log(text, value);
}

async function asyncFunction(value) {
    return new Promise(resolve => {
        printValue("Microtask queue", value);
        resolve(value);
    })
}

function forLoop() {
    for (var i = 0 ; i < 5 ; i++) {
        (function iife(realI) {
            setTimeout(function callbackTask() {
                printValue("Callback queue", realI)
            }, 1000)

            asyncFunction(realI);
        }(i))
    }
}

forLoop();