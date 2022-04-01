function createBoardGenius(input) {
    console.log(input)
    const main = document.querySelector("main");
    const conteiner = document.createElement('section');
    conteiner.classList.add('board');

    conteiner.innerHTML = `
    <div class='button-game button--green'></div>
    <div class='button-game button--yellow'></div>
    <div class='button-game button--red'></div>
    <div class='button-game button--blue'></div>
    <div class='player'>${input}</div> 
    `
    main.appendChild(conteiner)
}
createBoardGenius()

function createModal() {
    const main = document.querySelector('main');

    const popUp = document.createElement('section');
    popUp.classList.add('popup');
    

    //id player tirar daqui
    popUp.innerHTML = `
        <div class="conteiner-modal">
            <div class="divLogo">
                <img src="/assets/imgs/pingo-i--logo.svg" class="logo--detalhe">
                <img src="/assets/imgs/logo.svg" alt="logo escrito genius" class="logo">
            </div> 
            <form class="inputsPlay">
                <input type="text" name="nome" id="nomePlayer"  placeholder="Qual é seu nome?">
                <button id="btnPlayer" class="inputsPlay btn--edit">Jogar</button>
            </form>
        </div>
    `

    main.appendChild(popUp)
}
createModal();

const button = document.querySelector("#btnPlayer");
button.addEventListener('click', (event) => {
    event.preventDefault()
    
    const popUp = document.querySelector('.popup');
    const input = document.querySelector("#nomePlayer").value;

    if (input === '') {
        console.log('erroo')
        console.log(input)

    } else {
        popUp.classList.add('hide')
       
        createBoardGenius(input)
    }
});

let main = document.getElementById('main')

function createRulesCard (){
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
    divContainer.classList.add('popup')
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
createRulesCard()
