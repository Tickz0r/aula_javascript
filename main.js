
function clicko(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";


    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado!");
}

function redirecionar(){
    window.open("https://lella.org/");
    //window.location.href = "https://lella.org/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mosue!";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";


}

function load(){
    alert("Pagina Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


//------------------------------------------------//


/*
function soma(n1, n2){
    return n1 + n2;
}
*/

//------------------------------------------------// 

/*
function validaIdade(idade){
    var validar = true;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    } 
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log (validaIdade(idade));
*/

//------------------------------------------------//

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//------------------------------------------------//

/*
var idade = prompt("Qual sua idade?");
if (idade > 18){
    alert > ("maior de idade");
    
}else{
    alert("menor de idade");
};
*/

//------------------------------------------------//

/*var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"} ]
console.log(frutas);
alert(frutas[1].nome);
*/

//------------------------------------------------//

/*var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta);
alert(fruta);
*/

/*var lista = ["maça", "pera", "laranja"];
lista.push ("uva");
lista.pop ("uva");
console.log (lista);
console.log (lista.toString()[0]);
console.log (lista.join(", "));
*/

//------------------------------------------------//

//var nome = "AAAAA";
//var n1 = 18;
//var n2 = 10;
//var frase = "Tickz0r";
//alert(nome+ " tem " + n1 + " anos");
//alert (n1 + n2);
//console.log (nome);
//console.log (n1 + n2);
//console.log (frase.replace("Tickz0r", "Tick"));
//console.log (frase.replace("Tickz0r", "Tick"));
//alert (frase.replace("Tickz0r", "Tick"));
