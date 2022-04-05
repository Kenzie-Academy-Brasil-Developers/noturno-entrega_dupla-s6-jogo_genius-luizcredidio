let inputName = ""

function createBoardGenius(input) {
    inputName = input
    const main = document.querySelector("main");
    const conteiner = document.createElement('section');
    conteiner.classList.add('board');

    conteiner.innerHTML = `
    <div>
        <div class='button-game'>
            <div class='button button--Green btn--edit-color'></div>
            <div class='button button--Yellow btn--edit-color'></div>
            <div class='button button--Red btn--edit-color'></div>
            <div class='button button--Blue btn--edit-color'></div>
        </div>
        <img class='base__game--img'src ="./assets/imgs/pingo-i--logo.svg" alt="jogo Genius">
        <div class='player'>${input}</div> 
    </div>
    `
    
    main.appendChild(conteiner);
}

function createModal() {
    const main = document.querySelector('main');

    const popUp = document.createElement('section');
    popUp.classList.add('popup');
    
    popUp.innerHTML = `
        <div class="conteiner-modal">
            <div class="divLogo">
                <img src="/assets/imgs/pingo-i--logo.svg" class="logo--detalhe">
                <img src="/assets/imgs/logo.svg" alt="logo escrito genius" class="logo">
            </div> 
            <form class="inputsPlay">
                <input type="text" name="nome" id="nomePlayer" maxlength="5" placeholder="Qual é seu nome?">
                <button id="btnPlayer" class="inputsPlay btn--edit">Jogar</button>
            </form>
        </div>
    `

    main.appendChild(popUp);
    btnJogar()
}

function createRulesCard (){
    const main = document.querySelector('main');
    
    let divContainer = document.createElement("div")
    let divCard = document.createElement("div")
    let boaSorte = document.createElement("h2")
    let titleRules = document.createElement("h2")
    let rulesText = document.createElement('p')
    let btn = document.createElement('button')
    let lbl = document.createTextNode('Avançar')

    btn.setAttribute("type",'button')
    btn.classList.add('cr_btn--avançar')
    boaSorte.classList.add('cr_boaSorte')
    divContainer.classList.add('containerRules')
    divCard.classList.add("cr_rulesCard")
    titleRules.classList.add('cr_titleRules')
    rulesText.classList.add('cr_rulesText')

    titleRules.innerText = "Regras do Genius"
    rulesText.innerText = "Observe a sequência de cores e espere a sua vez de jogar, quando for sua vez uma mensagem irá aparecer. Clique nas cores de acordo com a sequência mostrada anteriormente. A cada rodada a quantidade de cores da sequência aumenta."
    boaSorte.innerText = "Boa Sorte!"

    btn.appendChild(lbl)
    divCard.appendChild(titleRules)
    divCard.appendChild(rulesText)
    divCard.appendChild(boaSorte)
    divContainer.appendChild(divCard)
    divContainer.appendChild(btn)
    main.appendChild(divContainer)
    
}

function btnJogar() {
    const button = document.querySelector("#btnPlayer");

    button.addEventListener('click', (event) => {
    event.preventDefault();
        
    const popUp = document.querySelector('.popup');
    const input = document.querySelector("#nomePlayer").value;
    inputInicial = input
    if (input === '') {
        console.log('erro');

    } else {
        popUp.classList.add('hide');        
        createRulesCard()
        btnAvancar()
    }
});
}

function btnAvancar() {
    const buttonAvn = document.querySelector(".cr_btn--avançar");
    const input = document.querySelector("#nomePlayer").value;
   

    buttonAvn.addEventListener('click', (event) => {
        event.preventDefault();

        const divContainer = document.querySelector('.containerRules');
        divContainer.classList.add('hide');
        createBoardGenius(input);
        iniciarJogo();
    })
}

// function clickComAnimacao(){
//     const botoes = document.querySelectorAll('.button')
    
//     botoes.forEach((botao) => {
//         botao.addEventListener('click', (event) => {
//             const corAtual = botao.classList[1].split('-')[2]
            
//             botao.classList.add(`animation${corAtual}`)
//             setTimeout(() => {
//                 botao.classList.remove(`animation${corAtual}`)
//             }, 500)
//         })
//     })
// }

createModal()
let inputInicial
let jogadasPc = [];
let jogadasPlayer = [];
const popUp = document.createElement('section');
let contador = 0;


function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function animacao(button, cor) {
    button.classList.add(`animation${cor}`);
    setTimeout(() => {
        button.classList.remove(`animation${cor}`);
    }, 500)
}

function animarBtn(botao, cor) {
    setTimeout(() => {
        animacao(botao, cor)
    }, 1000)
}

function gerarAnimacaoBotao() {
    const numeroRandom = randomNumbers(0, 4);

    const botao = document.querySelectorAll('.button')[numeroRandom];
    const corBotao = botao.classList[1].split('-')[2];

    jogadasPc.push(botao)
    

    let countRepet = 0;

    const intervaloAnimacao = setInterval(() => {
        if (jogadasPc.length > 0) {

            setTimeout(() => {
                if (countRepet < jogadasPc.length) {
                    const botaoAtual = jogadasPc[countRepet];
                    const corAtual = botaoAtual.classList[1].split('-')[2];

                    animarBtn(botaoAtual, corAtual);
                    countRepet++
                } else {
                    countRepet = 0;
                    clearInterval(intervaloAnimacao);
                }
            }, 500)
        } else {
            animarBtn(botao, corBotao);
            clearInterval(intervaloAnimacao);

        }
    }, 1000)
}

function adicionarEventoBotoes() {
    let contador = 0
    const botoes = document.querySelectorAll('.button');
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', (event) => {
            const botaoClicado = event.target;
            const corBotaoClicado = event.target.classList[1].split('-')[2];
            jogadasPlayer.push(botaoClicado);
            
            
            

            

            if (perdeu()) {
                const boardGenius = document.querySelector('.board')
                boardGenius.classList.add('hide')
                const main = document.querySelector('main');
                popUp.classList.add('popup-final');
                popUp.classList.remove('hide')
                
                popUp.innerHTML = `
                        <div    class="conteiner-final"> 
                        <h2     class="TituloGameOver">Game Over</h2>
                        <h2     class="rodadas">Rodadas ${contador}</h2>
                        <button id="JogarNovamente" class="inputsPlay btn--edit">Jogar Novamente</button>
                        
                        </div>
                    `
                main.appendChild(popUp)
                const buttonJogarNovamente = document.querySelector("#JogarNovamente");
                buttonJogarNovamente.addEventListener('click', () => {
                    main.innerHTML = ""
                    createBoardGenius(inputName)
                    // const containerFim = document.querySelector('.popup-final')
                    // boardGenius.classList.remove('hide')
                    // popUp.classList.add("hide")
                    
                    iniciarJogo()
                    contador = 0
                })
            } else if (jogadasPlayer.length === jogadasPc.length) {
                jogadasPlayer = [];
                gerarAnimacaoBotao()
                console.log('tudo certo');
                contador++
            }
        })
    }
}

function perdeu() {
    console.log(jogadasPc)
    console.log(jogadasPlayer)
   
    for (let i = 0; i < jogadasPlayer.length; i++) {
        const botao = jogadasPc[i];
        if (jogadasPlayer[i] !== botao) {
            return true;
        }        
    }
    return false;
}

function iniciarJogo() {
    jogadasPlayer = [];
    jogadasPc = []
    // clickComAnimacao();
    gerarAnimacaoBotao();
    adicionarEventoBotoes();
}