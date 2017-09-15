/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function imc(){
    var n1 = parseFloat(document.querySelector("#peso").value);
    var n2 = parseFloat(document.querySelector("#altura").value);
    var result=n1/(n2*n2);
    
    document.querySelector("#resultado").value=result;
}

