function humor(){
    
    var nome = String(document.querySelector("#nome").value);
    var resultado = String(document.querySelector("#resultado").value);
    var opcao = document.querySelector("#opcao").value;
    var imagem
    
    switch (opcao) {
        case "Alegre":
            
            document.imagem.src='imagem/alegre.png';                  
            resultado= nome+"<br> Seja bem-vindo "+" !<br>"+ "Que seu dia seja abençoado por Deus.";
            document.querySelector("#resultado").innerHTML=resultado;
        break;
        
        case "Triste":
            
             document.imagem.src='imagem/triste.png';                  
            resultado= nome+"<br> Seja bem-vindo "+" !<br>"+ "Não fique triste, saudade existe para quem sabe amar.";
            document.querySelector("#resultado").innerHTML=resultado;
            
        break;
        case "Bravo":
            
             document.imagem.src='imagem/bravo.png';                  
            resultado= nome+"<br> Seja bem-vindo "+" !<br>"+ "Não queira ser bravo, quando basta ser inteligente.";
            document.querySelector("#resultado").innerHTML=resultado;
        break;
        case "Assustado":
            
             document.imagem.src='imagem/assustado.png';                  
            resultado= nome+"<br> Seja bem-vindo "+" !<br>"+ "Se você não está assustado, então você não está se arriscando. E se você não esta se arriscando, então o que você esta fazendo?";
            document.querySelector("#resultado").innerHTML=resultado;
        break;
        case "Confuso":
            
             document.imagem.src='imagem/confuso.png';                  
            resultado= nome+"<br> Seja bem-vindo "+" !<br>"+ "Por sua graça não me sinto culpado, Com sua direção não me sinto confuso e por sua soberania não sinto medo";
            document.querySelector("#resultado").innerHTML=resultado;
        break;
    }
 

}
  
    
   
