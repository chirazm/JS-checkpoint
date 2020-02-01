var operande_a;
var operande_b;
var operation;
function set() {
        var zero = document.getElementById("zero");
        var un = document.getElementById("un");
        var deux = document.getElementById("deux");
        var trois = document.getElementById("trois");
        var quatre = document.getElementById("quatre");
        var cinq = document.getElementById("cinq");
        var six = document.getElementById("six");
        var sept = document.getElementById("sept");
        var huit = document.getElementById("huit");
        var neuf = document.getElementById("neuf");
        var resultat = document.getElementById("resultat");
        var reset = document.getElementById("reset");
        var fois = document.getElementById("fois");
        var moins = document.getElementById("moins");
        var plus = document.getElementById("plus");
        var division = document.getElementById("division");
        var egale = document.getElementById("egale");

zero.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "0";
}
 
un.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "1";
}
 
deux.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "2";
}
 
trois.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "3";
}
 
quatre.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "4";
}
 
cinq.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "5";
}
 
six.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "6";
}
 
sept.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "7";
}
 
huit.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "8";
}
 
neuf.onclick = function(e){
    resultat.innerHTML = resultat.innerHTML + "9";
}
 
reset.onclick = function(e){
    resetCalc();
}
 
plus.onclick = function(e) {
    operande_a = resultat.innerHTML;
    resultat.innerHTML = resultat.innerHTML +"+";
    operation= "+";
    resultat.innerHTML ="";
}
 
moins.onclick = function(e){
    operande_a = resultat.innerHTML;
    resultat.innerHTML = resultat.innerHTML +"-"
    operation= "-";
    resultat.innerHTML ="";
     
}
fois.onclick = function(e){
    operande_a = resultat.innerHTML;
    resultat.innerHTML = resultat.innerHTML + "*";
    operation= "*";
    resultat.innerHTML ="";
}
division.onclick = function(e){
    operande_a = resultat.innerHTML;
    resultat.innerHTML = resultat.innerHTML +"/"
    operation= "/";
    resultat.innerHTML ="";
}
egale.onclick = function(e){
    operande_b = resultat.innerHTML;
    operation.innerHTML = "="
    calcul();
}

function resetCalc() {
    resultat.innerHTML = " ";
}

function calcul(){
var res = 0;
switch(operation){
    case "+":
        res = parseFloat(operande_a) + parseFloat(operande_b);
        break;
         
    case "-":
        res = parseFloat(operande_a) - parseFloat(operande_b);
        break;
         
    case "*":
        res = parseFloat(operande_a) * parseFloat(operande_b);
        break;
         
    case "/":
        res = parseFloat(operande_a) / parseFloat(operande_b);
        break;
     
        defaut:
            break;
}
resultat.innerHTML = res;
}
}