function receivesAFunction(fnCallback) {
    return fnCallback();
}

function returnsANamedFunction(){
    return function myReturnFunction(){
        return "This is a named function";
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "This is an anonymous function";
    }
}