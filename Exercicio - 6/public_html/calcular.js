/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcular(){
    var n1 = parseFloat(document.querySelector("#n1").value);
    var n2 = parseFloat(document.querySelector("#n2").value);
    var operacao = document.querySelector("#operacao").value;
    
    switch (operacao) {
        case "Adicao":
            resultado= n1 + n2;
            
        break;
         
        case "Subtracao":
            resultado= n1 - n2;
            
        break;
        
        case "Multiplicacao":
            resultado= n1 * n2;
            
        break;
        
        case "Divisao":
            resultado= n1 / n2;
            
        break;
        
    }
    document.querySelector("#resultado").value=resultado;
}