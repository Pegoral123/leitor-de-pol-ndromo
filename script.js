function leito() {
    var string = document.getElementById("string").value;

    var resultado = leitoPolindromo(string);
    document.getElementById("resposta").innerHTML = resultado;
}


function leitoPolindromo(string) {
    if (!string) {
        return "string inexistente"
    }

    return string.split("").reverse().join("") === string;

}