/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function bissexto(){
    
    var ano = parseInt(document.querySelector("#ano").value);
    var resultado= parseFloat(document.querySelector("#resultado").value);
    
    if ((ano % 4 === 0) && ((ano % 100 !== 0) || (ano % 400 === 0))) {
        resultado="Ano Bissexto";
    }else{ resultado="O ano não é bissexto";
}
document.querySelector("#resultado").value=resultado;
}