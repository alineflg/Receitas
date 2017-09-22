/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function piramide(){
    
   var i;
   var j;
    var count = parseInt(document.querySelector("#valor").value);
    if (count <= 0 || count >9) {
        alert("ERRO");
        
    }else{
        for (var i = 1; i <= count; i++) {
            for(var j = 0; j < i; j++){
                 document.write(i);
                }
                document.write("<br>");
            }
            
        }
        
   
    }
  
    
   
