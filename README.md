
#[Douglas Augusto](http://github.com/DouglasAugustoJunior)- Outros projetos. # 
 
![VERSÃO DO SW](https://img.shields.io/badge/Version-1.0-blue.svg)
 
![LINGUAGEM FINALIDADE](https://img.shields.io/badge/JavaScript-game-orange.svg)
 
O **Pedra Papel Tesoura** é um projeto simples que utilizei para aprimorar meus conhecimentos em JS.

![Imagem](https://github.com/DouglasAugustoJunior/)

Desenvolvido em HTML5,CSS3 e JS, ele traz diversas situações interessantes para utilizar diversos recursos.
 
## Interação com o usuário
 
O evento hover:

        ul#jogador-escolha li a:hover, ul#jogador-escolha li a.selecionado, ul#computador-escolha li a.selecionado{ /* quando passar o mouse */
        opacity: 1; /* 100% de opacidade */
    }

Mensagens:

document.getElementById("mensagens").innerHTML = mensagem; // mensagem

 
##Verificação do vencedor
 
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


 
## Front-end

    #titulo{
        color: #fff;
        text-align: center;
    }
    
    #placar{
        display: flex; /* deixa todo mundo na horizontal */
        align-items: center; /* alinha todos os itens no centro */
        justify-content: center; /* Alinha no centro da tela */
    }
    
    #versus{
        width: 70px; /* largura para separar jogadores */
        font-size: 40px; /* tamanho da fonte */
        text-align: center;
    }
    
    #jogador, #computador{
        position: relative;
        flex-grow: 1; /* divide a tela para ambos */
        border-radius: 5px; /* borda arredondada */
        width: 200px;
        padding: 20px;
        color: #fff; /* FOnte branca */
    }
    
    #jogador{
        background-color: crimson;
    }
    
    #computador{
        background-color: dodgerblue;
    }
 
Para mais informações acesse [meus repositórios](http://github.com/DouglasAugustoJunior).