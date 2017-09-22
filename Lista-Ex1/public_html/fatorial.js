/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function fatorial(){
    
    var i = 1 ;
    var fat = 1;
    var valor = parseFloat(document.querySelector("#valor").value);
     while( i <= valor ){
      var  fat = fat * i;
      i++;
    
    }
  
    document.querySelector("#resultado").value=fat;
   
}