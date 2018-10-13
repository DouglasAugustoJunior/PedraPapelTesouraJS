let jogadorEscolha = 0,computadorEscolha = 0,mensagem = 'Mensagem:',jogadorPts=0,computadorPts=0;

function jogar(escolha){
    document.getElementById("mensagens").innerHTML = 'Mensagem:';
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor(Math.random()*3)+1; // número randomico de 1 a 3
    
    //1 - Pedra  |  2 - Papel  |  3 - Tesoura
    if (jogadorEscolha==computadorEscolha){
        mensagem = 'Mensagem: Empate'; // empate
    }else if((jogadorEscolha==1) && (computadorEscolha==2)){
        mensagem = 'Mensagem: Computador venceu'; // computador venceu
        computadorPts++;
    }else if((jogadorEscolha==1) && (computadorEscolha==3)){
        mensagem = 'Mensagem: Jogador venceu'; // jogador venceu
        jogadorPts++;
    }else if((jogadorEscolha==2) && (computadorEscolha==1)){
        mensagem = 'Mensagem: Jogador venceu'; // jogador venceu
        jogadorPts++;
    }else if((jogadorEscolha==2) && (computadorEscolha==3)){
        mensagem = 'Mensagem: Computador venceu'; // computador venceu
        computadorPts++;
    }else if((jogadorEscolha==3) && (computadorEscolha==1)){
        mensagem = 'Mensagem: Computador venceu'; // computador venceu
        computadorPts++;
    }else if((jogadorEscolha==3) && (computadorEscolha==2)){
        mensagem = 'Mensagem: Jogador venceu'; // jogador venceu
        jogadorPts++;
    }

    for (let i = 1;i<=3;i++){
        document.getElementById("jogador-escolha-"+i).classList.remove('selecionado');
        document.getElementById("computador-escolha-"+i).classList.remove('selecionado');
    }// remove seleções

    document.getElementById("jogador-escolha-"+jogadorEscolha).classList.add('selecionado'); //seleção do jogador
    document.getElementById("computador-escolha-"+computadorEscolha).classList.add('selecionado'); // seleção do computador
    document.getElementById("jogador-pontos").innerHTML = jogadorPts; // pontos do jogador
    document.getElementById("computador-pontos").innerHTML = computadorPts; // pontos do computador
    document.getElementById("mensagens").innerHTML = mensagem; // mensagem
}