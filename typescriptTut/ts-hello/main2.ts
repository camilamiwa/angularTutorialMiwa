function doSomething() {
    for (var i = 0; i < 5; i++){
        console.log(i);
    }

    console.log("Finally: " + i);
}

doSomething();

let message;
message = 'abc';
let ends1 = (<string>message).endsWith('c');
let ends2 = (message as string).endsWith('c');
