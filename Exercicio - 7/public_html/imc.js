/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function imc(){
    var n1 = parseFloat(document.querySelector("#peso").value);
    var n2 = parseFloat(document.querySelector("#altura").value);
    var imc=n1/(n2*n2);
    var result = parseFloat(imc.toFixed(2));
    document.querySelector("#resultado").value=result;
     if(result<18.5){
        alert("Abaixo do Peso");
    }else if((result>=18.6) && (result<25)){
        alert("Peso Ideal. Parabéns!");
    }else if((result>=25 && result<30)){
        alert("Levemente acima do peso!");
    }else if((result>=30 && result<35)){
        alert("Obesidade Grau 1!");
    }else if((result>=35) && (result<40)){
        alert("Obesidade Grau 2! Severa");
    }else if(result>40){
        alert("Obesidade Grau 3! Morbida");
    }
    
}

