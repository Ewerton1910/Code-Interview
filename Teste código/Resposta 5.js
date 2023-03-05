//5- Questão
function inverteString(str) {
    let newString = ""
    str = prompt("Digite o nome que deseja inverter: ")
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    alert("O inverso do que foi digitado é : " + newString)
    return newString;
}
inverteString()