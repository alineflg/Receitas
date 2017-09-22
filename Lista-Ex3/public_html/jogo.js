/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var controle;
controle = 0;
var i;
i=0;

function jogo(id_jogada){
       
    if(controle ===0){
       document.getElementById(id_jogada).value =  "X";
       verifica();
       controle =1;   
   }
   else if(controle ===1){
        document.getElementById(id_jogada).value =  "O";
        verifica();
       controle =0; 
   }  
 }
 
function limpar(){
    i=0;
    document.getElementById(100).value =  ' ' ;
    document.getElementById(101).value =  ' ' ;
    document.getElementById(102).value =  ' ' ;
    document.getElementById(200).value =  ' ' ;
    document.getElementById(201).value =  ' ' ;
    document.getElementById(202).value =  ' ' ;
    document.getElementById(300).value =  ' ' ;
    document.getElementById(301).value =  ' ' ;
    document.getElementById(302).value =  ' ' ;
}
 
 function verifica(){
     //horizontal
     if((document.getElementById(100).value ===  'X') && (document.getElementById(101).value ===  'X')&& (document.getElementById(102).value ===  'X')){
         alert("Jogador X ganhou");
     }
    
      if((document.getElementById(200).value ===  'X') && (document.getElementById(201).value ===  'X')&& (document.getElementById(202).value ===  'X')){
         alert("Jogador X ganhou");
     }  
     if((document.getElementById(300).value ===  'X') && (document.getElementById(301).value ===  'X')&& (document.getElementById(202).value ===  'X')){
         alert("Jogador X ganhou");
     } 
       if((document.getElementById(100).value ===  'X') && (document.getElementById(101).value ===  'X')&& (document.getElementById(102).value ===  'X')){
         alert("Jogador X ganhou");
     } 
     //diagonal
      if((document.getElementById(100).value ===  'X') && (document.getElementById(201).value ===  'X')&& (document.getElementById(302).value ===  'X')){
         alert("Jogador X ganhou");
      } 
      if((document.getElementById(102).value ===  'X') && (document.getElementById(201).value ===  'X')&& (document.getElementById(300).value ===  'X')){
         alert("Jogador X ganhou");
     } 
     //vertical
       if((document.getElementById(100).value ===  'X') && (document.getElementById(200).value ===  'X')&& (document.getElementById(300).value ===  'X')){
         alert("Jogador X ganhou");
     } 
      if((document.getElementById(101).value ===  'X') && (document.getElementById(201).value ===  'X')&& (document.getElementById(302).value ===  'X')){
         alert("Jogador X ganhou");
     }
      if((document.getElementById(102).value ===  'X') && (document.getElementById(202).value ===  'X')&& (document.getElementById(302).value ===  'X')){
         alert("Jogador X ganhou");
     } 
     // para zero
     //horizontal
     if((document.getElementById(100).value ===  'O') && (document.getElementById(101).value ===  'O')&& (document.getElementById(102).value ===  'O')){
         alert("Jogador O ganhou");
     } 
      if((document.getElementById(200).value ===  'O') && (document.getElementById(201).value ===  'O')&& (document.getElementById(202).value ===  'O')){
         alert("Jogador O ganhou");
     } 
      if((document.getElementById(300).value ===  'O') && (document.getElementById(301).value ===  'O')&& (document.getElementById(202).value ===  'O')){
         alert("Jogador O ganhou");
     } 
       if((document.getElementById(100).value ===  'O') && (document.getElementById(101).value ===  'O')&& (document.getElementById(102).value ===  'O')){
         alert("Jogador O ganhou");
     }
     //diagonal
      if((document.getElementById(100).value ===  'O') && (document.getElementById(201).value ===  'O')&& (document.getElementById(302).value ===  'O')){
         alert("Jogador O ganhou");
      } 
     if((document.getElementById(102).value ===  'O') && (document.getElementById(201).value ===  'O')&& (document.getElementById(300).value ===  'O')){
         alert("Jogador O ganhou");
     } 
     //vertical
       if((document.getElementById(100).value ===  'O') && (document.getElementById(200).value ===  'O')&& (document.getElementById(300).value ===  'O')){
         alert("Jogador O ganhou");
     }
      if((document.getElementById(101).value ===  'O') && (document.getElementById(201).value ===  'O')&& (document.getElementById(301).value ===  'O')){
         alert("Jogador O ganhou");
     } 
      if((document.getElementById(102).value ===  'O') && (document.getElementById(202).value ===  'O')&& (document.getElementById(302).value ===  'O')){
         alert("Jogador O ganhou");
     } else{
         i++;
     }
     if(i===8){
         alert("Empate");
     }
 }
      
      