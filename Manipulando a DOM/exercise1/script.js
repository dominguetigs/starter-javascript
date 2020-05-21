/**
 * Exercício 1
 * 
 * Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
 * vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
 * aparecer na tela.
 */


var bodyElement = document.querySelector('body');
var buttonElement = criaBotao();
var containerElement = criaContainer();

// Adiciona Event listener de click no botão
buttonElement.addEventListener('click', function () {
    var divElement = criaDivQuadrada();
    containerElement.appendChild(divElement);
});

// Adiciona os elementos botão e container dentro de body
bodyElement.append(buttonElement, containerElement);

// Cria botão
function criaBotao() {
    var buttonElement = document.createElement('button');
    buttonElement.setAttribute('type', 'button');

    // Define texto do botão
    var buttonText = document.createTextNode('Adicionar');

    // Adiciona texto para o botão
    buttonElement.appendChild(buttonText);

    return buttonElement;
}

// Cria elemento container aonde serão inseridos as divs em formato quadrado
function criaContainer() {
    var containerElement = document.createElement('div');
    containerElement.setAttribute('class', 'container');
    containerElement.style.margin = '10px 0';

    return containerElement;
}

// Cria elemento div em formato quadrado e fundo vermelho
function criaDivQuadrada() {
    var divElement = document.createElement('div');
    divElement.style.width = '100px';
    divElement.style.height = '100px';
    divElement.style.backgroundColor = 'red';

    return divElement;
}
