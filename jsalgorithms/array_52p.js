var fibonacci = [];
fibonacci = [2];
fibonacci = [3];

for (var i=3; i < 20; i++) {
    fibonacci[i] = fibonacci [i-1] + fibonacci [i-2];
}

for (var i = 1; i<fibonacci.length; i++) {
    console.log(fibonacci[i]);
}