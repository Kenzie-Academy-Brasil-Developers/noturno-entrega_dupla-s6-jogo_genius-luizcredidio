const main = document.querySelector('main');



function createModal() {
    const conteiner = document.createElement('div');
    conteiner.classList.add('conteiner');

    const detalheLogo = document.createElement('img')
    detalheLogo.src = './assets/imgs/pingo-i--logo.svg';
    detalheLogo.classList.add('modal-logo--detalhe')

    const logo = document.createElement('img')
    logo.src = './assets/imgs/logo.svg';
    logo.classList.add('modal-logo')

    const inputNamePlayer = document.createElement('input');
    inputNamePlayer.id = 'input--name'
    inputNamePlayer.placeholder = 'Qual o seu nome?'

    const buttonPlay = document.createElement('button');
    buttonPlay.classList.add('buttons')
    buttonPlay.textContent = 'JOGAR'

    conteiner.appendChild(detalheLogo);
    conteiner.appendChild(logo);
    conteiner.appendChild(inputNamePlayer);
    conteiner.appendChild(buttonPlay);
    main.appendChild(conteiner)

}

createModal()