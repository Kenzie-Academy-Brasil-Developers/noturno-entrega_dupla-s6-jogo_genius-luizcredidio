function createBoardGenius(input) {   
    const main = document.querySelector("main");
    const conteiner = document.createElement('section');
    conteiner.classList.add('board');

    conteiner.innerHTML = `
    <div>
        <div class='button-game'>
            <div class='button--green'></div>
            <div class='button--yellow'></div>
            <div class='button--red'></div>
            <div class='button--blue'></div>
        </div>
        <img class='base__game--img'src ="./assets/imgs/base.svg" alt="jogo Genius">
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
}

function btnJogar() {
        const button = document.querySelector("#btnPlayer");

        button.addEventListener('click', (event) => {
        event.preventDefault();
            
        const popUp = document.querySelector('.popup');
        const input = document.querySelector("#nomePlayer").value;

        // console.log(conteinerBoard);
        if (input === '') {
            console.log('erro');
            console.log(input);

        } else {
            popUp.classList.add('hide');        
            goToRulesCard()
            
        }
    });
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

function btnAvancar() {
    const buttonAvn = document.querySelector(".cr_btn--avançar");
    const input = document.querySelector("#nomePlayer").value;
   

    buttonAvn.addEventListener('click', (event) => {
        event.preventDefault();

        const divContainer = document.querySelector('.containerRules');
        divContainer.classList.add('hide');
        createBoardGenius(input);
    })
}

function createBoardGenius(input) {
   
    const main = document.querySelector("main");
    const conteiner = document.createElement('section');
    conteiner.classList.add('board');

    conteiner.innerHTML = `
    <div>
        <div class='button-game'>
            <div class='button button--green'></div>
            <div class='button button--yellow'></div>
            <div class='button button--red'></div>
            <div class='button button--blue'></div>
        </div>
        // <img class='base__game--img'src ="./assets/imgs/pingo-i--logo.svg" alt="jogo Genius">
        
        <div class='player'>${input}</div> 
    </div>
    `
    main.appendChild(conteiner);
}

function goToRulesCard(){
    createRulesCard()
    btnAvancar()
}
    
function gameFlow(){
    createModal()
    btnJogar()
}

gameFlow()