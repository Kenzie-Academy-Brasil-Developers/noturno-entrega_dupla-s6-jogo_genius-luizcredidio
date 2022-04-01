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
createModal();

const button = document.querySelector("#btnPlayer");
button.addEventListener('click', (event) => {
    event.preventDefault();
    
    const popUp = document.querySelector('.popup');
    const input = document.querySelector("#nomePlayer").value;

    if (input === '') {
        console.log('erroo');
        console.log(input);

    } else {
        popUp.classList.add('hide');        
       
        createBoardGenius(input);
    }
});
