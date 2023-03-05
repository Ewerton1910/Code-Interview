//2- Questão fibonacci
var fibonacci = [];
var n = parseInt(prompt("Digite a sequência que deseja ver: "))
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

console.log(fibonacci);